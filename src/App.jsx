import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Chatbot from './Chatbot';
import Clients from './components/Clients';

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
       <Clients/>
      <Services />
      <Projects />
      <WhyUs />
      
      <Contact />
      <Footer />
      <Chatbot />
     
    </div>
  );
}
