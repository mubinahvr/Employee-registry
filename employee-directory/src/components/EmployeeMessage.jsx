export default function EmployeeMessage({ name, status }) {
  if (status === "Active") return <p className="employee-message">Welcome back, {name}!</p>;
  if (status === "On Leave") return <p className="employee-message">{name} is currently on leave.</p>;
  return <p className="employee-message">{name} is currently inactive.</p>;
}
