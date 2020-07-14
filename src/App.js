import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./App.css";

function useInput(defaultValue){
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: {value}
    } = e;
    setValue(value);
  };

  return {value, onChange};
}

function useFectch(url){
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      setPayload(data);
    } catch {
      setError("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    callUrl();
  },[])

  return {payload, loading, error};
}


const App = () => {
  const name = useInput("");
  const {payload, loading, error} = useFectch("http://aws.random.cat/meow");
  return (
    <div>
      <h1>Use Hooks</h1>
      {/* 
        value = (name.value) onChange={name.onChange} === {...name}
      */}
      <input {...name} placeholder="성함을 입력해주세요." />
      <br/>
      {loading && <span>고양이를 불러오고 있습니다.</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} width="150"/>}
    </div>
  )
};

export default App;
