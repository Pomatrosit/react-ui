import React, { FC, Dispatch, SetStateAction } from "react"
import classes from "./Checkbox.module.css"

interface CheckboxProps {
  color?: string
  margin?: string
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const Checkbox: FC<CheckboxProps> = ({
  color = "darkblue",
  margin = "0",
  active,
  setActive,
}) => {
  const checkboxInnerClasses: string[] = [classes.checkboxInner]
  if (active) checkboxInnerClasses.push(classes.activeElement)

  const iconClasses: string[] = [classes.checkIcon]
  if (active) iconClasses.push(classes.activeElement)

  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      className={classes.checkbox}
      style={{
        border: `1px solid ${color}`,
        margin,
      }}
    >
      <div
        className={checkboxInnerClasses.join(" ")}
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
      <svg
        className={iconClasses.join(" ")}
        width='13'
        height='10'
        viewBox='0 0 13 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.24525 7.45706L1.27529 4.496L0 5.76747L4.24525 10L13 1.27147L11.7247 0L4.24525 7.45706Z'
          fill='#fff'
        />
      </svg>
    </div>
  )
}

export default Checkbox
