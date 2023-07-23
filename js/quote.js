const quotes = [
    {
        quote : "When you have faults, do not fear to abandon them",
        author : "Confucius"
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom",
        author : "Confucius"
    },
    {
        quote : "Age is no guarantee of maturity",
        author : "Lawana Blackwell" 
    },
    {
        quote : "Turn your wounds into wisdom.",
        author : "Oprah Gail Winfrey"
    },
    {
        quote : "Great minds have purposes, others have wishes",
        author : "Washington Irving"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author : "Nelson Mandela"
    },
    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett"
    },
    {
        quote : "Life is unfair, get used to it",
        author : "Bill Gates"
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure",
        author : "Mark Twain"
    },
    {
        quote : "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author : "Kamal Ravikant"
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `-${todayQuote.author}-`;