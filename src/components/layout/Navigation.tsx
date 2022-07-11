import React from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {motion} from "framer-motion";
import {useScreen} from "../generic/ScreenContext";
import {useTheme} from "../generic/ThemeContext";
import {Link, useLocation, useNavigate} from "react-router-dom";

import brandLogo from "../../img/layout/kiwoon-logo.png";

const middleButtons = [
    ["Investing", "https://www.youtube.com/playlist?list=PLLhQNTMItrwav_oBOQiEwo0MXB0NKZBNb"],
    ["Blog", "/blog/"],
    ["Simulation", "/simulation"],
    ["Contact", "/contact"]
]

function Navigation(props: {

}) {

    const screen = useScreen()
    const theme = useTheme()
    const navigate = useNavigate()

    return <motion.div className="apex-navigation w-100 col-cc" animate={{
        backgroundColor: screen.scrollY > 0 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)"
    }}>
        <div className="document bold row-bc h-100">
            <Link to={"/"} className="brand h-100">
                <motion.img src={brandLogo} className="h-100"/>
            </Link>
            { !screen.isMobile() && <div className="middle-buttons row-bc">
                {
                    middleButtons.map((value, index) => {
                        return (
                            <motion.div key={index} onClick={() => {
                                if (value[1].charAt(0) == "h") {
                                    window.open(value[1])
                                } else {
                                    navigate(value[1])
                                }
                            }} className="tab h6" whileHover={{backgroundColor: "rgba(255, 255, 255, 0.12)"}}>
                                {value[0]}
                            </motion.div>
                        )
                    })
                }
            </div>}
            {!screen.isMobile() && <div className="end-buttons row-bc">
                <motion.div onClick={() => {
                }} className="tab h6" whileHover={{backgroundColor: "rgba(255, 255, 255, 0.12)"}}>
                    Log In
                </motion.div>
            </div>}
            {
                screen.isMobile() && <div className="urbanist bold h6">
                    mobile navigation wip
                </div>
            }
        </div>
    </motion.div>
}

export default Navigation;
