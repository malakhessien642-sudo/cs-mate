
"use strict";

/* ==========================================
   CS MATE
   PART 1: Course Data and Lesson Content
========================================== */

const courseCatalog = [
  {
    id: "html",
    name: "HTML",
    logo: "HTML",
    category: "web",
    color: "#f97316",
    level: "Beginner",
    description: "Learn how to structure web pages from scratch.",
    lessons: [
      {
        title: "Introduction to HTML",
        explanation: `HTML stands for HyperText Markup Language.
It describes the structure and content of a web page.

HTML uses elements to represent headings, paragraphs,
links, images, forms, and many other types of content.

HTML is a markup language, not a programming language.`,
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>My first web page.</p>
</body>
</html>`,
        exercise: "Create an HTML page containing one heading and one paragraph."
      },
      {
        title: "HTML Document Structure",
        explanation: `An HTML document has a standard structure.

<!DOCTYPE html> tells the browser to use modern HTML.
The html element contains the whole document.
The head contains metadata and page settings.
The body contains the visible page content.`,
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`,
        exercise: "Create a valid HTML document with a title and a body."
      },
      {
        title: "Headings and Paragraphs",
        explanation: `HTML provides six heading levels, from h1 to h6.

Use h1 for the main page heading and lower levels
for subsections. Paragraphs are written with the p element.

Choose heading levels according to document structure,
not only according to their visual size.`,
        code: `<h1>Web Development</h1>
<h2>HTML Basics</h2>
<h3>Text Elements</h3>

<p>HTML structures the content of a page.</p>`,
        exercise: "Write one main heading, two subheadings, and three paragraphs."
      },
      {
        title: "Links and Navigation",
        explanation: `The a element creates a hyperlink.
Its href attribute specifies the destination.

A link can point to another website, another page,
or a section of the current page using an element ID.`,
        code: `<a href="https://example.com">
  Visit Example
</a>

<a href="#contact">Go to Contact</a>

<section id="contact">
  <h2>Contact</h2>
</section>`,
        exercise: "Create two links: one to another page and one to a section on your page."
      },
      {
        title: "Images and Accessibility",
        explanation: `The img element displays an image.
The src attribute specifies its source.
The alt attribute provides a text alternative.

Useful alt text helps people using screen readers
and provides information when an image cannot load.`,
        code: `<img
  src="images/computer.jpg"
  alt="A computer on a desk"
  width="400"
>`,
        exercise: "Add an image and write meaningful alternative text for it."
      },
      {
        title: "Lists in HTML",
        explanation: `Use ul for an unordered list and ol for an ordered list.
Each list item is represented by li.

Unordered lists are useful for groups of related items.
Ordered lists are useful when sequence matters.`,
        code: `<h2>Languages</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>`,
        exercise: "Create an ordered list of five steps for learning web development."
      },
      {
        title: "Tables",
        explanation: `HTML tables represent data arranged in rows and columns.

The table element contains the table.
tr creates a row, th creates a header cell,
and td creates a regular data cell.

Use tables for tabular data rather than page layout.`,
        code: `<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Beginner</td>
    </tr>
  </tbody>
</table>`,
        exercise: "Create a table showing three programming languages and their levels."
      },
      {
        title: "Forms and Inputs",
        explanation: `Forms collect information from users.
The form element groups form controls.

Labels describe inputs. The name attribute identifies
a field when form data is submitted.
Input types help browsers provide appropriate controls.`,
        code: `<form>
  <label for="username">Username</label>
  <input
    id="username"
    name="username"
    type="text"
    required
  >

  <button type="submit">Submit</button>
</form>`,
        exercise: "Build a form with a name field, an email field, and a submit button."
      },
      {
        title: "Semantic HTML",
        explanation: `Semantic elements describe the meaning of content.

header represents introductory content.
nav represents navigation links.
main contains the main content.
section groups related content.
article represents self-contained content.
footer contains closing information.

Semantic HTML can improve accessibility and structure.`,
        code: `<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#about">About</a>
</nav>

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>Welcome to my website.</p>
  </section>
</main>

<footer>Copyright 2026</footer>`,
        exercise: "Build a page using header, nav, main, section, and footer."
      },
      {
        title: "HTML Review Project",
        explanation: `Combine the elements you learned to create
a small personal profile page.

Include headings, paragraphs, an image, links,
a list, a table, and a contact form.

Keep the HTML organized and use semantic elements.`,
        code: `<main>
  <section>
    <h1>My Profile</h1>
    <p>I am learning web development.</p>
    <a href="#skills">My Skills</a>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </section>
</main>`,
        exercise: "Build a complete profile page using the HTML elements from this course."
      }
    ]
  },

  {
    id: "css",
    name: "CSS",
    logo: "CSS",
    category: "web",
    color: "#38bdf8",
    level: "Beginner",
    description: "Style web pages with layouts, colors, and responsive design.",
    lessons: [
      {
        title: "Introduction to CSS",
        explanation: `CSS stands for Cascading Style Sheets.
It controls how HTML elements look on screen.

A CSS rule contains a selector and declarations.
Each declaration has a property and a value.`,
        code: `h1 {
  color: royalblue;
  font-size: 32px;
}`,
        exercise: "Change a heading's color and font size using CSS."
      },
      {
        title: "Ways to Add CSS",
        explanation: `CSS can be added inline, inside a style element,
or in an external stylesheet.

External CSS is usually preferred for larger websites
because it separates styling from page structure.`,
        code: `/* style.css */
body {
  font-family: Arial, sans-serif;
}

p {
  line-height: 1.8;
}`,
        exercise: "Create a separate style.css file and connect it to index.html."
      },
      {
        title: "Selectors",
        explanation: `Selectors choose which HTML elements receive styles.

A type selector targets elements by tag name.
A class selector starts with a dot.
An ID selector starts with a hash symbol.`,
        code: `p {
  color: gray;
}

.card {
  padding: 20px;
}

#main-title {
  color: purple;
}`,
        exercise: "Style a heading by ID, a paragraph by tag, and a card by class."
      },
      {
        title: "Colors and Backgrounds",
        explanation: `CSS supports named colors, hexadecimal values,
RGB, RGBA, HSL, and other color formats.

Background properties control an element's background.
Use sufficient contrast so text remains readable.`,
        code: `body {
  background-color: #0b1020;
  color: #f8fafc;
}

.card {
  background-color: #182238;
}`,
        exercise: "Create a dark page with a contrasting card and readable text."
      },
      {
        title: "The Box Model",
        explanation: `Every element is laid out as a box.

Content is surrounded by padding.
Padding is surrounded by a border.
Margin creates space outside the border.

Using border-box makes sizing easier to manage.`,
        code: `* {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 1px solid gray;
  margin: 16px;
}`,
        exercise: "Create a card and experiment with its padding, border, and margin."
      },
      {
        title: "Flexbox",
        explanation: `Flexbox arranges items along a main axis.

display: flex activates flex layout.
justify-content aligns items along the main axis.
align-items aligns items along the cross axis.
gap controls spacing between items.`,
        code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
        exercise: "Create a navigation bar with a logo and three links using Flexbox."
      },
      {
        title: "CSS Grid",
        explanation: `CSS Grid creates two-dimensional layouts
with rows and columns.

Use grid-template-columns to define columns.
Use gap to control the spacing between grid items.`,
        code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}`,
        exercise: "Build a responsive grid of six cards."
      },
      {
        title: "Responsive Design",
        explanation: `Responsive design adapts a page to different screen sizes.

Media queries apply styles when conditions are met.
Flexible widths and responsive grids help layouts
work on phones, tablets, and desktop screens.`,
        code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
        exercise: "Make a three-column layout become one column on small screens."
      },
      {
        title: "Transitions and Hover Effects",
        explanation: `Transitions animate changes between CSS values.
The :hover pseudo-class applies styles when a pointer
hovers over an element.

Keep effects subtle and preserve usability on touch screens.`,
        code: `.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}`,
        exercise: "Add a smooth hover effect to a course card."
      },
      {
        title: "CSS Review Project",
        explanation: `Create a polished course catalog using the skills
covered in this course.

Use a consistent color palette, spacing, typography,
Flexbox or Grid, and responsive media queries.`,
        code: `.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.course-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #29334b;
}`,
        exercise: "Style a course catalog that works on both mobile and desktop."
      }
    ]
  }
];

/* =========================================
PART 2A — JavaScript Course
========================================= */

courseCatalog.push({

id: "javascript",
name: "JavaScript",
logo: "JS",
category: "programming",
color: "#facc15",
level: "Beginner",
description: "Learn programming and make websites interactive.",

lessons: [

{
  title: "1. Introduction to JavaScript",
  explanation: `JavaScript makes websites interactive.

It can respond to clicks and update page content.`,

  code: `console.log("Hello, World!");`,

  exercise: "Print your name using JavaScript."
},

{
  title: "2. Variables",
  explanation: `Variables store information.

Use let for changeable values and const for values you do not reassign.`,

  code: `let age = 19;

const name = "Malak";

console.log(name);
console.log(age);`,

  exercise: "Create a variable for your city and print it."
},

{
  title: "3. Data Types",
  explanation: `Common data types include String, Number, Boolean, Undefined, and Null.`,

  code: `let name = "Ali";

let age = 20;
let passed = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof passed);`,

  exercise: "Create a string, a number, and a boolean variable."
}

]

});
/* =========================================
PART 2B — JavaScript Lessons
========================================= */

courseCatalog.find(c => c.id === "javascript").lessons.push(

{
title: "4. Operators",
explanation: "Operators perform calculations and comparisons. Examples include +, -, *, /, and ===.",

code: `let a = 10;

