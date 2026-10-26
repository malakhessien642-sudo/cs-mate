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

/* =========================================
   CS MATE — PART 9
   Course navigation and lesson opening
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

    if (courseId === "csharp") {
      renderCourseLessonList(courseId);
return;
    }

    const language = getCurrentLanguage();

    alert(
      language === "ar"
        ? "دروس هذا الكورس قيد الإعداد."
        : "Lessons for this course are being prepared."
    );
  },

  close() {
    this.currentCourseId = null;

    const viewer = $("#lessonViewer");

    if (viewer) {
      viewer.hidden = true;
    }
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

    CourseNavigation.open(
      button.dataset.openCourse
    );
  });
}

console.info("CS MATE course navigation is ready.");


    
  /* =========================================
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

/* =========================================
   CS MATE — PART 13
   C# Course: Real lesson content
========================================= */

const CSHARP_LESSONS = [
  {
    id: "csharp-01",
    title: {
      ar: "1. مقدمة إلى البرمجة و C#",
      en: "1. Introduction to Programming and C#"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: `البرمجة هي عملية كتابة تعليمات واضحة للحاسوب حتى ينفذ مهمة معينة.

لغة C# (تُنطق سي شارب) لغة برمجة قوية من تطوير Microsoft، وتُستخدم في تطبيقات سطح المكتب والويب والألعاب والأنظمة المختلفة.

قبل كتابة الكود، نحتاج إلى فهم ثلاثة مفاهيم:
1. Source Code: التعليمات التي يكتبها المبرمج.
2. Compiler: أداة تحوّل الكود إلى صيغة يستطيع النظام تشغيلها.
3. Output: النتيجة التي تظهر بعد تنفيذ البرنامج.

في تطبيقات .NET، يُترجم كود C# عادةً إلى Intermediate Language، ثم تتولى بيئة .NET تشغيله.

أول برنامج سنكتبه سيعرض رسالة على الشاشة.`,
      en: `Programming is the process of writing instructions that tell a computer how to perform a task.

C# is a modern programming language developed by Microsoft. It is used for web applications, desktop software, games, and many other systems.

Three important concepts:
1. Source code: Instructions written by a programmer.
2. Compiler: A tool that translates source code into an executable intermediate representation.
3. Output: The result produced by a running program.

In .NET applications, C# code is typically compiled into Intermediate Language, which the .NET runtime executes.

Our first program will display a message.`
    },
    code: `Console.WriteLine("Hello, World!");`,
    codeExplanation: {
      ar: `Console تتيح التعامل مع نافذة الإدخال والإخراج.
WriteLine تطبع النص ثم تنتقل إلى سطر جديد.
النص المكتوب بين علامتي الاقتباس هو الرسالة التي ستظهر.`,
      en: `Console provides access to console input and output.
WriteLine prints text and moves to a new line.
The quoted text is the message displayed to the user.`
    },
    commonMistakes: {
      ar: [
        "نسيان علامة ; في نهاية التعليمة عند الحاجة إليها.",
        "نسيان علامتي الاقتباس حول النص."
      ],
      en: [
        "Forgetting the semicolon where required.",
        "Forgetting quotation marks around text."
      ]
    },
    exercise: {
      ar: "عدّلي البرنامج ليطبع اسمك في سطر، وعبارة I am learning C# في سطر آخر.",
      en: "Modify the program to print your name on one line and I am learning C# on another."
    },
    summary: {
      ar: "البرمجة هي إعطاء الحاسوب تعليمات. C# لغة متعددة الاستخدامات، وConsole.WriteLine تُستخدم لطباعة النص.",
      en: "Programming means giving instructions to a computer. C# is a versatile language, and Console.WriteLine prints text."
    }
  },

  {
    id: "csharp-02",
    title: {
      ar: "2. المتغيرات وأنواع البيانات",
      en: "2. Variables and Data Types"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: `المتغير (Variable) اسم يشير إلى مكان تُخزَّن فيه قيمة أثناء تشغيل البرنامج.

لكل متغير نوع بيانات يحدد نوع القيم التي يمكنه تخزينها.

أهم الأنواع الأساسية:
• int: للأعداد الصحيحة.
• double: للأعداد العشرية.
• decimal: مناسب للحسابات المالية التي تحتاج دقة عشرية.
• char: لحرف واحد.
• string: للنصوص.
• bool: لقيمة منطقية، إما true أو false.

عند تعريف متغير نكتب نوعه ثم اسمه، ويمكننا إسناد قيمة إليه باستخدام علامة =.`,
      en: `A variable is a named storage location used to hold a value while a program runs.

Every variable has a data type that determines what kind of value it can store.

Common types include:
• int: Whole numbers.
• double: Floating-point numbers.
• decimal: Decimal values often useful for financial calculations.
• char: A single character.
• string: Text.
• bool: A logical value, either true or false.

To declare a variable, write its type and name. Use = to assign a value.`
    },
    code: `int age = 19;
double temperature = 25.5;
string studentName = "Malak";
char grade = 'A';
bool isLearning = true;

Console.WriteLine(studentName);
Console.WriteLine(age);`,
    codeExplanation: {
      ar: `age متغير من النوع int.
temperature يخزن قيمة عشرية.
studentName يخزن نصًا بين علامتي اقتباس مزدوجتين.
grade يخزن حرفًا واحدًا بين علامتي اقتباس مفردتين.
isLearning يخزن قيمة منطقية.

تذكري أن علامة = في هذا المثال تُستخدم لإسناد قيمة للمتغير، وليست اختبارًا للمساواة.`,
      en: `age is an int variable.
temperature stores a decimal number.
studentName stores text in double quotes.
grade stores one character in single quotes.
isLearning stores a Boolean value.

Remember that = assigns a value; it does not test equality.`
    },
    commonMistakes: {
      ar: [
        "كتابة النصوص بين علامتي اقتباس مفردتين بدلًا من المزدوجتين.",
        "إسناد قيمة نصية إلى متغير رقمي دون تحويل مناسب.",
        "استخدام اسم متغير بطريقة مختلفة في الحروف الكبيرة والصغيرة."
      ],
      en: [
        "Using single quotes for a string instead of double quotes.",
        "Assigning text to a numeric variable without conversion.",
        "Changing the capitalization of a variable name."
      ]
    },
    exercise: {
      ar: "أنشئي متغيرًا لاسمك، ومتغيرًا لعمرك، ومتغيرًا يحدد هل تدرسين البرمجة أم لا، ثم اطبعي القيم.",
      en: "Create variables for your name, age, and whether you are studying programming, then print their values."
    },
    summary: {
      ar: "المتغير يخزن قيمة، ونوع البيانات يحدد طبيعة هذه القيمة. اختاري النوع المناسب للبيانات التي تتعاملين معها.",
      en: "A variable stores a value, and its data type determines the kind of value. Choose a suitable type for your data."
    }
  }
];

