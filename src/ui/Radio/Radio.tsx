import React, { FC, Dispatch, SetStateAction } from "react"
import classes from "./Radio.module.css"

interface RadioProps {
  id: string | number
  color?: string
  margin?: string
  active: number | string
  setActive: Dispatch<SetStateAction<number | string>>
}

const Radio: FC<RadioProps> = ({
  color = "darkblue",
  margin = "0",
  setActive,
  active,
  id,
}) => {
  const activeRadio = active === id ? true : false
  const radioInnerClasses: string[] = [classes.radioInner]
  if (activeRadio) radioInnerClasses.push(classes.activeElement)

  const toggleRadio = (): void => {
    setActive(id)
  }

  return (
    <div
      onClick={toggleRadio}
      className={classes.radio}
      style={{
        border: `1px solid ${color}`,
        margin,
      }}
    >
      <div
        className={radioInnerClasses.join(" ")}
        style={{
          background: color,
        }}
      ></div>
      <div
        className={classes.overlay}
        style={{
          background: color,
        }}
      ></div>
    </div>
  )
}

export default Radio
