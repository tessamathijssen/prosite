let zoekknop = document.querySelector("#zoekknop");
let zoekveld = document.querySelector("#zoekveld");

zoekknop.addEventListener("click", function() {
    if (zoekveld.style.display == "block") {
        zoekveld.style.display = "none";
    } else {
        zoekveld.style.display = "block";
    }
});
