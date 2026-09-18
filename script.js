
/* =====================================
   DATA
===================================== */

const birthdayName = "Aura Anandhiva";


/* =====================================
   ELEMENT
===================================== */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");

const nameElement = document.getElementById("Aura Anandhiva");
const nameElement2 = document.getElementById("Aura Anandhiva");

const wishText = document.getElementById("wishText");

const flowerSurprise = document.getElementById("flowerSurprise");
const surpriseName = document.getElementById("surpriseName");
const petalsContainer = document.getElementById("petals");

const gift = document.getElementById("gift");


/* =====================================
   SET NAMA
===================================== */

if (nameElement) {
    nameElement.textContent = birthdayName;
}

if (nameElement2) {
    nameElement2.textContent = birthdayName;
}

if (surpriseName) {
    surpriseName.textContent = birthdayName;
}


/* =====================================
   MUSIC
===================================== */

let isPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", function () {

        if (isPlaying) {

            music.pause();

            isPlaying = false;

            if (musicIcon) {
                musicIcon.textContent = "♫";
            }

            musicBtn.classList.remove("music-playing");

        } else {

            music.play()
                .then(function () {

                    isPlaying = true;

                    if (musicIcon) {
                        musicIcon.textContent = "❚❚";
                    }

                    musicBtn.classList.add("music-playing");

                })
                .catch(function () {

                    alert(
                        "Browser memblokir autoplay. Klik tombol musik sekali lagi."
                    );

                });

        }

    });

}


/* =====================================
   SCROLL KE UCAPAN
===================================== */

function scrollToMessage() {

    const messageSection =
        document.getElementById("message");

    if (messageSection) {

        messageSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================
   BUKA HADIAH
===================================== */

function openGift() {

    if (!flowerSurprise) {
        console.error(
            "Element #flowerSurprise tidak ditemukan."
        );

        return;
    }


    /* Set nama */

    if (surpriseName) {
        surpriseName.textContent = birthdayName;
    }


    /* Tampilkan animasi bunga */

    flowerSurprise.classList.add("active");


    /* Kunci scroll halaman */

    document.body.style.overflow = "hidden";


    /* Buat kelopak bunga */

    createPetals();


    /* Confetti */

    createConfetti();


    /* Ubah tampilan hadiah */

    if (gift) {
        gift.textContent = "🌸";
    }

}


/* =====================================
   TUTUP HADIAH
===================================== */

function closeGift() {

    if (!flowerSurprise) {
        return;
    }

    flowerSurprise.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================
   KELopak BUNGA
===================================== */

function createPetals() {

    if (!petalsContainer) {
        return;
    }


    /* Bersihkan kelopak lama */

    petalsContainer.innerHTML = "";


    /* Jumlah kelopak berdasarkan ukuran layar */

    const amount =
        window.innerWidth <= 600
            ? 28
            : 50;


    for (let i = 0; i < amount; i++) {

        const petal =
            document.createElement("div");


        petal.className = "petal";


        /* Posisi random */

        const randomLeft =
            Math.random() * 100;


        const randomDelay =
            Math.random() * 4;


        const randomDuration =
            5 + Math.random() * 5;


        const randomSize =
            8 + Math.random() * 10;


        petal.style.left =
            randomLeft + "%";


        petal.style.width =
            randomSize + "px";


        petal.style.height =
            randomSize * 1.4 + "px";


        petal.style.animationDelay =
            randomDelay + "s";


        petal.style.animationDuration =
            randomDuration + "s";


        petalsContainer.appendChild(petal);

    }

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");


    if (!container) {
        return;
    }


    /* Bersihkan confetti sebelumnya */

    container.innerHTML = "";


    const amount =
        window.innerWidth <= 600
            ? 70
            : 120;


    const shapes = [
        "♥",
        "✦",
        "★",
        "●",
        "◆"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.textContent =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.fontSize =
            8 + Math.random() * 12 + "px";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        confetti.style.animationDuration =
            2.5 + Math.random() * 3 + "s";


        container.appendChild(confetti);


        /* Hapus setelah animasi */

        setTimeout(function () {

            confetti.remove();

        }, 6500);

    }

}


/* =====================================
   ESCAPE UNTUK MENUTUP
===================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeGift();

        }

    }
);


/* =====================================
   RESET SAAT WINDOW DITUTUP
===================================== */

window.addEventListener(
    "beforeunload",
    function () {

        document.body.style.overflow = "";

    }
);
