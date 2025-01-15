import React from "react";
import ReactDOM from "react-dom/client";


// Header
//     - logo
//     - nav items 
// Body
//      - search
//      - restaurant container
//      - restaurant card
// Footer
//      - copyright
//      - links
//      - address
//      - contact

const Header = () =>{
    return (
        <div className="header">
           <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
           </div>
           <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
           </div>
        </div>
    )
}

const RestautantCard = () => {
    return (
        <div className="restoCard">
            <h3>Meghana Foods</h3>
            <img className="restoLogo" src="https://protoinfrastack-myfirstbucketb8884501-fnnzvxt2ee5v.s3.amazonaws.com/NsTmvXhB7rOprn702VnhOamWUCHgp6dx6sta.png"></img>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restoContainer">
                <RestautantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
