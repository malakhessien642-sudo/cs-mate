
"use strict";

/* =================================
   CS MATE
   PART 1: BASIC SETUP
================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

const CS_MATE = {
  language: "en",
  theme: "dark",
  currentCourse: null,
  currentLesson: 0,
  completed: new Set(),
  search: ""
};

const courseCatalog = [];

/* =================================
   PART 2: HTML COURSE
================================= */

courseCatalog.push({
  id: "html",
  title: "HTML",
  subtitle: "Structure of Web Pages",
  icon: "🌐",
  category: "Frontend",
  level: "Beginner",
  description: "Learn HTML from the basics.",
  lessons: []
});

/* =================================
   PART 3: HTML LESSON 1
================================= */

courseCatalog[0].lessons.push({
  title: "Introduction to HTML",

  introduction:
    "HTML is the foundation of web pages.",

  explanation: [
    {
      heading: "What is HTML?",
      text: "HTML stands for HyperText Markup Language. It defines the structure of web page content."
    },
    {
      heading: "How does HTML work?",
      text: "The browser reads HTML elements and displays headings, paragraphs, images, links, and other content."
    },
    {
      heading: "HTML, CSS, and JavaScript",
      text: "HTML creates structure, CSS controls appearance, and JavaScript adds interactive behavior."
    }
  ],

  code:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>My first web page.</p>
</body>
</html>`,

  codeExplanation: [
    "DOCTYPE identifies the document as HTML5.",
    "html contains the entire document.",
    "head contains document information.",
    "title defines the browser tab title.",
    "body contains visible page content.",
    "h1 creates a main heading.",
    "p creates a paragraph."
  ],

  output:
    "A large Hello World! heading appears above a paragraph.",

  exercise:
    "Create a page with your name and a short introduction.",

  solution:
`<h1>My Name</h1>
<p>I am learning HTML.</p>`,

  mistakes: [
    "Forgetting the document structure.",
    "Putting visible content inside head.",
    "Saving the file without the .html extension."
  ]
});

/* PART 4: HTML LESSON 2 */

courseCatalog[0].lessons.push({
  title: "Headings and Paragraphs",

  introduction:
    "Headings organize page content, while paragraphs contain related sentences.",

  explanation: [
    {
      heading: "Heading elements",
      text: "HTML provides six heading levels, from h1 to h6."
    },
    {
      heading: "Heading hierarchy",
      text: "Use h1 for the main topic and h2 for major sections. Use lower levels for subsections."
    },
    {
      heading: "Paragraphs",
      text: "The p element represents a paragraph and normally appears as a separate block."
    }
  ],

  code:
`<h1>My Website</h1>
<h2>About Me</h2>
<p>I am learning web development.</p>
<h2>My Goals</h2>
<p>I want to build websites.</p>
<h3>My First Goal</h3>
<p>Learn HTML basics.</p>`,

  codeExplanation: [
    "h1 represents the main heading.",
    "h2 represents a major section.",
    "p contains paragraph text.",
    "h3 represents a subsection."
  ],

  output:
    "A main heading appears above section headings and their paragraphs.",

  exercise:
    "Create one main heading, two section headings, and three paragraphs.",

  solution:
`<h1>My Learning Journey</h1>
<h2>My Skills</h2>
<p>I am learning HTML.</p>
<h2>My Goals</h2>
<p>I want to build websites.</p>
<h3>My Next Step</h3>
<p>I will practice every day.</p>`,

  mistakes: [
    "Using headings only to make text larger.",
    "Choosing heading levels without a logical structure.",
    "Using multiple spaces instead of proper HTML elements."
  ]
});

/* PART 5: HTML LESSON 3 */

courseCatalog[0].lessons.push({
  title: "Links and Navigation",

  introduction:
    "Links connect pages and help users navigate websites.",

  explanation: [
    {
      heading: "The anchor element",
      text: "The a element creates a clickable hyperlink."
    },
    {
      heading: "The href attribute",
      text: "The href attribute specifies the destination of a link."
    },
    {
      heading: "External links",
      text: "An external link points to another website using its URL."
    },
    {
      heading: "Internal links",
      text: "A relative link can open another HTML file in your project."
    }
  ],

  code:
`<a href="https://example.com">
  Visit Example
</a>

<a href="about.html">
  About Us
</a>

<a href="#contact">
  Contact Section
</a>

<section id="contact">
  <h2>Contact</h2>
  <p>Contact information goes here.</p>
</section>`,

  codeExplanation: [
    "The first link opens an external website.",
    "The second link opens about.html if it exists.",
    "The third link moves to the element with id contact.",
    "The section ID identifies the destination."
  ],

  output:
    "The page displays three links with different destinations.",

  exercise:
    "Create a link to your favorite website and another link to a section named services.",

  solution:
`<a href="https://example.com">
  My Favorite Website
</a>

<a href="#services">
  Our Services
</a>

<section id="services">
  <h2>Our Services</h2>
  <p>Services are listed here.</p>
</section>`,

  mistakes: [
    "Forgetting the href attribute.",
    "Using a file path that does not exist.",
    "Linking to an ID that is not present on the page."
  ]
});

/* PART 6: HTML LESSON 4 */

courseCatalog[0].lessons.push({
  title: "Images and Alternative Text",

  introduction:
    "Images add visual information to web pages.",

  explanation: [
    {
      heading: "The img element",
      text: "The img element embeds an image in the page and does not require a closing tag."
    },
    {
      heading: "The src attribute",
      text: "The src attribute specifies the image file or URL."
    },
    {
      heading: "The alt attribute",
      text: "The alt attribute provides a text alternative for meaningful images."
    },
    {
      heading: "Image dimensions",
      text: "The width attribute can specify image width. CSS can provide more flexible responsive sizing."
    }
  ],

  code:
`<h1>My Gallery</h1>

<img
  src="images/flower.jpg"
  alt="A pink flower in a garden"
  width="300"
>`,

  codeExplanation: [
    "h1 introduces the gallery.",
    "src points to the image file.",
    "alt describes the image.",
    "width requests a width of 300 CSS pixels."
  ],

  output:
    "The image appears if the file exists at the specified path.",

  exercise:
    "Add an image to your project with an appropriate alt description.",

  solution:
`<img
  src="images/profile.jpg"
  alt="Profile photograph"
  width="250"
>`,

  mistakes: [
    "Using an incorrect image path.",
    "Forgetting to upload the image file.",
    "Using unhelpful alt text for an informative image."
  ]
});

/* PART 7: HTML LESSON 5 */

courseCatalog[0].lessons.push({
  title: "Lists in HTML",
  introduction:
    "Lists organize related information into clear groups.",
  explanation: [
    {
      heading: "Unordered lists",
      text: "The ul element creates a list with bullet points."
    },
    {
      heading: "Ordered lists",
      text: "The ol element creates a numbered list when sequence matters."
    },
    {
      heading: "List items",
      text: "The li element represents each item inside a list."
    }
  ],
  code:
`<h2>My Skills</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>My Plan</h2>
<ol>
  <li>Learn HTML</li>
  <li>Practice CSS</li>
  <li>Build a project</li>
</ol>`,
  codeExplanation: [
    "ul creates a bulleted list.",
    "ol creates a numbered list.",
    "Each li element represents one item.",
    "Headings describe the lists."
  ],
  output:
    "The first list displays bullet points. The second list displays numbers.",
  exercise:
    "Create a list of three hobbies and a numbered list of four learning steps.",
  solution:
`<ul>
  <li>Reading</li>
  <li>Drawing</li>
  <li>Coding</li>
</ul>
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Study JavaScript</li>
  <li>Build a website</li>
</ol>`,
  mistakes: [
    "Placing li elements outside a list.",
    "Using ol when the order does not matter.",
    "Forgetting to close list elements."
  ]
});

/* PART 8: HTML LESSON 6 */

courseCatalog[0].lessons.push({
  title: "Tables and Tabular Data",
  introduction:
    "Tables display related information in rows and columns.",
  explanation: [
    {
      heading: "The table element",
      text: "The table element contains the complete data table."
    },
    {
      heading: "Rows",
      text: "The tr element represents a row."
    },
    {
      heading: "Header and data cells",
      text: "The th element represents a header cell, while td represents a data cell."
    },
    {
      heading: "Table sections",
      text: "thead groups header rows, and tbody groups the main data rows."
    }
  ],
  code:
`<table>
  <thead>
    <tr>
      <th>Subject</th>
      <th>Mark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Math</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Science</td>
      <td>85</td>
    </tr>
  </tbody>
</table>`,
  codeExplanation: [
    "table contains the table.",
    "thead groups the header row.",
    "tr creates a row.",
    "th labels a column.",
    "td contains an ordinary data value."
  ],
  output:
    "A table appears with Subject and Mark columns and two rows of data.",
  exercise:
    "Create a table containing three subjects and their marks.",
  solution:
`<table>
  <tr><th>Subject</th><th>Mark</th></tr>
  <tr><td>Math</td><td>90</td></tr>
  <tr><td>English</td><td>92</td></tr>
  <tr><td>Science</td><td>85</td></tr>
</table>`,
  mistakes: [
    "Placing cells outside a tr element.",
    "Using td for column headers when th is appropriate.",
    "Using tables to create the entire page layout."
  ]
});

/* PART 9: HTML LESSON 7 */

courseCatalog[0].lessons.push({
  title: "Text Semantics and Formatting",
  introduction:
    "HTML text elements can communicate importance and emphasis.",
  explanation: [
    {
      heading: "Strong",
      text: "The strong element marks text with strong importance."
    },
    {
      heading: "Emphasis",
      text: "The em element marks stress emphasis."
    },
    {
      heading: "Highlighted text",
      text: "The mark element highlights text for a relevant purpose."
    },
    {
      heading: "Line breaks",
      text: "The br element creates a line break within text."
    }
  ],
  code:
`<p><strong>Important:</strong> Save your work.</p>
<p>Please <em>read carefully</em>.</p>
<p>Remember <mark>HTML basics</mark>.</p>
<p>First line<br>Second line</p>`,
  codeExplanation: [
    "strong marks important content.",
    "em adds emphasis.",
    "mark highlights a portion of text.",
    "br creates a line break."
  ],
  output:
    "The browser displays emphasized, important, and highlighted text, followed by two lines.",
  exercise:
    "Write a paragraph using strong, em, and mark.",
  solution:
`<p><strong>Practice regularly.</strong></p>
<p><em>Keep learning.</em></p>
<p>Review <mark>HTML elements</mark>.</p>`,
  mistakes: [
    "Choosing elements only for their appearance.",
    "Using br repeatedly to create spacing.",
    "Expecting HTML formatting to replace CSS."
  ]
});

/* PART 10: HTML LESSON 8 */

courseCatalog[0].lessons.push({
  title: "Forms and Input Fields",
  introduction:
    "Forms collect information entered by users.",
  explanation: [
    {
      heading: "The form element",
      text: "form groups input controls that can submit information."
    },
    {
      heading: "Input types",
      text: "Input types include text, email, password, number, and checkbox."
    },
    {
      heading: "Labels",
      text: "A label describes an input. Matching for with the input id connects them."
    },
    {
      heading: "Required fields",
      text: "The required attribute asks the browser to require a value before normal form submission."
    }
  ],
  code:
`<form>
  <label for="username">Name:</label>
  <input id="username" name="username"
         type="text" required>

  <label for="email">Email:</label>
  <input id="email" name="email"
         type="email" required>

  <button type="submit">Submit</button>
</form>`,
  codeExplanation: [
    "form groups the controls.",
    "label describes each input.",
    "id connects an input to its label.",
    "name identifies the submitted field.",
    "required enables required-field validation.",
    "The button submits the form."
  ],
  output:
    "The browser displays name and email fields with a Submit button.",
  exercise:
    "Create a registration form with name, email, and password fields.",
  solution:
`<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" required>

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" required>

  <label for="password">Password:</label>
  <input id="password" name="password"
         type="password" required>

  <button type="submit">Register</button>
</form>`,
  mistakes: [
    "Connecting a label to the wrong id.",
    "Forgetting name attributes.",
    "Treating browser validation as a replacement for server validation."
  ]
});

/* PART 11: HTML LESSON 9 */

courseCatalog[0].lessons.push({
  title: "Semantic HTML Layout",
  introduction:
    "Semantic elements describe the purpose of page regions.",
  explanation: [
    {
      heading: "Header",
      text: "header usually contains introductory content."
    },
    {
      heading: "Navigation",
      text: "nav groups important navigation links."
    },
    {
      heading: "Main",
      text: "main identifies the dominant content of the page."
    },
    {
      heading: "Section",
      text: "section groups related content, usually with a heading."
    },
    {
      heading: "Footer",
      text: "footer often contains contact details or closing information."
    }
  ],
  code:
`<header>
  <h1>My Portfolio</h1>
</header>

<nav>
  <a href="#about">About</a>
</nav>

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I am learning web development.</p>
  </section>
</main>

<footer>
  <p>Thanks for visiting.</p>
</footer>`,
  codeExplanation: [
    "header contains the introductory heading.",
    "nav contains a navigation link.",
    "main contains the primary content.",
    "section groups the About content.",
    "footer contains the closing message."
  ],
  output:
    "A page appears with a heading, navigation link, About section, and footer.",
  exercise:
    "Create a page using header, nav, main, section, and footer.",
  solution:
`<header><h1>My Website</h1></header>
<nav><a href="#about">About</a></nav>
<main>
  <section id="about">
    <h2>About</h2>
    <p>Welcome to my website.</p>
  </section>
</main>
<footer><p>Contact me.</p></footer>`,
  mistakes: [
    "Using semantic elements only for their appearance.",
    "Using section without a meaningful grouping.",
    "Forgetting that CSS controls most visual styling."
  ]
});

/* PART 12: HTML LESSON 10 */

courseCatalog[0].lessons.push({
  title: "HTML Mini Project",
  introduction:
    "Build a small portfolio by combining the HTML elements you learned.",
  explanation: [
    {
      heading: "Plan the content",
      text: "Choose the information to display, such as your introduction and skills."
    },
    {
      heading: "Build the structure",
      text: "Use semantic elements to organize the page into clear regions."
    },
    {
      heading: "Add navigation",
      text: "Use links to move to sections with matching IDs."
    },
    {
      heading: "Test the page",
      text: "Check that your links work and your elements appear in the intended order."
    }
  ],
  code:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <header><h1>My Portfolio</h1></header>
  <nav><a href="#skills">My Skills</a></nav>
  <main>
    <section>
      <h2>About Me</h2>
      <p>I am learning HTML.</p>
    </section>
    <section id="skills">
      <h2>My Skills</h2>
      <ul><li>HTML</li><li>CSS</li></ul>
    </section>
  </main>
  <footer><p>Thanks for visiting!</p></footer>
</body>
</html>`,
  codeExplanation: [
    "DOCTYPE identifies the document as HTML5.",
    "The viewport meta tag helps mobile browsers size the page.",
    "header introduces the portfolio.",
    "nav links to the skills section.",
    "main contains the primary content.",
    "ul displays skills as a list.",
    "footer closes the page with a message."
  ],
  output:
    "A simple portfolio page appears with an About section, a Skills list, navigation, and a footer.",
  exercise:
    "Build your own portfolio with your name, a biography, three skills, and a contact link.",
  solution:
`<h1>My Portfolio</h1>
<section>
  <h2>About Me</h2>
  <p>I am learning web development.</p>
</section>
<section>
  <h2>My Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>`,
  mistakes: [
    "Using a navigation link with a missing target ID.",
    "Using incorrect image or page paths.",
    "Expecting HTML alone to provide a finished design."
  ]
});
/* =================================
   PART 13: COURSE CARDS
================================= */

