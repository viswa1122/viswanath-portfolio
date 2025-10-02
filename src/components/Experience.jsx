import React from "react";
import nuvama from "../assets/images/nuvama.png";
import excellarate from "../assets/images/excellarate.jpeg";
import wipro from "../assets/images/hpr.png";

function Experience() {
    const companies = [
      {
        img: nuvama,
        name: "Nuvama Wealth",
        designation: "DevOps Engineer",
        from_to: "Feb 2023 - Present",
        social_media: [
          {icon: "logo-instagram", link: "https://www.instagram.com/nuvama_wealth/?hl=en" },
          {icon: "logo-linkedin", link: "https://in.linkedin.com/company/nuvama-wealth" },
          {icon: "earth", link: "https://www.nuvamawealth.com/" },
        ]
      },  
      {
          img: excellarate,
          name: "Excellarate",
          designation: "DevOps Engineer",
          from_to: "Dec 2021 - Oct 2022",
          social_media: [
            {icon: "logo-instagram", link: "https://www.instagram.com/excellaratetech/?hl=en" },
            {icon: "logo-linkedin", link: "https://www.linkedin.com/company/hpr-synergy-engineering-private-limited/" },
            {icon: "earth", link: "https://dev.excellarate.com/" },
          ]
        },
        {
          img: hpr,
          name: "HPR",
          designation: "Software Engineer",
          from_to: "Apr 2019 - Dec 2021",
          social_media: [
            {icon: "logo-instagram", link: "https://www.instagram.com/hprsynergy?igsh=MWl2c2l2aHY4b3M0eQ==" },
            {icon: "logo-linkedin", link: "https://www.linkedin.com/company/hpr-synergy-engineering-private-limited/" },
            {icon: "earth", link: "https://hprsynergy.com/" },
          ]
        },
      ];

  return (
    <section id="experience" className="py-10 bg-gray-900 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        <span className="text-yellow-600">My</span> <span className="text-gray-400">Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Work</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {companies.map((company, i) => (
            <div key={i} className={`min-w-[12rem] max-w-[20rem] p-4 ${company.from_to.toLowerCase().includes("present") ? "bg-yellow-600" : "bg-slate-700" } rounded-xl`}>
            <img src={company.img} alt="" className="rounded-lg w-[310px] h-[200px]" />
            <h3 className="text-xl my-4 font-bold">{company.name}</h3>
            <h3 className={`text-lg ${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } my-4`}>{company.designation}</h3>
            <h3 className={`text-lg ${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } my-4`}>{company.from_to}</h3>
            <div className="flex gap-3 pl-24">
            { company.social_media?.map((media, i) => (
              <a key={i}
                href={media.link}
                target="_blank"
                className={`${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } text-2xl hover:text-white cursor-pointer`}
              >
                <ion-icon name={media.icon}></ion-icon>
              </a>
            ))}
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </section>
  );
}

export default Experience;