console.info(
  `CS MATE: ${CSHARP_LESSONS.length} C# lessons loaded.`
);

/* =========================================
   CS MATE — PART 14
   Lesson viewer interface
========================================= */

function createLessonViewer() {
  let viewer = $("#lessonViewer");

  if (viewer) {
    return viewer;
  }

  viewer = document.createElement("section");
  viewer.id = "lessonViewer";
  viewer.className = "lesson-viewer";
  viewer.hidden = true;

  viewer.setAttribute("aria-live", "polite");

  const courseSection = $("#coursesGrid");

  if (courseSection) {
    courseSection.parentElement.appendChild(viewer);
  } else {
    document.body.appendChild(viewer);
  }

  return viewer;
}

function renderLesson(lesson) {
  if (!lesson) return;

  const viewer = createLessonViewer();
  const language = getCurrentLanguage();

  const getText = (value) => {
    if (typeof value === "string") {
      return value;
    }

    return value?.[language] ?? value?.en ?? "";
  };

  const mistakes = getText(
    lesson.commonMistakes
  );

  const mistakeItems = (
    lesson.commonMistakes?.[language] ??
    lesson.commonMistakes?.en ??
    []
  );

  viewer.innerHTML = `
    <div class="lesson-header">
      <button
        type="button"
        id="closeLessonButton"
      >
        ${language === "ar" ? "← العودة للكورسات" : "← Back to courses"}
      </button>

      <p class="lesson-duration">
        ${lesson.duration}
      </p>

      <h2>${getText(lesson.title)}</h2>
    </div>

    <article class="lesson-section">
      <h3>${language === "ar" ? "شرح الدرس" : "Lesson Explanation"}</h3>
      <p class="lesson-text">${getText(lesson.explanation)}</p>
    </article>

    <article class="lesson-section">
      <h3>${language === "ar" ? "مثال عملي" : "Code Example"}</h3>

      <pre><code></code></pre>

      <button
        type="button"
        id="copyLessonCode"
      >
        ${language === "ar" ? "نسخ الكود" : "Copy Code"}
      </button>

      <p class="lesson-text">
        ${getText(lesson.codeExplanation)}
      </p>
    </article>

    <article class="lesson-section">
      <h3>${language === "ar" ? "أخطاء شائعة" : "Common Mistakes"}</h3>

      <ul class="lesson-mistakes">
        ${mistakeItems.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>

    <article class="lesson-section">
      <h3>${language === "ar" ? "تدريب" : "Exercise"}</h3>
      <p class="lesson-text">${getText(lesson.exercise)}</p>
    </article>

    <article class="lesson-section">
      <h3>${language === "ar" ? "ملخص الدرس" : "Lesson Summary"}</h3>
      <p class="lesson-text">${getText(lesson.summary)}</p>
    </article>

    <button
      type="button"
      id="completeLessonButton"
      data-lesson-id="${lesson.id}"
    >
      ${language === "ar" ? "✓ إكمال الدرس" : "✓ Mark as Completed"}
    </button>
  `;

  const codeElement = $("pre code", viewer);

  if (codeElement) {
    codeElement.textContent = lesson.code;
  }

  viewer.hidden = false;

  viewer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  $("#closeLessonButton", viewer)?.addEventListener(
    "click",
    () => {
      viewer.hidden = true;

      $("#coursesGrid")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  );

  $("#copyLessonCode", viewer)?.addEventListener(
    "click",
    async () => {
      try {
        await navigator.clipboard.writeText(lesson.code);

        $("#copyLessonCode", viewer).textContent =
          language === "ar" ? "تم نسخ الكود ✓" : "Code Copied ✓";
      } catch (error) {
        alert(
          language === "ar"
            ? "تعذر النسخ تلقائيًا. حددي الكود وانسخيه يدويًا."
            : "Copy failed. Select the code and copy it manually."
        );
      }
    }
  );

  $("#completeLessonButton", viewer)?.addEventListener(
    "click",
    (event) => {
      const button = event.currentTarget;

      const completed = toggleLessonCompleted(
        button.dataset.lessonId
      );

      button.textContent = completed
        ? language === "ar"
          ? "✓ تم إكمال الدرس"
          : "✓ Lesson Completed"
        : language === "ar"
          ? "✓ إكمال الدرس"
          : "✓ Mark as Completed";
    }
  );
}

console.info("CS MATE lesson viewer is ready.");

/* =========================================
   CS MATE — PART 15
   Connect C# course to its lessons
========================================= */

function openCourseLessons(courseId) {
  const course = COURSES.find(
    (item) => item.id === courseId
  );

  if (!course) return;

  if (courseId === "csharp") {
    const firstLesson = CSHARP_LESSONS[0];

    if (firstLesson) {
      renderLesson(firstLesson);
    }

    return;
  }

  const language = getCurrentLanguage();

  const message = language === "ar"
    ? "محتوى هذا الكورس قيد الإعداد. سنضيف دروسه تباعًا."
    : "This course content is being prepared. Lessons will be added soon.";

  alert(message);
}

function initializeLessonNavigation() {
  const grid = $("#coursesGrid");

  if (!grid) return;

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(
      "[data-open-course]"
    );

    if (!button) return;

    event.preventDefault();

    openCourseLessons(
      button.dataset.openCourse
    );
  });
}

console.info("CS MATE lesson navigation is ready.");
/* =========================================
   CS MATE — PART 16
   C# lesson list
========================================= */

