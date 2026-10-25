
"use strict";

/* =========================================
   CS MATE — JAVASCRIPT
   PART 1: SETUP & COURSE DATA
========================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

const languageGrid = $("#languageGrid");
const searchInput = $("#searchInput");
const categoryFilter = $("#categoryFilter");
const emptyState = $("#emptyState");

const lessonModal = $("#lessonModal");
const lessonLanguage = $("#lessonLanguage");
const lessonTitle = $("#lessonTitle");
const lessonDescription = $("#lessonDescription");
const lessonNavigation = $("#lessonNavigation");
const lessonContent = $("#lessonContent");

const closeLessonButton = $("#closeLesson");
const previousLessonButton = $("#previousLesson");
const nextLessonButton = $("#nextLesson");
const completeLessonButton = $("#completeLesson");

const toast = $("#toast");

/* =========================================
   COURSE CATALOG
========================================= */

const courses = [
  {
    id: "html",
    name: "HTML",
    category: "web",
    icon: "🌐",
    description: "تعلمي بناء هيكل صفحات الويب من الصفر.",
    lessons: [
      {
        title: "مقدمة في HTML",
        description: "ما هي HTML وكيف تعمل صفحات الويب؟",
        blocks: [
          {
            type: "text",
            title: "ما هي HTML؟",
            content:
              "HTML هي لغة ترميز تُستخدم لبناء هيكل صفحة الويب وتحديد عناصرها مثل العناوين والفقرات والصور والروابط."
          },
          {
            type: "code",
            title: "أول صفحة HTML",
            content:
              '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>صفحتي الأولى</title>\n</head>\n<body>\n  <h1>أهلاً بالعالم</h1>\n  <p>دي أول صفحة ليا.</p>\n</body>\n</html>'
          }
        ]
      },
      {
        title: "العناوين والفقرات",
        description: "استخدام العناوين والنصوص.",
        blocks: [
          {
            type: "text",
            title: "العناوين والفقرات",
            content:
              "نستخدم h1 إلى h6 للعناوين بمستويات مختلفة، ونستخدم p لكتابة الفقرات."
          },
          {
            type: "code",
            title: "مثال",
            content:
              "<h1>عنوان رئيسي</h1>\n<h2>عنوان فرعي</h2>\n<p>دي فقرة نصية.</p>"
          }
        ]
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    category: "web",
    icon: "🎨",
    description: "نسّقي صفحات الويب بالألوان والتصميم المتجاوب.",
    lessons: [
      {
        title: "مقدمة في CSS",
        description: "إضافة التنسيقات إلى صفحات HTML.",
        blocks: [
          {
            type: "text",
            title: "ما هي CSS؟",
            content:
              "CSS هي لغة تنسيق مسؤولة عن الألوان والخطوط والمسافات وتوزيع العناصر داخل صفحات الويب."
          },
          {
            type: "code",
            title: "مثال",
            content:
              "body {\n  background: #080b14;\n  color: white;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #3984ff;\n}"
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "web",
    icon: "⚡",
    description: "أضيفي التفاعل والحركة إلى صفحات الويب.",
    lessons: [
      {
        title: "مقدمة في JavaScript",
        description: "التعرف على لغة JavaScript.",
        blocks: [
          {
            type: "text",
            title: "ما هي JavaScript؟",
            content:
              "JavaScript لغة برمجة تضيف التفاعل إلى صفحات الويب، مثل الاستجابة للنقرات والتحقق من البيانات وتحديث المحتوى."
          },
          {
            type: "code",
            title: "أول كود",
            content:
              'console.log("Hello, World!");\n\nalert("أهلاً بيك في CS MATE");'
          }
        ]
      }
    ]
  },
  {
    id: "csharp",
    name: "C#",
    category: "programming",
    icon: "💜",
    description: "ابدئي البرمجة باستخدام C# والمفاهيم الأساسية.",
    lessons: [
      {
        title: "مقدمة في C#",
        description: "التعرف على اللغة وطريقة كتابة البرنامج.",
        blocks: [
          {
            type: "text",
            title: "ما هي C#؟",
            content:
              "C# لغة برمجة تُستخدم في تطبيقات الويب وسطح المكتب والألعاب، وتعمل كثيرًا مع منصة .NET."
          },
          {
            type: "code",
            title: "أول برنامج",
            content:
              'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}'
          }
        ]
      }
    ]
  },
  {
    id: "python",
    name: "Python",
    category: "programming",
    icon: "🐍",
    description: "تعلمي أساسيات البرمجة بلغة سهلة القراءة.",
    lessons: [
      {
        title: "مقدمة في Python",
        description: "التعرف على اللغة وأول أمر برمجي.",
        blocks: [
          {
            type: "text",
            title: "ما هي Python؟",
            content:
              "Python لغة برمجة واضحة وسهلة القراءة، وتُستخدم في تطبيقات كثيرة مثل تحليل البيانات والأتمتة وتطوير الويب."
          },
          {
            type: "code",
            title: "أول كود",
            content:
              'print("Hello, World!")\nname = "Malak"\nprint(name)'
          }
        ]
      }
    ]
  },
  {
    id: "sql",
    name: "SQL",
    category: "database",
    icon: "🗄️",
    description: "تعلمي التعامل مع قواعد البيانات والاستعلامات.",
    lessons: [
      {
        title: "مقدمة في SQL",
        description: "فهم قواعد البيانات وأوامر الاستعلام.",
        blocks: [
          {
            type: "text",
            title: "ما هي SQL؟",
            content:
              "SQL لغة تُستخدم للتعامل مع قواعد البيانات، مثل إنشاء الجداول وإضافة البيانات واسترجاعها وتعديلها."
          },
          {
            type: "code",
            title: "مثال على الاستعلام",
            content:
              "SELECT *\nFROM Students;\n\nSELECT Name\nFROM Students\nWHERE Grade >= 80;"
          }
        ]
      }
    ]
  }
];

/* =========================================
   APP STATE
========================================= */

let activeCourse = null;
let activeLessonIndex = 0;

const completedLessons = new Set();

/* =========================================
   PART 2: RENDER COURSE CARDS
========================================= */

function renderCourses() {
  if (!languageGrid) return;

  const searchTerm = (searchInput?.value || "")
    .trim()
    .toLowerCase();

  const selectedCategory = categoryFilter?.value || "all";

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.innerHTML = "";

  if (emptyState) {
    emptyState.hidden = filteredCourses.length > 0;
  }

  filteredCourses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "language-card";

    const icon = document.createElement("div");
    icon.className = "course-icon";
    icon.textContent = course.icon;
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("h3");
    title.textContent = course.name;

    const description = document.createElement("p");
    description.textContent = course.description;

    const lessonInfo = document.createElement("p");
    lessonInfo.textContent = `${course.lessons.length} درس`;

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = "ابدئي التعلم";
    openButton.addEventListener("click", () => {
      openCourse(course.id);
    });

    card.append(icon, title, description, lessonInfo, openButton);
    languageGrid.appendChild(card);
  });
}

/* =========================================
   SEARCH & CATEGORY FILTER
========================================= */

if (searchInput) {
  searchInput.addEventListener("input", renderCourses);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", renderCourses);
}

/* =========================================
   PART 3: OPEN COURSE & LESSON
========================================= */

function openCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);

  if (!course || !lessonModal) return;

  activeCourse = course;
  activeLessonIndex = 0;

  if (lessonLanguage) {
    lessonLanguage.textContent = `${course.icon} ${course.name}`;
  }

  lessonModal.classList.add("active");
  lessonModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  renderLessonNavigation();
  renderLesson();

  if (closeLessonButton) {
    closeLessonButton.focus();
  }
}

/* =========================================
   RENDER LESSON NAVIGATION
========================================= */

function renderLessonNavigation() {
  if (!lessonNavigation || !activeCourse) return;

  lessonNavigation.innerHTML = "";

  activeCourse.lessons.forEach((lesson, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = `${index + 1}. ${lesson.title}`;

    if (index === activeLessonIndex) {
      button.classList.add("active");
      button.setAttribute("aria-current", "step");
    }

    button.addEventListener("click", () => {
      activeLessonIndex = index;
      renderLessonNavigation();
      renderLesson();
    });

    lessonNavigation.appendChild(button);
  });
}

/* =========================================
   RENDER CURRENT LESSON
========================================= */

function renderLesson() {
  if (!activeCourse || !lessonContent) return;

  const lesson = activeCourse.lessons[activeLessonIndex];

  if (!lesson) return;

  if (lessonTitle) {
    lessonTitle.textContent = lesson.title;
  }

  if (lessonDescription) {
    lessonDescription.textContent = lesson.description;
  }

  lessonContent.innerHTML = "";

  lesson.blocks.forEach((block) => {
    if (block.type === "text") {
      const heading = document.createElement("h2");
      heading.textContent = block.title;

      const paragraph = document.createElement("p");
      paragraph.textContent = block.content;

      lessonContent.append(heading, paragraph);
    }

    if (block.type === "code") {
      const heading = document.createElement("h2");
      heading.textContent = block.title;

      const pre = document.createElement("pre");
      const code = document.createElement("code");

      code.textContent = block.content;

      pre.appendChild(code);
      lessonContent.append(heading, pre);
    }
  });

  updateLessonButtons();
}

/* =========================================
   LESSON NAVIGATION BUTTONS
========================================= */

function updateLessonButtons() {
  if (!activeCourse) return;

  if (previousLessonButton) {
    previousLessonButton.disabled = activeLessonIndex === 0;
  }

  if (nextLessonButton) {
    nextLessonButton.disabled =
      activeLessonIndex === activeCourse.lessons.length - 1;
  }

  if (completeLessonButton) {
    const lessonKey =
      `${activeCourse.id}-${activeLessonIndex}`;

    const isCompleted = completedLessons.has(lessonKey);

    completeLessonButton.textContent = isCompleted
      ? "✓ تم إكمال الدرس"
      : "إكمال الدرس";

    completeLessonButton.disabled = isCompleted;
  }
}

/* =========================================
   PART 4: LESSON CONTROLS
========================================= */

function goToLesson(index) {
  if (!activeCourse) return;

  if (index < 0 || index >= activeCourse.lessons.length) {
    return;
  }

  activeLessonIndex = index;

  renderLessonNavigation();
  renderLesson();
}

if (previousLessonButton) {
  previousLessonButton.addEventListener("click", () => {
    goToLesson(activeLessonIndex - 1);
  });
}

if (nextLessonButton) {
  nextLessonButton.addEventListener("click", () => {
    goToLesson(activeLessonIndex + 1);
  });
}

/* =========================================
   COMPLETE LESSON
========================================= */

if (completeLessonButton) {
  completeLessonButton.addEventListener("click", () => {
    if (!activeCourse) return;

    const lessonKey =
      `${activeCourse.id}-${activeLessonIndex}`;

    if (completedLessons.has(lessonKey)) return;

    completedLessons.add(lessonKey);

    updateLessonButtons();

    showToast("ممتاز! تم تسجيل إكمال الدرس بنجاح 🎉");
  });
}

/* =========================================
   CLOSE LESSON MODAL
========================================= */

function closeCourse() {
  if (!lessonModal) return;

  lessonModal.classList.remove("active");
  lessonModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  activeCourse = null;
}

if (closeLessonButton) {
  closeLessonButton.addEventListener("click", closeCourse);
}

/* Close when clicking outside the lesson panel */

if (lessonModal) {
  lessonModal.addEventListener("click", (event) => {
    if (event.target === lessonModal) {
      closeCourse();
    }
  });
}

/* Close with Escape key */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeCourse) {
    closeCourse();
  }
});

