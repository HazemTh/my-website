/* =========================================
   مشروع دليل فعاليات الجامعة الافتراضية
   الملف: assets/js/main.js
   ========================================= */


/* =========================================
   1. تحديث السنة في تذييل الصفحات
   ========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   2. البحث والفلترة في صفحة جميع الفعاليات
   ========================================= */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const filterDate = document.getElementById("eventDate");
const locationFilter = document.getElementById("locationFilter");
const resetFilters = document.getElementById("resetFilters");

const eventItems = document.querySelectorAll(".event-item");
const noResults = document.getElementById("noResults");

function filterEvents() {
    if (!eventItems.length) return;

    const searchValue = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const categoryValue = categoryFilter
        ? categoryFilter.value
        : "";

    const dateValue = filterDate
        ? filterDate.value
        : "";

    const locationValue = locationFilter
        ? locationFilter.value.trim().toLowerCase()
        : "";

    let visibleCount = 0;

    eventItems.forEach((item) => {
        const title = (
            item.dataset.title ||
            item.querySelector(".card-title")?.textContent ||
            item.textContent
        ).toLowerCase();

        const category = item.dataset.category || "";
        const date = item.dataset.date || "";
        const location = (
            item.dataset.location ||
            item.textContent
        ).toLowerCase();

        const matchesSearch = title.includes(searchValue);

        const matchesCategory =
            categoryValue === "" || category === categoryValue;

        const matchesDate =
            dateValue === "" || date === dateValue;

        const matchesLocation =
            locationValue === "" || location.includes(locationValue);

        const shouldShow =
            matchesSearch &&
            matchesCategory &&
            matchesDate &&
            matchesLocation;

        item.classList.toggle("d-none", !shouldShow);

        if (shouldShow) {
            visibleCount++;
        }
    });
    if (noResults) {
        noResults.classList.toggle("d-none", visibleCount !== 0);
    }
}

if (searchInput) {
    searchInput.addEventListener("input", filterEvents);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterEvents);
}

if (filterDate) {
    filterDate.addEventListener("input", filterEvents);
}

if (locationFilter) {
    locationFilter.addEventListener("input", filterEvents);
}

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (categoryFilter) categoryFilter.value = "";
        if (filterDate) filterDate.value = "";
        if (locationFilter) locationFilter.value = "";

        filterEvents();
    });
}


/* =========================================
   3. بيانات الفعاليات
   لكل فعالية معرّف وبيانات مستقلة
   ========================================= */

