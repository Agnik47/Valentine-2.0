const noMessages = [
  "Please 💖💖?",
  "Are you sure? 🥺",
  "Don't say no! 😭",
  "Think again! 💔",
  "Pretty please? 🙏",
  "You can't say no! 😢",
];

const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const heading = document.querySelector("h1");
const gif = document.querySelector("#yesGif");

// Initial font size in pixels
let yesSize = 18;

// "Yes" button click event
yesBtn.addEventListener("click", () => {
  heading.innerText = "Yay! I knew you'd say Yes! 💖😊";
  gif.src = "./gifs/yess.gif";
  noBtn.style.display = "none";
  yesBtn.style.display = "hidden";

  // Confetti Effect 🎉
  party.confetti(yesBtn, {
    count: party.variation.range(50, 100),
  });
});

// "No" button click event: Increase Yes Button size
noBtn.addEventListener("click", () => {
  const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
  heading.innerText = randomMessage;
  gif.src = "./gifs/no5.gif";

  yesSize += 10;
  yesBtn.style.fontSize = `${yesSize}px`;
  yesBtn.style.padding = `${yesSize / 2}px ${yesSize}px`;
});
