import React,{ useState  }  from 'react'

import PropTypes from 'prop-types'



function TextInputArea(props:any) {
    
    const [Text, setText] = useState("")
    let noOfWords:any = Text.split(" ")
    noOfWords.forEach((element:any) => {
      noOfWords.splice(noOfWords.indexOf(element), 1)
      element = element.replaceAll(" ", "")
      noOfWords.push(element)
    });
    noOfWords.forEach((i:any)=>{
      if(i===""){
        noOfWords.splice(noOfWords.indexOf(i),1)
        
      }
      
    })


    noOfWords = noOfWords.length
    
    function upClick(e:any){
        e.preventDefault()
        // let OGText:string = e.target.value // this won't work as event 'e' is attached to the button (not to the textarea)
        let OGText:string = Text;
        
        setText(OGText.toUpperCase())
    }
    function downClick(e:any){
        e.preventDefault()
        // let OGText:string = e.target.value // this won't work as event 'e' is attached to the button (not to the textarea)
        let OGText:string = Text;
        
        setText(OGText.toLowerCase())
    }
    function txtChange(e:any){

        
        setText(e.target.value)
        
    }

    function clearTextArea(e:any){
      e.preventDefault();
      setText("")
    }

    function removeNewLine(e:any){
      e.preventDefault();
      setText(Text.replaceAll("\n",""))
    }

    function capitalize(e:any){
      e.preventDefault();
      
      // setText(Text[0].toUpperCase() + Text.substring(1,))
      // OR
      let restOfTheText = Text.replace(Text[0], "")
      setText(Text[0].toUpperCase() + restOfTheText)
    }

    function removeSpaces(e:any){
      e.preventDefault()
      setText(Text.replaceAll(" ", ""))
    }
    
  return (
    <>
    <form>
  <div className="form-group d-flex flex-column align-items-center">
    <h1>Enter The Text to analyze below:</h1>
    <textarea className="form-control" style={{width:"80vw"}} id="exampleFormControlTextarea1" rows={10}  value={Text} onChange={txtChange}></textarea>
  </div>
  <div className='text-center'>

  <button className="btn btn-primary mx-1" onClick={upClick}>{props.textAreaButtonUpText}</button>
  <button className="btn btn-primary mx-1" onClick={downClick}>{props.textAreaButtonLoText}</button>
  <button className="btn btn-primary mx-1" onClick={removeNewLine}>Remove New Line Chars</button>
  <button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Spaces</button>
  <button className="btn btn-primary mx-1" onClick={capitalize}>Capitalize Sentence</button>
  <button className="btn btn-primary mx-1" onClick={clearTextArea}>Clear</button>
  </div>
</form>


    <div className="d-flex flex-column align-items-center">
      <h1 className='my-3'>Your Text Summary</h1>
      <p>{noOfWords} {noOfWords===1? "Word" : "Words"} and {Text.length} Characters</p>
      <p>Time taken to read: {0.008*noOfWords} Minutes</p>
    </div>
    
    <div className="d-flex flex-column align-items-center">
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    
    </>
  )
}
TextInputArea.propTypes = {
    textAreaMsg:PropTypes.string.isRequired,
    textAreaButtonLoText:PropTypes.string.isRequired,
    textAreaButtonUpText:PropTypes.string.isRequired,
    
}

TextInputArea.defaultProps = {
    textAreaMsg:"Sample textAreaMsg",
    textAreaButtonLoText:"Sample textAreaButtonLoText",
    textAreaButtonUpText:"Sample textAreaButtonUpText"
}
export default TextInputArea