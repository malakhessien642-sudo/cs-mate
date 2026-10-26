"use strict";

/* =========================================
   CS MATE
   PART 1 — App setup and saved preferences
========================================= */

const CSMate = {
  appName: "CS MATE",
  version: "1.0.0",

  settings: {
    language: "ar",
    theme: "dark"
  },

  storageKeys: {
    language: "csmate_language",
    theme: "csmate_theme",
    progress: "csmate_progress",
    bookmarks: "csmate_bookmarks",
    quizResults: "csmate_quiz_results"
  }
};

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  Array.from(parent.querySelectorAll(selector));

function readSavedData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    return saved === null
      ? fallback
      : JSON.parse(saved);
  } catch (error) {
    console.warn("Could not read saved data:", key);
    return fallback;
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

    return true;
  } catch (error) {
    console.warn("Could not save data:", key);
    return false;
  }
}

console.info("CS MATE is initializing...");/* =========================================
   CS MATE — PART 2
   Course catalog
========================================= */

const COURSES = [
  {
    id: "csharp",
    name: {
      ar: "C#",
      en: "C#"
    },
    category: "programming",
    icon: "C#",
    color: "#a855f7",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "تعلّم أساسيات C# والبرمجة الكائنية وبناء التطبيقات.",
      en: "Learn C# fundamentals, object-oriented programming, and application development."
    },
    lessons: 20
  },

  {
    id: "python",
    name: {
      ar: "بايثون",
      en: "Python"
    },
    category: "programming",
    icon: "Py",
    color: "#38bdf8",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "ابدأ بالمتغيرات والشروط والحلقات، ثم انتقل إلى موضوعات أكثر تقدمًا.",
      en: "Start with variables, conditions, and loops, then explore advanced topics."
    },
    lessons: 20
  },

  {
    id: "javascript",
    name: {
      ar: "جافاسكريبت",
      en: "JavaScript"
    },
    category: "web",
    icon: "JS",
    color: "#facc15",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "اجعل صفحات الويب تفاعلية وتعلّم التعامل مع البيانات والأحداث.",
      en: "Build interactive websites and learn data handling and events."
    },
    lessons: 20
  },

  {
    id: "html",
    name: {
      ar: "HTML",
      en: "HTML"
    },
    category: "web",
    icon: "H5",
    color: "#fb923c",
    level: {
      ar: "مبتدئ",
      en: "Beginner"
    },
    description: {
      ar: "تعلّم بناء هيكل صفحات الويب والعناوين والروابط والنماذج.",
      en: "Learn webpage structure, headings, links, and forms."
    },
    lessons: 12
  },

  {
    id: "css",
    name: {
      ar: "CSS",
      en: "CSS"
    },
    category: "web",
    icon: "CS",
    color: "#60a5fa",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "نسّق صفحات الويب وتعلّم الألوان والتخطيطات والتصميم المتجاوب.",
      en: "Style webpages with colors, layouts, and responsive design."
    },
    lessons: 16
  },

  {
    id: "sql",
    name: {
      ar: "SQL",
      en: "SQL"
    },
    category: "database",
    icon: "DB",
    color: "#34d399",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "تعلّم الاستعلام عن البيانات وإضافتها وتعديلها وتصميم الجداول.",
      en: "Query, insert, and update data while learning database tables."
    },
    lessons: 16
  },

  {
    id: "java",
    name: {
      ar: "جافا",
      en: "Java"
    },
    category: "programming",
    icon: "Jv",
    color: "#f87171",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "تعلّم أساسيات Java والكلاسات والأوبجكت والبرمجة الكائنية.",
      en: "Learn Java fundamentals, classes, objects, and OOP."
    },
    lessons: 20
  },

  {
    id: "php",
    name: {
      ar: "PHP",
      en: "PHP"
    },
    category: "web",
    icon: "PHP",
    color: "#a78bfa",
    level: {
      ar: "مبتدئ إلى متقدم",
      en: "Beginner to Advanced"
    },
    description: {
      ar: "تعلّم أساسيات PHP والتعامل مع النماذج والبيانات على الخادم.",
      en: "Learn PHP fundamentals, form handling, and server-side data."
    },
    lessons: 18
  }
];