/* =========================================
   TOAST NOTIFICATIONS
========================================= */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toast.hideTimer) {
    clearTimeout(toast.hideTimer);
  }

  toast.hideTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* =========================================
   PART 5: THEME SWITCHER
========================================= */

const themeToggle = $("#themeToggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.textContent =
      theme === "dark" ? "☀️" : "🌙";

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "تفعيل الوضع الفاتح"
        : "تفعيل الوضع الداكن"
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme || "dark";

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    try {
      localStorage.setItem("cs-mate-theme", newTheme);
    } catch (error) {
      console.warn("تعذر حفظ إعدادات الثيم.");
    }
  });
}

/* =========================================
   PART 6: SAVE LEARNING PROGRESS
========================================= */

const PROGRESS_KEY = "cs-mate-completed-lessons";

function loadProgress() {
  try {
    const savedProgress = JSON.parse(
      localStorage.getItem(PROGRESS_KEY) || "[]"
    );

    if (Array.isArray(savedProgress)) {
      savedProgress.forEach((key) => {
        if (typeof key === "string") {
          completedLessons.add(key);
        }
      });
    }
  } catch (error) {
    console.warn("تعذر تحميل تقدم التعلم.");
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify([...completedLessons])
    );
  } catch (error) {
    showToast("تعذر حفظ التقدم على هذا الجهاز.");
  }
}

/* =========================================
   PART 7: INITIALIZE APPLICATION
========================================= */

function initializeApp() {
  loadProgress();

  try {
    const savedTheme = localStorage.getItem("cs-mate-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    }
  } catch (error) {
    console.warn("تعذر تحميل إعدادات الثيم.");
  }

  renderCourses();
}

if (completeLessonButton) {
  completeLessonButton.addEventListener("click", saveProgress);
}

initializeApp();

if (completeLessonButton) {
  completeLessonButton.addEventListener("click", () => {
    if (!activeCourse) return;

    const lessonKey =
      `${activeCourse.id}-${activeLessonIndex}`;

    if (completedLessons.has(lessonKey)) return;

    completedLessons.add(lessonKey);

    saveProgress();
    updateLessonButtons();

    showToast("ممتاز! تم إكمال الدرس وحفظ تقدمك 🎉");
  });
}