function renderCourses() {
  const grid =
    $("#languageGrid") ||
    $("#courseGrid");

  if (!grid) return;

  const searchInput = $("#courseSearch");
  const searchText = (
    searchInput?.value || ""
  ).trim().toLowerCase();

  const filteredCourses = courseCatalog.filter(
    course =>
      course.title.toLowerCase().includes(searchText) ||
      course.subtitle.toLowerCase().includes(searchText) ||
      course.category.toLowerCase().includes(searchText)
  );

  grid.innerHTML = filteredCourses.map(course => `
    <article class="language-card">
      <div class="course-icon">${course.icon}</div>

      <h3>${escapeHTML(course.title)}</h3>

      <p>${escapeHTML(course.subtitle)}</p>

      <p>
        ${escapeHTML(course.level)}
        ·
        ${course.lessons.length} Lessons
      </p>

      <button
        type="button"
        data-open-course="${escapeHTML(course.id)}">
        Explore Course
      </button>
    </article>
  `).join("");

  if (filteredCourses.length === 0) {
    grid.innerHTML =
      "<p>No courses found.</p>";
  }
}/* =================================
   PART 14: OPEN COURSE
================================= */

function openCourse(courseId) {
  const course = courseCatalog.find(
    item => item.id === courseId
  );

  if (!course || course.lessons.length === 0) {
    return;
  }

  CS_MATE.currentCourse = course;
  CS_MATE.currentLesson = 0;

  renderLesson();
}/* =================================
   PART 15: LESSON DATA
================================= */

