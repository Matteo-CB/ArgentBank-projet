import axios from "axios";
import { useSelector } from "react-redux";

const HeaderUser = () => {
  const profil = useSelector((state:any) => state.currentProfile.profil)
  const token = localStorage.getItem('token')
  function editName(){
    let newUserName = prompt('Edit name', profil.userName)
    if(newUserName === null){
      newUserName = profil.userName
    }
    
    axios.put('http://localhost:3001/api/v1/user/profile', {userName: newUserName}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => window.location.href='/user')
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {profil.firstName ? `${profil.firstName} ${profil.lastName} !` : '---- ---- !'}
      </h1>
      <button className="edit-button" onClick={editName}>Edit Name</button>
    </div>
  );
};

export default HeaderUser;
