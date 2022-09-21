import React from 'react'
import '../css/video.css';







export default function tripage () {
   
  return (
      
    <div className="App">
         
           
    <body className ="App-body">

    <h2 class="heading" style={{margin: "0.1em", color: 'white'}} >Choose Your Workout</h2>

    <div class="container">
        <div class ="main-video">
        <h2 class="title" style={{color: "black"}}>Lower Back Workouts</h2>
            <div class="video">
                <iframe
                src="https://www.youtube.com/embed/2tnATDflg4o"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                height="500px"
                width="800px"
              />{" "}
            </div>
        </div>

        <div class="video-list">
        <h2 class="title" style={{color: "black"}}>More Videos</h2>
            <div class="vid active">
            <iframe
                src="https://www.youtube.com/embed/bOJu7xi3l3Q"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                height="500px"
                width="1300px"
              />{" "}
            </div>
            <div class="vid">
            <iframe
                src="https://www.youtube.com/embed/cVnIAfmEox0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                height="500px"
                width="1300px"
              />{" "}
            </div>
            <div class="vid">
            <iframe
                src="https://www.youtube.com/embed/wbdc0KN-d_w"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                height="500px"
                width="1300px"
              />{" "}
            
            </div>
            <div class="vid">
            <iframe
                src="https://www.youtube.com/embed/2daigSBkx68"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                height="500px"
                width="1300px"
              />{" "}
            </div>
        </div>
        
    </div>
   

    </body>
    
  </div>

  );
}
