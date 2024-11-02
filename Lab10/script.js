document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const openButton = document.querySelector(".openbtn");
    const closeButton = document.querySelector(".closebtn");

    // Відкриття бічного меню
    openButton.addEventListener("click", function () {
        sidebar.style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    });

    // Закриття бічного меню
    closeButton.addEventListener("click", function () {
        sidebar.style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    });
});
