import React, {useState} from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {motion} from "framer-motion";
import {Anim} from "../../Animation";

function Disclaimer(props: {
    onClick: any,
}) {

    return <motion.div variants={Anim.bounceY(100).spring(120, 0, 10).build()}
                       initial="inactive" animate="active" exit="inactive" onClick={props.onClick}
                       whileHover={{y: -10, boxShadow: "0 0 1rem white"}} className="apex-disclaimer document col-cc text-centered">
        Kiwoon is remodeling (again)! Many features are still in the works and thus unavailable.
        <br/>
        Click this disclaimer to dismiss.
    </motion.div>
}

export default Disclaimer;
