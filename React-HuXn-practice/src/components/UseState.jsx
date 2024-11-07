import { useState } from "react"
const UseState = () => {
  // const [count, setCont] = useState(0)
  // const increment = () => setCont(count + 1)
  // const decrement = () => setCont(count - 1)

  // ----------------------------------------------------------------------------------------------

  // const [friends, setFriends] = useState(['Rohit', 'Gaurav'])
  // const addFriend = () => setFriends([...friends, 'Ajay'])
  // const removeFriend = () => setFriends(friends.filter((f) => f !== 'Ajay'))
  // const updateFriend = () => setFriends(friends.map(f => f === 'Rohit' ? 'Rohit Kumar' : f))

  // ----------------------------------------------------------------------------------------------
  // const [movie, setMovie] = useState({
  //   title: "Passenger",
  //   rating: 8
  // })

  // const copyMovie = {
  //   ...movie,
  //   rating: 9
  // }
  // setMovie(copyMovie)
  // const handleClick = () => setMovie({ ...movie, rating: 9 })

  // ----------------------------------------------------------------------------------------------
  // Array of objects
  const [movies, setMovies] = useState([
    { id: 1, title: "SpiderMan", rating: 7 },
    { id: 2, title: "Batman", rating: 9 },
    { id: 3, title: "Avenger", rating: 9 },
  ])

  const handleClick = () => setMovies(movies.map(m => (m.id === 1 ? { ...m, title: "John Wick" } : m)))

  // ----------------------------------------------------------------------------------------------
  return (
    <>
      {/* <div>
        <h1>Counter {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div> */}

      {/* <div>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
      </div>
      <button onClick={addFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button> */}

      {/* <h1>Title: {movie.title}</h1>
      <p>Rating: {movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button> */}

      <section>
        {movies.map((movie) => (
          <ul style={{ listStyle: "none" }} key={movie.id}>Movie Title: {movie.title}
            <li>Rating: {movie.rating}</li>
          </ul>
        ))}
        <button onClick={handleClick}>Change Name</button>
      </section>
    </>
  )
}

export default UseState
