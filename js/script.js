const $ = document
const storty_popup = $.querySelector(".story-popup")
const storty_popup_show = $.querySelector(".story-popup-show")
let pupopflag = false
const fade_body = $.querySelector(".fade")
const main_fade = $.querySelector(".mainfade")
import {
    customCaregory
} from "../component/catogery.js";
import {
    Amazing
} from "../component/amazing.js";
window.customElements.define("site-user", customCaregory)
window.customElements.define("site-amazing", Amazing)


$.querySelectorAll(".story-img-box").forEach(i => {
    i.addEventListener("click", event => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        storty_popup.classList.add("story-popup-visible")
        console.log(event.target.children)
        console.log(event.target.parentElement.children[2].classList.add("story-img-after-click"))
        $.body.style.overflow = "hidden"


        const progressBarEl = document.querySelector(".story-popup-progress");
        pupopflag = true
        let remainingTime = 500; // seconds
        const totalTime = remainingTime;

        function countdown() {
            if (remainingTime > 0) {
                if (pupopflag) {
                    // update countdown timer

                    // update progress bar
                    const progress = ((totalTime - remainingTime) / totalTime) * 100;
                    progressBarEl.style.width = `${progress}%`;
                    console.log(progress)
                    if (progress === 99.8) {
                        ClosePopup()
                    }
                    remainingTime--;
                    setTimeout(countdown, 10);
                } else {
                    remainingTime = 500;
                    return true
                }
            } else {
                // countdown finished
                progressBarEl.style.width = "100%";
            }
        }

        countdown();


    })
})


storty_popup.addEventListener("click", event => {
    ClosePopup()
})

storty_popup_show.addEventListener("click", event => {
    event.stopPropagation()


})

$.querySelector(".story-popup-icon").addEventListener("click", event => {
    ClosePopup()
})

function ClosePopup() {
    storty_popup.classList.remove("story-popup-visible")
    $.body.style.overflow = "visible"
    pupopflag = false
}

////////////////////////////////////////////////////////////////////



const slider_action_l = $.querySelector(".slider-head-action-icon-l")
const slider_action_r = $.querySelector(".slider-head-action-icon-r")
const slider_img = $.querySelectorAll(".slider-head-img")
const Percent_img = slider_img.length * 100 - 100
let Percent_count = 0
let slider_box = $.querySelector(".slider-head-img-box")
slider_action_l.addEventListener("click", MoveSlideL)
slider_action_r.addEventListener("click", MoveSlideR)
const slider_pagination = $.querySelector(".slider-head-pagination-box")

AddPagination(Percent_img)
SetPagination(Percent_count)

function MoveSlideL() {

    if (Percent_count < Percent_img) {
        Percent_count += 100
        slider_box.style.left = `${Percent_count}%`
    } else {
        Percent_count = 0
        slider_box.style.left = "0%"
    }
    SetPagination(Percent_count)
}

function MoveSlideR() {
    if (Percent_count > 0) {
        Percent_count -= 100
        slider_box.style.left = `${Percent_count}%`
    } else {
        Percent_count = Percent_img
        slider_box.style.left = `${Percent_img}%`
    }
    SetPagination(Percent_count)
}
setInterval(MoveSlideL, 5000)
//////////////////////////slider_part///////////////////////////////////


function AddPagination(count) {
    let cunt = count / 100
    for (let i = 0; i <= cunt; i++) {
        slider_pagination.insertAdjacentHTML("afterbegin", `<div data-id='${i}' class='slider-head-pagination'></div>`)

    }
}

function SetPagination(count) {
    let cunt = count / 100
    let a = $.querySelectorAll(".slider-head-pagination")

    for (let i of a) {
        i.style.backgroundColor = "#aaa"
        i.style.width = "6px"
    }
    a[cunt].style.backgroundColor = "#fff"
    a[cunt].style.width = "15px"
}

const pagination = $.querySelectorAll(".slider-head-pagination")

pagination.forEach(i => i.addEventListener("click", event => MovePagination(event)))


function MovePagination(event) {
    let b = ((Percent_img / 100) - (+event.target.dataset.id)) * 100
    slider_box.style.left = `${b}%`
    Percent_count = b
    SetPagination(Percent_count)
}
////////////////////////search_part////////////////////////////

const search_pupop_l = $.querySelector(".search-pupop-mostvisited-move-l")
const search_pupop_r = $.querySelector(".search-pupop-mostvisited-move-r")
const search_pupop_box = $.querySelector(".search-pupop-mostvisited-box")
const search_pupop = $.querySelector(".search-pupop")
const search_pupop_width = Number(search_pupop.offsetWidth) - Number(search_pupop_box.offsetWidth)
let cunt_search = search_pupop_width
search_pupop_box.style.left = `${search_pupop_width}px`


search_pupop_l.addEventListener("click", MoveSearchL)
search_pupop_r.addEventListener("click", MoveSearchR)

function MoveSearchL() {
    if (cunt_search < 0) {
        cunt_search += 100
        search_pupop_box.style.left = `${cunt_search}px`
        search_pupop_r.classList.add("visibale")
    }
    if(cunt_search >= 0){
        search_pupop_l.classList.add("disable")
    }

}

function MoveSearchR() {
    if (cunt_search > search_pupop_width) {
        cunt_search -= 100
        search_pupop_box.style.left = `${cunt_search}px`
        search_pupop_l.classList.remove("disable")
    }
    if (cunt_search <= search_pupop_width) {
        search_pupop_r.classList.remove("visibale")
    }
}

