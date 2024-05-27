import { useState,useEffect } from "react";
import axios from "axios"

function App() {
  const [catFact,setcatFact]=useState("")
  const fetchData = async ()=>{
    const {data}=await axios.get("https://catfact.ninja/fact")
   setcatFact(data.fact)
   
  }
  useEffect (()=>{
    fetchData()
   },[])
  return (
    <div className="flex bg-black min-h-screen text-white justify-center items-center gap-5 flex-col">

<button onClick={fetchData} className="flex bg-orange-500 rounded-md text-black px-5 py-2 ">CAT FACT</button>
<h1>{catFact}</h1>
    </div>
  );
}

export default App;
