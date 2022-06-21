
const introSection = document.querySelector("#intro-section");
const carouselSection = document.querySelector("#carousel-section");
const aboutSection = document.querySelector("#about-section");
const buySection = document.querySelector("#buy-section");

const introPicCreate = document.createElement("img");
introPicCreate.setAttribute("id", "intro-pic");
introPicCreate.src = "FernandinaBook.jpeg";

const introParagraphDivCreate = document.createElement("div");
const introParagraphCreate = document.createElement("p");
const introSpanCreate1 = document.createElement("span");
const introSpanCreate2 = document.createElement("span");
const introSpanCreate3 = document.createElement("span");
const introSpanCreate4 = document.createElement("span");
const introSpanCreate5 = document.createElement("span");

introParagraphDivCreate.setAttribute("id", "intro-paragraph-div");
introParagraphCreate.setAttribute("id", "intro-paragraph");
introSpanCreate1.setAttribute("id", "intro-span1");
introSpanCreate2.setAttribute("id", "intro-span2");
introSpanCreate3.setAttribute("id", "intro-span3");
introSpanCreate4.setAttribute("id", "intro-span4");
introSpanCreate5.setAttribute("id", "intro-span5");

introSection.appendChild(introParagraphCreate);
introParagraphCreate.appendChild(introSpanCreate1);
introParagraphCreate.appendChild(introSpanCreate2);
introParagraphCreate.appendChild(introSpanCreate3);
introParagraphCreate.appendChild(introSpanCreate4);
introParagraphCreate.appendChild(introSpanCreate5);
introSpanCreate1.textContent = "Relive an era of small-town America";
introSpanCreate2.textContent = "through the eyes of a boy's journey";
introSpanCreate3.textContent = "to manhood. 'Fernandina - Growing up";
introSpanCreate4.textContent = "on Amelia Island', will make you cry,";
introSpanCreate5.textContent = "laugh, and yearn for a simpler time.";

const aboutImage = document.createElement("img");
const aboutInfo = document.createElement("p");
const aboutSpanCreate1 = document.createElement("span");
const aboutSpanCreate2 = document.createElement("span");
const aboutSpanCreate3 = document.createElement("span");
const aboutSpanCreate4 = document.createElement("span");
const aboutSpanCreate5 = document.createElement("span");

aboutSection.appendChild(aboutImage);
aboutSection.appendChild(aboutInfo);
aboutInfo.appendChild(aboutSpanCreate1);
aboutInfo.appendChild(aboutSpanCreate2);
aboutInfo.appendChild(aboutSpanCreate3);
aboutInfo.appendChild(aboutSpanCreate4);
aboutInfo.appendChild(aboutSpanCreate5);
aboutSpanCreate1.textContent = "Gordon Hart grew up in Fernandina"
aboutSpanCreate2.textContent = "Beach, FL. After graduating from"
aboutSpanCreate3.textContent = "The Florida State University, he"
aboutSpanCreate4.textContent = "started a law practice on Amelia"
aboutSpanCreate5.textContent = "Island and lived their for years."

aboutImage.setAttribute("id", "about-image");
aboutInfo.setAttribute("id", "about-info");
aboutImage.src = "AuthorImage.png"

const buyH3 = document.createElement("h3");
const facebookLink = document.createElement("a");
const amazonLink = document.createElement("a");

buyH3.setAttribute("id", "buyH3");
facebookLink.setAttribute("id", "facebook-link");
amazonLink.setAttribute("id", "amazon-link");

buySection.appendChild(buyH3);
buySection.appendChild(facebookLink)
buySection.appendChild(amazonLink)
buyH3.textContent = "Buy Today";
facebookLink.textContent = "Join the Facebook Page";
amazonLink.textContent = "Buy at Amazon";

introSection.append(introPicCreate);

introPicCreate.style.display = "none";
introParagraphCreate.style.display = "none";

introSection.addEventListener("mouseover", function () {
    introPicCreate.style.display = "flex";
    introPicCreate.style.animation = "opacity 2s";
    introParagraphCreate.style.display = "flex";
    introSpanCreate1.style.animation = "opacity 1s";
    introSpanCreate2.style.animation = "opacity 1.75s";
    introSpanCreate3.style.animation = "opacity 2.5s";
    introSpanCreate4.style.animation = "opacity 3.25s";
    introSpanCreate5.style.animation = "opacity 4s";
})

introPicCreate.addEventListener("mouseover", function () {
    introPicCreate.style.animation = "none";
    introPicCreate.style.display = "flex";
})

introPicCreate.addEventListener("mouseout", function () {
    introPicCreate.style.animation = "none";
    introPicCreate.style.display = "flex";
})

introSection.addEventListener("mouseout", function () {
    introPicCreate.style.animation = "none";
    introPicCreate.style.display = "none";
    introParagraphCreate.style.display = "none";
})



class CarouselPic {
    constructor(image, caption) {
        this.image = image;
        this.caption = caption;
    }
}