let b = 3;

console.log(a + b);
console.log(a * b);
console.log(a > b);`,

exercise: "Create two numbers and print their sum."

},

{
title: "5. Conditions",
explanation: "The if statement runs code when a condition is true. The else statement runs when the condition is false.",

code: `let score = 85;

if (score >= 50) {
console.log("Passed");
} else {
console.log("Failed");
}`,

exercise: "Check whether a number is positive or negative."

},

{
title: "6. Loops",
explanation: "Loops repeat a block of code. A for loop is useful when you need to repeat an action.",

code: `for (let i = 1; i <= 5; i++) {

console.log(i);
}`,

exercise: "Print the numbers from 1 to 10."

}

);

console.log("JavaScript lessons 4-6 added.");
/* =========================================
PART 2C — JavaScript Lessons
========================================= */

courseCatalog.find(c => c.id === "javascript").lessons.push(

{
title: "7. Functions",
explanation: "Functions are reusable blocks of code. They can receive parameters and return results.",

code: `function add(a, b) {

return a + b;
}

console.log(add(5, 3));`,

exercise: "Create a function that returns the sum of two numbers."

},

{
title: "8. Arrays",
explanation: "Arrays store multiple values in one variable. Array indexes start at zero.",

code: `const fruits = ["Apple", "Orange", "Banana"];

console.log(fruits[0]);

fruits.push("Mango");

console.log(fruits);`,

exercise: "Create an array containing five favorite foods."

},

{
title: "9. Objects",
explanation: "Objects store related information as key-value pairs. You can access properties using dot notation.",

code: `const student = {

name: "Malak",
age: 19,
department: "Computer Science"
};

console.log(student.name);`,

exercise: "Create a book object with a title and author."

},

{
title: "10. DOM and Events",
explanation: "The DOM allows JavaScript to access HTML elements. Events let your program respond to actions such as button clicks.",

code: `const button = document.getElementById("myButton");

button.addEventListener("click", function () {
alert("Hello!");
});`,

exercise: "Create a button that displays a message when clicked."

}

);

console.log("JavaScript course completed: 10 lessons.");
/* =========================================
PART 3A — Python Course
========================================= */

courseCatalog.push({

id: "python",
name: "Python",
logo: "PY",
category: "programming",
color: "#60a5fa",
level: "Beginner",
description: "Learn Python programming step by step.",

lessons: [

{
  title: "1. Introduction to Python",
  explanation: `Python is a programming language known for its simple syntax.

It is used in web development, automation, and data analysis.`,

  code: `print("Hello, World!")`,

  exercise: "Write a statement that prints your name."
},

{
  title: "2. Variables",
  explanation: `Variables store values.

Python does not require you to declare a variable type explicitly.`,

  code: `name = "Malak"

age = 19

print(name)
print(age)`,

  exercise: "Create variables for your name and age."
},

{
  title: "3. Data Types",
  explanation: `Common Python data types include strings, integers, floats, and booleans.`,

  code: `name = "Ali"

age = 20
average = 88.5
passed = True

print(type(name))
print(type(age))
print(type(average))
print(type(passed))`,

  exercise: "Create a string, integer, and boolean variable."
}

]

});

console.log("Python course started.");/* =========================================
PART 3B — Python Lessons
========================================= */

courseCatalog.find(c => c.id === "python").lessons.push(

{
title: "4. User Input",
explanation: "The input() function receives information from the user. Use int() to convert input into an integer.",

code: `name = input("Enter your name: ")

age = int(input("Enter your age: "))

print("Hello", name)
print(age + 1)`,

exercise: "Ask the user for two numbers and print their sum."

},

{
title: "5. Operators",
explanation: "Arithmetic operators perform calculations. Comparison operators compare values.",

code: `a = 10

b = 3

print(a + b)
print(a - b)
print(a * b)
print(a > b)`,

exercise: "Create two numbers and print their product."

},

{
title: "6. Conditions",
explanation: "Use if, elif, and else to make decisions. Python uses indentation to define code blocks.",

code: `score = 85

if score >= 90:
print("Excellent")
elif score >= 50:
print("Passed")
else:
print("Failed")`,

exercise: "Write a program that checks whether a number is even or odd."

}

);

console.log("Python lessons 4-6 added.");/* =========================================
   PART 3C — Python Lessons
========================================= */

courseCatalog.find(c => c.id === "python").lessons.push(

  {
    title: "7. Loops",
    explanation: `Loops repeat instructions.
A for loop can iterate over a sequence of values.`,

    code: `for number in range(1, 6):
    print(number)`,

    exercise: "Print the numbers from 1 to 10 using a loop."
  },

  {
    title: "8. Functions",
    explanation: `Functions organize reusable code.
Use def to define a function and return to send back a result.`,

    code: `def add(a, b):
    return a + b

print(add(5, 3))`,

    exercise: "Create a function that returns the square of a number."
  },

  {
    title: "9. Lists",
    explanation: `Lists store multiple values in one variable.
Indexes start at zero, and append() adds a new item.`,

    code: `fruits = ["Apple", "Orange", "Banana"]

print(fruits[0])

fruits.append("Mango")

print(fruits)`,

    exercise: "Create a list of five favorite foods."
  },

  {
    title: "10. Dictionaries",
    explanation: `Dictionaries store data as key-value pairs.
