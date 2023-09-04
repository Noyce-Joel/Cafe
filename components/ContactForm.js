import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

function ContactForm() {
  const [regarding, setRegarding] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = (data) => {
    const params = {
      email: data.email,
      message: data.message,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      regarding: regarding,
    };
    axios.post("/api/send-email", params).then((res) => console.log(res));
    setConfirmation(true);
  };
  return (
    <div className="contact-form-wrap">
      
      <div className="contact-form">
        <div className="contact-form-block">
          <h1>CONTACT INFORMATION</h1>
          <h2>
            This is a fun project inspired by the cafe where I currently work.
            If you like the website and have any enquiries please reach out!
          </h2>
          <div className="contact-phone-number">
            <button>
              <Image
                className="contact-phone"
                src="../svgs/contactPhone.svg"
                alt="SVG"
                width={35}
                height={35}
              />
            </button>
            <span> 07535137261</span>
          </div>
          <div className="contact-phone-number">
            <button>
              <Image
                className="contact-phone"
                src="../svgs/email.svg"
                alt="SVG"
                width={35}
                height={35}
              />
            </button>
            <span> noyce.joel@gmail.com</span>
          </div>
          <div className="contact-address">
            <button>
              <Image
                className="contact-phone"
                src="../svgs/location.svg"
                alt="SVG"
                width={35}
                height={35}
              />
            </button>
            <div className="address">
              <span>Sheffield,</span>
              <span>S1</span>
            </div>
          </div>
          <div className="contact-socials">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="hover:scale-125 transition duration-200"
              url="https://twitter.com/ForgeBakehouse"
            ></SocialIcon>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="hover:scale-125 transition duration-200"
              url="https://www.instagram.com/forgebakehouse"
            ></SocialIcon>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="hover:scale-125 transition duration-200"
              url="https://en-gb.facebook.com/ForgeBakehouse/"
            ></SocialIcon>
          </div>
        </div>

        <form
          className="contact-user-info-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="contact-user-info">
            <div className="user-info-input">
              <label className="group">First Name</label>
              <input type="text" {...register("firstName")} />
            </div>
            <div className="user-info-input">
              <label>Last Name</label>
              <input type="text" {...register("lastName")} />
            </div>
            <div className="user-info-input">
              <label>Email</label>
              <input type="email" {...register("email")} />
            </div>
            <div className="user-info-input">
              <label>Phone</label>
              <input type="number" {...register("phone")} />
            </div>
          </section>
          <section className="subject">
            <b>What is your message regarding?</b>
            <div className="options">
              <span className="option">
                Job Vacancy
                <input
                  type="checkbox"
                  onChange={() => setRegarding("Job Vacacny")}
                />
              </span>
              <span className="option">
                Freelance Project
                <input
                  type="checkbox"
                  onChange={() => setRegarding("Freelance Project")}
                />
              </span>
              <span className="option">
                Other
                <input type="checkbox" onChange={() => setRegarding("Other")} />
              </span>
            </div>
          </section>
          <div className="message-box">
            <label>Message</label>
            <textarea type="text" {...register("message")} />
          </div>
          <div className="message-button">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
