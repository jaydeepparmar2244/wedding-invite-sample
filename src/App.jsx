import React, { useState } from "react";
import WelcomeOverlay from "./components/WelcomeOverlay";
import PetalCanvas from "./components/PetalCanvas";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Countdown from "./components/Countdown";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import "./styles/App.css";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="appWrap">
      {/* Overlay fades out — sections always exist beneath, always scrollable */}
      {!opened ? (
        <WelcomeOverlay onOpen={() => setOpened(true)} />
      ) : (
        <>
          <ScrollProgress />
          <PetalCanvas />
          <Hero />
          <About />
          <Events />
          <Countdown />
          <Venue />
          <RSVP />
          <Footer />
        </>
      )}
    </div>
  );
}