You can access a value using its key.`,

    code: `student = {
    "name": "Ali",
    "grade": 90
}

print(student["name"])
print(student["grade"])`,

    exercise: "Create a dictionary describing a book."
  }

);

console.log("Python course completed: 10 lessons.");/* =========================================
   PART 4A — C# Course
========================================= */

courseCatalog.push({

  id: "csharp",
  name: "C#",
  logo: "C#",
  category: "programming",
  color: "#a78bfa",
  level: "Beginner",
  description: "Learn C# programming and object-oriented basics.",

  lessons: [

    {
      title: "1. Introduction to C#",
      explanation: `C# is a programming language developed by Microsoft.
It is widely used with .NET for web applications, desktop software, and games.`,

      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,

      exercise: "Write a C# program that prints your name."
    },

    {
      title: "2. Variables",
      explanation: `Variables store data.
C# requires you to specify a data type when declaring a variable in common declarations.`,

      code: `string name = "Malak";
int age = 19;
double grade = 95.5;
bool passed = true;

Console.WriteLine(name);
Console.WriteLine(age);`,

      exercise: "Create variables for your name, age, and grade."
    },

    {
      title: "3. Data Types",
      explanation: `Common C# data types include int, double, char, string, and bool.
Each type represents a different kind of value.`,

      code: `int number = 10;
double price = 25.5;
char letter = 'A';
string name = "Ali";
bool isStudent = true;

Console.WriteLine(number);
Console.WriteLine(name);`,

      exercise: "Declare one variable of each data type shown."
    }

  ]

});

console.log("C# course started.");/* =========================================
   PART 4B — C# Lessons
========================================= */

courseCatalog.find(c => c.id === "csharp").lessons.push(

  {
    title: "4. Operators",
    explanation: `Operators perform calculations and comparisons.
Arithmetic operators include +, -, *, and /.
Comparison operators include >, <, and ==.`,

    code: `int a = 10;
int b = 3;

Console.WriteLine(a + b);
Console.WriteLine(a - b);
Console.WriteLine(a * b);
Console.WriteLine(a > b);`,

    exercise: "Create two integers and print their sum and product."
  },

  {
    title: "5. Conditions",
    explanation: `The if statement executes code when a condition is true.
The else statement handles the alternative case.`,

    code: `int score = 85;

if (score >= 50)
{
    Console.WriteLine("Passed");
}
else
{
    Console.WriteLine("Failed");
}`,

    exercise: "Write a program that checks whether a number is positive or negative."
  },

  {
    title: "6. Loops",
    explanation: `Loops repeat instructions.
A for loop is useful when you know how many repetitions you need.`,

    code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,

    exercise: "Print the numbers from 1 to 10 using a for loop."
  }

);

console.log("C# lessons 4-6 added.");/* =========================================
   PART 4C — C# Lessons
========================================= */

courseCatalog.find(c => c.id === "csharp").lessons.push(

  {
    title: "7. Methods",
    explanation: `Methods are reusable blocks of code.
They can accept parameters and return values.`,

    code: `static int Add(int a, int b)
{
    return a + b;
}

// Inside Main:
Console.WriteLine(Add(5, 3));`,

    exercise: "Create a method that returns the square of a number."
  },

  {
    title: "8. Arrays",
    explanation: `Arrays store multiple values of the same type.
Array indexes start at zero.`,

    code: `int[] numbers = { 10, 20, 30, 40 };

Console.WriteLine(numbers[0]);

foreach (int number in numbers)
{
    Console.WriteLine(number);
}`,

    exercise: "Create an array of five integers and print every value."
  },

  {
    title: "9. Classes and Objects",
    explanation: `A class is a blueprint for creating objects.
An object is an instance of a class.`,

    code: `class Student
{
    public string Name = "";
    public int Age;
}

// Inside Main:
Student student = new Student();
student.Name = "Malak";
student.Age = 19;

Console.WriteLine(student.Name);`,

    exercise: "Create a Car class with Brand and Year properties."
  },

  {
    title: "10. Encapsulation",
    explanation: `Encapsulation protects an object's internal data.
Properties can control how values are read and changed.`,

    code: `class BankAccount
{
    public decimal Balance { get; private set; }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
        {
            Balance += amount;
        }
    }
}

// Inside Main:
BankAccount account = new BankAccount();
account.Deposit(100);

Console.WriteLine(account.Balance);`,

    exercise: "Create a class with a private field and a public method to update it safely."
  }

);

console.log("C# course completed: 10 lessons.");/* =========================================
   PART 5A — SQL Course
========================================= */

courseCatalog.push({

  id: "sql",
  name: "SQL",
  logo: "SQL",
  category: "database",
  color: "#38bdf8",
  level: "Beginner",
  description: "Learn how to store and retrieve data from databases.",

  lessons: [

    {
      title: "1. Introduction to SQL",
      explanation: `SQL stands for Structured Query Language.
It is used to create, read, update, and delete data in relational databases.`,

      code: `SELECT 'Hello, SQL!' AS message;`,

      exercise: "Write a query that displays your name as a result."
    },

    {
      title: "2. Creating Tables",
      explanation: `A table stores data in rows and columns.
Each column has a name and a data type.`,

      code: `CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT
);`,

      exercise: "Create a Courses table with an ID and a course name."
    },

    {
      title: "3. Inserting Data",
      explanation: `INSERT INTO adds new rows to a table.
Specify the column names and the values you want to insert.`,

      code: `INSERT INTO Students (StudentID, Name, Age)
VALUES (1, 'Malak', 19);`,

      exercise: "Insert a student named Ali into the Students table."
    }

  ]

});

console.log("SQL course started.");/* =========================================
   PART 5B — SQL Lessons
========================================= */

courseCatalog.find(c => c.id === "sql").lessons.push(

  {
    title: "4. SELECT Statement",
    explanation: `SELECT retrieves data from a table.
Use * to select all columns, or specify the columns you need.`,

    code: `SELECT * FROM Students;

SELECT Name, Age
FROM Students;`,

    exercise: "Write a query that displays only student names."
  },

  {
    title: "5. WHERE Clause",
    explanation: `WHERE filters rows according to a condition.
You can use operators such as =, >, <, and <>.`,

    code: `SELECT *
FROM Students
WHERE Age >= 18;`,

    exercise: "Write a query that finds students younger than 20."
  },

  {
    title: "6. ORDER BY",
    explanation: `ORDER BY sorts query results.
Use ASC for ascending order and DESC for descending order.`,

    code: `SELECT *
FROM Students
ORDER BY Name ASC;

SELECT *
FROM Students
ORDER BY Age DESC;`,

    exercise: "Sort students from oldest to youngest."
  }

);

console.log("SQL lessons 4-6 added.");/* =========================================
   PART 5C — SQL Lessons
========================================= */

