import { useState } from "react";
import ComponentOne from "./ComponentOne"
import ComponentTwo from './ComponentTwo';

const Parent = () => {
  const [count, setCount] = useState(0)
  // const increment = () => setCont(count + 1)
  // const decrement = () => setCont(count - 1)

  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />
    </div>
  )
}

export default Parent
