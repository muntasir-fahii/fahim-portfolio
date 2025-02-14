import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import CustomCursor from "./components/CustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useRef } from "react";
import { useCustomCursor } from "./components/useCustomCursor";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className="app mx-8 md:mx-0" id="home">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
