import './intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from "ityped";
import { useEffect, useRef } from 'react';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 45,
      backDelay: 1300,
      backSpeed: 60,
      strings: ["Fullstack Developer", "Designer", "Taco Enjoyer", "Dog Lover"]
    })
    console.log(textRef)
  },[]);

  return (
    <div className='intro' id = "intro">
    <div className='left'>
      <div className='imgContainer'>
        <img src='assets\20211011_142938.jpg' alt = "Picture of Ahsif Safdar with his Dog Zuko"></img>
      </div>
    </div>
    <div className='right'>
      <div className='wrapper'>
        <h2> Hi There, I'm</h2>
        <h1> Ahsif Safdar</h1>
        <h3> Professional <span ref = {textRef}></span></h3>
      </div>
      <a href='#portfolio'>
        <ArrowDownwardIcon className='icon'/>
      </a>
    </div>
    </div>
  )
}