function renderCourseLessonList(courseId) {
  const course = COURSES.find(
    (item) => item.id === courseId
  );

  if (!course) return;

  const language = getCurrentLanguage();

  const lessons = courseId === "csharp"
    ? CSHARP_LESSONS
    : [];

  const viewer = createLessonViewer();

  if (lessons.length === 0) {
    viewer.innerHTML = `
      <h2>
        ${language === "ar"
          ? "الدروس قيد الإعداد"
          : "Lessons coming soon"}
      </h2>

      <p>
        ${language === "ar"
          ? "سيُضاف محتوى هذا الكورس قريبًا."
          : "This course content will be added soon."}
      </p>

      <button id="closeLessonList" type="button">
        ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
      </button>
    `;

    viewer.hidden = false;

    $("#closeLessonList", viewer)?.addEventListener(
      "click",
      () => {
        viewer.hidden = true;
      }
    );

    viewer.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    return;
  }

  viewer.innerHTML = `
    <div class="lesson-header">
      <h2>
        ${language === "ar"
          ? "كورس C# — محتوى الدروس"
          : "C# Course — Lesson Contents"}
      </h2>

      <p>
        ${language === "ar"
          ? `عدد الدروس المتاحة: ${lessons.length}`
          : `Available lessons: ${lessons.length}`}
      </p>
    </div>

    <div class="lesson-list">
      ${lessons.map((lesson, index) => {
        const title = lesson.title[language] || lesson.title.en;

        const completed = isLessonCompleted(lesson.id);

        return `
          <button
            type="button"
            class="lesson-list-item"
            data-lesson-index="${index}"
          >
            <span>${completed ? "✓" : index + 1}</span>

            <span>${title}</span>

            <span>
              ${completed
                ? language === "ar" ? "مكتمل" : "Completed"
                : lesson.duration}
            </span>
          </button>
        `;
      }).join("")}
    </div>

    <button id="closeLessonList" type="button">
      ${language === "ar" ? "إغلاق الدروس" : "Close lessons"}
    </button>
  `;

  viewer.hidden = false;

  viewer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  $$(".lesson-list-item", viewer).forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.lessonIndex);

      const selectedLesson = lessons[index];

      if (selectedLesson) {
        renderLesson(selectedLesson);
      }
    });
  });

  $("#closeLessonList", viewer)?.addEventListener(
    "click",
    () => {
      viewer.hidden = true;
    }
  );
}

console.info("CS MATE lesson list is ready.");
/* =========================================
   CS MATE — PART 17
   Restore lesson navigation safely
========================================= */

(function connectCSMateLessonNavigation() {
  "use strict";

  function connectLessonButtons() {
    const grid = document.querySelector("#coursesGrid");

    if (!grid || grid.dataset.lessonNavigationFixed === "true") {
      return;
    }

    // Replace the grid to remove old click listeners.
    const cleanGrid = grid.cloneNode(true);
    grid.replaceWith(cleanGrid);

    cleanGrid.dataset.lessonNavigationFixed = "true";

    cleanGrid.addEventListener("click", function (event) {
      const button = event.target.closest("[data-open-course]");

      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      if (typeof CourseNavigation !== "undefined") {
        CourseNavigation.currentCourseId = button.dataset.openCourse;
      }

      renderCourseLessonList(button.dataset.openCourse);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      connectLessonButtons,
      { once: true }
    );
  } else {
    connectLessonButtons();
  }
})();

/* =========================================
   CS MATE — PART 18
   Full-screen learning interface
========================================= */

(function setupCSMateLearningScreen() {
  "use strict";

  function openLearningScreen() {
    const viewer = document.querySelector("#lessonViewer");

    if (!viewer) return;

    // Move the learning interface above the page.
    if (viewer.parentElement !== document.body) {
      document.body.appendChild(viewer);
    }

    viewer.classList.add("lesson-viewer");
    viewer.hidden = false;

    document.body.classList.add("cs-mate-learning-open");
    document.body.style.overflow = "hidden";
  }

  function closeLearningScreen() {
    const viewer = document.querySelector("#lessonViewer");

    if (viewer) {
      viewer.hidden = true;
    }

    document.body.classList.remove("cs-mate-learning-open");
    document.body.style.overflow = "";
  }

  // Keep the original lesson functions and enhance them.
  if (typeof window.renderCourseLessonList === "function") {
    const originalRenderCourseLessonList =
      window.renderCourseLessonList;

    window.renderCourseLessonList = function (courseId) {
      originalRenderCourseLessonList.call(this, courseId);
      openLearningScreen();
    };
  }

  if (typeof window.renderLesson === "function") {
    const originalRenderLesson = window.renderLesson;

    window.renderLesson = function (lesson) {
      originalRenderLesson.call(this, lesson);
      openLearningScreen();
    };
  }

  // Handle closing the learning screen.
  document.addEventListener("click", function (event) {
    const button = event.target.closest(
      "#closeLessonList, #closeLessonButton"
    );

    if (button) {
      closeLearningScreen();
    }
  });

  // Escape closes the learning screen.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const viewer = document.querySelector("#lessonViewer");

      if (viewer && !viewer.hidden) {
        closeLearningScreen();
      }
    }
  });
})();

/* =========================================
   CS MATE — PART 19
   Progress, Bookmarks & Lesson Navigation
========================================= */

