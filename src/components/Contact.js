import { useRef } from "react";
import SectionTitles from "./SectionTitles";
import { useFormReveal } from "../hooks/gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integrations

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Messege sent");
        },
        () => {
          console.log("Messege Not Sent");
        }
      );
  };

  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const formRef4 = useRef(null);

  const formRefs = [formRef1, formRef2, formRef3, formRef4];

  useFormReveal(formRefs);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitles title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write Your name"
            name="fullname"
            required
            className="bg-transparent border py-10 px-16 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full text-xl md:text-2xl"
            ref={formRef1}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write Your Email"
            name="email"
            required
            className="bg-transparent border py-10 px-16 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full text-xl md:text-2xl"
            ref={formRef2}
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write Your Eessege"
            name="messege"
            required
            rows="1"
            cols="30"
            className="bg-transparent border py-10 px-16 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full text-xl md:text-2xl resize-none"
            ref={formRef3}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send Messege"
            className="uppercase bg-transparent border py-10 px-20 rounded-full border-white/20 hover:bg-rose-400/20 hover:border-rose-400/20 duration-500 w-full text-xl md:text-2xl"
            ref={formRef4}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