const footballPic = new CarouselPic("Football.png", "Playing football in High School");
const blueSeasPic = new CarouselPic("BlueSeasRestaurant.png", "Blue Seas in its heyday");
const genesPic = new CarouselPic("GenesCarousel.png", "Gene's, a favorite for kids");
const goldenSandsPic = new CarouselPic("GoldenSands.png", "Golden Sands in its heyday");
const jacksHousePic = new CarouselPic("JacksHouse.png", "Picture of JackDs on the Beach");
const reeferPic = new CarouselPic("ReeferRoadHouse.png", "House being washed away off reefer road");
const surfBoard = new CarouselPic("SurfBoard.png", "Surfing");
const surfContest = new CarouselPic("SurfContest.png", "SurfContest");

const carouselArray = [footballPic, blueSeasPic, genesPic, goldenSandsPic, jacksHousePic, reeferPic, surfBoard, surfContest];

const divCarouselWrapper = document.createElement("div");
const divCarousel = document.createElement("div");
const imageCarousel = document.createElement("img");
const h3Carousel = document.createElement("h3");
divCarousel.setAttribute("id", "carousel");
imageCarousel.setAttribute("id", "carousel-image");
divCarouselWrapper.setAttribute("id", "carousel-wrapper");
h3Carousel.setAttribute("id", "carousel-caption");

carouselSection.append(divCarouselWrapper);
divCarouselWrapper.append(divCarousel)
divCarousel.appendChild(imageCarousel);
divCarouselWrapper.appendChild(h3Carousel);

function carouselPictureTurn(x) {
    imageCarousel.src = carouselArray[7].image;
    h3Carousel.textContent = carouselArray[7].caption;
    setInterval(function () {
        imageCarousel.src = carouselArray[x].image
        h3Carousel.textContent = carouselArray[x].caption
        if (x < carouselArray.length - 1) {
            x += 1;
        } else if (x === carouselArray.length - 1) {
            return x = 0;
        }
    }, 3500);
}

carouselPictureTurn(0);

class CarouselReview {
    constructor(review, person) {
        this.review = review;
        this.person = person;
    }
}

const firstReview = new CarouselReview("The author has done a great job at describing events that he experienced as a youth in the area. I find myself going around locations described in the book just to see what is there now and to imagine events that once happened there. To the author, thanks for the glimpse into the Fernandina-Of-Old, and I'm waiting for your book on the subject of Fishing Amelia Island. :)", "T. Skinner");
const secondReview = new CarouselReview("Great read. Gordon does a wonderful job of transporting us back in time to a truly special place. He does so in a manner that will keep a smile on your face throughout and make you laugh out loud at times.", "Jack McElroy");
const thirdReview = new CarouselReview("I have been living in Fernandina for fifty years but my wife had been here a LONG time. I knew the authors father as we worked for the same company. Good job Gordon", "Lawrence Williams");
const fourthReview = new CarouselReview("Thanks, Gordon. Enjoyed revisiting Fernandina from long ago!!", "Marsha");

const reviewArray = [firstReview, secondReview, thirdReview, fourthReview];

const divReview = document.createElement("div");
const readerReview = document.createElement("p");
const personReview = document.createElement("p");
divReview.setAttribute("id", "carousel-review-div");
readerReview.setAttribute("id", "carousel-review");
personReview.setAttribute("id", "carousel-name");
carouselSection.append(divReview);
divReview.append(readerReview);
divReview.append(personReview);


function carouselReviewTurn(x) {
    readerReview.textContent = reviewArray[3].review
    personReview.textContent = reviewArray[3].person
    setInterval(function () {
        readerReview.textContent = reviewArray[x].review
        personReview.textContent = reviewArray[x].person
        if (x < reviewArray.length - 1) {
            x += 1;
        } else if (x === reviewArray.length - 1) {
            return x = 0;
        }
    }, 7000);
}

carouselReviewTurn(0)

divCarouselWrapper.style.display = "none";
divReview.style.display = "none";

carouselSection.addEventListener("mouseover", function(){
    divCarouselWrapper.style.display = "flex";
    divCarouselWrapper.style.animation = "opacity 2.25s";
    divReview.style.display = "flex";
    divReview.style.animation = "opacity 2.25s"
})

carouselSection.addEventListener("mouseout", function(){
    divReview.style.display = "none";
    divCarouselWrapper.style.display = "none";
})

aboutImage.style.display = "none";
aboutInfo.style.display = "none";

aboutSection.addEventListener("mouseover", function(){
    aboutImage.style.display = "flex";
    aboutInfo.style.display = "flex";
    aboutImage.style.animation = "opacity 2.25s";
    aboutSpanCreate1.style.animation = "opacity 1s";
    aboutSpanCreate2.style.animation = "opacity 1.75s";
    aboutSpanCreate3.style.animation = "opacity 2.5s";
    aboutSpanCreate4.style.animation = "opacity 3.25s";
    aboutSpanCreate5.style.animation = "opacity 4s";
})

aboutSection.addEventListener("mouseout", function(){
    aboutImage.style.display = "none";
    aboutInfo.style.display = "none";
    aboutImage.style.animation = "opacity 2.25s"
})