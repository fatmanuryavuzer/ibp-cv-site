// Tema değiştirme butonu
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Açık Tema";
    } else {
        themeBtn.textContent = "🌙 Tema Değiştir";
    }
});

// Proje detaylarını açıp kapatma
const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const detailText = button.nextElementSibling;

        if (detailText.style.display === "block") {
            detailText.style.display = "none";
            button.textContent = "Detay Göster";
        } else {
            detailText.style.display = "block";
            button.textContent = "Detay Gizle";
        }
    });
});
