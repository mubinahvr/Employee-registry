export default function InfoRow({ label, value, children }) {
  return <p className="info-row"><b>{label}:</b> {value || children}</p>;
}
