export const Greeting = ({ timeOfDay }) => {
  // const time = Date.now()
  return (
    <div>
      {timeOfDay === 'morning ' ? <div> Good Morning </div> : <div>Good Afternoon</div>}
    </div>
  )
}