courseCatalog.find(c => c.id === "sql").lessons.push(

  {
    title: "7. UPDATE Statement",
    explanation: `UPDATE modifies existing records.
Always use WHERE when you want to update specific rows.`,

    code: `UPDATE Students
SET Age = 20
WHERE StudentID = 1;`,

    exercise: "Update the age of a student whose ID is 2."
  },

  {
    title: "8. DELETE Statement",
    explanation: `DELETE removes rows from a table.
Without WHERE, all rows in the table may be deleted.`,

    code: `DELETE FROM Students
WHERE StudentID = 1;`,

    exercise: "Write a query that deletes a student whose ID is 3."
  },

  {
    title: "9. Aggregate Functions",
    explanation: `Aggregate functions calculate a result from multiple rows.
Common functions include COUNT, SUM, AVG, MIN, and MAX.`,

    code: `SELECT COUNT(*) AS TotalStudents
FROM Students;

SELECT AVG(Age) AS AverageAge
FROM Students;`,

    exercise: "Write a query that counts all students."
  },

  {
    title: "10. JOIN",
    explanation: `JOIN combines related data from multiple tables.
An INNER JOIN returns rows that match the join condition in both tables.`,

    code: `SELECT Students.Name, Enrollments.CourseID
FROM Students
INNER JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;`,

    exercise: "Write a JOIN query connecting students to their enrollments."
  }

);

console.log("SQL course completed: 10 lessons.");/* =========================================
   PART 6A — Java Course
========================================= */

courseCatalog.push({

  id: "java",
  name: "Java",
  logo: "JAVA",
  category: "programming",
  color: "#fb923c",
  level: "Beginner",
  description: "Learn Java programming from the basics.",

  lessons: [

    {
      title: "1. Introduction to Java",
      explanation: `Java is a general-purpose programming language.
It is widely used for backend systems, enterprise applications, and Android development.`,

      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

      exercise: "Write a Java program that prints your name."
    },

    {
      title: "2. Variables",
      explanation: `Variables store values.
Java requires each variable to have a declared type.`,

      code: `String name = "Malak";
int age = 19;
double grade = 95.5;
boolean passed = true;

System.out.println(name);
System.out.println(age);`,

      exercise: "Create variables for your name, age, and grade."
    },

    {
      title: "3. Data Types",
      explanation: `Common Java data types include int, double, char, boolean, and String.
Primitive types store simple values, while String represents text.`,

      code: `int number = 10;
double price = 25.5;
char letter = 'A';
boolean isStudent = true;
String name = "Ali";

System.out.println(number);
System.out.println(name);`,

      exercise: "Declare variables using int, double, char, and boolean."
    }

  ]

});

console.log("Java course started.");/* =========================================
   PART 6B — Java Lessons
========================================= */

courseCatalog.find(c => c.id === "java").lessons.push(

  {
    title: "4. Operators",
    explanation: `Operators perform calculations and comparisons.
Arithmetic operators include +, -, *, and /.`,

    code: `int a = 10;
int b = 3;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a > b);`,

    exercise: "Create two integers and print their sum and product."
  },

  {
    title: "5. Conditions",
    explanation: `The if statement executes code when a condition is true.
The else statement handles the alternative case.`,

    code: `int score = 85;

if (score >= 50) {
    System.out.println("Passed");
} else {
    System.out.println("Failed");
}`,

    exercise: "Write a program that checks whether a number is positive or negative."
  },

  {
    title: "6. Loops",
    explanation: `Loops repeat instructions.
A for loop is useful when you know how many repetitions you need.`,

    code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,

    exercise: "Print the numbers from 1 to 10 using a for loop."
  }

);

console.log("Java lessons 4-6 added.");/* =========================================
   PART 6C — Java Lessons
========================================= */

courseCatalog.find(c => c.id === "java").lessons.push(

  {
    title: "7. Methods",
    explanation: `Methods are reusable blocks of code.
They can receive parameters and return values.`,

    code: `static int add(int a, int b) {
    return a + b;
}

// Call the method inside main:
System.out.println(add(5, 3));`,

    exercise: "Create a method that returns the square of a number."
  },

  {
    title: "8. Arrays",
    explanation: `Arrays store multiple values of the same type.
Array indexes start at zero.`,

    code: `int[] numbers = {10, 20, 30, 40};

System.out.println(numbers[0]);

for (int number : numbers) {
    System.out.println(number);
}`,

    exercise: "Create an array of five integers and print every value."
  },

  {
    title: "9. Classes and Objects",
    explanation: `A class is a blueprint for creating objects.
An object is an instance of a class.`,

    code: `class Student {
    String name;
    int age;
}

// Inside main:
Student student = new Student();
student.name = "Malak";
student.age = 19;

System.out.println(student.name);`,

    exercise: "Create a Car class with brand and year fields."
  },

  {
    title: "10. Encapsulation",
    explanation: `Encapsulation protects an object's internal data.
Private fields and public methods control access to that data.`,

    code: `class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}`,

    exercise: "Create a class with a private field and a public method to read its value."
  }

);

console.log("Java course completed: 10 lessons.");/* =========================================
   PART 7A — PHP Course
========================================= */

courseCatalog.push({

  id: "php",
  name: "PHP",
  logo: "PHP",
  category: "web",
  color: "#a78bfa",
  level: "Beginner",
  description: "Learn server-side web development with PHP.",

  lessons: [

    {
      title: "1. Introduction to PHP",
      explanation: `PHP is a server-side scripting language.
It can generate dynamic web pages and communicate with databases.`,

      code: `<?php
echo "Hello, World!";
?>`,

      exercise: "Write PHP code that prints your name."
    },

    {
      title: "2. Variables",
      explanation: `PHP variables start with the dollar sign.
PHP variable names are case-sensitive.`,

      code: `<?php
$name = "Malak";
$age = 19;

echo $name;
echo $age;
?>`,

      exercise: "Create variables for your name and age."
    },

    {
      title: "3. Data Types",
      explanation: `PHP supports strings, integers, floats, booleans, arrays, and other types.
Use var_dump() to inspect a value and its type.`,

      code: `<?php
$name = "Ali";
$age = 20;
$price = 25.5;
$isStudent = true;

var_dump($name);
var_dump($age);
var_dump($price);
var_dump($isStudent);
?>`,

      exercise: "Create a string, integer, and boolean variable."
    }

  ]

});

console.log("PHP course started.");/* =========================================
   PART 7B — PHP Lessons
========================================= */

courseCatalog.find(c => c.id === "php").lessons.push(

  {
    title: "4. Operators",
    explanation: `Operators perform calculations and comparisons.
PHP supports arithmetic, comparison, and logical operators.`,

    code: `<?php
$a = 10;
$b = 3;

echo $a + $b;
echo $a * $b;
var_dump($a > $b);
?>`,

    exercise: "Create two numbers and print their sum and product."
  },

  {
    title: "5. Conditions",
    explanation: `Use if and else to execute code based on a condition.
PHP conditions are written inside parentheses.`,

    code: `<?php
$score = 85;

if ($score >= 50) {
    echo "Passed";
} else {
    echo "Failed";
}
?>`,

    exercise: "Write a program that checks whether a number is even or odd."
  },

  {
    title: "6. Loops",
    explanation: `Loops repeat instructions.
A for loop is useful when you know how many repetitions you need.`,

    code: `<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . "<br>";
}
?>`,

    exercise: "Print the numbers from 1 to 10 using a loop."
  }

);

console.log("PHP lessons 4-6 added.");/* =========================================
   PART 7C — PHP Lessons
========================================= */

