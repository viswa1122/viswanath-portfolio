import React from "react";
import Social from "./Social";
import aboutImg from "../assets/images/viswa.png";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "nviswanathreddy5998@gmail.com" },
    { logo: "logo-whatsapp", text: "+91-8142724121" },
    {
      logo: "location",
      text: "Kadapa, Andhra Pradesh, India",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
        <span className="text-gray-600">Contact </span><span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-yellow-600 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col lg:mt-28 gap-4">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-yellow-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-[13px] font-semibold break-words">
                  {contact.text}
                </p>
              </div>
            ))}
            <div className="pl-3"><Social value="mt-8"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