console.info(
  `CS MATE: ${COURSES.length} courses registered.`
);/* =========================================
   CS MATE — PART 3
   Render course cards
========================================= */

function getCurrentLanguage() {
  return CSMate.settings.language;
}

function getCourseText(value) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[getCurrentLanguage()] ?? "";
}

function renderCourses(courseList = COURSES) {
  const grid = $("#coursesGrid");
  const count = $("#courseCount");
  const emptyState = $("#emptyState");

  if (!grid) {
    console.warn("Courses grid was not found.");
    return;
  }

  const language = getCurrentLanguage();

  grid.innerHTML = courseList.map((course) => {
    const name = getCourseText(course.name);
    const description = getCourseText(course.description);
    const level = getCourseText(course.level);

    const lessonText = language === "ar"
      ? `${course.lessons} درس`
      : `${course.lessons} lessons`;

    const openText = language === "ar"
      ? "ابدأ التعلم ←"
      : "Start learning →";

    return `
      <article
        class="course-card"
        data-course-id="${course.id}"
        style="--course-color: ${course.color}"
      >
        <div class="course-card-top">
          <span class="course-icon">${course.icon}</span>

          <span class="course-level">
            ${level}
          </span>
        </div>

        <h3>${name}</h3>

        <p class="course-card-description">
          ${description}
        </p>

        <div class="course-card-footer">
          <span class="course-lessons">
            ${lessonText}
          </span>

          <button
            class="course-open-button"
            type="button"
            data-open-course="${course.id}"
          >
            ${openText}
          </button>
        </div>
      </article>
    `;
  }).join("");

  if (count) {
    count.textContent = language === "ar"
      ? `${courseList.length} مسارات`
      : `${courseList.length} courses`;
  }

  if (emptyState) {
    emptyState.hidden = courseList.length !== 0;
  }
}

console.info("CS MATE course renderer is ready.");/* =========================================
   CS MATE — PART 4
   Course search and category filters
========================================= */