courseCatalog.find(c => c.id === "php").lessons.push(

  {
    title: "7. Functions",
    explanation: `Functions are reusable blocks of code.
They can accept parameters and return results.`,

    code: `<?php
function add($a, $b) {
    return $a + $b;
}

echo add(5, 3);
?>`,

    exercise: "Create a function that returns the square of a number."
  },

  {
    title: "8. Arrays",
    explanation: `Indexed arrays store multiple values.
Associative arrays store values using named keys.`,

    code: `<?php
$fruits = ["Apple", "Orange", "Banana"];

echo $fruits[0];

$student = [
    "name" => "Malak",
    "age" => 19
];

echo $student["name"];
?>`,

    exercise: "Create an array of three subjects and print the first subject."
  },

  {
    title: "9. Forms",
    explanation: `PHP can receive form data sent by a browser.
The POST method is commonly used to submit form data.`,

    code: `<!-- HTML form -->
<form method="post">
    <input name="username">
    <button type="submit">Send</button>
</form>

<?php
if (isset($_POST["username"])) {
    echo htmlspecialchars($_POST["username"]);
}
?>`,

    exercise: "Create a form that accepts a user's name and displays it safely."
  },

  {
    title: "10. Database Connection Concepts",
    explanation: `PHP can communicate with databases using PDO.
Prepared statements help protect database queries from SQL injection.`,

    code: `<?php
$pdo = new PDO(
    "mysql:host=localhost;dbname=school",
    "username",
    "password"
);

$stmt = $pdo->prepare(
    "SELECT * FROM Students WHERE StudentID = ?"
);

$stmt->execute([1]);

$student = $stmt->fetch(PDO::FETCH_ASSOC);
?>`,

    exercise: "Explain why prepared statements are safer than building SQL queries by joining strings."
  }

);

console.log("PHP course completed: 10 lessons.");/* =========================================
   PART 8A — Git & GitHub Course
========================================= */

courseCatalog.push({

  id: "git",
  name: "Git & GitHub",
  logo: "GIT",
  category: "programming",
  color: "#f97316",
  level: "Beginner",
  description: "Learn version control and manage projects with GitHub.",

  lessons: [

    {
      title: "1. Introduction to Git",
      explanation: `Git is a version control system.
It tracks changes in files and helps developers work on projects over time.`,

      code: `git --version`,

      exercise: "Explain why version control is useful in software projects."
    },

    {
      title: "2. Creating a Repository",
      explanation: `A repository stores project files and their version history.
You can create a repository locally or on GitHub.`,

      code: `git init
git status`,

      exercise: "Describe the difference between a local repository and a GitHub repository."
    },

    {
      title: "3. Tracking Changes",
      explanation: `Git can track changes to files.
The staging area lets you select which changes will be included in the next commit.`,

      code: `git add index.html
git status`,

      exercise: "Write the command that stages all changed files in the current directory."
    }

  ]

});

console.log("Git & GitHub course started.");/* =========================================
   PART 8B — Git & GitHub Lessons
========================================= */

courseCatalog.find(c => c.id === "git").lessons.push(

  {
    title: "4. Commits",
    explanation: `A commit saves a snapshot of staged changes.
A clear commit message explains what changed.`,

    code: `git add .
git commit -m "Add homepage"`,

    exercise: "Write a commit command for a change that fixes a navigation menu."
  },

  {
    title: "5. Branches",
    explanation: `Branches let you work on changes separately from the main branch.
They are useful for developing features and fixing bugs.`,

    code: `git branch feature-menu
git switch feature-menu`,

    exercise: "Write the commands to create and switch to a branch named feature-login."
  },

  {
    title: "6. Merging",
    explanation: `Merging combines changes from one branch into another.
Switch to the target branch before merging.`,

    code: `git switch main
git merge feature-menu`,

    exercise: "Explain what happens when you merge a feature branch into main."
  }

);

console.log("Git lessons 4-6 added.");/* =========================================
   PART 8C — Git & GitHub Lessons
========================================= */

courseCatalog.find(c => c.id === "git").lessons.push(

  {
    title: "7. Connecting to GitHub",
    explanation: `A remote connects your local repository to a repository hosted online.
The remote is often named origin.`,

    code: `git remote add origin https://github.com/USERNAME/REPOSITORY.git
git remote -v`,

    exercise: "Explain what the origin remote represents."
  },

  {
    title: "8. Pushing Changes",
    explanation: `The push command uploads local commits to a remote repository.
The -u option can set an upstream branch for future pushes.`,

    code: `git push -u origin main`,

    exercise: "Write the command to push new commits from main to origin."
  },

  {
    title: "9. Pulling Changes",
    explanation: `The pull command downloads remote changes and integrates them into your current branch.
It helps keep your local work up to date.`,

    code: `git pull origin main`,

    exercise: "Explain why you might pull before starting new work."
  },

  {
    title: "10. Merge Conflicts",
    explanation: `A merge conflict happens when Git cannot automatically combine changes.
You must review the conflicting files, choose the correct content, and commit the resolved changes.`,

    code: `git status

# After manually resolving conflicts:
git add .
git commit -m "Resolve merge conflict"`,

    exercise: "Describe the steps you would take to resolve a merge conflict."
  }

);

console.log("Git & GitHub course completed: 10 lessons.");/* =========================================
   PART 9A — Render Courses
========================================= */

