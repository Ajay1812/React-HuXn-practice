import React, { useEffect, useState } from 'react'

const Storage = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName) : ""
  })

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  const handleClear = () => setName('')

  return (
    <div>
      <h1>Your Name : {name} </h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default Storage
