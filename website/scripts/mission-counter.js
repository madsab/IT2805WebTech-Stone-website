let MissonCounter = document.getElementById("missionCounter");
const AddRandomMissionCount = () =>{
    let MissionNumber = Math.floor(Math.random()*10+1)
    if (localStorage.CountMission == null || !(Number(localStorage.CountMission))){
        localStorage.CountMission = 115869
    }
    localStorage.CountMission = Number(localStorage.CountMission) + MissionNumber
    MissonCounter.innerHTML = "Missions Completed: " + String(localStorage.CountMission);
}
let randomTime = Math.floor(Math.random()* 1000 + 20000)

setInterval(AddRandomMissionCount, randomTime);