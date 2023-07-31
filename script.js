let num = Math.floor(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = num;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let score = Number(document.querySelector(".score").textContent);
  let highscore = Number(document.querySelector(".highscore").textContent);
  console.log(score);
  if (score > 1) {
    if (!guess) {
      document.querySelector(".message").textContent = "Enter the input";
      console.log("inside the not guess");
    } else if (guess > num) {
      document.querySelector(".message").textContent = "📈Too high";
    } else if (guess < num) {
      document.querySelector(".message").textContent = "📉Too Low";
    } else {
      document.querySelector(".message").textContent = "🥳Correct Ans";
      document.querySelector(".number").textContent = num;
      if (highscore < score) {
        document.querySelector(".highscore").textContent = score - 1;
      }
      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#60b347";
    }
    document.querySelector(".score").textContent = --score;
  } else {
    document.querySelector(".message").textContent = "🥲Game Over";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "F53B0D";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  num = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
});
console.log("somthing is fishy");
