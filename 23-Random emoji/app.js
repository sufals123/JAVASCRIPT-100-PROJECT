const em = document.querySelector(".emoji");
console.log(em);
const emojis = [
    "❤️",
    "😀",
    "😂",
    "😎",
    "😍",
    "😘",
    "😜",
    "😝",
    "🤩",
    "🤪",
    "🥰",
    "🥳",
    "🥴",
    "🥵",
    "🥶",
    "���",
];


em.addEventListener("mousemove", ()=>{
    const index = Math.floor(Math.random() * emojis.length);
    
    em.innerHTML = emojis[index];
})