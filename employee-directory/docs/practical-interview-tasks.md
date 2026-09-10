# Practical Interview Tasks

## Welcome
```jsx
function Welcome({ name }) { return <h1>Welcome, {name}</h1>; }
```

## RoleBadge
```jsx
function RoleBadge({ role }) { return <span>{role}</span>; }
```

## UserProfile destructuring
```jsx
function UserProfile({ name, role }) { return <p>{name} - {role}</p>; }
```

## ProductCard defaults
```jsx
function ProductCard({ name = "Unknown Product", price = 0 }) { return <article>{name} - ₹{price}</article>; }
```

## Layout children
```jsx
function Layout({ children }) { return <main>{children}</main>; }
```

## Button children/rest props
```jsx
function Button({ children, ...restProps }) { return <button {...restProps}>{children}</button>; }
```

## Employee object destructuring
```jsx
const employee = { name: "Priya", role: "Developer" };
const { name, role } = employee;
```

## Department map
```jsx
const departments = ["Engineering", "Sales", "Finance"];
departments.map((department) => <li key={department}>{department}</li>);
```

## Availability conditional
```jsx
function AvailabilityMessage({ status }) {
  return <p>{status === "Active" ? "Available" : "Currently unavailable"}</p>;
}
```

## Full props flow
```text
App → employees → EmployeeDirectory → employee fields → EmployeeCard → smaller props → child components
```

## Fixed EmployeeCard
Use parameter destructuring and pass each required employee field explicitly rather than passing unrelated data or using undefined variable names.