function filterCourses() {
  const searchInput = $("#courseSearch");
  const categorySelect = $("#courseFilter");

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categorySelect
    ? categorySelect.value
    : "all";

  const filteredCourses = COURSES.filter((course) => {
    const searchableText = [
      getCourseText(course.name),
      getCourseText(course.description),
      getCourseText(course.level),
      course.id,
      course.category
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderCourses(filteredCourses);
}

function initializeCourseFilters() {
  const searchInput = $("#courseSearch");
  const categorySelect = $("#courseFilter");

  if (searchInput) {
    searchInput.addEventListener("input", filterCourses);
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", filterCourses);
  }
}

console.info("CS MATE course filters are ready.");/* =========================================
   CS MATE — PART 5
   Arabic and English language system
========================================= */

const TRANSLATIONS = {
  ar: {
    navHome: "الرئيسية",
    navCourses: "لغات البرمجة",
    navRoadmap: "خطة التعلم",
    navAbout: "عن المنصة",

    heroBadge: "رحلتك إلى عالم البرمجة تبدأ هنا",
    heroTitle1: "فكّر بالكود.",
    heroTitle2: "وابنِ مستقبلك.",
    heroDescription:
      "تعلّم البرمجة من الصفر من خلال دروس مفصلة، وأمثلة عملية، وتدريبات تساعدك على بناء مهاراتك خطوة بخطوة.",
    heroStart: "ابدأ رحلتك البرمجية",
    heroExplore: "استكشف خطة التعلم",

    coursesKicker: "YOUR LEARNING LIBRARY",
    coursesTitle: "استكشف لغات البرمجة",
    coursesDescription:
      "اختر مسارك، وتعلّم من الأساسيات إلى الموضوعات المتقدمة.",
    searchPlaceholder: "ابحث عن لغة برمجة...",
    filterAll: "كل المسارات",
    filterProgramming: "برمجة",
    filterWeb: "تطوير الويب",
    filterDatabase: "قواعد البيانات",
    emptyTitle: "لم نعثر على نتائج",
    emptyDescription: "جرّب البحث بكلمات أخرى.",

    roadmapKicker: "YOUR NEXT STEP",
    roadmapTitle: "ابدأ رحلتك بشكل صحيح",
    roadmapDescription:
      "تعلّم الأساسيات، وطبّق ما تتعلمه، ثم ابنِ مشروعاتك الخاصة.",
    stepOneTitle: "تعلّم الأساسيات",
    stepOneDescription:
      "افهم المتغيرات والشروط والحلقات والدوال قبل الانتقال إلى الموضوعات المتقدمة.",
    stepTwoTitle: "اكتب الكود بنفسك",
    stepTwoDescription:
      "جرّب الأمثلة، وحلّ التمارين، وافهم الأخطاء لتثبيت المفاهيم.",
    stepThreeTitle: "ابنِ مشروعات حقيقية",
    stepThreeDescription:
      "طبّق ما تعلمته في مشروعات صغيرة ثم انتقل تدريجيًا إلى مشروعات أكبر.",

    aboutKicker: "LEARN WITH PURPOSE",
    aboutTitle: "المعرفة الحقيقية تبدأ بالفهم والتطبيق.",
    aboutDescription:
      "CS MATE منصة تعليمية تهدف إلى تنظيم رحلة تعلم البرمجة، من المفاهيم الأساسية إلى التطبيقات العملية، من خلال شروحات مفصلة وأمثلة وتدريبات تساعدك على التقدم بثقة.",
    aboutButton: "اكتشف المسارات",
    footerText: "تعلّم اليوم، واصنع حلول الغد."
  },

  en: {
    navHome: "Home",
    navCourses: "Programming",
    navRoadmap: "Learning Roadmap",
    navAbout: "About",

    heroBadge: "Your journey into programming starts here",
    heroTitle1: "Think in code.",
    heroTitle2: "Build your future.",
    heroDescription:
      "Learn programming from scratch with detailed lessons, practical examples, and exercises that help you build your skills step by step.",
    heroStart: "Start Learning",
    heroExplore: "Explore the Roadmap",

    coursesKicker: "YOUR LEARNING LIBRARY",
    coursesTitle: "Explore Programming Languages",
    coursesDescription:
      "Choose your path and learn from fundamentals to advanced topics.",
    searchPlaceholder: "Search programming languages...",
    filterAll: "All Tracks",
    filterProgramming: "Programming",
    filterWeb: "Web Development",
    filterDatabase: "Databases",
    emptyTitle: "No results found",
    emptyDescription: "Try searching with different keywords.",

    roadmapKicker: "YOUR NEXT STEP",
    roadmapTitle: "Start Your Journey the Right Way",
    roadmapDescription:
      "Learn the fundamentals, practice what you learn, and build your own projects.",
    stepOneTitle: "Learn the Fundamentals",
    stepOneDescription:
      "Understand variables, conditions, loops, and functions before moving to advanced topics.",
    stepTwoTitle: "Write Code Yourself",
    stepTwoDescription:
      "Try examples, solve exercises, and understand errors to strengthen your knowledge.",
    stepThreeTitle: "Build Real Projects",
    stepThreeDescription:
      "Apply your knowledge to small projects before gradually moving to larger ones.",

    aboutKicker: "LEARN WITH PURPOSE",
    aboutTitle: "Real knowledge begins with understanding and practice.",
    aboutDescription:
      "CS MATE organizes your programming journey from fundamentals to practical applications through detailed explanations, examples, and exercises.",
    aboutButton: "Explore Tracks",
    footerText: "Learn today. Build tomorrow."
  }
};

function applyTranslations() {
  const language = getCurrentLanguage();
  const dictionary = TRANSLATIONS[language];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  const languageButton = $("#languageToggle");

  if (languageButton) {
    languageButton.textContent = language === "ar" ? "EN" : "عربي";
  }

  renderCourses();
}

function toggleLanguage() {
  const nextLanguage =
    getCurrentLanguage() === "ar" ? "en" : "ar";

  CSMate.settings.language = nextLanguage;

  saveData(
    CSMate.storageKeys.language,
    nextLanguage
  );

  applyTranslations();
}

function initializeLanguage() {
  const savedLanguage = readSavedData(
    CSMate.storageKeys.language,
    "ar"
  );

  CSMate.settings.language =
    savedLanguage === "en" ? "en" : "ar";

  const languageButton = $("#languageToggle");

  if (languageButton) {
    languageButton.addEventListener(
      "click",
      toggleLanguage
    );
  }

  applyTranslations();
}

console.info("CS MATE language system is ready.");/* =========================================
   CS MATE — PART 6
   Dark and light theme
========================================= */

function applyTheme() {
  const theme = CSMate.settings.theme;

  document.body.classList.toggle(
    "light-theme",
    theme === "light"
  );

  const themeIcon = $("#themeIcon");
  const themeButton = $("#themeToggle");

  if (themeIcon) {
    themeIcon.textContent =
      theme === "dark" ? "☀️" : "🌙";
  }

  if (themeButton) {
    const language = getCurrentLanguage();

    themeButton.setAttribute(
      "aria-label",
      language === "ar"
        ? theme === "dark"
          ? "تغيير الوضع إلى الفاتح"
          : "تغيير الوضع إلى الداكن"
        : theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
    );
  }
}

function toggleTheme() {
  CSMate.settings.theme =
    CSMate.settings.theme === "dark"
      ? "light"
      : "dark";

  saveData(
    CSMate.storageKeys.theme,
    CSMate.settings.theme
  );

  applyTheme();
}

function initializeTheme() {
  const savedTheme = readSavedData(
    CSMate.storageKeys.theme,
    "dark"
  );

  CSMate.settings.theme =
    savedTheme === "light" ? "light" : "dark";

  const themeButton = $("#themeToggle");

  if (themeButton) {
    themeButton.addEventListener(
      "click",
      toggleTheme
    );
  }

  applyTheme();
}

console.info("CS MATE theme system is ready.");/* =========================================
   CS MATE — PART 7
   Learning progress and bookmarks
========================================= */

const LearningData = {
  progress: readSavedData(
    CSMate.storageKeys.progress,
    {}
  ),

  bookmarks: readSavedData(
    CSMate.storageKeys.bookmarks,
    []
  ),

  quizResults: readSavedData(
    CSMate.storageKeys.quizResults,
    {}
  )
};

function isLessonCompleted(lessonId) {
  return LearningData.progress[lessonId] === true;
}

function toggleLessonCompleted(lessonId) {
  if (!lessonId) return;

  LearningData.progress[lessonId] =
    !isLessonCompleted(lessonId);

  saveData(
    CSMate.storageKeys.progress,
    LearningData.progress
  );

  return isLessonCompleted(lessonId);
}

function isBookmarked(itemId) {
  return LearningData.bookmarks.includes(itemId);
}

function toggleBookmark(itemId) {
  if (!itemId) return;

  if (isBookmarked(itemId)) {
    LearningData.bookmarks =
      LearningData.bookmarks.filter(
        (savedId) => savedId !== itemId
      );
  } else {
    LearningData.bookmarks.push(itemId);
  }

  saveData(
    CSMate.storageKeys.bookmarks,
    LearningData.bookmarks
  );

  return isBookmarked(itemId);
}

function getCompletedLessonsCount() {
  return Object.values(
    LearningData.progress
  ).filter(Boolean).length;
}

function getBookmarksCount() {
  return LearningData.bookmarks.length;
}

function getLearningStats() {
  return {
    completedLessons: getCompletedLessonsCount(),
    bookmarks: getBookmarksCount()
  };
}

console.info("CS MATE learning data is ready.");/* =========================================
   CS MATE — PART 8
   Quiz scoring and saved results
========================================= */

function calculateQuizResult(questions, answers) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return {
      total: 0,
      correct: 0,
      incorrect: 0,
      percentage: 0,
      passed: false
    };
  }

  let correct = 0;

  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });

  const total = questions.length;
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return {
    total,
    correct,
    incorrect,
    percentage,
    passed: percentage >= 70
  };
}

