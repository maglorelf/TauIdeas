/**
 * Static file server for SmartASP.NET Hub Deploy.
 * Serves the Astro-built `dist/` directory as a Node.js HTTP app.
 * SmartASP requires a process listening on process.env.PORT.
 */
import express from "express";
import { fileURLToPath } from "url";
import { dirname, extname, join } from "path";
import { existsSync, statSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist");
const port = process.env.PORT || 3000;

const app = express();

// Serve all static assets (CSS, JS, images, fonts, etc.)
app.use(
  express.static(distDir, {
    maxAge: "1y",
    etag: true,
  })
);

// Never rewrite file-like requests to HTML (e.g. /images/logo.png).
app.use((req, res, next) => {
  if (extname(req.path)) {
    return res.status(404).end();
  }
  next();
});

// For every other request try:
//  1. /path/index.html  (Astro writes one per route)
//  2. /404.html
app.use((req, res) => {
  const candidates = [
    join(distDir, req.path, "index.html"),
    join(distDir, req.path.replace(/\/$/, "") + ".html"),
    join(distDir, "404.html"),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return res.sendFile(candidate);
    }
  }

  res.status(404).sendFile(join(distDir, "404.html"));
});

app.listen(port, () => {
  console.log(`tauideas static server running on port ${port}`);
});
