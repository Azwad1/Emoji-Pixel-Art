let currentEmoji = "⬜️";

// Update emoji when user types
document.getElementById("emojiInput").addEventListener("input", function () {
  currentEmoji = this.value || "⬜️";
});

// Create the grid
function makeGrid() {
  const size = parseInt(document.getElementById("gridSize").value);
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, auto)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = "⬜️";

    cell.addEventListener("click", () => {
      cell.textContent = currentEmoji;
      updateOutput();
    });

    grid.appendChild(cell);
  }

  updateOutput();
}

// Clear the grid
function clearGrid() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "⬜️";
  });
  updateOutput();
}

// Show art in the output box
function updateOutput() {
  const size = parseInt(document.getElementById("gridSize").value);
  const cells = document.querySelectorAll(".cell");
  let output = "";

  for (let i = 0; i < cells.length; i++) {
    output += cells[i].textContent;
    if ((i + 1) % size === 0) output += "\n";
  }

  document.getElementById("output").textContent = output;
}

// Copy the artwork to clipboard
function copyArt() {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Emoji art copied to clipboard!");
  });
}

// Get random emoji from a list
function getRandomEmoji() {
  const emojiList = ["🟥", "🟩", "🟦", "🟨", "🟧", "🟪", "⭐", "🔥", "🌟", "❄️", "🍀", "🎈"];
  const random = emojiList[Math.floor(Math.random() * emojiList.length)];
  currentEmoji = random;
  document.getElementById("emojiInput").value = random;
}
