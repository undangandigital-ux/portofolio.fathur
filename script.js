document.addEventListener("DOMContentLoaded", function () {
    console.log("Website profil Fathurrahman berhasil dijalankan.");

    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function() {
            console.log("Menu dibuka: " + link.textContent);
        });
    });
});
