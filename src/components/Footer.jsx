import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-aiBorder flex w-full h-[3.11rem] justify-between items-center text-normalText">
      <div className="px-3 border-aiBorder h-full flex items-center">
        <div className="h-full border-r border-aiBorder flex items-center justify-center pr-3">
          <h1>find me in:</h1>
        </div>
        <div className="h-full border-r px-3 border-aiBorder flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="opacity-40 hover:opacity-60 transition-all duration-300"
          />
        </div>
        <div className="h-full border-r px-3 border-aiBorder flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="opacity-40 hover:opacity-60 transition-all duration-300"
          />
        </div>
      </div>
      <div className="px-2 border-l border-aiBorder h-full flex items-center">
        @username
        <FontAwesomeIcon icon={faGithub} className="ml-2" />
      </div>
    </div>
  );
};

export default Footer;
