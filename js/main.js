// Global variables


window.onscroll = function(ev) {
    const navbar = document.getElementsByClassName("scroll-bar")[0];
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        navbar.style.display = "none"
    }
    else {
        navbar.style.display = "block"
    }
};

function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollButtonClicked() {
    var home = document.getElementById('home');
    var about = document.getElementById('about-app');
    var sections = document.getElementsByTagName('section');
    console.log(sections.length)
    for (var i=0; i < sections.length; i++) {
        console.log(sections[i].getBoundingClientRect().top)
        // console.log(section.getBoundingClientRect().top)
    }
    // console.log(Math.round(window.scrollY), about.getBoundingClientRect().top, home.getBoundingClientRect().top)
    // about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
