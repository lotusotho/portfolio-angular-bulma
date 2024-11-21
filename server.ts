import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import compression from 'compression';

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

  // Servir archivos estáticos desde el directorio 'compressed'
  server.use(
    '/static',
    express.static(path.join(__dirname, 'compressed'), {
      setHeaders: (res, path) => {
        if (path.endsWith('.gz')) {
          res.setHeader('Content-Encoding', 'gzip');
          if (path.endsWith('.js.gz')) {
            res.setHeader('Content-Type', 'application/javascript');
          } else if (path.endsWith('.css.gz')) {
            res.setHeader('Content-Type', 'text/css');
          }
        }
      },
    })
  );

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
