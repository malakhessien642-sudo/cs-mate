
"use strict";

/* =========================================
   CS MATE — PART 1
   Course catalog, cards, search and filters
========================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const languageGrid = $("#languageGrid");
const searchInput = $("#searchInput");
const categoryFilter = $("#categoryFilter");
const emptyState = $("#emptyState");
const languageCount = $("#languageCount");
const lessonCount = $("#lessonCount");
const currentYear = $("#currentYear");
const toastElement = $("#toast");
const themeToggle = $("#themeToggle");
const languageToggle = $("#languageToggle");

const lessonModal = $("#lessonModal");
const lessonLanguage = $("#lessonLanguage");
const lessonTitle = $("#lessonTitle");
const lessonDescription = $("#lessonDescription");
const lessonNavigation = $("#lessonNavigation");
const lessonContent = $("#lessonContent");
const previousLessonButton = $("#previousLesson");
const nextLessonButton = $("#nextLesson");
const completeLessonButton = $("#completeLesson");
const closeLessonButton = $("#closeLesson");

const state = {
  language: localStorage.getItem("csMateLanguage") || "ar",
  theme: localStorage.getItem("csMateTheme") || "dark",
  activeCourseId: null,
  activeLessonIndex: 0
};

const courses = [
  {
    id: "csharp",
    name: "C#",
    icon: "C#",
    category: "programming",
    level: "Beginner to Advanced",
    color: "#a78bfa",
    description: "Learn C# and object-oriented programming."
  },
  {
    id: "python",
    name: "Python",
    icon: "Py",
    category: "programming",
    level: "Beginner to Advanced",
    color: "#facc15",
    description: "Learn Python, data analysis and automation."
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "JS",
    category: "web",
    level: "Beginner to Advanced",
    color: "#f7df1e",
    description: "Create interactive and dynamic websites."
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    category: "programming",
    level: "Beginner to Advanced",
    color: "#fb923c",
    description: "Learn Java syntax, classes and objects."
  },
  {
    id: "cpp",
    name: "C++",
    icon: "C++",
    category: "programming",
    level: "Beginner to Advanced",
    color: "#60a5fa",
    description: "Learn C++ fundamentals and algorithms."
  },
  {
    id: "html",
    name: "HTML",
    icon: "5",
    category: "web",
    level: "Beginner",
    color: "#fb923c",
    description: "Build the structure of web pages."
  },
  {
    id: "css",
    name: "CSS",
    icon: "3",
    category: "web",
    level: "Beginner",
    color: "#60a5fa",
    description: "Style pages and create responsive layouts."
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "TS",
    category: "web",
    level: "Intermediate",
    color: "#3b82f6",
    description: "Write JavaScript with static types."
  },
  {
    id: "php",
    name: "PHP",
    icon: "PHP",
    category: "web",
    level: "Beginner to Advanced",
    color: "#a5b4fc",
    description: "Learn server-side web development."
  },
  {
    id: "sql",
    name: "SQL",
    icon: "SQL",
    category: "database",
    level: "Beginner",
    color: "#38bdf8",
    description: "Query, organize and manage databases."
  },
  {
    id: "dart",
    name: "Dart",
    icon: "D",
    category: "mobile",
    level: "Beginner to Advanced",
    color: "#22d3ee",
    description: "Learn Dart for Flutter applications."
  },
  {
    id: "go",
    name: "Go",
    icon: "Go",
    category: "programming",
    level: "Beginner",
    color: "#67e8f9",
    description: "Build efficient programs and services."
  },
  {
    id: "kotlin",
    name: "Kotlin",
    icon: "K",
    category: "mobile",
    level: "Beginner",
    color: "#c084fc",
    description: "Learn Kotlin and Android development."
  },
  {
    id: "swift",
    name: "Swift",
    icon: "S",
    category: "mobile",
    level: "Beginner",
    color: "#fb7185",
    description: "Learn Swift for Apple applications."
  },
  {
    id: "rust",
    name: "Rust",
    icon: "R",
    category: "programming",
    level: "Intermediate",
    color: "#fdba74",
    description: "Learn Rust, performance and memory safety."
  },
  {
    id: "react",
    name: "React",
    icon: "⚛",
    category: "web",
    level: "Intermediate",
    color: "#67e8f9",
    description: "Build interfaces with reusable components."
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: ".NET",
    category: "programming",
    level: "Intermediate",
    color: "#a78bfa",
    description: "Build applications and web APIs with .NET."
  }
];

/* Lesson data will be added in Part 2 and later parts. */
const lessonLibrary = {};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getCourse(courseId) {
  return courses.find(course => course.id === courseId);
}

function getLessonsCount() {
  return courses.reduce(
    (total, course) =>
      total + (lessonLibrary[course.id] || []).length,
    0
  );
}

function showToast(message) {
  if (!toastElement) {
    alert(message);
    return;
  }

  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2500);
}

function getCategoryName(category) {
  const categories = {
    programming: {
      ar: "برمجة",
      en: "Programming"
    },
    web: {
      ar: "تطوير الويب",
      en: "Web Development"
    },
    database: {
      ar: "قواعد البيانات",
      en: "Databases"
    },
    mobile: {
      ar: "تطبيقات الموبايل",
      en: "Mobile Development"
    }
  };

  return categories[category]?.[state.language] || category;
}

function renderCourseCards() {
  if (!languageGrid) {
    console.error(
      'CS MATE: Element "#languageGrid" was not found in index.html.'
    );
    return;
  }

  const query = (searchInput?.value || "")
    .trim()
    .toLowerCase();

  const selectedCategory = categoryFilter?.value || "all";

  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      course.name.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.innerHTML = "";

  if (emptyState) {
    emptyState.style.display =
      filteredCourses.length === 0 ? "block" : "none";
  }

  filteredCourses.forEach(course => {
    const lessons = lessonLibrary[course.id] || [];

    const card = document.createElement("article");
    card.className = "language-card";
    card.dataset.courseId = course.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    const openLabel =
      state.language === "ar" ? "ابدئي التعلم" : "Start Learning";

    const levelLabel =
      state.language === "ar" ? "المستوى" : "Level";

    const lessonLabel =
      state.language === "ar" ? "درس" : "lessons";

    card.innerHTML = `
      <div class="language-card-header">
        <div class="language-logo"
             style="--language-color:${course.color}">
          ${escapeHTML(course.icon)}
        </div>
        <span class="course-category">
          ${escapeHTML(getCategoryName(course.category))}
        </span>
      </div>

      <h3>${escapeHTML(course.name)}</h3>

      <p class="language-description">
        ${escapeHTML(course.description)}
      </p>

      <div class="card-meta">
        <span>${levelLabel}: ${escapeHTML(course.level)}</span>
        <span>${lessons.length} ${lessonLabel}</span>
      </div>

      <button class="course-open-button" type="button">
        ${openLabel} →
      </button>
    `;

    languageGrid.appendChild(card);
  });

  updateStatistics();
}

function updateStatistics() {
  if (languageCount) {
    languageCount.textContent = courses.length;
  }

  if (lessonCount) {
    lessonCount.textContent = getLessonsCount();
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

if (searchInput) {
  searchInput.addEventListener("input", renderCourseCards);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", renderCourseCards);
}

/* Initial render: cards appear as soon as the script runs. */
renderCourseCards();
