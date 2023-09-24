function lenartText() { //makes information box visible, and hides other boxes if the user clicks multiple.
    document.getElementById("target_lenart").style.display = "block";
    document.getElementById("target_chomlis").style.display = "none";
    document.getElementById("target_james").style.display = "none";
    document.getElementById("target_bengt").style.display = "none";
    document.getElementById("target_grizzly").style.display = "none";
}

function chomlisText() { //makes information box visible, and hides other boxes if the user clicks multiple.
    document.getElementById("target_chomlis").style.display = "block";
    document.getElementById("target_lenart").style.display = "none";
    document.getElementById("target_james").style.display = "none";
    document.getElementById("target_bengt").style.display = "none";
    document.getElementById("target_grizzly").style.display = "none";
}

function jamesText() { //makes information box visible, and hides other boxes if the user clicks multiple.
    document.getElementById("target_james").style.display = "block";
    document.getElementById("target_lenart").style.display = "none";
    document.getElementById("target_chomlis").style.display = "none";
    document.getElementById("target_bengt").style.display = "none";
    document.getElementById("target_grizzly").style.display = "none";
}

function bengtText() { //makes information box visible, and hides other boxes if the user clicks multiple.
    document.getElementById("target_james").style.display = "none";
    document.getElementById("target_lenart").style.display = "none";
    document.getElementById("target_chomlis").style.display = "none";
    document.getElementById("target_bengt").style.display = "block";
    document.getElementById("target_grizzly").style.display = "none";
}

function grizzlyText() { //makes information box visible, and hides other boxes if the user clicks multiple.
    document.getElementById("target_james").style.display = "none";
    document.getElementById("target_lenart").style.display = "none";
    document.getElementById("target_chomlis").style.display = "none";
    document.getElementById("target_bengt").style.display = "none";
    document.getElementById("target_grizzly").style.display = "block";
}



function remove_box() { //box in every information to hide box to see the world map again
    document.getElementById("target_lenart").style.display = "none";
    document.getElementById("target_chomlis").style.display = "none";
    document.getElementById("target_james").style.display = "none";
    document.getElementById("target_bengt").style.display = "none";
    document.getElementById("target_grizzly").style.display = "none";
}