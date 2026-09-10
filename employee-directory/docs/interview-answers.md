# Interview Preparation — Answers in Project Context

## A. React internals
**What is React?** React is a JavaScript library for building user interfaces using reusable components.

**Real DOM vs Virtual DOM:** The Real DOM is the browser's actual document tree. The Virtual DOM is React's JavaScript representation used to compare rendered UI and determine necessary DOM updates.

**What is reconciliation?** Reconciliation is React comparing previous and next rendered output and updating the required DOM parts.

**Why is React declarative?** We describe the UI for the current data, and React handles the DOM updates.

## B. React features and JSX
JSX lets us write HTML-like syntax in JavaScript. Components make UI reusable. One-way data flow means parent-to-child data moves through props. Composition means building larger components from smaller ones.

## C. Components and architecture
A functional component is a JavaScript function that returns JSX. In this project, `EmployeeCard` is responsible for one employee while smaller components handle avatar, status, and information rows.

## D. Props
Props are inputs passed from a parent to a child. They are read-only from the child's perspective. For example, `EmployeeDirectory` receives the employees array as a prop.

## E. Destructuring
Parameter destructuring extracts props directly in the function parameter. Internal destructuring first receives `props` and then extracts selected properties. Nested destructuring can extract values from objects such as `company.address.city`.

## F. Advanced props
`children` lets a component render content supplied between its tags. Default parameters provide fallback values. Rest props collect additional properties, and spread passes them to another element.

## G. Vite
Vite provides a fast development server and build tool for frontend applications. It serves source modules during development and produces an optimized production build.
