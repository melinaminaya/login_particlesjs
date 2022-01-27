function myFunction2(iddots, idmore, idbtnindex) {
    var dots = document.getElementById(iddots);
    var moreText = document.getElementById(idmore);
    var btnText = document.getElementById(idbtnindex);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Leia mais";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Leia menos";
        moreText.style.display = "inline";

    }
}

export{myFunction2};