fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    const advice = data.slip;
    const button = document.querySelector(".icon-dice");
    const adviceText = document.querySelector(".advice-text");
    const id = document.getElementById("advice-id-num");

    button.addEventListener("click", () => {
      adviceText.textContent = `${advice.advice}`;
      id.textContent = `${advice.id}`;
    });

    console.log(advice);
  });
