# Portfolio Alejandro Ramos 

<a align="center" href="https://mapach.es" style="font-size: 2em">🦝 <b>MAPACH.ES</b>🦝</a>

Este es un proyecto de portafolio personal creado utilizando **Angular 18** y el framework de diseño **BulmaCSS**. El objetivo del proyecto es ofrecer una plataforma visualmente atractiva, rápida y responsive para mostrar habilidades, experiencia y proyectos personales de manera profesional.

## Tabla de Contenidos

- [Portfolio Alejandro Ramos](#portfolio-alejandro-ramos)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Acceso a la Web](#acceso-a-la-web)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Scripts Disponibles](#scripts-disponibles)
  - [Despliegue](#despliegue)
    - [Desarrollo Local](#desarrollo-local)
    - [Producción con SSR](#producción-con-ssr)
  - [Detalles Técnicos](#detalles-técnicos)
    - [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Estructura del Proyecto](#estructura-del-proyecto)

---

## Descripción del Proyecto

Este proyecto tiene como propósito:
- Mostrar información personal, experiencia laboral, habilidades y proyectos.
- Proveer una experiencia fluida mediante animaciones (usando **AOS**) y diseño moderno gracias a **BulmaCSS**.
- Soportar renderizado del lado del servidor (**SSR**) para mejorar la velocidad de carga y el SEO.

---
## Acceso a la Web
Se puede acceder de dos manera al portfolio:
1. <a href="https://mapach.es" style="font-size: 2em">mapach.es</a>
2. <a href="https://alejandroramos.vercel.app" style="font-size: 2em">alejandroramos.vercel.app</a>

---


## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **pnpm**
- **Angular CLI** (`pnpm install -g @angular/cli`)
- **Gulp CLI** (`pnpm install -g gulp`)

---

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/lotusotho/portfolio-angular-bulma.git
   cd portfolio-angular-bulma
   ```

2. **Instala las dependencias:**

   ```bash
   pnpm install
   ```

3. **Configura el proyecto si es necesario:**  
   Modifica archivos como `environment.ts` o `angular.json` según sea necesario para tu entorno.

---

## Scripts Disponibles

En el archivo `package.json`, hay varios scripts configurados para diferentes tareas:

- **`pnpm start`**  
  Inicia el servidor de desarrollo. El proyecto estará disponible en `http://localhost:4200`.

- **`pnpm run build`**  
  Construye la versión optimizada para producción.

- **`pnpm run postbuild`**  
  Verifica el código con lint y comprime los archivos de producción usando **Gulp**.

- **`pnpm run serve:ssr:portfolio-angular-bulma`**  
  Sirve la aplicación usando renderizado del lado del servidor (SSR).  

  **Nota:** Necesitas haber ejecutado `pnpm run build` previamente para generar los archivos en la carpeta `dist`.

- **`pnpm run serve:compressed`**  
  Inicia el servidor de desarrollo mientras observa los cambios y aplica compresión automática con **Gulp**.

- **`pnpm run lint`**  
  Ejecuta análisis estático del código con **Angular ESLint**.

---

## Despliegue

### Desarrollo Local
1. Para ejecutar la aplicación en un entorno de desarrollo:
   ```bash
   pnpm start
   ```
   Luego, abre tu navegador en [http://localhost:4200](http://localhost:4200).

### Producción con SSR
1. Construye la aplicación para producción:
   ```bash
   pnpm run build
   ```

2. Sirve la aplicación:
   ```bash
   pnpm run serve:ssr:portfolio-angular-bulma
   ```

3. Accede a la aplicación en [http://localhost:4000](http://localhost:4000).

---

## Detalles Técnicos

### Tecnologías Utilizadas
- **Angular 18**: Framework para construir aplicaciones web modernas.
- **BulmaCSS**: Framework CSS para diseño responsivo y atractivo.
- **AOS (Animate on Scroll)**: Librería para animaciones al hacer scroll.
- **SSR (Server-Side Rendering)**: Mejoras en SEO y tiempos de carga.

### Estructura del Proyecto
El código sigue la arquitectura modular de Angular:
- **`src/app`**: Contiene los componentes principales como Navbar, Home, Experience, etc.
- **`src/assets`**: Contiene imágenes, estilos y otros recursos estáticos.
- **`gulpfile.js`**: Configuración de tareas Gulp para compresión.
