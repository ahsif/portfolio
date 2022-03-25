import Topbar from "./components/Topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/contact/contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