const header_search = $.querySelector(".header-search")
header_search.addEventListener("click", ShowSearch)



function ShowSearch() {
    search_pupop.classList.add("visibale")
    $.body.style.overflow = "hidden"
    fade_body.classList.add("fade-visible")
}
document.addEventListener('click', function (event) {
    if (search_pupop.classList.contains("visibale")) {
        let outsideClick = !search_pupop.contains(event.target);
        let outsideClick_2 = !header_search.contains(event.target);
        if (outsideClick === true && outsideClick_2 === true) {
            search_pupop.classList.remove("visibale")
            $.body.style.overflow = "visible"
            fade_body.classList.remove("fade-visible")
        }
    }
});
/////////////////////////////category_part////////////////////////////////

const category_more = $.querySelector("#category-more")
const category_popup = document.querySelector(".category-popup")
category_more.addEventListener("click", event => {
    event.preventDefault()
    category_popup.classList.add("visibale")
    $.body.style.overflow = "hidden"
    main_fade.classList.add("mainfade-visible")

})
document.addEventListener('click', function (event) {
    if (category_popup.classList.contains("visibale")) {
        let outsideClick = !category_popup.contains(event.target);
        let outsideClick_2 = !category_more.contains(event.target);
        console.log(outsideClick)
        console.log(outsideClick_2)
        if (outsideClick === true && outsideClick_2 === true) {
            DisableCategory()
        }
    }
});

function DisableCategory() {
    category_popup.classList.remove("visibale")
    $.body.style.overflow = "visible"
    main_fade.classList.remove("mainfade-visible")
}
$.querySelector(".category-popup-icon-cancel").addEventListener("click", DisableCategory)


///////////////////////////////////////////////////////////////

// const brand_action_l = $.querySelector(".grouping_brand-icon-l")
// const brand_action_r = $.querySelector(".grouping_brand-icon-r")
// const brand_part = $.querySelector(".grouping_brand-part")
// const brand_box = $.querySelector(".grouping_brand-box")
// const brand_width = Number(brand_box.offsetWidth) - Number(brand_part.offsetWidth)
// brand_part.style.left = `${brand_width}px`
// let brand_cunt = brand_width
// brand_action_l.addEventListener("click", BrandMoveL)
// brand_action_r.addEventListener("click", BrandMoveR)

// function BrandMoveL() {
//     if (brand_cunt < 0) {
//         brand_cunt += 50
//         brand_part.style.left = `${brand_cunt}px`
//         brand_action_r.classList.add("visibale")
//     }
//     if (brand_cunt >= 0) {
//         brand_action_l.classList.add("disable")
//     }
// }

// function BrandMoveR() {
//     if (brand_cunt > brand_width) {
//     brand_cunt -= 50
//     brand_part.style.left = `${brand_cunt}px`
//     }
//     if (brand_cunt <= brand_width) {
//         brand_action_r.classList.add("disable")
//     }
// }

const amazing_move_l = $.querySelector(".amazing-icon-l")
const amazing_move_r = $.querySelector(".amazing-icon-r")
const amazing_box = $.querySelector(".amazing-box")
const amazing = $.querySelector(".amazing")
const amazing_width = Number(amazing.offsetWidth) - Number(amazing_box.offsetWidth)+90
console.log(amazing_width)
let amazing_cuont = amazing_width
amazing_box.style.left = `${amazing_width}px`
amazing_move_l.addEventListener("click", AmazingMoveLeft)

function AmazingMoveLeft() {
    
    if (amazing_cuont+90 < 0) {
        amazing_cuont += 100
        amazing_box.style.left = `${amazing_cuont}px`
        amazing_move_r.classList.add("visibale")
        console.log(amazing_cuont)
    }
    if (amazing_cuont+90 > 0) {

        amazing_move_l.classList.add("disable")
    }

}

amazing_move_r.addEventListener("click", AmazingMoveRight)

function AmazingMoveRight() {
    if (amazing_cuont+90 > amazing_width) {
        amazing_cuont -= 100
        amazing_box.style.left = `${amazing_cuont}px`
        amazing_move_l.classList.remove("disable")
    }
    if (amazing_cuont-90 <= amazing_width) {
        amazing_move_r.classList.remove("visibale")
    }
}

//////brand/////////////////////////////////////////


const brand_action_l = $.querySelector(".grouping_brand-icon-l")
const brand_action_r = $.querySelector(".grouping_brand-icon-r")
const brand_part = $.querySelector(".grouping_brand-part")
const brand_box = $.querySelector(".grouping_brand-box")
const brand_width = Number(brand_box.offsetWidth) - Number(brand_part.offsetWidth)
brand_part.style.left = `${brand_width}px`
let brand_cunt = brand_width
brand_action_l.addEventListener("click", BrandMoveL)
brand_action_r.addEventListener("click", BrandMoveR)

function BrandMoveL() {
    if (brand_cunt < 0) {
        brand_cunt += 100
        brand_part.style.left = `${brand_cunt}px`
        brand_action_r.classList.add("visibale")
    }
    if (brand_cunt >= 0) {
        brand_action_l.classList.add("disable")
    }
}

function BrandMoveR() {
    if (brand_cunt > brand_width) {
        brand_cunt -= 100
        brand_part.style.left = `${brand_cunt}px`
    }
    if (brand_cunt <= brand_width) {
        brand_action_r.classList.add("disable")
    }
}