const eventDetails = {

    culture: {
        title: "المهرجان الثقافي",
        category: "ثقافية",
        date: "15 تشرين الثاني 2026",
        dateISO: "2026-11-15",
        location: "حمص - سورية",
        mapLocation: "جامعة حمص",
        image: "assets/img/event-culture.jpg",
        mapImage: "assets/img/map.jpg",

        description:
            "فعالية ثقافية تجمع الطلاب في أجواء مليئة بالمعرفة والإبداع.",

        fullDescription:
            "يهدف المهرجان الثقافي إلى تعزيز التواصل بين الطلاب وتشجيعهم على التعبير عن مواهبهم واهتماماتهم الثقافية. يتضمن المهرجان مجموعة من الأنشطة والفقرات التي تتيح للطلاب تبادل الأفكار والخبرات والتعرف على ثقافات واهتمامات مختلفة.", objectives: [
                "تعزيز النشاط الثقافي والمعرفي بين الطلاب.",
                "تشجيع المواهب والإبداعات الطلابية.",
                "تنمية روح التعاون والتواصل بين المشاركين."
            ],

        activities:
            "يتضمن المهرجان فقرات ثقافية ومسابقات معرفية وعروضاً طلابية ومساحات للحوار وتبادل الأفكار.",

        audience:
            "طلاب الجامعة الافتراضية السورية والمهتمون بالأنشطة الثقافية.",

        gallery: [
            "assets/img/culture-1.jpg",
            "assets/img/culture-2.jpg",
            "assets/img/culture-3.jpg"
        ]
    },


    education: {
        title: "ورشة التعلم والتطوير",
        category: "تعليمية",
        date: "20 تشرين الثاني 2026",
        dateISO: "2026-11-20",
        location: "دمشق - سورية",
        mapLocation: "دمشق",
        image: "assets/img/event-education.jpg",
        mapImage: "",

        description:
            "ورشة تعليمية تهدف إلى تطوير مهارات الطلاب وتوسيع معارفهم.",

        fullDescription:
            "تقدم هذه الورشة فرصة للطلاب للتعرف على أساليب جديدة في التعلم وتطوير المهارات الأكاديمية والعملية. كما تساعد المشاركين على اكتساب خبرات مفيدة يمكن الاستفادة منها في الدراسة والحياة المهنية.",

        objectives: [
            "تطوير المهارات التعليمية والعملية.",
            "تعريف الطلاب بأساليب التعلم الحديثة.",
            "تشجيع التعلم المستمر وتبادل الخبرات."
        ],

        activities:
            "تتضمن الورشة عروضاً تعليمية ونقاشات تفاعلية وتطبيقات عملية وأنشطة جماعية.",

        audience:
            "طلاب الجامعة والمهتمون بالتعلم وتطوير المهارات.",

        gallery: [
            "assets/img/education-1.jpg",
            "assets/img/education-2.jpg",
            "assets/img/education-3.jpg"
        ]
    },


    sport: {
        title: "اليوم الرياضي الجامعي",
        category: "رياضية",
        date: "25 تشرين الثاني 2026",
        dateISO: "2026-11-25",
        location: "حمص - سورية",
        mapLocation: "جامعة حمص",
        image: "assets/img/event-sport.jpg",
        mapImage: "assets/img/map.jpg",

        description:
            "يوم رياضي يجمع الطلاب في مجموعة من الأنشطة والمسابقات الرياضية.",

        fullDescription:
            "يهدف اليوم الرياضي الجامعي إلى تشجيع الطلاب على ممارسة النشاط البدني وتعزيز الروح الرياضية والعمل الجماعي. يوفر اليوم فرصة للمشاركة في مسابقات وأنشطة رياضية متنوعة ضمن أجواء جامعية ممتعة.",

        objectives: [
            "تشجيع ممارسة الرياضة والنشاط البدني.",
            "تعزيز روح الفريق والتعاون بين الطلاب.",
            "نشر ثقافة المنافسة الإيجابية."
        ],

        activities:
            "يتضمن اليوم الرياضي مسابقات جماعية وألعاباً رياضية وأنشطة ترفيهية متنوعة.",

        audience:
            "طلاب الجامعة ومحبو الأنشطة الرياضية.",

        gallery: [
            "assets/img/sport-1.jpg",
            "assets/img/sport-2.jpg",
            "assets/img/sport-3.jpg"
        ]
    },


    music: {
        title: "الأمسية الموسيقية",
        category: "فنية",
        date: "28 تشرين الثاني 2026",
        dateISO: "2026-11-28",
        location: "حلب-سوريا",
        mapLocation: "حلب",
        image: "assets/img/event-music.jpg",
        mapImage: "",

        description:
            "أمسية فنية موسيقية تتيح للطلاب الاستمتاع بالمواهب والإبداعات الفنية.",

        fullDescription:
            "تجمع الأمسية الموسيقية الطلاب المهتمين بالفن والموسيقى في لقاء فني يسلط الضوء على المواهب الطلابية ويمنح المشاركين فرصة للاستمتاع بالعروض الموسيقية والتعرف على إبداعات زملائهم.",

        objectives: [
            "دعم المواهب الفنية والموسيقية لدى الطلاب.",
            "توفير مساحة للتعبير والإبداع.",
            "تعزيز التواصل من خلال الأنشطة الفنية."
        ],

        activities:
            "تتضمن الأمسية فقرات موسيقية وعروضاً فنية ومشاركات من أصحاب المواهب الطلابية.",

        audience:
            "طلاب الجامعة والمهتمون بالفن والموسيقى.",

        gallery: [
            "assets/img/music-1.jpg",
            "assets/img/music-2.jpg",
            "assets/img/music-3.jpg"
        ]

    }, family: {
        title: "الفعالية العائلية",
        category: "اجتماعية",
        date: "30 تشرين الثاني 2026",
        dateISO: "2026-11-30",
        location: "دمشق - سورية",
        mapLocation: "دمشق",
        image: "assets/img/event-family.jpg",
        mapImage: "",

        description:
            "فعالية اجتماعية تهدف إلى تعزيز التواصل والمشاركة ضمن أجواء ودية.",

        fullDescription:
            "تسعى الفعالية العائلية إلى خلق مساحة اجتماعية تجمع المشاركين في أجواء مريحة وممتعة، وتشجع على التواصل والتعارف والمشاركة في أنشطة جماعية تناسب مختلف الاهتمامات.",

        objectives: [
            "تعزيز التواصل والتعارف بين المشاركين.",
            "تنمية روح المشاركة والتعاون.",
            "توفير أجواء اجتماعية وترفيهية ممتعة."
        ],

        activities:
            "تتضمن الفعالية أنشطة ترفيهية وجماعية ومسابقات وفقرات تفاعلية.",

        audience:
            "طلاب الجامعة وأفراد المجتمع المهتمون بالأنشطة الاجتماعية.",

        gallery: [
            "assets/img/family-1.jpg",
            "assets/img/family-2.jpg",
            "assets/img/family-3.jpg"
        ]
    }

};


/* =========================================
   4. عرض تفاصيل الفعالية حسب المعرّف
   ========================================= */

const eventPage = document.getElementById("eventTitle");

