import React, {useRef, useEffect} from "react";

/*
* useRef는 전체 컴포넌트 중 하나의 node, element를 선택하는 방법이다.
js의 document.getElementById()와 비슷하다고 생각하면 됨. 
only one임.

*/
function App() {
  const inputRef = useRef();
  setTimeout(()=>{
    inputRef.current.focus()
  },3000)
  return (
    <div>
      <div>
        <h1>Hello Poburi</h1>
        <h2>This should be a popup</h2>
      </div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}

export default App;