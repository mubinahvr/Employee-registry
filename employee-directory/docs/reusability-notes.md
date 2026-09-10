# Reusability Notes

`InfoRow` is reusable because it receives a label and value instead of hard-coded employee information. The same component can display department, email, location, or other fields. It also supports `children` for custom content such as a status message. This keeps `EmployeeCard` readable and avoids repeating the same markup structure. A focused component can therefore be reused in different parts of an application with different props.
