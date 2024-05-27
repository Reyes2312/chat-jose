import { useUserStore } from "../../../lib/userStore"
import "./userInfo.css"


const Userinfo = () => {
   
  const { currentUser } = useUserStore();


   return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="More options" />
        <img src="./video.png" alt="Video options" />
        <img src="./edit.png" alt="Edit options" />
      </div>
    </div>
   )
}

export default Userinfo
