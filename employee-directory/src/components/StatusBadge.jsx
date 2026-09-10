export default function StatusBadge({ status }) {
  if (status === "Active") {
    return (
      <span className="status-badge status-active">
        Active
      </span>
    );
  }

  if (status === "On Leave") {
    return (
      <span className="status-badge status-leave">
        On Leave
      </span>
    );
  }

  return (
    <span className="status-badge status-inactive">
      Inactive
    </span>
  );
}