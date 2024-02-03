import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex items-center justify-between lg:flex-row flex-col px-20">
        <div className="text-sm p-4 text-center text-white">
          Copyright © 2024 <span className="text-yellow-600">V</span>iswa Reddy N. All Rights reserved.
        </div>
        <Social value="mt-3"/>
      </div>
    </div>
  );
};

export default Footer;
