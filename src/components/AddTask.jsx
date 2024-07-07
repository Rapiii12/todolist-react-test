import { useState } from "react"

function AddTask({addTask}) {
  const [value,setValue] = useState('')
  const [validate,setValidate] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddTask = () => {
    if(value == '') {
      setValidate("input can't be empty")
      return
    } else {
      setValidate('')
    }
    addTask(value)
    setValue('')
    
    console.log([...addTask])
  }

  return(
    <>
      <div>
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={handleAddTask}>Add(+)</button>
        <p>{validate}</p>
      </div>
    </>
  )
}

export default AddTask