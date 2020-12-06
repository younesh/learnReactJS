import  React, { useState} from "react";

function EventManagment (Props) {

    const [varText, setVarText] = useState("inistalizText");
    const [isConnected, setIsConnected] = useState(false);

      //  setVarText();
      const  modifayText =  () => {
        setVarText("New value >>  " + new Date().toLocaleDateString());
      }
      let DOMconnection = "";
      if (isConnected) {
        DOMconnection = (<p> you are connected lol !!! </p>); 
      } else {
        DOMconnection = (<p><strong> your not conneted man ? </strong>   </p>);   
      }
    // setIsConnected(!isConnected)
    const toggleConnect = () => {
        setIsConnected(!isConnected); 
    }; 
    return (
       <section className="test">
           <h2> Manage event lol {Props.langue}</h2>
           <input type="text" value={varText} /> 
           <button onClick={modifayText}> modify text</button>
            <hr/>
            {DOMconnection}
            <button onClick={toggleConnect}> connect / disconnect ? </button>  
          
    <ul>
   {/*  { Props.data.length } */}
    { Props.data.map((item) =>(<li> {item} </li>)) }
   
         </ul>
           <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam, soluta asperiores expedita et minima ducimus placeat pariatur harum libero, reiciendis perferendis nostrum ab. Delectus ipsum dicta perspiciatis iure adipisci. </p>
       </section> 
    )
}

export default EventManagment