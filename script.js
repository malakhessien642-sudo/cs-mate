
/* =========================================
   CS MATE - Interactive Learning Platform
   Version 1.0
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const translations = {
    en: {
      brand: "CS MATE",
      language: "عربي",
      theme: "☀️",
      eyebrow: "YOUR COMPUTER SCIENCE COMPANION",
      heroTitle: 'Learn CS.<br><span class="gradient-text">Build Your Future.</span>',
      heroDescription:
        "Your journey from beginner to confident developer starts here. Learn programming, practice with code, and test your knowledge.",
      startLearning: "Explore Courses →",
      viewRoadmap: "View Learning Path",
      trust1: "Beginner friendly",
      trust2: "Learn at your pace",
      trust3: "Practice and test",
      stat1: "Learning Paths",
      stat2: "Learning Levels",
      stat3: "Practice & Quizzes",
      stat4: "Your Learning Journey",
      progressTitle: "Your learning progress",
      progressDescription: "Complete lessons to track your progress.",
      progressStart: "Start learning to build your progress!",
      coursesKicker: "EXPLORE & LEARN",
      coursesTitle: "Choose Your Learning Path",
      coursesDescription:
        "Explore computer science topics and build your skills step by step.",
      all: "All",
      programming: "Programming",
      fundamentals: "Fundamentals",
      databases: "Databases",
      searchPlaceholder: "Search courses...",
      openCourse: "Open course →",
      lessons: "lessons",
      levels: "levels",
      completed: "completed",
      noResults: "No courses found. Try another search.",
      roadmapKicker: "YOUR ROADMAP",
      roadmapTitle: "From Beginner to Developer",
      roadmapDescription:
        "Follow a clear path, practice consistently, and grow your skills.",
      step1Title: "Start with Basics",
      step1Text: "Understand variables, data types, conditions, and loops.",
      step2Title: "Master Programming",
      step2Text: "Practice functions, arrays, methods, and problem solving.",
      step3Title: "Learn Core CS",
      step3Text: "Explore OOP, data structures, algorithms, and databases.",
      step4Title: "Build Projects",
      step4Text: "Apply your knowledge by building practical projects.",
      footerText: "Made for Computer Science students.",
      footerMade: "Learn. Practice. Grow.",
      levelBeginner: "Beginner",
      levelIntermediate: "Intermediate",
      levelAdvanced: "Advanced",
      lesson: "Lesson",
      quizTitle: "Quick Knowledge Check",
      completeLesson: "✓ Mark as Completed",
      completedButton: "✓ Completed",
      close: "Close",
      next: "Next lesson →",
      correct: "Correct! Well done.",
      wrong: "Not quite. Try again!",
      selectAnswer: "Choose an answer first.",
      lessonDone: "Lesson marked as completed!",
      allDone: "You've completed all available lessons!",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      lessonNotFound: "Lesson content is not available yet.",
      answerOptions: "Answer options"
    },

    ar: {
      brand: "CS MATE",
      language: "English",
      theme: "☀️",
      eyebrow: "رفيقك في رحلة علوم الحاسب",
      heroTitle: 'اتعلم علوم الحاسب.<br><span class="gradient-text">وابني مستقبلك.</span>',
      heroDescription:
        "ابدأ رحلتك من الصفر حتى الاحتراف. اتعلم البرمجة، وطبّق بالأكواد، واختبر معلوماتك خطوة بخطوة.",
      startLearning: "استكشف الكورسات ←",
      viewRoadmap: "شوف خطة التعلم",
      trust1: "مناسب للمبتدئين",
      trust2: "اتعلم بالسرعة المناسبة ليك",
      trust3: "تدريب واختبارات",
      stat1: "مسارات تعليمية",
      stat2: "مستويات للتعلم",
      stat3: "تدريب واختبارات",
      stat4: "رحلتك التعليمية",
      progressTitle: "تقدمك في التعلم",
      progressDescription: "كمّل الدروس علشان تتابع تقدمك.",
      progressStart: "ابدأ التعلم علشان تسجل تقدمك!",
      coursesKicker: "استكشف واتعلم",
      coursesTitle: "اختار مسارك التعليمي",
      coursesDescription:
        "استكشف موضوعات علوم الحاسب وطوّر مهاراتك خطوة بخطوة.",
      all: "الكل",
      programming: "البرمجة",
      fundamentals: "الأساسيات",
      databases: "قواعد البيانات",
      searchPlaceholder: "ابحث عن كورس...",
      openCourse: "افتح الكورس ←",
      lessons: "دروس",
      levels: "مستويات",
      completed: "مكتمل",
      noResults: "مفيش كورسات مطابقة للبحث. جرّب كلمة تانية.",
      roadmapKicker: "خطة رحلتك",
      roadmapTitle: "من مبتدئ لمبرمج",
      roadmapDescription:
        "اتبع مسار واضح، وطبّق باستمرار، وطوّر مهاراتك.",
      step1Title: "ابدأ بالأساسيات",
      step1Text: "افهم المتغيرات وأنواع البيانات والشروط والحلقات.",
      step2Title: "أتقن البرمجة",
      step2Text: "تدرّب على الدوال والمصفوفات وحل المشكلات.",
      step3Title: "اتعلم أساسيات CS",
      step3Text: "استكشف OOP وهياكل البيانات والخوارزميات وقواعد البيانات.",
      step4Title: "ابني مشاريع",
      step4Text: "طبّق اللي اتعلمته من خلال مشاريع عملية.",
      footerText: "منصة لطلاب علوم الحاسب.",
      footerMade: "اتعلم. طبّق. اتطور.",
      levelBeginner: "مبتدئ",
      levelIntermediate: "متوسط",
      levelAdvanced: "متقدم",
      lesson: "درس",
      quizTitle: "اختبر معلوماتك",
      completeLesson: "✓ علّم الدرس كمكتمل",
      completedButton: "✓ مكتمل",
      close: "إغلاق",
      next: "الدرس التالي ←",
      correct: "إجابة صحيحة! أحسنت.",
      wrong: "الإجابة مش صحيحة، حاول تاني!",
      selectAnswer: "اختار إجابة الأول.",
      lessonDone: "تم تسجيل الدرس كمكتمل!",
      allDone: "أحسنت! خلصت كل الدروس المتاحة.",
      themeLight: "التبديل للوضع الفاتح",
      themeDark: "التبديل للوضع الداكن",
      lessonNotFound: "محتوى الدرس مش متاح حاليًا.",
      answerOptions: "الاختيارات"
    }
  };

  const courses = [
    {
      id: "python",
      icon: "Py",
      title: { en: "Python Programming", ar: "برمجة Python" },
      category: "programming",
      level: "Beginner",
      description: {
        en: "Learn programming from scratch with variables, conditions, loops, and functions.",
        ar: "اتعلم البرمجة من الصفر باستخدام المتغيرات والشروط والحلقات والدوال."
      },
      lessons: [
        {
          title: { en: "What Is Programming?", ar: "يعني إيه برمجة؟" },
          body: {
            en: `
              <h3>Understanding Programming</h3>
              <p>Programming means writing instructions that tell a computer what to do.</p>
              <h3>Your First Python Program</h3>
              <pre>print("Hello, World!")</pre>
              <p>The <code>print()</code> function displays information on the screen.</p>
              <h3>Remember</h3>
              <ul>
                <li>Python is a programming language.</li>
                <li>Code is a set of instructions.</li>
                <li>Programs run according to their instructions.</li>
              </ul>
            `,
            ar: `
              <h3>فهم البرمجة</h3>
              <p>البرمجة هي كتابة تعليمات بنطلب من الكمبيوتر ينفذها علشان يعمل مهمة معينة.</p>
              <h3>أول برنامج Python</h3>
              <pre>print("Hello, World!")</pre>
              <p>الدالة <code>print()</code> بتعرض المعلومات على الشاشة.</p>
              <h3>افتكر</h3>
              <ul>
                <li>Python هي لغة برمجة.</li>
                <li>الكود عبارة عن مجموعة تعليمات.</li>
                <li>البرنامج بينفذ التعليمات المكتوبة فيه.</li>
              </ul>
            `
          },
          quiz: {
            question: {
              en: "What does print() do in Python?",
              ar: "إيه وظيفة print() في Python؟"
            },
            options: [
              { en: "Displays information", ar: "بتعرض معلومات على الشاشة" },
              { en: "Deletes the program", ar: "بتمسح البرنامج" },
              { en: "Creates a database", ar: "بتنشئ قاعدة بيانات" }
            ],
            answer: 0
          }
        },
        {
          title: { en: "Variables and Data Types", ar: "المتغيرات وأنواع البيانات" },
          body: {
            en: `
              <h3>What Is a Variable?</h3>
              <p>A variable is a name that refers to a value stored for use in a program.</p>
              <pre>name = "Malak"
age = 20
is_student = True

print(name)
print(age)</pre>
              <h3>Common Data Types</h3>
              <ul>
                <li><code>str</code>: text, such as <code>"Hello"</code></li>
                <li><code>int</code>: whole numbers, such as <code>10</code></li>
                <li><code>float</code>: decimal numbers, such as <code>3.5</code></li>
                <li><code>bool</code>: <code>True</code> or <code>False</code></li>
              </ul>
            `,
            ar: `
              <h3>يعني إيه Variable؟</h3>
              <p>المتغير هو اسم بنستخدمه علشان نشير لقيمة ونقدر نتعامل معاها جوه البرنامج.</p>
              <pre>name = "Malak"
age = 20
is_student = True

print(name)
print(age)</pre>
              <h3>أنواع بيانات مهمة</h3>
              <ul>
                <li><code>str</code>: نص زي <code>"Hello"</code></li>
                <li><code>int</code>: عدد صحيح زي <code>10</code></li>
                <li><code>float</code>: عدد عشري زي <code>3.5</code></li>
                <li><code>bool</code>: قيمة منطقية <code>True</code> أو <code>False</code></li>
              </ul>
            `
          },
          quiz: {
            question: {
              en: "Which data type represents True or False?",
              ar: "أنهي نوع بيانات بيمثل True أو False؟"
            },
            options: [
              { en: "str", ar: "str" },
              { en: "bool", ar: "bool" },
              { en: "float", ar: "float" }
            ],
            answer: 1
          }
        },
        {
          title: { en: "Conditions", ar: "الشروط" },
          body: {
            en: `
              <h3>Making Decisions</h3>
              <p>Conditions let a program choose what to do based on whether an expression is true or false.</p>
              <pre>age = 18

if age >= 18:
    print("Adult")
else:
    print("Under 18")</pre>
              <p>Python uses indentation to define the blocks inside <code>if</code> and <code>else</code>.</p>
            `,
            ar: `
              <h3>اتخاذ القرارات</h3>
              <p>الشروط بتخلّي البرنامج يختار يعمل إيه بناءً على نتيجة شرط معين.</p>
              <pre>age = 18

if age >= 18:
    print("Adult")
else:
    print("Under 18")</pre>
              <p>في Python المسافات البادئة (Indentation) مهمة لتحديد الأوامر اللي جوه <code>if</code> و<code>else</code>.</p>
            `
          },
          quiz: {
            question: {
              en: "Which keyword checks a condition in Python?",
              ar: "أنهي كلمة بنستخدمها لفحص شرط في Python؟"
            },
            options: [
              { en: "if", ar: "if" },
              { en: "repeat", ar: "repeat" },
              { en: "define", ar: "define" }
            ],
            answer: 0
          }
        },
        {
          title: { en: "Loops", ar: "الحلقات التكرارية" },
          body: {
            en: `
              <h3>Repeating Instructions</h3>
              <p>Loops repeat instructions without writing the same code many times.</p>
              <pre>for number in range(1, 4):
    print(number)</pre>
              <p>This example prints 1, 2, and 3. The ending value in <code>range(1, 4)</code> is not included.</p>
            `,
            ar: `
              <h3>تكرار التعليمات</h3>
              <p>الحلقات التكرارية بتخلّينا نكرر الأوامر من غير ما نكتب نفس الكود مرات كتير.</p>
              <pre>for number in range(1, 4):
    print(number)</pre>
              <p>الكود ده بيطبع 1 و2 و3؛ لأن الرقم الأخير في <code>range(1, 4)</code> مش بيكون ضمن النتائج.</p>
            `
          },
          quiz: {
            question: {
              en: "How many numbers does range(1, 4) produce?",
              ar: "الدالة range(1, 4) بتنتج كام رقم؟"
            },
            options: [
              { en: "2", ar: "رقمين" },
              { en: "3", ar: "3 أرقام" },
              { en: "4", ar: "4 أرقام" }
            ],
            answer: 1
          }
        },
        {
          title: { en: "Functions", ar: "الدوال" },
          body: {
            en: `
              <h3>Reusable Code</h3>
              <p>A function groups instructions under a name so you can reuse them.</p>
              <pre>def greet(name):
    return "Hello, " + name

message = greet("Malak")
print(message)</pre>
              <p><code>def</code> defines the function, and <code>return</code> sends a result back to the caller.</p>
            `,
            ar: `
              <h3>كود قابل لإعادة الاستخدام</h3>
              <p>الدالة بتجمع مجموعة تعليمات تحت اسم واحد علشان نستخدمها كل ما نحتاجها.</p>
              <pre>def greet(name):
    return "Hello, " + name

message = greet("Malak")
print(message)</pre>
              <p>الكلمة <code>def</code> لتعريف الدالة، و<code>return</code> بترجع نتيجة استدعاء الدالة.</p>
            `
          },
          quiz: {
            question: {
              en: "Which keyword defines a function in Python?",
              ar: "أنهي كلمة بنستخدمها لتعريف دالة في Python؟"
            },
            options: [
              { en: "class", ar: "class" },
              { en: "def", ar: "def" },
              { en: "loop", ar: "loop" }
            ],
            answer: 1
          }
        }
      ]
    },

    {
      id: "cs-basics",
      icon: "CS",
      title: { en: "Computer Science Basics", ar: "أساسيات علوم الحاسب" },
      category: "fundamentals",
      level: "Beginner",
      description: {
        en: "Understand algorithms, binary numbers, hardware, software, and how computers work.",
        ar: "افهم الخوارزميات والأعداد الثنائية ومكونات الكمبيوتر والفرق بين Hardware وSoftware."
      },
      lessons: [
        {
          title: { en: "What Is Computer Science?", ar: "يعني إيه علوم حاسب؟" },
          body: {
            en: `
              <h3>Computer Science</h3>
              <p>Computer Science studies computation, algorithms, data, and the design of computer systems.</p>
              <h3>Important Areas</h3>
              <ul>
                <li>Programming: writing instructions.</li>
                <li>Algorithms: step-by-step solutions.</li>
                <li>Data structures: organizing data.</li>
                <li>Computer systems: understanding hardware and software.</li>
              </ul>
            `,
            ar: `
              <h3>علوم الحاسب</h3>
              <p>علوم الحاسب مجال بيدرس العمليات الحسابية والخوارزميات والبيانات وتصميم أنظمة الكمبيوتر.</p>
              <h3>مجالات مهمة</h3>
              <ul>
                <li>Programming: كتابة التعليمات.</li>
                <li>Algorithms: خطوات لحل المشكلات.</li>
                <li>Data Structures: تنظيم البيانات.</li>
                <li>Computer Systems: فهم مكونات الكمبيوتر والبرامج.</li>
              </ul>
            `
          },
          quiz: {
            question: {
              en: "What is an algorithm?",
              ar: "يعني إيه Algorithm؟"
            },
            options: [
              { en: "A step-by-step solution", ar: "خطوات مرتبة لحل مشكلة" },
              { en: "A computer screen", ar: "شاشة كمبيوتر" },
              { en: "A keyboard type", ar: "نوع لوحة مفاتيح" }
            ],
            answer: 0
          }
        },
        {
          title: { en: "Hardware and Software", ar: "الهاردوير والسوفت وير" },
          body: {
            en: `
              <h3>Hardware</h3>
              <p>Hardware refers to the physical parts of a computer, such as the CPU, RAM, and keyboard.</p>
              <h3>Software</h3>
              <p>Software refers to programs and instructions, such as operating systems and applications.</p>
            `,
            ar: `
              <h3>Hardware</h3>
              <p>الهاردوير هو الأجزاء المادية اللي نقدر نلمسها، زي المعالج والرامات ولوحة المفاتيح.</p>
              <h3>Software</h3>
              <p>السوفت وير هو البرامج والتعليمات، زي نظام التشغيل والتطبيقات.</p>
            `
          },
          quiz: {
            question: {
              en: "Which is an example of hardware?",
              ar: "أنهي مثال على Hardware؟"
            },
            options: [
              { en: "A web browser", ar: "متصفح إنترنت" },
              { en: "RAM", ar: "RAM" },
              { en: "An operating system", ar: "نظام تشغيل" }
            ],
            answer: 1
          }
        },
        {
          title: { en: "Algorithms", ar: "الخوارزميات" },
          body: {
            en: `
              <h3>Step-by-Step Thinking</h3>
              <p>An algorithm is a finite sequence of clear steps designed to solve a problem.</p>
              <pre>1. Read two numbers.
2. Add the numbers.
3. Display the result.</pre>
              <p>Algorithms can be written in plain language, pseudocode, or represented by flowcharts.</p>
            `,
            ar: `
              <h3>التفكير خطوة بخطوة</h3>
              <p>الخوارزمية هي مجموعة محدودة ومرتبة من الخطوات الواضحة لحل مشكلة.</p>
              <pre>1. اقرأ رقمين.
2. اجمع الرقمين.
3. اعرض الناتج.</pre>
              <p>ممكن نكتب الخوارزمية بلغة بسيطة أو Pseudocode أو نمثلها باستخدام Flowchart.</p>
            `
          },
          quiz: {
            question: {
              en: "What is a key feature of an algorithm?",
              ar: "إيه من صفات الخوارزمية؟"
            },
            options: [
              { en: "Clear ordered steps", ar: "خطوات واضحة ومرتبة" },
              { en: "No defined goal", ar: "من غير هدف محدد" },
              { en: "It must be written in Python", ar: "لازم تكون مكتوبة بـ Python" }
            ],
            answer: 0
          }
        }
      ]
    },

    {
      id: "html-css",
      icon: "Web",
      title: { en: "HTML & CSS", ar: "HTML وCSS" },
      category: "programming",
      level: "Beginner",
      description: {
        en: "Build web page structures with HTML and style them using CSS.",
        ar: "اتعلم بناء صفحات الويب باستخدام HTML وتنسيقها باستخدام CSS."
      },
      lessons: [
        {
          title: { en: "HTML Page Structure", ar: "هيكل صفحة HTML" },
          body: {
            en: `
              <h3>What Is HTML?</h3>
              <p>HTML describes the structure and content of a web page.</p>
              <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello!&lt;/h1&gt;
  &lt;p&gt;My first page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            `,
            ar: `
              <h3>يعني إيه HTML؟</h3>
              <p>HTML هي اللغة اللي بنحدد بيها هيكل ومحتوى صفحة الويب.</p>
              <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="ar"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;صفحتي&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;أهلاً!&lt;/h1&gt;
  &lt;p&gt;أول صفحة ليا.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            `
          },
          quiz: {
            question: {
              en: "Which HTML tag creates the largest standard heading?",
              ar: "أنهي وسم بيعمل أكبر عنوان أساسي في HTML؟"
            },
            options: [
              { en: "<h6>", ar: "<h6>" },
              { en: "<p>", ar: "<p>" },
              { en: "<h1>", ar: "<h1>" }
            ],
            answer: 2
          }
        },
        {
          title: { en: "CSS Styling", ar: "تنسيق الصفحات باستخدام CSS" },
          body: {
            en: `
              <h3>What Is CSS?</h3>
              <p>CSS controls the appearance of HTML elements, including 
colors, spacing, and layout.</p>
              <pre>h1 {
  color: purple;
  font-size: 32px;
}

p {
  line-height: 1.7;
}</pre>
            `,
            ar: `
              <h3>يعني إيه CSS؟</h3>
              <p>CSS مسؤولة عن شكل عناصر HTML، زي الألوان والمسافات وتوزيع العناصر.</p>
              <pre>h1 {
  color: purple;
  font-size: 32px;
}

p {
  line-height: 1.7;
}</pre>
            `
          },
          quiz: {
            question: {
              en: "Which language styles HTML elements?",
              ar: "أنهي لغة مسؤولة عن تنسيق عناصر HTML؟"
            },
            options: [
              { en: "CSS", ar: "CSS" },
              { en: "SQL", ar: "SQL" },
              { en: "HTML only", ar: "HTML فقط" }
            ],
            answer: 0
          }
        }
      ]
    },

    {
      id: "csharp",
      icon: "C#",
      title: { en: "C# Programming", ar: "برمجة C#" },
      category: "programming",
      level: "Beginner",
      description: {
        en: "Learn C# syntax, variables, conditions, loops, methods, and object-oriented programming.",
        ar: "اتعلم أساسيات C# والمتغيرات والشروط والحلقات والدوال ومبادئ OOP."
      },
      lessons: [
        {
          title: { en: "Your First C# Program", ar: "أول برنامج C#" },
          body: {
            en: `
              <h3>Printing Output</h3>
              <p>C# is a general-purpose programming language commonly used with .NET.</p>
              <pre>using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}</pre>
              <p><code>Console.WriteLine()</code> displays a message and moves to a new line.</p>
            `,
            ar: `
              <h3>طباعة أول نتيجة</h3>
              <p>C# لغة برمجة عامة الاستخدام، وبتُستخدم كتير مع منصة .NET.</p>
              <pre>using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}</pre>
              <p>الدالة <code>Console.WriteLine()</code> بتعرض رسالة وبعدها بتنقل لسطر جديد.</p>
            `
          },
          quiz: {
            question: {
              en: "What does Console.WriteLine() do?",
              ar: "إيه وظيفة Console.WriteLine()؟"
            },
            options: [
              { en: "Displays output", ar: "بتعرض ناتج على الشاشة" },
              { en: "Creates a database", ar: "بتنشئ قاعدة بيانات" },
              { en: "Deletes a class", ar: "بتمسح Class" }
            ],
            answer: 0
          }
        },
        {
          title: { en: "Variables in C#", ar: "المتغيرات في C#" },
          body: {
            en: `
              <h3>Declaring Variables</h3>
              <p>C# is statically typed: a variable has a declared type.</p>
              <pre>string name = "Malak";
int age = 20;
double score = 95.5;
bool isStudent = true;

Console.WriteLine(name);</pre>
            `,
            ar: `
              <h3>تعريف المتغيرات</h3>
              <p>C# لغة Static Typed، يعني بنحدد نوع المتغير وقت تعريفه.</p>
              <pre>string name = "Malak";
int age = 20;
double score = 95.5;
bool isStudent = true;

Console.WriteLine(name);</pre>
            `
          },
          quiz: {
            question: {
              en: "Which type stores a whole number in C#?",
              ar: "أنهي نوع بيخزن عدد صحيح في C#؟"
            },
            options: [
              { en: "string", ar: "string" },
              { en: "int", ar: "int" },
              { en: "bool", ar: "bool" }
            ],
            answer: 1
          }
        },
        {
          title: { en: "Object-Oriented Programming", ar: "البرمجة كائنية التوجه OOP" },
          body: {
            en: `
              <h3>Classes and Objects</h3>
              <p>A class defines a type. An object is an instance of that class.</p>
              <pre>class Student
{
    public string Name { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}");
    }
}

Student student = new Student();
student.Name = "Malak";
student.Introduce();</pre>
            `,
            ar: `
              <h3>Classes وObjects</h3>
              <p>الـ Class هو تعريف لنوع أو قالب، والـ Object هو نسخة فعلية من الـ Class.</p>
              <pre>class Student
{
    public string Name { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}");
    }
}

Student student = new Student();
student.Name = "Malak";
student.Introduce();</pre>
            `
          },
          quiz: {
            question: {
              en: "What is an object in OOP?",
              ar: "يعني إيه Object في OOP؟"
            },
            options: [
              { en: "An instance of a class", ar: "نسخة من Class" },
              { en: "A CSS selector", ar: "محدد CSS" },
              { en: "A database query", ar: "استعلام قاعدة بيانات" }
            ],
            answer: 0
          }
        }
      ]
    },

    {
      id: "sql",
      icon: "SQL",
      title: { en: "SQL & Databases", ar: "SQL وقواعد البيانات" },
      category: "databases",
      level: "Beginner",
      description: {
        en: "Understand tables, queries, filtering, inserting records, and relational database basics.",
        ar: "افهم الجداول والاستعلامات والفلترة وإضافة البيانات وأساسيات قواعد البيانات العلائقية."
      },
      lessons: [
        {
          title: { en: "Database Basics", ar: "أساسيات قواعد البيانات" },
          body: {
            en: `
              <h3>What Is a Database?</h3>
              <p>A database organizes information so it can be stored, searched, updated, and managed.</p>
              <p>Relational databases store data in tables made of rows and columns.</p>
            `,
            ar: `
              <h3>يعني إيه Database؟</h3>
              <p>قاعدة البيانات بتنظم المعلومات علشان نقدر نخزنها ونبحث فيها ونعدّلها.</p>
              <p>قواعد البيانات العلائقية بتخزن البيانات في جداول مكوّنة من صفوف وأعمدة.</p>
            `
          },
          quiz: {
            question: {
              en: "What is a row in a database table?",
              ar: "الصف Row في الجدول بيمثل إيه غالبًا؟"
            },
            options: [
              { en: "A single record", ar: "سجل واحد" },
              { en: "A programming language", ar: "لغة برمجة" },
              { en: "A website style", ar: "تنسيق موقع" }
            ],
            answer: 0
          }
        },
        {
          title: { en: "Your First SQL Query", ar: "أول استعلام SQL" },
          body: {
            en: `
              <h3>Reading Data</h3>
              <p>SQL is commonly used to query and manage relational databases.</p>
              <pre>SELECT Name, Age
FROM Students
WHERE Age >= 18;</pre>
              <ul>
                <li><code>SELECT</code> chooses columns.</li>
                <li><code>FROM</code> identifies the table.</li>
                <li><code>WHERE</code> filters rows.</li>
              </ul>
            `,
            ar: `
              <h3>قراءة البيانات</h3>
              <p>SQL لغة بنستخدمها للاستعلام عن البيانات وإدارتها في قواعد البيانات العلائقية.</p>
              <pre>SELECT Name, Age
FROM Students
WHERE Age >= 18;</pre>
              <ul>
                <li><code>SELECT</code> بتحدد الأعمدة المطلوبة.</li>
                <li><code>FROM</code> بتحدد الجدول.</li>
                <li><code>WHERE</code> بتفلتر الصفوف حسب شرط.</li>
              </ul>
            `
          },
          quiz: {
            question: {
              en: "Which SQL keyword filters rows?",
              ar: "أنهي كلمة في SQL بتفلتر الصفوف؟"
            },
            options: [
              { en: "WHERE", ar: "WHERE" },
              { en: "COLOR", ar: "COLOR" },
              { en: "PRINT", ar: "PRINT" }
            ],
            answer: 0
          }
        }
      ]
    }
  ];

  const state = {
    language: "en",
    category: "all",
    search: "",
    currentCourse: null,
    currentLesson: 0,
    currentLevel: "Beginner",
    completed: loadCompleted(),
    quizAnswered: false,
    selectedAnswer: null
  };

  function loadCompleted() {
    try {
      const saved = localStorage.getItem("csmate-completed-v1");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(
        "csmate-completed-v1",
        JSON.stringify(state.completed)
      );
    } catch (error) {
      // Progress still works for the current session if storage is unavailable.
    }
  }

  function t(key) {
    return translations[state.language][key] ??
      translations.en[key] ??
      key;
  }

  function localized(value) {
    if (value && typeof value === "object") {
      return value[state.language] ?? value.en ?? "";
    }
    return value ?? "";
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return entities[character];
    });
  }

  function getCourse(courseId) {
    return courses.find(course => course.id === courseId);
  }

  function lessonKey(courseId, lessonIndex) {
    return `${courseId}:${lessonIndex}`;
  }

  function isCompleted(courseId, lessonIndex) {
    return state.completed.includes(lessonKey(courseId, lessonIndex));
  }

  function courseCompletedCount(course) {
    return course.lessons.filter((lesson, index) =>
      isCompleted(course.id, index)
    ).length;
  }

  function totalLessons() {
    return courses.reduce((sum, course) => sum + course.lessons.length, 0);
  }

  function totalCompleted() {
    return courses.reduce(
      (sum, course) => sum + courseCompletedCount(course),
      0
    );
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function updateStaticText() {
    const html = document.documentElement;
    html.lang = state.language;
    html.dir = state.language === "ar" ? "rtl" : "ltr";

    document.body.dir = html.dir;
    document.body.dataset.language = state.language;

    const textMap = {
      ".eyebrow": "eyebrow",
      ".hero-description": "heroDescription",
      ".progress-panel h3": "progressTitle",
      ".courses-kicker": "coursesKicker",
      ".courses-title": "coursesTitle",
      ".courses-description": "coursesDescription",
      ".roadmap-kicker": "roadmapKicker",
      ".roadmap-title": "roadmapTitle",
      ".roadmap-description": "roadmapDescription"
    };

    Object.entries(textMap).forEach(([selector, key]) => {
      const element = $(selector);
      if (element) element.textContent = t(key);
    });

    const heroTitle = $(".hero h1");
    if (heroTitle) heroTitle.innerHTML = t("heroTitle");

    const brand = $(".brand");
    if (brand) {
      brand.innerHTML =
        '<span class="brand-icon">CS</span><span>CS <span>MATE</span></span>';
    }

    const languageButton = $("#languageToggle");
    if (languageButton) {
      languageButton.textContent = t("language");
      languageButton.setAttribute(
        "aria-label",
        state.language === "en" ? "Switch to Arabic" : "Switch to English"
      );
    }

    const themeButton = $("#themeToggle");
    if (themeButton) {
      themeButton.textContent = document.body.classList.contains("light-theme")
        ? "🌙"
        : "☀️";
      themeButton.setAttribute(
        "aria-label",
        document.body.classList.contains("light-theme")
          ? t("themeDark")
          : t("themeLight")
      );
    }

    const trustItems = $$(".trust-item");
    ["trust1", "trust2", "trust3"].forEach((key, index) => {
      if (trustItems[index]) {
        trustItems[index].textContent = t(key);
      }
    });

    const buttons = $$(".hero-buttons .btn");
    if (buttons[0]) buttons[0].textContent = t("startLearning");
    if (buttons[1]) buttons[1].textContent = t("viewRoadmap");

    const statLabels = $$(".stat-label");
    ["stat1", "stat2", "stat3", "stat4"].forEach((key, index) => {
      if (statLabels[index]) statLabels[index].textContent = t(key);
    });

    const progressDescription = $(".progress-panel p");
    if (progressDescription) {
      progressDescription.textContent =
        totalCompleted() === 0
          ? t("progressStart")
          : t("progressDescription");
    }

    const search = $("#courseSearch");
    if (search) search.placeholder = t("searchPlaceholder");

    const filterButtons = $$(".filter-btn");
    const filterKeys = ["all", "programming", "fundamentals", "databases"];
    filterButtons.forEach((button, index) => {
      if (filterKeys[index]) {
        button.textContent = t(filterKeys[index]);
        button.dataset.category = filterKeys[index];
      }
    });

    const roadmapSteps = $$(".roadmap-step");
    const roadmapKeys = [
      ["step1Title", "step1Text"],
      ["step2Title", "step2Text"],
      ["step3Title", "step3Text"],
      ["step4Title", "step4Text"]
    ];

    roadmapSteps.forEach((step, index) => {
      const heading = $("h3", step);
      const paragraph = $("p", step);

      if (heading && roadmapKeys[index]) {
        heading.textContent = t(roadmapKeys[index][0]);
      }
      if (paragraph && roadmapKeys[index]) {
        paragraph.textContent = t(roadmapKeys[index][1]);
      }
    });

    const footer = $(".footer");
    if (footer) {
      const footerText = $(".footer-text", footer);
      const footerBrand = $(".footer-brand", footer);

      if (footerText) footerText.textContent = t("footerText");
      if (footerBrand) footerBrand.textContent = t("footerMade");
    }

    const courseHeading = $(".section-heading");
    if (courseHeading) {
      const link = $(".text-link", courseHeading);
      if (link) link.textContent = state.language === "en" ? "Explore all →" : "استكشف الكل ←";
    }

    const roadmapHeading = $("#roadmap");
    if (roadmapHeading) {
      const link = $(".text-link", roadmapHeading);
      if (link) link.textContent = state.language === "en" ? "Your next step" : "خطوتك الجاية";
    }

    updateProgress();
    renderCourses();
  }

  function renderCourses() {
    const grid = $("#languageGrid");
    if (!grid) return;

    const query = state.search.trim().toLowerCase();

    const filtered = courses.filter(course => {
      const matchesCategory =
        state.category === "all" || course.category === state.category;

      const searchableText = [
        localized(course.title),
        localized(course.description),
        course.id,
        course.level
      ].join(" ").toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">${escapeHTML(t("noResults"))}</div>`;
      return;
    }

    grid.innerHTML = filtered.map(course => {
      const done = courseCompletedCount(course);
      const count = course.lessons.length;
      const percent = Math.round((done / count) * 100);

      return `
        <article class="language-card">
          <div class="card-top">
            <div class="language-icon">${escapeHTML(course.icon)}</div>
            <span class="level-badge">${escapeHTML(
              course.level === "Beginner"
                ? t("levelBeginner")
                : course.level
            )}</span>
          </div>
          <h3>${escapeHTML(localized(course.title))}</h3>
          <p>${escapeHTML(localized(course.description))}</p>
          <div class="card-meta">
            <span>📚 ${count} ${escapeHTML(t("lessons"))}</span>
            <span>🎯 ${escapeHTML(t("levelBeginner"))}</span>
          </div>
          <div class="card-footer">
            <span class="card-progress-text">${done}/${count} · ${percent}%</span>
            <button class="card-open-btn" data-open-course="${course.id}">
              ${escapeHTML(t("openCourse"))}
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  function updateProgress() {
    const completed = totalCompleted();
    const total = totalLessons();
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    const fill = $("#progressFill");
    const value = $("#progressValue");

    if (fill) fill.style.width = `${percentage}%`;
    if (value) value.textContent = `${percentage}%`;

    const progressDescription = $(".progress-panel p");
    if (progressDescription) {
      progressDescription.textContent =
        completed === 0 ? t("progressStart") : t("progressDescription");
    }

    const statNumbers = $$(".stat-number");
    if (statNumbers[0]) statNumbers[0].textContent = courses.length;
    if (statNumbers[1]) statNumbers[1].textContent = "3";
    if (statNumbers[2]) statNumbers[2].textContent = total;
    if (statNumbers[3]) statNumbers[3].textContent = `${percentage}%`;
  }

  function openCourse(courseId, lessonIndex = 0) {
    const course = getCourse(courseId);
    if (!course) return;

    state.currentCourse = course;
    state.currentLesson = Math.max(
      0,
      Math.min(lessonIndex, course.lessons.length - 1)
    );
    state.quizAnswered = false;
    state.selectedAnswer = null;

    const modal = $("#lessonModal");
    if (!modal) {
      showToast(t("lessonNotFound"));
      return;
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    renderLesson();
  }

  function closeCourse() {
    const modal = $("#lessonModal");
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    state.currentCourse = null;
  }

  function renderLesson() {
    const course = state.currentCourse;
    if (!course) return;

    const lesson = course.lessons[state.currentLesson];
    if (!lesson) return;

    const heading = $("#lessonTitle");
    const description = $("#lessonDescription");
    const levels = $("#lessonLevels");
    const body = $("#lessonBody");
    const quizBox = $("#quizBox");
    const completeButton = $("#completeLesson");
    const nextButton = $("#nextLesson");

    if (heading) {
      heading.textContent = localized(lesson.title);
    }

    if (description) {
      description.textContent =
        `${localized(course.title)} · ${t("lesson")} ${state.currentLesson + 1} / ${course.lessons.length}`;
    }

    if (levels) {
      levels.innerHTML = ["Beginner", "Intermediate", "Advanced"]
        .map(level => `
          <button
            class="level-btn ${state.currentLevel === level ? "active" : ""}"
            data-level="${level}"
          >
            ${escapeHTML(
              level === "Beginner"
                ? t("levelBeginner")
                : level === "Intermediate"
                  ? t("levelIntermediate")
                  : t("levelAdvanced")
            )}
          </button>
        `).join("");
    }

    if (body) {
      body.innerHTML = localized(lesson.body);
    }

    if (quizBox) {
      quizBox.innerHTML = `
        <h3>${escapeHTML(t("quizTitle"))}</h3>
        <p class="quiz-question">${escapeHTML(localized(lesson.quiz.question))}</p>
        <div class="quiz-options">
          ${lesson.quiz.options.map((option, index) => `
            <button
              class="quiz-option"
              data-answer="${index}"
              aria-label="${escapeHTML(localized(option))}"
            >${escapeHTML(localized(option))}</button>
          `).join("")}
        </div>
        <p class="quiz-feedback" aria-live="polite"></p>
      `;
    }

    const feedback = quizBox.querySelector(".quiz-feedback");
    const options = quizBox.querySelectorAll(".quiz-option");

    options.forEach((button) => {
      button.addEventListener("click", () => {
        if (quizBox.dataset.answered === "true") return;

        quizBox.dataset.answered = "true";

        const question = lesson.quiz;
        const selectedAnswer = Number(button.dataset.answer);
        const isCorrect = selectedAnswer === question.correct;

        options.forEach((option, index) => {
          option.disabled = true;

          if (index === question.correct) {
            option.classList.add("correct");
          } else if (index === selectedAnswer) {
            option.classList.add("incorrect");
          }
        });

        feedback.textContent = isCorrect
          ? localized({
              en: "Correct! Great job.",
              ar: "إجابة صحيحة! أحسنتِ."
            })
          : localized({
              en: "Not quite. Review the lesson and try the next question.",
              ar: "الإجابة مش صحيحة. راجعي الدرس وجربي السؤال التالي."
            });

        if (isCorrect) {
          const key = `${currentCourseId}-${currentLessonIndex}`;
          completedLessons.add(key);
          saveProgress();
          updateProgress();
        }
      });
    });
  }

  function openLesson(courseId, lessonIndex) {
    const course = courses.find((item) => item.id === courseId);
    if (!course || !course.lessons[lessonIndex]) return;

    currentCourseId = courseId;
    currentLessonIndex = lessonIndex;

    const lesson = course.lessons[lessonIndex];

    $("#lessonTitle").textContent = localized(lesson.title);
    $("#lessonDescription").textContent = localized(lesson.description);
    $("#lessonLevels").textContent = localized(lesson.level || {
      en: "Beginner",
      ar: "مبتدئ"
    });

    $("#lessonBody").innerHTML = lesson.content
      .map((section) => `
        <section class="lesson-section">
          <h3>${escapeHTML(localized(section.heading))}</h3>
          <p>${escapeHTML(localized(section.text))}</p>
          ${
            section.code
              ? `<pre><code>${escapeHTML(section.code)}</code></pre>`
              : ""
          }
        </section>
      `)
      .join("");

    renderQuiz(lesson);

    $("#lessonModal").classList.add("open");
    $("#lessonModal").setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    $("#completeLesson").textContent = completedLessons.has(
      `${courseId}-${lessonIndex}`
    )
      ? localized({ en: "Completed ✓", ar: "تم إكمال الدرس ✓" })
      : localized({ en: "Mark as complete", ar: "تحديد كمكتمل" });

    $("#nextLesson").disabled =
      lessonIndex >= course.lessons.length - 1;
  }

  function closeLesson() {
    const modal = $("#lessonModal");
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function markLessonComplete() {
    if (!currentCourseId) return;

    const key = `${currentCourseId}-${currentLessonIndex}`;
    completedLessons.add(key);

    saveProgress();
    updateProgress();

    $("#completeLesson").textContent = localized({
      en: "Completed ✓",
      ar: "تم إكمال الدرس ✓"
    });

    showToast({
      en: "Lesson marked as complete!",
      ar: "تم تسجيل الدرس كمكتمل!"
    });
  }

  function goToNextLesson() {
    const course = courses.find(
      (item) => item.id === currentCourseId
    );

    if (!course) return;

    if (currentLessonIndex < course.lessons.length - 1) {
      openLesson(currentCourseId, currentLessonIndex + 1);
    }
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = localized(message);
    toast.classList.add("show");

    window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        "csmate-progress",
        JSON.stringify([...completedLessons])
      );
    } catch (error) {
      console.warn("Progress could not be saved.", error);
    }
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(
        localStorage.getItem("csmate-progress") || "[]"
      );

      completedLessons = new Set(saved);
    } catch (error) {
      completedLessons = new Set();
    }
  }

  function updateProgress() {
    const totalLessons = courses.reduce(
      (total, course) => total + course.lessons.length,
      0
    );

    const completed = completedLessons.size;
    const percentage = totalLessons
      ? Math.min(100, Math.round((completed / totalLessons) * 100))
      : 0;

    const progressBar = $("#progressBar");
    const progressText = $("#progressText");
    const completedCount = $("#completedCount");

    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
      progressBar.setAttribute("aria-valuenow", percentage);
    }

    if (progressText) {
      progressText.textContent = `${percentage}%`;
    }

    if (completedCount) {
      completedCount.textContent = `${completed} / ${totalLessons}`;
    }
  }

  function filterCourses() {
    const searchInput = $("#searchInput");
    const categoryFilter = $("#categoryFilter");

    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    const selectedCategory = categoryFilter
      ? categoryFilter.value
      : "all";

    const filteredCourses = courses.filter((course) => {
      const title = localized(course.title).toLowerCase();
      const description = localized(course.description).toLowerCase();

      const matchesSearch =
        title.includes(searchTerm) ||
        description.includes(searchTerm);

      const matchesCategory =
        selectedCategory === "all" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    renderCourses(filteredCourses);
  }

  function renderCourses(list = courses) {
    const grid = $("#languageGrid");
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = `
        <p class="empty-state">
          ${localized({
            en: "No courses found. Try another search.",
            ar: "ملقيناش كورسات. جربي بحث تاني."
          })}
        </p>
      `;
      return;
    }

    grid.innerHTML = list.map((course) => {
      const total = course.lessons.length;

      const completed = course.lessons.filter((_, index) =>
        completedLessons.has(`${course.id}-${index}`)
      ).length;

      return `
        <article class="course-card">
          <div class="course-icon" aria-hidden="true">
            ${escapeHTML(course.icon || "📘")}
          </div>

          <span class="course-category">
            ${escapeHTML(localized(course.categoryLabel || {
              en: course.category,
              ar: course.category
            }))}
          </span>

          <h3>${escapeHTML(localized(course.title))}</h3>

          <p>${escapeHTML(localized(course.description))}</p>

          <div class="course-meta">
            <span>${total} ${localized({
              en: "lessons",
              ar: "دروس"
            })}</span>
            <span>${completed}/${total} ${localized({
              en: "completed",
              ar: "مكتمل"
            })}</span>
          </div>

          <button class="course-button" data-course="${escapeHTML(course.id)}">
            ${localized({
              en: "Start learning",
              ar: "ابدئي التعلم"
            })}
          </button>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-course]").forEach((button) => {
      button.addEventListener("click", () => {
        const course = courses.find(
          (item) => item.id === button.dataset.course
        );

        if (course) openLesson(course.id, 0);
      });
    });
  }

  function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
      currentLanguage === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[key]) {
        element.textContent = localized(translations[key]);
      }
    });

    const languageButton = $("#languageToggle");
    if (languageButton) {
      languageButton.textContent =
        currentLanguage === "ar" ? "English" : "العربية";
    }

    renderCourses();
    updateProgress();

    if (currentCourseId) {
      const modal = $("#lessonModal");
      if (modal && modal.classList.contains("open")) {
        openLesson(currentCourseId, currentLessonIndex);
      }
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.dataset.theme !== "light";

    document.documentElement.dataset.theme =
      isDark ? "light" : "dark";

    try {
      localStorage.setItem(
        "csmate-theme",
        document.documentElement.dataset.theme
      );
    } catch (error) {
      // Theme still works for this session.
    }
  }

  function loadTheme() {
    try {
      const savedTheme = localStorage.getItem("csmate-theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
    }
  }

  function init() {
    loadProgress();
    loadTheme();
    renderCourses();
    updateProgress();

    const searchInput = $("#searchInput");
    const categoryFilter = $("#categoryFilter");
    const languageToggle = $("#languageToggle");
    const themeToggle = $("#themeToggle");
    const closeButton = $("#closeLesson");
    const completeButton = $("#completeLesson");
    const nextButton = $("#nextLesson");
    const modal = $("#lessonModal");

    if (searchInput) {
      searchInput.addEventListener("input", filterCourses);
    }

    if (categoryFilter) {
      categoryFilter.addEventListener("change", filterCourses);
    }

    if (languageToggle) {
      languageToggle.addEventListener("click", () => {
        currentLanguage =
          currentLanguage === "en" ? "ar" : "en";
        applyLanguage();
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (closeButton) {
      closeButton.addEventListener("click", closeLesson);
    }

    if (completeButton) {
      completeButton.addEventListener("click", markLessonComplete);
    }

    if (nextButton) {
      nextButton.addEventListener("click", goToNextLesson);
    }

    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeLesson();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLesson();
    });

    applyLanguage();
  }

  init();
});


   