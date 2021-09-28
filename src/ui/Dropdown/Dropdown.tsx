import React, { FC } from "react"
import classes from "./Dropdown.module.css"

interface DropdownProps {
  width?: string
  height?: string
  borderColor?: string
}

const Dropdown: FC<DropdownProps> = ({
  width = "100%",
  height = "25px",
  borderColor = "darkblue",
}) => {
  return (
    <div
      className={classes.dropdownMain}
      style={{
        width,
        height,
        borderColor,
      }}
    >
      <div className='options'></div>
    </div>
  )
}

export default Dropdown