(function setupCSMateLessonFeatures() {
  "use strict";

  const COMPLETED_KEY = "csmate_completed_lessons_v1";
  const BOOKMARKS_KEY = "csmate_bookmarked_lessons_v1";

  let activeCourseId = "csharp";

  function readStorage(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("CS MATE: Could not save progress.", error);
    }
  }

  function completedLessons() {
    return readStorage(COMPLETED_KEY);
  }

  function bookmarkedLessons() {
    return readStorage(BOOKMARKS_KEY);
  }

  function getLessons() {
    if (activeCourseId === "csharp") {
      return Array.isArray(window.CSHARP_LESSONS)
        ? window.CSHARP_LESSONS
        : [];
    }

    return [];
  }

  function getLanguage() {
    return typeof window.getCurrentLanguage === "function"
      ? window.getCurrentLanguage()
      : "en";
  }

  function getText(value) {
    const language = getLanguage();

    if (typeof value === "string") return value;

    return value?.[language] ?? value?.en ?? "";
  }

  function makeProgress() {
    const lessons = getLessons();
    const completed = completedLessons();

    const count = lessons.filter(
      (lesson) => completed.includes(lesson.id)
    ).length;

    const percent = lessons.length
      ? Math.round((count / lessons.length) * 100)
      : 0;

    return { count, total: lessons.length, percent };
  }

  function progressMarkup() {
    const language = getLanguage();
    const progress = makeProgress();

    return `
      <section class="lesson-progress">
        <div class="lesson-progress-info">
          <strong>
            ${language === "ar" ? "تقدمك في التعلم" : "Your Learning Progress"}
          </strong>
          <span>
            ${progress.count} / ${progress.total}
            ${language === "ar" ? "دروس مكتملة" : "lessons completed"}
            — ${progress.percent}%
          </span>
        </div>

        <div
          class="lesson-progress-track"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${progress.percent}"
          aria-label="${language === "ar" ? "نسبة إكمال الدروس" : "Lesson completion"}"
        >
          <div
            class="lesson-progress-fill"
            style="width: ${progress.percent}%"
          ></div>
        </div>
      </section>
    `;
  }

  function refreshProgress() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const existing = viewer.querySelector(".lesson-progress");

    if (existing) {
      existing.outerHTML = progressMarkup();
    }
  }

  function addProgressToList() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    if (!viewer.querySelector(".lesson-progress")) {
      const list = viewer.querySelector(".lesson-list");

      if (list) {
        list.insertAdjacentHTML("beforebegin", progressMarkup());
      } else {
        viewer.insertAdjacentHTML("afterbegin", progressMarkup());
      }
    } else {
      refreshProgress();
    }
  }

  function addLessonActions(lesson) {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !lesson) return;

    viewer.querySelector(".lesson-actions")?.remove();

    const language = getLanguage();
    const lessons = getLessons();
    const index = lessons.findIndex((item) => item.id === lesson.id);

    const bookmarks = bookmarkedLessons();
    const isBookmarked = bookmarks.includes(lesson.id);

    const actions = document.createElement("div");
    actions.className = "lesson-actions";

    actions.innerHTML = `
      <button type="button" data-action="back">
        ${language === "ar" ? "← قائمة الدروس" : "← Lesson List"}
      </button>

      <button
        type="button"
        data-action="previous"
        ${index <= 0 ? "disabled" : ""}
      >
        ${language === "ar" ? "الدرس السابق" : "Previous Lesson"}
      </button>

      <button
        type="button"
        data-action="bookmark"
        class="lesson-bookmark-button ${isBookmarked ? "is-bookmarked" : ""}"
        aria-pressed="${isBookmarked}"
      >
        ${isBookmarked
          ? (language === "ar" ? "★ في المفضلة" : "★ Bookmarked")
          : (language === "ar" ? "☆ أضف للمفضلة" : "☆ Bookmark")}
      </button>

      <button
        type="button"
        data-action="next"
        ${index < 0 || index >= lessons.length - 1 ? "disabled" : ""}
      >
        ${language === "ar" ? "الدرس التالي →" : "Next Lesson →"}
      </button>
    `;

    const progress = viewer.querySelector(".lesson-progress");

    if (progress) {
      progress.insertAdjacentElement("afterend", actions);
    } else {
      viewer.prepend(actions);
    }
  }

  function getCurrentLesson() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return null;

    const completeButton = viewer.querySelector("#completeLessonButton");
    if (!completeButton) return null;

    return getLessons().find(
      (lesson) => String(lesson.id) === completeButton.dataset.lessonId
    ) || null;
  }

  function showLesson(lesson) {
    if (lesson && typeof window.renderLesson === "function") {
      window.renderLesson(lesson);
    }
  }

  // Enhance the existing lesson list without replacing it.
  if (typeof window.renderCourseLessonList === "function") {
    const originalList = window.renderCourseLessonList;

    window.renderCourseLessonList = function (courseId) {
      activeCourseId = courseId;
      originalList.call(this, courseId);
      addProgressToList();
    };
  }

  // Enhance the existing lesson viewer.
  if (typeof window.renderLesson === "function") {
    const originalRenderLesson = window.renderLesson;

    window.renderLesson = function (lesson) {
      originalRenderLesson.call(this, lesson);

      if (!lesson) return;

      addProgressToList();
      addLessonActions(lesson);

      const completeButton = document.querySelector(
        "#lessonViewer #completeLessonButton"
      );

      if (completeButton) {
        const completed = completedLessons().includes(lesson.id);
        const language = getLanguage();

        completeButton.classList.toggle("is-completed", completed);
        completeButton.textContent = completed
          ? (language === "ar" ? "✓ تم إكمال الدرس" : "✓ Lesson Completed")
          : (language === "ar" ? "✓ إكمال الدرس" : "✓ Mark as Completed");
      }
    };
  }

  // Handle progress, bookmark, previous and next actions.
  document.addEventListener("click", function (event) {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !viewer.contains(event.target)) return;

    const actionButton = event.target.closest("[data-action]");

    if (actionButton) {
      const lesson = getCurrentLesson();
      const action = actionButton.dataset.action;
      const lessons = getLessons();

      if (action === "back") {
        if (typeof window.renderCourseLessonList === "function") {
          window.renderCourseLessonList(activeCourseId);
        }
        return;
      }

      if (!lesson) return;

      const index = lessons.findIndex(
        (item) => item.id === lesson.id
      );

      if (action === "previous" && index > 0) {
        showLesson(lessons[index - 1]);
        return;
      }

      if (action === "next" && index >= 0 && index < lessons.length - 1) {
        showLesson(lessons[index + 1]);
        return;
      }

      if (action === "bookmark") {
        const bookmarks = bookmarkedLessons();
        const exists = bookmarks.includes(lesson.id);

        writeStorage(
          BOOKMARKS_KEY,
          exists
            ? bookmarks.filter((id) => id !== lesson.id)
            : [...bookmarks, lesson.id]
        );

        addLessonActions(lesson);
        return;
      }
    }

    // The existing completion handler runs on the same click.
    if (event.target.closest("#completeLessonButton")) {
      window.setTimeout(function () {
        const button = viewer.querySelector("#completeLessonButton");
        if (!button) return;

        const id = button.dataset.lessonId;
        const completed = completedLessons();

        // Keep the existing completion state synchronized.
        if (typeof window.isLessonCompleted === "function") {
          const isDone = window.isLessonCompleted(id);
          const saved = completedLessons();

          if (isDone && !saved.includes(id)) {
            saved.push(id);
            writeStorage(COMPLETED_KEY, saved);
          } else if (!isDone && saved.includes(id)) {
            writeStorage(
              COMPLETED_KEY,
              saved.filter((item) => item !== id)
            );
          }
        }

        refreshProgress();
        addLessonActions(getCurrentLesson());
      }, 0);
    }
  });

  console.info("CS MATE learning features initialized.");
})();

/* =========================================
   CS MATE — PART 20
   Fix learning progress and navigation
========================================= */