function saveQuizResult(quizId, result) {
  if (!quizId || !result) return false;

  LearningData.quizResults[quizId] = {
    ...result,
    completedAt: new Date().toISOString()
  };

  return saveData(
    CSMate.storageKeys.quizResults,
    LearningData.quizResults
  );
}

function getQuizResult(quizId) {
  return LearningData.quizResults[quizId] ?? null;
}

function getQuizStats() {
  const results = Object.values(
    LearningData.quizResults
  );

  if (results.length === 0) {
    return {
      quizzesCompleted: 0,
      averageScore: 0
    };
  }

  const totalScore = results.reduce(
    (sum, result) => sum + result.percentage,
    0
  );

  return {
    quizzesCompleted: results.length,
    averageScore: Math.round(
      totalScore / results.length
    )
  };
}

console.info("CS MATE quiz system is ready.");/* =========================================
   CS MATE — PART 9
   Course navigation
========================================= */

const CourseNavigation = {
  currentCourseId: null,

  open(courseId) {
    const course = COURSES.find(
      (item) => item.id === courseId
    );

    if (!course) {
      console.warn("Course not found:", courseId);
      return;
    }

    this.currentCourseId = courseId;

    document.dispatchEvent(
      new CustomEvent("csmate:courseopen", {
        detail: { course }
      })
    );
  },

  close() {
    this.currentCourseId = null;

    document.dispatchEvent(
      new CustomEvent("csmate:courseclose")
    );
  },

  getCurrentCourse() {
    return COURSES.find(
      (course) => course.id === this.currentCourseId
    ) ?? null;
  }
};

