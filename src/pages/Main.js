import React from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";

export default function Main() {
    return (
        <>
            <Navigation/>
            <Header/>
            <Portfolio/>
            <AboutMe/>
        </>
    )
};