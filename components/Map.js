import React, { Suspense } from "react";
import { motion } from "framer-motion";
function Map() {
  return (
    <>
      <iframe
        style={{
          width: "89.5vw",
          height: "56vh",
          borderRadius: "40px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2.5rem",
        }}
        loading="lazy"
        
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d152360.81716836983!2d-2.00879408133836!3d53.36763737447341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1speaks%20district!5e0!3m2!1sen!2suk!4v1699842713266!5m2!1sen!2suk"
      ></iframe>
    </>
  );
}

export default Map;
