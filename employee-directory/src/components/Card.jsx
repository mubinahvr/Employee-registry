export default function Card({
  children,
  className = "",
  ...restProps
}) {
  return (
    <div
      className={`practice-card ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}