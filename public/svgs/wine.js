import React from 'react'

function wine({style}) {
  return (
    <svg width="27px" height="27px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className='svg'><defs></defs><title/><path strokeWidth='2.55' strokeLinejoin='round' fill='none' stroke={style} className="a" d="M20,5H44a0,0,0,0,1,0,0V24A12,12,0,0,1,32,36h0A12,12,0,0,1,20,24V5A0,0,0,0,1,20,5Z"/><path strokeWidth='2.55' strokeLinejoin='round' fill='none' stroke={style} className="a" d="M30,35.83V57.08c-2.86.22-7,1.92-8.12,3L42,60c-1-1-5.19-2.7-8-2.92V35.83"/><line strokeWidth='2.55' className="a" x1="20" x2="44" y1="20" y2="20"/></svg>
  )
}

export default wine