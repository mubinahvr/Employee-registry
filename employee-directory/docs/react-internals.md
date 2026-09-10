# React Internals

React is a JavaScript library for building user interfaces from reusable components. Instead of manually changing every DOM element when data changes, we describe what the UI should look like for the current data and let React update the browser efficiently.

The Real DOM is the browser's actual document tree. It contains the elements displayed on the page and is directly connected to browser rendering. Direct DOM changes can become difficult to manage when many parts of a page need updates.

React uses a Virtual DOM representation of the UI. The Virtual DOM is not the browser DOM; it is a JavaScript representation that React can compare when a component renders again. React creates a new representation and compares it with the previous one.

The render process starts when React renders the component tree. For this Employee Directory, `App` passes the employees array to `EmployeeDirectory`. That component maps the data into `EmployeeCard` components. React creates the corresponding Virtual DOM representation.

Reconciliation is React's process of comparing the previous and next rendered trees. React identifies what changed and applies the required updates to the Real DOM. For example, if one employee's status changed from Active to On Leave, React can update the relevant part of the UI rather than requiring the developer to manually rebuild the entire page.

The simplified flow is:

```text
Props/Data → React Component → Virtual DOM → Reconciliation → Real DOM Update → Browser UI
```

React also encourages declarative UI. In an imperative approach, a developer gives the browser step-by-step instructions such as finding an element and changing its text. In a declarative approach, the developer describes the desired result using components and data. React then handles the DOM work needed to reach that result.

This separation makes UI code easier to organize. Components describe pieces of the interface, props carry data from parent to child, and reconciliation helps React perform efficient updates when rendered output changes.
