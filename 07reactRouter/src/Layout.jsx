import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//we can do the same work in App.jsx
//This is a very common scenario(bcoz of this we have imported Outlet) -> we are doing this or creating this file bcoz we want more optimized approach(dynamically) when we load different links like Home, About then Header & Footer 'll load again(this is one approach) but instead of this we are using another approach that whenver any link gets clicked or loaded then the Home area only gets changed & the header, footer remains same only

function Layout() {
    return(
        // Header & Footer components self-closing
        <>
        <Header/>   
        <Outlet/>   {/* This outlet 'll make the Header & Footer area same but change the Home area. It's like a base. If we give it in bottom then the top 2 things 'll reamin same but the bottom thing 'll change.  */}
        <Footer/>   
        </>
    )
}

export default Layout  