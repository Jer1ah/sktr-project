const questionElement = document.getElementsByClassName("faq__question")[0];
const arrows = document.querySelectorAll(".faq__questions span img");
const answers = document.getElementsByClassName("question__wrapper");

for(let i = 0; i < arrows.length; i++) {
    $(arrows[i]).click((evt) => {
        $(answers[i]).slideToggle();
    });
}

