import fs from "fs";
import path from "path";
import xmlbuilder from "xmlbuilder";
import routes from "./routes.json" assert { type: "json" }; // Asegúrate de que routes.json esté en el mismo directorio

const root = xmlbuilder.create("urlset", {
  version: "1.0",
  encoding: "UTF-8",
});
root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

routes.forEach((route) => {
  if (route.path) {
    const url = root.ele("url");
    url.ele("loc", `https://mapach.es/${route.path}`);
  }
});

const xml = root.end({ pretty: true });
const __dirname = path
  .dirname(decodeURI(new URL(import.meta.url).pathname))
  .substring(1);
const outputPath = path.resolve(__dirname, "public", "sitemap.xml");

// Crear el directorio si no existe
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, xml, "utf8");
console.log("Sitemap generado en", outputPath);
