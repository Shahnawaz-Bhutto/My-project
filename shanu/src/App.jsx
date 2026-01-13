import React from 'react'
import './App.css'
import Header from '../src/Components/Header'

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <div className="photo">
        <h2>Best Online Course</h2><br /><br />
        <h1>Best Eduacation From </h1><br /><h3>Your Home</h3>
        <br />
        <button><p>Learn more</p></button>
      </div> */}


      <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
    </div>


  )
}

export default App
