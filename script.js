
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