(function fixCSMateLearningFeatures() {
  "use strict";

  let currentCourse = "csharp";

  function getLessons() {
    return typeof CSHARP_LESSONS !== "undefined"
      ? CSHARP_LESSONS
      : [];
  }

  function getCurrentLesson() {
    const viewer = document.querySelector("#lessonViewer");
    const button = viewer?.querySelector("#completeLessonButton");

    if (!button) return null;

    return getLessons().find(
      lesson => String(lesson.id) === button.dataset.lessonId
    ) || null;
  }

  function updateProgress() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const lessons = getLessons();
    const completed = lessons.filter(
      lesson => isLessonCompleted(lesson.id)
    ).length;

    const percent = lessons.length
      ? Math.round(completed / lessons.length * 100)
      : 0;

    const language = getCurrentLanguage();

    let progress = viewer.querySelector(".lesson-progress");

    if (!progress) {
      progress = document.createElement("section");
      progress.className = "lesson-progress";

      const list = viewer.querySelector(".lesson-list");
      const header = viewer.querySelector(".lesson-header");

      if (list) {
        list.before(progress);
      } else if (header) {
        header.after(progress);
      } else {
        viewer.prepend(progress);
      }
    }

    progress.innerHTML = `
      <div class="lesson-progress-info">
        <strong>
          ${language === "ar" ? "تقدمك في التعلم" : "Learning Progress"}
        </strong>
        <span>
          ${completed} / ${lessons.length}
          — ${percent}%
        </span>
      </div>
      <div class="lesson-progress-track"
           role="progressbar"
           aria-valuemin="0"
           aria-valuemax="100"
           aria-valuenow="${percent}">
        <div class="lesson-progress-fill"
             style="width:${percent}%"></div>
      </div>
    `;
  }

  function updateLessonActions(lesson) {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !lesson) return;

    viewer.querySelector(".lesson-actions")?.remove();

    const lessons = getLessons();
    const index = lessons.findIndex(item => item.id === lesson.id);
    const language = getCurrentLanguage();
    const bookmarked = isBookmarked(lesson.id);

    const actions = document.createElement("div");
    actions.className = "lesson-actions";

    actions.innerHTML = `
      <button type="button" data-fix-action="back">
        ${language === "ar" ? "← قائمة الدروس" : "← Lesson List"}
      </button>

      <button type="button" data-fix-action="previous"
        ${index <= 0 ? "disabled" : ""}>
        ${language === "ar" ? "السابق" : "Previous"}
      </button>

      <button type="button" data-fix-action="bookmark"
        class="lesson-bookmark-button ${bookmarked ? "is-bookmarked" : ""}">
        ${bookmarked
          ? (language === "ar" ? "★ في المفضلة" : "★ Bookmarked")
          : (language === "ar" ? "☆ أضف للمفضلة" : "☆ Bookmark")}
      </button>

      <button type="button" data-fix-action="next"
        ${index < 0 || index >= lessons.length - 1 ? "disabled" : ""}>
        ${language === "ar" ? "التالي →" : "Next →"}
      </button>
    `;

    const progress = viewer.querySelector(".lesson-progress");

    if (progress) {
      progress.after(actions);
    } else {
      viewer.prepend(actions);
    }
  }

  function refreshList() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    viewer.querySelectorAll(".lesson-list-item").forEach(button => {
      const lesson = getLessons()[Number(button.dataset.lessonIndex)];
      if (!lesson) return;

      const completed = isLessonCompleted(lesson.id);
      const number = button.querySelector("span:first-child");
      const status = button.querySelector("span:last-child");

      if (number) {
        number.textContent = completed
          ? "✓"
          : Number(button.dataset.lessonIndex) + 1;
      }

      if (status) {
        status.textContent = completed
          ? (getCurrentLanguage() === "ar" ? "مكتمل" : "Completed")
          : lesson.duration;
      }
    });
  }

  if (typeof window.renderCourseLessonList === "function") {
    const originalList = window.renderCourseLessonList;

    window.renderCourseLessonList = function(courseId) {
      currentCourse = courseId;
      originalList.call(this, courseId);
      updateProgress();
    };
  }

  if (typeof window.renderLesson === "function") {
    const originalRender = window.renderLesson;

    window.renderLesson = function(lesson) {
      originalRender.call(this, lesson);
      if (!lesson) return;

      updateProgress();
      updateLessonActions(lesson);
    };
  }

  // Capture our navigation buttons before older handlers.
  document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-fix-action]");
    if (!button) return;

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !viewer.contains(button)) return;

    const action = button.dataset.fixAction;
    const lesson = getCurrentLesson();
    const lessons = getLessons();

    event.preventDefault();
    event.stopImmediatePropagation();

    if (action === "back") {
      window.renderCourseLessonList(currentCourse);
      return;
    }

    if (!lesson) return;

    if (action === "bookmark") {
      toggleBookmark(lesson.id);
      updateLessonActions(lesson);
      return;
    }

    const index = lessons.findIndex(item => item.id === lesson.id);

    if (action === "previous" && index > 0) {
      window.renderLesson(lessons[index - 1]);
    }

    if (action === "next" && index >= 0 && index < lessons.length - 1) {
      window.renderLesson(lessons[index + 1]);
    }
  }, true);

  // Refresh progress after the original completion handler runs.
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#completeLessonButton")) return;

    window.setTimeout(function() {
      updateProgress();
      refreshList();

      const lesson = getCurrentLesson();
      if (lesson) updateLessonActions(lesson);
    }, 50);
  });

  console.info("CS MATE learning features fixed.");
})();

/* =========================================
   CS MATE — PART 20
   Fix real lesson data and actions
========================================= */

