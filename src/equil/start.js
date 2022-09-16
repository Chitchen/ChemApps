import { doMath } from "./equil";

document.addEventListener(
  "click",
  function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches(".do-math")) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);

    const ma = document.getElementById("massA").value;
    const mb = document.getElementById("massB").value;
    const ta = document.getElementById("tempA").value;
    const tb = document.getElementById("tempB").value;
    const ca = document.getElementById("cA").value;
    const cb = document.getElementById("cB").value;
    const answr = document.getElementById("answer");

    var x = [ma, mb, ta, tb, ca, cb];
    console.log("code: 555 \n execution successful");
    console.log(x + "\n" + doMath(ma, mb, ta, tb, ca, cb));
    answr.innerHTML = " " + x;
  },
  false
);
