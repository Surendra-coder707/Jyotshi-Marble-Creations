"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        window.addEventListener("scroll", updateHeader);

        updateHeader();
    }


    /* =====================================================
       PRODUCT FILTER
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(".product-filter");

    const productCards =
        document.querySelectorAll(".product-card");


    if (filterButtons.length && productCards.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const selectedFilter =
                    button.getAttribute("data-filter");


                /* Active button */

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");


                /* Filter products */

                productCards.forEach(card => {

                    const category =
                        card.getAttribute("data-category");


                    if (
                        selectedFilter === "all" ||
                        category === selectedFilter
                    ) {

                        card.style.display = "";

                        requestAnimationFrame(() => {
                            card.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                        });

                    } else {

                        card.style.display = "none";
                    }

                });

            });

        });

    }


    /* =====================================================
       IMAGE LOADING
       ===================================================== */

    const productImages =
        document.querySelectorAll(".product-image img");


    productImages.forEach(img => {

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });


        img.addEventListener("error", () => {

            console.error(
                "Product image not found:",
                img.getAttribute("src")
            );

            img.classList.add("image-error");

            /*
             * Broken image icon ko hide karne ke liye.
             * Actual path HTML mein correct hona zaroori hai.
             */

            img.style.display = "none";

            const imageBox =
                img.closest(".product-image");

            if (imageBox) {

                imageBox.classList.add("image-not-found");

            }

        });

    });


    /* =====================================================
       PRODUCT CARD REVEAL
       ===================================================== */

    const cards =
        document.querySelectorAll(".product-card");


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        cards.forEach(card => {

            card.classList.add("reveal-card");

            observer.observe(card);

        });

    } else {

        cards.forEach(card => {
            card.classList.add("show");
        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ESC KEY - CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        }

    });


    console.log(
        "Jyotshi Marble Creations - Products JS loaded successfully."
    );

});