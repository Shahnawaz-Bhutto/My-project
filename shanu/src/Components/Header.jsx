import React from 'react'

function Header() {
  return (
    <div>
      {/* =====Header 1 Start===== */}
      <div className="firstheader">
        <div className="ecourses">
          <h1>ECOURCES</h1>
        </div>
        <div className="office">
          <h3>Office</h3>
          <p>Next planer Acadmay (skd), Gilgit Baltistan, Pakistan</p>
        </div>
        <div className="gmail">
          <h3>Gmail</h3>
          <p>shahnawazbhutto000@gmail.com</p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>+923555869818</p>
        </div>
      </div>
      <hr />
      {/* =====Header 1 End===== */}
      {/* =====Header 2 Start===== */}
      <div className="secondheader">
        <div className="subject">
          <h1>Subject</h1>
        </div>
        <div className="tags">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Courses">Courses</a>
          <a href="#Developers">Developers</a>
          <a href="#Blogs">Blogs</a>
          <a href="#Contact">Contact</a>
          <button><p>joint us</p></button>
        </div>
      </div>
      {/* =====Header 2 End===== */}
     
      
    
    </div>
  )
}

export default Header
