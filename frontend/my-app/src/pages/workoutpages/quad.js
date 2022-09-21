import React from 'react'
import '../css/video.css';







export default function tripage () {
   
  return (
      
    <div className="App">
         
           
    <body className ="App-body">

    <h2 class="heading" style={{margin: "0.1em", color: 'white'}} >Choose Your Workout</h2>

    <div class="container">
        <div class ="main-video">
        <h2 class="title" style={{color: "black"}}>Quad Workouts</h2>
            <div class="video">
                <iframe
                src="https://www.youtube.com/embed/KMnp7y6_sMA"
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
                src="https://www.youtube.com/embed/C5aHk9mrLv8"
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
                src="https://www.youtube.com/embed/DDpa-P4CcFs"
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
                src="https://www.youtube.com/embed/gE1OG72J7Ls"
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
                src="https://www.youtube.com/embed/aeNPFLLKXro"
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