function initializeCourseNavigation() {
  const grid = $("#coursesGrid");

  if (!grid) return;

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(
      "[data-open-course]"
    );

    if (!button) return;

    const courseId = button.dataset.openCourse;

    CourseNavigation.open(courseId);
  });
}

console.info("CS MATE course navigation is ready.");/* =========================================
   CS MATE — PART 10
   Mobile navigation menu
========================================= */

function initializeMobileMenu() {
  const menuButton = $("#menuToggle");
  const navigation = $("#mainNav");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      getCurrentLanguage() === "ar"
        ? "فتح القائمة"
        : "Open menu"
    );
  }

  function toggleMenu() {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      getCurrentLanguage() === "ar"
        ? isOpen ? "إغلاق القائمة" : "فتح القائمة"
        : isOpen ? "Close menu" : "Open menu"
    );
  }

  menuButton.addEventListener("click", toggleMenu);

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      navigation.contains(event.target) ||
      menuButton.contains(event.target);

    if (!clickedInsideMenu) {
      closeMenu();
    }
  });
}

console.info("CS MATE mobile navigation is ready.");/* =========================================
   CS MATE — PART 11
   Footer year and smooth navigation
========================================= */

function initializeFooter() {
  const yearElement = $("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initializeSmoothNavigation() {
  const navigationLinks = $$(
    'a[href^="#"]'
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = $(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (targetId.length > 1) {
        history.replaceState(null, "", targetId);
      }
    });
  });
}

console.info("CS MATE navigation helpers are ready.");
/* =========================================
   CS MATE — PART 12
   Application initialization
========================================= */

function initializeApp() {
  console.info("Starting CS MATE...");

  initializeTheme();
  initializeLanguage();
  initializeCourseFilters();
  initializeCourseNavigation();
  initializeMobileMenu();
  initializeFooter();
  initializeSmoothNavigation();

  renderCourses();

  console.info("CS MATE is ready!");
}

document.addEventListener(
  "DOMContentLoaded",
  initializeApp,
  { once: true }
);
