
const UserStatus = ({ loggedIn, isAdmin }) => {
  if (isAdmin && loggedIn) return <div>Welcom Admin</div>
  else if (loggedIn) return <div>Welcom Admin</div>
}

export default UserStatus
