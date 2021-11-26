import styled from 'styled-components';
import Clock from './components/Clock';
import unnamed from './unnamed.png'

import logo from './logo.svg';
import './App.css';
// import styles from './App.module.css'
// import styles from './AppStyles.js'
import { useState } from 'react'

const PRed = styled.p`
  font-size: 10pt;
  color: red;
`

const PBlue = styled.p`
  font-size: 30pt;
  color: greenyellow;
`

function App() {

  const [jumpStyle, setJumpStyle] = useState("Paragraph Red")
  // const [paragraphStyle, setParagraphStyle] = useState("Paragraph Red")

  // const [paragraphClass, setParagraphClass] = useState("Paragraph Red")
  // const [paragraphClass, setParagraphClass] = useState(styles.small)

  // const changeStyle = () => setParagraphClass("Paragraph Blue")
  // const changeStyle = () => setParagraphClass(styles.large)

  const [stateIsChanged, setStateIsChanged] = useState(false)

  const changeStyle = () => setStateIsChanged(!stateIsChanged)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <PRed>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       >
    //       Learn React
    //     </a>
    //     </PRed>
    //     <button onClick={changeStyle}>Chnage</button>
    //     {
    //       stateIsChanged ?
    //       (<><PBlue>Biru</PBlue></>) : (<><PRed>Merah</PRed></>)
    //     }
    //   </header>
    // </div>

    <div id="fullpage">
      <div class="section">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div class="time-circle">
          <div class="sun"></div>
          <div class="moon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="stars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="water"></div>
        </div>
        <div id="intro-text">
          <h4> <Clock /></h4>
        </div>
        <a href={unnamed}>
          <div id="switch">
            <div id="circle"></div>
          </div>
        </a>
      </div>
    </div>

  );
}

export default App;
// $("#switch").click(function () {
//   if ($("#fullpage").hasClass("night")) {
//     $("#fullpage").removeClass("night");
//     $("#switch").removeClass("switched");
//   }
//   else {
//     $("#fullpage").addClass("night");
//     $("#switch").addClass("switched");

//   }
// });