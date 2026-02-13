const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const filmyLines = [
  "Arey yaar… dil tod diya 💔",
  "Soch lo… regret hoga 😌",
  "Picture abhi baaki hai mere dost 🎬",
  "Hero itni easily haar nahi maanta 😎",
  "Itna bhi bhaav mat khao 🙄",
  "Dil se bura lagta hai yaar 🥺",
  "Last chance… warna main sad ho jaunga 🐱💔"
];

let index = 0;

yesBtn.addEventListener("click", () => {
  message.innerText = "YAYYYY 😍💖 I knew it!";
});

noBtn.addEventListener("mouseover", () => {
  // move button
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // change filmy line
  message.innerText = filmyLines[index];
  index = (index + 1) % filmyLines.length;
});