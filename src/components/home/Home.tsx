import React, {useRef} from "react";
import "../../scss/core.scss"
import "../../scss/home.scss"
import {motion} from "framer-motion";
import {Anim} from "../../Animation";
import brandLogo from "../../img/layout/kiwoon-logo.png"
import disc from "../../img/home/disk.svg"
import discordDesktop from "../../img/home/Discord-outline.png"
import phoneAndDesktop from "../../img/home/phoneComputer.png"
import redWave from "../../img/home/svgOne.png";
import greenWave from "../../img/home/svgTwo.png"
import kiwoonWave from "../../img/home/svgThree.png"
import {useInView} from "react-intersection-observer";
import {range} from "../../Animation";
import RoundedButton from "../generic/RoundedButton";
import {useScreen} from "../generic/ScreenContext";

const heroIconStaggerAnimation = Anim.opacity(0.15).spring(80, 0, 30).delay_children(0.35).stagger(0.02).build()
const discStaggerAnimation = Anim.opacity(0.15).spring(80, 0, 30).delay_children(0.35).stagger(0.1).build()

function Home(props: {

}) {

    const [statsRef, statsInView, statsEntry] = useInView({
        threshold: 1,
        triggerOnce: true,
    })

    const [discordRef, discordInView, discordEntry] = useInView({
        threshold: 1,
        triggerOnce: true,
    })

    const [infoRef, infoInView, infoEntry] = useInView({
        threshold: 1,
        triggerOnce: true,
    })

    const pricingRef = useRef<HTMLDivElement>(null);

    const screen = useScreen()

    return <div className="apex-home w-100 col-sc">
        <div className="hero-panel col-cc w-100">
            <div className="document row-cc">
                <div className="text col-cs">
                    <h1 className="bold-800 barlow blue-green-text-gradient">
                        Financial Freedom
                        <br/>
                        Starts Here.
                    </h1>
                    <p className="urbanist">
                        Learn how to build credit, save for retirement, and establish your financial goals.
                        <br/>
                        Invest in yourself by joining Kiwoon.
                    </p>
                    <RoundedButton background={"linear-gradient(135deg, rgba(39,231,129,1) 0%, rgba(92,107,234,1) 100%)"}
                                   onClick={() => {
                                       if (pricingRef.current) pricingRef.current.scrollIntoView({behavior: "smooth"})
                                   }}
                    >
                        Sign Up
                    </RoundedButton>
                </div>
                {screen.isDesktop() && <motion.div className="graphic f-grow f-shrink" variants={heroIconStaggerAnimation}
                            initial="inactive" animate="active"
                    >
                        <HeroIcon top={80} left={50} />
                        <HeroIcon top={40} left={55} />
                        <HeroIcon top={55} left={15} />
                        <HeroIcon top={5} left={70} />
                        <HeroIcon top={15} left={5} />
                    </motion.div>
                }
            </div>
        </div>
        <div className="stats-panel col-cc w-100">
            <div className="gradient-top w-100" />
            <div className="gradient-bottom w-100" />
            <div className="document row-cs">
                <div className={"text " + (screen.isMobile() ? "w-100 col-sc" : "w-50 col-ss")} ref={statsRef}>
                    <h1 className="barlow bold-800">
                        The change that
                        <br/>
                        the world <span className="blue-green-text-gradient">needs</span>
                    </h1>
                    <p className="urbanist">
                        Millions of college students graduate every year
                        <br/>
                        without financial stability.
                    </p>
                    <div className="row-sc">
                        <motion.div className="col-ss" variants={Anim.bounceY(5).spring(120, 1, 20).build()} initial={"inactive"} animate={statsInView ? "active" : ""}>
                           <div className="h0 barlow bold-800 blue-green-text-gradient">
                               $92k
                           </div>
                            <div className="p urbanist">
                                Average amount of
                                <br/>
                                consumer debt in 2020
                            </div>
                        </motion.div>
                        <motion.div className="col-ss" variants={Anim.bounceY(5).spring(120, 1, 20).build()} initial={"inactive"} animate={statsInView ? "active" : ""}>
                            <div className="h0 barlow bold-800 blue-green-text-gradient">
                                66%
                            </div>
                            <div className="p urbanist">
                                of adolescents are not
                                <br />
                                financially literate
                            </div>
                        </motion.div>
                    </div>
                </div>
                {!screen.isMobile() && <motion.div className="discs w-50 h-100 col-cc" variants={discStaggerAnimation}
                             initial={"inactive"} animate={statsInView ? "active" : ""}
                >
                    {
                        range(80, -40, -15).map((v, i) => {
                            return <Disc key={i} top={v}/>
                        })
                    }
                </motion.div>}
            </div>
        </div>
        <div className="discord-outline col-sc" ref={discordRef}>
            <div className="document col-sc">
                <div className="h0 barlow bold-800 text-centered">
                    Gain access to a community of
                    <br />
                    <span className="blue-green-text-gradient">experienced</span> investors
                </div>
            </div>
            <motion.img src={discordDesktop} variants={Anim.bounceY(500).spring(200, 0, 30).build()} initial={"inactive"}
                        animate={discordInView ? "active" : ""}
            />
        </div>
        <div className="info col-cc w-100">
            <div className="gradient-top w-100" />
            <div className="gradient-bottom w-100" />
            <div className="document row-sc">
                <div className="text col-ss" ref={infoRef}>
                    <h1 className="barlow bold-800">
                        Your <span className="blue-green-text-gradient">one-stop shop</span>
                        <br/>
                        for all things finance.
                    </h1>
                    <p className="urbanist">
                        We will help redefine your personal finance framework
                        <br/>
                        to fit your lifestyle and circumstances.
                    </p>
                    <motion.div variants={Anim.bounceY(10).spring(120, 0, 20).build()} initial="inactive" animate={infoInView ? "active" : ""} className="topic row-sc w-100">
                        <img src={brandLogo} className="mini-logo" />
                        <h3 className="bold urbanist">
                            Budgeting
                        </h3>
                    </motion.div>
                    <motion.p variants={Anim.bounceY(10).spring(120, 0.1, 20).build()} initial="inactive" animate={infoInView ? "active" : ""} className="urbanist">
                        Taking financial control can be difficult, especially when the cost of living is increasing.
                        <br/>
                        Our community will advise you against common traps and build healthy habits that
                        <br/>
                        can simplify reaching your long-term goals.
                    </motion.p>
                    <motion.div variants={Anim.bounceY(10).spring(120, 0.2, 20).build()} initial="inactive" animate={infoInView ? "active" : ""} className="topic row-sc w-100">
                        <img src={brandLogo} className="mini-logo" />
                        <h3 className="bold urbanist">
                            Investing
                        </h3>
                    </motion.div>
                    <motion.p variants={Anim.bounceY(10).spring(120, 0.3, 20).build()} initial="inactive" animate={infoInView ? "active" : ""} className="urbanist">
                        Many people don't even consider investing when starting out with adult life.
                        <br/>
                        But why? With smart moves and patience, investing can mean safety for your assets and
                        <br/>
                        additional collateral in emergencies.
                    </motion.p>
                </div>
                <div className="img-container h-100">
                    <img src={phoneAndDesktop} />
                </div>
            </div>
        </div>
        <div className="offers col-cc w-100" ref={pricingRef}>
            <div className="document col-sc">
                <div className="h0 barlow bold-800">
                    Choose <span className="blue-green-text-gradient">your</span> path
                </div>
                <motion.div variants={discStaggerAnimation} initial={"inactive"} animate={"active"} className={"options w-100 " + (screen.isMobile() ? "col-st" : "row-ct")}>
                    <Card image={redWave} shadowColor={"#b2546c"} name={"Early Bird"} pricing={"4.99"} listItems={[
                        "All Benefits of Regular",
                        "First Month Only"
                    ]} onClick={() => {window.open("https://kiwoonlearning-ternary.herokuapp.com/?password=EarlyBird")}} />
                    <Card image={greenWave} shadowColor={"#27d681"} name={"Regular"} pricing={"9.99"} listItems={[
                        "Monthly Watchlists",
                        "Weekly Educational Calls",
                        "Finance and Investing Chats",
                        "Access to Coaches and Mentors",
                        "Priority Customer Support"
                    ]} onClick={() => {window.open("https://kiwoonlearning-ternary.herokuapp.com/?password=Regular")}} />
                    <Card image={kiwoonWave} shadowColor={"#384fef"} name={"Premium"} pricing={"19.99"} listItems={[
                        "Kiwoon Algorithm Data",
                        "VIP Lounge",
                        "Weekly 1-on-1 Calls",
                        "Priority News Access",
                        "All Benefits of Regular"
                    ]} onClick={() => {window.open("https://kiwoonlearning-ternary.herokuapp.com/?password=Premium")}} />
                </motion.div>
            </div>
        </div>
    </div>
}

