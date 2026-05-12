// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {

    // Üstte ilerleme çizgisi oluşturma
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    document.body.appendChild(progressBar);

    // Buton alanı oluşturma
    const buttonArea = document.createElement("div");
    buttonArea.className = "floating-buttons";

    const printButton = document.createElement("button");
    printButton.textContent = "CV'yi Yazdır";
    printButton.className = "float-btn";

    const topButton = document.createElement("button");
    topButton.textContent = "↑ Yukarı";
    topButton.className = "float-btn top-btn";

    buttonArea.appendChild(printButton);
    buttonArea.appendChild(topButton);
    document.body.appendChild(buttonArea);

    // Yazdırma butonu
    printButton.addEventListener("click", function () {
        window.print();
    });

    // Yukarı çık butonu
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Scroll olduğunda ilerleme çizgisi ve yukarı butonu
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / pageHeight) * 100;

        progressBar.style.width = progress + "%";

        if (scrollTop > 300) {
            topButton.style.display = "inline-block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Bölümlere yumuşak görünme animasyonu
    const sections = document.querySelectorAll(".content-section, .side-section");

    sections.forEach(function (section) {
        section.classList.add("hidden-section");
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });

    // JavaScript ile gerekli CSS'leri ekliyoruz
    const style = document.createElement("style");
    style.textContent = `
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            width: 0%;
            background-color: #17335c;
            z-index: 9999;
            transition: width 0.2s ease;
        }

        .floating-buttons {
            position: fixed;
            right: 22px;
            bottom: 22px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
        }

        .float-btn {
            border: none;
            background-color: #17335c;
            color: white;
            padding: 10px 14px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 6px 16px rgba(0,0,0,0.18);
            transition: 0.2s ease;
        }

        .float-btn:hover {
            background-color: #102744;
            transform: translateY(-2px);
        }

        .top-btn {
            display: none;
        }

        .hidden-section {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.6s ease;
        }

        .show-section {
            opacity: 1;
            transform: translateY(0);
        }

        @media print {
            .floating-buttons,
            .progress-bar {
                display: none;
            }

            body {
                background-color: white;
                padding: 0;
            }

            .cv-wrapper {
                box-shadow: none;
                border-radius: 0;
            }
        }
    `;

    document.head.appendChild(style);
});
