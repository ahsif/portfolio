import './Topbar.scss'
import {Person, Mail} from "@mui/icons-material"
export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")} >
        <div className="wrapper">
            <div className="left"> 
                <a href="#intro" className='logo'>Dev.</a>
                <div className="itemContainer">
                  <Person className="icon"/>
                  <span> +1-916-662-6473</span>
                </div>
                <div className="itemContainer">
                  <Mail className="icon"/>
                  <span> ahsif.safdar@gmail.com</span>
                </div>
            </div>
           
            <div className="right">
              <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <span classname= "line1"></span>
                <span classname= "line2"></span>
                <span classname= "line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}
