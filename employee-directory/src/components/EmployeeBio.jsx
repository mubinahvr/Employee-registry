export default function EmployeeBio({
  name,
  bio = "Bio not available",
  experience = "Experience not specified",
}) {
  return (
    <div className="bio-box">
      <h3>{name}</h3>

      <p>{bio}</p>

      <span>{experience}</span>
    </div>
  );
}

