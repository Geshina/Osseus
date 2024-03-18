// CLICK HANDLER
function GlobalClickHandler(...eventConts) {
  const body = document.querySelector("body");
  const targetSelectors = eventConts
    .map((cont) => `${cont} .target`)
    .join(", ");

  body.addEventListener("click", (event) => {
    const targetElements = Array.from(
      document.querySelectorAll(targetSelectors)
    );
    const clickedTarget = targetElements.find((target) =>
      target.contains(event.target)
    );

    if (clickedTarget) {
      clickedTarget.classList.toggle("active");
      clickedTarget.classList.toggle("inactive");
    }
  });
}

export { GlobalClickHandler };
