var checkbox = document.querySelector("#flexSwitchCheckChecked")

checkbox.addEventListener('change', function () {
    if (!this.checked) {
        document.body.classList.add("light")
        document.querySelector(".top-layer").classList.add('top-bg-light')
        document.querySelector(".headers").style.color = "#000";
        document.querySelector(".total-followers").style.color = "hsl(228, 12%, 44%)";
        document.querySelector("#second-h").style.color = "hsl(228, 12%, 44%)";
        document.querySelector(".form-check-label").style.color = "hsl(228, 12%, 44%)";
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll('.head-boxes')[i].classList.add('card-light')
            document.querySelectorAll('.mention')[i].style.color = "hsl(228, 12%, 44%)";
            document.querySelectorAll('.number')[i].style.color = "#000";
            document.querySelectorAll('.followers')[i].style.color = "hsl(228, 12%, 44%)";
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll('.bottom-boxes')[i].classList.add('card-light')
            document.querySelectorAll('.top-left')[i].style.color = "hsl(228, 12%, 44%)";
            document.querySelectorAll('.bottom-left')[i].style.color = "#000";
        }


    } else {
        document.body.classList.remove("light")
        document.querySelector(".top-layer").classList.remove('top-bg-light')
        document.querySelector(".headers").style.color = "#fff";
        document.querySelector(".total-followers").style.color = "hsl(228, 34%, 66%)";
        document.querySelector("#second-h").style.color = "hsl(228, 34%, 66%)";
        document.querySelector(".form-check-label").style.color = "#fff";
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll('.head-boxes')[i].classList.remove('card-light')
            document.querySelectorAll('.mention')[i].style.color = "hsl(228, 34%, 66%)";
            document.querySelectorAll('.number')[i].style.color = "#fff";
            document.querySelectorAll('.followers')[i].style.color = "hsl(228, 34%, 66%)";
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll('.bottom-boxes')[i].classList.remove('card-light')
            document.querySelectorAll('.top-left')[i].style.color = "hsl(228, 34%, 66%)";
            document.querySelectorAll('.bottom-left')[i].style.color = "#fff";
        }
    }
});