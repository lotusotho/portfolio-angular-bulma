import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import compression from 'compression';
import xmlbuilder from 'xmlbuilder';
import { routes } from './src/app/app.routes';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Añadir middleware de compresión
  server.use(compression());

  // Middleware para servir archivos estáticos comprimidos
  server.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  });

  server.get('*.css', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });

  // Crear sitemap dinámico usando las rutas de Angular
  server.get('/sitemap.xml', (req, res) => {
    const root = xmlbuilder.create('urlset', {
      version: '1.0',
      encoding: 'UTF-8',
    });
    root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    // Iterar sobre las rutas definidas en Angular
    routes.forEach((route) => {
      if (route.path) {
        const url = root.ele('url');
        url.ele('loc', `https://mapach.es/${route.path}`);
      }
    });

    res.header('Content-Type', 'application/xml');
    res.send(root.end({ pretty: true }));
  });

  // Servir archivos estáticos desde `browser`
  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    })
  );

  // Rutas que usan el motor de Angular
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
