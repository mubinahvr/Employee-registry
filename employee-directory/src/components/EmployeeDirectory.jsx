import EmployeeCard from "./EmployeeCard";

export default function EmployeeDirectory({ employees = [] }) {
  return (
    <section className="directory" aria-labelledby="directory-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Team overview</p>

          <h2 id="directory-title">
            Our Employees
          </h2>
        </div>

        <span className="employee-count">
          Showing {employees.length} employees
        </span>
      </div>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            email={employee.email}
            location={employee.location}
            status={employee.status}
            avatar={employee.avatar}
          />
        ))}
      </div>
    </section>
  );
}