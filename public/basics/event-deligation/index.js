/**
 * Event Deligation
 */

document.querySelector("#category").addEventListener("click", (e) => {
    console.log("Clicked!");
    if (e.target.tagName == 'LI') {
      let id = e.target.id;
      console.log(e);
      alert(id);
    }
});

document.querySelector("#form").addEventListener('keyup', (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
