

let fakeWebsite = document.getElementById("fake_site")
let fakeWebsitePictureLEFT = document.getElementById("Rakkestad_reveal_img_left")
let fakeWebsitePictureRIGHT = document.getElementById("Rakkestad_reveal_img_right")
let STONEwebsite = document.getElementById("STONEWebsite") 
let STONEnavbar = document.getElementById("navbar")

//LocalSessionStorage that keeps track if the user has been authorized so the fake website doesn't show when going back to index.html
if (typeof(Storage) !== "undefined"){
  if (localStorage.authorized == 1){
    document.body.background = "#171A1D"
    fakeWebsite.style.display = "none"
    STONEwebsite.style.display= "block"
    document.title = "STONE"
  }
  else{
    localStorage.authorized = 0;
  }
}
else{
  alert("Your browser doesn't have supported Web storage. Sorry for the inconvinience.")
}


// Function that changes certain colors and styling during loading of the page
document.body.onload = () => {
  if (localStorage.authorized != 1){
    document.body.style.background = "linear-gradient(180deg, rgba(14,8,72,1) 0%, rgba(19,19,22,1) 100%)"
  }
  STONEnavbar.style.background = "rgba(0,0,0,0)"
  MissonCounter.innerHTML = "Missions Completed: " + String(localStorage.CountMission);
}

// Function adds the href of the object that is clicked. Used later when page is unloaded
window.addEventListener("click", (event) =>{
  object = event.target.getAttribute("href")
  localStorage.UserLeft = object
})
// Function that checks if the user is leaving the page. If so then the fake website will show on the next visit. Will show if you click on STONE when user on STONE
window.addEventListener("beforeunload", () => {
  if (localStorage.UserLeft == "target_map.html"){}
  else if (localStorage.UserLeft == "list_agents.html"){}
  else if (localStorage.UserLeft == "HISTORY.html"){}
  else if (localStorage.UserLeft == "index.html"){ localStorage.authorized = 0;}
  else if (localStorage.UserLeft == "store.html"){}
  else if (localStorage.UserLeft == "forms.html"){}
  else {
    localStorage.authorized = 0;
  }
})


//Function for moving "whey" icon 
const allowDrop = (event) => {
    //event allows the target to be dropped by preventing the default setting.
    event.preventDefault();
  }
//Function for draging "whey" icon
  const drag = (event) => {
    event.dataTransfer.setData("Key", event.target.id);
  }                                                                           //Code borrowed from https://www.w3schools.com/html/html5_draganddrop.asp

  //Function for dropping "whey" icon
  const drop = (event) => {
    const key = event.dataTransfer.getData("Key");
    event.target.appendChild(document.getElementById(key));
    window.scrollTo({top: 0, behavior: "smooth"});
    document.body.classList.add("stop-scrolling")
    AddRandomMissionCount()
    localStorage.authorized = 1;
    revealAnimationinterval = setInterval(revealAnimation, 1500)
  }



  
  //Function for the transitioning from Rakkestad
  const transitionToSTONE = () => {
    fakeWebsitePictureLEFT.style.display = "none";
    fakeWebsitePictureRIGHT.style.display = "none";
    document.body.classList.remove("stop-scrolling")
    localStorage.authorized = 1
    clearInterval(transitionToSTONE)
  }
  
  //Function for the animation of revealing
  const revealAnimation = () => {
    fakeWebsite.style.display = "none"
    fakeWebsitePictureLEFT.style.display = "block"
    fakeWebsitePictureLEFT.style.animation = "reveal_left 4s"
    fakeWebsitePictureLEFT.style.boxShadow = "3px 3px 10px black"


    fakeWebsitePictureRIGHT.style.display = "block"
    fakeWebsitePictureRIGHT.style.animation = "reveal_right 4s"
    fakeWebsitePictureRIGHT.style.boxShadow = "0 0 3px 0 black"
    fakeWebsitePictureRIGHT.style.position = "absolute"

    document.title = "STONE"
    document.body.style.background = "#171A1D";
    
    STONEwebsite.style.display = "block";
    setInterval(transitionToSTONE ,3000)
    clearInterval(revealAnimationinterval)
  }


