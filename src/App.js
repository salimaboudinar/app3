import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfilePhoto from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Addresss from './component/profile/Address';

function App() {
  return (
  <>
    <ProfilePhoto/>
    <FullName/>
    <Addresss/>
  </> 
  );
};
export default App;