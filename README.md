# ChartConfig

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

I want to create a design system component library similar to PrimeNG or Angular Material, but built with Angular and TailwindCSS as the base technologies.

📌 Goal:

Build reusable, customizable UI components (buttons, cards, modals, inputs, dropdowns, tables, etc.).

Ensure compatibility with Angular, and make the library's output portable or framework-agnostic enough to integrate with React and VueJS (e.g., via Web Components or Stencil).

🛠️ Tech Stack:

Angular (preferably standalone components)

TailwindCSS (for utility-first styling)

Component theming support

Accessibility (ARIA compliance)

Firebase for hosting, testing, and CI/CD integration

📦 Expected Deliverables:

A monorepo structure for scalable component development.

Each component should:

Be standalone, customizable, and documented.

Use TailwindCSS classes (no external CSS files).

Include responsive and dark mode support.

Have a storybook-like preview page or live playground.

Package output that can be used in Angular projects and exposed via Web Components for use in React/Vue.

A Firebase-hosted demo site for the component showcase and documentation.

🎯 Use cases:

Rapid frontend development across multiple frameworks.

Plug-and-play components for internal and client applications.

Please generate a starter workspace with:

A sample button, card, and modal component.

Tailwind setup with Angular.

Build & packaging support for publishing the components.

Firebase integration for CI/CD and hosting.