function getCurrentLesson() {
  const course = CS_MATE.currentCourse;

  if (!course) return null;

  return course.lessons[
    CS_MATE.currentLesson
  ] || null;
}/* =================================
   PART 16: LESSON HEADER
================================= */

function renderLesson() {
  const lesson = getCurrentLesson();

  if (!lesson) return;

  const title = $("#lessonTitle");
  const description = $("#lessonDescription");

  if (title) {
    title.textContent = lesson.title;
  }

  if (description) {
    description.textContent =
      lesson.introduction;
  }

  renderLessonContent();
}/* =================================
   PART 17: LESSON EXPLANATION
================================= */

function renderLessonContent() {
  const lesson = getCurrentLesson();
  const content = $("#lessonContent");

  if (!lesson || !content) return;

  content.innerHTML = `
    <section class="lesson-section">
      <h3>📘 Explanation</h3>

      ${lesson.explanation.map(item => `
        <div class="explanation-item">
          <h4>${escapeHTML(item.heading)}</h4>
          <p>${escapeHTML(item.text)}</p>
        </div>
      `).join("")}
    </section>
  `;

  renderLessonCode();
}/* =================================
   PART 18: LESSON CODE
================================= */

function renderLessonCode() {
  const lesson = getCurrentLesson();
  const content = $("#lessonContent");

  if (!lesson || !content) return;

  content.innerHTML += `
    <section class="lesson-section">
      <h3>💻 Code Example</h3>

      <pre><code>${escapeHTML(lesson.code)}</code></pre>

      <button
        type="button"
        class="copy-code-btn">
        Copy Code
      </button>

      <h4>Code Explanation</h4>

      <ul>
        ${lesson.codeExplanation.map(line => `
          <li>${escapeHTML(line)}</li>
        `).join("")}
      </ul>
    </section>
  `;

  renderLessonOutput();
}/* =================================
   PART 19: EXPECTED OUTPUT
================================= */

