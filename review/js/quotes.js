const quotes = [
    { 
        quote : "큰 목표를 이루고 싶으면 허락을 구하지 마라" ,
        author : "미상",
    },
    {
        quote : "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author : "존 머니",
    },
    {
        quote : "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다",
        author : "미상",
    },
    {
        quote : "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다. ",
        author : "마이클",
    },
    {
        quote : "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author : "월트 디즈니",
    },
    {
        quote : "지옥을 겪고 있다면 계속 겪어 나가라. ",
        author : "윈스턴 처칠",
    },
    {
        quote : "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
        author : "알버트 아인슈타인",
    },
    {
        quote : "혁신이 지도자와 추종자를 가른다.",
        author : "스티브잡스",
    },
    {
        quote : "성공한 전사는 면도날 같은 초점을 지닌 평범한 사람이다. ",
        author : "브루스 리",
    },
    {
        quote : "운은 용기를 내는 사람의 편이다 ",
        author : "베르길리우스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;