import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1ref = useRef(null);
  const link2ref = useRef(null);
  const link3ref = useRef(null);
  const link4ref = useRef(null);
  const link5ref = useRef(null);
  const link6ref = useRef(null);
  const link7ref = useRef(null);

  const links = [
    link1ref,
    link2ref,
    link3ref,
    link4ref,
    link5ref,
    link6ref,
    link7ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav
      className={`flex justify-between container mx-auto ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase `}
    >
      <div>
        <HashLink smooth to="#home" className="link-item" ref={link1ref}>
          {footerNav ? "Go to top" : "Muntasir Fahim"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item" ref={link2ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item" ref={link3ref}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item" ref={link4ref}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item" ref={link5ref}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item" ref={link6ref}>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1jxZfuiL4ihGCugl8t2lpjAAY93otel9mi0ooSBsxD7g/edit?usp=sharing"
            target="_balnk"
            rel="noreferrer"
            className="link-item"
            ref={link7ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
