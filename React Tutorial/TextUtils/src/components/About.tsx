import React, {useState} from 'react'

const About = () => {
    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white",
        width: "50rem",
        padding:"0",
        margin:"0",
        border:"1px solid white"
        
    })

    const [divStyle, setdivStyle] = useState({
        color:"black",
        backgroundColor:"white",
        width: "100vw",
        height: "92.5vh"
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleDarkMode = ()=>{
        if(myStyle['backgroundColor']==="white"){
            // when button is clicked and light mode is on, Enable dark mode
            setMyStyle({
                color:"white",
                backgroundColor:"black",
                width: "50rem",
                padding:"0",
        margin:"0",
        border:"1px solid white"
                
            })
            setdivStyle({
                
                    color:"white",
                    backgroundColor:"black",
                    width: "100vw",
                    height: "92.5vh"
                
            })
            setBtnText("Enable Light Mode") // change button text to Enable Light Mode
        }

        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                width: "50rem",
                padding:"0",
                margin:"0",
                border:"1px solid white"
                
            })
            setdivStyle({
                
                color:"black",
                backgroundColor:"white",
                width: "100vw",
                height: "92.5vh"
            
        })


            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div style={divStyle} className='d-flex flex-column align-items-center'>

    <div>
    <div className="card" style={myStyle}>
    
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    <div className="card" style={myStyle}>
    
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    <div className="card" style={myStyle}>
    
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    <div className="card" style={myStyle}>
    
    
    </div>
    <div className="container d-flex justify-content-center">

        <button className="btn btn-primary my-3" onClick={toggleDarkMode}> 
            {btnText}
        </button>
    </div>
</div>

</div>
  )
}

export default About