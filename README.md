# Portfolio Alejandro Ramos

<h1 align="center">🦝 <b>MAPACH.ES</b> 🦝</h1>
<p align="center"><a href="https://mapach.es">MAPACH.ES</a></p>

---

This is a personal portfolio project created using **Angular 18** and the **BulmaCSS** design framework. The goal of the project is to provide a visually appealing, fast, and responsive platform to professionally showcase personal skills, experience, and projects.

## Table of Contents

- [Portfolio Alejandro Ramos](#portfolio-alejandro-ramos)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Website Access](#website-access)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Deployment](#deployment)
    - [Local Development](#local-development)
    - [Production with SSR](#production-with-ssr)
  - [Technical Details](#technical-details)
    - [Technologies Used](#technologies-used)
    - [Project Structure](#project-structure)

---

## Project Description

This project aims to:

* Showcase personal information, work experience, skills, and projects.
* Provide a smooth user experience through animations (using **AOS**) and modern design with **BulmaCSS**.
* Support server-side rendering (**SSR**) to enhance load speed and SEO.

---

## Website Access

The website can be accessed in the following way:

1. <a href="https://mapach.es">mapach.es</a>

---

## Prerequisites

Before getting started, make sure you have the following installed:

* **Node.js** (version 18 or higher)
* **pnpm**
* **Angular CLI** (`pnpm install -g @angular/cli`)
* **Gulp CLI** (`pnpm install -g gulp`)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lotusotho/portfolio-angular-bulma.git
   cd portfolio-angular-bulma
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure the project if needed:**
   Modify files like `environment.ts` or `angular.json` according to your environment.

---

## Available Scripts

In the `package.json` file, several scripts are configured for different tasks:

* **`pnpm start`**
  Starts the development server. The project will be available at `http://localhost:4200`.

* **`pnpm run build`**
  Builds the optimized version for production.

* **`pnpm run postbuild`**
  Lints the code and compresses production files using **Gulp**.

* **`pnpm run serve:ssr:portfolio-angular-bulma`**
  Serves the application using server-side rendering (SSR).

  **Note:** You must run `pnpm run build` beforehand to generate the files in the `dist` folder.

* **`pnpm run serve:compressed`**
  Starts the development server while watching for changes and automatically compresses using **Gulp**.

* **`pnpm run lint`**
  Runs static code analysis using **Angular ESLint**.

---

## Deployment

### Local Development

1. To run the application in a development environment:

   ```bash
   pnpm start
   ```

   Then open your browser at [http://localhost:4200](http://localhost:4200).

### Production with SSR

1. Build the application for production:

   ```bash
   pnpm run build
   ```

2. Serve the application:

   ```bash
   pnpm run serve:ssr:portfolio-angular-bulma
   ```

3. Access the application at [http://localhost:4000](http://localhost:4000).

---

## Technical Details

### Technologies Used

* **Angular 18**: Framework for building modern web applications.
* **BulmaCSS**: CSS framework for responsive and attractive design.
* **AOS (Animate on Scroll)**: Library for scroll-based animations.
* **SSR (Server-Side Rendering)**: Improves SEO and load times.

### Project Structure

The code follows Angular’s modular architecture:

* **`src/app`**: Contains main components such as Navbar, Home, Experience, etc.
* **`src/assets`**: Contains images, styles, and other static assets.
* **`gulpfile.js`**: Gulp task configuration for compression.