import React, {useRef, useState, useEffect} from "react";
function useClickOutside(fn){
  const ref = useRef();
  const handleClick = e => {
    if(!ref.current.contains(e.target)){
      fn();
    }
  }
  useEffect(()=>{
    document.addEventListener("click", handleClick)
  }, [])
  return ref;
}

function App() {
  const [close, setClose] = useState(true);

  const onClickOutside = () => {
    setClose(false);
    console.log("lalala", close, ref);
  }
  const ref = useClickOutside(onClickOutside);
  return (
    <div className="Wrapper">
      <div ref={ref}>
        <h1>Hello Poburi</h1>
        <h2>This should be a popup</h2>
        {!close?"close modal":"open modal"}
      </div>
      <input type="text"/>
    </div>
  )
}

export default App;