function csMateEscape(text) {
  return String(text).replace(/[&<>"']/g, function (char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}

function csMateRenderCourses() {
  const grid = document.getElementById("languageGrid");
  const search = document.getElementById("searchInput");
  const category = document.getElementById("categoryFilter");
  const empty = document.getElementById("emptyState");

  if (!grid) return;

  const searchText = search
    ? search.value.trim().toLowerCase()
    : "";

  const selectedCategory = category
    ? category.value
    : "all";

  const filteredCourses = courseCatalog.filter(function (course) {
    const matchesSearch =
      course.name.toLowerCase().includes(searchText) ||
      course.description.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filteredCourses.map(function (course) {
    return `
      <article class="language-card"
        style="--card-accent: ${course.color}">

        <div class="card-top">
          <div class="language-logo">
            ${csMateEscape(course.logo)}
          </div>

          <span class="card-category">
            ${csMateEscape(course.category)}
          </span>
        </div>

        <h3>${csMateEscape(course.name)}</h3>

        <p class="card-description">
          ${csMateEscape(course.description)}
        </p>

        <div class="card-meta">
          <span>${csMateEscape(course.level)}</span>
          <span>${course.lessons.length} Lessons</span>
        </div>

        <button class="card-button"
          type="button"
          data-open-course="${csMateEscape(course.id)}">
          Start Learning
        </button>

      </article>
    `;
  }).join("");

  if (empty) {
    empty.hidden = filteredCourses.length > 0;
  }

  const languageCount = document.getElementById("languageCount");
  const lessonCount = document.getElementById("lessonCount");

  if (languageCount) {
    languageCount.textContent = courseCatalog.length;
  }

  if (lessonCount) {
    lessonCount.textContent = courseCatalog.reduce(
      function (total, course) {
        return total + course.lessons.length;
      },
      0
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("searchInput");
  const category = document.getElementById("categoryFilter");

  if (search) {
    search.addEventListener("input", csMateRenderCourses);
  }

  if (category) {
    category.addEventListener("change", csMateRenderCourses);
  }

  csMateRenderCourses();
});

console.log("CS MATE: Course cards are ready.");/* =========================================
   PART 9B — Open Course and Show Lessons
========================================= */

let csMateCurrentCourse = null;
let csMateCurrentLesson = 0;

function csMateOpenCourse(courseId) {
  const course = courseCatalog.find(function (item) {
    return item.id === courseId;
  });

  if (!course) return;

  csMateCurrentCourse = course;
  csMateCurrentLesson = 0;

  const modal = document.getElementById("lessonModal");

  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  csMateRenderLesson();
}

function csMateRenderLesson() {
  if (!csMateCurrentCourse) return;

  const course = csMateCurrentCourse;
  const lesson = course.lessons[csMateCurrentLesson];

  const courseName = document.getElementById("lessonLanguage");
  const title = document.getElementById("lessonTitle");
  const description = document.getElementById("lessonDescription");
  const content = document.getElementById("lessonContent");
  const navigation = document.getElementById("lessonNavigation");

  if (courseName) courseName.textContent = course.name;
  if (title) title.textContent = lesson.title;

  if (description) {
    description.textContent = lesson.explanation;
  }

  if (content) {
    content.innerHTML = `
      <h3>Example Code</h3>
      <pre><code>${csMateEscape(lesson.code)}</code></pre>

      <h3>Practice Exercise</h3>
      <p>${csMateEscape(lesson.exercise)}</p>
    `;
  }

  if (navigation) {
    navigation.innerHTML = course.lessons.map(function (item, index) {
      return `
        <button
          type="button"
          class="lesson-nav-item ${
            index === csMateCurrentLesson ? "active" : ""
          }"
          data-lesson-index="${index}">
          ${index + 1}. ${csMateEscape(item.title)}
        </button>
      `;
    }).join("");
  }

  const previous = document.getElementById("previousLesson");
  const next = document.getElementById("nextLesson");
  const complete = document.getElementById("completeLesson");

  if (previous) {
    previous.disabled = csMateCurrentLesson === 0;
  }

  if (next) {
    next.disabled =
      csMateCurrentLesson === course.lessons.length - 1;
  }

  if (complete) {
    complete.textContent = "Mark as Complete";
  }
}

document.addEventListener("click", function (event) {
  const courseButton = event.target.closest("[data-open-course]");

  if (courseButton) {
    csMateOpenCourse(courseButton.dataset.openCourse);
    return;
  }

  const lessonButton = event.target.closest("[data-lesson-index]");

  if (lessonButton && csMateCurrentCourse) {
    csMateCurrentLesson = Number(lessonButton.dataset.lessonIndex);
    csMateRenderLesson();
  }
});

console.log("CS MATE: Lesson viewer is ready.");/* =========================================
   PART 9C — Lesson Navigation and Progress
========================================= */

const csMateCompletedLessons = new Set(
  JSON.parse(localStorage.getItem("csMateCompletedLessons") || "[]")
);

function csMateSaveProgress() {
  localStorage.setItem(
    "csMateCompletedLessons",
    JSON.stringify(Array.from(csMateCompletedLessons))
  );
}

function csMateLessonKey() {
  return (
    csMateCurrentCourse.id +
    "-" +
    csMateCurrentLesson
  );
}

function csMateShowToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.csMateToastTimer);

  window.csMateToastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target.closest("#closeLesson")) {
    const modal = document.getElementById("lessonModal");

    if (modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }

    return;
  }

  if (target.closest("#previousLesson")) {
    if (csMateCurrentLesson > 0) {
      csMateCurrentLesson--;
      csMateRenderLesson();
    }

    return;
  }

  if (target.closest("#nextLesson")) {
    if (
      csMateCurrentCourse &&
      csMateCurrentLesson < csMateCurrentCourse.lessons.length - 1
    ) {
      csMateCurrentLesson++;
      csMateRenderLesson();
    }

    return;
  }

  if (target.closest("#completeLesson")) {
    if (!csMateCurrentCourse) return;

    csMateCompletedLessons.add(csMateLessonKey());
    csMateSaveProgress();

    csMateShowToast("Lesson marked as complete!");

    csMateRenderLesson();
  }
});

console.log("CS MATE: Progress tracking is ready.");/* =========================================
   PART 10A — Arabic and English Interface
========================================= */

const csMateTranslations = {

  en: {
    navHome: "Home",
    navCourses: "Courses",
    navRoadmap: "Learning Roadmap",
    navAbout: "About",

    heroBadge: "Your coding journey starts here",
    heroTitle: "Learn Programming Beyond Limits",
    heroDescription: "Explore programming languages and build your skills step by step.",
    startLearning: "Start Learning",
    viewRoadmap: "View Roadmap",

    statLanguages: "Courses",
    statLessons: "Lessons",
    statAccess: "Free Access",

    coursesEyebrow: "Explore",
    coursesTitle: "Explore Our Courses",
    coursesDescription: "Choose a course and start learning at your own pace.",
    searchPlaceholder: "Search courses...",
    allCategories: "All Categories",
    programmingCategory: "Programming",
    webCategory: "Web Development",
    databaseCategory: "Databases",
    mobileCategory: "Mobile Development",
    emptyCourses: "No courses found.",

    roadmapEyebrow: "Your Journey",
    roadmapTitle: "Learning Roadmap",
    stepOneTitle: "Choose Your Path",
    stepOneText: "Choose a course that matches your interests.",
    stepTwoTitle: "Learn the Basics",
    stepTwoText: "Study the lessons and practice the examples.",
    stepThreeTitle: "Build Projects",
    stepThreeText: "Apply what you learn in practical projects.",

    aboutTitle: "About CS MATE",
    aboutText: "A learning platform designed to help you explore programming.",

    lessonContents: "Lesson Contents",
    previousLesson: "Previous",
    completeLesson: "Mark as Complete",
    nextLesson: "Next"
  },

  ar: {
    navHome: "الرئيسية",
    navCourses: "الكورسات",
    navRoadmap: "خريطة التعلم",
    navAbout: "عن المنصة",

    heroBadge: "رحلتك في البرمجة تبدأ هنا",
    heroTitle: "تعلّم البرمجة بلا حدود",
    heroDescription: "استكشف لغات البرمجة وطوّر مهاراتك خطوة بخطوة.",
    startLearning: "ابدأ التعلم",
    viewRoadmap: "عرض خريطة التعلم",

    statLanguages: "الكورسات",
    statLessons: "الدروس",
    statAccess: "وصول مجاني",

    coursesEyebrow: "استكشف",
    coursesTitle: "استكشف الكورسات",
    coursesDescription: "اختر كورسًا وابدأ التعلم بالسرعة المناسبة لك.",
    searchPlaceholder: "ابحث عن كورس...",
    allCategories: "كل التصنيفات",
    programmingCategory: "البرمجة",
    webCategory: "تطوير الويب",
    databaseCategory: "قواعد البيانات",
    mobileCategory: "تطبيقات الموبايل",
    emptyCourses: "لم يتم العثور على كورسات.",

    roadmapEyebrow: "رحلتك",
    roadmapTitle: "خريطة التعلم",
    stepOneTitle: "اختر مسارك",
    stepOneText: "اختر كورسًا يناسب اهتماماتك.",
    stepTwoTitle: "تعلّم الأساسيات",
    stepTwoText: "ادرس الدروس وطبّق الأمثلة.",
    stepThreeTitle: "أنشئ مشاريع",
    stepThreeText: "طبّق ما تتعلمه في مشاريع عملية.",

    aboutTitle: "عن CS MATE",
    aboutText: "منصة تعليمية تساعدك على استكشاف البرمجة.",

    lessonContents: "محتويات الدرس",
    previousLesson: "السابق",
    completeLesson: "تم إكمال الدرس",
    nextLesson: "التالي"
  }

};

let csMateLanguage =
  localStorage.getItem("csMateLanguage") || "en";

function csMateApplyLanguage() {
  const translations = csMateTranslations[csMateLanguage];

  document.documentElement.lang = csMateLanguage;
  document.documentElement.dir =
    csMateLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.dataset.i18n;

    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(
    function (element) {
      const key = element.dataset.i18nPlaceholder;

      if (translations[key]) {
        element.placeholder = translations[key];
      }
    }
  );

  const languageButton = document.getElementById("languageToggle");

  if (languageButton) {
    languageButton.textContent =
      csMateLanguage === "en" ? "عربي" : "English";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const languageButton = document.getElementById("languageToggle");

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      csMateLanguage = csMateLanguage === "en" ? "ar" : "en";

      localStorage.setItem("csMateLanguage", csMateLanguage);

      csMateApplyLanguage();
      csMateRenderCourses();
    });
  }

  csMateApplyLanguage();
});

