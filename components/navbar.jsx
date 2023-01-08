import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{backgroundColor:"darkgray" , height:"50px",color:"black",
    display:"flex",justifyContent:"space-evenly",fontSize:"20px"}}>
      <Link href="/">ALL</Link>
      <Link href="/html">HTML</Link>
      <Link href="/css">CSS</Link>
      <Link href="/javascript">JavaScript</Link>
    </div>
  )
}

export default Navbar
