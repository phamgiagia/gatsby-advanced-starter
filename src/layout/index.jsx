import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.sass";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import Bottom from "../components/Bottom";

export default function MainLayout({ children }) {
    return (
        <div className="layout-container">
            <Helmet>
                
                <meta name="description" content={config.siteDescription} />
                <html lang="en" />
            </Helmet>
            <Header />
            <hr />
            {children}
            <hr />
            <Bottom />
        </div>
    );
}