console.log("CS MATE: Language interface is ready.");/* =========================================
   PART 10B — Dark and Light Theme
========================================= */

function csMateApplyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const themeButton = document.getElementById("themeToggle");

  if (themeButton) {
    themeButton.textContent =
      theme === "dark" ? "☀️" : "🌙";

    themeButton.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode"
    );
  }

  localStorage.setItem("csMateTheme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("csMateTheme");

  csMateApplyTheme(
    savedTheme === "light" ? "light" : "dark"
  );

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const currentTheme =
        document.documentElement.dataset.theme || "dark";

      const newTheme =
        currentTheme === "dark" ? "light" : "dark";

      csMateApplyTheme(newTheme);
    });
  }
});

console.log("CS MATE: Theme switcher is ready.");/* =========================================
   PART 10C — Course Progress Display
========================================= */

function csMateUpdateProgressUI() {
  if (!csMateCurrentCourse) return;

  const course = csMateCurrentCourse;

  const completedCount = course.lessons.filter(
    function (lesson, index) {
      return csMateCompletedLessons.has(course.id + "-" + index);
    }
  ).length;

  const totalLessons = course.lessons.length;

  const percentage = totalLessons
    ? Math.round((completedCount / totalLessons) * 100)
    : 0;

  let progressBox = document.getElementById("csMateProgressBox");

  if (!progressBox) {
    progressBox = document.createElement("div");
    progressBox.id = "csMateProgressBox";

    progressBox.style.cssText = `
      margin: 16px 0;
      padding: 14px;
      border-radius: 12px;
      background: var(--surface, #172033);
      color: var(--text, #ffffff);
    `;

    const content = document.getElementById("lessonContent");

    if (content) {
      content.parentNode.insertBefore(progressBox, content);
    }
  }

  if (progressBox) {
    progressBox.innerHTML = `
      <div style="display:flex;justify-content:space-between;
                  gap:10px;margin-bottom:10px;">
        <strong>Course Progress</strong>
        <span>${completedCount}/${totalLessons} lessons · ${percentage}%</span>
      </div>

      <div style="height:8px;background:#30394b;
                  border-radius:20px;overflow:hidden;">
        <div style="width:${percentage}%;height:100%;
                    background:#38bdf8;border-radius:20px;
                    transition:width .3s ease;"></div>
      </div>
    `;
  }

  document.querySelectorAll("[data-lesson-index]").forEach(
    function (button) {
      const index = Number(button.dataset.lessonIndex);
      const isCompleted = csMateCompletedLessons.has(
        course.id + "-" + index
      );

      const lesson = course.lessons[index];

      button.textContent =
        (isCompleted ? "✓ " : "") +
        (index + 1) + ". " + lesson.title;

      button.classList.toggle("completed", isCompleted);
    }
  );
}

// Update progress after lesson navigation and completion.
document.addEventListener("click", function (event) {
  if (
    event.target.closest("[data-open-course]") ||
    event.target.closest("[data-lesson-index]") ||
    event.target.closest("#previousLesson") ||
    event.target.closest("#nextLesson") ||
    event.target.closest("#completeLesson")
  ) {
    setTimeout(csMateUpdateProgressUI, 0);
  }
});

console.log("CS MATE: Course progress display is ready.");/* =========================================
   PART 10D — Modal and Keyboard Controls
========================================= */

// Close the lesson window with Escape.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("lessonModal");

    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  // Navigate lessons with the arrow keys.
  const modal = document.getElementById("lessonModal");

  if (!modal || !modal.classList.contains("active")) return;

  if (event.key === "ArrowRight") {
    if (
      csMateCurrentCourse &&
      csMateCurrentLesson < csMateCurrentCourse.lessons.length - 1
    ) {
      csMateCurrentLesson++;
      csMateRenderLesson();
      csMateUpdateProgressUI();
    }
  }

  if (event.key === "ArrowLeft") {
    if (csMateCurrentCourse && csMateCurrentLesson > 0) {
      csMateCurrentLesson--;
      csMateRenderLesson();
      csMateUpdateProgressUI();
    }
  }
});

