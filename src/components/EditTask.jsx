import { useState } from "react"

function EditTask({t,i,update}) {
  const [value, setValue] = useState(t.task)

  const handleEditTask = (e) => {
    setValue(e.target.value)
  }

  return(
    <>
      <input type="text" value={value} onChange={handleEditTask}/>
      <button onClick={() => update(i, value )}>Update</button>
    </>
  )
}

export default EditTask