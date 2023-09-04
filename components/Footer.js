import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import FooterImg from "../public/FooterImg.jpeg";

function Footer() {
  return (
    <div >
      <div className="flex justify-center md:text-[19px] text-[15px] tracking-[5px] mb-[100px] mt-[100px]">
        {" "}
        53.361331° N-1.479010° W
      </div>
      <footer className="mt-[100px] group">
        <div className="relative z-0 group-hover:transform lg:group-hover:-translate-y-[-245px] transition duration-700">
          <Image src={FooterImg} alt="FooterImg" />
        </div>

        <div className="relative p-[60px] z-20 bg-[#024252] group-hover:top-0">
          <div className="space-x-5">
            <SocialIcon
              className="hover:scale-125 transition duration-200"
              url="https://twitter.com/ForgeBakehouse"
            ></SocialIcon>
            <SocialIcon
              className="hover:scale-125 transition duration-200"
              url="https://www.instagram.com/forgebakehouse"
            ></SocialIcon>
            <SocialIcon
              className="hover:scale-125 transition duration-200"
              url="https://en-gb.facebook.com/ForgeBakehouse/"
            ></SocialIcon>
          </div>
          <div className="mt-[125px] tracking-widest text-white">
            COPYRIGHT FORGE BAKEHOUSE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
