# Component Plan

```text
App
├── PageLayout
│   ├── Header
│   ├── MainContent
│   │   └── EmployeeDirectory
│   │       └── EmployeeCard
│   │           ├── Avatar
│   │           ├── StatusBadge
│   │           └── InfoRow
│   └── Footer
```

| Component | Responsibility | Main props |
|---|---|---|
| PageLayout | Page shell and children composition | children |
| Header | Page title and subtitle | title, subtitle |
| MainContent | Main semantic container | children |
| EmployeeDirectory | Renders employee list | employees |
| EmployeeCard | Displays one employee | employee fields |
| Avatar | Displays initials | initials, name |
| StatusBadge | Displays employee status | status |
| InfoRow | Displays label/value content | label, value, children |
| Footer | Displays footer text | companyName |

The architecture keeps each component focused and makes repeated employee cards reusable.
