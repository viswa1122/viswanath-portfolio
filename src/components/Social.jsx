import React from "react";

function Social({value}) {
  const social_media = [
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/viswanath-reddy-a65578223" },
    { icon: "logo-instagram", link: "https://www.instagram.com/vishwa_ready?igsh=enZoZ3czem52OHNm" },
    { icon: "logo-github", link: "https://github.com/viswa1122" },
    { icon: "logo-facebook", link: "https://www.facebook.com/viswanathreddy.nimmakayala?mibextid=9R9pXO" },
    //{ icon: "logo-twitter", link: "https://mobile.twitter.com/mallireddy_1998" },
  ];
  return (
    <div className={`${value} text-3xl flex items-center md:justify-start justify-center gap-5`}>
      {social_media?.map((media) => (
        <div
          key={media.icon}
          className="text-gray-500 hover:text-white cursor-pointer "
        >
          <a href={media.link} target="_blank"> 
            <ion-icon name={media.icon}></ion-icon>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Social;
