import React from 'react'
import './Home.css'
//import video from 'assets/ppp.jpg';
function Home() {
  return (
    <div>
        <video src="video/vdskydiving.mp4" autoPlay loop muted controls={false} 
        className="absolute left-0 w-full z-10 h-100vh"	/>
     {/* <video autoPlay loop
         src='video/vdskydiving.mp4' controls={false} type="video/mp4"/> */}
      
    </div>
  )
}

export default Home