function HeroIcon(props: {
    top: number,
    left: number,
}) {
    return <motion.div className="hero-icon blue-green-gradient"
                       variants={new Anim()
                           .add("top", "100%", `${props.top}%`)
                           .add("left", "50%", `${props.left}%`)
                           .add("opacity","0", "1")
                           .build()}
    >
        <img src={brandLogo} />
    </motion.div>
}

function Disc(props: {
    top: number,
}) {
    return <motion.div className="disc"
                       variants={new Anim()
                           .add("top", "-50%", `${props.top}%`)
                           .add("opacity","0", "1")
                           .build()}
    >
        <img src={disc} />
    </motion.div>
}

function Card(props: {
    image: any,
    shadowColor: string,
    name: string,
    pricing: string,
    listItems: Array<string>
    onClick: any,
}) {

    const screen = useScreen()

    return <motion.div whileHover={{y: "-20px", boxShadow: `0 0 4rem ${props.shadowColor}`}} className={"card col-ss " + (screen.isMobile() ? "w-100" : "w-30")}
                       onClick={props.onClick}>
            <div className="wave-container w-100 h1 barlow bold-800 col-cc" style={{
                backgroundImage: `url(${props.image})`
            }}>
                {props.name}
            </div>
            <ul className="urbanist">
                {
                    props.listItems.map((v, i) => <li key={i}>
                        {v}
                    </li>)
                }
            </ul>
            <div className="f-grow"></div>
            <div className="bottom-pricing h2 bold urbanist col-cc w-100">
                <div className="row-cc">${props.pricing}<span className="font-50">/month</span></div>
            </div>
        </motion.div>

}

export default Home;
