import { BrowserRouter } from "react-router-dom"; // routing
import { expertises } from "./constants";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Carousel,
} from "./components";
import { CarouselItem } from "./components/Carousel";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Carousel>
          {expertises.map((expertise, index) => (
            <CarouselItem>
              <img
                key={index}
                src={expertise.image}
                alt={`Item ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </Carousel>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
