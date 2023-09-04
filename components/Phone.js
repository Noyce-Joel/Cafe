import Image from 'next/image'
import React from 'react'

function Phone() {
    const number = "077535137261";
  const call = "tel:" + number;
  return (
    <>
          <button
            className="phone-fixed pointer hover:scale-110 duration-75"
            onClick={() => (window.location.href = call)}
          >
            <Image
              src="../svgs/phone-fixed.svg"
              alt="SVG"
              width={42}
              height={42}
            />
          </button>
        </>
  )
}

export default Phone