(function fixCSMateFeatures() {
  "use strict";

  function getLessons() {
    return typeof CSHARP_LESSONS !== "undefined"
      ? CSHARP_LESSONS
      : [];
  }

  function getActiveLesson() {
    const button = document.querySelector(
      "#lessonViewer #completeLessonButton"
    );

    if (!button) return null;

    return getLessons().find(
      lesson => String(lesson.id) === button.dataset.lessonId
    ) || null;
  }

  function updateProgress() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const lessons = getLessons();
    const completed = lessons.filter(
      lesson => isLessonCompleted(lesson.id)
    ).length;

    const percent = lessons.length
      ? Math.round(completed / lessons.length * 100)
      : 0;

    let progress = viewer.querySelector(".lesson-progress");

    if (!progress) {
      progress = document.createElement("section");
      progress.className = "lesson-progress";

      const header = viewer.querySelector(".lesson-header");
      if (header) header.after(progress);
      else viewer.prepend(progress);
    }

    const language = getCurrentLanguage();

    progress.innerHTML = `
      <div class="lesson-progress-info">
        <strong>${language === "ar" ? "تقدمك في التعلم" : "Learning Progress"}</strong>
        <span>${completed} / ${lessons.length} — ${percent}%</span>
      </div>
      <div class="lesson-progress-track">
        <div class="lesson-progress-fill"
             style="width:${percent}%"></div>
      </div>
    `;

    viewer.querySelectorAll(".lesson-list-item").forEach(item => {
      const lesson = lessons[Number(item.dataset.lessonIndex)];
      if (!lesson) return;

      const done = isLessonCompleted(lesson.id);
      const spans = item.querySelectorAll("span");

      if (spans[0]) spans[0].textContent = done
        ? "✓"
        : Number(item.dataset.lessonIndex) + 1;

      if (spans[2]) spans[2].textContent = done
        ? (language === "ar" ? "مكتمل" : "Completed")
        : lesson.duration;
    });
  }

  function updateActions(lesson) {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !lesson) return;

    const actions = viewer.querySelector(".lesson-actions");
    if (!actions) return;

    const language = getCurrentLanguage();
    const lessons = getLessons();
    const index = lessons.findIndex(item => item.id === lesson.id);
    const saved = isBookmarked(lesson.id);

    const previous = actions.querySelector('[data-action="previous"]');
    const next = actions.querySelector('[data-action="next"]');
    const bookmark = actions.querySelector('[data-action="bookmark"]');

    if (previous) previous.disabled = index <= 0;
    if (next) next.disabled = index < 0 || index >= lessons.length - 1;

    if (bookmark) {
      bookmark.textContent = saved
        ? (language === "ar" ? "★ في المفضلة" : "★ Bookmarked")
        : (language === "ar" ? "☆ أضف للمفضلة" : "☆ Bookmark");

      bookmark.classList.toggle("is-bookmarked", saved);
    }
  }

  // Rebuild the progress display whenever a lesson screen opens.
  const originalList = window.renderCourseLessonList;
  if (typeof originalList === "function") {
    window.renderCourseLessonList = function(courseId) {
      const result = originalList.apply(this, arguments);
      updateProgress();
      return result;
    };
  }

  const originalRender = window.renderLesson;
  if (typeof originalRender === "function") {
    window.renderLesson = function(lesson) {
      const result = originalRender.apply(this, arguments);
      updateProgress();
      updateActions(lesson);
      return result;
    };
  }

  // Use the actual lesson list and original saved-data functions.
  document.addEventListener("click", function(event) {
    const button = event.target.closest(
      "#lessonViewer .lesson-actions [data-action]"
    );

    if (!button) return;

    const viewer = document.querySelector("#lessonViewer");
    const lesson = getActiveLesson();
    const lessons = getLessons();

    event.preventDefault();
    event.stopImmediatePropagation();

    const action = button.dataset.action;

    if (action === "back") {
      window.renderCourseLessonList("csharp");
      return;
    }

    if (!lesson) return;

    const index = lessons.findIndex(item => item.id === lesson.id);

    if (action === "bookmark") {
      toggleBookmark(lesson.id);
      updateActions(lesson);
    } else if (action === "previous" && index > 0) {
      window.renderLesson(lessons[index - 1]);
    } else if (action === "next" && index >= 0 && index < lessons.length - 1) {
      window.renderLesson(lessons[index + 1]);
    }
  }, true);

  // Refresh progress after the original completion click handler.
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#completeLessonButton")) return;

    setTimeout(function() {
      updateProgress();
      updateActions(getActiveLesson());
    }, 100);
  });

  console.info("CS MATE: feature repair loaded.");
})();

/* =========================================
   CS MATE — PART 20
   Final learning features repair
========================================= */

(function repairCSMateLearning() {
  "use strict";

  // Use the original course data and original storage functions.
  function lessons() {
    return typeof CSHARP_LESSONS !== "undefined"
      ? CSHARP_LESSONS
      : [];
  }

  function language() {
    return getCurrentLanguage();
  }

  function activeLesson() {
    const button = document.querySelector(
      "#lessonViewer #completeLessonButton"
    );

    if (!button) return null;

    return lessons().find(
      item => String(item.id) === button.dataset.lessonId
    ) || null;
  }

  function updateProgress() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const all = lessons();
    const done = all.filter(
      item => isLessonCompleted(item.id)
    ).length;

    const percent = all.length
      ? Math.round(done / all.length * 100)
      : 0;

    let bar = viewer.querySelector(".lesson-progress");

    if (!bar) {
      bar = document.createElement("section");
      bar.className = "lesson-progress";

      const header = viewer.querySelector(".lesson-header");
      if (header) header.after(bar);
      else viewer.prepend(bar);
    }

    bar.innerHTML = `
      <div class="lesson-progress-info">
        <strong>${language() === "ar" ? "تقدمك في التعلم" : "Learning Progress"}</strong>
        <span>${done} / ${all.length} — ${percent}%</span>
      </div>
      <div class="lesson-progress-track"
           role="progressbar"
           aria-valuemin="0"
           aria-valuemax="100"
           aria-valuenow="${percent}">
        <div class="lesson-progress-fill"
             style="width:${percent}%"></div>
      </div>
    `;

    viewer.querySelectorAll(".lesson-list-item").forEach(button => {
      const item = all[Number(button.dataset.lessonIndex)];
      if (!item) return;

      const spans = button.querySelectorAll("span");
      const complete = isLessonCompleted(item.id);

      if (spans[0]) {
        spans[0].textContent = complete
          ? "✓"
          : Number(button.dataset.lessonIndex) + 1;
      }

      if (spans[2]) {
        spans[2].textContent = complete
          ? (language() === "ar" ? "مكتمل" : "Completed")
          : item.duration;
      }
    });
  }

  function updateActions(item) {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !item) return;

    viewer.querySelector(".lesson-actions")?.remove();

    const all = lessons();
    const index = all.findIndex(entry => entry.id === item.id);
    const ar = language() === "ar";

    const actions = document.createElement("div");
    actions.className = "lesson-actions";

    actions.innerHTML = `
      <button type="button" data-csmate-action="back">
        ${ar ? "← قائمة الدروس" : "← Lesson List"}
      </button>

      <button type="button" data-csmate-action="previous"
        ${index <= 0 ? "disabled" : ""}>
        ${ar ? "الدرس السابق" : "Previous Lesson"}
      </button>

      <button type="button" data-csmate-action="bookmark"
        class="lesson-bookmark-button ${isBookmarked(item.id) ? "is-bookmarked" : ""}">
        ${isBookmarked(item.id)
          ? (ar ? "★ في المفضلة" : "★ Bookmarked")
          : (ar ? "☆ أضف للمفضلة" : "☆ Bookmark")}
      </button>

      <button type="button" data-csmate-action="next"
        ${index < 0 || index >= all.length - 1 ? "disabled" : ""}>
        ${ar ? "الدرس التالي →" : "Next Lesson →"}
      </button>
    `;

    const progress = viewer.querySelector(".lesson-progress");
    if (progress) progress.after(actions);
    else viewer.prepend(actions);
  }

  // Keep the existing full-screen behavior and enhance the content.
  const previousList = window.renderCourseLessonList;

  if (typeof previousList === "function") {
    window.renderCourseLessonList = function(courseId) {
      const result = previousList.apply(this, arguments);
      updateProgress();
      return result;
    };
  }

  const previousRender = window.renderLesson;

  if (typeof previousRender === "function") {
    window.renderLesson = function(item) {
      const result = previousRender.apply(this, arguments);

      if (item) {
        updateProgress();
        updateActions(item);
      }

      return result;
    };
  }

  // These buttons use their own attribute so older handlers
  // cannot accidentally intercept the same action.
  document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-csmate-action]");
    if (!button) return;

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !viewer.contains(button)) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const action = button.dataset.csmateAction;
    const item = activeLesson();
    const all = lessons();

    if (action === "back") {
      window.renderCourseLessonList("csharp");
      return;
    }

    if (!item) return;

    const index = all.findIndex(entry => entry.id === item.id);

    if (action === "bookmark") {
      toggleBookmark(item.id);
      updateActions(item);
      return;
    }

    if (action === "previous" && index > 0) {
      window.renderLesson(all[index - 1]);
      return;
    }

    if (action === "next" && index >= 0 && index < all.length - 1) {
      window.renderLesson(all[index + 1]);
    }
  }, true);

  // Refresh the progress after the original completion handler
  // updates LearningData.progress.
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#completeLessonButton")) return;

    setTimeout(function() {
      updateProgress();
      updateActions(activeLesson());
    }, 150);
  });

  console.info("CS MATE: final learning repair loaded.");
})();

