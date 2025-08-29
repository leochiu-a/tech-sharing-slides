import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { parse as parseYaml } from "yaml";
import { fileURLToPath } from "node:url";

// Define the structure for slide frontmatter
interface SlideFrontmatter {
  theme?: string;
  background?: string;
  title?: string;
  info?: string;
  class?: string;
  drawings?: {
    persist?: boolean;
  };
  transition?: string;
  mdc?: boolean;
  seoMeta?: {
    ogImage?: string;
  };
  [key: string]: any;
}

// Define the structure for slide information
interface SlideInfo {
  path: string;
  frontmatter: SlideFrontmatter;
  content: string;
}

// Get the frontmatter and content of a single slide
export function getSlideFrontmatter(slidePath: string): SlideInfo | null {
  try {
    const fullPath = join(
      dirname(fileURLToPath(import.meta.url)),
      "..",
      "..",
      "slides",
      slidePath,
      "slides.md"
    );

    // Check if the slide file exists
    if (!existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }

    const content = readFileSync(fullPath, "utf8");

    // Parse frontmatter (YAML format between ---)
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);

    if (!frontmatterMatch) {
      console.warn(`Frontmatter not found in ${slidePath}/slides.md`);
      return null;
    }

    const frontmatterYaml = frontmatterMatch[1];
    const frontmatter = parseYaml(frontmatterYaml) as SlideFrontmatter;

    return {
      path: slidePath,
      frontmatter,
      content: content.replace(frontmatterMatch[0], ""), // Remove frontmatter section
    };
  } catch (error) {
    console.error(`Error parsing frontmatter for ${slidePath}:`, error);
    return null;
  }
}

// Get the frontmatter and content for all slides in the slides directory
export function getAllSlidesFrontmatter(): SlideInfo[] {
  const slidesDir = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "..",
    "slides"
  );

  // Check if the slides directory exists
  if (!existsSync(slidesDir)) {
    console.warn(`Slides directory not found: ${slidesDir}`);
    return [];
  }

  // Get all directories inside the slides directory
  const slideDirs = readdirSync(slidesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const slides: SlideInfo[] = [];

  // Collect slide info for each slide directory
  for (const slideDir of slideDirs) {
    const slideInfo = getSlideFrontmatter(slideDir);
    if (slideInfo) {
      slides.push(slideInfo);
    }
  }

  return slides;
}

// If this file is run directly, output all slides' frontmatter
if (import.meta.url === `file://${process.argv[1]}`) {
  const slides = getAllSlidesFrontmatter();
  console.log(JSON.stringify(slides, null, 2));
}
