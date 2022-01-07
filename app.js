let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// carousel
let images = [
    "img/uncharted.png",
    "img/movies.png",
    "img/docteur-strange.png",
    "img/series.png"
];

let time = [
    "2:24",
    "2:45",
    "2:12",
    "2:30"
];

let title = [
    "Mark Walhberg & Tom Holland Go Treasure Hunting",
    "The Most Anticipated New Movies of 2022",
    "'Doctor Strange in the Multiverse of Madness'",
    "IMDb Users' Most Anticipated Series",
];

let text = [
    "Watch the new 'Uncharted' Trailer",
    "Get Your Watchlists Ready",
    "Watch the Teaser Trailer",
    "New TV Coming in 2022"
];

let posters = [
    "img/uncharted-poster.png",
    "img/watchtowatch.png",
    "img/docteur-strange-poster.png",
    "img/watchtowatch.png"
]

const container = document.querySelector('.left div.nb1 div');
const nextButton = document.querySelector('.left div.nb1 .next');
const previousButton = document.querySelector('.left div.nb1 .previous');

const captionContainer = [
    ".bottom span",
    ".bottom h2",
    ".bottom p",
    "#poster"
]

const upNextContainer = [
    "div.text span",
    "div.text h3",
    "div.text p",
    "div.images img"
]

let section1Carousel = new Carousel(images, container, 'div.nb1 img', time, title, text, posters, captionContainer, upNextContainer);
section1Carousel.createHtmlBase();
section1Carousel.nextAuto();
