import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { Navigate} from "react-router-dom";
import {auth} from "../../firebase"
import firebase from "firebase/compat";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user.displayName);
        // ...
    } else {

    }
});

export default function Profile() {

    const user = firebase.auth().currentUser;
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> {user.displayName}</h4>
                <span className="profileInfoDesc">This is your profile page</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

