document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       PAGE LOADER
    ========================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {

        setTimeout(function () {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 700);

    });


    /* =========================================
       HEADER SCROLL
    ========================================= */

    const header = document.getElementById("header");

    function handleHeader() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeader);

    handleHeader();


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");

            const isOpen =
                mobileMenu.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(

                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =========================================
       IMAGE LOADING
    ========================================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        if (image.complete) {
            image.classList.add("loaded");
        }

        image.addEventListener("load", function () {

            image.classList.add("loaded");

        });

    });


    /* =========================================
       LANGUAGE SYSTEM
    ========================================= */

    const languageButton =
        document.querySelector(".language-btn");

    const languageName =
        languageButton
            ? languageButton.querySelector("span")
            : null;

    const languageOptions =
        document.querySelectorAll(
            ".language-menu button[data-lang]"
        );


    /* =========================================
       TRANSLATIONS
       13 INDIAN LANGUAGES
    ========================================= */

    const translations = {


        /* =====================================
           ENGLISH
        ===================================== */

        en: {

            brandName: "JYOTSHI MARBLE CREATIONS",

            home: "Home",
            story: "Our Story",
            products: "Products",
            gallery: "Gallery",
            contact: "Contact",

            inquiry: "Make an Inquiry",

            handcraftedLabel:
                "HANDCRAFTED MARBLE ART",

            handcraftedMarble:
                "Handcrafted Marble",

            artLasts:
                "Art That Lasts Forever.",

            heroDescription:
                "Discover beautifully handcrafted marble idols, temples and sculptures created with traditional artistry, devotion and extraordinary attention to detail.",

            parcelDelivery:
                "Parcel Delivery Available",

            orderFromHome:
                "— Order your favourite marble creation from the comfort of your home.",

            exploreProducts:
                "Explore Products",

            viewGallery:
                "View Gallery",

            yearsCraft:
                "Years of Craft",

            creations:
                "Creations",

            handcrafted:
                "Handcrafted",

            scrollDiscover:
                "SCROLL TO DISCOVER",

            artBehind:
                "THE ART BEHIND THE STONE",

            craftedWith:
                "Crafted with",

            devotion:
                "devotion.",

            storyParagraph1:
                "Marble has a unique way of turning craftsmanship into something timeless. At Jyotshi Marble Creations, every piece begins with carefully selected stone and ends with the hands of skilled artisans.",

            storyParagraph2:
                "From divine idols to traditional marble temples, every creation reflects the beauty of Indian heritage.",

            exploreMarbleProducts:
                "Explore Marble Products",

            ourCollection:
                "OUR COLLECTION",

            marble:
                "Marble",

            masterpieces:
                "Masterpieces",

            collectionDescription:
                "Explore handcrafted marble creations inspired by tradition, spirituality and timeless Indian artistry.",

            divineCollection:
                "DIVINE COLLECTION",

            ganeshJi:
                "Ganesh Ji",

            radhaKrishna:
                "Radha Krishna",

            durgaJi:
                "Durga Ji",

            nandiJi:
                "Nandi Ji",

            viewAllProducts:
                "View All Marble Products",

            marbleTemples:
                "MARBLE TEMPLES",

            sacredSpace:
                "A sacred space,",

            carvedIn:
                "carved in",

            marbleWord:
                "marble.",

            templeDescription:
                "Traditional marble temples crafted with intricate details, elegant pillars and timeless architectural beauty.",

            enquireTemple:
                "Enquire About Custom Temple",

            whyChooseUs:
                "WHY CHOOSE US",

            difference:
                "The difference is in",

            detail:
                "the detail.",

            featureHandcrafted:
                "Handcrafted",

            featureHandcraftedText:
                "Every sculpture is shaped, carved and finished by skilled craftsmen.",

            featureMarble:
                "Selected Marble",

            featureMarbleText:
                "We work with carefully selected marble for beauty, strength and lasting elegance.",

            featureTraditional:
                "Traditional Art",

            featureTraditionalText:
                "Our designs preserve the beauty of traditional Indian marble artistry.",

            featureCustom:
                "Custom Creations",

            featureCustomText:
                "Custom idols, temples and sculptures created according to your vision.",

            ourGallery:
                "OUR GALLERY",

            beautyCarved:
                "Beauty carved",

            inStone:
                "in stone.",

            galleryDescription:
                "A glimpse into our world of marble sculptures and handcrafted creations.",

            customMarbleCreations:
                "CUSTOM MARBLE CREATIONS",

            yourVision:
                "Your vision.",

            our:
                "Our",

            craftsmanship:
                "craftsmanship.",

            orderFromHomeTitle:
                "Order From Home",

            orderFromHomeText:
                "— You can place your order from anywhere.",

            parcelDeliveryText:
                "— We can send your marble creation by parcel.",

            location:
                "Thanagazi, Alwar, Rajasthan",

            callUs:
                "Call Us",

            whatsappUs:
                "WhatsApp Us",

            proudlyCrafting:
                "Proudly crafting marble art in",

            craftedToday:
                "Crafted today.",

            cherishedFor:
                "Cherished for",

            generations:
                "generations.",

            finalDescription:
                "Explore our marble products and discover the timeless beauty of handcrafted art.",

            footerDescription:
                "Handcrafted marble art inspired by tradition, devotion and timeless beauty.",

            footerExplore:
                "Explore",

            footerCreations:
                "Creations",

            footerContact:
                "Contact",

            marbleIdols:
                "Marble Idols",

            marbleTemplesFooter:
                "Marble Temples",

            marbleSculptures:
                "Marble Sculptures",

            customCreations:
                "Custom Creations",

            startInquiry:
                "Start an Inquiry",

            allRightsReserved:
                "All Rights Reserved.",

            footerTagline:
                "Handcrafted Marble Art • Rajasthan, India",

            whatsapp:
                "WhatsApp",

            instagram:
                "Instagram",

            facebook:
                "Facebook"

        },


        /* =====================================
           HINDI
        ===================================== */

        hi: {

            brandName:
                "ज्योत्शी मार्बल क्रिएशंस",

            home: "होम",
            story: "हमारी कहानी",
            products: "उत्पाद",
            gallery: "गैलरी",
            contact: "संपर्क",

            inquiry:
                "पूछताछ करें",

            handcraftedLabel:
                "हस्तनिर्मित संगमरमर कला",

            handcraftedMarble:
                "हस्तनिर्मित संगमरमर",

            artLasts:
                "ऐसी कला जो हमेशा बनी रहे।",

            heroDescription:
                "भक्ति, पारंपरिक कला और बेहतरीन कारीगरी के साथ तैयार की गई संगमरमर की मूर्तियों, मंदिरों और शिल्पकृतियों की सुंदर दुनिया खोजें।",

            parcelDelivery:
                "पार्सल डिलीवरी उपलब्ध",

            orderFromHome:
                "— अपने घर बैठे अपनी पसंदीदा संगमरमर की कलाकृति मंगाएँ।",

            exploreProducts:
                "उत्पाद देखें",

            viewGallery:
                "गैलरी देखें",

            yearsCraft:
                "कारीगरी के वर्ष",

            creations:
                "संगमरमर की रचनाएँ",

            handcrafted:
                "हस्तनिर्मित",

            scrollDiscover:
                "खोजने के लिए नीचे स्क्रॉल करें",

            artBehind:
                "पत्थर के पीछे की कला",

            craftedWith:
                "भक्ति से",

            devotion:
                "तराशी गई।",

            storyParagraph1:
                "संगमरमर कारीगरी को कालातीत कला में बदलने की अनोखी क्षमता रखता है। ज्योत्शी मार्बल क्रिएशंस में हर कलाकृति का आरंभ चुने हुए पत्थर से होता है और कुशल कारीगरों के हाथों से उसे अंतिम रूप दिया जाता है।",

            storyParagraph2:
                "दिव्य मूर्तियों से लेकर पारंपरिक संगमरमर मंदिरों तक, हमारी हर रचना भारतीय विरासत की सुंदरता को दर्शाती है।",

            exploreMarbleProducts:
                "संगमरमर के उत्पाद देखें",

            ourCollection:
                "हमारा संग्रह",

            marble:
                "संगमरमर की",

            masterpieces:
                "उत्कृष्ट रचनाएँ",

            collectionDescription:
                "परंपरा, आध्यात्मिकता और कालातीत भारतीय कला से प्रेरित हस्तनिर्मित संगमरमर की रचनाएँ देखें।",

            divineCollection:
                "दिव्य संग्रह",

            ganeshJi:
                "गणेश जी",

            radhaKrishna:
                "राधा कृष्ण",

            durgaJi:
                "दुर्गा जी",

            nandiJi:
                "नंदी जी",

            viewAllProducts:
                "सभी संगमरमर उत्पाद देखें",

            marbleTemples:
                "संगमरमर के मंदिर",

            sacredSpace:
                "एक पवित्र स्थान,",

            carvedIn:
                "संगमरमर में",

            marbleWord:
                "तराशा गया।",

            templeDescription:
                "बारीक नक्काशी, सुंदर स्तंभों और कालातीत वास्तुकला के साथ तैयार किए गए पारंपरिक संगमरमर मंदिर।",

            enquireTemple:
                "कस्टम मंदिर के लिए पूछताछ करें",

            whyChooseUs:
                "हमें क्यों चुनें",

            difference:
                "अंतर",

            detail:
                "बारीकी में है।",

            featureHandcrafted:
                "हस्तनिर्मित",

            featureHandcraftedText:
                "हर मूर्ति को कुशल कारीगरों द्वारा आकार दिया, तराशा और अंतिम रूप दिया जाता है।",

            featureMarble:
                "चयनित संगमरमर",

            featureMarbleText:
                "हम सुंदरता, मजबूती और लंबे समय तक टिकने के लिए चुने हुए संगमरमर का उपयोग करते हैं।",

            featureTraditional:
                "पारंपरिक कला",

            featureTraditionalText:
                "हमारे डिजाइन पारंपरिक भारतीय संगमरमर कला की सुंदरता को बनाए रखते हैं।",

            featureCustom:
                "कस्टम रचनाएँ",

            featureCustomText:
                "आपकी पसंद और आवश्यकता के अनुसार विशेष मूर्तियाँ, मंदिर और शिल्प तैयार किए जाते हैं।",

            ourGallery:
                "हमारी गैलरी",

            beautyCarved:
                "पत्थर में तराशी",

            inStone:
                "गई सुंदरता।",

            galleryDescription:
                "संगमरमर की मूर्तियों और हस्तनिर्मित रचनाओं की हमारी दुनिया की एक झलक।",

            customMarbleCreations:
                "कस्टम संगमरमर रचनाएँ",

            yourVision:
                "आपकी कल्पना।",

            our:
                "हमारी",

            craftsmanship:
                "कारीगरी।",

            orderFromHomeTitle:
                "घर बैठे ऑर्डर करें",

            orderFromHomeText:
                "— आप कहीं से भी अपना ऑर्डर दे सकते हैं।",

            parcelDeliveryText:
                "— हम आपकी संगमरमर की कलाकृति पार्सल द्वारा भेज सकते हैं।",

            location:
                "थानागाजी, अलवर, राजस्थान",

            callUs:
                "कॉल करें",

            whatsappUs:
                "व्हाट्सऐप करें",

            proudlyCrafting:
                "हम गर्व से संगमरमर कला बनाते हैं",

            craftedToday:
                "आज तराशी गई।",

            cherishedFor:
                "पीढ़ियों तक",

            generations:
                "संभालकर रखी जाए।",

            finalDescription:
                "हमारे संगमरमर उत्पाद देखें और हस्तनिर्मित कला की कालातीत सुंदरता को महसूस करें।",

            footerDescription:
                "परंपरा, भक्ति और कालातीत सुंदरता से प्रेरित हस्तनिर्मित संगमरमर कला।",

            footerExplore:
                "जानकारी",

            footerCreations:
                "रचनाएँ",

            footerContact:
                "संपर्क",

            marbleIdols:
                "संगमरमर की मूर्तियाँ",

            marbleTemplesFooter:
                "संगमरमर के मंदिर",

            marbleSculptures:
                "संगमरमर की शिल्पकृतियाँ",

            customCreations:
                "कस्टम रचनाएँ",

            startInquiry:
                "पूछताछ शुरू करें",

            allRightsReserved:
                "सर्वाधिकार सुरक्षित।",

            footerTagline:
                "हस्तनिर्मित संगमरमर कला • राजस्थान, भारत",

            whatsapp:
                "व्हाट्सऐप",

            instagram:
                "इंस्टाग्राम",

            facebook:
                "फेसबुक"

        },


        /* =====================================
           BENGALI
        ===================================== */

        bn: {

            brandName:
                "জ্যোতশি মার্বেল ক্রিয়েশনস",

            home: "হোম",
            story: "আমাদের গল্প",
            products: "পণ্য",
            gallery: "গ্যালারি",
            contact: "যোগাযোগ",

            inquiry:
                "জিজ্ঞাসা করুন",

            handcraftedLabel:
                "হাতে তৈরি মার্বেল শিল্প",

            handcraftedMarble:
                "হাতে তৈরি মার্বেল",

            artLasts:
                "যে শিল্প চিরকাল থাকে।",

            heroDescription:
                "ভক্তি, ঐতিহ্যবাহী শিল্প এবং নিখুঁত কারুকার্যের সঙ্গে তৈরি মার্বেলের মূর্তি, মন্দির ও ভাস্কর্যের সৌন্দর্য আবিষ্কার করুন।",

            parcelDelivery:
                "পার্সেল ডেলিভারি উপলব্ধ",

            orderFromHome:
                "— ঘরে বসেই আপনার পছন্দের মার্বেল শিল্পকর্ম অর্ডার করুন।",

            exploreProducts:
                "পণ্য দেখুন",

            viewGallery:
                "গ্যালারি দেখুন",

            yearsCraft:
                "কারুশিল্পের বছর",

            creations:
                "মার্বেল সৃষ্টি",

            handcrafted:
                "হাতে তৈরি",

            scrollDiscover:
                "আবিষ্কার করতে নিচে স্ক্রোল করুন",

            artBehind:
                "পাথরের পেছনের শিল্প",

            craftedWith:
                "ভক্তির সঙ্গে",

            devotion:
                "তৈরি।",

            storyParagraph1:
                "মার্বেল কারুশিল্পকে চিরন্তন শিল্পে পরিণত করার এক অনন্য ক্ষমতা রাখে। জ্যোতশি মার্বেল ক্রিয়েশনসে প্রতিটি কাজ নির্বাচিত পাথর দিয়ে শুরু হয় এবং দক্ষ কারিগরদের হাতে সম্পূর্ণ হয়।",

            storyParagraph2:
                "দেবদেবীর মূর্তি থেকে ঐতিহ্যবাহী মার্বেল মন্দির পর্যন্ত প্রতিটি সৃষ্টি ভারতীয় ঐতিহ্যের সৌন্দর্য প্রকাশ করে।",

            exploreMarbleProducts:
                "মার্বেল পণ্য দেখুন",

            ourCollection:
                "আমাদের সংগ্রহ",

            marble:
                "মার্বেল",

            masterpieces:
                "শ্রেষ্ঠ সৃষ্টি",

            collectionDescription:
                "ঐতিহ্য, আধ্যাত্মিকতা এবং চিরন্তন ভারতীয় শিল্প থেকে অনুপ্রাণিত হাতে তৈরি মার্বেল সৃষ্টি আবিষ্কার করুন।",

            divineCollection:
                "দিব্য সংগ্রহ",

            ganeshJi:
                "গণেশ জি",

            radhaKrishna:
                "রাধা কৃষ্ণ",

            durgaJi:
                "দুর্গা জি",

            nandiJi:
                "নন্দী জি",

            viewAllProducts:
                "সব মার্বেল পণ্য দেখুন",

            marbleTemples:
                "মার্বেল মন্দির",

            sacredSpace:
                "একটি পবিত্র স্থান,",

            carvedIn:
                "মার্বেলে",

            marbleWord:
                "খোদাই করা।",

            templeDescription:
                "সূক্ষ্ম নকশা, সুন্দর স্তম্ভ এবং চিরন্তন স্থাপত্য সৌন্দর্য দিয়ে তৈরি ঐতিহ্যবাহী মার্বেল মন্দির।",

            enquireTemple:
                "কাস্টম মন্দির সম্পর্কে জিজ্ঞাসা করুন",

            whyChooseUs:
                "কেন আমাদের বেছে নেবেন",

            difference:
                "পার্থক্যটি",

            detail:
                "বিস্তারিত কাজে।",

            featureHandcrafted:
                "হাতে তৈরি",

            featureHandcraftedText:
                "প্রতিটি ভাস্কর্য দক্ষ কারিগরদের হাতে আকৃতি, খোদাই ও সম্পূর্ণ করা হয়।",

            featureMarble:
                "নির্বাচিত মার্বেল",

            featureMarbleText:
                "সৌন্দর্য, শক্তি এবং দীর্ঘস্থায়িত্বের জন্য আমরা যত্নসহকারে নির্বাচিত মার্বেল ব্যবহার করি।",

            featureTraditional:
                "ঐতিহ্যবাহী শিল্প",

            featureTraditionalText:
                "আমাদের নকশা ঐতিহ্যবাহী ভারতীয় মার্বেল শিল্পের সৌন্দর্য ধরে রাখে।",

            featureCustom:
                "কাস্টম সৃষ্টি",

            featureCustomText:
                "আপনার পছন্দ অনুযায়ী বিশেষ মূর্তি, মন্দির ও ভাস্কর্য তৈরি করা হয়।",

            ourGallery:
                "আমাদের গ্যালারি",

            beautyCarved:
                "পাথরে খোদাই করা",

            inStone:
                "সৌন্দর্য।",

            galleryDescription:
                "মার্বেল ভাস্কর্য ও হাতে তৈরি শিল্পকর্মের আমাদের জগতের এক ঝলক।",

            customMarbleCreations:
                "কাস্টম মার্বেল সৃষ্টি",

            yourVision:
                "আপনার ভাবনা।",

            our:
                "আমাদের",

            craftsmanship:
                "কারুশিল্প।",

            orderFromHomeTitle:
                "ঘরে বসে অর্ডার করুন",

            orderFromHomeText:
                "— আপনি যেকোনো স্থান থেকে অর্ডার করতে পারেন।",

            parcelDeliveryText:
                "— আমরা আপনার মার্বেল শিল্পকর্ম পার্সেলের মাধ্যমে পাঠাতে পারি।",

            location:
                "থানাগাজি, আলওয়ার, রাজস্থান",

            callUs:
                "কল করুন",

            whatsappUs:
                "হোয়াটসঅ্যাপ করুন",

            proudlyCrafting:
                "আমরা গর্বের সঙ্গে মার্বেল শিল্প তৈরি করি",

            craftedToday:
                "আজ তৈরি।",

            cherishedFor:
                "প্রজন্মের পর প্রজন্ম",

            generations:
                "স্মরণীয়।",

            finalDescription:
                "আমাদের মার্বেল পণ্য দেখুন এবং হাতে তৈরি শিল্পের চিরন্তন সৌন্দর্য আবিষ্কার করুন।",

            footerDescription:
                "ঐতিহ্য, ভক্তি এবং চিরন্তন সৌন্দর্য থেকে অনুপ্রাণিত হাতে তৈরি মার্বেল শিল্প।",

            footerExplore:
                "অন্বেষণ",

            footerCreations:
                "সৃষ্টি",

            footerContact:
                "যোগাযোগ",

            marbleIdols:
                "মার্বেল মূর্তি",

            marbleTemplesFooter:
                "মার্বেল মন্দির",

            marbleSculptures:
                "মার্বেল ভাস্কর্য",

            customCreations:
                "কাস্টম সৃষ্টি",

            startInquiry:
                "জিজ্ঞাসা শুরু করুন",

            allRightsReserved:
                "সর্বস্বত্ব সংরক্ষিত।",

            footerTagline:
                "হাতে তৈরি মার্বেল শিল্প • রাজস্থান, ভারত",

            whatsapp:
                "হোয়াটসঅ্যাপ",

            instagram:
                "ইনস্টাগ্রাম",

            facebook:
                "ফেসবুক"

        },


        /* =====================================
           MARATHI
        ===================================== */

        mr: {

            brandName:
                "ज्योत्शी मार्बल क्रिएशन्स",

            home: "मुख्यपृष्ठ",
            story: "आमची कथा",
            products: "उत्पादने",
            gallery: "गॅलरी",
            contact: "संपर्क",

            inquiry:
                "चौकशी करा",

            handcraftedLabel:
                "हस्तनिर्मित संगमरवरी कला",

            handcraftedMarble:
                "हस्तनिर्मित संगमरवरी",

            artLasts:
                "कायम टिकणारी कला.",

            heroDescription:
                "भक्ती, पारंपरिक कला आणि उत्कृष्ट कारागिरीने तयार केलेल्या संगमरवरी मूर्ती, मंदिरे आणि शिल्पांची सुंदर दुनिया शोधा.",

            parcelDelivery:
                "पार्सल डिलिव्हरी उपलब्ध",

            orderFromHome:
                "— घरबसल्या आपल्या आवडत्या संगमरवरी कलाकृतीची ऑर्डर करा.",

            exploreProducts:
                "उत्पादने पहा",

            viewGallery:
                "गॅलरी पहा",

            yearsCraft:
                "कारागिरीची वर्षे",

            creations:
                "संगमरवरी निर्मिती",

            handcrafted:
                "हस्तनिर्मित",

            scrollDiscover:
                "शोधण्यासाठी खाली स्क्रोल करा",

            artBehind:
                "दगडामागील कला",

            craftedWith:
                "भक्तीने",

            devotion:
                "घडवलेले.",

            storyParagraph1:
                "संगमरवरी दगडाला कालातीत कलेत रूपांतरित करण्याची अनोखी क्षमता आहे. ज्योत्शी मार्बल क्रिएशन्समध्ये प्रत्येक कलाकृती निवडक दगडापासून सुरू होते आणि कुशल कारागिरांच्या हातांनी पूर्ण होते.",

            storyParagraph2:
                "दैवी मूर्तींपासून पारंपरिक संगमरवरी मंदिरांपर्यंत प्रत्येक निर्मिती भारतीय वारशाचे सौंदर्य दर्शवते.",

            exploreMarbleProducts:
                "संगमरवरी उत्पादने पहा",

            ourCollection:
                "आमचा संग्रह",

            marble:
                "संगमरवरी",

            masterpieces:
                "उत्कृष्ट कलाकृती",

            collectionDescription:
                "परंपरा, अध्यात्म आणि कालातीत भारतीय कलेपासून प्रेरित हस्तनिर्मित संगमरवरी कलाकृती शोधा.",

            divineCollection:
                "दैवी संग्रह",

            ganeshJi:
                "गणेश जी",

            radhaKrishna:
                "राधा कृष्ण",

            durgaJi:
                "दुर्गा जी",

            nandiJi:
                "नंदी जी",

            viewAllProducts:
                "सर्व संगमरवरी उत्पादने पहा",

            marbleTemples:
                "संगमरवरी मंदिरे",

            sacredSpace:
                "एक पवित्र जागा,",

            carvedIn:
                "संगमरवरात",

            marbleWord:
                "कोरलेली.",

            templeDescription:
                "सुंदर नक्षीकाम, आकर्षक स्तंभ आणि कालातीत वास्तुशैलीसह तयार केलेली पारंपरिक संगमरवरी मंदिरे.",

            enquireTemple:
                "कस्टम मंदिरासाठी चौकशी करा",

            whyChooseUs:
                "आम्हालाच का निवडावे",

            difference:
                "फरक",

            detail:
                "बारकाव्यांमध्ये आहे.",

            featureHandcrafted:
                "हस्तनिर्मित",

            featureHandcraftedText:
                "प्रत्येक शिल्प कुशल कारागिरांकडून आकारले, कोरले आणि पूर्ण केले जाते.",

            featureMarble:
                "निवडक संगमरवर",

            featureMarbleText:
                "सौंदर्य, मजबुती आणि दीर्घकाळ टिकण्यासाठी आम्ही काळजीपूर्वक निवडलेला संगमरवर वापरतो.",

            featureTraditional:
                "पारंपरिक कला",

            featureTraditionalText:
                "आमच्या रचनांमध्ये पारंपरिक भारतीय संगमरवरी कलेचे सौंदर्य जपले जाते.",

            featureCustom:
                "कस्टम निर्मिती",

            featureCustomText:
                "आपल्या कल्पनेनुसार विशेष मूर्ती, मंदिरे आणि शिल्पे तयार केली जातात.",

            ourGallery:
                "आमची गॅलरी",

            beautyCarved:
                "दगडात कोरलेले",

            inStone:
                "सौंदर्य.",

            galleryDescription:
                "संगमरवरी शिल्पे आणि हस्तनिर्मित कलाकृतींच्या आमच्या जगाची एक झलक.",

            customMarbleCreations:
                "कस्टम संगमरवरी निर्मिती",

            yourVision:
                "तुमची कल्पना.",

            our:
                "आमची",

            craftsmanship:
                "कारागिरी.",

            orderFromHomeTitle:
                "घरबसल्या ऑर्डर करा",

            orderFromHomeText:
                "— तुम्ही कुठूनही ऑर्डर देऊ शकता.",

            parcelDeliveryText:
                "— आम्ही तुमची संगमरवरी कलाकृती पार्सलद्वारे पाठवू शकतो.",

            location:
                "थानागाजी, अलवर, राजस्थान",

            callUs:
                "कॉल करा",

            whatsappUs:
                "व्हॉट्सॲप करा",

            proudlyCrafting:
                "आम्ही अभिमानाने संगमरवरी कला तयार करतो",

            craftedToday:
                "आज घडवलेली.",

            cherishedFor:
                "पिढ्यानपिढ्या",

            generations:
                "जपली जाणारी.",

            finalDescription:
                "आमची संगमरवरी उत्पादने पहा आणि हस्तनिर्मित कलेचे कालातीत सौंदर्य अनुभवा़.",

            footerDescription:
                "परंपरा, भक्ती आणि कालातीत सौंदर्याने प्रेरित हस्तनिर्मित संगमरवरी कला.",

            footerExplore:
                "अन्वेषण",

            footerCreations:
                "निर्मिती",

            footerContact:
                "संपर्क",

            marbleIdols:
                "संगमरवरी मूर्ती",

            marbleTemplesFooter:
                "संगमरवरी मंदिरे",

            marbleSculptures:
                "संगमरवरी शिल्पे",

            customCreations:
                "कस्टम निर्मिती",

            startInquiry:
                "चौकशी सुरू करा",

            allRightsReserved:
                "सर्व हक्क राखीव.",

            footerTagline:
                "हस्तनिर्मित संगमरवरी कला • राजस्थान, भारत",

            whatsapp:
                "व्हॉट्सॲप",

            instagram:
                "इन्स्टाग्राम",

            facebook:
                "फेसबुक"

        },


        /* =====================================
           GUJARATI
        ===================================== */

        gu: {

            brandName:
                "જ્યોત્શી માર્બલ ક્રિએશન્સ",

            home: "હોમ",
            story: "અમારી વાર્તા",
            products: "ઉત્પાદનો",
            gallery: "ગેલેરી",
            contact: "સંપર્ક",

            inquiry:
                "પૂછપરછ કરો",

            handcraftedLabel:
                "હસ્તનિર્મિત માર્બલ કલા",

            handcraftedMarble:
                "હસ્તનિર્મિત માર્બલ",

            artLasts:
                "હંમેશા ટકી રહે તેવી કલા.",

            heroDescription:
                "ભક્તિ, પરંપરાગત કલા અને ઉત્તમ કારીગરી સાથે બનાવેલી માર્બલની મૂર્તિઓ, મંદિરો અને શિલ્પોની સુંદર દુનિયા શોધો.",

            parcelDelivery:
                "પાર્સલ ડિલિવરી ઉપલબ્ધ",

            orderFromHome:
                "— તમારા ઘરેથી તમારી પસંદની માર્બલ કૃતિ ઓર્ડર કરો.",

            exploreProducts:
                "ઉત્પાદનો જુઓ",

            viewGallery:
                "ગેલેરી જુઓ",

            yearsCraft:
                "કારીગરીના વર્ષો",

            creations:
                "માર્બલ રચનાઓ",

            handcrafted:
                "હસ્તનિર્મિત",

            scrollDiscover:
                "શોધવા માટે નીચે સ્ક્રોલ કરો",

            artBehind:
                "પથ્થર પાછળની કલા",

            craftedWith:
                "ભક્તિથી",

            devotion:
                "ઘડાયેલું.",

            storyParagraph1:
                "માર્બલમાં કારીગરીને કાલાતીત કલામાં ફેરવવાની અનોખી ક્ષમતા છે. જ્યોત્શી માર્બલ ક્રિએશન્સમાં દરેક કૃતિ પસંદ કરેલા પથ્થરથી શરૂ થાય છે અને કુશળ કારીગરોના હાથથી પૂર્ણ થાય છે.",

            storyParagraph2:
                "દિવ્ય મૂર્તિઓથી લઈને પરંપરાગત માર્બલ મંદિરો સુધી દરેક રચના ભારતીય વારસાની સુંદરતા દર્શાવે છે.",

            exploreMarbleProducts:
                "માર્બલ ઉત્પાદનો જુઓ",

            ourCollection:
                "અમારું કલેક્શન",

            marble:
                "માર્બલ",

            masterpieces:
                "ઉત્કૃષ્ટ કૃતિઓ",

            collectionDescription:
                "પરંપરા, આધ્યાત્મિકતા અને કાલાતીત ભારતીય કલાથી પ્રેરિત હસ્તનિર્મિત માર્બલ રચનાઓ શોધો.",

            divineCollection:
                "દિવ્ય કલેક્શન",

            ganeshJi:
                "ગણેશજી",

            radhaKrishna:
                "રાધા કૃષ્ણ",

            durgaJi:
                "દુર્ગા જી",

            nandiJi:
                "નંદી જી",

            viewAllProducts:
                "બધા માર્બલ ઉત્પાદનો જુઓ",

            marbleTemples:
                "માર્બલ મંદિરો",

            sacredSpace:
                "એક પવિત્ર સ્થાન,",

            carvedIn:
                "માર્બલમાં",

            marbleWord:
                "કોતરાયેલું.",

            templeDescription:
                "સુંદર નકશીકામ, આકર્ષક સ્તંભો અને કાલાતીત સ્થાપત્ય સાથે બનાવેલા પરંપરાગત માર્બલ મંદિરો.",

            enquireTemple:
                "કસ્ટમ મંદિર માટે પૂછપરછ કરો",

            whyChooseUs:
                "અમને શા માટે પસંદ કરો",

            difference:
                "તફાવત",

            detail:
                "વિગતોમાં છે.",

            featureHandcrafted:
                "હસ્તનિર્મિત",

            featureHandcraftedText:
                "દરેક શિલ્પ કુશળ કારીગરો દ્વારા આકારવામાં, કોતરવામાં અને પૂર્ણ કરવામાં આવે છે.",

            featureMarble:
                "પસંદ કરેલો માર્બલ",

            featureMarbleText:
                "સુંદરતા, મજબૂતી અને લાંબા સમય સુધી ટકાઉપણું માટે અમે પસંદ કરેલો માર્બલ વાપરીએ છીએ.",

            featureTraditional:
                "પરંપરાગત કલા",

            featureTraditionalText:
                "અમારી ડિઝાઇન પરંપરાગત ભારતીય માર્બલ કલાની સુંદરતા જાળવી રાખે છે.",

            featureCustom:
                "કસ્ટમ રચનાઓ",

            featureCustomText:
                "તમારી પસંદગી અનુસાર ખાસ મૂર્તિઓ, મંદિરો અને શિલ્પો બનાવવામાં આવે છે.",

            ourGallery:
                "અમારી ગેલેરી",

            beautyCarved:
                "પથ્થરમાં કોતરાયેલી",

            inStone:
                "સુંદરતા.",

            galleryDescription:
                "માર્બલ શિલ્પો અને હસ્તનિર્મિત કૃતિઓની અમારી દુનિયાની એક ઝલક.",

            customMarbleCreations:
                "કસ્ટમ માર્બલ રચનાઓ",

            yourVision:
                "તમારી કલ્પના.",

            our:
                "અમારી",

            craftsmanship:
                "કારીગરી.",

            orderFromHomeTitle:
                "ઘરેથી ઓર્ડર કરો",

            orderFromHomeText:
                "— તમે ગમે ત્યાંથી ઓર્ડર આપી શકો છો.",

            parcelDeliveryText:
                "— અમે તમારી માર્બલ કૃતિ પાર્સલ દ્વારા મોકલી શકીએ છીએ.",

            location:
                "થાનાગાજી, અલવર, રાજસ્થાન",

            callUs:
                "કૉલ કરો",

            whatsappUs:
                "વોટ્સએપ કરો",

            proudlyCrafting:
                "અમે ગર્વથી માર્બલ કલા બનાવીએ છીએ",

            craftedToday:
                "આજે બનાવેલું.",

            cherishedFor:
                "પેઢીઓ સુધી",

            generations:
                "સાચવાયેલું.",

            finalDescription:
                "અમારા માર્બલ ઉત્પાદનો જુઓ અને હસ્તનિર્મિત કલાની કાલાતીત સુંદરતા શોધો.",

            footerDescription:
                "પરંપરા, ભક્તિ અને કાલાતીત સુંદરતાથી પ્રેરિત હસ્તનિર્મિત માર્બલ કલા.",

            footerExplore:
                "અન્વેષણ",

            footerCreations:
                "રચનાઓ",

            footerContact:
                "સંપર્ક",

            marbleIdols:
                "માર્બલ મૂર્તિઓ",

            marbleTemplesFooter:
                "માર્બલ મંદિરો",

            marbleSculptures:
                "માર્બલ શિલ્પો",

            customCreations:
                "કસ્ટમ રચનાઓ",

            startInquiry:
                "પૂછપરછ શરૂ કરો",

            allRightsReserved:
                "તમામ અધિકારો સુરક્ષિત.",

            footerTagline:
                "હસ્તનિર્મિત માર્બલ કલા • રાજસ્થાન, ભારત",

            whatsapp:
                "વોટ્સએપ",

            instagram:
                "ઇન્સ્ટાગ્રામ",

            facebook:
                "ફેસબુક"

        },


        /* =====================================
           PUNJABI
        ===================================== */

        pa: {

            brandName:
                "ਜੋਤਸ਼ੀ ਮਾਰਬਲ ਕ੍ਰੀਏਸ਼ਨਜ਼",

            home: "ਹੋਮ",
            story: "ਸਾਡੀ ਕਹਾਣੀ",
            products: "ਉਤਪਾਦ",
            gallery: "ਗੈਲਰੀ",
            contact: "ਸੰਪਰਕ",

            inquiry:
                "ਪੁੱਛਗਿੱਛ ਕਰੋ",

            handcraftedLabel:
                "ਹੱਥ ਨਾਲ ਬਣਾਈ ਸੰਗਮਰਮਰ ਕਲਾ",

            handcraftedMarble:
                "ਹੱਥ ਨਾਲ ਬਣਾਇਆ ਸੰਗਮਰਮਰ",

            artLasts:
                "ਹਮੇਸ਼ਾ ਕਾਇਮ ਰਹਿਣ ਵਾਲੀ ਕਲਾ।",

            heroDescription:
                "ਸ਼ਰਧਾ, ਰਵਾਇਤੀ ਕਲਾ ਅਤੇ ਉੱਤਮ ਕਾਰੀਗਰੀ ਨਾਲ ਬਣੀਆਂ ਸੰਗਮਰਮਰ ਦੀਆਂ ਮੂਰਤੀਆਂ, ਮੰਦਰਾਂ ਅਤੇ ਸ਼ਿਲਪਕਲਾਵਾਂ ਦੀ ਸੁੰਦਰ ਦੁਨੀਆ ਵੇਖੋ।",

            parcelDelivery:
                "ਪਾਰਸਲ ਡਿਲਿਵਰੀ ਉਪਲਬਧ",

            orderFromHome:
                "— ਆਪਣੇ ਘਰ ਬੈਠੇ ਆਪਣੀ ਪਸੰਦ ਦੀ ਸੰਗਮਰਮਰ ਕਲਾ ਦਾ ਆਰਡਰ ਕਰੋ।",

            exploreProducts:
                "ਉਤਪਾਦ ਵੇਖੋ",

            viewGallery:
                "ਗੈਲਰੀ ਵੇਖੋ",

            yearsCraft:
                "ਕਾਰੀਗਰੀ ਦੇ ਸਾਲ",

            creations:
                "ਸੰਗਮਰਮਰ ਦੀਆਂ ਰਚਨਾਵਾਂ",

            handcrafted:
                "ਹੱਥ ਨਾਲ ਬਣਾਇਆ",

            scrollDiscover:
                "ਖੋਜਣ ਲਈ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ",

            artBehind:
                "ਪੱਥਰ ਦੇ ਪਿੱਛੇ ਦੀ ਕਲਾ",

            craftedWith:
                "ਸ਼ਰਧਾ ਨਾਲ",

            devotion:
                "ਤਰਾਸ਼ਿਆ ਗਿਆ।",

            storyParagraph1:
                "ਸੰਗਮਰਮਰ ਵਿੱਚ ਕਾਰੀਗਰੀ ਨੂੰ ਸਦੀਵੀ ਕਲਾ ਵਿੱਚ ਬਦਲਣ ਦੀ ਵਿਲੱਖਣ ਸਮਰੱਥਾ ਹੈ। ਜੋਤਸ਼ੀ ਮਾਰਬਲ ਕ੍ਰੀਏਸ਼ਨਜ਼ ਵਿੱਚ ਹਰ ਰਚਨਾ ਚੁਣੇ ਹੋਏ ਪੱਥਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਅਤੇ ਮਾਹਿਰ ਕਾਰੀਗਰਾਂ ਦੇ ਹੱਥਾਂ ਨਾਲ ਪੂਰੀ ਹੁੰਦੀ ਹੈ।",

            storyParagraph2:
                "ਦੇਵੀ-ਦੇਵਤਿਆਂ ਦੀਆਂ ਮੂਰਤੀਆਂ ਤੋਂ ਲੈ ਕੇ ਰਵਾਇਤੀ ਸੰਗਮਰਮਰ ਮੰਦਰਾਂ ਤੱਕ ਹਰ ਰਚਨਾ ਭਾਰਤੀ ਵਿਰਾਸਤ ਦੀ ਸੁੰਦਰਤਾ ਦਰਸਾਉਂਦੀ ਹੈ।",

            exploreMarbleProducts:
                "ਸੰਗਮਰਮਰ ਉਤਪਾਦ ਵੇਖੋ",

            ourCollection:
                "ਸਾਡਾ ਸੰਗ੍ਰਹਿ",

            marble:
                "ਸੰਗਮਰਮਰ",

            masterpieces:
                "ਸ਼ਾਨਦਾਰ ਰਚਨਾਵਾਂ",

            collectionDescription:
                "ਪਰੰਪਰਾ, ਅਧਿਆਤਮ ਅਤੇ ਸਦੀਵੀ ਭਾਰਤੀ ਕਲਾ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੱਥ ਨਾਲ ਬਣਾਈਆਂ ਸੰਗਮਰਮਰ ਰਚਨਾਵਾਂ ਵੇਖੋ।",

            divineCollection:
                "ਦਿਵਿਆ ਸੰਗ੍ਰਹਿ",

            ganeshJi:
                "ਗਣੇਸ਼ ਜੀ",

            radhaKrishna:
                "ਰਾਧਾ ਕ੍ਰਿਸ਼ਨ",

            durgaJi:
                "ਦੁਰਗਾ ਜੀ",

            nandiJi:
                "ਨੰਦੀ ਜੀ",

            viewAllProducts:
                "ਸਾਰੇ ਸੰਗਮਰਮਰ ਉਤਪਾਦ ਵੇਖੋ",

            marbleTemples:
                "ਸੰਗਮਰਮਰ ਮੰਦਰ",

            sacredSpace:
                "ਇੱਕ ਪਵਿੱਤਰ ਸਥਾਨ,",

            carvedIn:
                "ਸੰਗਮਰਮਰ ਵਿੱਚ",

            marbleWord:
                "ਤਰਾਸ਼ਿਆ ਹੋਇਆ।",

            templeDescription:
                "ਬਾਰੀਕ ਨੱਕਾਸ਼ੀ, ਸੁੰਦਰ ਥੰਮ੍ਹਾਂ ਅਤੇ ਸਦੀਵੀ ਵਾਸਤੂਕਲਾ ਨਾਲ ਬਣੇ ਰਵਾਇਤੀ ਸੰਗਮਰਮਰ ਮੰਦਰ।",

            enquireTemple:
                "ਕਸਟਮ ਮੰਦਰ ਲਈ ਪੁੱਛਗਿੱਛ ਕਰੋ",

            whyChooseUs:
                "ਸਾਨੂੰ ਕਿਉਂ ਚੁਣੋ",

            difference:
                "ਫਰਕ",

            detail:
                "ਵੇਰਵਿਆਂ ਵਿੱਚ ਹੈ।",

            featureHandcrafted:
                "ਹੱਥ ਨਾਲ ਬਣਾਇਆ",

            featureHandcraftedText:
                "ਹਰ ਮੂਰਤੀ ਨੂੰ ਮਾਹਿਰ ਕਾਰੀਗਰਾਂ ਦੁਆਰਾ ਆਕਾਰ ਦਿੱਤਾ, ਤਰਾਸ਼ਿਆ ਅਤੇ ਪੂਰਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",

            featureMarble:
                "ਚੁਣਿਆ ਹੋਇਆ ਸੰਗਮਰਮਰ",

            featureMarbleText:
                "ਸੁੰਦਰਤਾ, ਮਜ਼ਬੂਤੀ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੀ ਟਿਕਾਊਪਣ ਲਈ ਅਸੀਂ ਚੁਣਿਆ ਹੋਇਆ ਸੰਗਮਰਮਰ ਵਰਤਦੇ ਹਾਂ।",

            featureTraditional:
                "ਰਵਾਇਤੀ ਕਲਾ",

            featureTraditionalText:
                "ਸਾਡੇ ਡਿਜ਼ਾਈਨ ਰਵਾਇਤੀ ਭਾਰਤੀ ਸੰਗਮਰਮਰ ਕਲਾ ਦੀ ਸੁੰਦਰਤਾ ਨੂੰ ਕਾਇਮ ਰੱਖਦੇ ਹਨ।",

            featureCustom:
                "ਕਸਟਮ ਰਚਨਾਵਾਂ",

            featureCustomText:
                "ਤੁਹਾਡੀ ਪਸੰਦ ਅਨੁਸਾਰ ਖਾਸ ਮੂਰਤੀਆਂ, ਮੰਦਰ ਅਤੇ ਸ਼ਿਲਪ ਤਿਆਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",

            ourGallery:
                "ਸਾਡੀ ਗੈਲਰੀ",

            beautyCarved:
                "ਪੱਥਰ ਵਿੱਚ ਤਰਾਸ਼ੀ",

            inStone:
                "ਸੁੰਦਰਤਾ।",

            galleryDescription:
                "ਸੰਗਮਰਮਰ ਦੀਆਂ ਮੂਰਤੀਆਂ ਅਤੇ ਹੱਥ ਨਾਲ ਬਣੀਆਂ ਰਚਨਾਵਾਂ ਦੀ ਸਾਡੀ ਦੁਨੀਆ ਦੀ ਇੱਕ ਝਲਕ।",

            customMarbleCreations:
                "ਕਸਟਮ ਸੰਗਮਰਮਰ ਰਚਨਾਵਾਂ",

            yourVision:
                "ਤੁਹਾਡੀ ਕਲਪਨਾ।",

            our:
                "ਸਾਡੀ",

            craftsmanship:
                "ਕਾਰੀਗਰੀ।",

            orderFromHomeTitle:
                "ਘਰ ਬੈਠੇ ਆਰਡਰ ਕਰੋ",

            orderFromHomeText:
                "— ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਥਾਂ ਤੋਂ ਆਰਡਰ ਦੇ ਸਕਦੇ ਹੋ।",

            parcelDeliveryText:
                "— ਅਸੀਂ ਤੁਹਾਡੀ ਸੰਗਮਰਮਰ ਕਲਾ ਪਾਰਸਲ ਰਾਹੀਂ ਭੇਜ ਸਕਦੇ ਹਾਂ।",

            location:
                "ਥਾਨਾਗਾਜੀ, ਅਲਵਰ, ਰਾਜਸਥਾਨ",

            callUs:
                "ਕਾਲ ਕਰੋ",

            whatsappUs:
                "ਵਟਸਐਪ ਕਰੋ",

            proudlyCrafting:
                "ਅਸੀਂ ਮਾਣ ਨਾਲ ਸੰਗਮਰਮਰ ਕਲਾ ਤਿਆਰ ਕਰਦੇ ਹਾਂ",

            craftedToday:
                "ਅੱਜ ਤਰਾਸ਼ਿਆ ਗਿਆ।",

            cherishedFor:
                "ਪੀੜ੍ਹੀਆਂ ਤੱਕ",

            generations:
                "ਸੰਭਾਲਿਆ ਜਾਵੇ।",

            finalDescription:
                "ਸਾਡੇ ਸੰਗਮਰਮਰ ਉਤਪਾਦ ਵੇਖੋ ਅਤੇ ਹੱਥ ਨਾਲ ਬਣਾਈ ਕਲਾ ਦੀ ਸਦੀਵੀ ਸੁੰਦਰਤਾ ਨੂੰ ਜਾਣੋ।",

            footerDescription:
                "ਪਰੰਪਰਾ, ਸ਼ਰਧਾ ਅਤੇ ਸਦੀਵੀ ਸੁੰਦਰਤਾ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੱਥ ਨਾਲ ਬਣਾਈ ਸੰਗਮਰਮਰ ਕਲਾ।",

            footerExplore:
                "ਖੋਜੋ",

            footerCreations:
                "ਰਚਨਾਵਾਂ",

            footerContact:
                "ਸੰਪਰਕ",

            marbleIdols:
                "ਸੰਗਮਰਮਰ ਦੀਆਂ ਮੂਰਤੀਆਂ",

            marbleTemplesFooter:
                "ਸੰਗਮਰਮਰ ਮੰਦਰ",

            marbleSculptures:
                "ਸੰਗਮਰਮਰ ਸ਼ਿਲਪ",

            customCreations:
                "ਕਸਟਮ ਰਚਨਾਵਾਂ",

            startInquiry:
                "ਪੁੱਛਗਿੱਛ ਸ਼ੁਰੂ ਕਰੋ",

            allRightsReserved:
                "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",

            footerTagline:
                "ਹੱਥ ਨਾਲ ਬਣਾਈ ਸੰਗਮਰਮਰ ਕਲਾ • ਰਾਜਸਥਾਨ, ਭਾਰਤ",

            whatsapp:
                "ਵਟਸਐਪ",

            instagram:
                "ਇੰਸਟਾਗ੍ਰਾਮ",

            facebook:
                "ਫੇਸਬੁੱਕ"

        },


        /* =====================================
           TAMIL
        ===================================== */

        ta: {

            brandName:
                "ஜ்யோத்ஷி மார்பிள் கிரியேஷன்ஸ்",

            home: "முகப்பு",
            story: "எங்கள் கதை",
            products: "தயாரிப்புகள்",
            gallery: "கேலரி",
            contact: "தொடர்பு",

            inquiry:
                "விசாரிக்கவும்",

            handcraftedLabel:
                "கைவினை மார்பிள் கலை",

            handcraftedMarble:
                "கைவினை மார்பிள்",

            artLasts:
                "என்றும் நிலைக்கும் கலை.",

            heroDescription:
                "பக்தி, பாரம்பரிய கலை மற்றும் சிறந்த கைவினைத்திறனுடன் உருவாக்கப்பட்ட மார்பிள் சிலைகள், கோயில்கள் மற்றும் சிற்பங்களின் அழகை கண்டறியுங்கள்.",

            parcelDelivery:
                "பார்சல் டெலிவரி கிடைக்கும்",

            orderFromHome:
                "— உங்கள் வீட்டிலிருந்தே உங்களுக்கு பிடித்த மார்பிள் கலைப்பொருளை ஆர்டர் செய்யுங்கள்.",

            exploreProducts:
                "தயாரிப்புகளைப் பார்க்கவும்",

            viewGallery:
                "கேலரியைப் பார்க்கவும்",

            yearsCraft:
                "கைவினை அனுபவ ஆண்டுகள்",

            creations:
                "மார்பிள் படைப்புகள்",

            handcrafted:
                "கைவினை",

            scrollDiscover:
                "கண்டறிய கீழே ஸ்க்ரோல் செய்யவும்",

            artBehind:
                "கல்லின் பின்னுள்ள கலை",

            craftedWith:
                "பக்தியுடன்",

            devotion:
                "உருவாக்கப்பட்டது.",

            storyParagraph1:
                "மார்பிள் கைவினையை காலத்தால் அழியாத கலையாக மாற்றும் தனித்துவமான திறன் கொண்டது. ஜ்யோத்ஷி மார்பிள் கிரியேஷன்ஸில் ஒவ்வொரு படைப்பும் தேர்ந்தெடுக்கப்பட்ட கல்லில் தொடங்கி திறமையான கைவினைஞர்களின் கைகளால் நிறைவு பெறுகிறது.",

            storyParagraph2:
                "தெய்வ சிலைகள் முதல் பாரம்பரிய மார்பிள் கோயில்கள் வரை ஒவ்வொரு படைப்பும் இந்திய பாரம்பரியத்தின் அழகை பிரதிபலிக்கிறது.",

            exploreMarbleProducts:
                "மார்பிள் தயாரிப்புகளைப் பார்க்கவும்",

            ourCollection:
                "எங்கள் சேகரிப்பு",

            marble:
                "மார்பிள்",

            masterpieces:
                "சிறந்த படைப்புகள்",

            collectionDescription:
                "பாரம்பரியம், ஆன்மிகம் மற்றும் காலத்தால் அழியாத இந்தியக் கலையால் ஈர்க்கப்பட்ட கைவினை மார்பிள் படைப்புகளை கண்டறியுங்கள்.",

            divineCollection:
                "தெய்வீக சேகரிப்பு",

            ganeshJi:
                "கணேஷ் ஜி",

            radhaKrishna:
                "ராதா கிருஷ்ணர்",

            durgaJi:
                "துர்கா ஜி",

            nandiJi:
                "நந்தி ஜி",

            viewAllProducts:
                "அனைத்து மார்பிள் தயாரிப்புகளையும் பார்க்கவும்",

            marbleTemples:
                "மார்பிள் கோயில்கள்",

            sacredSpace:
                "ஒரு புனிதமான இடம்,",

            carvedIn:
                "மார்பிளில்",

            marbleWord:
                "செதுக்கப்பட்டது.",

            templeDescription:
                "நுணுக்கமான வேலைப்பாடுகள், அழகிய தூண்கள் மற்றும் காலத்தால் அழியாத கட்டிடக்கலையுடன் உருவாக்கப்பட்ட பாரம்பரிய மார்பிள் கோயில்கள்.",

            enquireTemple:
                "தனிப்பயன் கோயிலுக்கு விசாரிக்கவும்",

            whyChooseUs:
                "எங்களை ஏன் தேர்வு செய்ய வேண்டும்",

            difference:
                "வித்தியாசம்",

            detail:
                "விவரங்களில் உள்ளது.",

            featureHandcrafted:
                "கைவினை",

            featureHandcraftedText:
                "ஒவ்வொரு சிற்பமும் திறமையான கைவினைஞர்களால் வடிவமைக்கப்பட்டு, செதுக்கப்பட்டு முடிக்கப்படுகிறது.",

            featureMarble:
                "தேர்ந்தெடுக்கப்பட்ட மார்பிள்",

            featureMarbleText:
                "அழகு, வலிமை மற்றும் நீடித்த தன்மைக்காக கவனமாக தேர்ந்தெடுக்கப்பட்ட மார்பிளை பயன்படுத்துகிறோம்.",

            featureTraditional:
                "பாரம்பரிய கலை",

            featureTraditionalText:
                "எங்கள் வடிவமைப்புகள் பாரம்பரிய இந்திய மார்பிள் கலையின் அழகை பாதுகாக்கின்றன.",

            featureCustom:
                "தனிப்பயன் படைப்புகள்",

            featureCustomText:
                "உங்கள் விருப்பத்திற்கு ஏற்ப தனிப்பயன் சிலைகள், கோயில்கள் மற்றும் சிற்பங்கள் உருவாக்கப்படுகின்றன.",

            ourGallery:
                "எங்கள் கேலரி",

            beautyCarved:
                "கல்லில் செதுக்கப்பட்ட",

            inStone:
                "அழகு.",

            galleryDescription:
                "மார்பிள் சிற்பங்கள் மற்றும் கைவினைப் படைப்புகளின் எங்கள் உலகத்தின் ஒரு பார்வை.",

            customMarbleCreations:
                "தனிப்பயன் மார்பிள் படைப்புகள்",

            yourVision:
                "உங்கள் கற்பனை.",

            our:
                "எங்கள்",

            craftsmanship:
                "கைவினைத்திறன்.",

            orderFromHomeTitle:
                "வீட்டிலிருந்து ஆர்டர் செய்யுங்கள்",

            orderFromHomeText:
                "— நீங்கள் எங்கிருந்தும் ஆர்டர் செய்யலாம்.",

            parcelDeliveryText:
                "— உங்கள் மார்பிள் படைப்பை பார்சல் மூலம் அனுப்பலாம்.",

            location:
                "தானாகாஜி, அல்வார், ராஜஸ்தான்",

            callUs:
                "அழைக்கவும்",

            whatsappUs:
                "வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும்",

            proudlyCrafting:
                "நாங்கள் பெருமையுடன் மார்பிள் கலையை உருவாக்குகிறோம்",

            craftedToday:
                "இன்று உருவாக்கப்பட்டது.",

            cherishedFor:
                "தலைமுறைகள் முழுவதும்",

            generations:
                "போற்றப்படும்.",

            finalDescription:
                "எங்கள் மார்பிள் தயாரிப்புகளைப் பார்த்து கைவினைக் கலையின் காலத்தால் அழியாத அழகை கண்டறியுங்கள்.",

            footerDescription:
                "பாரம்பரியம், பக்தி மற்றும் காலத்தால் அழியாத அழகால் ஈர்க்கப்பட்ட கைவினை மார்பிள் கலை.",

            footerExplore:
                "ஆராயுங்கள்",

            footerCreations:
                "படைப்புகள்",

            footerContact:
                "தொடர்பு",

            marbleIdols:
                "மார்பிள் சிலைகள்",

            marbleTemplesFooter:
                "மார்பிள் கோயில்கள்",

            marbleSculptures:
                "மார்பிள் சிற்பங்கள்",

            customCreations:
                "தனிப்பயன் படைப்புகள்",

            startInquiry:
                "விசாரணையைத் தொடங்குங்கள்",

            allRightsReserved:
                "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

            footerTagline:
                "கைவினை மார்பிள் கலை • ராஜஸ்தான், இந்தியா",

            whatsapp:
                "வாட்ஸ்அப்",

            instagram:
                "இன்ஸ்டாகிராம்",

            facebook:
                "ஃபேஸ்புக்"

        },


        /* =====================================
           TELUGU
        ===================================== */

        te: {

            brandName:
                "జ్యోత్షి మార్బుల్ క్రియేషన్స్",

            home: "హోమ్",
            story: "మా కథ",
            products: "ఉత్పత్తులు",
            gallery: "గ్యాలరీ",
            contact: "సంప్రదించండి",

            inquiry:
                "విచారణ చేయండి",

            handcraftedLabel:
                "చేతితో తయారు చేసిన మార్బుల్ కళ",

            handcraftedMarble:
                "చేతితో తయారు చేసిన మార్బుల్",

            artLasts:
                "ఎప్పటికీ నిలిచే కళ.",

            heroDescription:
                "భక్తి, సంప్రదాయ కళ మరియు అద్భుతమైన నైపుణ్యంతో రూపొందించిన మార్బుల్ విగ్రహాలు, దేవాలయాలు మరియు శిల్పాల అందాన్ని కనుగొనండి.",

            parcelDelivery:
                "పార్సెల్ డెలివరీ అందుబాటులో ఉంది",

            orderFromHome:
                "— మీ ఇంటి నుంచే మీకు నచ్చిన మార్బుల్ కళాకృతిని ఆర్డర్ చేయండి.",

            exploreProducts:
                "ఉత్పత్తులను చూడండి",

            viewGallery:
                "గ్యాలరీని చూడండి",

            yearsCraft:
                "కళాకారుల అనుభవ సంవత్సరాలు",

            creations:
                "మార్బుల్ సృష్టులు",

            handcrafted:
                "చేతితో తయారు చేసిన",

            scrollDiscover:
                "కనుగొనడానికి క్రిందికి స్క్రోల్ చేయండి",

            artBehind:
                "రాయి వెనుక ఉన్న కళ",

            craftedWith:
                "భక్తితో",

            devotion:
                "రూపొందించబడింది.",

            storyParagraph1:
                "మార్బుల్ నైపుణ్యాన్ని శాశ్వతమైన కళగా మార్చే ప్రత్యేక సామర్థ్యాన్ని కలిగి ఉంది. జ్యోత్షి మార్బుల్ క్రియేషన్స్‌లో ప్రతి కళాకృతి ఎంపిక చేసిన రాయితో ప్రారంభమై నైపుణ్యం కలిగిన కళాకారుల చేతులతో పూర్తవుతుంది.",

            storyParagraph2:
                "దైవ విగ్రహాల నుండి సంప్రదాయ మార్బుల్ దేవాలయాల వరకు ప్రతి సృష్టి భారతీయ వారసత్వం యొక్క అందాన్ని ప్రతిబింబిస్తుంది.",

            exploreMarbleProducts:
                "మార్బుల్ ఉత్పత్తులను చూడండి",

            ourCollection:
                "మా కలెక్షన్",

            marble:
                "మార్బుల్",

            masterpieces:
                "అద్భుతమైన సృష్టులు",

            collectionDescription:
                "సంప్రదాయం, ఆధ్యాత్మికత మరియు శాశ్వతమైన భారతీయ కళ నుండి ప్రేరణ పొందిన చేతితో తయారు చేసిన మార్బుల్ సృష్టులను కనుగొనండి.",

            divineCollection:
                "దైవిక కలెక్షన్",

            ganeshJi:
                "గణేష్ జీ",

            radhaKrishna:
                "రాధా కృష్ణ",

            durgaJi:
                "దుర్గా జీ",

            nandiJi:
                "నంది జీ",

            viewAllProducts:
                "అన్ని మార్బుల్ ఉత్పత్తులను చూడండి",

            marbleTemples:
                "మార్బుల్ దేవాలయాలు",

            sacredSpace:
                "ఒక పవిత్ర స్థలం,",

            carvedIn:
                "మార్బుల్‌లో",

            marbleWord:
                "చెక్కబడింది.",

            templeDescription:
                "సూక్ష్మమైన చెక్కులు, అందమైన స్తంభాలు మరియు శాశ్వతమైన నిర్మాణ సౌందర్యంతో రూపొందించిన సంప్రదాయ మార్బుల్ దేవాలయాలు.",

            enquireTemple:
                "కస్టమ్ దేవాలయం కోసం విచారణ చేయండి",

            whyChooseUs:
                "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",

            difference:
                "తేడా",

            detail:
                "వివరాల్లో ఉంది.",

            featureHandcrafted:
                "చేతితో తయారు చేసిన",

            featureHandcraftedText:
                "ప్రతి శిల్పాన్ని నైపుణ్యం కలిగిన కళాకారులు ఆకారంలోకి తెచ్చి, చెక్కి మరియు పూర్తి చేస్తారు.",

            featureMarble:
                "ఎంచుకున్న మార్బుల్",

            featureMarbleText:
                "అందం, బలం మరియు దీర్ఘకాలిక నాణ్యత కోసం మేము జాగ్రత్తగా ఎంపిక చేసిన మార్బుల్‌ను ఉపయోగిస్తాము.",

            featureTraditional:
                "సంప్రదాయ కళ",

            featureTraditionalText:
                "మా డిజైన్లు సంప్రదాయ భారతీయ మార్బుల్ కళ యొక్క అందాన్ని కాపాడుతాయి.",

            featureCustom:
                "కస్టమ్ సృష్టులు",

            featureCustomText:
                "మీ అభిరుచికి అనుగుణంగా ప్రత్యేక విగ్రహాలు, దేవాలయాలు మరియు శిల్పాలను రూపొందిస్తాము.",

            ourGallery:
                "మా గ్యాలరీ",

            beautyCarved:
                "రాయిలో చెక్కిన",

            inStone:
                "అందం.",

            galleryDescription:
                "మార్బుల్ శిల్పాలు మరియు చేతితో తయారు చేసిన కళాకృతుల ప్రపంచం నుండి ఒక చూపు.",

            customMarbleCreations:
                "కస్టమ్ మార్బుల్ సృష్టులు",

            yourVision:
                "మీ ఆలోచన.",

            our:
                "మా",

            craftsmanship:
                "నైపుణ్యం.",

            orderFromHomeTitle:
                "ఇంటి నుంచే ఆర్డర్ చేయండి",

            orderFromHomeText:
                "— మీరు ఎక్కడి నుంచైనా ఆర్డర్ చేయవచ్చు.",

            parcelDeliveryText:
                "— మీ మార్బుల్ కళాకృతిని పార్సెల్ ద్వారా పంపవచ్చు.",

            location:
                "థానాగాజీ, అల్వార్, రాజస్థాన్",

            callUs:
                "కాల్ చేయండి",

            whatsappUs:
                "వాట్సాప్ చేయండి",

            proudlyCrafting:
                "మేము గర్వంగా మార్బుల్ కళను రూపొందిస్తున్నాము",

            craftedToday:
                "ఈరోజు రూపొందించబడింది.",

            cherishedFor:
                "తరతరాల పాటు",

            generations:
                "గౌరవించబడుతుంది.",

            finalDescription:
                "మా మార్బుల్ ఉత్పత్తులను చూడండి మరియు చేతితో తయారు చేసిన కళ యొక్క శాశ్వతమైన అందాన్ని కనుగొనండి.",

            footerDescription:
                "సంప్రదాయం, భక్తి మరియు శాశ్వతమైన అందం నుండి ప్రేరణ పొందిన చేతితో తయారు చేసిన మార్బుల్ కళ.",

            footerExplore:
                "అన్వేషించండి",

            footerCreations:
                "సృష్టులు",

            footerContact:
                "సంప్రదించండి",

            marbleIdols:
                "మార్బుల్ విగ్రహాలు",

            marbleTemplesFooter:
                "మార్బుల్ దేవాలయాలు",

            marbleSculptures:
                "మార్బుల్ శిల్పాలు",

            customCreations:
                "కస్టమ్ సృష్టులు",

            startInquiry:
                "విచారణ ప్రారంభించండి",

            allRightsReserved:
                "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",

            footerTagline:
                "చేతితో తయారు చేసిన మార్బుల్ కళ • రాజస్థాన్, భారతదేశం",

            whatsapp:
                "వాట్సాప్",

            instagram:
                "ఇన్‌స్టాగ్రామ్",

            facebook:
                "ఫేస్‌బుక్"

        },


        /* =====================================
           KANNADA
        ===================================== */

        kn: {

            brandName:
                "ಜ್ಯೋತ್ಶಿ ಮಾರ್ಬಲ್ ಕ್ರಿಯೇಷನ್ಸ್",

            home: "ಮುಖಪುಟ",
            story: "ನಮ್ಮ ಕಥೆ",
            products: "ಉತ್ಪನ್ನಗಳು",
            gallery: "ಗ್ಯಾಲರಿ",
            contact: "ಸಂಪರ್ಕಿಸಿ",

            inquiry:
                "ವಿಚಾರಿಸಿ",

            handcraftedLabel:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ",

            handcraftedMarble:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್",

            artLasts:
                "ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುವ ಕಲೆ.",

            heroDescription:
                "ಭಕ್ತಿ, ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಕರಕುಶಲತೆಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ವಿಗ್ರಹಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಶಿಲ್ಪಗಳ ಸೌಂದರ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",

            parcelDelivery:
                "ಪಾರ್ಸೆಲ್ ಡೆಲಿವರಿ ಲಭ್ಯವಿದೆ",

            orderFromHome:
                "— ನಿಮ್ಮ ಮನೆಯಿಂದಲೇ ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಮಾರ್ಬಲ್ ಕಲಾಕೃತಿಯನ್ನು ಆರ್ಡರ್ ಮಾಡಿ.",

            exploreProducts:
                "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",

            viewGallery:
                "ಗ್ಯಾಲರಿ ನೋಡಿ",

            yearsCraft:
                "ಕರಕುಶಲತೆಯ ವರ್ಷಗಳು",

            creations:
                "ಮಾರ್ಬಲ್ ಸೃಷ್ಟಿಗಳು",

            handcrafted:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ",

            scrollDiscover:
                "ಕಂಡುಹಿಡಿಯಲು ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ",

            artBehind:
                "ಕಲ್ಲಿನ ಹಿಂದಿನ ಕಲೆ",

            craftedWith:
                "ಭಕ್ತಿಯಿಂದ",

            devotion:
                "ರೂಪಿಸಲಾಗಿದೆ.",

            storyParagraph1:
                "ಮಾರ್ಬಲ್ ಕರಕುಶಲತೆಯನ್ನು ಕಾಲಾತೀತ ಕಲೆಯಾಗಿ ಪರಿವರ್ತಿಸುವ ವಿಶಿಷ್ಟ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೊಂದಿದೆ. ಜ್ಯೋತ್ಶಿ ಮಾರ್ಬಲ್ ಕ್ರಿಯೇಷನ್ಸ್‌ನಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಕಲಾಕೃತಿಯೂ ಆಯ್ದ ಕಲ್ಲಿನಿಂದ ಪ್ರಾರಂಭವಾಗಿ ನಿಪುಣ ಕಲಾವಿದರ ಕೈಗಳಿಂದ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ.",

            storyParagraph2:
                "ದೈವಿಕ ವಿಗ್ರಹಗಳಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಬಲ್ ದೇವಾಲಯಗಳವರೆಗೆ ಪ್ರತಿಯೊಂದು ಸೃಷ್ಟಿಯೂ ಭಾರತೀಯ ಪರಂಪರೆಯ ಸೌಂದರ್ಯವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.",

            exploreMarbleProducts:
                "ಮಾರ್ಬಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",

            ourCollection:
                "ನಮ್ಮ ಸಂಗ್ರಹ",

            marble:
                "ಮಾರ್ಬಲ್",

            masterpieces:
                "ಅದ್ಭುತ ಸೃಷ್ಟಿಗಳು",

            collectionDescription:
                "ಪರಂಪರೆ, ಆಧ್ಯಾತ್ಮಿಕತೆ ಮತ್ತು ಕಾಲಾತೀತ ಭಾರತೀಯ ಕಲೆಯಿಂದ ಪ್ರೇರಿತ ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಸೃಷ್ಟಿಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",

            divineCollection:
                "ದೈವಿಕ ಸಂಗ್ರಹ",

            ganeshJi:
                "ಗಣೇಶ ಜಿ",

            radhaKrishna:
                "ರಾಧಾ ಕೃಷ್ಣ",

            durgaJi:
                "ದುರ್ಗಾ ಜಿ",

            nandiJi:
                "ನಂದಿ ಜಿ",

            viewAllProducts:
                "ಎಲ್ಲಾ ಮಾರ್ಬಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",

            marbleTemples:
                "ಮಾರ್ಬಲ್ ದೇವಾಲಯಗಳು",

            sacredSpace:
                "ಒಂದು ಪವಿತ್ರ ಸ್ಥಳ,",

            carvedIn:
                "ಮಾರ್ಬಲ್‌ನಲ್ಲಿ",

            marbleWord:
                "ಕೆತ್ತಲಾಗಿದೆ.",

            templeDescription:
                "ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳು, ಸುಂದರ ಸ್ತಂಭಗಳು ಮತ್ತು ಕಾಲಾತೀತ ವಾಸ್ತುಶಿಲ್ಪದ ಸೌಂದರ್ಯದಿಂದ ತಯಾರಿಸಲಾದ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಬಲ್ ದೇವಾಲಯಗಳು.",

            enquireTemple:
                "ಕಸ್ಟಮ್ ದೇವಾಲಯಕ್ಕಾಗಿ ವಿಚಾರಿಸಿ",

            whyChooseUs:
                "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",

            difference:
                "ವ್ಯತ್ಯಾಸವು",

            detail:
                "ವಿವರಗಳಲ್ಲಿ ಇದೆ.",

            featureHandcrafted:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ",

            featureHandcraftedText:
                "ಪ್ರತಿಯೊಂದು ಶಿಲ್ಪವನ್ನು ನಿಪುಣ ಕರಕುಶಲಗಾರರು ಆಕಾರಗೊಳಿಸಿ, ಕೆತ್ತಿ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಸುತ್ತಾರೆ.",

            featureMarble:
                "ಆಯ್ದ ಮಾರ್ಬಲ್",

            featureMarbleText:
                "ಸೌಂದರ್ಯ, ಬಲ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಗುಣಮಟ್ಟಕ್ಕಾಗಿ ನಾವು ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆ ಮಾಡಿದ ಮಾರ್ಬಲ್ ಬಳಸುತ್ತೇವೆ.",

            featureTraditional:
                "ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ",

            featureTraditionalText:
                "ನಮ್ಮ ವಿನ್ಯಾಸಗಳು ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಮಾರ್ಬಲ್ ಕಲೆಯ ಸೌಂದರ್ಯವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ.",

            featureCustom:
                "ಕಸ್ಟಮ್ ಸೃಷ್ಟಿಗಳು",

            featureCustomText:
                "ನಿಮ್ಮ ಇಚ್ಛೆಗೆ ಅನುಗುಣವಾಗಿ ವಿಶೇಷ ವಿಗ್ರಹಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಶಿಲ್ಪಗಳನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ.",

            ourGallery:
                "ನಮ್ಮ ಗ್ಯಾಲರಿ",

            beautyCarved:
                "ಕಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಿದ",

            inStone:
                "ಸೌಂದರ್ಯ.",

            galleryDescription:
                "ಮಾರ್ಬಲ್ ಶಿಲ್ಪಗಳು ಮತ್ತು ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಕಲಾಕೃತಿಗಳ ನಮ್ಮ ಜಗತ್ತಿನ ಒಂದು ನೋಟ.",

            customMarbleCreations:
                "ಕಸ್ಟಮ್ ಮಾರ್ಬಲ್ ಸೃಷ್ಟಿಗಳು",

            yourVision:
                "ನಿಮ್ಮ ಕಲ್ಪನೆ.",

            our:
                "ನಮ್ಮ",

            craftsmanship:
                "ಕರಕುಶಲತೆ.",

            orderFromHomeTitle:
                "ಮನೆಯಿಂದಲೇ ಆರ್ಡರ್ ಮಾಡಿ",

            orderFromHomeText:
                "— ನೀವು ಎಲ್ಲಿಂದ ಬೇಕಾದರೂ ಆರ್ಡರ್ ಮಾಡಬಹುದು.",

            parcelDeliveryText:
                "— ನಿಮ್ಮ ಮಾರ್ಬಲ್ ಕಲಾಕೃತಿಯನ್ನು ಪಾರ್ಸೆಲ್ ಮೂಲಕ ಕಳುಹಿಸಬಹುದು.",

            location:
                "ಥಾನಾಗಾಜಿ, ಅಲ್ವಾರ್, ರಾಜಸ್ಥಾನ",

            callUs:
                "ಕರೆ ಮಾಡಿ",

            whatsappUs:
                "ವಾಟ್ಸಾಪ್ ಮಾಡಿ",

            proudlyCrafting:
                "ನಾವು ಹೆಮ್ಮೆಯಿಂದ ಮಾರ್ಬಲ್ ಕಲೆಯನ್ನು ತಯಾರಿಸುತ್ತೇವೆ",

            craftedToday:
                "ಇಂದು ತಯಾರಿಸಲಾಗಿದೆ.",

            cherishedFor:
                "ತಲೆಮಾರುಗಳವರೆಗೆ",

            generations:
                "ಉಳಿಯುತ್ತದೆ.",

            finalDescription:
                "ನಮ್ಮ ಮಾರ್ಬಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ ಮತ್ತು ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಕಲೆಯ ಕಾಲಾತೀತ ಸೌಂದರ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",

            footerDescription:
                "ಪರಂಪರೆ, ಭಕ್ತಿ ಮತ್ತು ಕಾಲಾತೀತ ಸೌಂದರ್ಯದಿಂದ ಪ್ರೇರಿತ ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ.",

            footerExplore:
                "ಅನ್ವೇಷಿಸಿ",

            footerCreations:
                "ಸೃಷ್ಟಿಗಳು",

            footerContact:
                "ಸಂಪರ್ಕ",

            marbleIdols:
                "ಮಾರ್ಬಲ್ ವಿಗ್ರಹಗಳು",

            marbleTemplesFooter:
                "ಮಾರ್ಬಲ್ ದೇವಾಲಯಗಳು",

            marbleSculptures:
                "ಮಾರ್ಬಲ್ ಶಿಲ್ಪಗಳು",

            customCreations:
                "ಕಸ್ಟಮ್ ಸೃಷ್ಟಿಗಳು",

            startInquiry:
                "ವಿಚಾರಣೆ ಪ್ರಾರಂಭಿಸಿ",

            allRightsReserved:
                "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

            footerTagline:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ • ರಾಜಸ್ಥಾನ, ಭಾರತ",

            whatsapp:
                "ವಾಟ್ಸಾಪ್",

            instagram:
                "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್",

            facebook:
                "ಫೇಸ್‌ಬುಕ್"

        },


        /* =====================================
           MALAYALAM
        ===================================== */

        ml: {

            brandName:
                "ജ്യോത്ഷി മാർബിൾ ക്രിയേഷൻസ്",

            home: "ഹോം",
            story: "ഞങ്ങളുടെ കഥ",
            products: "ഉൽപ്പന്നങ്ങൾ",
            gallery: "ഗാലറി",
            contact: "ബന്ധപ്പെടുക",

            inquiry:
                "അന്വേഷിക്കുക",

            handcraftedLabel:
                "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല",

            handcraftedMarble:
                "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ",

            artLasts:
                "എന്നും നിലനിൽക്കുന്ന കല.",

            heroDescription:
                "ഭക്തിയോടും പരമ്പരാഗത കലാപരമായ കഴിവുകളോടും മികച്ച കരകൗശലത്തോടും കൂടി നിർമ്മിച്ച മാർബിൾ പ്രതിമകൾ, ക്ഷേത്രങ്ങൾ, ശിൽപ്പങ്ങൾ എന്നിവയുടെ സൗന്ദര്യം കണ്ടെത്തുക.",

            parcelDelivery:
                "പാഴ്സൽ ഡെലിവറി ലഭ്യമാണ്",

            orderFromHome:
                "— നിങ്ങളുടെ വീട്ടിൽ നിന്ന് തന്നെ ഇഷ്ടപ്പെട്ട മാർബിൾ കലാസൃഷ്ടി ഓർഡർ ചെയ്യൂ.",

            exploreProducts:
                "ഉൽപ്പന്നങ്ങൾ കാണുക",

            viewGallery:
                "ഗാലറി കാണുക",

            yearsCraft:
                "കരകൗശല വർഷങ്ങൾ",

            creations:
                "മാർബിൾ സൃഷ്ടികൾ",

            handcrafted:
                "കൈകൊണ്ട് നിർമ്മിച്ചത്",

            scrollDiscover:
                "കണ്ടെത്താൻ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക",

            artBehind:
                "കല്ലിന് പിന്നിലെ കല",

            craftedWith:
                "ഭക്തിയോടെ",

            devotion:
                "നിർമ്മിച്ചത്.",

            storyParagraph1:
                "മാർബിൾ കരകൗശലത്തെ കാലാതീതമായ കലയാക്കി മാറ്റാനുള്ള പ്രത്യേക കഴിവുണ്ട്. ജ്യോത്ഷി മാർബിൾ ക്രിയേഷൻസിൽ ഓരോ സൃഷ്ടിയും തിരഞ്ഞെടുത്ത കല്ലിൽ ആരംഭിച്ച് വിദഗ്ധരായ കരകൗശല വിദഗ്ധരുടെ കൈകളാൽ പൂർത്തിയാക്കുന്നു.",

            storyParagraph2:
                "ദൈവിക പ്രതിമകൾ മുതൽ പരമ്പരാഗത മാർബിൾ ക്ഷേത്രങ്ങൾ വരെ ഓരോ സൃഷ്ടിയും ഇന്ത്യൻ പൈതൃകത്തിന്റെ സൗന്ദര്യം പ്രതിഫലിപ്പിക്കുന്നു.",

            exploreMarbleProducts:
                "മാർബിൾ ഉൽപ്പന്നങ്ങൾ കാണുക",

            ourCollection:
                "ഞങ്ങളുടെ ശേഖരം",

            marble:
                "മാർബിൾ",

            masterpieces:
                "മികച്ച സൃഷ്ടികൾ",

            collectionDescription:
                "പാരമ്പര്യം, ആത്മീയത, കാലാതീതമായ ഇന്ത്യൻ കല എന്നിവയിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ സൃഷ്ടികൾ കണ്ടെത്തുക.",

            divineCollection:
                "ദൈവിക ശേഖരം",

            ganeshJi:
                "ഗണേഷ് ജി",

            radhaKrishna:
                "രാധാ കൃഷ്ണ",

            durgaJi:
                "ദുർഗാ ജി",

            nandiJi:
                "നന്ദി ജി",

            viewAllProducts:
                "എല്ലാ മാർബിൾ ഉൽപ്പന്നങ്ങളും കാണുക",

            marbleTemples:
                "മാർബിൾ ക്ഷേത്രങ്ങൾ",

            sacredSpace:
                "ഒരു പുണ്യസ്ഥലം,",

            carvedIn:
                "മാർബിളിൽ",

            marbleWord:
                "കൊത്തിയെടുത്തത്.",

            templeDescription:
                "സൂക്ഷ്മമായ കൊത്തുപണികൾ, മനോഹരമായ തൂണുകൾ, കാലാതീതമായ വാസ്തുവിദ്യാ സൗന്ദര്യം എന്നിവയോടെ നിർമ്മിച്ച പരമ്പരാഗത മാർബിൾ ക്ഷേത്രങ്ങൾ.",

            enquireTemple:
                "കസ്റ്റം ക്ഷേത്രത്തിനായി അന്വേഷിക്കുക",

            whyChooseUs:
                "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം",

            difference:
                "വ്യത്യാസം",

            detail:
                "വിശദാംശങ്ങളിലാണ്.",

            featureHandcrafted:
                "കൈകൊണ്ട് നിർമ്മിച്ചത്",

            featureHandcraftedText:
                "ഓരോ ശിൽപ്പവും വിദഗ്ധരായ കരകൗശല വിദഗ്ധർ രൂപകൽപ്പന ചെയ്യുകയും കൊത്തിയെടുക്കുകയും പൂർത്തിയാക്കുകയും ചെയ്യുന്നു.",

            featureMarble:
                "തിരഞ്ഞെടുത്ത മാർബിൾ",

            featureMarbleText:
                "സൗന്ദര്യം, ശക്തി, ദീർഘകാല നിലനിൽപ്പ് എന്നിവയ്ക്കായി ഞങ്ങൾ ശ്രദ്ധാപൂർവ്വം തിരഞ്ഞെടുത്ത മാർബിൾ ഉപയോഗിക്കുന്നു.",

            featureTraditional:
                "പരമ്പരാഗത കല",

            featureTraditionalText:
                "ഞങ്ങളുടെ ഡിസൈനുകൾ പരമ്പരാഗത ഇന്ത്യൻ മാർബിൾ കലയുടെ സൗന്ദര്യം സംരക്ഷിക്കുന്നു.",

            featureCustom:
                "കസ്റ്റം സൃഷ്ടികൾ",

            featureCustomText:
                "നിങ്ങളുടെ ഇഷ്ടാനുസരണം പ്രത്യേക പ്രതിമകൾ, ക്ഷേത്രങ്ങൾ, ശിൽപ്പങ്ങൾ എന്നിവ നിർമ്മിക്കുന്നു.",

            ourGallery:
                "ഞങ്ങളുടെ ഗാലറി",

            beautyCarved:
                "കല്ലിൽ കൊത്തിയ",

            inStone:
                "സൗന്ദര്യം.",

            galleryDescription:
                "മാർബിൾ ശിൽപ്പങ്ങളുടെയും കൈകൊണ്ട് നിർമ്മിച്ച കലാസൃഷ്ടികളുടെയും ഞങ്ങളുടെ ലോകത്തിന്റെ ഒരു കാഴ്ച.",

            customMarbleCreations:
                "കസ്റ്റം മാർബിൾ സൃഷ്ടികൾ",

            yourVision:
                "നിങ്ങളുടെ ആശയം.",

            our:
                "ഞങ്ങളുടെ",

            craftsmanship:
                "കരകൗശലം.",

            orderFromHomeTitle:
                "വീട്ടിൽ നിന്ന് ഓർഡർ ചെയ്യൂ",

            orderFromHomeText:
                "— നിങ്ങൾക്ക് എവിടെ നിന്നുമെങ്കിലും ഓർഡർ ചെയ്യാം.",

            parcelDeliveryText:
                "— നിങ്ങളുടെ മാർബിൾ കലാസൃഷ്ടി പാഴ്സൽ വഴി അയക്കാം.",

            location:
                "താനാഗാജി, അൽവാർ, രാജസ്ഥാൻ",

            callUs:
                "വിളിക്കുക",

            whatsappUs:
                "വാട്ട്സ്ആപ്പ് ചെയ്യുക",

            proudlyCrafting:
                "ഞങ്ങൾ അഭിമാനത്തോടെ മാർബിൾ കല നിർമ്മിക്കുന്നു",

            craftedToday:
                "ഇന്ന് നിർമ്മിച്ചത്.",

            cherishedFor:
                "തലമുറകളോളം",

            generations:
                "സൂക്ഷിക്കപ്പെടും.",

            finalDescription:
                "ഞങ്ങളുടെ മാർബിൾ ഉൽപ്പന്നങ്ങൾ കാണുകയും കൈകൊണ്ട് നിർമ്മിച്ച കലയുടെ കാലാതീതമായ സൗന്ദര്യം കണ്ടെത്തുകയും ചെയ്യൂ.",

            footerDescription:
                "പാരമ്പര്യം, ഭക്തി, കാലാതീതമായ സൗന്ദര്യം എന്നിവയിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല.",

            footerExplore:
                "പര്യവേക്ഷണം",

            footerCreations:
                "സൃഷ്ടികൾ",

            footerContact:
                "ബന്ധപ്പെടുക",

            marbleIdols:
                "മാർബിൾ പ്രതിമകൾ",

            marbleTemplesFooter:
                "മാർബിൾ ക്ഷേത്രങ്ങൾ",

            marbleSculptures:
                "മാർബിൾ ശിൽപ്പങ്ങൾ",

            customCreations:
                "കസ്റ്റം സൃഷ്ടികൾ",

            startInquiry:
                "അന്വേഷണം ആരംഭിക്കുക",

            allRightsReserved:
                "എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",

            footerTagline:
                "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല • രാജസ്ഥാൻ, ഇന്ത്യ",

            whatsapp:
                "വാട്ട്സ്ആപ്പ്",

            instagram:
                "ഇൻസ്റ്റാഗ്രാം",

            facebook:
                "ഫേസ്ബുക്ക്"

        },


        /* =====================================
           ODIA
        ===================================== */

        or: {

            brandName:
                "ଜ୍ୟୋତ୍ଶି ମାର୍ବଲ କ୍ରିଏସନ୍ସ",

            home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
            story: "ଆମ କାହାଣୀ",
            products: "ଉତ୍ପାଦ",
            gallery: "ଗ୍ୟାଲେରୀ",
            contact: "ଯୋଗାଯୋଗ",

            inquiry:
                "ପଚାରନ୍ତୁ",

            handcraftedLabel:
                "ହାତରେ ତିଆରି ମାର୍ବଲ କଳା",

            handcraftedMarble:
                "ହାତରେ ତିଆରି ମାର୍ବଲ",

            artLasts:
                "ଚିରକାଳ ରହିବା କଳା।",

            heroDescription:
                "ଭକ୍ତି, ପାରମ୍ପରିକ କଳା ଏବଂ ଉତ୍କୃଷ୍ଟ କାରିଗରୀ ସହିତ ତିଆରି ମାର୍ବଲ ମୂର୍ତ୍ତି, ମନ୍ଦିର ଏବଂ ଶିଳ୍ପର ସୌନ୍ଦର୍ଯ୍ୟ ଆବିଷ୍କାର କରନ୍ତୁ।",

            parcelDelivery:
                "ପାର୍ସେଲ ଡେଲିଭରି ଉପଲବ୍ଧ",

            orderFromHome:
                "— ଘରେ ବସି ଆପଣଙ୍କ ପସନ୍ଦର ମାର୍ବଲ କଳାକୃତି ଅର୍ଡର କରନ୍ତୁ।",

            exploreProducts:
                "ଉତ୍ପାଦ ଦେଖନ୍ତୁ",

            viewGallery:
                "ଗ୍ୟାଲେରୀ ଦେଖନ୍ତୁ",

            yearsCraft:
                "କାରିଗରୀର ବର୍ଷ",

            creations:
                "ମାର୍ବଲ ସୃଷ୍ଟି",

            handcrafted:
                "ହାତରେ ତିଆରି",

            scrollDiscover:
                "ଆବିଷ୍କାର ପାଇଁ ତଳକୁ ସ୍କ୍ରୋଲ କରନ୍ତୁ",

            artBehind:
                "ପଥର ପଛରେ ଥିବା କଳା",

            craftedWith:
                "ଭକ୍ତି ସହିତ",

            devotion:
                "ତିଆରି।",

            storyParagraph1:
                "ମାର୍ବଲ କାରିଗରୀକୁ ଚିରନ୍ତନ କଳାରେ ପରିଣତ କରିବାର ଏକ ଅନନ୍ୟ କ୍ଷମତା ରଖେ। ଜ୍ୟୋତ୍ଶି ମାର୍ବଲ କ୍ରିଏସନ୍ସରେ ପ୍ରତ୍ୟେକ କଳାକୃତି ଚୟନିତ ପଥରରୁ ଆରମ୍ଭ ହୋଇ ଦକ୍ଷ କାରିଗରଙ୍କ ହାତରେ ସମ୍ପୂର୍ଣ୍ଣ ହୁଏ।",

            storyParagraph2:
                "ଦିବ୍ୟ ମୂର୍ତ୍ତିଠାରୁ ପାରମ୍ପରିକ ମାର୍ବଲ ମନ୍ଦିର ପର୍ଯ୍ୟନ୍ତ ପ୍ରତ୍ୟେକ ସୃଷ୍ଟି ଭାରତୀୟ ପରମ୍ପରାର ସୌନ୍ଦର୍ଯ୍ୟକୁ ପ୍ରତିଫଳିତ କରେ।",

            exploreMarbleProducts:
                "ମାର୍ବଲ ଉତ୍ପାଦ ଦେଖନ୍ତୁ",

            ourCollection:
                "ଆମ ସଂଗ୍ରହ",

            marble:
                "ମାର୍ବଲ",

            masterpieces:
                "ଉତ୍କୃଷ୍ଟ ସୃଷ୍ଟି",

            collectionDescription:
                "ପରମ୍ପରା, ଆଧ୍ୟାତ୍ମିକତା ଏବଂ ଚିରନ୍ତନ ଭାରତୀୟ କଳାରୁ ପ୍ରେରିତ ହାତରେ ତିଆରି ମାର୍ବଲ ସୃଷ୍ଟି ଆବିଷ୍କାର କରନ୍ତୁ।",

            divineCollection:
                "ଦିବ୍ୟ ସଂଗ୍ରହ",

            ganeshJi:
                "ଗଣେଶ ଜୀ",

            radhaKrishna:
                "ରାଧା କୃଷ୍ଣ",

            durgaJi:
                "ଦୁର୍ଗା ଜୀ",

            nandiJi:
                "ନନ୍ଦୀ ଜୀ",

            viewAllProducts:
                "ସମସ୍ତ ମାର୍ବଲ ଉତ୍ପାଦ ଦେଖନ୍ତୁ",

            marbleTemples:
                "ମାର୍ବଲ ମନ୍ଦିର",

            sacredSpace:
                "ଏକ ପବିତ୍ର ସ୍ଥାନ,",

            carvedIn:
                "ମାର୍ବଲରେ",

            marbleWord:
                "ଖୋଦିତ।",

            templeDescription:
                "ସୂକ୍ଷ୍ମ ନକ୍ଷୀ, ସୁନ୍ଦର ସ୍ତମ୍ଭ ଏବଂ ଚିରନ୍ତନ ସ୍ଥାପତ୍ୟ ସୌନ୍ଦର୍ଯ୍ୟ ସହିତ ତିଆରି ପାରମ୍ପରିକ ମାର୍ବଲ ମନ୍ଦିର।",

            enquireTemple:
                "କଷ୍ଟମ ମନ୍ଦିର ପାଇଁ ପଚାରନ୍ତୁ",

            whyChooseUs:
                "ଆମକୁ କାହିଁକି ବାଛିବେ",

            difference:
                "ପାର୍ଥକ୍ୟ",

            detail:
                "ବିବରଣୀରେ ରହିଛି।",

            featureHandcrafted:
                "ହାତରେ ତିଆରି",

            featureHandcraftedText:
                "ପ୍ରତ୍ୟେକ ଶିଳ୍ପକୁ ଦକ୍ଷ କାରିଗରମାନେ ଆକାର ଦେଇ, ଖୋଦାଇ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତି।",

            featureMarble:
                "ଚୟନିତ ମାର୍ବଲ",

            featureMarbleText:
                "ସୌନ୍ଦର୍ଯ୍ୟ, ଶକ୍ତି ଏବଂ ଦୀର୍ଘସ୍ଥାୟୀ ଗୁଣ ପାଇଁ ଆମେ ଚୟନିତ ମାର୍ବଲ ବ୍ୟବହାର କରୁ।",

            featureTraditional:
                "ପାରମ୍ପରିକ କଳା",

            featureTraditionalText:
                "ଆମ ଡିଜାଇନଗୁଡ଼ିକ ପାରମ୍ପରିକ ଭାରତୀୟ ମାର୍ବଲ କଳାର ସୌନ୍ଦର୍ଯ୍ୟକୁ ସୁରକ୍ଷିତ ରଖେ।",

            featureCustom:
                "କଷ୍ଟମ ସୃଷ୍ଟି",

            featureCustomText:
                "ଆପଣଙ୍କ ପସନ୍ଦ ଅନୁସାରେ ବିଶେଷ ମୂର୍ତ୍ତି, ମନ୍ଦିର ଏବଂ ଶିଳ୍ପ ତିଆରି କରାଯାଏ।",

            ourGallery:
                "ଆମ ଗ୍ୟାଲେରୀ",

            beautyCarved:
                "ପଥରରେ ଖୋଦିତ",

            inStone:
                "ସୌନ୍ଦର୍ଯ୍ୟ।",

            galleryDescription:
                "ମାର୍ବଲ ଶିଳ୍ପ ଏବଂ ହାତରେ ତିଆରି କଳାକୃତିର ଆମ ଦୁନିଆର ଏକ ଝଲକ।",

            customMarbleCreations:
                "କଷ୍ଟମ ମାର୍ବଲ ସୃଷ୍ଟି",

            yourVision:
                "ଆପଣଙ୍କ କଳ୍ପନା।",

            our:
                "ଆମ",

            craftsmanship:
                "କାରିଗରୀ।",

            orderFromHomeTitle:
                "ଘରୁ ଅର୍ଡର କରନ୍ତୁ",

            orderFromHomeText:
                "— ଆପଣ ଯେକୌଣସି ସ୍ଥାନରୁ ଅର୍ଡର କରିପାରିବେ।",

            parcelDeliveryText:
                "— ଆମେ ଆପଣଙ୍କ ମାର୍ବଲ କଳାକୃତି ପାର୍ସେଲ ମାଧ୍ୟମରେ ପଠାଇପାରିବୁ।",

            location:
                "ଥାନାଗାଜୀ, ଅଲୱର, ରାଜସ୍ଥାନ",

            callUs:
                "କଲ କରନ୍ତୁ",

            whatsappUs:
                "ହ୍ୱାଟସ୍ଆପ୍ କରନ୍ତୁ",

            proudlyCrafting:
                "ଆମେ ଗର୍ବର ସହିତ ମାର୍ବଲ କଳା ତିଆରି କରୁଛୁ",

            craftedToday:
                "ଆଜି ତିଆରି।",

            cherishedFor:
                "ପିଢ଼ି ପିଢ଼ି",

            generations:
                "ପାଇଁ ସଂରକ୍ଷିତ।",

            finalDescription:
                "ଆମ ମାର୍ବଲ ଉତ୍ପାଦ ଦେଖନ୍ତୁ ଏବଂ ହାତରେ ତିଆରି କଳାର ଚିରନ୍ତନ ସୌନ୍ଦର୍ଯ୍ୟ ଆବିଷ୍କାର କରନ୍ତୁ।",

            footerDescription:
                "ପରମ୍ପରା, ଭକ୍ତି ଏବଂ ଚିରନ୍ତନ ସୌନ୍ଦର୍ଯ୍ୟରୁ ପ୍ରେରିତ ହାତରେ ତିଆରି ମାର୍ବଲ କଳା।",

            footerExplore:
                "ଅନ୍ୱେଷଣ",

            footerCreations:
                "ସୃଷ୍ଟି",

            footerContact:
                "ଯୋଗାଯୋଗ",

            marbleIdols:
                "ମାର୍ବଲ ମୂର୍ତ୍ତି",

            marbleTemplesFooter:
                "ମାର୍ବଲ ମନ୍ଦିର",

            marbleSculptures:
                "ମାର୍ବଲ ଶିଳ୍ପ",

            customCreations:
                "କଷ୍ଟମ ସୃଷ୍ଟି",

            startInquiry:
                "ପଚାରା ଆରମ୍ଭ କରନ୍ତୁ",

            allRightsReserved:
                "ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",

            footerTagline:
                "ହାତରେ ତିଆରି ମାର୍ବଲ କଳା • ରାଜସ୍ଥାନ, ଭାରତ",

            whatsapp:
                "ହ୍ୱାଟସ୍ଆପ୍",

            instagram:
                "ଇନଷ୍ଟାଗ୍ରାମ",

            facebook:
                "ଫେସବୁକ"

        },


        /* =====================================
           ASSAMESE
        ===================================== */

        as: {

            brandName:
                "জ্যোত্শি মাৰ্বল ক্ৰিয়েচনছ",

            home: "মুখ্য পৃষ্ঠা",
            story: "আমাৰ কাহিনী",
            products: "সামগ্ৰী",
            gallery: "গেলাৰী",
            contact: "যোগাযোগ",

            inquiry:
                "সোধক",

            handcraftedLabel:
                "হাতেৰে নিৰ্মিত মাৰ্বল শিল্প",

            handcraftedMarble:
                "হাতেৰে নিৰ্মিত মাৰ্বল",

            artLasts:
                "চিৰদিন টিকি থকা শিল্প।",

            heroDescription:
                "ভক্তি, পৰম্পৰাগত শিল্প আৰু উৎকৃষ্ট কাৰিকৰীৰে নিৰ্মিত মাৰ্বলৰ মূৰ্তি, মন্দিৰ আৰু ভাস্কৰ্যৰ সৌন্দৰ্য আৱিষ্কাৰ কৰক।",

            parcelDelivery:
                "পাৰ্চেল ডেলিভাৰী উপলব্ধ",

            orderFromHome:
                "— ঘৰৰ পৰাই আপোনাৰ পছন্দৰ মাৰ্বল শিল্পকৰ্ম অৰ্ডাৰ কৰক।",

            exploreProducts:
                "সামগ্ৰী চাওক",

            viewGallery:
                "গেলাৰী চাওক",

            yearsCraft:
                "কাৰিকৰীৰ বছৰ",

            creations:
                "মাৰ্বল সৃষ্টি",

            handcrafted:
                "হাতেৰে নিৰ্মিত",

            scrollDiscover:
                "আৱিষ্কাৰ কৰিবলৈ তললৈ স্ক্ৰল কৰক",

            artBehind:
                "শিলৰ আঁৰৰ শিল্প",

            craftedWith:
                "ভক্তিৰে",

            devotion:
                "নিৰ্মাণ কৰা।",

            storyParagraph1:
                "মাৰ্বলে কাৰিকৰীক চিৰন্তন শিল্পলৈ ৰূপান্তৰ কৰাৰ এক অনন্য ক্ষমতা ৰাখে। জ্যোত্শি মাৰ্বল ক্ৰিয়েচনছত প্ৰতিটো শিল্পকৰ্ম নিৰ্বাচিত শিলৰ পৰা আৰম্ভ হৈ দক্ষ কাৰিকৰসকলৰ হাতেৰে সম্পূৰ্ণ হয়।",

            storyParagraph2:
                "দেৱ-দেৱীৰ মূৰ্তিৰ পৰা পৰম্পৰাগত মাৰ্বল মন্দিৰলৈকে প্ৰতিটো সৃষ্টি ভাৰতীয় ঐতিহ্যৰ সৌন্দৰ্য প্ৰতিফলিত কৰে।",

            exploreMarbleProducts:
                "মাৰ্বল সামগ্ৰী চাওক",

            ourCollection:
                "আমাৰ সংগ্ৰহ",

            marble:
                "মাৰ্বল",

            masterpieces:
                "শ্ৰেষ্ঠ সৃষ্টি",

            collectionDescription:
                "পৰম্পৰা, আধ্যাত্মিকতা আৰু চিৰন্তন ভাৰতীয় শিল্পৰ পৰা অনুপ্ৰাণিত হাতেৰে নিৰ্মিত মাৰ্বল সৃষ্টি আৱিষ্কাৰ কৰক।",

            divineCollection:
                "দিব্য সংগ্ৰহ",

            ganeshJi:
                "গণেশ জী",

            radhaKrishna:
                "ৰাধা কৃষ্ণ",

            durgaJi:
                "দুৰ্গা জী",

            nandiJi:
                "নন্দী জী",

            viewAllProducts:
                "সকলো মাৰ্বল সামগ্ৰী চাওক",

            marbleTemples:
                "মাৰ্বল মন্দিৰ",

            sacredSpace:
                "এটা পৱিত্ৰ স্থান,",

            carvedIn:
                "মাৰ্বলত",

            marbleWord:
                "খোদিত।",

            templeDescription:
                "সূক্ষ্ম নক্সা, সুন্দৰ স্তম্ভ আৰু চিৰন্তন স্থাপত্য সৌন্দৰ্যৰে নিৰ্মিত পৰম্পৰাগত মাৰ্বল মন্দিৰ।",

            enquireTemple:
                "কাষ্টম মন্দিৰৰ বাবে সোধক",

            whyChooseUs:
                "আমাক কিয় বাছিব",

            difference:
                "পাৰ্থক্য",

            detail:
                "বিৱৰণত আছে।",

            featureHandcrafted:
                "হাতেৰে নিৰ্মিত",

            featureHandcraftedText:
                "প্ৰতিটো ভাস্কৰ্য দক্ষ কাৰিকৰসকলে আকৃতি দি, খোদাই কৰি আৰু সম্পূৰ্ণ কৰে।",

            featureMarble:
                "নিৰ্বাচিত মাৰ্বল",

            featureMarbleText:
                "সৌন্দৰ্য, শক্তি আৰু দীৰ্ঘস্থায়িত্বৰ বাবে আমি যত্নেৰে নিৰ্বাচিত মাৰ্বল ব্যৱহাৰ কৰোঁ।",

            featureTraditional:
                "পৰম্পৰাগত শিল্প",

            featureTraditionalText:
                "আমাৰ ডিজাইনসমূহে পৰম্পৰাগত ভাৰতীয় মাৰ্বল শিল্পৰ সৌন্দৰ্য সংৰক্ষণ কৰে।",

            featureCustom:
                "কাষ্টম সৃষ্টি",

            featureCustomText:
                "আপোনাৰ পছন্দ অনুসৰি বিশেষ মূৰ্তি, মন্দিৰ আৰু ভাস্কৰ্য তৈয়াৰ কৰা হয়।",

            ourGallery:
                "আমাৰ গেলাৰী",

            beautyCarved:
                "শিলত খোদিত",

            inStone:
                "সৌন্দৰ্য।",

            galleryDescription:
                "মাৰ্বল ভাস্কৰ্য আৰু হাতেৰে নিৰ্মিত শিল্পকৰ্মৰ আমাৰ জগতৰ এক ঝলক।",

            customMarbleCreations:
                "কাষ্টম মাৰ্বল সৃষ্টি",

            yourVision:
                "আপোনাৰ কল্পনা।",

            our:
                "আমাৰ",

            craftsmanship:
                "কাৰিকৰী।",

            orderFromHomeTitle:
                "ঘৰৰ পৰা অৰ্ডাৰ কৰক",

            orderFromHomeText:
                "— আপুনি যিকোনো ঠাইৰ পৰা অৰ্ডাৰ কৰিব পাৰে।",

            parcelDeliveryText:
                "— আমি আপোনাৰ মাৰ্বল শিল্পকৰ্ম পাৰ্চেলৰ জৰিয়তে পঠিয়াব পাৰোঁ।",

            location:
                "থানাগাজী, আলৱাৰ, ৰাজস্থান",

            callUs:
                "কল কৰক",

            whatsappUs:
                "হোৱাটছএপ কৰক",

            proudlyCrafting:
                "আমি গৌৰৱেৰে মাৰ্বল শিল্প নিৰ্মাণ কৰোঁ",

            craftedToday:
                "আজি নিৰ্মিত।",

            cherishedFor:
                "প্ৰজন্মৰ পিছত প্ৰজন্ম",

            generations:
                "সংৰক্ষিত হৈ থাকিব।",

            finalDescription:
                "আমাৰ মাৰ্বল সামগ্ৰী চাওক আৰু হাতেৰে নিৰ্মিত শিল্পৰ চিৰন্তন সৌন্দৰ্য আৱিষ্কাৰ কৰক।",

            footerDescription:
                "পৰম্পৰা, ভক্তি আৰু চিৰন্তন সৌন্দৰ্যৰ পৰা অনুপ্ৰাণিত হাতেৰে নিৰ্মিত মাৰ্বল শিল্প।",

            footerExplore:
                "অন্বেষণ",

            footerCreations:
                "সৃষ্টি",

            footerContact:
                "যোগাযোগ",

            marbleIdols:
                "মাৰ্বল মূৰ্তি",

            marbleTemplesFooter:
                "মাৰ্বল মন্দিৰ",

            marbleSculptures:
                "মাৰ্বল ভাস্কৰ্য",

            customCreations:
                "কাষ্টম সৃষ্টি",

            startInquiry:
                "সোধা আৰম্ভ কৰক",

            allRightsReserved:
                "সকলো অধিকাৰ সংৰক্ষিত।",

            footerTagline:
                "হাতেৰে নিৰ্মিত মাৰ্বল শিল্প • ৰাজস্থান, ভাৰত",

            whatsapp:
                "হোৱাটছএপ",

            instagram:
                "ইনষ্টাগ্ৰাম",

            facebook:
                "ফেচবুক"

        },


        /* =====================================
           URDU
        ===================================== */

        ur: {

            brandName:
                "جیوتشی ماربل کریئیشنز",

            home: "ہوم",
            story: "ہماری کہانی",
            products: "مصنوعات",
            gallery: "گیلری",
            contact: "رابطہ",

            inquiry:
                "استفسار کریں",

            handcraftedLabel:
                "ہاتھ سے تیار کردہ سنگ مرمر کا فن",

            handcraftedMarble:
                "ہاتھ سے تیار کردہ سنگ مرمر",

            artLasts:
                "ایسا فن جو ہمیشہ قائم رہے۔",

            heroDescription:
                "عقیدت، روایتی فن اور بہترین کاریگری سے تیار کردہ سنگ مرمر کی مورتیاں، مندر اور مجسموں کی خوبصورتی دریافت کریں۔",

            parcelDelivery:
                "پارسل ڈیلیوری دستیاب ہے",

            orderFromHome:
                "— اپنے گھر سے اپنی پسندیدہ سنگ مرمر کی فن پارہ آرڈر کریں۔",

            exploreProducts:
                "مصنوعات دیکھیں",

            viewGallery:
                "گیلری دیکھیں",

            yearsCraft:
                "کاریگری کے سال",

            creations:
                "سنگ مرمر کی تخلیقات",

            handcrafted:
                "ہاتھ سے تیار کردہ",

            scrollDiscover:
                "دریافت کرنے کے لیے نیچے اسکرول کریں",

            artBehind:
                "پتھر کے پیچھے کا فن",

            craftedWith:
                "عقیدت کے ساتھ",

            devotion:
                "تیار کیا گیا۔",

            storyParagraph1:
                "سنگ مرمر میں کاریگری کو لازوال فن میں تبدیل کرنے کی ایک منفرد صلاحیت ہے۔ جیوتشی ماربل کریئیشنز میں ہر فن پارہ منتخب پتھر سے شروع ہوتا ہے اور ماہر کاریگروں کے ہاتھوں مکمل ہوتا ہے۔",

            storyParagraph2:
                "مقدس مورتیوں سے لے کر روایتی سنگ مرمر کے مندروں تک، ہر تخلیق ہندوستانی ورثے کی خوبصورتی کو ظاہر کرتی ہے۔",

            exploreMarbleProducts:
                "سنگ مرمر کی مصنوعات دیکھیں",

            ourCollection:
                "ہمارا مجموعہ",

            marble:
                "سنگ مرمر",

            masterpieces:
                "شاندار تخلیقات",

            collectionDescription:
                "روایت، روحانیت اور لازوال ہندوستانی فن سے متاثر ہاتھ سے تیار کردہ سنگ مرمر کی تخلیقات دریافت کریں۔",

            divineCollection:
                "مقدس مجموعہ",

            ganeshJi:
                "گنیش جی",

            radhaKrishna:
                "رادھا کرشن",

            durgaJi:
                "درگا جی",

            nandiJi:
                "نندی جی",

            viewAllProducts:
                "تمام سنگ مرمر کی مصنوعات دیکھیں",

            marbleTemples:
                "سنگ مرمر کے مندر",

            sacredSpace:
                "ایک مقدس جگہ،",

            carvedIn:
                "سنگ مرمر میں",

            marbleWord:
                "تراشی گئی۔",

            templeDescription:
                "باریک نقش و نگار، خوبصورت ستونوں اور لازوال تعمیراتی حسن کے ساتھ تیار کردہ روایتی سنگ مرمر کے مندر۔",

            enquireTemple:
                "کسٹم مندر کے لیے استفسار کریں",

            whyChooseUs:
                "ہمیں کیوں منتخب کریں",

            difference:
                "فرق",

            detail:
                "تفصیل میں ہے۔",

            featureHandcrafted:
                "ہاتھ سے تیار کردہ",

            featureHandcraftedText:
                "ہر مجسمہ ماہر کاریگروں کے ہاتھوں شکل دیا، تراشا اور مکمل کیا جاتا ہے۔",

            featureMarble:
                "منتخب سنگ مرمر",

            featureMarbleText:
                "خوبصورتی، مضبوطی اور دیرپا معیار کے لیے ہم احتیاط سے منتخب کیا گیا سنگ مرمر استعمال کرتے ہیں۔",

            featureTraditional:
                "روایتی فن",

            featureTraditionalText:
                "ہمارے ڈیزائن روایتی ہندوستانی سنگ مرمر کے فن کی خوبصورتی کو محفوظ رکھتے ہیں۔",

            featureCustom:
                "کسٹم تخلیقات",

            featureCustomText:
                "آپ کی پسند کے مطابق خصوصی مورتیاں، مندر اور مجسمے تیار کیے جاتے ہیں۔",

            ourGallery:
                "ہماری گیلری",

            beautyCarved:
                "پتھر میں تراشی گئی",

            inStone:
                "خوبصورتی۔",

            galleryDescription:
                "سنگ مرمر کے مجسموں اور ہاتھ سے تیار کردہ فن پاروں کی ہماری دنیا کی ایک جھلک۔",

            customMarbleCreations:
                "کسٹم سنگ مرمر کی تخلیقات",

            yourVision:
                "آپ کا تصور۔",

            our:
                "ہماری",

            craftsmanship:
                "کاریگری۔",

            orderFromHomeTitle:
                "گھر سے آرڈر کریں",

            orderFromHomeText:
                "— آپ کہیں سے بھی آرڈر دے سکتے ہیں۔",

            parcelDeliveryText:
                "— ہم آپ کی سنگ مرمر کی فن پارہ پارسل کے ذریعے بھیج سکتے ہیں۔",

            location:
                "تھانگازی، الور، راجستھان",

            callUs:
                "کال کریں",

            whatsappUs:
                "واٹس ایپ کریں",

            proudlyCrafting:
                "ہم فخر کے ساتھ سنگ مرمر کا فن تیار کرتے ہیں",

            craftedToday:
                "آج تیار کیا گیا۔",

            cherishedFor:
                "نسلوں تک",

            generations:
                "محفوظ رہے۔",

            finalDescription:
                "ہماری سنگ مرمر کی مصنوعات دیکھیں اور ہاتھ سے تیار کردہ فن کی لازوال خوبصورتی دریافت کریں۔",

            footerDescription:
                "روایت، عقیدت اور لازوال خوبصورتی سے متاثر ہاتھ سے تیار کردہ سنگ مرمر کا فن۔",

            footerExplore:
                "دریافت",

            footerCreations:
                "تخلیقات",

            footerContact:
                "رابطہ",

            marbleIdols:
                "سنگ مرمر کی مورتیاں",

            marbleTemplesFooter:
                "سنگ مرمر کے مندر",

            marbleSculptures:
                "سنگ مرمر کے مجسمے",

            customCreations:
                "کسٹم تخلیقات",

            startInquiry:
                "استفسار شروع کریں",

            allRightsReserved:
                "جملہ حقوق محفوظ ہیں۔",

            footerTagline:
                "ہاتھ سے تیار کردہ سنگ مرمر کا فن • راجستھان، ہندوستان",

            whatsapp:
                "واٹس ایپ",

            instagram:
                "انسٹاگرام",

            facebook:
                "فیس بک"

        }

    };


    /* =========================================
       LANGUAGE NAMES
    ========================================= */

    const languageNames = {

        en: "English",
        hi: "हिन्दी",
        bn: "বাংলা",
        mr: "मराठी",
        gu: "ગુજરાતી",
        pa: "ਪੰਜਾਬੀ",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
        ml: "മലയാളം",
        or: "ଓଡ଼ିଆ",
        as: "অসমীয়া",
        ur: "اردو"

    };


    /* =========================================
       APPLY LANGUAGE
    ========================================= */

    function applyLanguage(lang) {

        const selected =
            translations[lang];

        if (!selected) return;


        /* -----------------------------------------
           TRANSLATE ALL TEXT
        ----------------------------------------- */

        const elements =
            document.querySelectorAll(
                "[data-translate]"
            );


        elements.forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-translate"
                );


            if (
                selected[key] !== undefined
            ) {

                element.textContent =
                    selected[key];

            }

        });


        /* -----------------------------------------
           LANGUAGE BUTTON
        ----------------------------------------- */

        if (languageName) {

            languageName.textContent =
                languageNames[lang];

        }


        /* -----------------------------------------
           HTML LANGUAGE
        ----------------------------------------- */

        document.documentElement.setAttribute(
            "lang",
            lang
        );


        /* -----------------------------------------
           RTL FOR URDU
        ----------------------------------------- */

        if (lang === "ur") {

            document.documentElement.setAttribute(
                "dir",
                "rtl"
            );

        } else {

            document.documentElement.setAttribute(
                "dir",
                "ltr"
            );

        }


        /* -----------------------------------------
           SAVE LANGUAGE
        ----------------------------------------- */

        localStorage.setItem(
            "jmc-language",
            lang
        );

    }


    /* =========================================
       LANGUAGE BUTTON ACTION
    ========================================= */

    languageOptions.forEach(function (option) {

        option.addEventListener(
            "click",
            function () {

                const lang =
                    option.getAttribute(
                        "data-lang"
                    );

                applyLanguage(lang);

            }
        );

    });


    /* =========================================
       LOAD SAVED LANGUAGE
    ========================================= */

    const savedLanguage =
        localStorage.getItem(
            "jmc-language"
        );


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        applyLanguage(savedLanguage);

    } else {

        applyLanguage("en");

    }


});