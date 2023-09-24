
//Making the navbar tag
let navbar = document.createElement("nav")
navbar.id = "navbar";

//Making each link
let targets = document.createElement("a")
targets.href = "target_map.html"
targets.innerHTML = "Targets"
let agents = document.createElement("a")
agents.href = "list_agents.html"
agents.innerHTML = "Agents"
let history = document.createElement("a")
history.href = "HISTORY.html"
history.innerHTML = "History"
let stoneDiv = document.createElement("div")
stoneDiv.id = "STONE"
let stone = document.createElement("a")
stone.id = "STONETEXT"
stone.href = "index.html"
stone.innerHTML = "STONE"
let store = document.createElement("a")
store.href = "store.html"
store.innerHTML = "Store"
let contact = document.createElement("a")
contact.href = "forms.html"
contact.innerHTML = "Contact"

//Adding drop-down menu for phone usage
let dropdownDiv = document.createElement("div")
dropdownDiv.className = "dropdown"
let dropdownButton = document.createElement("button")
dropdownButton.className = "dropdown-button"
dropdownButton.setAttribute("onclick", "dropdownNav()")
    let bar1 = document.createElement("div")
    let bar2 = document.createElement("div")
    let bar3 = document.createElement("div")
    bar1.className = "menu dropdown-button"
    bar2.className = "menu dropdown-button"
    bar3.className = "menu dropdown-button"
let dropdownContent = document.createElement("div")
dropdownContent.className = "dropdown-content"
dropdownContent.id = "myDropdown"

//Add all to dropdown menu
dropdownContent.append(targets)
dropdownContent.appendChild(agents)
dropdownContent.appendChild(history)
dropdownContent.appendChild(store)
dropdownContent.appendChild(contact)

dropdownButton.appendChild(bar1)
dropdownButton.appendChild(bar2)
dropdownButton.appendChild(bar3)

dropdownDiv.appendChild(dropdownButton)
dropdownDiv.appendChild(dropdownContent)

//Adding links in navbar (cloneNode borrowed from https://stackoverflow.com/questions/12717360/how-to-append-the-same-variable-twice)
navbar.appendChild(targets.cloneNode(true))
navbar.appendChild(agents.cloneNode(true))
navbar.appendChild(history.cloneNode(true))
stoneDiv.appendChild(stone)
navbar.appendChild(stoneDiv)
navbar.appendChild(store.cloneNode(true))
navbar.appendChild(contact.cloneNode(true))


//Making footer
let footer = document.createElement("footer")
let hr = document.createElement("hr")
let footerText = document.createElement("p")

footerText.innerHTML = "--- Strategic Tactical Organization of Norwegian Espionage ---"
footer.appendChild(hr)
footer.appendChild(footerText)

if(document.getElementById("STONEWebsite")){
    let websiteStone = document.getElementById("STONEWebsite")
    let mainContent = document.querySelector(".mainContent")
    websiteStone.prepend(navbar)
    websiteStone.prepend(dropdownDiv)
    mainContent.appendChild(footer)
    console.log("Hei, din luring, skal du drive å inspisere nå ha")
}
else{
    document.body.prepend(navbar)
    document.body.prepend(dropdownDiv)
    if(!document.getElementById("footerblock")){
        document.body.appendChild(footer)
    }

}

const  myDrop = document.getElementById("myDropdown")

function dropdownNav() {
    myDrop.classList.toggle("db");
};

window.onclick = function(event) {      //Code borrowed from https://www.w3schools.com/howto/howto_js_dropdown.asp
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('db')) {
                openDropdown.classList.remove('db');
            }
        }
    }
}