function renderLessonOutput() {
  const lesson = getCurrentLesson();
  const content = $("#lessonContent");

  if (!lesson || !content) return;

  content.innerHTML += `
    <section class="lesson-section">
      <h3>👀 Expected Output</h3>

      <p>${escapeHTML(lesson.output)}</p>
    </section>
  `;

  renderLessonExercise();
}/* =================================
   PART 20: LESSON EXERCISE
================================= */

function renderLessonExercise() {
  const lesson = getCurrentLesson();
  const content = $("#lessonContent");

  if (!lesson || !content) return;

  content.innerHTML += `
    <section class="lesson-section">
      <h3>📝 Practice Exercise</h3>

      <p>${escapeHTML(lesson.exercise)}</p>

      <button
        type="button"
        class="show-solution-btn">
        Show Solution
      </button>

      <pre class="lesson-solution" hidden><code>${escapeHTML(lesson.solution)}</code></pre>
    </section>
  `;
  renderLessonMistakes();
}/* =================================
   PART 21: COMMON MISTAKES
================================= */

function renderLessonMistakes() {
  const lesson = getCurrentLesson();
  const content = $("#lessonContent");

  if (!lesson || !content) return;

  content.innerHTML += `
    <section class="lesson-section">
      <h3>⚠️ Common Mistakes</h3>

      <ul>
        ${lesson.mistakes.map(mistake => `
          <li>${escapeHTML(mistake)}</li>
        `).join("")}
      </ul>
    </section>
  `;

  renderLessonNavigation();
}/* =================================
   PART 22: LESSON NAVIGATION
================================= */

