import React, { useRef } from "react";
import "./right.css"
import petals from "../images/petals.png";
const Right = () => {
const email =useRef();
const password =useRef();

const validate =()=>{
   const regularexpressionforemail =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   if(!regularexpressionforemail.test(email.current.value))
   {
    return false

   }
   else if (password.current.value.length<6)
   {
    return false
   }
   return true;
}
const login =()=>{
    if(validate())
    {
        alert("Successfully login!!!")
    }
    else{
        alert("Follow email standard format username@domain.com and password's length should be alteast 6 characters long")
    }
}
  return (
    <div id="right">
      <img id="petals" src={petals} alt="" />
      <div id="welcome">
        Welcome <span style={{ color: "#08A593" }}>Back!</span>
      </div>
      <div id="glad">Glad to see you, Again!</div>
      <input  ref={email} id="input1" type="text" placeholder="Enter your email" />
      <input ref={password} id="input2" type="password" placeholder="Enter your password" />
      <svg
        id="hide"
        width="21"
        height="11"
        viewBox="0 0 21 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.47907 7.1726C2.36172 3.75354 6.05152 1.32418 10.2021 1.32418C14.3513 1.32418 18.0411 3.75354 18.9251 7.1726C18.9601 7.30827 19.0605 7.42717 19.2041 7.50313C19.3478 7.5791 19.523 7.60591 19.6912 7.57767C19.8594 7.54943 20.0068 7.46845 20.101 7.35254C20.1952 7.23664 20.2284 7.0953 20.1934 6.95963C19.1878 3.07077 14.9816 0.280196 10.2021 0.280196C5.42253 0.280196 1.21634 3.07077 0.21074 6.95963C0.175729 7.0953 0.208965 7.23664 0.303138 7.35254C0.39731 7.46845 0.544704 7.54943 0.712895 7.57767C0.881085 7.60591 1.0563 7.5791 1.19998 7.50313C1.34367 7.42717 1.44406 7.30827 1.47907 7.1726ZM10.1891 3.41216C11.3905 3.41216 12.5426 3.79713 13.3921 4.48238C14.2416 5.16763 14.7189 6.09702 14.7189 7.06611C14.7189 8.0352 14.2416 8.9646 13.3921 9.64985C12.5426 10.3351 11.3905 10.7201 10.1891 10.7201C8.98776 10.7201 7.8356 10.3351 6.98611 9.64985C6.13661 8.9646 5.65937 8.0352 5.65937 7.06611C5.65937 6.09702 6.13661 5.16763 6.98611 4.48238C7.8356 3.79713 8.98776 3.41216 10.1891 3.41216Z"
          fill="#D7D7D7"
        />
      </svg>

      <div id="forget">Forgot Password?</div>
      <button onClick={login} id="button">Log In</button>
      <div id="sign">
        Don’t have an account yet? &nbsp;
        <span style={{ color: "#08A593" }}>Sign Up </span>
      </div>
    </div>
  );
};

export default Right;
