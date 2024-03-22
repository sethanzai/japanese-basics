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
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollButtonClicked() {
    var home = document.getElementById('home');
    var about = document.getElementById('about-app');
    var sections = document.getElementsByTagName('section');
    var nextSection = "";
    var nextSectionValue = 0;
    for (var i=0; i < sections.length; i++) {
        const sectionValue = sections[i].getBoundingClientRect().top
        console.log(sections[i].id, sectionValue);
        if (sectionValue > 0) {
            if (nextSectionValue == 0) {
                nextSection = sections[i].id;
                nextSectionValue = sectionValue;
            }
            else if (nextSectionValue > sectionValue) {
                nextSection = sections[i].id;
                nextSectionValue = sectionValue;
            }
        }
    }
    scrollToSection(nextSection);
    // console.log(Math.round(window.scrollY), about.getBoundingClientRect().top, home.getBoundingClientRect().top)
    // about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