function renderLessonNavigation() {
  const lesson = getCurrentLesson();
  const course = CS_MATE.currentCourse;
  const content = $("#lessonContent");

  if (!lesson || !course || !content) return;

  content.innerHTML += `
    <section class="lesson-navigation">
      <button
        type="button"
        id="prevLesson"
        ${CS_MATE.currentLesson === 0 ? "disabled" : ""}>
        ← Previous
      </button>

      <span>
        Lesson ${CS_MATE.currentLesson + 1}
        of ${course.lessons.length}
      </span>

      <button
        type="button"
        id="nextLesson"
        ${CS_MATE.currentLesson === course.lessons.length - 1 ? "disabled" : ""}>
        Next →
      </button>
    </section>
  `;

  renderCompleteButton();
}/* =================================
   PART 23: COMPLETE LESSON BUTTON
================================= */

function renderCompleteButton() {
  const content = $("#lessonContent");

  if (!content) return;

  content.innerHTML += `
    <button
      type="button"
      id="completeLesson">
      ✓ Mark Lesson as Complete
    </button>
  `;
}/* =================================
   PART 24: LESSON MOVEMENT
================================= */

function moveLesson(direction) {
  const course = CS_MATE.currentCourse;

  if (!course) return;

  const nextIndex =
    CS_MATE.currentLesson + direction;

  if (nextIndex < 0) return;

  if (nextIndex >= course.lessons.length) {
    return;
  }

  CS_MATE.currentLesson = nextIndex;

  renderLesson();
}/* =================================
   PART 25: SAVE LESSON PROGRESS
================================= */

