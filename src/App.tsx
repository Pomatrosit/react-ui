import React, { useState } from "react"
import Checkbox from "./ui/Checkbox/Checkbox"
import Dropdown from "./ui/Dropdown/Dropdown"
import Radio from "./ui/Radio/Radio"

function App() {
  const [checkboxActive, setCheckboxActive] = useState<boolean>(false)
  const [activeRadio, setActiveRadio] = useState<string | number>(1)

  return (
    <div>
      <h1>Приветики!</h1>

      <div style={{ marginBottom: 30 }}>
        <Checkbox
          color='#E0486C'
          active={checkboxActive}
          setActive={setCheckboxActive}
        />
      </div>

      <div style={{ marginBottom: 30 }}>
        <Radio
          id={1}
          margin='0 0 10px 0'
          color='#E0486C'
          active={activeRadio}
          setActive={setActiveRadio}
        />
        <Radio
          id={2}
          margin='0'
          color='#E0486C'
          active={activeRadio}
          setActive={setActiveRadio}
        />
      </div>

      <div style={{ marginBottom: 30 }}>
        <Dropdown width='200px' height='30px' borderColor='#E0486C' />
      </div>
    </div>
  )
}

export default App
