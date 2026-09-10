# Employee Directory — React Fundamentals Assignment

A responsive static Employee Directory built with React, Vite, JSX, functional components, props, props destructuring, children, conditional rendering, `.map()`, and CSS.

## Technologies
- React
- Vite
- JSX
- CSS

## Run the project
```bash
npm install
npm run dev
```
Then open the local URL shown by Vite.

## Build
```bash
npm run build
```

## Folder structure
```text
employee-directory/
├── docs/
│   ├── react-internals.md
│   ├── react-features.md
│   ├── jsx-practice.md
│   ├── component-plan.md
│   ├── default-props-notes.md
│   ├── children-prop-notes.md
│   ├── reusability-notes.md
│   ├── props-contract.md
│   ├── testing-checklist.md
│   ├── interview-answers.md
│   └── practical-interview-tasks.md
├── src/
│   ├── components/
│   ├── data/
│   ├── docs/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Component hierarchy
```text
App
├── PageLayout
│   ├── Header
│   ├── MainContent
│   │   └── EmployeeDirectory
│   │       └── EmployeeCard (repeated)
│   │           ├── Avatar
│   │           ├── StatusBadge
│   │           ├── DepartmentBadge
│   │           ├── InfoRow
│   │           └── EmployeeMessage
│   └── Footer
```

## Props flow
```text
App
  ↓ employees prop
EmployeeDirectory
  ↓ individual employee values
EmployeeCard
  ↓ smaller props
Avatar / StatusBadge / InfoRow / DepartmentBadge / EmployeeMessage
```

## Features demonstrated
- JSX syntax and semantic HTML
- Functional components and component composition
- Props and props destructuring
- Nested object destructuring
- Default prop values
- `children` prop
- Rest props and prop spreading
- Conditional rendering with props
- `.map()` with stable `employee.id` keys
- Responsive CSS Grid/Flexbox
- Hover and keyboard focus states

## Scope limitations
This assignment intentionally uses static data only. It does not use hooks, state, APIs, JSON Server, backend integration, routing, Context API, class components, state-management libraries, or UI component libraries.

## Screenshots
Add mobile and desktop screenshots after running the project locally.