if (eventPage) {

    // قراءة المعرّف الموجود في الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");

    // اختيار بيانات الفعالية المطلوبة
    const selectedEvent = eventDetails[eventId];

    if (!selectedEvent) {

        eventPage.textContent = "الفعالية غير موجودة";

        const description = document.getElementById("eventDescription");
        if (description) {
            description.textContent =
                "عذراً، لم نتمكن من العثور على الفعالية المطلوبة.";
        }

    } else {

        // عنوان الفعالية
        eventPage.textContent = selectedEvent.title;

        // التصنيف
        const categoryElement = document.getElementById("eventCategory");
        if (categoryElement) {
            categoryElement.textContent = selectedEvent.category;
        }

        // التاريخ
        const dateElement = document.getElementById("eventDate");
        if (dateElement) {
            dateElement.textContent = selectedEvent.date;
        }

        // المكان
        const locationElement = document.getElementById("eventLocation");
        if (locationElement) {
            locationElement.textContent = selectedEvent.location;
        }

        // الصورة الرئيسية
        const imageElement = document.getElementById("eventImage");
        if (imageElement) {
            imageElement.src = selectedEvent.image;
            imageElement.alt = selectedEvent.title;
        }

        // الوصف المختصر
        const descriptionElement =
            document.getElementById("eventDescription");

        if (descriptionElement) {
            descriptionElement.textContent = selectedEvent.description;
        }

        // الوصف الكامل
        const fullDescriptionElement =
            document.getElementById("eventFullDescription");

        if (fullDescriptionElement) {
            fullDescriptionElement.textContent =
                selectedEvent.fullDescription;
        }

        // أهداف الفعالية
        const objectivesElement =
            document.getElementById("eventObjectives");

        if (objectivesElement) {
            objectivesElement.innerHTML = "";

            selectedEvent.objectives.forEach((objective) => {
                const li = document.createElement("li");
                li.textContent = objective;
                objectivesElement.appendChild(li);
            });
        }

        // الأنشطة
        const activitiesElement =
            document.getElementById("eventActivities");

        if (activitiesElement) {
            activitiesElement.textContent = selectedEvent.activities;
        }

        // الفئة المستهدفة
        const audienceElement =
            document.getElementById("eventAudience"); if (audienceElement) {
                audienceElement.textContent = selectedEvent.audience;
            }

        // صور المعرض
        const galleryIds = [
            "galleryImage1",
            "galleryImage2",
            "galleryImage3"
        ];

        galleryIds.forEach((id, index) => {
            const galleryImage = document.getElementById(id);

            if (galleryImage && selectedEvent.gallery[index]) {
                galleryImage.src = selectedEvent.gallery[index];
                galleryImage.alt =
                    selectedEvent.title + " - صورة " + (index + 1);
            }
        });

        // الخريطة الثابتة لجميع الفعاليات

        const mapImage = document.getElementById("eventMapImage");
        const mapSection = document.getElementById("eventMapSection");

        if (mapImage) {
            mapImage.src = "assets/img/map.jpg";
            mapImage.alt = "خريطة موقع الفعالية";
        }

        if (mapSection) {
            mapSection.classList.remove("d-none");
        }
        // زر إضافة الفعالية إلى التقويم
        const calendarButton = document.getElementById("addToCalendar");

        if (calendarButton) {
            calendarButton.addEventListener("click", () => {

                const startDate = selectedEvent.dateISO.replace(/-/g, "");

                const calendarContent = [
                    "BEGIN:VCALENDAR",
                    "VERSION:2.0",
                    "BEGIN:VEVENT",
                    "SUMMARY:" + selectedEvent.title,
                    "DTSTART;VALUE=DATE:" + startDate,
                    "DESCRIPTION:" + selectedEvent.description,
                    "LOCATION:" + selectedEvent.location,
                    "END:VEVENT",
                    "END:VCALENDAR"
                ].join("\r\n");

                const blob = new Blob(
                    [calendarContent],
                    { type: "text/calendar;charset=utf-8" }
                );

                const downloadLink = document.createElement("a");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = "event.ics";

                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                URL.revokeObjectURL(downloadLink.href);
            });
        }

        // زر مشاركة الفعالية
        const shareButton = document.getElementById("shareEvent");

        if (shareButton) {
            shareButton.addEventListener("click", async () => {

                const shareData = {
                    title: selectedEvent.title,
                    text: selectedEvent.description,
                    url: window.location.href
                };

                if (navigator.share) {
                    try {
                        await navigator.share(shareData);
                    } catch (error) {
                        // المستخدم أغلق نافذة المشاركة
                    }

                } else if (navigator.clipboard) {
                    try {
                        await navigator.clipboard.writeText(
                            window.location.href
                        );

                        alert("تم نسخ رابط الفعالية بنجاح.");

                    } catch (error) {
                        alert("تعذر نسخ الرابط.");
                    }

                } else {
                    alert("يمكنك نسخ رابط الصفحة من شريط العنوان.");
                }
            });
        }
    }
}


/* =========================================
   5. التحقق من نموذج التواصل
   ========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        } alert("تم إرسال الرسالة بنجاح! شكراً لتواصلك معنا.");

        contactForm.reset();
    });
}