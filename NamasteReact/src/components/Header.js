import {LOGO_URL} from "../utils/constants";
import { useState, useContext, useDeferredValue, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log("Header render");

    useEffect(()=>{
        console.log('If array not mentioned : Useeffect called after everytime the containing component renders');
    },[]);

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="header">
           <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
           </div>
           <div className="nav-items">
                <ul>
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                    <li className="px-4 ">{loggedInUser}</li>
                </ul>
           </div>
        </div>
    )
}

export default Header;