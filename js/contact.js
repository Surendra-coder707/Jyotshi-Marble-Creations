document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE LOADER
       ========================================= */

    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.classList.add("hide");
            }, 700);
        });
    }


    /* =========================================
       HEADER SCROLL
       ========================================= */

    const header = document.getElementById("header");

    if (header) {
        const handleHeaderScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        handleHeaderScroll();
        window.addEventListener("scroll", handleHeaderScroll);
    }


    /* =========================================
       MOBILE MENU
       ========================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.classList.toggle("active", isOpen);
        });


        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.classList.remove("active");
            });

        });
    }


    /* =========================================
       SCROLL REVEAL
       ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    }


    /* =========================================
       ACTIVE NAVIGATION
       ========================================= */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (sections.length > 0 && navLinks.length > 0) {

        const updateActiveNavigation = () => {

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 180;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    currentSection = section.getAttribute("id");
                }

            });


            navLinks.forEach(link => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (
                    href &&
                    currentSection &&
                    href.includes(`#${currentSection}`)
                ) {
                    link.classList.add("active");
                }

            });

        };


        updateActiveNavigation();

        window.addEventListener(
            "scroll",
            updateActiveNavigation
        );

    }


    /* =========================================
       IMAGE LOADING
       ========================================= */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        if (image.complete) {
            image.classList.add("loaded");
        } else {

            image.addEventListener("load", () => {
                image.classList.add("loaded");
            });

        }

    });


    /* =========================================
       LANGUAGE SYSTEM
       ========================================= */

    const languageSelector =
        document.querySelector(".language-selector");

    const languageButton =
        document.querySelector(".language-btn");

    const languageButtonText =
        languageButton
            ? languageButton.querySelector("[data-current-language]")
            : null;

    const languageOptions =
        document.querySelectorAll(
            ".language-menu button[data-lang]"
        );


    /* =========================================
       TRANSLATIONS
       ========================================= */

    const translations = {

        /* =====================================
           ENGLISH
           ===================================== */

        en: {

            home: "Home",
            story: "Our Story",
            products: "Products",
            gallery: "Gallery",
            contact: "Contact",
            inquiry: "Start an Inquiry",

            handcraftedLabel: "HANDCRAFTED MARBLE ART",
            handcraftedMarble: "Handcrafted Marble",
            artLasts: "Art That Lasts Generations",

            heroDescription:
                "Discover beautifully handcrafted marble idols, statues, temples and traditional marble creations made with devotion and skilled craftsmanship.",

            parcelDelivery: "Parcel Delivery Available",
            orderFromHome: "Order from the comfort of your home.",

            exploreProducts: "Explore Products",
            viewGallery: "View Gallery",

            yearsCraft: "Years of Craft",
            creations: "Creations",
            handcrafted: "Handcrafted",

            scrollDiscover: "Scroll to Discover",

            artBehind: "THE ART BEHIND THE STONE",
            storyTitle: "Crafted with devotion.",

            collectionTitle: "Marble Masterpieces",

            galleryTitle: "Beauty carved in stone.",

            customTitle: "Your vision. Our craftsmanship.",

            customText:
                "Bring your vision to life with handcrafted marble creations designed especially for your home, temple or special space.",

            contactTitle: "Get in Touch",

            orderNote:
                "Order your favourite marble creation from home with convenient inquiry and delivery support.",

            footerExplore: "Explore",
            footerCreations: "Creations",
            footerContact: "Contact",

            whatsapp: "WhatsApp",
            instagram: "Instagram",
            facebook: "Facebook",

            /* Contact */

            inquiryEyebrow: "MARBLE CREATION INQUIRY",

            inquiryTitleFirst: "Tell us",

            inquiryTitleSecond: "what you need.",

            inquiryDescription:
                "Looking for a marble idol, temple, sculpture or a custom creation? Tell us what you need and our team will get in touch with you.",

            callUs: "Call Us",

            whatsappUs: "WhatsApp Us",

            inquiryForm: "INQUIRY FORM",

            startInquiry: "Start an Inquiry",

            name: "Your Name",

            phone: "Mobile Number",

            email: "Email Address",

            requirement: "Requirement",

            selectRequirement: "Select Requirement",

            marbleIdol: "Marble Idol",

            marbleTemple: "Marble Temple",

            marbleSculpture: "Marble Sculpture",

            customCreation: "Custom Creation",

            transport: "Transport",

            other: "Other",

            deliveryLocation: "Delivery Location",

            message: "Your Requirement",

            submitInquiry: "Submit Inquiry",

            successMessage:
                "Thank you! Your inquiry has been received. We will contact you shortly.",

            rightsReserved:
                "All rights reserved.",

            footerTagline:
                "Handcrafted Marble Art • Rajasthan, India",


            /* Transport */

            transportAvailable:
                "TRANSPORT FACILITY AVAILABLE",

            reliableTransport:
                "Reliable Transport for Your Marble Creations",

            transportDescription:
                "Need reliable transportation for marble statues, temples, sculptures or other goods? Our truck and pickup transport facility is available for your transportation needs.",

            bookTruck:
                "Book a Truck",

            transportSupport:
                "Safe & Reliable Transport Support",

            transportationSimple:
                "Transportation made simple.",

            introDescription:
                "We provide truck and pickup transportation support for marble statues, temples, sculptures and other goods.",

            truckFacility:
                "Truck & Pickup Facility",

            truckFacilityText:
                "Truck and pickup vehicles are available according to your transportation requirements.",

            goodsTransportation:
                "Goods Transportation",

            goodsTransportationText:
                "Move marble idols, temples, sculptures and other goods safely to your destination.",

            destinationSupport:
                "Destination Support",

            destinationSupportText:
                "Share your pickup and delivery locations with us and we will discuss the suitable transport option.",

            easyContact:
                "Easy Contact",

            easyContactText:
                "Contact us directly for transport availability, vehicle requirements and booking details.",

            transportEnquiry:
                "TRANSPORT ENQUIRY",

            needTruckPickup:
                "Need a Truck or Pickup?",

            bookingDescription:
                "Tell us about your goods, pickup location and delivery destination. Our team will help you with the transportation arrangement.",

            callTransport:
                "Call for Transport",

            whatsappBooking:
                "WhatsApp Booking",

            simpleProcess:
                "SIMPLE PROCESS",

            howBookingWorks:
                "How Booking Works",

            contactUs:
                "Contact Us",

            contactUsText:
                "Tell us what you need to transport.",

            shareLocations:
                "Share Locations",

            shareLocationsText:
                "Provide pickup and delivery locations.",

            discussVehicle:
                "Discuss Vehicle",

            discussVehicleText:
                "We discuss the suitable truck or pickup.",

            confirmBooking:
                "Confirm Booking",

            confirmBookingText:
                "Confirm the transport details with our team.",

            jmcTransport:
                "JYOTSHI MARBLE CREATIONS",

            goodsTransportSupport:
                "Marble Goods Transport Support",

            finalTransportText:
                "From marble idols to temples and sculptures, we can help you arrange suitable truck and pickup transportation support.",

            truckPickup:
                "Truck & Pickup",

            marbleSculptures:
                "Marble Sculptures",

            marbleTemples:
                "Marble Temples"

        },


        /* =====================================
           HINDI
           ===================================== */

        hi: {

            home: "होम",
            story: "हमारी कहानी",
            products: "उत्पाद",
            gallery: "गैलरी",
            contact: "संपर्क",
            inquiry: "पूछताछ करें",

            handcraftedLabel: "हस्तनिर्मित संगमरमर कला",
            handcraftedMarble: "हस्तनिर्मित संगमरमर",
            artLasts: "पीढ़ियों तक रहने वाली कला",

            heroDescription:
                "भक्ति और कुशल कारीगरी से बनाई गई सुंदर संगमरमर की मूर्तियों, प्रतिमाओं, मंदिरों और पारंपरिक संगमरमर कला की दुनिया देखें।",

            parcelDelivery: "पार्सल डिलीवरी उपलब्ध",
            orderFromHome: "अपने घर से आराम से ऑर्डर करें।",

            exploreProducts: "उत्पाद देखें",
            viewGallery: "गैलरी देखें",

            yearsCraft: "कारीगरी के वर्ष",
            creations: "रचनाएँ",
            handcrafted: "हस्तनिर्मित",

            scrollDiscover: "और जानने के लिए स्क्रॉल करें",

            artBehind: "पत्थर के पीछे की कला",
            storyTitle: "भक्ति से बनाई गई कला।",

            collectionTitle: "संगमरमर की उत्कृष्ट रचनाएँ",

            galleryTitle: "पत्थर में तराशी गई सुंदरता।",

            customTitle: "आपकी कल्पना। हमारी कारीगरी।",

            customText:
                "अपने घर, मंदिर या विशेष स्थान के लिए विशेष रूप से बनाई गई हस्तनिर्मित संगमरमर की रचनाओं के साथ अपनी कल्पना को साकार करें।",

            contactTitle: "संपर्क करें",

            orderNote:
                "घर बैठे अपनी पसंदीदा संगमरमर की रचना के लिए आसानी से पूछताछ और डिलीवरी सुविधा प्राप्त करें।",

            footerExplore: "एक्सप्लोर",
            footerCreations: "रचनाएँ",
            footerContact: "संपर्क",

            whatsapp: "व्हाट्सऐप",
            instagram: "इंस्टाग्राम",
            facebook: "फेसबुक",

            inquiryEyebrow: "संगमरमर रचना पूछताछ",

            inquiryTitleFirst: "हमें बताएं",

            inquiryTitleSecond: "आपको क्या चाहिए।",

            inquiryDescription:
                "क्या आप संगमरमर की मूर्ति, मंदिर, प्रतिमा या कस्टम रचना चाहते हैं? अपनी आवश्यकता बताएं और हमारी टीम आपसे संपर्क करेगी।",

            callUs: "कॉल करें",

            whatsappUs: "व्हाट्सऐप करें",

            inquiryForm: "पूछताछ फॉर्म",

            startInquiry: "पूछताछ शुरू करें",

            name: "आपका नाम",

            phone: "मोबाइल नंबर",

            email: "ईमेल पता",

            requirement: "आवश्यकता",

            selectRequirement: "आवश्यकता चुनें",

            marbleIdol: "संगमरमर की मूर्ति",

            marbleTemple: "संगमरमर का मंदिर",

            marbleSculpture: "संगमरमर की प्रतिमा",

            customCreation: "कस्टम रचना",

            transport: "परिवहन",

            other: "अन्य",

            deliveryLocation: "डिलीवरी स्थान",

            message: "आपकी आवश्यकता",

            submitInquiry: "पूछताछ भेजें",

            successMessage:
                "धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।",

            rightsReserved: "सर्वाधिकार सुरक्षित।",

            footerTagline:
                "हस्तनिर्मित संगमरमर कला • राजस्थान, भारत",

            transportAvailable:
                "परिवहन सुविधा उपलब्ध",

            reliableTransport:
                "आपकी संगमरमर रचनाओं के लिए विश्वसनीय परिवहन",

            transportDescription:
                "संगमरमर की मूर्तियों, मंदिरों, प्रतिमाओं या अन्य सामान के लिए ट्रक और पिकअप परिवहन सुविधा उपलब्ध है।",

            bookTruck:
                "ट्रक बुक करें",

            transportSupport:
                "सुरक्षित और विश्वसनीय परिवहन सहायता",

            transportationSimple:
                "परिवहन को आसान बनाएं।",

            introDescription:
                "हम संगमरमर की मूर्तियों, मंदिरों, प्रतिमाओं और अन्य सामान के लिए ट्रक और पिकअप परिवहन सुविधा प्रदान करते हैं।",

            truckFacility:
                "ट्रक और पिकअप सुविधा",

            truckFacilityText:
                "आपकी परिवहन आवश्यकता के अनुसार ट्रक और पिकअप वाहन उपलब्ध हैं।",

            goodsTransportation:
                "सामान परिवहन",

            goodsTransportationText:
                "संगमरमर की मूर्तियों, मंदिरों, प्रतिमाओं और अन्य सामान को सुरक्षित रूप से पहुंचाएं।",

            destinationSupport:
                "गंतव्य सहायता",

            destinationSupportText:
                "अपना पिकअप और डिलीवरी स्थान साझा करें और हम उपयुक्त परिवहन विकल्प पर चर्चा करेंगे।",

            easyContact:
                "आसान संपर्क",

            easyContactText:
                "परिवहन उपलब्धता, वाहन आवश्यकता और बुकिंग के लिए सीधे संपर्क करें।",

            transportEnquiry:
                "परिवहन पूछताछ",

            needTruckPickup:
                "ट्रक या पिकअप चाहिए?",

            bookingDescription:
                "अपने सामान, पिकअप स्थान और डिलीवरी स्थान की जानकारी दें। हमारी टीम परिवहन व्यवस्था में आपकी सहायता करेगी।",

            callTransport:
                "परिवहन के लिए कॉल करें",

            whatsappBooking:
                "व्हाट्सऐप बुकिंग",

            simpleProcess:
                "सरल प्रक्रिया",

            howBookingWorks:
                "बुकिंग कैसे होती है",

            contactUs:
                "हमसे संपर्क करें",

            contactUsText:
                "हमें बताएं कि आपको क्या परिवहन करना है।",

            shareLocations:
                "स्थान साझा करें",

            shareLocationsText:
                "पिकअप और डिलीवरी स्थान बताएं।",

            discussVehicle:
                "वाहन पर चर्चा करें",

            discussVehicleText:
                "उपयुक्त ट्रक या पिकअप पर चर्चा करें।",

            confirmBooking:
                "बुकिंग की पुष्टि करें",

            confirmBookingText:
                "हमारी टीम के साथ परिवहन विवरण की पुष्टि करें।",

            jmcTransport:
                "ज्योतशी मार्बल क्रिएशन्स",

            goodsTransportSupport:
                "संगमरमर सामान परिवहन सहायता",

            finalTransportText:
                "संगमरमर की मूर्तियों से लेकर मंदिरों और प्रतिमाओं तक, हम उपयुक्त ट्रक और पिकअप परिवहन सुविधा की व्यवस्था में सहायता कर सकते हैं।",

            truckPickup:
                "ट्रक और पिकअप",

            marbleSculptures:
                "संगमरमर की प्रतिमाएँ",

            marbleTemples:
                "संगमरमर के मंदिर"

        },


        /* =====================================
           BENGALI
           ===================================== */

        bn: {

            home: "হোম",
            story: "আমাদের গল্প",
            products: "পণ্য",
            gallery: "গ্যালারি",
            contact: "যোগাযোগ",
            inquiry: "জিজ্ঞাসা করুন",

            handcraftedLabel: "হস্তনির্মিত মার্বেল শিল্প",
            handcraftedMarble: "হস্তনির্মিত মার্বেল",
            artLasts: "প্রজন্মের পর প্রজন্মের শিল্প",

            heroDescription:
                "ভক্তি ও দক্ষ কারুকার্যে তৈরি সুন্দর মার্বেল মূর্তি, ভাস্কর্য, মন্দির ও ঐতিহ্যবাহী মার্বেল শিল্প আবিষ্কার করুন।",

            parcelDelivery: "পার্সেল ডেলিভারি উপলব্ধ",
            orderFromHome: "বাড়ি থেকেই অর্ডার করুন।",

            exploreProducts: "পণ্য দেখুন",
            viewGallery: "গ্যালারি দেখুন",

            yearsCraft: "কারুশিল্পের বছর",
            creations: "সৃষ্টি",
            handcrafted: "হস্তনির্মিত",

            scrollDiscover: "আবিষ্কার করতে স্ক্রোল করুন",

            artBehind: "পাথরের পিছনের শিল্প",
            storyTitle: "ভক্তি দিয়ে তৈরি।",

            collectionTitle: "মার্বেল মাস্টারপিস",

            galleryTitle: "পাথরে খোদাই করা সৌন্দর্য।",

            customTitle: "আপনার কল্পনা। আমাদের কারুশিল্প।",

            contactTitle: "যোগাযোগ করুন",

            whatsapp: "হোয়াটসঅ্যাপ",
            instagram: "ইনস্টাগ্রাম",
            facebook: "ফেসবুক",

            name: "আপনার নাম",
            phone: "মোবাইল নম্বর",
            email: "ইমেল ঠিকানা",
            requirement: "প্রয়োজন",
            selectRequirement: "প্রয়োজন নির্বাচন করুন",
            marbleIdol: "মার্বেল মূর্তি",
            marbleTemple: "মার্বেল মন্দির",
            marbleSculpture: "মার্বেল ভাস্কর্য",
            customCreation: "কাস্টম সৃষ্টি",
            transport: "পরিবহন",
            other: "অন্যান্য",
            deliveryLocation: "ডেলিভারি স্থান",
            message: "আপনার প্রয়োজন",
            submitInquiry: "জিজ্ঞাসা পাঠান",

            successMessage:
                "ধন্যবাদ! আপনার জিজ্ঞাসা পাওয়া গেছে। আমরা শীঘ্রই যোগাযোগ করব।",

            rightsReserved: "সর্বস্বত্ব সংরক্ষিত।",

            footerTagline:
                "হস্তনির্মিত মার্বেল শিল্প • রাজস্থান, ভারত"

        },


        /* =====================================
           MARATHI
           ===================================== */

        mr: {

            home: "मुख्यपृष्ठ",
            story: "आमची कथा",
            products: "उत्पादने",
            gallery: "गॅलरी",
            contact: "संपर्क",
            inquiry: "चौकशी करा",

            handcraftedLabel: "हस्तनिर्मित संगमरवरी कला",
            handcraftedMarble: "हस्तनिर्मित संगमरवर",
            artLasts: "पिढ्यानपिढ्या टिकणारी कला",

            heroDescription:
                "भक्ती आणि कुशल कारागिरीने तयार केलेल्या संगमरवरी मूर्ती, शिल्पे, मंदिरे आणि पारंपरिक संगमरवरी कलाकृती शोधा.",

            parcelDelivery: "पार्सल डिलिव्हरी उपलब्ध",
            orderFromHome: "घरबसल्या ऑर्डर करा.",

            exploreProducts: "उत्पादने पहा",
            viewGallery: "गॅलरी पहा",

            yearsCraft: "कारागिरीची वर्षे",
            creations: "कलाकृती",
            handcrafted: "हस्तनिर्मित",

            scrollDiscover: "शोधण्यासाठी स्क्रोल करा",

            artBehind: "दगडामागील कला",
            storyTitle: "भक्तीने घडवलेली कला.",

            collectionTitle: "संगमरवरी उत्कृष्ट कलाकृती",

            galleryTitle: "दगडात कोरलेले सौंदर्य.",

            customTitle: "तुमची कल्पना. आमची कारागिरी.",

            contactTitle: "संपर्क करा",

            whatsapp: "व्हॉट्सअॅप",
            instagram: "इन्स्टाग्राम",
            facebook: "फेसबुक",

            name: "तुमचे नाव",
            phone: "मोबाईल नंबर",
            email: "ईमेल पत्ता",
            requirement: "आवश्यकता",
            selectRequirement: "आवश्यकता निवडा",
            marbleIdol: "संगमरवरी मूर्ती",
            marbleTemple: "संगमरवरी मंदिर",
            marbleSculpture: "संगमरवरी शिल्प",
            customCreation: "कस्टम कलाकृती",
            transport: "वाहतूक",
            other: "इतर",
            deliveryLocation: "डिलिव्हरी ठिकाण",
            message: "तुमची आवश्यकता",
            submitInquiry: "चौकशी पाठवा",

            successMessage:
                "धन्यवाद! तुमची चौकशी प्राप्त झाली आहे. आम्ही लवकरच संपर्क करू.",

            rightsReserved: "सर्व हक्क राखीव.",

            footerTagline:
                "हस्तनिर्मित संगमरवरी कला • राजस्थान, भारत"

        },


        /* =====================================
           GUJARATI
           ===================================== */

        gu: {

            home: "હોમ",
            story: "અમારી વાર્તા",
            products: "ઉત્પાદનો",
            gallery: "ગેલેરી",
            contact: "સંપર્ક",
            inquiry: "પૂછપરછ કરો",

            handcraftedLabel: "હસ્તકલા માર્બલ કલા",
            handcraftedMarble: "હસ્તકલા માર્બલ",
            artLasts: "પેઢીઓ સુધી ટકતી કલા",

            heroDescription:
                "ભક્તિ અને કુશળ કારીગરીથી બનાવેલી માર્બલ મૂર્તિઓ, શિલ્પો, મંદિરો અને પરંપરાગત માર્બલ કલા શોધો.",

            parcelDelivery: "પાર્સલ ડિલિવરી ઉપલબ્ધ",
            orderFromHome: "ઘરે બેઠા ઓર્ડર કરો.",

            exploreProducts: "ઉત્પાદનો જુઓ",
            viewGallery: "ગેલેરી જુઓ",

            yearsCraft: "કારીગરીના વર્ષો",
            creations: "રચનાઓ",
            handcrafted: "હસ્તકલા",

            scrollDiscover: "શોધવા માટે સ્ક્રોલ કરો",

            artBehind: "પથ્થર પાછળની કલા",
            storyTitle: "ભક્તિથી બનાવેલી કલા.",

            collectionTitle: "માર્બલ માસ્ટરપીસ",

            galleryTitle: "પથ્થરમાં કોતરેલું સૌંદર્ય.",

            customTitle: "તમારી કલ્પના. અમારી કારીગરી.",

            contactTitle: "સંપર્ક કરો",

            whatsapp: "વોટ્સએપ",
            instagram: "ઇન્સ્ટાગ્રામ",
            facebook: "ફેસબુક",

            name: "તમારું નામ",
            phone: "મોબાઇલ નંબર",
            email: "ઈમેલ સરનામું",
            requirement: "જરૂરિયાત",
            selectRequirement: "જરૂરિયાત પસંદ કરો",
            marbleIdol: "માર્બલ મૂર્તિ",
            marbleTemple: "માર્બલ મંદિર",
            marbleSculpture: "માર્બલ શિલ્પ",
            customCreation: "કસ્ટમ રચના",
            transport: "પરિવહન",
            other: "અન્ય",
            deliveryLocation: "ડિલિવરી સ્થળ",
            message: "તમારી જરૂરિયાત",
            submitInquiry: "પૂછપરછ મોકલો",

            successMessage:
                "આભાર! તમારી પૂછપરછ પ્રાપ્ત થઈ છે. અમે ટૂંક સમયમાં સંપર્ક કરીશું.",

            rightsReserved: "બધા હકો અનામત.",

            footerTagline:
                "હસ્તકલા માર્બલ કલા • રાજસ્થાન, ભારત"

        },


        /* =====================================
           PUNJABI
           ===================================== */

        pa: {

            home: "ਹੋਮ",
            story: "ਸਾਡੀ ਕਹਾਣੀ",
            products: "ਉਤਪਾਦ",
            gallery: "ਗੈਲਰੀ",
            contact: "ਸੰਪਰਕ",
            inquiry: "ਪੁੱਛਗਿੱਛ ਕਰੋ",

            handcraftedLabel: "ਹੱਥ ਨਾਲ ਬਣਾਈ ਮਾਰਬਲ ਕਲਾ",
            handcraftedMarble: "ਹੱਥ ਨਾਲ ਬਣਾਇਆ ਮਾਰਬਲ",
            artLasts: "ਪੀੜ੍ਹੀਆਂ ਤੱਕ ਰਹਿਣ ਵਾਲੀ ਕਲਾ",

            heroDescription:
                "ਭਗਤੀ ਅਤੇ ਹੁਨਰਮੰਦ ਕਾਰੀਗਰੀ ਨਾਲ ਬਣੀਆਂ ਮਾਰਬਲ ਮੂਰਤੀਆਂ, ਬੁੱਤਾਂ, ਮੰਦਰਾਂ ਅਤੇ ਰਵਾਇਤੀ ਮਾਰਬਲ ਕਲਾ ਦੀ ਖੋਜ ਕਰੋ।",

            parcelDelivery: "ਪਾਰਸਲ ਡਿਲਿਵਰੀ ਉਪਲਬਧ",
            orderFromHome: "ਘਰ ਬੈਠੇ ਆਰਡਰ ਕਰੋ।",

            exploreProducts: "ਉਤਪਾਦ ਵੇਖੋ",
            viewGallery: "ਗੈਲਰੀ ਵੇਖੋ",

            yearsCraft: "ਕਾਰੀਗਰੀ ਦੇ ਸਾਲ",
            creations: "ਰਚਨਾਵਾਂ",
            handcrafted: "ਹੱਥ ਨਾਲ ਬਣਾਇਆ",

            scrollDiscover: "ਖੋਜਣ ਲਈ ਸਕ੍ਰੋਲ ਕਰੋ",

            artBehind: "ਪੱਥਰ ਦੇ ਪਿੱਛੇ ਦੀ ਕਲਾ",
            storyTitle: "ਭਗਤੀ ਨਾਲ ਬਣਾਈ ਕਲਾ।",

            collectionTitle: "ਮਾਰਬਲ ਮਾਸਟਰਪੀਸ",

            galleryTitle: "ਪੱਥਰ ਵਿੱਚ ਉੱਕਰੀ ਸੁੰਦਰਤਾ।",

            customTitle: "ਤੁਹਾਡੀ ਕਲਪਨਾ। ਸਾਡੀ ਕਾਰੀਗਰੀ।",

            contactTitle: "ਸੰਪਰਕ ਕਰੋ",

            whatsapp: "ਵਟਸਐਪ",
            instagram: "ਇੰਸਟਾਗ੍ਰਾਮ",
            facebook: "ਫੇਸਬੁੱਕ",

            name: "ਤੁਹਾਡਾ ਨਾਮ",
            phone: "ਮੋਬਾਈਲ ਨੰਬਰ",
            email: "ਈਮੇਲ ਪਤਾ",
            requirement: "ਲੋੜ",
            selectRequirement: "ਲੋੜ ਚੁਣੋ",
            marbleIdol: "ਮਾਰਬਲ ਮੂਰਤੀ",
            marbleTemple: "ਮਾਰਬਲ ਮੰਦਰ",
            marbleSculpture: "ਮਾਰਬਲ ਬੁੱਤ",
            customCreation: "ਕਸਟਮ ਰਚਨਾ",
            transport: "ਆਵਾਜਾਈ",
            other: "ਹੋਰ",
            deliveryLocation: "ਡਿਲਿਵਰੀ ਸਥਾਨ",
            message: "ਤੁਹਾਡੀ ਲੋੜ",
            submitInquiry: "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",

            successMessage:
                "ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਪੁੱਛਗਿੱਛ ਪ੍ਰਾਪਤ ਹੋ ਗਈ ਹੈ। ਅਸੀਂ ਜਲਦੀ ਸੰਪਰਕ ਕਰਾਂਗੇ।",

            rightsReserved: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",

            footerTagline:
                "ਹੱਥ ਨਾਲ ਬਣਾਈ ਮਾਰਬਲ ਕਲਾ • ਰਾਜਸਥਾਨ, ਭਾਰਤ"

        },


        /* =====================================
           TAMIL
           ===================================== */

        ta: {

            home: "முகப்பு",
            story: "எங்கள் கதை",
            products: "தயாரிப்புகள்",
            gallery: "கேலரி",
            contact: "தொடர்பு",
            inquiry: "விசாரணை செய்யுங்கள்",

            handcraftedLabel: "கைவினை பளிங்குக் கலை",
            handcraftedMarble: "கைவினை பளிங்கு",
            artLasts: "தலைமுறைகள் நீடிக்கும் கலை",

            heroDescription:
                "பக்தி மற்றும் திறமையான கைவினையால் உருவாக்கப்பட்ட பளிங்கு சிலைகள், சிற்பங்கள், கோயில்கள் மற்றும் பாரம்பரிய கலைகளை கண்டறியுங்கள்.",

            parcelDelivery: "பார்சல் டெலிவரி கிடைக்கும்",
            orderFromHome: "வீட்டிலிருந்தே ஆர்டர் செய்யுங்கள்.",

            exploreProducts: "தயாரிப்புகளைப் பார்க்கவும்",
            viewGallery: "கேலரியைப் பார்க்கவும்",

            yearsCraft: "கைவினை ஆண்டுகள்",
            creations: "படைப்புகள்",
            handcrafted: "கைவினை",

            scrollDiscover: "கண்டறிய ஸ்க்ரோல் செய்யவும்",

            artBehind: "கல்லின் பின்னால் உள்ள கலை",
            storyTitle: "பக்தியுடன் உருவாக்கப்பட்டது.",

            collectionTitle: "பளிங்கு சிறப்புப் படைப்புகள்",

            galleryTitle: "கல்லில் செதுக்கப்பட்ட அழகு.",

            customTitle: "உங்கள் கற்பனை. எங்கள் கைவினை.",

            contactTitle: "தொடர்பு கொள்ளுங்கள்",

            whatsapp: "வாட்ஸ்அப்",
            instagram: "இன்ஸ்டாகிராம்",
            facebook: "ஃபேஸ்புக்",

            name: "உங்கள் பெயர்",
            phone: "மொபைல் எண்",
            email: "மின்னஞ்சல் முகவரி",
            requirement: "தேவை",
            selectRequirement: "தேவையைத் தேர்ந்தெடுக்கவும்",
            marbleIdol: "பளிங்கு சிலை",
            marbleTemple: "பளிங்கு கோயில்",
            marbleSculpture: "பளிங்கு சிற்பம்",
            customCreation: "தனிப்பயன் படைப்பு",
            transport: "போக்குவரத்து",
            other: "மற்றவை",
            deliveryLocation: "டெலிவரி இடம்",
            message: "உங்கள் தேவை",
            submitInquiry: "விசாரணையை அனுப்பவும்",

            successMessage:
                "நன்றி! உங்கள் விசாரணை பெறப்பட்டது. விரைவில் தொடர்பு கொள்கிறோம்.",

            rightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

            footerTagline:
                "கைவினை பளிங்குக் கலை • ராஜஸ்தான், இந்தியா"

        },


        /* =====================================
           TELUGU
           ===================================== */

        te: {

            home: "హోమ్",
            story: "మా కథ",
            products: "ఉత్పత్తులు",
            gallery: "గ్యాలరీ",
            contact: "సంప్రదించండి",
            inquiry: "విచారణ చేయండి",

            handcraftedLabel: "చేతితో తయారు చేసిన మార్బుల్ కళ",
            handcraftedMarble: "చేతితో తయారు చేసిన మార్బుల్",
            artLasts: "తరతరాలుగా నిలిచే కళ",

            heroDescription:
                "భక్తి మరియు నైపుణ్యంతో రూపొందించిన మార్బుల్ విగ్రహాలు, శిల్పాలు, దేవాలయాలు మరియు సాంప్రదాయ కళలను చూడండి.",

            parcelDelivery: "పార్సెల్ డెలివరీ అందుబాటులో ఉంది",
            orderFromHome: "ఇంటి నుంచే ఆర్డర్ చేయండి.",

            exploreProducts: "ఉత్పత్తులను చూడండి",
            viewGallery: "గ్యాలరీని చూడండి",

            yearsCraft: "కళా నైపుణ్య సంవత్సరాలు",
            creations: "సృష్టులు",
            handcrafted: "చేతితో తయారు చేసిన",

            scrollDiscover: "తెలుసుకోవడానికి స్క్రోల్ చేయండి",

            artBehind: "రాయి వెనుక ఉన్న కళ",
            storyTitle: "భక్తితో రూపొందించబడింది.",

            collectionTitle: "మార్బుల్ అద్భుత కళాఖండాలు",

            galleryTitle: "రాతిలో చెక్కిన అందం.",

            customTitle: "మీ ఆలోచన. మా నైపుణ్యం.",

            contactTitle: "సంప్రదించండి",

            whatsapp: "వాట్సాప్",
            instagram: "ఇన్‌స్టాగ్రామ్",
            facebook: "ఫేస్‌బుక్",

            name: "మీ పేరు",
            phone: "మొబైల్ నంబర్",
            email: "ఇమెయిల్ చిరునామా",
            requirement: "అవసరం",
            selectRequirement: "అవసరాన్ని ఎంచుకోండి",
            marbleIdol: "మార్బుల్ విగ్రహం",
            marbleTemple: "మార్బుల్ దేవాలయం",
            marbleSculpture: "మార్బుల్ శిల్పం",
            customCreation: "కస్టమ్ సృష్టి",
            transport: "రవాణా",
            other: "ఇతర",
            deliveryLocation: "డెలివరీ స్థలం",
            message: "మీ అవసరం",
            submitInquiry: "విచారణ పంపండి",

            successMessage:
                "ధన్యవాదాలు! మీ విచారణ అందింది. మేము త్వరలో సంప్రదిస్తాము.",

            rightsReserved: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",

            footerTagline:
                "చేతితో తయారు చేసిన మార్బుల్ కళ • రాజస్థాన్, భారతదేశం"

        },


        /* =====================================
           KANNADA
           ===================================== */

        kn: {

            home: "ಮುಖಪುಟ",
            story: "ನಮ್ಮ ಕಥೆ",
            products: "ಉತ್ಪನ್ನಗಳು",
            gallery: "ಗ್ಯಾಲರಿ",
            contact: "ಸಂಪರ್ಕ",
            inquiry: "ವಿಚಾರಣೆ ಮಾಡಿ",

            handcraftedLabel: "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ",
            handcraftedMarble: "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್",
            artLasts: "ತಲೆಮಾರುಗಳವರೆಗೆ ಉಳಿಯುವ ಕಲೆ",

            heroDescription:
                "ಭಕ್ತಿ ಮತ್ತು ನೈಪುಣ್ಯದಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ವಿಗ್ರಹಗಳು, ಶಿಲ್ಪಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",

            parcelDelivery: "ಪಾರ್ಸೆಲ್ ಡೆಲಿವರಿ ಲಭ್ಯ",
            orderFromHome: "ಮನೆಯಿಂದಲೇ ಆರ್ಡರ್ ಮಾಡಿ.",

            exploreProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
            viewGallery: "ಗ್ಯಾಲರಿ ನೋಡಿ",

            yearsCraft: "ಕಲೆಯ ವರ್ಷಗಳು",
            creations: "ರಚನೆಗಳು",
            handcrafted: "ಕೈಯಿಂದ ತಯಾರಿಸಿದ",

            scrollDiscover: "ಅನ್ವೇಷಿಸಲು ಸ್ಕ್ರೋಲ್ ಮಾಡಿ",

            artBehind: "ಕಲ್ಲಿನ ಹಿಂದಿನ ಕಲೆ",
            storyTitle: "ಭಕ್ತಿಯಿಂದ ರಚಿಸಲಾಗಿದೆ.",

            collectionTitle: "ಮಾರ್ಬಲ್ ಅದ್ಭುತ ಕಲಾಕೃತಿಗಳು",

            galleryTitle: "ಕಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಿದ ಸೌಂದರ್ಯ.",

            customTitle: "ನಿಮ್ಮ ಕಲ್ಪನೆ. ನಮ್ಮ ಕಲೆ.",

            contactTitle: "ಸಂಪರ್ಕಿಸಿ",

            whatsapp: "ವಾಟ್ಸಾಪ್",
            instagram: "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್",
            facebook: "ಫೇಸ್‌ಬುಕ್",

            name: "ನಿಮ್ಮ ಹೆಸರು",
            phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
            email: "ಇಮೇಲ್ ವಿಳಾಸ",
            requirement: "ಅಗತ್ಯ",
            selectRequirement: "ಅಗತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            marbleIdol: "ಮಾರ್ಬಲ್ ವಿಗ್ರಹ",
            marbleTemple: "ಮಾರ್ಬಲ್ ದೇವಾಲಯ",
            marbleSculpture: "ಮಾರ್ಬಲ್ ಶಿಲ್ಪ",
            customCreation: "ಕಸ್ಟಮ್ ರಚನೆ",
            transport: "ಸಾರಿಗೆ",
            other: "ಇತರೆ",
            deliveryLocation: "ಡೆಲಿವರಿ ಸ್ಥಳ",
            message: "ನಿಮ್ಮ ಅಗತ್ಯ",
            submitInquiry: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",

            successMessage:
                "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿಚಾರಣೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",

            rightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

            footerTagline:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ • ರಾಜಸ್ಥಾನ, ಭಾರತ"

        },


        /* =====================================
           MALAYALAM
           ===================================== */

        ml: {

            home: "ഹോം",
            story: "ഞങ്ങളുടെ കഥ",
            products: "ഉൽപ്പന്നങ്ങൾ",
            gallery: "ഗാലറി",
            contact: "ബന്ധപ്പെടുക",
            inquiry: "അന്വേഷിക്കുക",

            handcraftedLabel: "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല",
            handcraftedMarble: "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ",
            artLasts: "തലമുറകളോളം നിലനിൽക്കുന്ന കല",

            heroDescription:
                "ഭക്തിയോടെയും മികച്ച കരകൗശലത്തോടെയും നിർമ്മിച്ച മാർബിൾ വിഗ്രഹങ്ങൾ, ശിൽപ്പങ്ങൾ, ക്ഷേത്രങ്ങൾ, പരമ്പരാഗത കലകൾ എന്നിവ കണ്ടെത്തൂ.",

            parcelDelivery: "പാഴ്സൽ ഡെലിവറി ലഭ്യമാണ്",
            orderFromHome: "വീട്ടിൽ നിന്ന് തന്നെ ഓർഡർ ചെയ്യൂ.",

            exploreProducts: "ഉൽപ്പന്നങ്ങൾ കാണുക",
            viewGallery: "ഗാലറി കാണുക",

            yearsCraft: "കരകൗശല വർഷങ്ങൾ",
            creations: "സൃഷ്ടികൾ",
            handcrafted: "കൈകൊണ്ട് നിർമ്മിച്ചത്",

            scrollDiscover: "കണ്ടെത്താൻ സ്ക്രോൾ ചെയ്യൂ",

            artBehind: "കല്ലിന് പിന്നിലെ കല",
            storyTitle: "ഭക്തിയോടെ നിർമ്മിച്ചത്.",

            collectionTitle: "മാർബിൾ മാസ്റ്റർപീസുകൾ",

            galleryTitle: "കല്ലിൽ കൊത്തിയ സൗന്ദര്യം.",

            customTitle: "നിങ്ങളുടെ ആശയം. ഞങ്ങളുടെ കരകൗശലം.",

            contactTitle: "ബന്ധപ്പെടുക",

            whatsapp: "വാട്ട്സ്ആപ്പ്",
            instagram: "ഇൻസ്റ്റാഗ്രാം",
            facebook: "ഫേസ്ബുക്ക്",

            name: "നിങ്ങളുടെ പേര്",
            phone: "മൊബൈൽ നമ്പർ",
            email: "ഇമെയിൽ വിലാസം",
            requirement: "ആവശ്യം",
            selectRequirement: "ആവശ്യം തിരഞ്ഞെടുക്കുക",
            marbleIdol: "മാർബിൾ വിഗ്രഹം",
            marbleTemple: "മാർബിൾ ക്ഷേത്രം",
            marbleSculpture: "മാർബിൾ ശിൽപം",
            customCreation: "കസ്റ്റം സൃഷ്ടി",
            transport: "ഗതാഗതം",
            other: "മറ്റുള്ളവ",
            deliveryLocation: "ഡെലിവറി സ്ഥലം",
            message: "നിങ്ങളുടെ ആവശ്യം",
            submitInquiry: "അന്വേഷണം അയയ്ക്കുക",

            successMessage:
                "നന്ദി! നിങ്ങളുടെ അന്വേഷണം ലഭിച്ചു. ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.",

            rightsReserved: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",

            footerTagline:
                "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല • രാജസ്ഥാൻ, ഇന്ത്യ"

        },


        /* =====================================
           ODIA
           ===================================== */

        or: {

            home: "ମୁଖ୍ୟପୃଷ୍ଠା",
            story: "ଆମ କାହାଣୀ",
            products: "ଉତ୍ପାଦ",
            gallery: "ଗ୍ୟାଲେରୀ",
            contact: "ଯୋଗାଯୋଗ",
            inquiry: "ପଚରାଉଚରା କରନ୍ତୁ",

            handcraftedLabel: "ହସ୍ତନିର୍ମିତ ମାର୍ବଲ କଳା",
            handcraftedMarble: "ହସ୍ତନିର୍ମିତ ମାର୍ବଲ",
            artLasts: "ପିଢ଼ି ପରେ ପିଢ଼ି ରହିବା କଳା",

            heroDescription:
                "ଭକ୍ତି ଓ ଦକ୍ଷ କାରିଗରୀରେ ତିଆରି ମାର୍ବଲ ମୂର୍ତ୍ତି, ଶିଳ୍ପ, ମନ୍ଦିର ଓ ପାରମ୍ପରିକ କଳା ଦେଖନ୍ତୁ।",

            parcelDelivery: "ପାର୍ସଲ ଡେଲିଭରୀ ଉପଲବ୍ଧ",
            orderFromHome: "ଘରେ ବସି ଅର୍ଡର କରନ୍ତୁ।",

            exploreProducts: "ଉତ୍ପାଦ ଦେଖନ୍ତୁ",
            viewGallery: "ଗ୍ୟାଲେରୀ ଦେଖନ୍ତୁ",

            yearsCraft: "କାରିଗରୀ ବର୍ଷ",
            creations: "ସୃଷ୍ଟି",
            handcrafted: "ହସ୍ତନିର୍ମିତ",

            scrollDiscover: "ଆବିଷ୍କାର କରିବାକୁ ସ୍କ୍ରୋଲ କରନ୍ତୁ",

            artBehind: "ପଥର ପଛର କଳା",
            storyTitle: "ଭକ୍ତିରେ ତିଆରି।",

            collectionTitle: "ମାର୍ବଲ ମାଷ୍ଟରପିସ",

            galleryTitle: "ପଥରରେ ଖୋଦା ସୌନ୍ଦର୍ଯ୍ୟ।",

            customTitle: "ଆପଣଙ୍କ କଳ୍ପନା। ଆମ କାରିଗରୀ।",

            contactTitle: "ଯୋଗାଯୋଗ କରନ୍ତୁ",

            whatsapp: "ହ୍ୱାଟସଆପ",
            instagram: "ଇନଷ୍ଟାଗ୍ରାମ",
            facebook: "ଫେସବୁକ",

            name: "ଆପଣଙ୍କ ନାମ",
            phone: "ମୋବାଇଲ ନମ୍ବର",
            email: "ଇମେଲ ଠିକଣା",
            requirement: "ଆବଶ୍ୟକତା",
            selectRequirement: "ଆବଶ୍ୟକତା ବାଛନ୍ତୁ",
            marbleIdol: "ମାର୍ବଲ ମୂର୍ତ୍ତି",
            marbleTemple: "ମାର୍ବଲ ମନ୍ଦିର",
            marbleSculpture: "ମାର୍ବଲ ଶିଳ୍ପ",
            customCreation: "କଷ୍ଟମ ସୃଷ୍ଟି",
            transport: "ପରିବହନ",
            other: "ଅନ୍ୟ",
            deliveryLocation: "ଡେଲିଭରୀ ସ୍ଥାନ",
            message: "ଆପଣଙ୍କ ଆବଶ୍ୟକତା",
            submitInquiry: "ପଚରାଉଚରା ପଠାନ୍ତୁ",

            successMessage:
                "ଧନ୍ୟବାଦ! ଆପଣଙ୍କ ପଚରାଉଚରା ମିଳିଛି। ଆମେ ଶୀଘ୍ର ଯୋଗାଯୋଗ କରିବୁ।",

            rightsReserved: "ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",

            footerTagline:
                "ହସ୍ତନିର୍ମିତ ମାର୍ବଲ କଳା • ରାଜସ୍ଥାନ, ଭାରତ"

        },


        /* =====================================
           ASSAMESE
           ===================================== */

        as: {

            home: "হোম",
            story: "আমাৰ কাহিনী",
            products: "উৎপাদন",
            gallery: "গেলাৰী",
            contact: "যোগাযোগ",
            inquiry: "অনুসন্ধান কৰক",

            handcraftedLabel: "হাতেৰে নিৰ্মিত মাৰ্বল শিল্প",
            handcraftedMarble: "হাতেৰে নিৰ্মিত মাৰ্বল",
            artLasts: "প্ৰজন্মৰ পিছত প্ৰজন্মলৈ থকা শিল্প",

            heroDescription:
                "ভক্তি আৰু দক্ষ কাৰুকাৰ্যৰে নিৰ্মিত মাৰ্বল মূৰ্তি, ভাস্কৰ্য, মন্দিৰ আৰু পৰম্পৰাগত মাৰ্বল শিল্প অন্বেষণ কৰক।",

            parcelDelivery: "পাৰ্চেল ডেলিভাৰী উপলব্ধ",
            orderFromHome: "ঘৰৰ পৰাই অৰ্ডাৰ কৰক।",

            exploreProducts: "উৎপাদন চাওক",
            viewGallery: "গেলাৰী চাওক",

            yearsCraft: "কাৰুকাৰ্যৰ বছৰ",
            creations: "সৃষ্টি",
            handcrafted: "হাতেৰে নিৰ্মিত",

            scrollDiscover: "আৱিষ্কাৰ কৰিবলৈ স্ক্ৰল কৰক",

            artBehind: "শিলৰ আঁৰৰ শিল্প",
            storyTitle: "ভক্তিৰে নিৰ্মিত।",

            collectionTitle: "মাৰ্বল মাস্টাৰপিছ",

            galleryTitle: "শিলত খোদিত সৌন্দৰ্য।",

            customTitle: "আপোনাৰ কল্পনা। আমাৰ কাৰুকাৰ্য।",

            contactTitle: "যোগাযোগ কৰক",

            whatsapp: "হোৱাটছএপ",
            instagram: "ইনষ্টাগ্ৰাম",
            facebook: "ফেচবুক",

            name: "আপোনাৰ নাম",
            phone: "মোবাইল নম্বৰ",
            email: "ইমেইল ঠিকনা",
            requirement: "প্ৰয়োজন",
            selectRequirement: "প্ৰয়োজন বাছক",
            marbleIdol: "মাৰ্বল মূৰ্তি",
            marbleTemple: "মাৰ্বল মন্দিৰ",
            marbleSculpture: "মাৰ্বল ভাস্কৰ্য",
            customCreation: "কাষ্টম সৃষ্টি",
            transport: "পৰিবহণ",
            other: "অন্যান্য",
            deliveryLocation: "ডেলিভাৰী স্থান",
            message: "আপোনাৰ প্ৰয়োজন",
            submitInquiry: "অনুসন্ধান পঠিয়াওক",

            successMessage:
                "ধন্যবাদ! আপোনাৰ অনুসন্ধান লাভ কৰা হৈছে। আমি সোনকালে যোগাযোগ কৰিম।",

            rightsReserved: "সকলো অধিকাৰ সংৰক্ষিত।",

            footerTagline:
                "হাতেৰে নিৰ্মিত মাৰ্বল শিল্প • ৰাজস্থান, ভাৰত"

        },


        /* =====================================
           URDU
           ===================================== */

        ur: {

            home: "ہوم",
            story: "ہماری کہانی",
            products: "مصنوعات",
            gallery: "گیلری",
            contact: "رابطہ",
            inquiry: "استفسار کریں",

            handcraftedLabel: "ہاتھ سے تیار کردہ سنگ مرمر کا فن",
            handcraftedMarble: "ہاتھ سے تیار کردہ سنگ مرمر",
            artLasts: "نسلوں تک قائم رہنے والا فن",

            heroDescription:
                "عقیدت اور ماہر کاریگری سے تیار کردہ سنگ مرمر کی مورتیاں، مجسمے، مندر اور روایتی سنگ مرمر کے فن کو دریافت کریں۔",

            parcelDelivery: "پارسل ڈیلیوری دستیاب",
            orderFromHome: "گھر بیٹھے آرڈر کریں۔",

            exploreProducts: "مصنوعات دیکھیں",
            viewGallery: "گیلری دیکھیں",

            yearsCraft: "کاریگری کے سال",
            creations: "تخلیقات",
            handcrafted: "ہاتھ سے تیار کردہ",

            scrollDiscover: "دریافت کرنے کے لیے اسکرول کریں",

            artBehind: "پتھر کے پیچھے کا فن",
            storyTitle: "عقیدت سے تیار کیا گیا۔",

            collectionTitle: "سنگ مرمر کے شاہکار",

            galleryTitle: "پتھر میں تراشی ہوئی خوبصورتی۔",

            customTitle: "آپ کا تصور۔ ہماری کاریگری۔",

            contactTitle: "رابطہ کریں",

            whatsapp: "واٹس ایپ",
            instagram: "انسٹاگرام",
            facebook: "فیس بک",

            name: "آپ کا نام",
            phone: "موبائل نمبر",
            email: "ای میل پتہ",
            requirement: "ضرورت",
            selectRequirement: "ضرورت منتخب کریں",
            marbleIdol: "سنگ مرمر کی مورتی",
            marbleTemple: "سنگ مرمر کا مندر",
            marbleSculpture: "سنگ مرمر کا مجسمہ",
            customCreation: "حسب ضرورت تخلیق",
            transport: "نقل و حمل",
            other: "دیگر",
            deliveryLocation: "ڈیلیوری کا مقام",
            message: "آپ کی ضرورت",
            submitInquiry: "استفسار بھیجیں",

            successMessage:
                "شکریہ! آپ کا استفسار موصول ہو گیا ہے۔ ہم جلد آپ سے رابطہ کریں گے۔",

            rightsReserved: "تمام حقوق محفوظ ہیں۔",

            footerTagline:
                "ہاتھ سے تیار کردہ سنگ مرمر کا فن • راجستھان، بھارت"

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

        if (!translations[lang]) {
            lang = "en";
        }

        const currentTranslation =
            translations[lang];


        /* -------------------------------------
           TEXT TRANSLATION
           ------------------------------------- */

        document
            .querySelectorAll("[data-translate]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-translate");

                if (
                    currentTranslation[key] !== undefined
                ) {

                    element.textContent =
                        currentTranslation[key];

                }

            });


        /* -------------------------------------
           PLACEHOLDER TRANSLATION
           ------------------------------------- */

        document
            .querySelectorAll("[data-translate-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-placeholder"
                    );

                if (
                    currentTranslation[key] !== undefined
                ) {

                    element.setAttribute(
                        "placeholder",
                        currentTranslation[key]
                    );

                }

            });


        /* -------------------------------------
           VALUE ATTRIBUTE TRANSLATION
           ------------------------------------- */

        document
            .querySelectorAll("[data-translate-value]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-value"
                    );

                if (
                    currentTranslation[key] !== undefined
                ) {

                    element.value =
                        currentTranslation[key];

                }

            });


        /* -------------------------------------
           LANGUAGE BUTTON
           ------------------------------------- */

        if (languageButtonText) {

            languageButtonText.textContent =
                languageNames[lang] || "English";

        }


        /* -------------------------------------
           HTML LANGUAGE
           ------------------------------------- */

        document.documentElement.lang = lang;


        /* -------------------------------------
           RTL FOR URDU
           ------------------------------------- */

        if (lang === "ur") {

            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";

        }


        /* -------------------------------------
           SAVE LANGUAGE
           ------------------------------------- */

        localStorage.setItem(
            "jmc-language",
            lang
        );


        /* -------------------------------------
           ACTIVE LANGUAGE
           ------------------------------------- */

        languageOptions.forEach(option => {

            option.classList.remove("active");

            if (
                option.getAttribute("data-lang") === lang
            ) {
                option.classList.add("active");
            }

        });

    }


    /* =========================================
       LANGUAGE OPTION CLICK
       ========================================= */

    languageOptions.forEach(option => {

        option.addEventListener("click", event => {

            event.preventDefault();

            const lang =
                option.getAttribute("data-lang");

            applyLanguage(lang);

        });

    });


    /* =========================================
       LOAD SAVED LANGUAGE
       ========================================= */

    const savedLanguage =
        localStorage.getItem("jmc-language") || "en";

    applyLanguage(savedLanguage);


    /* =========================================
       LANGUAGE MENU ACCESSIBILITY
       ========================================= */

    if (languageButton && languageSelector) {

        languageButton.addEventListener("click", event => {

            event.stopPropagation();

            languageSelector.classList.toggle("open");

        });


        document.addEventListener("click", event => {

            if (
                !languageSelector.contains(event.target)
            ) {

                languageSelector.classList.remove("open");

            }

        });

    }

});
    /* =========================================
       CONTACT / INQUIRY FORM
       ========================================= */

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    if (contactForm && formSuccess) {

        contactForm.addEventListener("submit", async (event) => {

            event.preventDefault();

            /* Check required fields */
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            /* Get submit button */
            const submitButton =
                contactForm.querySelector(".inquiry-submit");

            const originalButtonHTML =
                submitButton ? submitButton.innerHTML : "";

            try {

                /* Disable button */
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.innerHTML =
                        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
                }

                /* Collect form data */
                const formData = {

                    name: document.getElementById("name").value.trim(),

                    phone: document.getElementById("phone").value.trim(),

                    email: document.getElementById("email").value.trim(),

                    requirement:
                        document.getElementById("requirement").value,

                    location:
                        document.getElementById("location").value.trim(),

                    message:
                        document.getElementById("message").value.trim()

                };


                /* Send data to Flask */
                const response = await fetch(
                    "http://127.0.0.1:5000/api/inquiries",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(formData)
                    }
                );


                const result = await response.json();


                /* Successful submission */
                if (response.ok && result.success) {

                    formSuccess.classList.add("show");

                    contactForm.reset();

                    setTimeout(() => {
                        formSuccess.classList.remove("show");
                    }, 6000);

                } else {

                    alert(
                        result.message ||
                        "Something went wrong. Please try again."
                    );

                }

            } catch (error) {

                console.error("Form Error:", error);

                alert(
                    "Unable to connect to the server. Please make sure the Flask server is running."
                );

            } finally {

                /* Restore button */
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHTML;
                }

            }

        });

    }