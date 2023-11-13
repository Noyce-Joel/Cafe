import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function Header() {
  const [open, setOpen] = useState();

  useEffect(() => {
    const openTime = { hour: 11, minute: 0 };
    const closeTime = { hour: 16, minute: 0 };
    const currTime = new Date();
    const currHour = currTime.getHours();
    const currMin = currTime.getMinutes();

    if (
      currHour >= openTime.hour &&
      currMin >= openTime.minute &&
      currHour < closeTime.hour
    )
      setOpen(true);
    else setOpen(false);
  }, []);
  const number = "077535137261";
  const call = "tel:" + number;

  return (
    <header>
      <div className="header">
        <div className="times-header">
          {open ? (
            <button className="times-btn ">
              <b className="hover:scale-110 transition duration-75">OPEN </b>
              <div className="open-dot " />
            </button>
          ) : (
            <button className="times-btn ">
              <b className="hover:scale-110 transition duration-75">CLOSED </b>
              <div className="closed-dot " />
            </button>
          )}
        </div>

        <div>
          <div className="socials-wrap">
            <div className="socials">
              <SocialIcon
                style={{ height: 30, width: 30 }}
                className="hover:scale-125 transition duration-200"
                url="https://twitter.com"
              ></SocialIcon>
              <SocialIcon
                style={{ height: 30, width: 30 }}
                className="hover:scale-125 transition duration-200"
                url="https://www.instagram.com"
              ></SocialIcon>
              <SocialIcon
                style={{ height: 30, width: 30 }}
                className="hover:scale-125 transition duration-200"
                url="https://en-gb.facebook.com"
              ></SocialIcon>
            </div>
            <Image
              className="bread-image"
              alt="bread"
              src="/breadImg.webp"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="phone">
          <button
            className="group "
            onClick={() => (window.location.href = call)}
          >
            <Image
              className=" pointer group-hover:scale-110 duration-75"
              src="../svgs/phone.svg"
              alt="SVG"
              width={42}
              height={42}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
