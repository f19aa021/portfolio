// const workCover = document.getElementsByClassName('work-cover');
// const workDescription = document.getElementsByClassName('work-description');

// const toggle = () => {
//     workDescription.classList.toggle('is-open');
// }

// for (let i = 0; i < workCover.length; i++) {
//     workCover[i].addEventListener('click', toggle);
// }

var px_change = document.documentElement.clientHeight - 60;

window.addEventListener('scroll', function(e) {
    if ($(window).scrollTop() <= px_change) {
        $("header").addClass("bg-clear");
    } else if ($("header").hasClass("bg-clear")) {
        $("header").removeClass("bg-clear");
    }
});