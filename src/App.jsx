import { useState } from "react"

function App() {
  const [data,setData] = useState({
    name: "John Doe",
    status : "active"
  })
  const changeDataName = (e) => {
    setData({...data,name: e.target.value})
  }
  return(
    <>
      <p>{data.name}</p>
      <p>{data.status}</p>
      <input type="text" value={data.name} onChange={changeDataName} />
      <input type="text" value={data.status} onChange={changeDataName} />
    </>
  )
}

export default App
