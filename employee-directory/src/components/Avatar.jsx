export default function Avatar({
  initials = "NA",
  name = "Employee",
}) {
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "brown",
    "teal",
  ];

  const randomColor =
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="avatar"
      style={{ backgroundColor: randomColor }}
      aria-label={`${name} avatar`}
    >
      {initials}
    </div>
  );
}