/* =========================================
   CS MATE — PART 21
   Lesson 3: Operators in C#
========================================= */

CSHARP_LESSONS.push({
  id: "csharp-03",

  title: {
    ar: "3. العمليات والمعاملات في C#",
    en: "3. Operators in C#"
  },

  duration: "25 min",
  level: "Beginner",

  explanation: {
    ar: `المعاملات (Operators) هي رموز بنستخدمها لتنفيذ عمليات على القيم والمتغيرات.

أولًا: المعاملات الحسابية Arithmetic Operators:
• + للجمع.
• - للطرح.
• * للضرب.
• / للقسمة.
• % للحصول على باقي القسمة.

مثال: 10 % 3 نتيجته 1، لأن باقي قسمة 10 على 3 يساوي 1.

ثانيًا: معاملات المقارنة Comparison Operators:
• == للتحقق من تساوي قيمتين.
• != للتحقق من عدم التساوي.
• > أكبر من.
• < أصغر من.
• >= أكبر من أو يساوي.
• <= أصغر من أو يساوي.

نتيجة المقارنة تكون true أو false.

ثالثًا: المعاملات المنطقية Logical Operators:
• && تعني AND، وتكون true إذا كان الشرطان صحيحين.
• || تعني OR، وتكون true إذا كان شرط واحد على الأقل صحيحًا.
• ! تعكس القيمة المنطقية.

رابعًا: معاملات الإسناد Assignment Operators:
• = لإسناد قيمة.
• += لإضافة قيمة إلى المتغير الحالي.
• -= لطرح قيمة من المتغير الحالي.

انتبهي للفرق بين = و ==:
الأولى لإسناد قيمة، والثانية للمقارنة بين قيمتين.`,

    en: `Operators are symbols used to perform operations on values and variables.

1. Arithmetic operators:
• + adds values.
• - subtracts values.
• * multiplies values.
• / divides values.
• % returns the remainder of division.

For example, 10 % 3 returns 1.

2. Comparison operators:
• == checks equality.
• != checks inequality.
• > means greater than.
• < means less than.
• >= means greater than or equal to.
• <= means less than or equal to.

Comparison expressions return true or false.

3. Logical operators:
• && means AND: both conditions must be true.
• || means OR: at least one condition must be true.
• ! reverses a Boolean value.

4. Assignment operators:
• = assigns a value.
• += adds to the current variable value.
• -= subtracts from the current variable value.

Remember: = assigns a value, while == compares two values.`
  },

  code: `int a = 10;
int b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3
Console.WriteLine(a % b);  // 1

Console.WriteLine(a > b);  // True
Console.WriteLine(a == b); // False

bool hasID = true;
bool isAdult = false;

Console.WriteLine(hasID && isAdult); // False
Console.WriteLine(hasID || isAdult); // True`,

  codeExplanation: {
    ar: `أنشأنا متغيرين صحيحين a و b.

الجمع والطرح والضرب تنفذ العمليات الحسابية المعتادة.

عند قسمة عددين من النوع int، تكون النتيجة عددًا صحيحًا؛ لذلك 10 / 3 تساوي 3، وليس 3.333.

المعامل % يعطينا باقي القسمة.

المقارنة a > b نتيجتها true لأن 10 أكبر من 3.

أما && فتحتاج إلى أن تكون القيمتان true، بينما || تحتاج إلى قيمة واحدة صحيحة على الأقل.`,

    en: `We created two integer variables, a and b.

Addition, subtraction, and multiplication perform standard arithmetic.

Dividing two int values produces an integer result, so 10 / 3 equals 3 rather than 3.333.

The % operator returns the remainder.

The expression a > b is true because 10 is greater than 3.

The && operator requires both values to be true, while || requires at least one true value.`
  },

  commonMistakes: {
    ar: [
      "الخلط بين = للإسناد و == للمقارنة.",
      "توقع أن قسمة int على int ستعطي نتيجة عشرية.",
      "نسيان أن نتيجة المقارنة قيمة منطقية true أو false.",
      "الخلط بين && و ||."
    ],

    en: [
      "Confusing = assignment with == equality comparison.",
      "Expecting integer division to produce a decimal result.",
      "Forgetting that comparisons return Boolean values.",
      "Confusing && with ||."
    ]
  },

  exercise: {
    ar: `اكتبي برنامجًا ينشئ متغيرين x = 17 و y = 5، ثم يطبع:
1. ناتج الجمع.
2. ناتج الضرب.
3. باقي القسمة.
4. هل x أكبر من y؟
5. هل العددان متساويان؟

تحدٍ إضافي: أنشئي متغيرين من النوع bool واستخدمي && و || لعرض نتائج منطقية.`,

    en: `Write a program with x = 17 and y = 5, then print:
1. Their sum.
2. Their product.
3. The remainder of division.
4. Whether x is greater than y.
5. Whether the two values are equal.

Extra challenge: Create two bool variables and use && and || to display logical results.`
  },

  summary: {
    ar: `المعاملات تسمح لنا بإجراء الحسابات والمقارنات والعمليات المنطقية في C#.

تذكري:
+ و - و * و / و % للحسابات.
== و != و > و < للمقارنة.
&& و || و ! للمنطق.
= للإسناد، و+= و-= لتحديث قيمة المتغير.`,

    en: `Operators let us perform arithmetic, comparisons, and logical operations in C#.

Remember:
+, -, *, /, and % perform arithmetic.
==, !=, >, and < compare values.
&&, ||, and ! perform logical operations.
= assigns a value, while += and -= update a variable.`
  }
});

console.info("CS MATE: Lesson 3 added.");

