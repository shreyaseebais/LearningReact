import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
        name: "Shreya",
        };
        setUserName(data.name);
    }, []);

    
    return (
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}

const appRouter = Routes([
    {
        path: "/",
        element: <AppLayout/>
    },
    {
        path: "/about",
        element: <About/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
