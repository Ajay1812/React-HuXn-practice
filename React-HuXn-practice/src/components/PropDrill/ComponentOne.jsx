const ComponentOne = ({ count, onClickHandler }) => { // props.count, props.onClickHandler
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>+</button>
    </div>
  )
}

export default ComponentOne
