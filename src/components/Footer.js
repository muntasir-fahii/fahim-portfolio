import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";
const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);

  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden ">
      <p className="text-lg md:text-2xl" ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-white duration-500"
        >
          Muntasir Fahim
        </HashLink>
        . Created by Your friendly
      </p>
    </footer>
  );
};

export default Footer;