/* =========================================
   CS MATE — PART 22
   Lesson 4: Input, Output and Conversion
========================================= */

CSHARP_LESSONS.push({
  id: "csharp-04",

  title: {
    ar: "4. إدخال البيانات والإخراج وتحويل الأنواع",
    en: "4. Input, Output and Type Conversion"
  },

  duration: "30 min",
  level: "Beginner",

  explanation: {
    ar: `في الدرس الأول استخدمنا Console.WriteLine لعرض النصوص على الشاشة. الآن سنتعلم كيف نجعل المستخدم يدخل بيانات إلى البرنامج.

أولًا: عرض البيانات:
• Console.WriteLine() تعرض البيانات ثم تنتقل إلى سطر جديد.
• Console.Write() تعرض البيانات وتبقى في السطر نفسه.

ثانيًا: إدخال البيانات:
Console.ReadLine() تقرأ السطر الذي يكتبه المستخدم.

القيمة التي تعيدها ReadLine تكون نصًا string، لذلك إذا أدخل المستخدم رقمًا، نحتاج إلى تحويله إلى نوع رقمي قبل إجراء العمليات الحسابية.

ثالثًا: تحويل الأنواع:
• int.Parse() تحوّل نصًا إلى عدد صحيح، لكنها قد تسبب استثناء إذا كان النص غير صالح.
• Convert.ToInt32() طريقة أخرى للتحويل.
• int.TryParse() تحاول التحويل وتسمح لنا بالتعامل مع الإدخال غير الصحيح دون حدوث استثناء بسبب فشل التحويل.

رابعًا: التحقق من الإدخال:
استخدام TryParse مفيد عندما لا نضمن أن المستخدم سيكتب رقمًا صحيحًا.

مثال:
إذا كتب المستخدم 20، يمكن تحويلها إلى int.
أما إذا كتب كلمة hello، فستفشل محاولة التحويل ويمكننا عرض رسالة مناسبة.`,

    en: `In Lesson 1, we used Console.WriteLine to display text. Now we will learn how to accept user input.

1. Displaying output:
• Console.WriteLine() displays data and moves to a new line.
• Console.Write() displays data without moving to a new line.

2. Reading input:
Console.ReadLine() reads a line entered by the user.

ReadLine returns text as a string, so numeric input must be converted before performing numeric calculations.

3. Type conversion:
• int.Parse() converts text to an integer but can throw an exception if the text is invalid.
• Convert.ToInt32() is another conversion method.
• int.TryParse() attempts conversion and lets us handle invalid input without an exception caused by a failed parse.

4. Validating input:
TryParse is useful when we cannot guarantee that the user will enter a valid integer.

For example, "20" can be converted to an int, while "hello" cannot. We can display an appropriate message when conversion fails.`
  },

  code: `Console.Write("Enter your age: ");

string? input = Console.ReadLine();

if (int.TryParse(input, out int age))
{
    Console.WriteLine("Your age is " + age);
    Console.WriteLine("Next year you will be " + (age + 1));
}
else
{
    Console.WriteLine("Please enter a valid whole number.");
}`,

  codeExplanation: {
    ar: `Console.Write تعرض السؤال من غير الانتقال إلى سطر جديد، حتى يكتب المستخدم بجانبه.

Console.ReadLine تقرأ ما كتبه المستخدم وتخزنه في المتغير input.

string? تعني أن المتغير النصي قد يحتوي على null، وهو ما يناسب احتمال عدم وجود إدخال.

int.TryParse تحاول تحويل النص إلى عدد صحيح. إذا نجحت، يصبح الشرط true وتُخزّن النتيجة في age.

out int age تعرّف المتغير الذي ستضع فيه TryParse الرقم بعد نجاح التحويل.

إذا أدخل المستخدم رقمًا صحيحًا، نطبع عمره والعمر في السنة القادمة. وإذا أدخل نصًا غير صالح، تظهر رسالة تطلب منه إدخال عدد صحيح.`,

    en: `Console.Write displays the prompt without moving to a new line.

Console.ReadLine reads the user's input into the input variable.

string? indicates that the string may be null, which is appropriate when input may be missing.

int.TryParse attempts to convert the text into an integer. If conversion succeeds, the condition is true and the result is stored in age.

out int age declares the variable that receives the converted number when conversion succeeds.

A valid integer displays the entered age and the age next year. Invalid input displays a helpful message.`
  },

  commonMistakes: {
    ar: [
      "نسيان أن Console.ReadLine تقرأ نصًا حتى لو كتب المستخدم أرقامًا.",
      "استخدام النص في عملية حسابية دون تحويله إلى نوع رقمي.",
      "استخدام int.Parse مع إدخال غير مضمون دون التعامل مع الأخطاء.",
      "نسيان الأقواس حول الشرط أو جسم if و else."
    ],

    en: [
      "Forgetting that Console.ReadLine returns text, even when the user enters digits.",
      "Using text in arithmetic without converting it to a numeric type.",
      "Using int.Parse on untrusted input without handling errors.",
      "Forgetting braces around if and else blocks."
    ]
  },

  exercise: {
    ar: `اكتبي برنامجًا يطلب من المستخدم إدخال رقمين صحيحين، ثم:
1. يتحقق من صحة الرقم الأول باستخدام int.TryParse.
2. يتحقق من صحة الرقم الثاني.
3. يطبع مجموع الرقمين إذا كان الإدخال صحيحًا.
4. يعرض رسالة واضحة إذا أدخل المستخدم قيمة غير صالحة.

تحدٍ إضافي: اجعلي البرنامج يطبع حاصل ضرب الرقمين أيضًا.`,

    en: `Write a program that asks the user for two integers and:
1. Validates the first number using int.TryParse.
2. Validates the second number.
3. Prints their sum if both inputs are valid.
4. Displays a clear message if either input is invalid.

Extra challenge: Also print the product of the two numbers.`
  },

  summary: {
    ar: `Console.Write و Console.WriteLine لعرض البيانات، وConsole.ReadLine لاستقبال إدخال المستخدم.

تذكري أن ReadLine تعيد نصًا، وأن TryParse طريقة مناسبة لتحويل الإدخال إلى رقم مع التحقق من صحته.

تحويل البيانات مهم لأن العمليات الحسابية تحتاج إلى أنواع بيانات مناسبة.`,

    en: `Use Console.Write and Console.WriteLine to display output, and Console.ReadLine to receive user input.

Remember that ReadLine returns text and TryParse is a useful way to convert input into a number while validating it.

Type conversion matters because arithmetic operations require suitable data types.`
  }
});

console.info("CS MATE: Lesson 4 added.");


    
 


  

  


  
 

