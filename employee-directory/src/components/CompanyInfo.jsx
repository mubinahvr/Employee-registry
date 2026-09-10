export default function CompanyInfo({
  company: {
    name,
    address: { city, country },
  },
}) {
  return (
    <p className="company-info">
      <strong>{name}</strong> is located in {city}, {country}.
    </p>
  );
}