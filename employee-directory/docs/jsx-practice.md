# JSX Practice

## 1. Heading
```jsx
<h1>Mubina</h1>
```

## 2. Variable in JSX
```jsx
const department = "Engineering";
<p>Department: {department}</p>
```

## 3. Button class
```jsx
<button className="primary-button">View Employee</button>
```

## 4. Image with meaningful alt
```jsx
<img src="/employee.png" alt="Priya Sharma profile" />
```

## 5. Sibling elements
```jsx
<>
  <h2>Employee</h2>
  <p>Frontend Developer</p>
</>
```

## 6. Invalid JSX correction
Incorrect:
```text
## Employee
Department: Engineering
```

Correct JSX:
```jsx
<>
  <h2>Employee</h2>
  <p>Department: Engineering</p>
</>
```

`className` is used instead of the HTML `class` attribute because `class` is a JavaScript keyword and JSX follows JavaScript naming conventions. JSX elements also need valid closing syntax, such as `<p>Text</p>` or a self-closing element like `<img />`.
