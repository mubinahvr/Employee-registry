import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Footer from "./components/Footer";
import CompanyInfo from "./components/CompanyInfo";
import EmployeeBio from "./components/EmployeeBio";
import Card from "./components/Card";
import employees from "./data/employees";

const company = { name: "TechNova Solutions", address: { city: "Bengaluru", country: "India" } };

export default function App() {
  return (
    <PageLayout>
      <Header title="Employee Directory" subtitle="Meet our team members" />
      <MainContent>
        <EmployeeDirectory employees={employees} />
        <section className="practice-section" aria-labelledby="practice-title">
          <div className="section-heading"><div><p className="eyebrow">Props practice</p><h2 id="practice-title">React Fundamentals Examples</h2></div></div>
          <CompanyInfo company={company} />
          <div className="practice-grid">
            <EmployeeBio name="Priya Sharma" bio="Builds accessible and reusable frontend experiences." experience="3+ years experience" />
            <EmployeeBio name="New Employee" />
            <Card id="props-card" data-testid="props-card" className="highlight-card"><strong>Children + Rest Props</strong><p>This card receives children and forwards extra props to its root element.</p></Card>
          </div>
        </section>
        
      </MainContent>
      <Footer companyName="Employee Directory" />
    </PageLayout>
  );
}
