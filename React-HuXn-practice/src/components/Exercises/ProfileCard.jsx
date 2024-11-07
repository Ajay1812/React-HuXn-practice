import { FaBomb, FaFire } from "react-icons/fa";
const ProfileCard = () => {
  const styles = { backgroundColor: "lightgray", padding: "20px", borderRadius: "8px", }
  return (
    <>
      <div style={styles}>
        <h2>Happy Diwali <FaBomb color="orange" /> <FaFire color="orange" /><FaFire color="orange" /></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At soluta aliquam deserunt esse expedita dolor hic minus qui doloribus veritatis! Quaerat, animi? Tempore similique autem quos magni accusamus maxime harum? </p>
      </div>
    </>
  )
}

export default ProfileCard
