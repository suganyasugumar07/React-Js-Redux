import React from 'react';
import './App.css';
import AdminDashboard from './AdminDashboard/AdminDashboard.react';
import Profile from './Profile/Profile.react';
import profilePicture from './images/profilePic.png';
import ShowCourse from './ShowCourse/ShowCourse.react';
import TrainingDashboard from './TrainingDashboard/TrainingDashboard.react';
import MyRoutes from './MyRoutes/MyRoutes.react';

const myUser = {
  name: 'React',
  password: '123@abc'
}

function App() {
  return (
    <div className="App">
      {/* <TrainingDashboard></TrainingDashboard>
     <ShowCourse></ShowCourse>
      <Profile imageRef={profilePicture} points={5} level={'level'} user={myUser}></Profile>
      <AdminDashboard></AdminDashboard> */}

      <MyRoutes></MyRoutes>
    </div>
  );
}

export default App;
