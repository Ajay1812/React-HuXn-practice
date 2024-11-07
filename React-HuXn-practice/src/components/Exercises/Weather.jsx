import React from 'react'

export const Weather = ({ temprature }) => {
  if (temprature < 15) {
    return (
      <div>It's Cold outside</div>
    )
  } else if (temprature >= 15 && temprature <= 25) {
    return (
      <div>It's nice outside</div>
    )
  } else {
    return (
      <div>It's hot outside</div>
    )
  }
}