function completeCurrentLesson() {
  const course = CS_MATE.currentCourse;

  if (!course) return;

  const lessonKey =
    `${course.id}-${CS_MATE.currentLesson}`;

  CS_MATE.completed.add(lessonKey);

  localStorage.setItem(
    "csMateCompleted",
    JSON.stringify([...CS_MATE.completed])
  );

  const button = $("#completeLesson");

  if (button) {
    button.textContent = "✓ Completed!";
    button.disabled = true;
  }
}/* =================================
   PART 26: BUTTON EVENTS
================================= */

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target.closest("#prevLesson")) {
    moveLesson(-1);
  }

  if (target.closest("#nextLesson")) {
    moveLesson(1);
  }

  if (target.closest("#completeLesson")) {
    completeCurrentLesson();
  }
});/* =================================
   PART 27: SHOW SOLUTION
================================= */

document.addEventListener("click", function (event) {
  const button = event.target.closest(
    ".show-solution-btn"
  );

  if (!button) return;

  const section = button.closest(
    ".lesson-section"
  );

  const solution = section?.querySelector(
    ".lesson-solution"
  );

  if (!solution) return;

  solution.hidden = !solution.hidden;

  button.textContent = solution.hidden
    ? "Show Solution"
    : "Hide Solution";
});/* =================================
   PART 28: COPY CODE
================================= */

