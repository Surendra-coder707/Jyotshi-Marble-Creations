/* =========================================================
   JYOTSHI MARBLE CREATIONS
   TRANSPORT PAGE JAVASCRIPT
   13 LANGUAGE SYSTEM + IMAGE LOADING + UI
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", function () {

            setTimeout(function () {
                loader.classList.add("hide");
            }, 700);

        });
    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            const isOpen = mobileMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
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


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

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

        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =====================================================
       IMAGE LOADING
    ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        if (image.complete) {

            image.classList.add("loaded");

        } else {

            image.addEventListener(
                "load",
                function () {

                    image.classList.add("loaded");

                },
                {
                    once: true
                }
            );

        }

        image.addEventListener(
            "error",
            function () {

                image.classList.add("loaded");

            },
            {
                once: true
            }
        );

    });


    /* =====================================================
       13 LANGUAGE SYSTEM
    ===================================================== */

    const translations = {

        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            home: "Home",
            story: "Our Story",
            products: "Products",
            gallery: "Gallery",
            contact: "Contact",
            inquiry: "Start an Inquiry",

            transportAvailable:
                "TRANSPORT FACILITY AVAILABLE",

            transportHeroTitle:
                "Reliable Truck & Pickup Transport",

            transportHeroText:
                "Safe and convenient transportation support for marble statues, temples, sculptures and other goods.",

            bookTruck:
                "Book a Truck",

            whatsappUs:
                "WhatsApp Us",

            transportSupport:
                "TRANSPORT SUPPORT",

            transportSimple:
                "Transportation made simple.",

            transportIntroText:
                "When your marble creation is ready, getting it safely to its destination matters just as much. Our truck and pickup transport facility helps make transportation easier and more convenient.",

            truckFacility:
                "Truck Facility",

            truckFacilityText:
                "Transportation support for marble products, statues, temples and other goods.",

            goodsTransportation:
                "Goods Transportation",

            goodsTransportationText:
                "Convenient transport assistance for moving valuable marble creations and goods.",

            destinationSupport:
                "Destination Support",

            destinationSupportText:
                "Share your pickup and delivery requirements with us to discuss suitable transport options.",

            easyContact:
                "Easy Contact",

            easyContactText:
                "Contact us directly for transport requirements, availability and booking information.",

            transportEnquiry:
                "TRANSPORT ENQUIRY",

            needTruck:
                "Need a truck or pickup?",

            bookingText:
                "Tell us about your transportation requirement. Our team can discuss the vehicle requirement, pickup location, destination and other details with you.",

            callTransport:
                "Call for Transport",

            whatsappBooking:
                "WhatsApp Booking",

            simpleProcess:
                "SIMPLE PROCESS",

            howBookingWorks:
                "How transport booking works.",

            contactUs:
                "Contact Us",

            contactUsText:
                "Contact us by phone or WhatsApp with your transport requirement.",

            shareLocations:
                "Share Locations",

            shareLocationsText:
                "Provide the pickup and delivery location along with your requirement.",

            discussVehicle:
                "Discuss Vehicle",

            discussVehicleText:
                "Discuss the suitable truck or pickup option for your transportation requirement.",

            confirmBooking:
                "Confirm Booking",

            confirmBookingText:
                "Confirm the transport details directly with our team.",

            brandName:
                "JYOTSHI MARBLE CREATIONS",

            finalTransportTitle:
                "Your goods. Our transport support.",

            finalTransportText:
                "Have a transport requirement? Get in touch with us and discuss your truck or pickup requirement.",

            callUs:
                "Call Us",

            footerDescription:
                "Handcrafted marble idols, statues, temples and traditional marble art from Rajasthan.",

            footerExplore:
                "Explore",

            footerServices:
                "Services",

            footerContact:
                "Contact",

            marbleIdols:
                "Marble Idols",

            marbleTemples:
                "Marble Temples",

            marbleSculptures:
                "Marble Sculptures",

            truckPickup:
                "Truck & Pickup",

            location:
                "Thanagazi, Alwar, Rajasthan",

            whatsappNumber:
                "WhatsApp: +91 63758 54693",

            copyright:
                "© 2026 Jyotshi Marble Creations. All Rights Reserved.",

            footerTagline:
                "Handcrafted Marble Art • Rajasthan, India"

        },


        /* =================================================
           HINDI
        ================================================= */

        hi: {

            home: "होम",
            story: "हमारी कहानी",
            products: "उत्पाद",
            gallery: "गैलरी",
            contact: "संपर्क",
            inquiry: "पूछताछ शुरू करें",

            transportAvailable:
                "परिवहन सुविधा उपलब्ध",

            transportHeroTitle:
                "विश्वसनीय ट्रक और पिकअप परिवहन",

            transportHeroText:
                "संगमरमर की मूर्तियों, मंदिरों, शिल्प और अन्य सामान के लिए सुरक्षित एवं सुविधाजनक परिवहन सहायता।",

            bookTruck:
                "ट्रक बुक करें",

            whatsappUs:
                "व्हाट्सऐप करें",

            transportSupport:
                "परिवहन सहायता",

            transportSimple:
                "परिवहन अब आसान।",

            transportIntroText:
                "जब आपकी संगमरमर की कलाकृति तैयार हो जाती है, तो उसे सुरक्षित रूप से उसके स्थान तक पहुंचाना भी उतना ही महत्वपूर्ण है। हमारी ट्रक और पिकअप परिवहन सुविधा आपके लिए परिवहन को आसान और सुविधाजनक बनाती है।",

            truckFacility:
                "ट्रक सुविधा",

            truckFacilityText:
                "संगमरमर के उत्पादों, मूर्तियों, मंदिरों और अन्य सामान के लिए परिवहन सहायता।",

            goodsTransportation:
                "सामान परिवहन",

            goodsTransportationText:
                "कीमती संगमरमर की कलाकृतियों और सामान को पहुंचाने के लिए सुविधाजनक परिवहन सहायता।",

            destinationSupport:
                "गंतव्य सहायता",

            destinationSupportText:
                "अपनी पिकअप और डिलीवरी की जानकारी साझा करें और हमारे साथ उचित परिवहन विकल्प पर चर्चा करें।",

            easyContact:
                "आसान संपर्क",

            easyContactText:
                "परिवहन की आवश्यकता, उपलब्धता और बुकिंग की जानकारी के लिए सीधे हमसे संपर्क करें।",

            transportEnquiry:
                "परिवहन पूछताछ",

            needTruck:
                "ट्रक या पिकअप चाहिए?",

            bookingText:
                "अपनी परिवहन आवश्यकता हमें बताएं। हमारी टीम वाहन, पिकअप स्थान, गंतव्य और अन्य विवरणों पर आपसे चर्चा करेगी।",

            callTransport:
                "परिवहन के लिए कॉल करें",

            whatsappBooking:
                "व्हाट्सऐप बुकिंग",

            simpleProcess:
                "सरल प्रक्रिया",

            howBookingWorks:
                "परिवहन बुकिंग कैसे काम करती है।",

            contactUs:
                "हमसे संपर्क करें",

            contactUsText:
                "अपनी परिवहन आवश्यकता के साथ फोन या व्हाट्सऐप द्वारा हमसे संपर्क करें।",

            shareLocations:
                "स्थान साझा करें",

            shareLocationsText:
                "अपनी आवश्यकता के साथ पिकअप और डिलीवरी का स्थान बताएं।",

            discussVehicle:
                "वाहन पर चर्चा करें",

            discussVehicleText:
                "अपनी परिवहन आवश्यकता के अनुसार उपयुक्त ट्रक या पिकअप विकल्प पर चर्चा करें।",

            confirmBooking:
                "बुकिंग की पुष्टि करें",

            confirmBookingText:
                "हमारी टीम के साथ परिवहन विवरण की पुष्टि करें।",

            brandName:
                "ज्योत्शी मार्बल क्रिएशन्स",

            finalTransportTitle:
                "आपका सामान। हमारी परिवहन सहायता।",

            finalTransportText:
                "परिवहन की आवश्यकता है? हमसे संपर्क करें और ट्रक या पिकअप की आवश्यकता पर चर्चा करें।",

            callUs:
                "हमें कॉल करें",

            footerDescription:
                "राजस्थान में निर्मित हस्तनिर्मित संगमरमर की मूर्तियां, प्रतिमाएं, मंदिर और पारंपरिक संगमरमर कला।",

            footerExplore:
                "एक्सप्लोर",

            footerServices:
                "सेवाएं",

            footerContact:
                "संपर्क",

            marbleIdols:
                "संगमरमर की मूर्तियां",

            marbleTemples:
                "संगमरमर के मंदिर",

            marbleSculptures:
                "संगमरमर की कलाकृतियां",

            truckPickup:
                "ट्रक और पिकअप",

            location:
                "थानागाजी, अलवर, राजस्थान",

            whatsappNumber:
                "व्हाट्सऐप: +91 63758 54693",

            copyright:
                "© 2026 ज्योत्शी मार्बल क्रिएशन्स। सर्वाधिकार सुरक्षित।",

            footerTagline:
                "हस्तनिर्मित संगमरमर कला • राजस्थान, भारत"

        },


        /* =================================================
           BENGALI
        ================================================= */

        bn: {

            home: "হোম",
            story: "আমাদের গল্প",
            products: "পণ্য",
            gallery: "গ্যালারি",
            contact: "যোগাযোগ",
            inquiry: "অনুসন্ধান করুন",

            transportAvailable: "পরিবহন সুবিধা উপলব্ধ",

            transportHeroTitle:
                "নির্ভরযোগ্য ট্রাক ও পিকআপ পরিবহন",

            transportHeroText:
                "মার্বেল মূর্তি, মন্দির, ভাস্কর্য এবং অন্যান্য পণ্যের জন্য নিরাপদ ও সুবিধাজনক পরিবহন সহায়তা।",

            bookTruck: "ট্রাক বুক করুন",
            whatsappUs: "হোয়াটসঅ্যাপ করুন",

            transportSupport: "পরিবহন সহায়তা",

            transportSimple:
                "পরিবহন এখন আরও সহজ।",

            transportIntroText:
                "আপনার মার্বেল শিল্পকর্ম প্রস্তুত হওয়ার পর সেটিকে নিরাপদে গন্তব্যে পৌঁছে দেওয়াও গুরুত্বপূর্ণ। আমাদের ট্রাক ও পিকআপ পরিবহন সুবিধা পরিবহনকে আরও সহজ ও সুবিধাজনক করে।",

            truckFacility: "ট্রাক সুবিধা",

            truckFacilityText:
                "মার্বেল পণ্য, মূর্তি, মন্দির এবং অন্যান্য পণ্যের জন্য পরিবহন সহায়তা।",

            goodsTransportation: "পণ্য পরিবহন",

            goodsTransportationText:
                "মূল্যবান মার্বেল শিল্পকর্ম এবং পণ্য পরিবহনের জন্য সুবিধাজনক সহায়তা।",

            destinationSupport: "গন্তব্য সহায়তা",

            destinationSupportText:
                "আপনার পিকআপ ও ডেলিভারি তথ্য শেয়ার করে উপযুক্ত পরিবহন বিকল্প নিয়ে আলোচনা করুন।",

            easyContact: "সহজ যোগাযোগ",

            easyContactText:
                "পরিবহন প্রয়োজন, উপলব্ধতা এবং বুকিং তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।",

            transportEnquiry: "পরিবহন অনুসন্ধান",

            needTruck: "ট্রাক বা পিকআপ প্রয়োজন?",

            bookingText:
                "আপনার পরিবহন প্রয়োজনীয়তা জানান। আমাদের দল গাড়ি, পিকআপ স্থান, গন্তব্য এবং অন্যান্য বিষয় নিয়ে আলোচনা করবে।",

            callTransport: "পরিবহনের জন্য কল করুন",

            whatsappBooking: "হোয়াটসঅ্যাপ বুকিং",

            simpleProcess: "সহজ প্রক্রিয়া",

            howBookingWorks:
                "পরিবহন বুকিং কীভাবে কাজ করে।",

            contactUs: "যোগাযোগ করুন",

            contactUsText:
                "আপনার পরিবহন প্রয়োজনীয়তা নিয়ে ফোন বা হোয়াটসঅ্যাপে যোগাযোগ করুন।",

            shareLocations: "স্থান শেয়ার করুন",

            shareLocationsText:
                "পিকআপ ও ডেলিভারি স্থান এবং আপনার প্রয়োজনীয়তা জানান।",

            discussVehicle: "গাড়ি নিয়ে আলোচনা করুন",

            discussVehicleText:
                "আপনার পরিবহন প্রয়োজন অনুযায়ী উপযুক্ত ট্রাক বা পিকআপ নিয়ে আলোচনা করুন।",

            confirmBooking: "বুকিং নিশ্চিত করুন",

            confirmBookingText:
                "আমাদের দলের সাথে পরিবহনের বিস্তারিত নিশ্চিত করুন।",

            brandName: "জ্যোত্শী মার্বেল ক্রিয়েশনস",

            finalTransportTitle:
                "আপনার পণ্য। আমাদের পরিবহন সহায়তা।",

            finalTransportText:
                "পরিবহনের প্রয়োজন আছে? আমাদের সাথে যোগাযোগ করুন এবং ট্রাক বা পিকআপের প্রয়োজন নিয়ে আলোচনা করুন।",

            callUs: "কল করুন",

            footerDescription:
                "রাজস্থানের হাতে তৈরি মার্বেল মূর্তি, প্রতিমা, মন্দির এবং ঐতিহ্যবাহী মার্বেল শিল্প।",

            footerExplore: "এক্সপ্লোর",
            footerServices: "পরিষেবা",
            footerContact: "যোগাযোগ",

            marbleIdols: "মার্বেল মূর্তি",
            marbleTemples: "মার্বেল মন্দির",
            marbleSculptures: "মার্বেল ভাস্কর্য",
            truckPickup: "ট্রাক ও পিকআপ",

            location: "থানাগাজি, আলওয়ার, রাজস্থান",

            whatsappNumber:
                "হোয়াটসঅ্যাপ: +91 63758 54693",

            copyright:
                "© 2026 জ্যোত্শী মার্বেল ক্রিয়েশনস। সর্বস্বত্ব সংরক্ষিত।",

            footerTagline:
                "হাতে তৈরি মার্বেল শিল্প • রাজস্থান, ভারত"

        },


        /* =================================================
           MARATHI
        ================================================= */

        mr: {

            home: "मुख्यपृष्ठ",
            story: "आमची कथा",
            products: "उत्पादने",
            gallery: "गॅलरी",
            contact: "संपर्क",
            inquiry: "चौकशी करा",

            transportAvailable: "वाहतूक सुविधा उपलब्ध",

            transportHeroTitle:
                "विश्वसनीय ट्रक आणि पिकअप वाहतूक",

            transportHeroText:
                "संगमरवरी मूर्ती, मंदिरे, शिल्पे आणि इतर वस्तूंसाठी सुरक्षित व सोयीची वाहतूक सुविधा.",

            bookTruck: "ट्रक बुक करा",
            whatsappUs: "व्हॉट्सअॅप करा",

            transportSupport: "वाहतूक सहाय्य",

            transportSimple:
                "वाहतूक आता सोपी.",

            transportIntroText:
                "तुमची संगमरवरी कलाकृती तयार झाल्यानंतर ती सुरक्षितपणे गंतव्यस्थानी पोहोचवणे तितकेच महत्त्वाचे आहे. आमची ट्रक आणि पिकअप वाहतूक सुविधा वाहतूक अधिक सोपी करते.",

            truckFacility: "ट्रक सुविधा",

            truckFacilityText:
                "संगमरवरी उत्पादने, मूर्ती, मंदिरे आणि इतर वस्तूंसाठी वाहतूक सहाय्य.",

            goodsTransportation: "वस्तू वाहतूक",

            goodsTransportationText:
                "मौल्यवान संगमरवरी कलाकृती आणि वस्तू हलवण्यासाठी सोयीची वाहतूक मदत.",

            destinationSupport: "गंतव्य सहाय्य",

            destinationSupportText:
                "पिकअप आणि डिलिव्हरीची माहिती देऊन योग्य वाहतूक पर्यायावर चर्चा करा.",

            easyContact: "सोपे संपर्क",

            easyContactText:
                "वाहतूक गरज, उपलब्धता आणि बुकिंगसाठी थेट आमच्याशी संपर्क साधा.",

            transportEnquiry: "वाहतूक चौकशी",

            needTruck: "ट्रक किंवा पिकअप हवा आहे?",

            bookingText:
                "तुमची वाहतूक गरज सांगा. आमची टीम वाहन, पिकअप ठिकाण, गंतव्य आणि इतर तपशीलांवर चर्चा करेल.",

            callTransport: "वाहतुकीसाठी कॉल करा",
            whatsappBooking: "व्हॉट्सअॅप बुकिंग",

            simpleProcess: "सोपे टप्पे",

            howBookingWorks:
                "वाहतूक बुकिंग कसे कार्य करते.",

            contactUs: "आमच्याशी संपर्क करा",

            contactUsText:
                "फोन किंवा व्हॉट्सअॅपद्वारे तुमची वाहतूक गरज सांगा.",

            shareLocations: "ठिकाणे शेअर करा",

            shareLocationsText:
                "पिकअप आणि डिलिव्हरीचे ठिकाण सांगा.",

            discussVehicle: "वाहनावर चर्चा करा",

            discussVehicleText:
                "तुमच्या गरजेनुसार योग्य ट्रक किंवा पिकअप पर्यायावर चर्चा करा.",

            confirmBooking: "बुकिंग निश्चित करा",

            confirmBookingText:
                "आमच्या टीमसोबत वाहतुकीच्या तपशीलाची पुष्टी करा.",

            brandName: "ज्योत्शी मार्बल क्रिएशन्स",

            finalTransportTitle:
                "तुमच्या वस्तू. आमची वाहतूक मदत.",

            finalTransportText:
                "वाहतुकीची गरज आहे? आमच्याशी संपर्क साधा आणि ट्रक किंवा पिकअपबद्दल चर्चा करा.",

            callUs: "आम्हाला कॉल करा",

            footerDescription:
                "राजस्थानमधील हस्तनिर्मित संगमरवरी मूर्ती, पुतळे, मंदिरे आणि पारंपरिक संगमरवरी कला.",

            footerExplore: "एक्सप्लोर",
            footerServices: "सेवा",
            footerContact: "संपर्क",

            marbleIdols: "संगमरवरी मूर्ती",
            marbleTemples: "संगमरवरी मंदिरे",
            marbleSculptures: "संगमरवरी शिल्पे",
            truckPickup: "ट्रक आणि पिकअप",

            location: "थानागाझी, अलवर, राजस्थान",

            whatsappNumber:
                "व्हॉट्सअॅप: +91 63758 54693",

            copyright:
                "© 2026 ज्योत्शी मार्बल क्रिएशन्स. सर्व हक्क राखीव.",

            footerTagline:
                "हस्तनिर्मित संगमरवरी कला • राजस्थान, भारत"

        },


        /* =================================================
           GUJARATI
        ================================================= */

        gu: {

            home: "હોમ",
            story: "અમારી કહાની",
            products: "ઉત્પાદનો",
            gallery: "ગેલેરી",
            contact: "સંપર્ક",
            inquiry: "પૂછપરછ કરો",

            transportAvailable:
                "પરિવહન સુવિધા ઉપલબ્ધ",

            transportHeroTitle:
                "વિશ્વસનીય ટ્રક અને પિકઅપ પરિવહન",

            transportHeroText:
                "માર્બલ મૂર્તિઓ, મંદિરો, શિલ્પો અને અન્ય સામાન માટે સુરક્ષિત અને સુવિધાજનક પરિવહન સહાય.",

            bookTruck: "ટ્રક બુક કરો",
            whatsappUs: "વોટ્સએપ કરો",

            transportSupport: "પરિવહન સહાય",

            transportSimple:
                "પરિવહન હવે સરળ.",

            transportIntroText:
                "તમારી માર્બલ કૃતિ તૈયાર થયા પછી તેને સુરક્ષિત રીતે તેના સ્થળે પહોંચાડવી પણ એટલી જ મહત્વપૂર્ણ છે. અમારી ટ્રક અને પિકઅપ પરિવહન સુવિધા પરિવહનને સરળ બનાવે છે.",

            truckFacility: "ટ્રક સુવિધા",

            truckFacilityText:
                "માર્બલ ઉત્પાદનો, મૂર્તિઓ, મંદિરો અને અન્ય સામાન માટે પરિવહન સહાય.",

            goodsTransportation: "સામાન પરિવહન",

            goodsTransportationText:
                "મૂલ્યવાન માર્બલ કૃતિઓ અને સામાન માટે સુવિધાજનક પરિવહન સહાય.",

            destinationSupport: "ગંતવ્ય સહાય",

            destinationSupportText:
                "તમારી પિકઅપ અને ડિલિવરીની માહિતી શેર કરીને યોગ્ય પરિવહન વિકલ્પ વિશે ચર્ચા કરો.",

            easyContact: "સરળ સંપર્ક",

            easyContactText:
                "પરિવહન જરૂરિયાત, ઉપલબ્ધતા અને બુકિંગ માટે સીધો અમારો સંપર્ક કરો.",

            transportEnquiry: "પરિવહન પૂછપરછ",

            needTruck: "ટ્રક અથવા પિકઅપ જોઈએ છે?",

            bookingText:
                "તમારી પરિવહન જરૂરિયાત જણાવો. અમારી ટીમ વાહન, પિકઅપ સ્થળ, ગંતવ્ય અને અન્ય વિગતો વિશે ચર્ચા કરશે.",

            callTransport: "પરિવહન માટે કૉલ કરો",
            whatsappBooking: "વોટ્સએપ બુકિંગ",

            simpleProcess: "સરળ પ્રક્રિયા",

            howBookingWorks:
                "પરિવહન બુકિંગ કેવી રીતે કામ કરે છે.",

            contactUs: "અમારો સંપર્ક કરો",

            contactUsText:
                "ફોન અથવા વોટ્સએપ દ્વારા તમારી પરિવહન જરૂરિયાત જણાવો.",

            shareLocations: "સ્થાન શેર કરો",

            shareLocationsText:
                "પિકઅપ અને ડિલિવરીનું સ્થાન જણાવો.",

            discussVehicle: "વાહન વિશે ચર્ચા કરો",

            discussVehicleText:
                "તમારી જરૂરિયાત અનુસાર યોગ્ય ટ્રક અથવા પિકઅપ વિકલ્પ વિશે ચર્ચા કરો.",

            confirmBooking: "બુકિંગની પુષ્ટિ કરો",

            confirmBookingText:
                "અમારી ટીમ સાથે પરિવહનની વિગતોની પુષ્ટિ કરો.",

            brandName: "જ્યોત્શી માર્બલ ક્રિએશન્સ",

            finalTransportTitle:
                "તમારો સામાન. અમારી પરિવહન સહાય.",

            finalTransportText:
                "પરિવહનની જરૂર છે? અમારો સંપર્ક કરો અને ટ્રક અથવા પિકઅપની જરૂરિયાત વિશે ચર્ચા કરો.",

            callUs: "અમને કૉલ કરો",

            footerDescription:
                "રાજસ્થાનની હસ્તકલા દ્વારા બનાવેલી માર્બલ મૂર્તિઓ, પ્રતિમાઓ, મંદિરો અને પરંપરાગત માર્બલ કલા.",

            footerExplore: "એક્સપ્લોર",
            footerServices: "સેવાઓ",
            footerContact: "સંપર્ક",

            marbleIdols: "માર્બલ મૂર્તિઓ",
            marbleTemples: "માર્બલ મંદિરો",
            marbleSculptures: "માર્બલ શિલ્પો",
            truckPickup: "ટ્રક અને પિકઅપ",

            location: "થાનાગાઝી, અલવર, રાજસ્થાન",

            whatsappNumber:
                "વોટ્સએપ: +91 63758 54693",

            copyright:
                "© 2026 જ્યોત્શી માર્બલ ક્રિએશન્સ. સર્વાધિકાર સુરક્ષિત.",

            footerTagline:
                "હસ્તનિર્મિત માર્બલ કલા • રાજસ્થાન, ભારત"

        },


        /* =================================================
           PUNJABI
        ================================================= */

        pa: {

            home: "ਹੋਮ",
            story: "ਸਾਡੀ ਕਹਾਣੀ",
            products: "ਉਤਪਾਦ",
            gallery: "ਗੈਲਰੀ",
            contact: "ਸੰਪਰਕ",
            inquiry: "ਪੁੱਛਗਿੱਛ ਕਰੋ",

            transportAvailable:
                "ਆਵਾਜਾਈ ਸਹੂਲਤ ਉਪਲਬਧ",

            transportHeroTitle:
                "ਭਰੋਸੇਯੋਗ ਟਰੱਕ ਅਤੇ ਪਿਕਅੱਪ ਆਵਾਜਾਈ",

            transportHeroText:
                "ਮਾਰਬਲ ਮੂਰਤੀਆਂ, ਮੰਦਰਾਂ, ਸ਼ਿਲਪਕਲਾਵਾਂ ਅਤੇ ਹੋਰ ਸਮਾਨ ਲਈ ਸੁਰੱਖਿਅਤ ਅਤੇ ਸੁਵਿਧਾਜਨਕ ਆਵਾਜਾਈ ਸਹਾਇਤਾ।",

            bookTruck: "ਟਰੱਕ ਬੁੱਕ ਕਰੋ",
            whatsappUs: "ਵਟਸਐਪ ਕਰੋ",

            transportSupport: "ਆਵਾਜਾਈ ਸਹਾਇਤਾ",

            transportSimple:
                "ਆਵਾਜਾਈ ਹੁਣ ਆਸਾਨ।",

            transportIntroText:
                "ਜਦੋਂ ਤੁਹਾਡੀ ਮਾਰਬਲ ਕਲਾ ਤਿਆਰ ਹੋ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਉਸਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਮੰਜ਼ਿਲ ਤੱਕ ਪਹੁੰਚਾਉਣਾ ਵੀ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਸਾਡੀ ਟਰੱਕ ਅਤੇ ਪਿਕਅੱਪ ਸਹੂਲਤ ਆਵਾਜਾਈ ਨੂੰ ਆਸਾਨ ਬਣਾਉਂਦੀ ਹੈ।",

            truckFacility: "ਟਰੱਕ ਸਹੂਲਤ",

            truckFacilityText:
                "ਮਾਰਬਲ ਉਤਪਾਦਾਂ, ਮੂਰਤੀਆਂ, ਮੰਦਰਾਂ ਅਤੇ ਹੋਰ ਸਮਾਨ ਲਈ ਆਵਾਜਾਈ ਸਹਾਇਤਾ।",

            goodsTransportation: "ਸਮਾਨ ਆਵਾਜਾਈ",

            goodsTransportationText:
                "ਕੀਮਤੀ ਮਾਰਬਲ ਕਲਾ ਅਤੇ ਸਮਾਨ ਲਈ ਸੁਵਿਧਾਜਨਕ ਆਵਾਜਾਈ ਸਹਾਇਤਾ।",

            destinationSupport: "ਮੰਜ਼ਿਲ ਸਹਾਇਤਾ",

            destinationSupportText:
                "ਆਪਣੀ ਪਿਕਅੱਪ ਅਤੇ ਡਿਲਿਵਰੀ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰੋ ਅਤੇ ਢੁਕਵੇਂ ਆਵਾਜਾਈ ਵਿਕਲਪ ਬਾਰੇ ਚਰਚਾ ਕਰੋ।",

            easyContact: "ਆਸਾਨ ਸੰਪਰਕ",

            easyContactText:
                "ਆਵਾਜਾਈ ਦੀ ਲੋੜ, ਉਪਲਬਧਤਾ ਅਤੇ ਬੁਕਿੰਗ ਲਈ ਸਿੱਧਾ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",

            transportEnquiry: "ਆਵਾਜਾਈ ਪੁੱਛਗਿੱਛ",

            needTruck: "ਟਰੱਕ ਜਾਂ ਪਿਕਅੱਪ ਦੀ ਲੋੜ ਹੈ?",

            bookingText:
                "ਆਪਣੀ ਆਵਾਜਾਈ ਦੀ ਲੋੜ ਦੱਸੋ। ਸਾਡੀ ਟੀਮ ਵਾਹਨ, ਪਿਕਅੱਪ ਸਥਾਨ, ਮੰਜ਼ਿਲ ਅਤੇ ਹੋਰ ਵੇਰਵਿਆਂ ਬਾਰੇ ਚਰਚਾ ਕਰੇਗੀ।",

            callTransport: "ਆਵਾਜਾਈ ਲਈ ਕਾਲ ਕਰੋ",
            whatsappBooking: "ਵਟਸਐਪ ਬੁਕਿੰਗ",

            simpleProcess: "ਸਧਾਰਨ ਪ੍ਰਕਿਰਿਆ",

            howBookingWorks:
                "ਆਵਾਜਾਈ ਬੁਕਿੰਗ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ।",

            contactUs: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",

            contactUsText:
                "ਫੋਨ ਜਾਂ ਵਟਸਐਪ ਰਾਹੀਂ ਆਪਣੀ ਆਵਾਜਾਈ ਦੀ ਲੋੜ ਦੱਸੋ।",

            shareLocations: "ਸਥਾਨ ਸਾਂਝੇ ਕਰੋ",

            shareLocationsText:
                "ਪਿਕਅੱਪ ਅਤੇ ਡਿਲਿਵਰੀ ਸਥਾਨ ਦੱਸੋ।",

            discussVehicle: "ਵਾਹਨ ਬਾਰੇ ਚਰਚਾ ਕਰੋ",

            discussVehicleText:
                "ਆਪਣੀ ਲੋੜ ਅਨੁਸਾਰ ਢੁਕਵੇਂ ਟਰੱਕ ਜਾਂ ਪਿਕਅੱਪ ਵਿਕਲਪ ਬਾਰੇ ਚਰਚਾ ਕਰੋ।",

            confirmBooking: "ਬੁਕਿੰਗ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",

            confirmBookingText:
                "ਸਾਡੀ ਟੀਮ ਨਾਲ ਆਵਾਜਾਈ ਦੇ ਵੇਰਵਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",

            brandName:
                "ਜ੍ਯੋਤਸ਼ੀ ਮਾਰਬਲ ਕ੍ਰੀਏਸ਼ਨਜ਼",

            finalTransportTitle:
                "ਤੁਹਾਡਾ ਸਮਾਨ। ਸਾਡੀ ਆਵਾਜਾਈ ਸਹਾਇਤਾ।",

            finalTransportText:
                "ਆਵਾਜਾਈ ਦੀ ਲੋੜ ਹੈ? ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ ਅਤੇ ਟਰੱਕ ਜਾਂ ਪਿਕਅੱਪ ਦੀ ਲੋੜ ਬਾਰੇ ਚਰਚਾ ਕਰੋ।",

            callUs: "ਸਾਨੂੰ ਕਾਲ ਕਰੋ",

            footerDescription:
                "ਰਾਜਸਥਾਨ ਤੋਂ ਹੱਥ ਨਾਲ ਬਣੀਆਂ ਮਾਰਬਲ ਮੂਰਤੀਆਂ, ਬੁੱਤ, ਮੰਦਰ ਅਤੇ ਪਰੰਪਰਾਗਤ ਮਾਰਬਲ ਕਲਾ।",

            footerExplore: "ਐਕਸਪਲੋਰ",
            footerServices: "ਸੇਵਾਵਾਂ",
            footerContact: "ਸੰਪਰਕ",

            marbleIdols: "ਮਾਰਬਲ ਮੂਰਤੀਆਂ",
            marbleTemples: "ਮਾਰਬਲ ਮੰਦਰ",
            marbleSculptures: "ਮਾਰਬਲ ਸ਼ਿਲਪ",
            truckPickup: "ਟਰੱਕ ਅਤੇ ਪਿਕਅੱਪ",

            location:
                "ਥਾਨਾਗਾਜ਼ੀ, ਅਲਵਰ, ਰਾਜਸਥਾਨ",

            whatsappNumber:
                "ਵਟਸਐਪ: +91 63758 54693",

            copyright:
                "© 2026 ਜ੍ਯੋਤਸ਼ੀ ਮਾਰਬਲ ਕ੍ਰੀਏਸ਼ਨਜ਼। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",

            footerTagline:
                "ਹੱਥ ਨਾਲ ਬਣੀ ਮਾਰਬਲ ਕਲਾ • ਰਾਜਸਥਾਨ, ਭਾਰਤ"

        },


        /* =================================================
           TAMIL
        ================================================= */

        ta: {

            home: "முகப்பு",
            story: "எங்கள் கதை",
            products: "தயாரிப்புகள்",
            gallery: "கேலரி",
            contact: "தொடர்பு",
            inquiry: "விசாரணை செய்யுங்கள்",

            transportAvailable:
                "போக்குவரத்து வசதி உள்ளது",

            transportHeroTitle:
                "நம்பகமான லாரி மற்றும் பிக்கப் போக்குவரத்து",

            transportHeroText:
                "மார்பிள் சிலைகள், கோவில்கள், சிற்பங்கள் மற்றும் பிற பொருட்களுக்கு பாதுகாப்பான மற்றும் வசதியான போக்குவரத்து உதவி.",

            bookTruck: "லாரியை முன்பதிவு செய்யுங்கள்",
            whatsappUs: "வாட்ஸ்அப் செய்யுங்கள்",

            transportSupport: "போக்குவரத்து உதவி",

            transportSimple:
                "போக்குவரத்து இப்போது எளிது.",

            transportIntroText:
                "உங்கள் மார்பிள் கலைப்பணி தயாரானதும், அதை பாதுகாப்பாக இலக்கிடத்திற்கு கொண்டு செல்வதும் முக்கியம். எங்கள் லாரி மற்றும் பிக்கப் போக்குவரத்து வசதி இதை எளிதாக்குகிறது.",

            truckFacility: "லாரி வசதி",

            truckFacilityText:
                "மார்பிள் பொருட்கள், சிலைகள், கோவில்கள் மற்றும் பிற பொருட்களுக்கு போக்குவரத்து உதவி.",

            goodsTransportation: "பொருள் போக்குவரத்து",

            goodsTransportationText:
                "மதிப்புமிக்க மார்பிள் கலைப்பொருட்கள் மற்றும் பொருட்களை கொண்டு செல்ல வசதியான உதவி.",

            destinationSupport: "இலக்கு உதவி",

            destinationSupportText:
                "பிக்கப் மற்றும் டெலிவரி விவரங்களைப் பகிர்ந்து பொருத்தமான போக்குவரத்து விருப்பங்களைப் பற்றி விவாதிக்கவும்.",

            easyContact: "எளிய தொடர்பு",

            easyContactText:
                "போக்குவரத்து தேவைகள், கிடைக்கும் தன்மை மற்றும் முன்பதிவுக்கு எங்களை நேரடியாக தொடர்பு கொள்ளுங்கள்.",

            transportEnquiry: "போக்குவரத்து விசாரணை",

            needTruck: "லாரி அல்லது பிக்கப் தேவையா?",

            bookingText:
                "உங்கள் போக்குவரத்து தேவையை தெரிவிக்கவும். வாகனம், பிக்கப் இடம், இலக்கு மற்றும் பிற விவரங்களை எங்கள் குழு உங்களுடன் விவாதிக்கும்.",

            callTransport: "போக்குவரத்துக்கு அழைக்கவும்",
            whatsappBooking: "வாட்ஸ்அப் முன்பதிவு",

            simpleProcess: "எளிய செயல்முறை",

            howBookingWorks:
                "போக்குவரத்து முன்பதிவு எவ்வாறு செயல்படுகிறது.",

            contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",

            contactUsText:
                "தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் உங்கள் போக்குவரத்து தேவையை தெரிவிக்கவும்.",

            shareLocations: "இடங்களைப் பகிரவும்",

            shareLocationsText:
                "பிக்கப் மற்றும் டெலிவரி இடங்களை வழங்கவும்.",

            discussVehicle: "வாகனம் பற்றி விவாதிக்கவும்",

            discussVehicleText:
                "உங்கள் தேவைக்கு ஏற்ற லாரி அல்லது பிக்கப் விருப்பத்தைப் பற்றி விவாதிக்கவும்.",

            confirmBooking: "முன்பதிவை உறுதிப்படுத்தவும்",

            confirmBookingText:
                "எங்கள் குழுவுடன் போக்குவரத்து விவரங்களை உறுதிப்படுத்தவும்.",

            brandName:
                "ஜ்யோத்ஷி மார்பிள் கிரியேஷன்ஸ்",

            finalTransportTitle:
                "உங்கள் பொருட்கள். எங்கள் போக்குவரத்து உதவி.",

            finalTransportText:
                "போக்குவரத்து தேவை உள்ளதா? எங்களை தொடர்பு கொண்டு லாரி அல்லது பிக்கப் தேவையைப் பற்றி பேசுங்கள்.",

            callUs: "எங்களை அழைக்கவும்",

            footerDescription:
                "ராஜஸ்தானில் கைவினையால் உருவாக்கப்பட்ட மார்பிள் சிலைகள், கோவில்கள் மற்றும் பாரம்பரிய மார்பிள் கலை.",

            footerExplore: "ஆராயுங்கள்",
            footerServices: "சேவைகள்",
            footerContact: "தொடர்பு",

            marbleIdols: "மார்பிள் சிலைகள்",
            marbleTemples: "மார்பிள் கோவில்கள்",
            marbleSculptures: "மார்பிள் சிற்பங்கள்",
            truckPickup: "லாரி மற்றும் பிக்கப்",

            location:
                "தானாகாசி, அல்வார், ராஜஸ்தான்",

            whatsappNumber:
                "வாட்ஸ்அப்: +91 63758 54693",

            copyright:
                "© 2026 ஜ்யோத்ஷி மார்பிள் கிரியேஷன்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

            footerTagline:
                "கைவினை மார்பிள் கலை • ராஜஸ்தான், இந்தியா"

        },


        /* =================================================
           TELUGU
        ================================================= */

        te: {

            home: "హోమ్",
            story: "మా కథ",
            products: "ఉత్పత్తులు",
            gallery: "గ్యాలరీ",
            contact: "సంప్రదించండి",
            inquiry: "విచారణ చేయండి",

            transportAvailable:
                "రవాణా సౌకర్యం అందుబాటులో ఉంది",

            transportHeroTitle:
                "నమ్మకమైన ట్రక్ & పికప్ రవాణా",

            transportHeroText:
                "మార్బుల్ విగ్రహాలు, దేవాలయాలు, శిల్పాలు మరియు ఇతర వస్తువులకు సురక్షితమైన మరియు సౌకర్యవంతమైన రవాణా సహాయం.",

            bookTruck: "ట్రక్ బుక్ చేయండి",
            whatsappUs: "వాట్సాప్ చేయండి",

            transportSupport: "రవాణా సహాయం",

            transportSimple:
                "రవాణా ఇప్పుడు సులభం.",

            transportIntroText:
                "మీ మార్బుల్ కళాకృతి సిద్ధమైన తర్వాత దానిని సురక్షితంగా గమ్యస్థానానికి చేర్చడం కూడా ముఖ్యమే. మా ట్రక్ మరియు పికప్ రవాణా సౌకర్యం దీనిని సులభతరం చేస్తుంది.",

            truckFacility: "ట్రక్ సౌకర్యం",

            truckFacilityText:
                "మార్బుల్ ఉత్పత్తులు, విగ్రహాలు, దేవాలయాలు మరియు ఇతర వస్తువులకు రవాణా సహాయం.",

            goodsTransportation: "వస్తువుల రవాణా",

            goodsTransportationText:
                "విలువైన మార్బుల్ కళాకృతులు మరియు వస్తువులను తరలించడానికి సౌకర్యవంతమైన రవాణా సహాయం.",

            destinationSupport: "గమ్యస్థాన సహాయం",

            destinationSupportText:
                "పికప్ మరియు డెలివరీ వివరాలను పంచుకుని సరైన రవాణా ఎంపికల గురించి చర్చించండి.",

            easyContact: "సులభమైన సంప్రదింపు",

            easyContactText:
                "రవాణా అవసరాలు, అందుబాటు మరియు బుకింగ్ కోసం నేరుగా మమ్మల్ని సంప్రదించండి.",

            transportEnquiry: "రవాణా విచారణ",

            needTruck: "ట్రక్ లేదా పికప్ కావాలా?",

            bookingText:
                "మీ రవాణా అవసరాన్ని మాకు తెలియజేయండి. వాహనం, పికప్ ప్రదేశం, గమ్యస్థానం మరియు ఇతర వివరాలను మా బృందం మీతో చర్చిస్తుంది.",

            callTransport: "రవాణా కోసం కాల్ చేయండి",
            whatsappBooking: "వాట్సాప్ బుకింగ్",

            simpleProcess: "సులభమైన ప్రక్రియ",

            howBookingWorks:
                "రవాణా బుకింగ్ ఎలా పనిచేస్తుంది.",

            contactUs: "మమ్మల్ని సంప్రదించండి",

            contactUsText:
                "ఫోన్ లేదా వాట్సాప్ ద్వారా మీ రవాణా అవసరాన్ని తెలియజేయండి.",

            shareLocations: "స్థానాలను పంచుకోండి",

            shareLocationsText:
                "పికప్ మరియు డెలివరీ స్థానాలను అందించండి.",

            discussVehicle: "వాహనం గురించి చర్చించండి",

            discussVehicleText:
                "మీ అవసరానికి సరైన ట్రక్ లేదా పికప్ ఎంపిక గురించి చర్చించండి.",

            confirmBooking: "బుకింగ్ నిర్ధారించండి",

            confirmBookingText:
                "మా బృందంతో రవాణా వివరాలను నిర్ధారించండి.",

            brandName:
                "జ్యోత్షి మార్బుల్ క్రియేషన్స్",

            finalTransportTitle:
                "మీ వస్తువులు. మా రవాణా సహాయం.",

            finalTransportText:
                "రవాణా అవసరమా? మమ్మల్ని సంప్రదించి ట్రక్ లేదా పికప్ అవసరం గురించి చర్చించండి.",

            callUs: "మాకు కాల్ చేయండి",

            footerDescription:
                "రాజస్థాన్‌లో చేతితో తయారు చేసిన మార్బుల్ విగ్రహాలు, దేవాలయాలు మరియు సంప్రదాయ మార్బుల్ కళ.",

            footerExplore: "ఎక్స్‌ప్లోర్",
            footerServices: "సేవలు",
            footerContact: "సంప్రదించండి",

            marbleIdols: "మార్బుల్ విగ్రహాలు",
            marbleTemples: "మార్బుల్ దేవాలయాలు",
            marbleSculptures: "మార్బుల్ శిల్పాలు",
            truckPickup: "ట్రక్ & పికప్",

            location:
                "థానాగాజీ, అల్వార్, రాజస్థాన్",

            whatsappNumber:
                "వాట్సాప్: +91 63758 54693",

            copyright:
                "© 2026 జ్యోత్షి మార్బుల్ క్రియేషన్స్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",

            footerTagline:
                "చేతితో తయారు చేసిన మార్బుల్ కళ • రాజస్థాన్, భారతదేశం"

        },


        /* =================================================
           KANNADA
        ================================================= */

        kn: {

            home: "ಮುಖಪುಟ",
            story: "ನಮ್ಮ ಕಥೆ",
            products: "ಉತ್ಪನ್ನಗಳು",
            gallery: "ಗ್ಯಾಲರಿ",
            contact: "ಸಂಪರ್ಕಿಸಿ",
            inquiry: "ವಿಚಾರಣೆ ಮಾಡಿ",

            transportAvailable:
                "ಸಾರಿಗೆ ಸೌಲಭ್ಯ ಲಭ್ಯವಿದೆ",

            transportHeroTitle:
                "ವಿಶ್ವಾಸಾರ್ಹ ಟ್ರಕ್ ಮತ್ತು ಪಿಕಪ್ ಸಾರಿಗೆ",

            transportHeroText:
                "ಮಾರ್ಬಲ್ ಮೂರ್ತಿಗಳು, ದೇವಾಲಯಗಳು, ಶಿಲ್ಪಗಳು ಮತ್ತು ಇತರ ವಸ್ತುಗಳಿಗೆ ಸುರಕ್ಷಿತ ಹಾಗೂ ಅನುಕೂಲಕರ ಸಾರಿಗೆ ಸಹಾಯ.",

            bookTruck: "ಟ್ರಕ್ ಬುಕ್ ಮಾಡಿ",
            whatsappUs: "ವಾಟ್ಸಾಪ್ ಮಾಡಿ",

            transportSupport: "ಸಾರಿಗೆ ಸಹಾಯ",

            transportSimple:
                "ಸಾರಿಗೆ ಈಗ ಸುಲಭ.",

            transportIntroText:
                "ನಿಮ್ಮ ಮಾರ್ಬಲ್ ಕಲಾಕೃತಿ ಸಿದ್ಧವಾದ ನಂತರ ಅದನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಗಮ್ಯಸ್ಥಾನಕ್ಕೆ ತಲುಪಿಸುವುದು ಮುಖ್ಯ. ನಮ್ಮ ಟ್ರಕ್ ಮತ್ತು ಪಿಕಪ್ ಸಾರಿಗೆ ಸೌಲಭ್ಯ ಇದನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.",

            truckFacility: "ಟ್ರಕ್ ಸೌಲಭ್ಯ",

            truckFacilityText:
                "ಮಾರ್ಬಲ್ ಉತ್ಪನ್ನಗಳು, ಮೂರ್ತಿಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಇತರ ವಸ್ತುಗಳಿಗೆ ಸಾರಿಗೆ ಸಹಾಯ.",

            goodsTransportation: "ಸರಕು ಸಾರಿಗೆ",

            goodsTransportationText:
                "ಮೌಲ್ಯಯುತ ಮಾರ್ಬಲ್ ಕಲಾಕೃತಿಗಳು ಮತ್ತು ವಸ್ತುಗಳನ್ನು ಸಾಗಿಸಲು ಅನುಕೂಲಕರ ಸಾರಿಗೆ ಸಹಾಯ.",

            destinationSupport: "ಗಮ್ಯಸ್ಥಾನ ಸಹಾಯ",

            destinationSupportText:
                "ಪಿಕಪ್ ಮತ್ತು ಡೆಲಿವರಿ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಂಡು ಸೂಕ್ತ ಸಾರಿಗೆ ಆಯ್ಕೆಗಳ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ.",

            easyContact: "ಸುಲಭ ಸಂಪರ್ಕ",

            easyContactText:
                "ಸಾರಿಗೆ ಅಗತ್ಯ, ಲಭ್ಯತೆ ಮತ್ತು ಬುಕ್ಕಿಂಗ್‌ಗಾಗಿ ನೇರವಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",

            transportEnquiry: "ಸಾರಿಗೆ ವಿಚಾರಣೆ",

            needTruck: "ಟ್ರಕ್ ಅಥವಾ ಪಿಕಪ್ ಬೇಕೇ?",

            bookingText:
                "ನಿಮ್ಮ ಸಾರಿಗೆ ಅಗತ್ಯವನ್ನು ತಿಳಿಸಿ. ವಾಹನ, ಪಿಕಪ್ ಸ್ಥಳ, ಗಮ್ಯಸ್ಥಾನ ಮತ್ತು ಇತರ ವಿವರಗಳನ್ನು ನಮ್ಮ ತಂಡ ನಿಮ್ಮೊಂದಿಗೆ ಚರ್ಚಿಸುತ್ತದೆ.",

            callTransport: "ಸಾರಿಗೆಗಾಗಿ ಕರೆ ಮಾಡಿ",
            whatsappBooking: "ವಾಟ್ಸಾಪ್ ಬುಕ್ಕಿಂಗ್",

            simpleProcess: "ಸರಳ ಪ್ರಕ್ರಿಯೆ",

            howBookingWorks:
                "ಸಾರಿಗೆ ಬುಕ್ಕಿಂಗ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",

            contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",

            contactUsText:
                "ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನಿಮ್ಮ ಸಾರಿಗೆ ಅಗತ್ಯವನ್ನು ತಿಳಿಸಿ.",

            shareLocations: "ಸ್ಥಳಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",

            shareLocationsText:
                "ಪಿಕಪ್ ಮತ್ತು ಡೆಲಿವರಿ ಸ್ಥಳಗಳನ್ನು ನೀಡಿ.",

            discussVehicle: "ವಾಹನದ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ",

            discussVehicleText:
                "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಸೂಕ್ತವಾದ ಟ್ರಕ್ ಅಥವಾ ಪಿಕಪ್ ಆಯ್ಕೆಯ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ.",

            confirmBooking: "ಬುಕ್ಕಿಂಗ್ ದೃಢೀಕರಿಸಿ",

            confirmBookingText:
                "ನಮ್ಮ ತಂಡದೊಂದಿಗೆ ಸಾರಿಗೆ ವಿವರಗಳನ್ನು ದೃಢೀಕರಿಸಿ.",

            brandName:
                "ಜ್ಯೋತ್ಶಿ ಮಾರ್ಬಲ್ ಕ್ರಿಯೇಷನ್ಸ್",

            finalTransportTitle:
                "ನಿಮ್ಮ ಸರಕು. ನಮ್ಮ ಸಾರಿಗೆ ಸಹಾಯ.",

            finalTransportText:
                "ಸಾರಿಗೆ ಅಗತ್ಯವಿದೆಯೇ? ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಟ್ರಕ್ ಅಥವಾ ಪಿಕಪ್ ಅಗತ್ಯದ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ.",

            callUs: "ನಮಗೆ ಕರೆ ಮಾಡಿ",

            footerDescription:
                "ರಾಜಸ್ಥಾನದಿಂದ ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಮೂರ್ತಿಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಬಲ್ ಕಲೆ.",

            footerExplore: "ಅನ್ವೇಷಿಸಿ",
            footerServices: "ಸೇವೆಗಳು",
            footerContact: "ಸಂಪರ್ಕ",

            marbleIdols: "ಮಾರ್ಬಲ್ ಮೂರ್ತಿಗಳು",
            marbleTemples: "ಮಾರ್ಬಲ್ ದೇವಾಲಯಗಳು",
            marbleSculptures: "ಮಾರ್ಬಲ್ ಶಿಲ್ಪಗಳು",
            truckPickup: "ಟ್ರಕ್ ಮತ್ತು ಪಿಕಪ್",

            location:
                "ಥಾನಾಗಾಜಿ, ಅಲ್ವಾರ್, ರಾಜಸ್ಥಾನ",

            whatsappNumber:
                "ವಾಟ್ಸಾಪ್: +91 63758 54693",

            copyright:
                "© 2026 ಜ್ಯೋತ್ಶಿ ಮಾರ್ಬಲ್ ಕ್ರಿಯೇಷನ್ಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

            footerTagline:
                "ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಮಾರ್ಬಲ್ ಕಲೆ • ರಾಜಸ್ಥಾನ, ಭಾರತ"

        },


        /* =================================================
           MALAYALAM
        ================================================= */

        ml: {

            home: "ഹോം",
            story: "ഞങ്ങളുടെ കഥ",
            products: "ഉൽപ്പന്നങ്ങൾ",
            gallery: "ഗാലറി",
            contact: "ബന്ധപ്പെടുക",
            inquiry: "അന്വേഷിക്കുക",

            transportAvailable:
                "ഗതാഗത സൗകര്യം ലഭ്യമാണ്",

            transportHeroTitle:
                "വിശ്വസനീയമായ ട്രക്ക് & പിക്കപ്പ് ഗതാഗതം",

            transportHeroText:
                "മാർബിൾ പ്രതിമകൾ, ക്ഷേത്രങ്ങൾ, ശിൽപ്പങ്ങൾ, മറ്റ് സാധനങ്ങൾ എന്നിവയ്ക്ക് സുരക്ഷിതവും സൗകര്യപ്രദവുമായ ഗതാഗത സഹായം.",

            bookTruck: "ട്രക്ക് ബുക്ക് ചെയ്യുക",
            whatsappUs: "വാട്ട്സ്ആപ്പ് ചെയ്യുക",

            transportSupport: "ഗതാഗത സഹായം",

            transportSimple:
                "ഗതാഗതം ഇനി എളുപ്പം.",

            transportIntroText:
                "നിങ്ങളുടെ മാർബിൾ കലാസൃഷ്ടി തയ്യാറായ ശേഷം അത് സുരക്ഷിതമായി ലക്ഷ്യസ്ഥാനത്ത് എത്തിക്കുന്നതും പ്രധാനമാണ്. ഞങ്ങളുടെ ട്രക്ക്, പിക്കപ്പ് ഗതാഗത സൗകര്യം ഇത് കൂടുതൽ എളുപ്പമാക്കുന്നു.",

            truckFacility: "ട്രക്ക് സൗകര്യം",

            truckFacilityText:
                "മാർബിൾ ഉൽപ്പന്നങ്ങൾ, പ്രതിമകൾ, ക്ഷേത്രങ്ങൾ, മറ്റ് സാധനങ്ങൾ എന്നിവയ്ക്ക് ഗതാഗത സഹായം.",

            goodsTransportation: "സാധന ഗതാഗതം",

            goodsTransportationText:
                "വിലമതിക്കാനാകാത്ത മാർബിൾ കലാസൃഷ്ടികളും സാധനങ്ങളും കൊണ്ടുപോകാൻ സൗകര്യപ്രദമായ സഹായം.",

            destinationSupport: "ലക്ഷ്യസ്ഥാന സഹായം",

            destinationSupportText:
                "പിക്കപ്പ്, ഡെലിവറി വിവരങ്ങൾ പങ്കുവെച്ച് അനുയോജ്യമായ ഗതാഗത മാർഗങ്ങളെക്കുറിച്ച് ചർച്ച ചെയ്യുക.",

            easyContact: "എളുപ്പത്തിലുള്ള ബന്ധപ്പെടൽ",

            easyContactText:
                "ഗതാഗത ആവശ്യങ്ങൾ, ലഭ്യത, ബുക്കിംഗ് വിവരങ്ങൾ എന്നിവയ്ക്കായി നേരിട്ട് ഞങ്ങളെ ബന്ധപ്പെടുക.",

            transportEnquiry: "ഗതാഗത അന്വേഷണം",

            needTruck: "ട്രക്ക് അല്ലെങ്കിൽ പിക്കപ്പ് ആവശ്യമുണ്ടോ?",

            bookingText:
                "നിങ്ങളുടെ ഗതാഗത ആവശ്യം ഞങ്ങളെ അറിയിക്കുക. വാഹനം, പിക്കപ്പ് സ്ഥലം, ലക്ഷ്യസ്ഥാനം, മറ്റ് വിവരങ്ങൾ എന്നിവ ഞങ്ങളുടെ ടീം നിങ്ങളുമായി ചർച്ച ചെയ്യും.",

            callTransport: "ഗതാഗതത്തിനായി വിളിക്കുക",
            whatsappBooking: "വാട്ട്സ്ആപ്പ് ബുക്കിംഗ്",

            simpleProcess: "ലളിതമായ പ്രക്രിയ",

            howBookingWorks:
                "ഗതാഗത ബുക്കിംഗ് എങ്ങനെ പ്രവർത്തിക്കുന്നു.",

            contactUs: "ഞങ്ങളെ ബന്ധപ്പെടുക",

            contactUsText:
                "ഫോൺ അല്ലെങ്കിൽ വാട്ട്സ്ആപ്പ് വഴി നിങ്ങളുടെ ഗതാഗത ആവശ്യം അറിയിക്കുക.",

            shareLocations: "സ്ഥലങ്ങൾ പങ്കിടുക",

            shareLocationsText:
                "പിക്കപ്പ്, ഡെലിവറി സ്ഥലങ്ങൾ നൽകുക.",

            discussVehicle: "വാഹനത്തെക്കുറിച്ച് ചർച്ച ചെയ്യുക",

            discussVehicleText:
                "നിങ്ങളുടെ ആവശ്യത്തിന് അനുയോജ്യമായ ട്രക്ക് അല്ലെങ്കിൽ പിക്കപ്പ് തിരഞ്ഞെടുപ്പിനെക്കുറിച്ച് ചർച്ച ചെയ്യുക.",

            confirmBooking: "ബുക്കിംഗ് സ്ഥിരീകരിക്കുക",

            confirmBookingText:
                "ഞങ്ങളുടെ ടീമുമായി ഗതാഗത വിശദാംശങ്ങൾ സ്ഥിരീകരിക്കുക.",

            brandName:
                "ജ്യോത്ഷി മാർബിൾ ക്രിയേഷൻസ്",

            finalTransportTitle:
                "നിങ്ങളുടെ സാധനങ്ങൾ. ഞങ്ങളുടെ ഗതാഗത സഹായം.",

            finalTransportText:
                "ഗതാഗത ആവശ്യമുണ്ടോ? ഞങ്ങളെ ബന്ധപ്പെടുകയും ട്രക്ക് അല്ലെങ്കിൽ പിക്കപ്പ് ആവശ്യകത ചർച്ച ചെയ്യുകയും ചെയ്യുക.",

            callUs: "ഞങ്ങളെ വിളിക്കുക",

            footerDescription:
                "രാജസ്ഥാനിൽ നിന്നുള്ള കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ പ്രതിമകൾ, ക്ഷേത്രങ്ങൾ, പരമ്പരാഗത മാർബിൾ കല.",

            footerExplore: "പര്യവേക്ഷണം",
            footerServices: "സേവനങ്ങൾ",
            footerContact: "ബന്ധപ്പെടുക",

            marbleIdols: "മാർബിൾ പ്രതിമകൾ",
            marbleTemples: "മാർബിൾ ക്ഷേത്രങ്ങൾ",
            marbleSculptures: "മാർബിൾ ശിൽപ്പങ്ങൾ",
            truckPickup: "ട്രക്ക് & പിക്കപ്പ്",

            location:
                "താനഗാസി, അൽവർ, രാജസ്ഥാൻ",

            whatsappNumber:
                "വാട്ട്സ്ആപ്പ്: +91 63758 54693",

            copyright:
                "© 2026 ജ്യോത്ഷി മാർബിൾ ക്രിയേഷൻസ്. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",

            footerTagline:
                "കൈകൊണ്ട് നിർമ്മിച്ച മാർബിൾ കല • രാജസ്ഥാൻ, ഇന്ത്യ"

        },


        /* =================================================
           ODIA
        ================================================= */

        or: {

            home: "ହୋମ୍",
            story: "ଆମ କାହାଣୀ",
            products: "ଉତ୍ପାଦ",
            gallery: "ଗ୍ୟାଲେରୀ",
            contact: "ଯୋଗାଯୋଗ",
            inquiry: "ପଚାରା କରନ୍ତୁ",

            transportAvailable:
                "ପରିବହନ ସୁବିଧା ଉପଲବ୍ଧ",

            transportHeroTitle:
                "ବିଶ୍ୱସନୀୟ ଟ୍ରକ୍ ଏବଂ ପିକଅପ୍ ପରିବହନ",

            transportHeroText:
                "ମାର୍ବଲ୍ ମୂର୍ତ୍ତି, ମନ୍ଦିର, ଶିଳ୍ପ ଏବଂ ଅନ୍ୟାନ୍ୟ ସାମଗ୍ରୀ ପାଇଁ ସୁରକ୍ଷିତ ଏବଂ ସୁବିଧାଜନକ ପରିବହନ ସହାୟତା।",

            bookTruck: "ଟ୍ରକ୍ ବୁକ୍ କରନ୍ତୁ",
            whatsappUs: "ୱାଟସଆପ୍ କରନ୍ତୁ",

            transportSupport: "ପରିବହନ ସହାୟତା",

            transportSimple:
                "ପରିବହନ ଏବେ ସହଜ।",

            transportIntroText:
                "ଆପଣଙ୍କ ମାର୍ବଲ୍ କଳାକୃତି ପ୍ରସ୍ତୁତ ହେବା ପରେ ଏହାକୁ ସୁରକ୍ଷିତ ଭାବେ ଗନ୍ତବ୍ୟ ସ୍ଥାନକୁ ପହଞ୍ଚାଇବା ମଧ୍ୟ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ। ଆମର ଟ୍ରକ୍ ଏବଂ ପିକଅପ୍ ପରିବହନ ସୁବିଧା ଏହାକୁ ସହଜ କରେ।",

            truckFacility: "ଟ୍ରକ୍ ସୁବିଧା",

            truckFacilityText:
                "ମାର୍ବଲ୍ ଉତ୍ପାଦ, ମୂର୍ତ୍ତି, ମନ୍ଦିର ଏବଂ ଅନ୍ୟାନ୍ୟ ସାମଗ୍ରୀ ପାଇଁ ପରିବହନ ସହାୟତା।",

            goodsTransportation: "ସାମଗ୍ରୀ ପରିବହନ",

            goodsTransportationText:
                "ମୂଲ୍ୟବାନ ମାର୍ବଲ୍ କଳାକୃତି ଏବଂ ସାମଗ୍ରୀ ପାଇଁ ସୁବିଧାଜନକ ପରିବହନ ସହାୟତା।",

            destinationSupport: "ଗନ୍ତବ୍ୟ ସହାୟତା",

            destinationSupportText:
                "ପିକଅପ୍ ଏବଂ ଡେଲିଭରି ସୂଚନା ସେୟାର୍ କରି ଉପଯୁକ୍ତ ପରିବହନ ବିକଳ୍ପ ଉପରେ ଆଲୋଚନା କରନ୍ତୁ।",

            easyContact: "ସହଜ ଯୋଗାଯୋଗ",

            easyContactText:
                "ପରିବହନ ଆବଶ୍ୟକତା, ଉପଲବ୍ଧତା ଏବଂ ବୁକିଂ ପାଇଁ ସିଧାସଳଖ ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",

            transportEnquiry: "ପରିବହନ ପଚାରା",

            needTruck: "ଟ୍ରକ୍ କିମ୍ବା ପିକଅପ୍ ଦରକାର କି?",

            bookingText:
                "ଆପଣଙ୍କ ପରିବହନ ଆବଶ୍ୟକତା ବିଷୟରେ ଆମକୁ କୁହନ୍ତୁ। ଆମ ଟିମ୍ ଯାନ, ପିକଅପ୍ ସ୍ଥାନ, ଗନ୍ତବ୍ୟ ଏବଂ ଅନ୍ୟାନ୍ୟ ବିବରଣୀ ଆଲୋଚନା କରିବ।",

            callTransport: "ପରିବହନ ପାଇଁ କଲ୍ କରନ୍ତୁ",
            whatsappBooking: "ୱାଟସଆପ୍ ବୁକିଂ",

            simpleProcess: "ସରଳ ପ୍ରକ୍ରିୟା",

            howBookingWorks:
                "ପରିବହନ ବୁକିଂ କିପରି କାମ କରେ।",

            contactUs: "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",

            contactUsText:
                "ଫୋନ୍ କିମ୍ବା ୱାଟସଆପ୍ ମାଧ୍ୟମରେ ଆପଣଙ୍କ ପରିବହନ ଆବଶ୍ୟକତା ଜଣାନ୍ତୁ।",

            shareLocations: "ସ୍ଥାନ ସେୟାର୍ କରନ୍ତୁ",

            shareLocationsText:
                "ପିକଅପ୍ ଏବଂ ଡେଲିଭରି ସ୍ଥାନ ଦିଅନ୍ତୁ।",

            discussVehicle: "ଯାନ ବିଷୟରେ ଆଲୋଚନା କରନ୍ତୁ",

            discussVehicleText:
                "ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ଉପଯୁକ୍ତ ଟ୍ରକ୍ କିମ୍ବା ପିକଅପ୍ ବିକଳ୍ପ ଉପରେ ଆଲୋଚନା କରନ୍ତୁ।",

            confirmBooking: "ବୁକିଂ ନିଶ୍ଚିତ କରନ୍ତୁ",

            confirmBookingText:
                "ଆମ ଟିମ୍ ସହିତ ପରିବହନ ବିବରଣୀ ନିଶ୍ଚିତ କରନ୍ତୁ।",

            brandName:
                "ଜ୍ୟୋତ୍ଶୀ ମାର୍ବଲ୍ କ୍ରିଏସନ୍ସ",

            finalTransportTitle:
                "ଆପଣଙ୍କ ସାମଗ୍ରୀ। ଆମର ପରିବହନ ସହାୟତା।",

            finalTransportText:
                "ପରିବହନ ଆବଶ୍ୟକତା ଅଛି କି? ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ ଏବଂ ଟ୍ରକ୍ କିମ୍ବା ପିକଅପ୍ ଆବଶ୍ୟକତା ବିଷୟରେ ଆଲୋଚନା କରନ୍ତୁ।",

            callUs: "ଆମକୁ କଲ୍ କରନ୍ତୁ",

            footerDescription:
                "ରାଜସ୍ଥାନରୁ ହସ୍ତନିର୍ମିତ ମାର୍ବଲ୍ ମୂର୍ତ୍ତି, ମନ୍ଦିର ଏବଂ ପାରମ୍ପରିକ ମାର୍ବଲ୍ କଳା।",

            footerExplore: "ଏକ୍ସପ୍ଲୋର୍",
            footerServices: "ସେବା",
            footerContact: "ଯୋଗାଯୋଗ",

            marbleIdols: "ମାର୍ବଲ୍ ମୂର୍ତ୍ତି",
            marbleTemples: "ମାର୍ବଲ୍ ମନ୍ଦିର",
            marbleSculptures: "ମାର୍ବଲ୍ ଶିଳ୍ପ",
            truckPickup: "ଟ୍ରକ୍ ଏବଂ ପିକଅପ୍",

            location:
                "ଥାନାଗାଜୀ, ଅଲୱାର, ରାଜସ୍ଥାନ",

            whatsappNumber:
                "ୱାଟସଆପ୍: +91 63758 54693",

            copyright:
                "© 2026 ଜ୍ୟୋତ୍ଶୀ ମାର୍ବଲ୍ କ୍ରିଏସନ୍ସ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",

            footerTagline:
                "ହସ୍ତନିର୍ମିତ ମାର୍ବଲ୍ କଳା • ରାଜସ୍ଥାନ, ଭାରତ"

        },


        /* =================================================
           ASSAMESE
        ================================================= */

        as: {

            home: "হোম",
            story: "আমাৰ কাহিনী",
            products: "সামগ্ৰী",
            gallery: "গেলাৰী",
            contact: "যোগাযোগ",
            inquiry: "সোধা-পোছা কৰক",

            transportAvailable:
                "পৰিবহণ সুবিধা উপলব্ধ",

            transportHeroTitle:
                "বিশ্বাসযোগ্য ট্ৰাক আৰু পিকআপ পৰিবহণ",

            transportHeroText:
                "মাৰ্বল মূৰ্তি, মন্দিৰ, ভাস্কৰ্য আৰু অন্যান্য সামগ্ৰীৰ বাবে সুৰক্ষিত আৰু সুবিধাজনক পৰিবহণ সহায়।",

            bookTruck: "ট্ৰাক বুক কৰক",
            whatsappUs: "হোৱাটছএপ কৰক",

            transportSupport: "পৰিবহণ সহায়",

            transportSimple:
                "পৰিবহণ এতিয়া সহজ।",

            transportIntroText:
                "আপোনাৰ মাৰ্বল শিল্পকৰ্ম প্ৰস্তুত হোৱাৰ পিছত ইয়াক সুৰক্ষিতভাৱে গন্তব্যস্থানলৈ লৈ যোৱাটোও গুৰুত্বপূৰ্ণ। আমাৰ ট্ৰাক আৰু পিকআপ পৰিবহণ সুবিধাই এই কাম সহজ কৰে।",

            truckFacility: "ট্ৰাক সুবিধা",

            truckFacilityText:
                "মাৰ্বল সামগ্ৰী, মূৰ্তি, মন্দিৰ আৰু অন্যান্য সামগ্ৰীৰ বাবে পৰিবহণ সহায়।",

            goodsTransportation: "সামগ্ৰী পৰিবহণ",

            goodsTransportationText:
                "মূল্যৱান মাৰ্বল শিল্পকৰ্ম আৰু সামগ্ৰী স্থানান্তৰৰ বাবে সুবিধাজনক পৰিবহণ সহায়।",

            destinationSupport: "গন্তব্য সহায়",

            destinationSupportText:
                "আপোনাৰ পিকআপ আৰু ডেলিভাৰী তথ্য শ্বেয়াৰ কৰি উপযুক্ত পৰিবহণ বিকল্পৰ বিষয়ে আলোচনা কৰক।",

            easyContact: "সহজ যোগাযোগ",

            easyContactText:
                "পৰিবহণৰ প্ৰয়োজনীয়তা, উপলব্ধতা আৰু বুকিঙৰ বাবে পোনপটীয়াকৈ আমাৰ সৈতে যোগাযোগ কৰক।",

            transportEnquiry: "পৰিবহণ সোধা-পোছা",

            needTruck: "ট্ৰাক বা পিকআপৰ প্ৰয়োজন নেকি?",

            bookingText:
                "আপোনাৰ পৰিবহণৰ প্ৰয়োজনীয়তা আমাক জনাওক। আমাৰ দলে বাহন, পিকআপ স্থান, গন্তব্য আৰু অন্যান্য তথ্যৰ বিষয়ে আলোচনা কৰিব।",

            callTransport: "পৰিবহণৰ বাবে ফোন কৰক",
            whatsappBooking: "হোৱাটছএপ বুকিং",

            simpleProcess: "সহজ প্ৰক্ৰিয়া",

            howBookingWorks:
                "পৰিবহণ বুকিং কেনেকৈ কাম কৰে।",

            contactUs: "আমাৰ সৈতে যোগাযোগ কৰক",

            contactUsText:
                "ফোন বা হোৱাটছএপৰ জৰিয়তে আপোনাৰ পৰিবহণৰ প্ৰয়োজনীয়তা জনাওক।",

            shareLocations: "স্থান শ্বেয়াৰ কৰক",

            shareLocationsText:
                "পিকআপ আৰু ডেলিভাৰী স্থান প্ৰদান কৰক।",

            discussVehicle: "বাহনৰ বিষয়ে আলোচনা কৰক",

            discussVehicleText:
                "আপোনাৰ প্ৰয়োজন অনুসৰি উপযুক্ত ট্ৰাক বা পিকআপ বিকল্পৰ বিষয়ে আলোচনা কৰক।",

            confirmBooking: "বুকিং নিশ্চিত কৰক",

            confirmBookingText:
                "আমাৰ দলৰ সৈতে পৰিবহণৰ তথ্য নিশ্চিত কৰক।",

            brandName:
                "জ্যোত্শী মাৰ্বল ক্ৰিয়েচনছ",

            finalTransportTitle:
                "আপোনাৰ সামগ্ৰী। আমাৰ পৰিবহণ সহায়।",

            finalTransportText:
                "পৰিবহণৰ প্ৰয়োজন আছে নেকি? আমাৰ সৈতে যোগাযোগ কৰক আৰু ট্ৰাক বা পিকআপৰ প্ৰয়োজনীয়তাৰ বিষয়ে আলোচনা কৰক।",

            callUs: "আমাক ফোন কৰক",

            footerDescription:
                "ৰাজস্থানৰ পৰা হাতেৰে নিৰ্মিত মাৰ্বল মূৰ্তি, মন্দিৰ আৰু পৰম্পৰাগত মাৰ্বল শিল্প।",

            footerExplore: "অন্বেষণ",
            footerServices: "সেৱা",
            footerContact: "যোগাযোগ",

            marbleIdols: "মাৰ্বল মূৰ্তি",
            marbleTemples: "মাৰ্বল মন্দিৰ",
            marbleSculptures: "মাৰ্বল ভাস্কৰ্য",
            truckPickup: "ট্ৰাক আৰু পিকআপ",

            location:
                "থানাগাজী, আলৱৰ, ৰাজস্থান",

            whatsappNumber:
                "হোৱাটছএপ: +91 63758 54693",

            copyright:
                "© 2026 জ্যোত্শী মাৰ্বল ক্ৰিয়েচনছ। সকলো অধিকাৰ সংৰক্ষিত।",

            footerTagline:
                "হস্তনিৰ্মিত মাৰ্বল শিল্প • ৰাজস্থান, ভাৰত"

        },


        /* =================================================
           URDU
        ================================================= */

        ur: {

            home: "ہوم",
            story: "ہماری کہانی",
            products: "مصنوعات",
            gallery: "گیلری",
            contact: "رابطہ",
            inquiry: "استفسار کریں",

            transportAvailable:
                "ٹرانسپورٹ کی سہولت دستیاب ہے",

            transportHeroTitle:
                "قابل اعتماد ٹرک اور پک اپ ٹرانسپورٹ",

            transportHeroText:
                "سنگ مرمر کی مورتیوں، مندروں، مجسموں اور دیگر سامان کے لیے محفوظ اور آسان ٹرانسپورٹ سہولت۔",

            bookTruck: "ٹرک بک کریں",
            whatsappUs: "واٹس ایپ کریں",

            transportSupport:
                "ٹرانسپورٹ سپورٹ",

            transportSimple:
                "ٹرانسپورٹ اب آسان۔",

            transportIntroText:
                "جب آپ کا سنگ مرمر کا فن پارہ تیار ہو جائے تو اسے محفوظ طریقے سے منزل تک پہنچانا بھی اتنا ہی اہم ہے۔ ہماری ٹرک اور پک اپ ٹرانسپورٹ سہولت اس عمل کو آسان بناتی ہے۔",

            truckFacility:
                "ٹرک کی سہولت",

            truckFacilityText:
                "سنگ مرمر کی مصنوعات، مورتیوں، مندروں اور دیگر سامان کے لیے ٹرانسپورٹ سپورٹ۔",

            goodsTransportation:
                "سامان کی ترسیل",

            goodsTransportationText:
                "قیمتی سنگ مرمر کے فن پاروں اور سامان کو منتقل کرنے کے لیے آسان ٹرانسپورٹ مدد۔",

            destinationSupport:
                "منزل کی مدد",

            destinationSupportText:
                "اپنی پک اپ اور ڈیلیوری کی معلومات شیئر کریں اور مناسب ٹرانسپورٹ کے اختیارات پر بات کریں۔",

            easyContact:
                "آسان رابطہ",

            easyContactText:
                "ٹرانسپورٹ کی ضرورت، دستیابی اور بکنگ کے لیے براہ راست ہم سے رابطہ کریں۔",

            transportEnquiry:
                "ٹرانسپورٹ استفسار",

            needTruck:
                "ٹرک یا پک اپ کی ضرورت ہے؟",

            bookingText:
                "اپنی ٹرانسپورٹ کی ضرورت ہمیں بتائیں۔ ہماری ٹیم گاڑی، پک اپ مقام، منزل اور دیگر تفصیلات پر آپ سے بات کرے گی۔",

            callTransport:
                "ٹرانسپورٹ کے لیے کال کریں",

            whatsappBooking:
                "واٹس ایپ بکنگ",

            simpleProcess:
                "آسان طریقہ",

            howBookingWorks:
                "ٹرانسپورٹ بکنگ کیسے کام کرتی ہے۔",

            contactUs:
                "ہم سے رابطہ کریں",

            contactUsText:
                "فون یا واٹس ایپ کے ذریعے اپنی ٹرانسپورٹ کی ضرورت بتائیں۔",

            shareLocations:
                "مقامات شیئر کریں",

            shareLocationsText:
                "پک اپ اور ڈیلیوری کا مقام فراہم کریں۔",

            discussVehicle:
                "گاڑی کے بارے میں بات کریں",

            discussVehicleText:
                "اپنی ضرورت کے مطابق مناسب ٹرک یا پک اپ کے آپشن پر بات کریں۔",

            confirmBooking:
                "بکنگ کی تصدیق کریں",

            confirmBookingText:
                "ہماری ٹیم کے ساتھ ٹرانسپورٹ کی تفصیلات کی تصدیق کریں۔",

            brandName:
                "جیوتشی ماربل کریئیشنز",

            finalTransportTitle:
                "آپ کا سامان۔ ہماری ٹرانسپورٹ سپورٹ۔",

            finalTransportText:
                "ٹرانسپورٹ کی ضرورت ہے؟ ہم سے رابطہ کریں اور ٹرک یا پک اپ کی ضرورت پر بات کریں۔",

            callUs:
                "ہمیں کال کریں",

            footerDescription:
                "راجستھان سے ہاتھ سے تیار کردہ سنگ مرمر کی مورتیاں، مجسمے، مندر اور روایتی سنگ مرمر کا فن۔",

            footerExplore:
                "دریافت کریں",

            footerServices:
                "خدمات",

            footerContact:
                "رابطہ",

            marbleIdols:
                "سنگ مرمر کی مورتیاں",

            marbleTemples:
                "سنگ مرمر کے مندر",

            marbleSculptures:
                "سنگ مرمر کے مجسمے",

            truckPickup:
                "ٹرک اور پک اپ",

            location:
                "تھانگازی، الور، راجستھان",

            whatsappNumber:
                "واٹس ایپ: +91 63758 54693",

            copyright:
                "© 2026 جیوتشی ماربل کریئیشنز۔ جملہ حقوق محفوظ ہیں۔",

            footerTagline:
                "ہاتھ سے تیار کردہ سنگ مرمر کا فن • راجستھان، بھارت"

        }

    };


    /* =====================================================
       LANGUAGE NAMES
    ===================================================== */

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


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage(lang) {

        if (!translations[lang]) {

            lang = "en";

        }


        const currentTranslations =
            translations[lang];


        /* TEXT TRANSLATION */

        const elements =
            document.querySelectorAll("[data-translate]");


        elements.forEach(function (element) {

            const key =
                element.getAttribute("data-translate");


            if (
                currentTranslations[key] !== undefined
            ) {

                element.textContent =
                    currentTranslations[key];

            }

        });


        /* CURRENT LANGUAGE BUTTON */

        const currentLanguage =
            document.querySelector(
                "[data-current-language]"
            );


        if (currentLanguage) {

            currentLanguage.textContent =
                languageNames[lang];

        }


        /* HTML LANGUAGE */

        document.documentElement.lang = lang;


        /* RTL FOR URDU */

        if (lang === "ur") {

            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";

        }


        /* SAVE LANGUAGE */

        localStorage.setItem(
            "jmc-language",
            lang
        );

    }


    /* =====================================================
       LANGUAGE MENU
    ===================================================== */

    const languageButtons =
        document.querySelectorAll(
            ".language-menu button[data-lang]"
        );


    languageButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const lang =
                    button.getAttribute("data-lang");

                applyLanguage(lang);

            }
        );

    });


    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem("jmc-language");


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        applyLanguage(savedLanguage);

    } else {

        applyLanguage("en");

    }


    /* =====================================================
       BUTTON RIPPLE / CLICK FEEDBACK
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .header-btn"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.classList.add("clicked");

                setTimeout(function () {

                    button.classList.remove("clicked");

                }, 250);

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-current-year]");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});