import '../styles/hero.css'
import hero from "../assets/hero.jpg"

function Hero({showip}) {
    return <div className="hero">
        <div className="badge">
            <p>Unlock Conventional IPs</p>
        </div>

        <p className="hero_title">Discover Every IP and Device Connected to Your Network in Seconds

        </p>

        <p className="hero_descr">
            Instantly scan, map, and identify all devices on your network. Our IP discovery tool gives you real-time visibility, detailed insights, and actionable data to secure and optimize your infrastructure.
        </p>

        <div className="cta">
            <div onClick={showip}>Get IP</div>
        </div>

        <div className="hero_img">
            <img src={hero} alt="" />
        </div>





    </div>
}


export default Hero