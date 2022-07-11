import React, {useState} from "react"
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {motion} from "framer-motion";

function RoundedButton(props: {
    background?: string,
    onClick?: any,
    children: any,
}) {
    const [hovering, setHovering] = useState(false)

    return <motion.button className="rounded-button urbanist bold" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={props.onClick ?? (() => window.alert("not implemented"))}>
        <div className="content">
            {props.children}
        </div>
        <motion.div className="slide-in" style={{
            background: props.background ?? "rgba(255, 0, 255, 1)"
        }} animate={hovering ? {
            left: "0%"
        } : {
            left: "-105%"
        }} transition={{
            type: "spring",
            stiffness: 250,
            delay: 0,
            damping: 30,
        }} />
    </motion.button>
}

export default RoundedButton;
