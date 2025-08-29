import { Plugin } from "vite";
import { watch } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllSlidesFrontmatter } from "./getSlideFrontmatter.js";

export function slidesPlugin(): Plugin {
  const slidesDir = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "..",
    "slides"
  );

  return {
    name: "vite-plugin-slides",

    configureServer(server) {
      // Watch for changes in the slides directory
      const watcher = watch(
        slidesDir,
        { recursive: true },
        (eventType, filename) => {
          if (filename && filename.endsWith("slides.md")) {
            console.log(`🔄 Detected change in slides.md: ${filename}`);

            // Reload frontmatter
            try {
              const slides = getAllSlidesFrontmatter();
              console.log(
                "📊 Updated slides data:",
                slides.map((s) => ({
                  path: s.path,
                  title: s.frontmatter.title,
                  theme: s.frontmatter.theme,
                }))
              );

              // Trigger HMR update
              server.ws.send({
                type: "custom",
                event: "slides-updated",
                data: slides,
              });
            } catch (error) {
              console.error("❌ Error reading slides frontmatter:", error);
            }
          }
        }
      );

      // Clean up watcher when the server is closed
      server.httpServer?.once("close", () => {
        watcher.close();
      });
    },

    // Provide a virtual module to get slides data
    resolveId(id) {
      if (id === "virtual:slides-data") {
        return id;
      }
    },

    load(id) {
      if (id === "virtual:slides-data") {
        try {
          const slides = getAllSlidesFrontmatter();
          return `export const slidesData = ${JSON.stringify(slides, null, 2)};
export default slidesData;`;
        } catch (error) {
          console.error("Error loading slides data:", error);
          return `export const slidesData = [];
export default slidesData;`;
        }
      }
    },
  };
}