// Close when clicking the backdrop outside the lesson panel.
document.addEventListener("click", function (event) {
  const modal = document.getElementById("lessonModal");

  if (modal && event.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});

console.log("CS MATE: Keyboard controls are ready.");/* =========================================
   PART 10E — Completed Lesson Button
========================================= */

function csMateUpdateCompleteButton() {
  const button = document.getElementById("completeLesson");

  if (!button || !csMateCurrentCourse) return;

  const isCompleted = csMateCompletedLessons.has(
    csMateLessonKey()
  );

  if (isCompleted) {
    button.textContent =
      csMateLanguage === "ar"
        ? "✓ تم إكمال الدرس"
        : "✓ Lesson Completed";

    button.classList.add("completed");
    button.setAttribute("aria-pressed", "true");
  } else {
    button.textContent =
      csMateLanguage === "ar"
        ? "تحديد الدرس كمكتمل"
        : "Mark as Complete";

    button.classList.remove("completed");
    button.setAttribute("aria-pressed", "false");
  }
}

// Refresh the button after lesson actions.
document.addEventListener("click", function (event) {
  const shouldRefresh =
    event.target.closest("[data-open-course]") ||
    event.target.closest("[data-lesson-index]") ||
    event.target.closest("#previousLesson") ||
    event.target.closest("#nextLesson") ||
    event.target.closest("#completeLesson") ||
    event.target.closest("#languageToggle");

  if (shouldRefresh) {
    setTimeout(csMateUpdateCompleteButton, 0);
  }
});

console.log("CS MATE: Completed lesson button is ready.");/* =========================================
   PART 10F — Copy Code Buttons
========================================= */

function csMateAddCopyButtons() {
  const content = document.getElementById("lessonContent");

  if (!content) return;

  content.querySelectorAll("pre").forEach(function (pre) {
    if (pre.querySelector("[data-copy-code]")) return;

    const button = document.createElement("button");

    button.type = "button";
    button.textContent =
      csMateLanguage === "ar" ? "نسخ الكود" : "Copy Code";

    button.dataset.copyCode = "true";

    button.style.cssText = `
      display: block;
      margin: 10px 0;
      padding: 8px 14px;
      border: 0;
      border-radius: 8px;
      background: #2563eb;
      color: white;
      cursor: pointer;
      font-size: 13px;
    `;

    pre.parentNode.insertBefore(button, pre);
  });
}

// Add copy buttons whenever a lesson is rendered.
const csMateOriginalRenderLesson = csMateRenderLesson;

csMateRenderLesson = function () {
  csMateOriginalRenderLesson();
  csMateAddCopyButtons();
};

// Handle copying code.
document.addEventListener("click", async function (event) {
  const button = event.target.closest("[data-copy-code]");

  if (!button) return;

  const pre = button.nextElementSibling;

  if (!pre || !pre.querySelector("code")) return;

  const code = pre.querySelector("code").textContent;

  try {
    await navigator.clipboard.writeText(code);

    button.textContent =
      csMateLanguage === "ar" ? "✓ تم النسخ" : "✓ Copied!";

    csMateShowToast(
      csMateLanguage === "ar"
        ? "تم نسخ الكود بنجاح"
        : "Code copied successfully!"
    );

    setTimeout(function () {
      button.textContent =
        csMateLanguage === "ar" ? "نسخ الكود" : "Copy Code";
    }, 1800);

  } catch (error) {
    csMateShowToast(
      csMateLanguage === "ar"
        ? "تعذّر النسخ تلقائيًا، حاولي تحديد الكود ونسخه"
        : "Copy failed. Please select and copy the code manually."
    );
  }
});

console.log("CS MATE: Copy code feature is ready.");/* =========================================
   PART 10G — Overall Learning Dashboard
========================================= */

function csMateUpdateDashboard() {
  const grid = document.getElementById("languageGrid");
  if (!grid) return;

  let dashboard = document.getElementById("csMateDashboard");

  if (!dashboard) {
    dashboard = document.createElement("section");
    dashboard.id = "csMateDashboard";

    dashboard.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 14px;
      margin: 0 0 24px;
    `;

    grid.parentNode.insertBefore(dashboard, grid);
  }

  const totalCourses = courseCatalog.length;

  const totalLessons = courseCatalog.reduce(
    (total, course) => total + course.lessons.length,
    0
  );

  const completedLessons = csMateCompletedLessons.size;

  const percentage = totalLessons
    ? Math.min(
        100,
        Math.round((completedLessons / totalLessons) * 100)
      )
    : 0;

  const labels = csMateLanguage === "ar"
    ? {
        courses: "إجمالي الكورسات",
        lessons: "إجمالي الدروس",
        completed: "الدروس المكتملة",
        progress: "نسبة الإنجاز"
      }
    : {
        courses: "Total Courses",
        lessons: "Total Lessons",
        completed: "Completed Lessons",
        progress: "Overall Progress"
      };

  const stats = [
    [labels.courses, totalCourses],
    [labels.lessons, totalLessons],
    [labels.completed, completedLessons],
    [labels.progress, percentage + "%"]
  ];

  dashboard.innerHTML = stats.map(function (item) {
    return `
      <div style="
        padding: 18px;
        border: 1px solid var(--border, #30394b);
        border-radius: 14px;
        background: var(--surface, #172033);
      ">
        <div style="font-size:13px;color:var(--muted,#9ca3af);">
          ${csMateEscape(item[0])}
        </div>
        <strong style="
          display:block;
          margin-top:8px;
          font-size:25px;
          color:var(--text,#ffffff);
        ">${csMateEscape(item[1])}</strong>
      </div>
    `;
  }).join("");
}

// Keep the dashboard updated after course rendering.
const csMateOriginalRenderCourses = csMateRenderCourses;

csMateRenderCourses = function () {
  csMateOriginalRenderCourses();
  csMateUpdateDashboard();
};

// Refresh dashboard after lesson progress changes.
document.addEventListener("click", function (event) {
  if (
    event.target.closest("#completeLesson") ||
    event.target.closest("#languageToggle")
  ) {
    setTimeout(csMateUpdateDashboard, 0);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  csMateUpdateDashboard();
});

console.log("CS MATE: Learning dashboard is ready.");/* =========================================
   PART 10H — Progress on Course Cards
========================================= */

const csMateOriginalRenderCoursesWithProgress =
  csMateRenderCourses;

csMateRenderCourses = function () {
  csMateOriginalRenderCoursesWithProgress();

  document.querySelectorAll("[data-open-course]").forEach(
    function (button) {
      const card = button.closest(".language-card");
      if (!card) return;

      const course = courseCatalog.find(
        function (item) {
          return item.id === button.dataset.openCourse;
        }
      );

      if (!course) return;

      const completed = course.lessons.filter(
        function (lesson, index) {
          return csMateCompletedLessons.has(
            course.id + "-" + index
          );
        }
      ).length;

      const total = course.lessons.length;

      const percentage = total
        ? Math.round((completed / total) * 100)
        : 0;

      let progress = card.querySelector(
        ".csMate-card-progress"
      );

      if (!progress) {
        progress = document.createElement("div");
        progress.className = "csMate-card-progress";

        progress.style.cssText = `
          margin-top: 14px;
          width: 100%;
        `;

        card.appendChild(progress);
      }

      progress.innerHTML = `
        <div style="
          display:flex;
          justify-content:space-between;
          gap:8px;
          margin-bottom:7px;
          font-size:12px;
          color:var(--muted,#9ca3af);
        ">
          <span>
            ${csMateLanguage === "ar"
              ? "تقدّمك"
              : "Your progress"}
          </span>

          <span>${percentage}%</span>
        </div>

        <div style="
          width:100%;
          height:6px;
          background:var(--border,#30394b);
          border-radius:20px;
          overflow:hidden;
        ">
          <div style="
            width:${percentage}%;
            height:100%;
            background:#38bdf8;
            border-radius:20px;
          "></div>
        </div>

        <small style="
          display:block;
          margin-top:6px;
          color:var(--muted,#9ca3af);
        ">
          ${completed} / ${total}
          ${csMateLanguage === "ar"
            ? "دروس مكتملة"
            : "lessons completed"}
        </small>
      `;
    }
  );
};

// Refresh card progress after completing a lesson.
document.addEventListener("click", function (event) {
  if (event.target.closest("#completeLesson")) {
    setTimeout(csMateRenderCourses, 0);
  }
});

console.log("CS MATE: Card progress is ready.");/* =========================================
   PART 10I — Search Inside Course Lessons
========================================= */

function csMateSetupLessonSearch() {
  const navigation = document.getElementById("lessonNavigation");

  if (!navigation || !navigation.parentNode) return;

  let searchInput = document.getElementById(
    "csMateLessonSearch"
  );

  if (!searchInput) {
    searchInput = document.createElement("input");

    searchInput.id = "csMateLessonSearch";
    searchInput.type = "search";
    searchInput.autocomplete = "off";

    searchInput.style.cssText = `
      display:block;
      width:100%;
      box-sizing:border-box;
      margin:0 0 12px;
      padding:11px 12px;
      border:1px solid var(--border,#30394b);
      border-radius:10px;
      background:var(--surface,#172033);
      color:var(--text,#ffffff);
      font:inherit;
    `;

    navigation.parentNode.insertBefore(
      searchInput,
      navigation
    );

    searchInput.addEventListener("input", function () {
      csMateFilterLessons(searchInput.value);
    });
  }

  searchInput.placeholder =
    csMateLanguage === "ar"
      ? "ابحثي عن درس..."
      : "Search lessons...";

  csMateFilterLessons(searchInput.value);
}

function csMateFilterLessons(searchText) {
  const navigation = document.getElementById("lessonNavigation");

  if (!navigation) return;

  const query = searchText.trim().toLowerCase();

  navigation.querySelectorAll("[data-lesson-index]").forEach(
    function (button) {
      button.hidden = !button.textContent
        .toLowerCase()
        .includes(query);
    }
  );
}

// Run the search setup whenever a lesson is rendered.
const csMateRenderLessonWithSearch =
  csMateRenderLesson;

csMateRenderLesson = function () {
  csMateRenderLessonWithSearch();
  csMateSetupLessonSearch();
};

console.log("CS MATE: Lesson search is ready.");