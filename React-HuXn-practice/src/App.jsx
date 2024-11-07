import { Card } from './components/Card.jsx';
import { Password } from './components/Password.jsx';
import { Cart } from './components/Cart.jsx';
import { Weather } from './components/Exercises/Weather.jsx'
import UserStatus from './components/Exercises/UserStatus';
import { Greeting } from './components/Exercises/Greeting';
import { StyledCard } from './components/Exercises/StyledCard.jsx';
import ProfileCard from './components/Exercises/ProfileCard';

function App() {

  return (
    <>
      {/* <Card>
        <h1>Hello this card compoent</h1>
        <p>Card Hello :_: </p>
      </Card> */}

      {/* <Password isValid={true} /> */}

      {/* <Cart /> */}

      {/* < Weather temprature={8} /> */}

      {/* <UserStatus loggedIn={true} isAdmin={true} /> */}

      {/* <Greeting timeOfDay={"morning"} /> */}

      <StyledCard />

      <ProfileCard />

    </>
  )
}
export default App