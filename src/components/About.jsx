import React from "react";
import aboutImg from "../assets/images/viswa.png";
import resume from "../assets/viswanath_4+years_DevOps_Resume.pdf"
const About = () => {
  const info = [
    { text: "Years experience", count: "04+" },
    { text: "Companies Work", count: "03" },
    { text: "Technical Skills", count: "15+" },
  ];
  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
        <span className="text-gray-600">About </span><span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-500 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Overall of 4+ years of working experience in Amazon Web Services environment and DevOps. Experienced cloud and DevOps engineer in automation, configuration and deployment of AWS cloud infrastructure.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-yellow-600">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={resume} target="_blank" data-text="Download CV" download="viswanath_4+years_DevOps_Resume">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-yellow-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
