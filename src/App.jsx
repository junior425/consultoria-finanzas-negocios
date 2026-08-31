import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import LeadForm from "./components/LeadForm";
import MonteCarloExplainer from "./components/MonteCarloExplainer";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Simulator from "./components/Simulator";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <MonteCarloExplainer />
        <Simulator />
        <Packages />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
