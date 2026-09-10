# Props Contract

| Component | Expected props |
|---|---|
| Header | title, subtitle |
| EmployeeDirectory | employees |
| EmployeeCard | name, role, department, email, location, status, avatar |
| Avatar | initials, name |
| StatusBadge | status |
| InfoRow | label, value, children |
| Footer | companyName |

A props contract makes it clear what data a component expects and how the component should be used. A wrong prop name does not automatically provide the expected value, so the UI may show missing or undefined data. Meaningful prop names make components easier to understand and reduce confusion between similar values. For example, `initials` communicates its purpose more clearly than a generic name such as `data`.