document.addEventListener("click", async function (event) {
  const button = event.target.closest(
    ".copy-code-btn"
  );

  if (!button) return;

  const section = button.closest(
    ".lesson-section"
  );

  const code = section?.querySelector("pre code");

  if (!code) return;

  try {
    await navigator.clipboard.writeText(
      code.textContent
    );

    button.textContent = "Copied!";

  } catch (error) {
    button.textContent = "Copy failed";
  }
});/* =================================
   PART 29: COURSE CLICK
================================= */

document.addEventListener("click", function (event) {
  const button = event.target.closest(
    "[data-open-course]"
  );

  if (!button) return;

  const courseId = button.dataset.openCourse;

  openCourse(courseId);

  const modal = $("#lessonModal");

  if (modal) {
    modal.hidden = false;
    modal.classList.add("active");
  }
});/* =================================
   PART 30: CLOSE LESSON
================================= */

document.addEventListener("click", function (event) {
  const button = event.target.closest(
    "#closeLesson"
  );

  if (!button) return;

  const modal = $("#lessonModal");

  if (modal) {
    modal.classList.remove("active");
    modal.hidden = true;
  }
});/* =================================
   PART 31: LOAD PROGRESS
================================= */

function loadProgress() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("csMateCompleted") || "[]"
    );

    CS_MATE.completed = new Set(saved);

  } catch (error) {
    CS_MATE.completed = new Set();
  }
}/* =================================
   PART 32: REFRESH COMPLETION
================================= */

function refreshCompletionButton() {
  const course = CS_MATE.currentCourse;
  const button = $("#completeLesson");

  if (!course || !button) return;

  const key =
    `${course.id}-${CS_MATE.currentLesson}`;

  const isCompleted =
    CS_MATE.completed.has(key);

  button.textContent = isCompleted
    ? "✓ Completed!"
    : "✓ Mark Lesson as Complete";

  button.disabled = isCompleted;
}function renderCompleteButton() {
  const content = $("#lessonContent");

  if (!content) return;

  content.innerHTML += `
    <button type="button" id="completeLesson">
      ✓ Mark Lesson as Complete
    </button>
  `;

  refreshCompletionButton();
}/* =================================
   PART 33: COURSE SEARCH
================================= */

const courseSearch = $("#courseSearch");

if (courseSearch) {
  courseSearch.addEventListener(
    "input",
    renderCourses
  );
}/* =================================
   PART 34: INITIALIZE CS MATE
================================= */

function initializeCSMate() {
  loadProgress();
  renderCourses();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeCSMate,
    { once: true }
  );
} else {
  initializeCSMate();
}function initializeCSMate() {
  loadProgress();
  renderCourses();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeCSMate,
    { once: true }
  );
} else {
  initializeCSMate();
}
/* =================================
   PART 35: COURSE DISPLAY FIX
================================= */

function fixCourseDisplay() {
  const grid =
    document.querySelector("#languageGrid") ||
    document.querySelector("#courseGrid");

  if (!grid) {
    console.error("Course grid not found!");
    return;
  }

  if (
    typeof courseCatalog === "undefined" ||
    courseCatalog.length === 0
  ) {
    grid.innerHTML =
      "<p>Courses are not loaded. Check script.js.</p>";
    return;
  }

  renderCourses();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    fixCourseDisplay
  );
} else {
  fixCourseDisplay();
}