import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

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
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = BrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
// <BrowserRouter>
// <Routes>
//       <Route path="/" element={<AppLayout/>} />
//       <Route path="/about" element={<About/>} />
//     </Routes>
// </BrowserRouter>
// );

createRoot(document.getElementById("root")).render(
  <BrowserRouter></BrowserRouter>
);
