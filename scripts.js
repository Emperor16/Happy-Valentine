const nameInputContainer = document.getElementById("nameInputContainer");
const valentineCard = document.getElementById("valentineCard");
const nameInput = document.getElementById("nameInput");
const submitNameBtn = document.getElementById("submitNameBtn");
const recipientName = document.getElementById("recipientName");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const spongebobContainer = document.getElementById("spongebobContainer");
const spongebobGif = document.getElementById("spongebobGif");
const celebrationContainer = document.getElementById("celebrationContainer");


const colors = [
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
  "#00d2d3",
  "#ff9f43",
  "#ee5a24",
  "#009432",
];
let noBtnClicks = 0;

function submitName() {
  const name = nameInput.value.trim();
  if (name) {
    recipientName.textContent = name;
    nameInputContainer.style.display = "none";
    valentineCard.style.display = "block";
  } else {
    alert("Please enter your name! 💕");
  }
}

if (nameInput && submitNameBtn) {
  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitName();
    }
  });

  submitNameBtn.addEventListener("click", submitName);
}

if (yesBtn) {
  yesBtn.addEventListener("click", function () {
    valentineCard.style.display = "none";
    celebrationContainer.style.display = "flex";
    celebrationContainer.style.opacity = "0";
    celebrationContainer.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      celebrationContainer.style.opacity = "1";
    }, 50);
  });
}

if (noBtn) {
  // Function to move button to random position
  function moveButtonRandomly() {
    // Get viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Random position within viewport
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply new position
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transition = "all 0.2s ease";
  }

  noBtn.addEventListener("click", function () {
    noBtnClicks++;

    if (spongebobContainer && spongebobGif) {
      const currentScale = 1 + noBtnClicks * 0.15;
      spongebobContainer.style.display = "block";
      spongebobContainer.style.marginBottom = "20px";

      spongebobGif.src =
        "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif";
      spongebobGif.style.transform = `scale(${currentScale})`;
      spongebobGif.style.transition = "transform 0.3s ease";
      spongebobGif.style.animation = "none";

      // Change GIF on every 2nd click
      if (noBtnClicks % 2 === 0) {
        const spongebobGifs = [
          "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
          "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
        ];
        spongebobGif.src =
          spongebobGifs[Math.floor(Math.random() * spongebobGifs.length)];
      }
    }
  });

  // Move button to random position on hover
  noBtn.addEventListener("mouseenter", function () {
    moveButtonRandomly();

    // Random color change on hover
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    noBtn.style.backgroundColor = randomColor;
  });
}

// Falling love animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);
