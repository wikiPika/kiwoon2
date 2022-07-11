import React, {useState} from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {AnimatePresence, motion} from "framer-motion";
import {useTheme} from "../generic/ThemeContext";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Disclaimer from "./Disclaimer";

function Layout(props: {
    children: any,
}) {

    const [disclaimerClicked, setDisclaimerClicked] = useState(false)
    const theme = useTheme()

    return <div className="apex-layout col-sc w-100" style={{
        backgroundColor: theme.persistentBg,
    }}>
        <AnimatePresence>
            {
                !disclaimerClicked && <Disclaimer onClick={() => setDisclaimerClicked(true)} />
            }
        </AnimatePresence>
        <Navigation />
        {props.children}
        <Footer />
    </div>
}

export default Layout;
