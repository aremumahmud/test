import '../styles/headerr.css'
import logo from  '../assets/logo.svg'

function Header({showmodal}){
    return <div className="header">

        <div className="first">
<div className="logo">
            <img src={logo} alt="" />
            <p>IpifyCo</p>
        </div>

        <div className="menu">
            <p>About us</p>
            <p>Our values</p>
            <p>Our Contacts</p>
        </div>
        </div>
        

        <div className="cta">
            <div>
                Find your IP
            </div>
            <div onClick={showmodal}>
                Find your IP details
            </div>
        </div>
    </div>
}

export default Header