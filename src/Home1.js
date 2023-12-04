import React from 'react'
import './Home1.css'
import Logo from "./Pictures/Logo.jpg"
import { useNavigate } from 'react-router-dom'
const App = () => {
    const nav2=useNavigate();
    const pre2=()=>
    {
        nav2('/');
    }
    const pre3=()=>
    {
        nav2('/Begining');
    }
    const pre4=()=>
    {
        nav2('/Stress');
    }
    const pre5=()=>
    {
        nav2('/Mind');
    }
    const pre6=()=>
    {
        nav2('/New');
    }
    const tim=()=>
    {
        nav2('/Timer');
    }
    const log=()=>
    {
        nav2('/');
    }
  return (
    <div>
    <div class="banner">
      <div class="navbar">
      <img src={Logo} class="logo"/>
        <ul>
          <li><a href="#" onClick={pre2}>Home</a></li>
          <li><a href="#" onClick={pre3}>Beginning Meditation</a></li>
          <li><a href="#" onClick={pre4}>For stress and everyday anixety</a></li>
          <li><a href="#" onClick={pre5}>Mindfulness at work</a></li>
          <li><a href="#" onClick={pre6}>Start your free trail</a></li>
        </ul>
        </div>
        <div class="content">
          <h1></h1>
          <p></p>
          <div>
            <button type="button" className='button1' onClick={log}><span className='span1'></span>Logout</button>
            <button type="button" className='button1' onClick={tim}><span className='span1'></span>timer</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App