# React Features

## JSX
JSX lets us write HTML-like syntax inside JavaScript. It makes component UI easier to read and keeps markup close to the logic that describes it.

## Components
Components are reusable UI building blocks. In this project, `EmployeeCard`, `Avatar`, `StatusBadge`, and `InfoRow` each have a focused responsibility.

## Reusability
The same `EmployeeCard` component is rendered for every employee. Only the props change, so we do not need five separate card components.

## One-way data flow
Data flows from parent components to child components through props. In this project, `App` sends `employees` to `EmployeeDirectory`, which sends individual employee values to `EmployeeCard`.

## Declarative UI
We describe what should appear for the current data. For example, `StatusBadge` chooses its output based on the `status` prop rather than manually changing DOM elements.

## Composition
Components can be combined to create larger UI structures. `EmployeeCard` composes `Avatar`, `StatusBadge`, `DepartmentBadge`, and `InfoRow` components.
