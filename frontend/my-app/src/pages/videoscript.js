function func(){
        alert('Hello')
        let listVideo = document.querySelectorAll('.video-list .vid');
        let mainVideo = document.querySelector('.main-video video');
        let title = document.querySelector('.main-video .title');
        
        listVideo.array.forEach(video => {
            video.onclick = () =>{
                listVideo.forEach(vid => vid.classList.remove(''))
            }
        });
}