const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistake = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('button')


function loadParagraph(){
    const para=["The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"]

    const randomIndex=math.floor(math.random()*para.lengh);

    typingText.innerHTML=`<p>${para[randomIndex]}</p>`;
}
loadParagraph();