export default function Header({
  title = "Employee Directory",
  subtitle = "Meet our team members",
}) {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">TechNova Solutions</p>

        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>
    </header>
  );
}

