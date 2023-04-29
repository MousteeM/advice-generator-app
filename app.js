function generateAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      return data;
    });
}

generateAdvice();

const button = document.querySelector(".icon-dice");

button.addEventListener("click", () => {
  generateAdvice().then((data) => {
    const { id, advice } = data.slip;
    const adviceText = document.querySelector(".advice-text");
    const adviceId = document.getElementById("advice-id-num");
    // console.log(id, advice);
    adviceText.textContent = `"${advice}"`;
    adviceId.textContent = `Advice # ${id}`;
  });
});
