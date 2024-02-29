// Parallax Effect and Animation

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");

    // console.log(speed);

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Cursor Pointer Effect or Animation

const cursorPointer = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  let x = e.pageX;
  let y = e.pageY;

  // console.log(x, y, cursorPointer);

  cursorPointer.style.top = y + "px";
  cursorPointer.style.left = x + "px";
});
