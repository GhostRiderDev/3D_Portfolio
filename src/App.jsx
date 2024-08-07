import "./index.css";
import {
  Tech,
  Navbar,
  Works,
  Feedbacks,
  Hero,
  Experience,
  Contact,
  About,
  StarsCanvas,
} from "./components";

export default function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
