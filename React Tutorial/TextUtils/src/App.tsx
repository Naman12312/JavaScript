import React from 'react';
import Navbar from "./components/Navbar"
// import About from './components/About';
import TextInputArea from './components/TextInputArea';

function App() {
  return (<>
  
  
    <Navbar title="TextUtils" search={true}/>
    <TextInputArea textAreaMsg="Enter the text to analyze below: " textAreaButtonLoText="Convert to LowerCase" textAreaButtonUpText="Convert to UpperCase"/>
    {/* <About/> */}
    </>
  );
}

export default App;
