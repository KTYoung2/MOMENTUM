
const quotes = [
{
    quote: "The endeavor to understand is the first and only basis of virtue.",
    author: "Baruch Spinoza",
},
{
    quote: "Only in the agony of parting do we look into the depths of love.",
    author: "George Eliot",
},
{
    quote:"Real love is a permanently self-enlarging experience.",
    author:"M. Scott Peck",
},
{
    quote:"To love is to receive a glimpse of heaven.",
    author:"Karen Sunde",
},
{
    quote:"The duty of youth is to challenge corruption.",
    author:"Kurt Cobain",
},
{
    quote:"I raise up my voice-not so I can shout, but so that those without a voice can be heard.",
    author:"Malala Yousafzai",
},
{
    quote:"There is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
    author:"Verginia Woolf",
},
{
    quote:"When a man gives his opinion, he's a man. When a woman gives her opiniopn, she's a bitch.",
    author:"Bette Davis",
},
{
    quote:"I would always rather be happy than dignified.",
    author:"Jane Eyre",
},
{
    quote:"Feminism is for everybody.",
    author:"Bell hooks",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


//array 안에 있는 element 접근하기 (array 길이를 알아야함)
// console.log(quotes[10-1]); 컴퓨터는 0부터 읽으니까 하나를 빼줘야함

/* array 길이인 10사이의 숫자 접근 (0~9까지)
    --> Math module
    Math.random() : 0부터 1사이의 랜덤숫자 제공 (float)
    Math.round() : 소숫점 반올림 
    Math.ceil() : 소숫점 올림
    Math.floor() : 소숫점 내림   
*/

            /* 명언을 추가하면 또 숫자를 구해야하는데 매번 그럴 수 없으니
                array 길이를 구하는 게 좋음 ( .length ) */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



