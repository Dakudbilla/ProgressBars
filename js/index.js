window.onload = () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressPercent = document.querySelectorAll(".percentage_val");
  const finishButton = document.querySelector("#finish-btn");

  finishButton.addEventListener("click", function () {
    progressBars.forEach((bar) => {
      bar.style.width = "100%";
    });

    progressPercent.forEach((bar) => {
      bar.innerText = "100%";
    });
  });
};
