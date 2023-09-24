let videos = document.querySelectorAll(".articleVideo")
let bcVideo = document.getElementById("index_video")

window.addEventListener("scroll", () => {
    if (document.title == "STONE"){
        videosInSight = []
        for(i=0; i < videos.length; i++){  
            if (!isInViewport(videos[i])){
                videos[i].pause()
                bcVideo.play()
            }
            else {
                videosInSight.push(videos[i])
            }
        }
        for(j=0; j < videosInSight.length; j++){
            if (videosInSight.length == 0){
                bcVideo.play()
            }
            videosInSight[j].play()
            bcVideo.pause()
        }
    }   
})
const isInViewport = (element) => { // //Gets the elements position relative to the viewport. Borrowed from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    const elementPosition = element.getBoundingClientRect()
    return (
        elementPosition.top >= (0 - elementPosition.height ) &&
        elementPosition.left >= 0 &&
        elementPosition.bottom <= (window.innerHeight + elementPosition.height) &&
        elementPosition.right <= window.innerWidth
        )
}

