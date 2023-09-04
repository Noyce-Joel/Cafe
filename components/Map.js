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
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBX7KrGGCeUgRr0-hiyJH84E&key=AIzaSyBOv3tTamANm65268TR3OwClTVmMiqQQys"
      ></iframe>
    </>
  );
}

export default Map;
