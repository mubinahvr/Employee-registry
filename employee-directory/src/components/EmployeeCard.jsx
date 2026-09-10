import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";
import InfoRow from "./InfoRow";
import DepartmentBadge from "./DepartmentBadge";
import EmployeeMessage from "./EmployeeMessage";

export default function EmployeeCard({
  name,
  role,
  department,
  email,
  location,
  status,
  avatar,
}) {
  return (
    <article className="employee-card" tabIndex="0">
      <div className="card-top">
        <Avatar initials={avatar} name={name} />

        <StatusBadge status={status} />
      </div>

      <div className="employee-heading">
        <div>
          <h2>{name}</h2>

          <p className="role">{role}</p>
        </div>

        <DepartmentBadge department={department} />
      </div>

      <div className="info-list">
        <InfoRow
          label="Department"
          value={department}
        />

        <InfoRow
          label="Email"
          value={email}
        />

        <InfoRow
          label="Location"
          value={location}
        />

        <InfoRow label="Status">
          <StatusBadge status={status} />
        </InfoRow>

        <InfoRow label="Message">
          <EmployeeMessage
            name={name}
            status={status}
          />
        </InfoRow>
      </div>
    </article>
  );
}