let turner = document.getElementById("turner");
let turner2 = document.getElementById("turner2");
let translateVal = 0;
function divider(event) {
        let dividers = document.getElementById("dividers");
        tagRemove(dividers);
        let element = event.toElement;
        if (element.id == "div1")
                translateVal = 0;

        if (element.id == "div2")
                translateVal = -100;

        if (element.id == "div3")
                translateVal = -200;
        element.classList.add("selected-divider");
        turner.style.transform = "translate(" + translateVal.toString() + "vw)";
        turner.style.transition = "transform 1s";
}


function divider2(event) {
        let dividers = document.getElementById("dividers2");
        tagRemove(dividers);
        let element = event.toElement;
        if (element.id == "div1")
                translateVal = 0;

        if (element.id == "div2")
                translateVal = -1170;
        element.classList.add("selected-divider");
        turner2.style.transform = "translate(" + translateVal.toString() + "px)";
        turner2.style.transition = "transform 1s";
}

function tagRemove(dividers) {
        for (let i = 1; i < dividers.childNodes.length; i += 2)
                dividers.childNodes[i].classList.remove("selected-divider");
}