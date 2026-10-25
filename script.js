
"use strict";

/* =====================================
   CS MATE - Programming Learning Platform
   Part 1: Setup and Course Catalog
===================================== */

const $ = (selector) => document.querySelector(selector);

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

const previousLessonButton = $("#previousLesson");
const nextLessonButton = $("#nextLesson");
const completeLessonButton = $("#completeLesson");
const closeLessonButton = $("#closeLesson");

const languageCount = $("#languageCount");
const lessonCount = $("#lessonCount");
const currentYear = $("#currentYear");
const toastElement = $("#toast");
const themeToggle = $("#themeToggle");
const languageToggle = $("#languageToggle");

let activeCourseId = null;
let activeLessonIndex = 0;
let currentInterfaceLanguage = "ar";
let toastTimer = null;

const courses = [
  {
    id: "csharp",
    name: "C#",
    logo: "C#",
    category: "programming",
    level: "Beginner to Advanced",
    description: "Learn C# from the basics to object-oriented programming.",
    color: "#a78bfa"
  },
  {
    id: "python",
    name: "Python",
    logo: "Py",
    category: "programming",
    level: "Beginner to Advanced",
    description: "Learn Python, data structures, and functions.",
    color: "#facc15"
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "JS",
    category: "web",
    level: "Beginner to Advanced",
    description: "Build interactive websites with JavaScript.",
    color: "#f7df1e"
  },
  {
    id: "java",
    name: "Java",
    logo: "☕",
    category: "programming",
    level: "Beginner to Advanced",
    description: "Learn Java syntax, classes, objects, and OOP.",
    color: "#fb923c"
  },
  {
    id: "cpp",
    name: "C++",
    logo: "C++",
    category: "programming",
    level: "Beginner to Advanced",
    description: "Learn C++ fundamentals and algorithms.",
    color: "#60a5fa"
  },
  {
    id: "html",
    name: "HTML",
    logo: "5",
    category: "web",
    level: "Beginner",
    description: "Learn how to structure web pages.",
    color: "#fb923c"
  },
  {
    id: "css",
    name: "CSS",
    logo: "3",
    category: "web",
    level: "Beginner",
    description: "Style websites and create responsive layouts.",
    color: "#60a5fa"
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "TS",
    category: "web",
    level: "Intermediate",
    description: "Learn typed JavaScript.",
    color: "#3b82f6"
  },
  {
    id: "php",
    name: "PHP",
    logo: "PHP",
    category: "web",
    level: "Beginner to Advanced",
    description: "Learn server-side web development.",
    color: "#a5b4fc"
  },
  {
    id: "sql",
    name: "SQL",
    logo: "SQL",
    category: "database",
    level: "Beginner",
    description: "Learn queries, tables, and database relationships.",
    color: "#38bdf8"
  },
  {
    id: "dart",
    name: "Dart",
    logo: "Dart",
    category: "mobile",
    level: "Beginner to Advanced",
    description: "Learn Dart for Flutter development.",
    color: "#22d3ee"
  },
  {
    id: "go",
    name: "Go",
    logo: "Go",
    category: "programming",
    level: "Beginner",
    description: "Learn the Go programming language.",
    color: "#67e8f9"
  },
  {
    id: "kotlin",
    name: "Kotlin",
    logo: "K",
    category: "mobile",
    level: "Beginner",
    description: "Learn Kotlin for Android development.",
    color: "#c084fc"
  },
  {
    id: "swift",
    name: "Swift",
    logo: "S",
    category: "mobile",
    level: "Beginner",
    description: "Learn Swift fundamentals.",
    color: "#fb7185"
  },
  {
    id: "rust",
    name: "Rust",
    logo: "R",
    category: "programming",
    level: "Intermediate",
    description: "Learn Rust and safe memory management.",
    color: "#fdba74"
  },
  {
    id: "react",
    name: "React",
    logo: "⚛",
    category: "web",
    level: "Intermediate",
    description: "Build interactive interfaces with components.",
    color: "#67e8f9"
  },
  {
    id: "dotnet",
    name: ".NET",
    logo: ".NET",
    category: "programming",
    level: "Intermediate",
    description: "Build applications and web APIs with .NET.",
    color: "#a78bfa"
  }
];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function getCourse(courseId) {
  return courses.find((course) => course.id === courseId);
}

function getActiveCourse() {
  return getCourse(activeCourseId);
}

function getAllLessonsCount() {
  return courses.reduce(
    (total, course) => total + (course.lessons || []).length,
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

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2600);
}

/* =====================================
   Part 2: Real Lesson Content
===================================== */

const lessonLibrary = {
  csharp: [
    {
      title: "Lesson 1: Introduction to C#",
      description: "مقدمة عن البرمجة ولغة C# وأول برنامج.",
      blocks: [
        {
          type: "heading",
          content: "1. What is Programming? — ما هي البرمجة؟"
        },
        {
          type: "text",
          content: "Programming is the process of writing instructions that a computer can execute. البرمجة هي كتابة مجموعة تعليمات واضحة للكمبيوتر علشان ينفّذ مهمة معينة، زي إجراء عملية حسابية أو عرض بيانات."
        },
        {
          type: "heading",
          content: "2. What is C#? — ما هي لغة C#؟"
        },
        {
          type: "text",
          content: "C# is a modern programming language developed by Microsoft. It supports Object-Oriented Programming (OOP). لغة C# هي لغة برمجة حديثة من Microsoft، وبتُستخدم في تطبيقات الويب والديسكتوب والألعاب والأنظمة المختلفة."
        },
        {
          type: "heading",
          content: "3. Your First Program — أول برنامج"
        },
        {
          type: "code",
          content: "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}"
        },
        {
          type: "heading",
          content: "4. Code Explanation — شرح الكود"
        },
        {
          type: "list",
          items: [
            "using System; — إتاحة استخدام أدوات مثل Console.",
            "class Program — تعريف كلاس اسمه Program.",
            "static void Main() — نقطة بداية التنفيذ في البرنامج التقليدي ده.",
            "Console.WriteLine() — طباعة نص على الشاشة والانتقال للسطر التالي.",
            "; — إنهاء التعليمة."
          ]
        },
        {
          type: "heading",
          content: "5. Output — الناتج"
        },
        {
          type: "output",
          content: "Hello, World!"
        },
        {
          type: "heading",
          content: "6. Practice — تدريب"
        },
        {
          type: "text",
          content: "Change the message to your name. غيّري النص بحيث يطبع اسمك بدل Hello, World!"
        },
        {
          type: "quiz",
          content: "Which command prints text? — أنهي تعليمة بتطبع نص؟",
          options: [
            "Console.ReadLine()",
            "Console.WriteLine()",
            "int"
          ],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Variables and Data Types",
      description: "المتغيرات وأنواع البيانات.",
      blocks: [
        {
          type: "heading",
          content: "1. What is a Variable? — ما هو المتغير؟"
        },
        {
          type: "text",
          content: "A variable is a named place used to store a value. المتغير مكان بنخزّن فيه قيمة، وبنستخدم اسمه علشان نرجع للقيمة دي ونستعملها في البرنامج."
        },
        {
          type: "heading",
          content: "2. Data Types — أنواع البيانات"
        },
        {
          type: "list",
          items: [
            "int — للأعداد الصحيحة مثل 10.",
            "double — للأعداد العشرية مثل 3.14.",
            "decimal — للأعداد العشرية المناسبة للحسابات المالية.",
            "char — لحرف واحد مثل 'A'.",
            "string — لتخزين النصوص مثل \"Malak\".",
            "bool — لتخزين true أو false."
          ]
        },
        {
          type: "heading",
          content: "3. Code Example — مثال"
        },
        {
          type: "code",
          content: "string name = \"Malak\";\nint age = 20;\ndouble grade = 95.5;\nbool isStudent = true;\n\nConsole.WriteLine(name);\nConsole.WriteLine(age);\nConsole.WriteLine(grade);\nConsole.WriteLine(isStudent);"
        },
        {
          type: "heading",
          content: "4. Explanation — الشرح"
        },
        {
          type: "list",
          items: [
            "string name — تعريف متغير نصي اسمه name.",
            "int age — تعريف متغير صحيح اسمه age.",
            "double grade — تعريف متغير عشري اسمه grade.",
            "bool isStudent — تعريف متغير منطقي.",
            "Console.WriteLine(name) — طباعة القيمة الموجودة في name."
          ]
        },
        {
          type: "heading",
          content: "5. Output — الناتج"
        },
        {
          type: "output",
          content: "Malak\n20\n95.5\nTrue"
        },
        {
          type: "quiz",
          content: "Which type stores true or false? — أنهي نوع بيخزن true أو false؟",
          options: [
            "string",
            "bool",
            "double"
          ],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: Operators",
      description: "العوامل الحسابية والمنطقية وعوامل المقارنة.",
      blocks: [
        {
          type: "heading",
          content: "1. What is an Operator? — ما هو العامل؟"
        },
        {
          type: "text",
          content: "An operator performs an operation on values. العامل هو رمز بيخلينا نجري عملية حسابية أو نقارن قيمتين أو نختبر شرطًا منطقيًا."
        },
        {
          type: "heading",
          content: "2. Arithmetic Operators — العوامل الحسابية"
        },
        {
          type: "code",
          content: "int a = 10;\nint b = 3;\n\nConsole.WriteLine(a + b);\nConsole.WriteLine(a - b);\nConsole.WriteLine(a * b);\nConsole.WriteLine(a / b);\nConsole.WriteLine(a % b);"
        },
        {
          type: "text",
          content: "+ للجمع، - للطرح، * للضرب، / للقسمة، و% لباقي القسمة. لأن a وb من النوع int، فإن 10 / 3 نتيجتها 3، بينما 10 % 3 نتيجتها 1."
        },
        {
          type: "heading",
          content: "3. Comparison Operators — عوامل المقارنة"
        },
        {
          type: "list",
          items: [
            "== — هل القيمتان متساويتان؟",
            "!= — هل القيمتان مختلفتان؟",
            "> — أكبر من.",
            "< — أصغر من.",
            ">= — أكبر من أو يساوي.",
            "<= — أصغر من أو يساوي."
          ]
        },
        {
          type: "heading",
          content: "4. Logical Operators — العوامل المنطقية"
        },
        {
          type: "list",
          items: [
            "&& AND — لازم الشرطين يكونوا true.",
            "|| OR — يكفي شرط واحد يكون true.",
            "! NOT — عكس القيمة المنطقية."
          ]
        },
        {
          type: "heading",
          content: "5. Output — الناتج"
        },
        {
          type: "output",
          content: "13\n7\n30\n3\n1"
        },
        {
          type: "quiz",
          content: "What is 10 % 3? — ما ناتج باقي قسمة 10 على 3؟",
          options: ["3", "1", "0"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 4: Conditions",
      description: "اتخاذ القرارات باستخدام if وelse.",
      blocks: [
        {
          type: "heading",
          content: "1. Conditional Statements — الجمل الشرطية"
        },
        {
          type: "text",
          content: "Conditions allow a program to make decisions. الشروط بتسمح للبرنامج يختار ينفذ أنهي كود بناءً على نتيجة شرط معين."
        },
        {
          type: "heading",
          content: "2. if and else"
        },
        {
          type: "code",
          content: "int score = 85;\n\nif (score >= 50)\n{\n    Console.WriteLine(\"Passed\");\n}\nelse\n{\n    Console.WriteLine(\"Failed\");\n}"
        },
        {
          type: "text",
          content: "if checks whether the condition is true. لو الدرجة أكبر من أو تساوي 50، البرنامج يطبع Passed. غير كده ينفّذ else ويطبع Failed."
        },
        {
          type: "heading",
          content: "3. else if — أكتر من احتمال"
        },
        {
          type: "code",
          content: "int score = 75;\n\nif (score >= 85)\n{\n    Console.WriteLine(\"Excellent\");\n}\nelse if (score >= 65)\n{\n    Console.WriteLine(\"Very Good\");\n}\nelse\n{\n    Console.WriteLine(\"Keep Practicing\");\n}"
        },
        {
          type: "heading",
          content: "4. Output — الناتج"
        },
        {
          type: "output",
          content: "Very Good"
        },
        {
          type: "quiz",
          content: "Which keyword handles another condition? — أنهي كلمة بتختبر شرطًا إضافيًا؟",
          options: ["else if", "using", "class"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 5: Loops",
      description: "تكرار الأوامر باستخدام for وwhile.",
      blocks: [
        {
          type: "heading",
          content: "1. What is a Loop? — ما هي الحلقة التكرارية؟"
        },
        {
          type: "text",
          content: "A loop repeats a block of code. الحلقة التكرارية بتخلينا ننفذ نفس مجموعة التعليمات أكثر من مرة بدل ما نكتبها يدويًا."
        },
        {
          type: "heading",
          content: "2. The for Loop"
        },
        {
          type: "code",
          content: "for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(i);\n}"
        },
        {
          type: "list",
          items: [
            "int i = 1 — بداية العداد.",
            "i <= 5 — يستمر التكرار طالما الشرط true.",
            "i++ — زيادة العداد بمقدار واحد بعد كل دورة.",
            "The loop stops when the condition becomes false — الحلقة تتوقف عندما يصبح الشرط false."
          ]
        },
        {
          type: "heading",
          content: "3. The while Loop"
        },
        {
          type: "code",
          content: "int number = 1;\n\nwhile (number <= 3)\n{\n    Console.WriteLine(number);\n    number++;\n}"
        },
        {
          type: "heading",
          content: "4. Output — الناتج"
        },
        {
          type: "output",
          content: "1\n2\n3"
        },
        {
          type: "quiz",
          content: "What does i++ do? — إيه وظيفة i++؟",
          options: [
            "Decrease by one",
            "Increase by one",
            "Stop the program"
          ],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 6: Methods",
      description: "إنشاء الدوال واستدعاؤها وإرجاع القيم.",
      blocks: [
        {
          type: "heading",
          content: "1. What is a Method? — ما هي الدالة؟"
        },
        {
          type: "text",
          content: "A method is a reusable block of code that performs a task. الدالة جزء من الكود بنكتبه مرة ونقدر نستدعيه كل ما نحتاج ننفذ نفس المهمة."
        },
        {
          type: "heading",
          content: "2. Creating a Method — إنشاء دالة"
        },
        {
          type: "code",
          content: "static int Add(int a, int b)\n{\n    return a + b;\n}\n\nstatic void Main()\n{\n    int result = Add(5, 3);\n    Console.WriteLine(result);\n}"
        },
        {
          type: "heading",
          content: "3. Explanation — الشرح"
        },
        {
          type: "list",
          items: [
            "static — تسمح باستدعاء الدالة من سياق static مثل Main في المثال.",
            "int — نوع القيمة التي ترجعها الدالة.",
            "Add — اسم الدالة.",
            "int a, int b — Parameters تستقبل القيم.",
            "return a + b — إرجاع ناتج الجمع.",
            "Add(5, 3) — استدعاء الدالة وتمرير 5 و3 كـ Arguments."
          ]
        },
        {
          type: "heading",
          content: "4. Output — الناتج"
        },
        {
          type: "output",
          content: "8"
        },
        {
          type: "quiz",
          content: "What does return do? — إيه وظيفة return؟",
          options: [
            "Returns a value from a method",
            "Prints automatically",
            "Creates a class"
          ],
          answer: 0
        }
      ]
    }
  ],

  python: [
    {
      title: "Lesson 1: Introduction to Python",
      description: "مقدمة عن Python وأول برنامج.",
      blocks: [
        {
          type: "heading",
          content: "What is Python? — ما هي Python؟"
        },
        {
          type: "text",
          content: "Python is a high-level programming language known for readable syntax. Python لغة برمجة سهلة القراءة نسبيًا، وبتُستخدم في تطوير الويب وتحليل البيانات والأتمتة والذكاء الاصطناعي."
        },
        {
          type: "heading",
          content: "Your First Program — أول برنامج"
        },
        {
          type: "code",
          content: "print(\"Hello, World!\")"
        },
        {
          type: "text",
          content: "The print() function displays information on the screen. الدالة print() بتعرض النص أو القيمة على الشاشة."
        },
        {
          type: "heading",
          content: "Output — الناتج"
        },
        {
          type: "output",
          content: "Hello, World!"
        },
        {
          type: "quiz",
          content: "Which function displays output in Python?",
          options: ["input()", "print()", "type()"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Variables and Types",
      description: "المتغيرات وأنواع البيانات في Python.",
      blocks: [
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "text",
          content: "A variable stores a reference to a value. المتغير بيسمح لنا نستخدم اسمًا للإشارة إلى قيمة ونرجع لها أثناء تنفيذ البرنامج."
        },
        {
          type: "code",
          content: "name = \"Malak\"\nage = 20\nheight = 1.65\nis_student = True\n\nprint(name)\nprint(age)\nprint(type(height))"
        },
        {
          type: "heading",
          content: "Common Types — أنواع البيانات"
        },
        {
          type: "list",
          items: [
            "int — الأعداد الصحيحة.",
            "float — الأعداد العشرية.",
            "str — النصوص.",
            "bool — القيم المنطقية True وFalse.",
            "list — مجموعة مرتبة قابلة للتعديل."
          ]
        },
        {
          type: "heading",
          content: "Output — الناتج"
        },
        {
          type: "output",
          content: "Malak\n20\n<class 'float'>"
        },
        {
          type: "quiz",
          content: "Which type represents text in Python?",
          options: ["int", "str", "bool"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: Conditions",
      description: "استخدام if وelif وelse.",
      blocks: [
        {
          type: "heading",
          content: "Making Decisions — اتخاذ القرارات"
        },
        {
          type: "text",
          content: "Conditions execute different code depending on whether an expression is true or false. الشروط بتحدد أنهي جزء من الكود هيتنفذ حسب نتيجة التعبير."
        },
        {
          type: "code",
          content: "score = 75\n\nif score >= 85:\n    print(\"Excellent\")\nelif score >= 65:\n    print(\"Very Good\")\nelse:\n    print(\"Keep Practicing\")"
        },
        {
          type: "text",
          content: "Python uses indentation to define code blocks. المسافات البادئة في Python جزء أساسي من تركيب الكود، ولازم تكون متناسقة."
        },
        {
          type: "output",
          content: "Very Good"
        },
        {
          type: "quiz",
          content: "Which keyword checks another condition?",
          options: ["elif", "repeat", "define"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 4: Loops",
      description: "التكرار باستخدام for وwhile.",
      blocks: [
        {
          type: "heading",
          content: "The for Loop — حلقة for"
        },
        {
          type: "code",
          content: "for number in range(1, 6):\n    print(number)"
        },
        {
          type: "text",
          content: "range(1, 6) generates numbers from 1 up to, but not including, 6. يعني الأرقام من 1 إلى 5."
        },
        {
          type: "heading",
          content: "The while Loop — حلقة while"
        },
        {
          type: "code",
          content: "count = 1\n\nwhile count <= 3:\n    print(count)\n    count += 1"
        },
        {
          type: "output",
          content: "1\n2\n3"
        },
        {
          type: "quiz",
          content: "How many numbers does range(1, 6) generate?",
          options: ["4", "5", "6"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 5: Functions",
      description: "تعريف الدوال والـ parameters والـ return.",
      blocks: [
        {
          type: "heading",
          content: "What is a Function? — ما هي الدالة؟"
        },
        {
          type: "text",
          content: "A function is a reusable block of code. الدالة بتجمع تعليمات لمهمة معينة بحيث نقدر نستدعيها أكثر من مرة."
        },
        {
          type: "code",
          content: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)"
        },
        {
          type: "list",
          items: [
            "def — الكلمة المستخدمة لتعريف الدالة.",
            "a وb — Parameters تستقبل القيم.",
            "return — إرجاع النتيجة إلى مكان الاستدعاء.",
            "add(5, 3) — استدعاء الدالة بقيمتين."
          ]
        },
        {
          type: "output",
          content: "8"
        },
        {
          type: "quiz",
          content: "Which keyword defines a function in Python?",
          options: ["func", "def", "method"],
          answer: 1
        }
      ]
    }
  ],

  javascript: [
    {
      title: "Lesson 1: JavaScript Introduction",
      description: "مقدمة عن JavaScript ودورها في الويب.",
      blocks: [
        {
          type: "heading",
          content: "What is JavaScript? — ما هي JavaScript؟"
        },
        {
          type: "text",
          content: "JavaScript is a programming language used to add behavior and interactivity to websites. JavaScript بتضيف التفاعل للمواقع، زي الأزرار والقوائم وتحديث المحتوى. ويمكن استخدامها أيضًا في بيئات الخادم مثل Node.js."
        },
        {
          type: "heading",
          content: "Your First Code — أول كود"
        },
        {
          type: "code",
          content: "console.log(\"Hello, World!\");"
        },
        {
          type: "text",
          content: "console.log() writes a message to the developer console. التعليمة دي بتعرض الرسالة في Console، مش داخل صفحة الموقع نفسها."
        },
        {
          type: "output",
          content: "Hello, World!"
        },
        {
          type: "quiz",
          content: "Which command writes to the console?",
          options: ["console.log()", "printLine()", "Console.WriteLine()"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: Variables",
      description: "التعامل مع let وconst وvar.",
      blocks: [
        {
          type: "heading",
          content: "Declaring Variables — تعريف المتغيرات"
        },
        {
          type: "text",
          content: "Variables store values used by a program. المتغيرات بتخزن قيم نقدر نستخدمها أثناء تنفيذ البرنامج. في JavaScript بنستخدم let للمتغيرات القابلة لإعادة الإسناد، وconst للربط الذي لا يُعاد إسناده."
        },
        {
          type: "code",
          content: "let name = \"Malak\";\nlet age = 20;\nconst country = \"Egypt\";\n\nconsole.log(name);\nconsole.log(age);\nconsole.log(country);"
        },
        {
          type: "list",
          items: [
            "let — يمكن إعادة إسناد قيمة جديدة للمتغير.",
            "const — لا يمكن إعادة إسناد قيمة جديدة للمتغير نفسه.",
            "var — طريقة أقدم لتعريف المتغيرات ولها قواعد scope مختلفة."
          ]
        },
        {
          type: "output",
          content: "Malak\n20\nEgypt"
        },
        {
          type: "quiz",
          content: "Which keyword prevents reassignment?",
          options: ["let", "const", "var"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: Conditions and Loops",
      description: "الشروط والتكرار في JavaScript.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "const score = 80;\n\nif (score >= 50) {\n  
console.log(\"Passed\");\n} else {\n    console.log(\"Failed\");\n}"
        },
        {
          type: "text",
          content: "The if statement runs a block when its condition is true. جملة if بتنفّذ الكود لو الشرط اتحقق، وelse بتتعامل مع الحالة الأخرى."
        },
        {
          type: "heading",
          content: "Loops — الحلقات التكرارية"
        },
        {
          type: "code",
          content: "for (let i = 1; i <= 3; i++) {\n    console.log(i);\n}"
        },
        {
          type: "output",
          content: "Passed\n1\n2\n3"
        },
        {
          type: "quiz",
          content: "Which loop is commonly used with a counter?",
          options: ["for", "if", "const"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 4: Functions and Arrays",
      description: "الدوال والمصفوفات في JavaScript.",
      blocks: [
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "text",
          content: "A function is a reusable block of code. الدالة هي مجموعة تعليمات بنكتبها مرة ونقدر نستدعيها كل ما نحتاج تنفيذ نفس المهمة."
        },
        {
          type: "code",
          content: "function add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(4, 6));"
        },
        {
          type: "list",
          items: [
            "function — الكلمة المستخدمة لتعريف الدالة.",
            "add — اسم الدالة.",
            "a وb — Parameters تستقبل القيم.",
            "return a + b — إرجاع ناتج الجمع.",
            "add(4, 6) — استدعاء الدالة وتمرير القيمتين."
          ]
        },
        {
          type: "heading",
          content: "Arrays — المصفوفات"
        },
        {
          type: "code",
          content: "const languages = [\"C#\", \"Python\", \"JavaScript\"];\n\nconsole.log(languages[0]);\nconsole.log(languages.length);"
        },
        {
          type: "text",
          content: "An array stores multiple values in one variable. المصفوفة بتجمع أكتر من قيمة في متغير واحد. الـ index بيبدأ من صفر، وlength بترجع عدد العناصر."
        },
        {
          type: "output",
          content: "10\nC#\n3"
        },
        {
          type: "quiz",
          content: "What is the index of the first array item?",
          options: ["0", "1", "-1"],
          answer: 0
        }
      ]
    }
  ]
};

/* =====================================
   Part 3: HTML, CSS and SQL Lessons
===================================== */

Object.assign(lessonLibrary, {

  html: [
    {
      title: "Lesson 1: HTML Basics",
      description: "أساسيات HTML وبناء صفحة ويب.",
      blocks: [
        {
          type: "heading",
          content: "What is HTML? — ما هي HTML؟"
        },
        {
          type: "text",
          content: "HTML stands for HyperText Markup Language. It is used to structure web pages. لغة HTML بتحدد محتويات الصفحة زي العناوين والفقرات والصور والروابط."
        },
        {
          type: "heading",
          content: "Basic HTML Structure — الهيكل الأساسي"
        },
        {
          type: "code",
          content: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>Welcome to my website.</p>\n</body>\n</html>"
        },
        {
          type: "list",
          items: [
            "<!DOCTYPE html> — بيحدد إن المستند HTML5.",
            "<html> — العنصر الرئيسي للصفحة.",
            "<head> — معلومات الصفحة وإعداداتها.",
            "<title> — عنوان الصفحة في تبويب المتصفح.",
            "<body> — المحتوى الظاهر للمستخدم.",
            "<h1> — عنوان رئيسي.",
            "<p> — فقرة نصية."
          ]
        },
        {
          type: "output",
          content: "Hello World\nWelcome to my website."
        },
        {
          type: "quiz",
          content: "Which tag creates a paragraph?",
          options: ["<h1>", "<p>", "<title>"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Links and Images",
      description: "إضافة الروابط والصور لصفحة الويب.",
      blocks: [
        {
          type: "heading",
          content: "Links — الروابط"
        },
        {
          type: "text",
          content: "The <a> tag creates a hyperlink. بنستخدمه عشان ننقل المستخدم لصفحة تانية أو لموقع خارجي."
        },
        {
          type: "code",
          content: "<a href=\"https://example.com\">Visit Website</a>"
        },
        {
          type: "list",
          items: [
            "<a> — عنصر الرابط.",
            "href — الخاصية اللي بتحدد عنوان الرابط.",
            "Visit Website — النص اللي المستخدم بيضغط عليه."
          ]
        },
        {
          type: "heading",
          content: "Images — الصور"
        },
        {
          type: "code",
          content: "<img src=\"photo.jpg\" alt=\"A beautiful view\">"
        },
        {
          type: "text",
          content: "The src attribute specifies the image path. خاصية src بتحدد مكان الصورة، وalt بتقدم وصفًا بديلًا لو الصورة مش ظاهرة أو لقارئات الشاشة."
        },
        {
          type: "quiz",
          content: "Which attribute specifies a link destination?",
          options: ["src", "href", "alt"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: Forms and Inputs",
      description: "إنشاء النماذج وحقول إدخال البيانات.",
      blocks: [
        {
          type: "heading",
          content: "HTML Forms — النماذج"
        },
        {
          type: "text",
          content: "A form collects user input. الـ Form بتجمع بيانات المستخدم، زي الاسم والبريد الإلكتروني وكلمة المرور."
        },
        {
          type: "code",
          content: "<form>\n    <label for=\"name\">Your Name:</label>\n    <input id=\"name\" type=\"text\" placeholder=\"Enter your name\">\n\n    <label for=\"email\">Email:</label>\n    <input id=\"email\" type=\"email\">\n\n    <button type=\"submit\">Submit</button>\n</form>"
        },
        {
          type: "list",
          items: [
            "<form> — بداية النموذج.",
            "<label> — وصف حقل الإدخال.",
            "<input> — حقل لإدخال البيانات.",
            "type=\"text\" — إدخال نص عادي.",
            "type=\"email\" — إدخال بريد إلكتروني.",
            "<button> — زر إرسال النموذج."
          ]
        },
        {
          type: "text",
          content: "ملاحظة: النموذج ده مجرد واجهة HTML. إرسال البيانات وحفظها فعليًا يحتاج JavaScript أو Backend حسب وظيفة الموقع."
        },
        {
          type: "quiz",
          content: "Which input type is designed for email addresses?",
          options: ["text", "email", "button"],
          answer: 1
        }
      ]
    }
  ],

  css: [
    {
      title: "Lesson 1: CSS Basics",
      description: "أساسيات تنسيق صفحات الويب.",
      blocks: [
        {
          type: "heading",
          content: "What is CSS? — ما هي CSS؟"
        },
        {
          type: "text",
          content: "CSS stands for Cascading Style Sheets. It controls the appearance of web pages. لغة CSS مسؤولة عن الألوان والخطوط والمسافات وتنسيق عناصر الموقع."
        },
        {
          type: "heading",
          content: "CSS Syntax — طريقة الكتابة"
        },
        {
          type: "code",
          content: "h1 {\n    color: blue;\n    font-size: 32px;\n}\n\np {\n    color: gray;\n}"
        },
        {
          type: "list",
          items: [
            "h1 — Selector بيحدد العنصر اللي هننسقه.",
            "color — خاصية لون النص.",
            "blue — قيمة الخاصية.",
            "font-size — خاصية حجم الخط.",
            "كل قاعدة CSS بتتكتب داخل الأقواس المعقوفة {}."
          ]
        },
        {
          type: "text",
          content: "CSS can be added using inline styles, an internal style tag, or an external .css file. الأفضل في المشاريع الكبيرة غالبًا استخدام ملف CSS خارجي."
        },
        {
          type: "quiz",
          content: "Which CSS property changes text color?",
          options: ["font-size", "color", "margin"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Box Model",
      description: "فهم الـ Box Model والمسافات.",
      blocks: [
        {
          type: "heading",
          content: "The CSS Box Model — نموذج الصندوق"
        },
        {
          type: "text",
          content: "Every HTML element can be treated as a box. كل عنصر في الصفحة ممكن نفهمه على إنه صندوق له محتوى ومسافات وحدود."
        },
        {
          type: "list",
          items: [
            "Content — المحتوى نفسه.",
            "Padding — المسافة بين المحتوى والحدود.",
            "Border — الحدود المحيطة بالعنصر.",
            "Margin — المسافة الخارجية بين العنصر والعناصر الأخرى."
          ]
        },
        {
          type: "code",
          content: ".card {\n    width: 300px;\n    padding: 20px;\n    border: 2px solid black;\n    margin: 15px;\n    box-sizing: border-box;\n}"
        },
        {
          type: "text",
          content: "box-sizing: border-box makes the declared width include padding and border. الخاصية دي بتساعدنا نتحكم في عرض العنصر بشكل أسهل."
        },
        {
          type: "quiz",
          content: "Which property creates space outside an element?",
          options: ["padding", "margin", "color"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: Flexbox and Responsive Design",
      description: "ترتيب العناصر وتصميم المواقع للموبايل.",
      blocks: [
        {
          type: "heading",
          content: "Flexbox — تنظيم العناصر"
        },
        {
          type: "text",
          content: "Flexbox helps arrange elements in rows or columns. بنستخدمه لترتيب العناصر جنب بعض أو تحت بعض والتحكم في توزيع المسافات."
        },
        {
          type: "code",
          content: ".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n    flex-wrap: wrap;\n}"
        },
        {
          type: "list",
          items: [
            "display: flex — تفعيل Flexbox.",
            "justify-content — توزيع العناصر على المحور الرئيسي.",
            "align-items — محاذاة العناصر على المحور الآخر.",
            "gap — المسافة بين العناصر.",
            "flex-wrap: wrap — السماح للعناصر بالانتقال لسطر جديد."
          ]
        },
        {
          type: "heading",
          content: "Responsive Design — التصميم المتجاوب"
        },
        {
          type: "code",
          content: "@media (max-width: 600px) {\n    .container {\n        flex-direction: column;\n    }\n}"
        },
        {
          type: "text",
          content: "A media query applies styles under certain screen conditions. الـ Media Query بتخلينا نغير شكل الموقع حسب حجم الشاشة، وده مهم للموبايل والتابلت والكمبيوتر."
        },
        {
          type: "quiz",
          content: "Which CSS feature helps create responsive layouts?",
          options: ["Media Queries", "HTML title", "SQL SELECT"],
          answer: 0
        }
      ]
    }
  ],

  sql: [
    {
      title: "Lesson 1: Database Basics",
      description: "مقدمة عن قواعد البيانات والجداول.",
      blocks: [
        {
          type: "heading",
          content: "What is SQL? — ما هي SQL؟"
        },
        {
          type: "text",
          content: "SQL stands for Structured Query Language. It's used to work with relational databases. بنستخدم SQL لإنشاء الجداول وقراءة البيانات وإضافتها وتعديلها وحذفها."
        },
        {
          type: "heading",
          content: "Tables — الجداول"
        },
        {
          type: "text",
          content: "A table stores data in rows and columns. الجدول بيتكون من أعمدة بتحدد أنواع المعلومات وصفوف بتمثل السجلات."
        },
        {
          type: "code",
          content: "CREATE TABLE Students (\n    Id INT PRIMARY KEY,\n    Name VARCHAR(100),\n    Age INT\n);"
        },
        {
          type: "list",
          items: [
            "CREATE TABLE — إنشاء جدول جديد.",
            "Id INT — عمود للأرقام الصحيحة.",
            "PRIMARY KEY — مفتاح أساسي يميز كل سجل.",
            "VARCHAR(100) — نص بطول متغير يصل إلى 100 حرف.",
            "Age INT — عمود لتخزين العمر كعدد صحيح."
          ]
        },
        {
          type: "quiz",
          content: "What does a database table contain?",
          options: ["Rows and columns", "Only images", "Only functions"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: SELECT and WHERE",
      description: "قراءة البيانات وتحديد شروط البحث.",
      blocks: [
        {
          type: "heading",
          content: "SELECT — قراءة البيانات"
        },
        {
          type: "code",
          content: "SELECT * FROM Students;"
        },
        {
          type: "text",
          content: "SELECT retrieves data from a table. النجمة * معناها إرجاع كل الأعمدة، واسم الجدول بعد FROM بيحدد مصدر البيانات."
        },
        {
          type: "heading",
          content: "WHERE — تحديد شرط"
        },
        {
          type: "code",
          content: "SELECT Name, Age\nFROM Students\nWHERE Age >= 18;"
        },
        {
          type: "text",
          content: "WHERE filters rows according to a condition. هنا هنرجع أسماء وأعمار الطلاب اللي أعمارهم 18 سنة أو أكتر."
        },
        {
          type: "list",
          items: [
            "SELECT — الأعمدة المطلوب عرضها.",
            "FROM — الجدول اللي هنقرأ منه.",
            "WHERE — الشرط اللي بيحدد السجلات المطلوبة.",
            ">= — أكبر من أو يساوي."
          ]
        },
        {
          type: "quiz",
          content: "Which SQL keyword filters rows?",
          options: ["FROM", "WHERE", "CREATE"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 3: INSERT, UPDATE and DELETE",
      description: "إضافة البيانات وتعديلها وحذفها.",
      blocks: [
        {
          type: "heading",
          content: "INSERT — إضافة سجل"
        },
        {
          type: "code",
          content: "INSERT INTO Students (Id, Name, Age)\nVALUES (1, 'Malak', 20);"
        },
        {
          type: "text",
          content: "INSERT INTO adds a new row. الأمر ده بيضيف سجلًا جديدًا للجدول بالقيم المحددة."
        },
        {
          type: "heading",
          content: "UPDATE — تعديل البيانات"
        },
        {
          type: "code",
          content: "UPDATE Students\nSET Age = 21\nWHERE Id = 1;"
        },
        {
          type: "text",
          content: "UPDATE changes existing records. مهم جدًا نستخدم WHERE عشان نحدد السجل المطلوب؛ من غيرها ممكن كل الصفوف تتعدل."
        },
        {
          type: "heading",
          content: "DELETE — حذف سجل"
        },
        {
          type: "code",
          content: "DELETE FROM Students\nWHERE Id = 1;"
        },
        {
          type: "text",
          content: "DELETE removes matching rows. راجعي شرط WHERE قبل التنفيذ لتجنب حذف سجلات غير مقصودة."
        },
        {
          type: "quiz",
          content: "Which command modifies existing records?",
          options: ["INSERT", "UPDATE", "SELECT"],
          answer: 1
        }
      ]
    }
  ]

});


/* =====================================
   Part 4: Java, PHP and Dart Lessons
===================================== */

Object.assign(lessonLibrary, {

  java: [
    {
      title: "Lesson 1: Java Basics",
      description: "مقدمة في Java والمتغيرات.",
      blocks: [
        {
          type: "heading",
          content: "What is Java? — ما هي Java؟"
        },
        {
          type: "text",
          content: "Java is a general-purpose, object-oriented programming language. لغة Java بتستخدم في تطبيقات كتير، وبتعتمد على مفاهيم زي Classes وObjects."
        },
        {
          type: "heading",
          content: "Your First Java Program — أول برنامج"
        },
        {
          type: "code",
          content: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}"
        },
        {
          type: "output",
          content: "Hello, Java!"
        },
        {
          type: "list",
          items: [
            "class Main — تعريف Class اسمها Main.",
            "main — نقطة بداية تنفيذ البرنامج.",
            "System.out.println() — طباعة نص مع الانتقال لسطر جديد.",
            "الأقواس { } بتحدد بداية ونهاية الكتل البرمجية.",
            "الفاصلة المنقوطة ; بتُنهي أغلب تعليمات Java."
          ]
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "int age = 20;\nString name = \"Malak\";\ndouble grade = 95.5;\nboolean passed = true;\n\nSystem.out.println(name);\nSystem.out.println(age);"
        },
        {
          type: "text",
          content: "int stores integers, String stores text, double stores decimal numbers, and boolean stores true or false. كل نوع بيانات ليه استخدام مناسب."
        },
        {
          type: "quiz",
          content: "Which type stores true or false?",
          options: ["String", "boolean", "double"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Loops",
      description: "الشروط والحلقات التكرارية في Java.",
      blocks: [
        {
          type: "heading",
          content: "If and Else — الشروط"
        },
        {
          type: "code",
          content: "int score = 75;\n\nif (score >= 50) {\n    System.out.println(\"Passed\");\n} else {\n    System.out.println(\"Failed\");\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "The if statement checks a condition. لو الشرط صحيح بيتنفذ الجزء الأول، ولو غير صحيح ممكن ينفذ else."
        },
        {
          type: "heading",
          content: "For Loop — حلقة for"
        },
        {
          type: "code",
          content: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}"
        },
        {
          type: "output",
          content: "1\n2\n3\n4\n5"
        },
        {
          type: "list",
          items: [
            "int i = 1 — بداية العداد.",
            "i <= 5 — شرط استمرار الحلقة.",
            "i++ — زيادة العداد بمقدار واحد.",
            "تتوقف الحلقة لما الشرط يصبح false."
          ]
        },
        {
          type: "quiz",
          content: "What does i++ do?",
          options: ["Increases i by one", "Deletes i", "Stops the program"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 3: Classes and Objects",
      description: "مقدمة في البرمجة كائنية التوجه OOP.",
      blocks: [
        {
          type: "heading",
          content: "Classes and Objects — الكلاسات والأوبجكتس"
        },
        {
          type: "text",
          content: "A class is a blueprint, while an object is an instance of that class. الـ Class زي التصميم أو القالب، والـ Object نسخة فعلية منه نقدر نستخدمها."
        },
        {
          type: "code",
          content: "class Car {\n    String brand;\n\n    void drive() {\n        System.out.println(\"Car is moving\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.brand = \"Toyota\";\n        myCar.drive();\n        System.out.println(myCar.brand);\n    }\n}"
        },
        {
          type: "output",
          content: "Car is moving\nToyota"
        },
        {
          type: "list",
          items: [
            "class Car — تعريف الكلاس.",
            "brand — متغير يمثل خاصية للسيارة.",
            "drive() — Method تمثل سلوكًا.",
            "new Car() — إنشاء Object جديد.",
            "myCar.brand — الوصول إلى الخاصية من خلال الأوبجكت."
          ]
        },
        {
          type: "quiz",
          content: "What is an object?",
          options: ["An instance of a class", "A database", "A loop"],
          answer: 0
        }
      ]
    }
  ],

  php: [
    {
      title: "Lesson 1: PHP Basics",
      description: "مقدمة في PHP وكتابة أول كود.",
      blocks: [
        {
          type: "heading",
          content: "What is PHP? — ما هي PHP؟"
        },
        {
          type: "text",
          content: "PHP is a server-side scripting language commonly used for web development. PHP بتشتغل على السيرفر وتقدر تتعامل مع قواعد البيانات وتولّد محتوى ديناميكي للموقع."
        },
        {
          type: "heading",
          content: "Your First PHP Code — أول كود"
        },
        {
          type: "code",
          content: "<?php\necho \"Hello, PHP!\";\n?>"
        },
        {
          type: "output",
          content: "Hello, PHP!"
        },
        {
          type: "text",
          content: "The echo statement displays output. بنستخدم علامة $ قبل اسم المتغير في PHP، وغالبًا بننهي التعليمة بفاصلة منقوطة."
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "<?php\n$name = \"Malak\";\n$age = 20;\n\n echo $name;\n echo $age;\n?>"
        },
        {
          type: "output",
          content: "Malak20"
        },
        {
          type: "list",
          items: [
            "$name — متغير نصي.",
            "$age — متغير رقمي.",
            "echo — طباعة المحتوى.",
            "PHP variable names start with $.",
            "PHP is commonly executed by a PHP server environment."
          ]
        },
        {
          type: "quiz",
          content: "Which symbol starts a PHP variable?",
          options: ["#", "$", "@"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Loops",
      description: "الشروط والحلقات في PHP.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "<?php\n$score = 85;\n\nif ($score >= 50) {\n    echo \"Passed\";\n} else {\n    echo \"Failed\";\n}\n?>"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "if checks whether a condition is true. لو الدرجة 50 أو أكتر، البرنامج بيطبع Passed."
        },
        {
          type: "heading",
          content: "Loops — الحلقات"
        },
        {
          type: "code",
          content: "<?php\nfor ($i = 1; $i <= 3; $i++) {\n    echo $i . \"\\n\";\n}\n?>"
        },
        {
          type: "output",
          content: "1\n2\n3"
        },
        {
          type: "list",
          items: [
            "$i = 1 — بدء العداد.",
            "$i <= 3 — شرط استمرار الحلقة.",
            "$i++ — زيادة العداد.",
            ". — عامل دمج النصوص في PHP."
          ]
        },
        {
          type: "quiz",
          content: "Which operator joins strings in PHP?",
          options: [".", "+", "=="],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 3: Functions and Forms",
      description: "الدوال واستقبال بيانات المستخدم.",
      blocks: [
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "<?php\nfunction add($a, $b) {\n    return $a + $b;\n}\n\necho add(4, 6);\n?>"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "text",
          content: "A function is reusable code. الدالة add بتستقبل رقمين وترجع مجموعهما باستخدام return."
        },
        {
          type: "heading",
          content: "Handling Form Data — استقبال البيانات"
        },
        {
          type: "code",
          content: "<form method=\"post\" action=\"process.php\">\n    <input type=\"text\" name=\"username\">\n    <button type=\"submit\">Send</button>\n</form>"
        },
        {
          type: "text",
          content: "The form sends its data to process.php using POST. في ملف PHP ممكن نقرأ القيمة من $_POST['username']، ولازم نتحقق من البيانات ونتعامل معها بأمان قبل استخدامها."
        },
        {
          type: "code",
          content: "<?php\n$username = $_POST['username'] ?? '';\necho htmlspecialchars($username, ENT_QUOTES, 'UTF-8');\n?>"
        },
        {
          type: "quiz",
          content: "Which PHP superglobal commonly receives POST form data?",
          options: ["$_POST", "$_STYLE", "$_HTML"],
          answer: 0
        }
      ]
    }
  ],

  dart: [
    {
      title: "Lesson 1: Dart Basics",
      description: "أساسيات Dart والمتغيرات والطباعة.",
      blocks: [
        {
          type: "heading",
          content: "What is Dart? — ما هي Dart؟"
        },
        {
          type: "text",
          content: "Dart is a programming language developed by Google and used to build Flutter applications. لغة Dart هي اللغة اللي بنستخدمها في Flutter لبناء تطبيقات للموبايل والويب وغيرها."
        },
        {
          type: "heading",
          content: "Your First Dart Program — أول برنامج"
        },
        {
          type: "code",
          content: "void main() {\n  print('Hello, Dart!');\n}"
        },
        {
          type: "output",
          content: "Hello, Dart!"
        },
        {
          type: "text",
          content: "The main() function is the entry point of a basic Dart program. الدالة main هي نقطة بداية تنفيذ البرنامج، وprint بتطبع قيمة."
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "void main() {\n  String name = 'Malak';\n  int age = 20;\n  double grade = 95.5;\n  bool isStudent = true;\n\n  print(name);\n  print(age);\n}"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "list",
          items: [
            "String — لتخزين النصوص.",
            "int — لتخزين الأعداد الصحيحة.",
            "double — لتخزين الأعداد العشرية.",
            "bool — لتخزين true أو false.",
            "print() — لطباعة القيم."
          ]
        },
        {
          type: "quiz",
          content: "Which Dart type stores text?",
          options: ["int", "String", "bool"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Functions",
      description: "الشروط والدوال في Dart.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "void main() {\n  int score = 80;\n\n  if (score >= 50) {\n    print('Passed');\n  } else {\n    print('Failed');\n  }\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "if checks a condition before executing a block. بنستخدم if وelse عشان نخلي البرنامج ياخد قرارات بناءً على القيم."
        },
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print(add(3, 7));\n}"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "list",
          items: [
            "int قبل add — نوع القيمة التي ترجعها الدالة.",
            "a وb — Parameters من النوع int.",
            "return — إرجاع النتيجة.",
            "add(3, 7) — استدعاء الدالة بالقيم 3 و7."
          ]
        },
        {
          type: "quiz",
          content: "What does return do in a function?",
          options: ["Returns a value", "Creates a screen", "Repeats a loop"],
          answer: 0
        }
      ]
    }
  ]

});

/* =====================================
   Part 5: TypeScript, C++ and Go Lessons
===================================== */

Object.assign(lessonLibrary, {

  typescript: [
    {
      title: "Lesson 1: TypeScript Basics",
      description: "مقدمة في TypeScript وأنواع البيانات.",
      blocks: [
        {
          type: "heading",
          content: "What is TypeScript? — ما هي TypeScript؟"
        },
        {
          type: "text",
          content: "TypeScript is a programming language built on JavaScript that adds static type checking. هي مبنية على JavaScript وبتساعدنا نكتشف أخطاء متعلقة بأنواع البيانات أثناء التطوير."
        },
        {
          type: "heading",
          content: "Variables and Types — المتغيرات والأنواع"
        },
        {
          type: "code",
          content: "let userName: string = \"Malak\";\nlet age: number = 20;\nlet isStudent: boolean = true;\n\nconsole.log(userName);\nconsole.log(age);"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "list",
          items: [
            "string — نوع النصوص.",
            "number — نوع الأرقام.",
            "boolean — نوع true أو false.",
            ": string — تحديد نوع المتغير.",
            "TypeScript can detect many type errors before the code runs."
          ]
        },
        {
          type: "heading",
          content: "Type Safety — أمان الأنواع"
        },
        {
          type: "code",
          content: "let score: number = 90;\n// score = \"Excellent\"; // Type error"
        },
        {
          type: "text",
          content: "The variable score expects a number. المتغير score محدد ليستقبل رقمًا، لذلك إسناد نص إليه يعتبر خطأ في النوع عند فحص TypeScript."
        },
        {
          type: "quiz",
          content: "Which type represents text in TypeScript?",
          options: ["number", "string", "boolean"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Functions and Interfaces",
      description: "الدوال والواجهات في TypeScript.",
      blocks: [
        {
          type: "heading",
          content: "Typed Functions — الدوال محددة الأنواع"
        },
        {
          type: "code",
          content: "function add(a: number, b: number): number {\n    return a + b;\n}\n\nconsole.log(add(5, 3));"
        },
        {
          type: "output",
          content: "8"
        },
        {
          type: "text",
          content: "The parameters accept numbers, and the function returns a number. تحديد الأنواع بيوضح القيم اللي الدالة بتستقبلها والنتيجة اللي بترجعها."
        },
        {
          type: "heading",
          content: "Interfaces — الواجهات"
        },
        {
          type: "code",
          content: "interface Student {\n    name: string;\n    age: number;\n}\n\nconst student: Student = {\n    name: \"Malak\",\n    age: 20\n};\n\nconsole.log(student.name);"
        },
        {
          type: "output",
          content: "Malak"
        },
        {
          type: "list",
          items: [
            "interface Student — تحديد شكل كائن الطالب.",
            "name: string — خاصية الاسم نصية.",
            "age: number — خاصية العمر رقمية.",
            "student: Student — كائن ملتزم بالشكل المحدد.",
            "student.name — الوصول إلى خاصية الاسم."
          ]
        },
        {
          type: "quiz",
          content: "What does an interface help define?",
          options: [
            "The structure of an object",
            "A loop",
            "A database connection"
          ],
          answer: 0
        }
      ]
    }
  ],

  cpp: [
    {
      title: "Lesson 1: C++ Basics",
      description: "مقدمة في C++ والمتغيرات والطباعة.",
      blocks: [
        {
          type: "heading",
          content: "What is C++? — ما هي C++؟"
        },
        {
          type: "text",
          content: "C++ is a general-purpose programming language used in many areas, including systems and game development. لغة C++ بتستخدم في مجالات مختلفة زي برمجة الأنظمة والألعاب والتطبيقات عالية الأداء."
        },
        {
          type: "heading",
          content: "Your First C++ Program — أول برنامج"
        },
        {
          type: "code",
          content: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}"
        },
        {
          type: "output",
          content: "Hello, C++!"
        },
        {
          type: "list",
          items: [
            "#include <iostream> — إتاحة أدوات الإدخال والإخراج.",
            "using namespace std — استخدام أسماء المكتبة القياسية مباشرة.",
            "int main() — نقطة بداية البرنامج.",
            "cout — طباعة البيانات.",
            "endl — الانتقال لسطر جديد.",
            "return 0 — إنهاء البرنامج بنجاح."
          ]
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    double grade = 95.5;\n    string name = \"Malak\";\n    bool passed = true;\n\n    cout << name << endl;\n    cout << age << endl;\n    return 0;\n}"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "quiz",
          content: "Which statement is commonly used to print output in C++?",
          options: ["cout", "echo", "System.out"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Loops",
      description: "الشروط والحلقات التكرارية في C++.",
      blocks: [
        {
          type: "heading",
          content: "If and Else — الشروط"
        },
        {
          type: "code",
          content: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 75;\n\n    if (score >= 50) {\n        cout << \"Passed\" << endl;\n    } else {\n        cout << \"Failed\" << endl;\n    }\n\n    return 0;\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "if checks whether a condition is true. لو الشرط اتحقق بيتنفذ كود if، وإلا بيتنفذ كود else."
        },
        {
          type: "heading",
          content: "For Loop — حلقة for"
        },
        {
          type: "code",
          content: "for (int i = 1; i <= 5; i++) {\n    cout << i << endl;\n}"
        },
        {
          type: "output",
          content: "1\n2\n3\n4\n5"
        },
        {
          type: "list",
          items: [
            "int i = 1 — إنشاء العداد وبدءه من 1.",
            "i <= 5 — شرط استمرار الحلقة.",
            "i++ — زيادة العداد بمقدار واحد.",
            "cout — طباعة قيمة العداد في كل دورة."
          ]
        },
        {
          type: "quiz",
          content: "Which part increases i in this loop?",
          options: ["i <= 5", "i++", "int"],
          answer: 1
        }
      ]
    }
  ],

  go: [
    {
      title: "Lesson 1: Go Basics",
      description: "مقدمة في Go والمتغيرات والطباعة.",
      blocks: [
        {
          type: "heading",
          content: "What is Go? — ما هي Go؟"
        },
        {
          type: "text",
          content: "Go, also called Golang, is a programming language developed at Google. تُستخدم Go في بناء خدمات الويب والـ APIs وأدوات الأنظمة، وبتتميز ببساطة صياغتها ودعمها للـ concurrency."
        },
        {
          type: "heading",
          content: "Your First Go Program — أول برنامج"
        },
        {
          type: "code",
          content: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}"
        },
        {
          type: "output",
          content: "Hello, Go!"
        },
        {
          type: "list",
          items: [
            "package main — تحديد الحزمة التنفيذية.",
            "import \"fmt\" — استيراد أدوات التنسيق والطباعة.",
            "func main() — نقطة بداية التنفيذ.",
            "fmt.Println() — طباعة النص مع الانتقال لسطر جديد."
          ]
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    name := \"Malak\"\n    age := 20\n\n    fmt.Println(name)\n    fmt.Println(age)\n}"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "text",
          content: "The := operator declares a variable and lets Go infer its type. العامل := بيعرّف المتغير وبيخلي Go تستنتج نوعه من القيمة."
        },
        {
          type: "quiz",
          content: "Which function prints a line in Go?",
          options: ["fmt.Println()", "cout", "echo"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Functions",
      description: "الشروط والدوال في Go.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    score := 80\n\n    if score >= 50 {\n        fmt.Println(\"Passed\")\n    } else {\n        fmt.Println(\"Failed\")\n    }\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "Go uses if and else for conditional execution. ملاحظة: Go لا تحتاج أقواسًا حول الشرط نفسه، لكن الأقواس المعقوفة للكتل البرمجية مطلوبة."
        },
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "package main\n\nimport \"fmt\"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc main() {\n    fmt.Println(add(4, 6))\n}"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "list",
          items: [
            "func — تعريف دالة.",
            "add — اسم الدالة.",
            "a int وb int — معاملان من النوع int.",
            "int بعد الأقواس — نوع القيمة التي ترجعها الدالة.",
            "return a + b — إرجاع ناتج الجمع."
          ]
        },
        {
          type: "quiz",
          content: "Which keyword defines a function in Go?",
          options: ["function", "func", "def"],
          answer: 1
        }
      ]
    }
  ]

});

/* =====================================
   Part 6: Kotlin, Swift and Rust Lessons
===================================== */

Object.assign(lessonLibrary, {

  kotlin: [
    {
      title: "Lesson 1: Kotlin Basics",
      description: "مقدمة في Kotlin والمتغيرات.",
      blocks: [
        {
          type: "heading",
          content: "What is Kotlin? — ما هي Kotlin؟"
        },
        {
          type: "text",
          content: "Kotlin is a modern programming language commonly used for Android development. لغة Kotlin من اللغات المستخدمة في تطوير تطبيقات Android، وبتدعم البرمجة الكائنية والوظيفية."
        },
        {
          type: "heading",
          content: "Your First Kotlin Program — أول برنامج"
        },
        {
          type: "code",
          content: "fun main() {\n    println(\"Hello, Kotlin!\")\n}"
        },
        {
          type: "output",
          content: "Hello, Kotlin!"
        },
        {
          type: "list",
          items: [
            "fun — الكلمة المستخدمة لتعريف الدوال.",
            "main() — نقطة بداية البرنامج.",
            "println() — طباعة قيمة والانتقال لسطر جديد.",
            "الأقواس { } بتحدد جسم الدالة."
          ]
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "fun main() {\n    val name = \"Malak\"\n    var age = 20\n\n    age = 21\n\n    println(name)\n    println(age)\n}"
        },
        {
          type: "output",
          content: "Malak\n21"
        },
        {
          type: "text",
          content: "val declares a read-only reference, while var allows reassignment. بنستخدم val للقيم اللي مش محتاجين نعيد إسنادها، وvar للمتغيرات اللي ممكن تتغير قيمتها."
        },
        {
          type: "quiz",
          content: "Which keyword allows reassignment in Kotlin?",
          options: ["val", "var", "fun"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Functions",
      description: "الشروط والدوال في Kotlin.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "fun main() {\n    val score = 85\n\n    if (score >= 50) {\n        println(\"Passed\")\n    } else {\n        println(\"Failed\")\n    }\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "The if expression checks a condition. لو الشرط اتحقق بيتنفذ الجزء الخاص بـ if، وإلا بيتنفذ else."
        },
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "fun add(a: Int, b: Int): Int {\n    return a + b\n}\n\nfun main() {\n    println(add(3, 7))\n}"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "list",
          items: [
            "fun add — تعريف دالة اسمها add.",
            "a: Int وb: Int — معاملان من النوع Int.",
            ": Int — نوع القيمة المرجعة.",
            "return — إرجاع النتيجة.",
            "add(3, 7) — استدعاء الدالة بالقيمتين."
          ]
        },
        {
          type: "quiz",
          content: "What does the return keyword do?",
          options: [
            "Returns a value",
            "Declares a class",
            "Starts a loop"
          ],
          answer: 0
        }
      ]
    }
  ],

  swift: [
    {
      title: "Lesson 1: Swift Basics",
      description: "مقدمة في Swift والمتغيرات.",
      blocks: [
        {
          type: "heading",
          content: "What is Swift? — ما هي Swift؟"
        },
        {
          type: "text",
          content: "Swift is a programming language developed by Apple and used to build apps for its platforms. لغة Swift بتستخدم في تطوير تطبيقات iOS وmacOS وغيرها من منصات Apple."
        },
        {
          type: "heading",
          content: "Your First Swift Program — أول برنامج"
        },
        {
          type: "code",
          content: "import Foundation\n\nprint(\"Hello, Swift!\")"
        },
        {
          type: "output",
          content: "Hello, Swift!"
        },
        {
          type: "text",
          content: "The print() function displays output. في Swift نقدر نطبع النصوص والأرقام باستخدام print()."
        },
        {
          type: "heading",
          content: "Constants and Variables — الثوابت والمتغيرات"
        },
        {
          type: "code",
          content: "let name = \"Malak\"\nvar age = 20\n\nage = 21\n\nprint(name)\nprint(age)"
        },
        {
          type: "output",
          content: "Malak\n21"
        },
        {
          type: "list",
          items: [
            "let — تعريف قيمة ثابتة لا نعيد إسناد قيمة أخرى إليها.",
            "var — تعريف متغير قابل لإعادة الإسناد.",
            "Swift can infer types from assigned values.",
            "تحديد النوع صراحةً ممكن، لكن Swift غالبًا تستنتجه من القيمة."
          ]
        },
        {
          type: "quiz",
          content: "Which keyword declares a mutable variable in Swift?",
          options: ["let", "var", "func"],
          answer: 1
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Functions",
      description: "الشروط والدوال في Swift.",
      blocks: [
        {
          type: "heading",
          content: "If and Else — الشروط"
        },
        {
          type: "code",
          content: "let score = 75\n\nif score >= 50 {\n    print(\"Passed\")\n} else {\n    print(\"Failed\")\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "if executes code when its condition is true. بنستخدم if وelse لتنفيذ كود مختلف حسب نتيجة الشرط."
        },
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "func add(a: Int, b: Int) -> Int {\n    return a + b\n}\n\nprint(add(a: 4, b: 6))"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "list",
          items: [
            "func — تعريف دالة.",
            "a: Int وb: Int — معاملان من النوع Int.",
            "-> Int — تحديد نوع القيمة المرجعة.",
            "return — إرجاع النتيجة.",
            "استدعاء الدالة هنا بيستخدم أسماء المعاملات a وb."
          ]
        },
        {
          type: "quiz",
          content: "Which symbol indicates a function return type in Swift?",
          options: ["->", "=>", "::"],
          answer: 0
        }
      ]
    }
  ],

  rust: [
    {
      title: "Lesson 1: Rust Basics",
      description: "مقدمة في Rust والمتغيرات.",
      blocks: [
        {
          type: "heading",
          content: "What is Rust? — ما هي Rust؟"
        },
        {
          type: "text",
          content: "Rust is a systems programming language focused on performance and memory safety. لغة Rust بتستهدف الأداء العالي وأمان الذاكرة، وبتستخدم في أدوات الأنظمة وبعض تطبيقات البرمجيات."
        },
        {
          type: "heading",
          content: "Your First Rust Program — أول برنامج"
        },
        {
          type: "code",
          content: "fn main() {\n    println!(\"Hello, Rust!\");\n}"
        },
        {
          type: "output",
          content: "Hello, Rust!"
        },
        {
          type: "list",
          items: [
            "fn — تعريف دالة.",
            "main() — نقطة بداية البرنامج.",
            "println! — ماكرو لطباعة النص مع سطر جديد.",
            "علامة ! في println! جزء من صياغة استدعاء الماكرو."
          ]
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "fn main() {\n    let name = \"Malak\";\n    let age = 20;\n\n    println!(\"{}\", name);\n    println!(\"{}\", age);\n}"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "text",
          content: "Variables declared with let are immutable by default. المتغيرات في Rust غير قابلة للتعديل افتراضيًا؛ لو محتاجين نغير القيمة بنستخدم mut."
        },
        {
          type: "code",
          content: "fn main() {\n    let mut score = 70;\n    score = 90;\n    println!(\"{}\", score);\n}"
        },
        {
          type: "output",
          content: "90"
        },
        {
          type: "quiz",
          content: "Which keyword allows a Rust variable to be changed?",
          options: ["mut", "var", "change"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: Conditions and Functions",
      description: "الشروط والدوال في Rust.",
      blocks: [
        {
          type: "heading",
          content: "Conditions — الشروط"
        },
        {
          type: "code",
          content: "fn main() {\n    let score = 80;\n\n    if score >= 50 {\n        println!(\"Passed\");\n    } else {\n        println!(\"Failed\");\n    }\n}"
        },
        {
          type: "output",
          content: "Passed"
        },
        {
          type: "text",
          content: "Rust uses if and else to choose which block to execute. البرنامج بيختار الجزء المناسب بناءً على نتيجة الشرط."
        },
        {
          type: "heading",
          content: "Functions — الدوال"
        },
        {
          type: "code",
          content: "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!(\"{}\", add(4, 6));\n}"
        },
        {
          type: "output",
          content: "10"
        },
        {
          type: "list",
          items: [
            "fn add — تعريف دالة اسمها add.",
            "i32 — نوع عدد صحيح حجمه 32 بت.",
            "-> i32 — نوع القيمة المرجعة.",
            "a + b في نهاية الدالة تعبير بيرجع الناتج بدون كتابة return.",
            "add(4, 6) — استدعاء الدالة."
          ]
        },
        {
          type: "quiz",
          content: "What does i32 represent in Rust?",
          options: ["A 32-bit integer", "A text string", "A Boolean value"],
          answer: 0
        }
      ]
    }
  ]

});

/* =====================================
   Part 7: React and .NET Lessons
===================================== */

Object.assign(lessonLibrary, {

  react: [
    {
      title: "Lesson 1: React Basics",
      description: "مقدمة في React والـ Components.",
      blocks: [
        {
          type: "heading",
          content: "What is React? — ما هي React؟"
        },
        {
          type: "text",
          content: "React is a JavaScript library for building user interfaces. مكتبة React بتساعدنا نبني واجهات مواقع من أجزاء صغيرة قابلة لإعادة الاستخدام اسمها Components."
        },
        {
          type: "heading",
          content: "Your First Component — أول مكون"
        },
        {
          type: "code",
          content: "function Welcome() {\n    return <h1>Hello, React!</h1>;\n}\n\nexport default Welcome;"
        },
        {
          type: "text",
          content: "A React component is commonly a JavaScript function that returns JSX. الـ JSX صياغة بتخلينا نكتب عناصر شبيهة بـ HTML داخل كود JavaScript."
        },
        {
          type: "list",
          items: [
            "function Welcome() — تعريف Component اسمها Welcome.",
            "return — إرجاع الواجهة اللي هتظهر.",
            "<h1> — عنصر عنوان داخل JSX.",
            "export default — تصدير المكون لاستخدامه في ملف آخر."
          ]
        },
        {
          type: "heading",
          content: "Using Props — تمرير البيانات"
        },
        {
          type: "code",
          content: "function Welcome(props) {\n    return <h1>Hello, {props.name}!</h1>;\n}\n\n// Example usage:\n<Welcome name=\"Malak\" />"
        },
        {
          type: "text",
          content: "Props pass data from a parent component to a child component. الـ Props بتسمح لنا نمرر بيانات للمكون بدل ما نكتب نفس المحتوى يدويًا كل مرة."
        },
        {
          type: "quiz",
          content: "What are React components used for?",
          options: [
            "Building reusable UI parts",
            "Creating database tables directly",
            "Replacing HTML entirely"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: State and Events",
      description: "إدارة الحالة والتعامل مع الأحداث.",
      blocks: [
        {
          type: "heading",
          content: "State — الحالة"
        },
        {
          type: "text",
          content: "State stores data that can change while a component is running. الـ State بتخزن بيانات ممكن تتغير أثناء استخدام الصفحة، وتغييرها بالطريقة الصحيحة بيخلي React تحدّث الواجهة."
        },
        {
          type: "code",
          content: "import { useState } from \"react\";\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n\n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(count + 1)}>\n                Increase\n            </button>\n        </div>\n    );\n}\n\nexport default Counter;"
        },
        {
          type: "list",
          items: [
            "useState(0) — إنشاء حالة تبدأ من صفر.",
            "count — القيمة الحالية.",
            "setCount — الدالة المستخدمة لتحديث القيمة.",
            "onClick — تنفيذ كود عند الضغط على الزر.",
            "عند تحديث الحالة، React تعيد عرض الجزء المتأثر بالتغيير."
          ]
        },
        {
          type: "heading",
          content: "Rendering Lists — عرض القوائم"
        },
        {
          type: "code",
          content: "const languages = [\"C#\", \"Python\", \"JavaScript\"];\n\nfunction LanguageList() {\n    return (\n        <ul>\n            {languages.map((language) => (\n                <li key={language}>{language}</li>\n            ))}\n        </ul>\n    );\n}"
        },
        {
          type: "text",
          content: "map() creates an element for each item. بنستخدم map لعرض عناصر المصفوفة، وkey بتساعد React تميز كل عنصر في القائمة."
        },
        {
          type: "quiz",
          content: "Which React Hook manages local component state?",
          options: ["useState", "useHTML", "useDatabase"],
          answer: 0
        }
      ]
    }
  ],

  dotnet: [
    {
      title: "Lesson 1: Introduction to .NET",
      description: "فهم .NET وC# وتشغيل أول برنامج.",
      blocks: [
        {
          type: "heading",
          content: "What is .NET? — ما هي .NET؟"
        },
        {
          type: "text",
          content: ".NET is a development platform used to build web apps, APIs, desktop apps, and more. منصة .NET بتوفر أدوات ومكتبات لتطوير أنواع مختلفة من التطبيقات، وغالبًا بنستخدم C# للبرمجة عليها."
        },
        {
          type: "heading",
          content: "C# Console Program — أول برنامج"
        },
        {
          type: "code",
          content: "Console.WriteLine(\"Hello, .NET!\");"
        },
        {
          type: "output",
          content: "Hello, .NET!"
        },
        {
          type: "text",
          content: "Console.WriteLine prints a line to the console. السطر ده بيطبع رسالة في نافذة تشغيل البرنامج. في مشاريع C# الحديثة ممكن تكتبي السطر مباشرة داخل Program.cs."
        },
        {
          type: "heading",
          content: "Variables — المتغيرات"
        },
        {
          type: "code",
          content: "string name = \"Malak\";\nint age = 20;\ndouble grade = 95.5;\nbool isStudent = true;\n\nConsole.WriteLine(name);\nConsole.WriteLine(age);"
        },
        {
          type: "output",
          content: "Malak\n20"
        },
        {
          type: "list",
          items: [
            "string — لتخزين النصوص.",
            "int — لتخزين الأعداد الصحيحة.",
            "double — لتخزين الأعداد العشرية.",
            "bool — لتخزين true أو false.",
            "Console.WriteLine() — لطباعة قيمة في سطر جديد."
          ]
        },
        {
          type: "quiz",
          content: "Which .NET language is used in these examples?",
          options: ["C#", "HTML", "SQL"],
          answer: 0
        }
      ]
    },
    {
      title: "Lesson 2: Building a Web API",
      description: "مقدمة في ASP.NET Core Web API.",
      blocks: [
        {
          type: "heading",
          content: "What is an API? — ما هي واجهة البرمجة؟"
        },
        {
          type: "text",
          content: "An API allows software systems to communicate. الـ API بتسمح للـ Frontend يتواصل مع الـ Backend، مثلًا عشان يطلب قائمة منتجات أو يسجل مستخدمًا."
        },
        {
          type: "heading",
          content: "Minimal API Example — مثال مبسط"
        },
        {
          type: "code",
          content: "var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet(\"/\", () => \"Welcome to my API!\");\n\napp.MapGet(\"/api/courses\", () => new[] {\n    new { Id = 1, Name = \"C#\" },\n    new { Id = 2, Name = \"Python\" }\n});\n\napp.Run();"
        },
        {
          type: "text",
          content: "MapGet defines an HTTP GET endpoint. المثال الأول بيرجع رسالة، والثاني بيرجع بيانات عن كورسين. عند تشغيل التطبيق، العناوين دي بتكون متاحة من خلال عنوان السيرفر مع المسار المناسب."
        },
        {
          type: "list",
          items: [
            "WebApplication.CreateBuilder — تجهيز التطبيق وخدماته.",
            "builder.Build() — إنشاء التطبيق.",
            "MapGet — تعريف Endpoint يستقبل طلب GET.",
            "/api/courses — مسار يرجع بيانات الكورسات.",
            "app.Run() — تشغيل التطبيق واستقبال الطلبات."
          ]
        },
        {
          type: "heading",
          content: "Frontend and Backend — الفرونت والباك"
        },
        {
          type: "text",
          content: "Frontend handles the user interface, while Backend handles application logic and data access. الفرونت مسؤول عن الواجهة والتفاعل، والباك مسؤول عن منطق التطبيق والتعامل مع البيانات. المثال هنا تعليمي ومش بيحفظ بيانات في قاعدة بيانات."
        },
        {
          type: "quiz",
          content: "Which HTTP method is commonly used to retrieve data?",
          options: ["GET", "DELETE", "PATCH"],
          answer: 0
        }
      ]
    }
  ]

});

/* =====================================
   Part 8: Connect Courses and Render Cards
===================================== */

// Connect each course to its lessons
courses.forEach(function (course) {
  course.lessons = lessonLibrary[course.id] || [];
});

// Get category name
function getCategoryName(category) {
  const categories = {
    programming: "Programming",
    web: "Web Development",
    database: "Database",
    mobile: "Mobile Development"
  };

  return categories[category] || "Programming";
}

// Update website statistics
function updateCourseStats() {
  if (languageCount) {
    languageCount.textContent = courses.length;
  }

  if (lessonCount) {
    lessonCount.textContent = getAllLessonsCount();
  }
}

// Render course cards
function renderCourseCards() {
  if (!languageGrid) return;

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const filteredCourses = courses.filter(function (course) {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.innerHTML = "";

  if (filteredCourses.length === 0) {
    if (emptyState) {
      emptyState.style.display = "block";
    }
    return;
  }

  if (emptyState) {
    emptyState.style.display = "none";
  }

  filteredCourses.forEach(function (course) {
    const card = document.createElement("article");

    card.className = "language-card";
    card.dataset.courseId = course.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      "Open " + course.name + " lessons"
    );

    card.innerHTML = `
      <div class="card-top">
        <div
          class="language-logo"
          style="--logo-color: ${escapeHTML(course.color)}"
        >
          ${escapeHTML(course.logo)}
        </div>

        <span class="card-category">
          ${escapeHTML(getCategoryName(course.category))}
        </span>
      </div>

      <h3>${escapeHTML(course.name)}</h3>

      <p>${escapeHTML(course.description)}</p>

      <div class="card-meta">
        <span>${course.lessons.length} Lessons</span>
        <span>${escapeHTML(course.level)}</span>
      </div>

      <button
        class="card-button"
        type="button"
        data-open-course="${escapeHTML(course.id)}"
      >
        Explore Lessons →
      </button>
    `;

    languageGrid.appendChild(card);
  });
}

// Initial course statistics and cards
updateCourseStats();
renderCourseCards();

/* =====================================
   Part 9: Lesson Viewer and Navigation
===================================== */

// Create lesson navigation buttons
function renderLessonNavigation() {
  if (!lessonNavigation) return;

  const course = getActiveCourse();

  if (!course) {
    lessonNavigation.innerHTML = "";
    return;
  }

  lessonNavigation.innerHTML = "";

  course.lessons.forEach(function (lesson, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "lesson-nav-button";

    if (index === activeLessonIndex) {
      button.classList.add("active");
    }

    button.textContent =
      (index + 1) + ". " + lesson.title;

    button.addEventListener("click", function () {
      goToLesson(index);
    });

    lessonNavigation.appendChild(button);
  });
}

// Render one lesson content block
function renderBlock(block, index) {
  if (!block) return "";

  if (block.type === "heading") {
    return `
      <h3 class="lesson-heading">
        ${escapeHTML(block.content)}
      </h3>
    `;
  }

  if (block.type === "text") {
    return `
      <p class="lesson-text">
        ${escapeHTML(block.content)}
      </p>
    `;
  }

  if (block.type === "code") {
    return `
      <div class="lesson-code">
        <div class="lesson-code-title">
          Code Example
          <button
            type="button"
            class="copy-code-button"
            data-copy-block="${index}"
          >
            Copy Code
          </button>
        </div>
        <pre><code>${escapeHTML(block.content)}</code></pre>
      </div>
    `;
  }

  if (block.type === "output") {
    return `
      <div class="lesson-output">
        <strong>Expected Output — الناتج المتوقع</strong>
        <pre>${escapeHTML(block.content)}</pre>
      </div>
    `;
  }

  if (block.type === "list") {
    const items = (block.items || [])
      .map(function (item) {
        return `<li>${escapeHTML(item)}</li>`;
      })
      .join("");

    return `<ul class="lesson-list">${items}</ul>`;
  }

  if (block.type === "quiz") {
    const options = (block.options || [])
      .map(function (option, optionIndex) {
        return `
          <button
            type="button"
            class="quiz-option"
            data-quiz-block="${index}"
            data-option-index="${optionIndex}"
          >
            ${escapeHTML(option)}
          </button>
        `;
      })
      .join("");

    return `
      <div class="lesson-quiz">
        <h3>Quick Quiz — اختبري فهمك</h3>
        <p>${escapeHTML(block.content)}</p>
        <div class="quiz-options">${options}</div>
        <p class="quiz-feedback" aria-live="polite"></p>
      </div>
    `;
  }

  return "";
}

// Render the selected lesson
function renderCurrentLesson() {
  const course = getActiveCourse();

  if (!course || !course.lessons.length) {
    if (lessonContent) {
      lessonContent.innerHTML =
        "<p>No lessons are available yet.</p>";
    }
    return;
  }

  const lesson = course.lessons[activeLessonIndex];

  if (!lesson) return;

  if (lessonLanguage) {
    lessonLanguage.textContent = course.name;
  }

  if (lessonTitle) {
    lessonTitle.textContent = lesson.title;
  }

  if (lessonDescription) {
    lessonDescription.textContent = lesson.description;
  }

  if (lessonContent) {
    lessonContent.innerHTML = (lesson.blocks || [])
      .map(function (block, index) {
        return renderBlock(block, index);
      })
      .join("");
  }

  if (previousLessonButton) {
    previousLessonButton.disabled = activeLessonIndex === 0;
  }

  if (nextLessonButton) {
    nextLessonButton.disabled =
      activeLessonIndex === course.lessons.length - 1;
  }

  renderLessonNavigation();
}

// Open a course
function openCourse(courseId) {
  const course = getCourse(courseId);

  if (!course) return;

  if (!course.lessons || course.lessons.length === 0) {
    showToast("No lessons available for this course yet.");
    return;
  }

  activeCourseId = courseId;
  activeLessonIndex = 0;

  renderCurrentLesson();

  if (lessonModal) {
    lessonModal.classList.add("open");
    lessonModal.setAttribute("aria-hidden", "false");
  }

  document.body.style.overflow = "hidden";
}

// Close the lesson window
function closeLessonModal() {
  if (lessonModal) {
    lessonModal.classList.remove("open");
    lessonModal.setAttribute("aria-hidden", "true");
  }

  document.body.style.overflow = "";
}

// Move to another lesson
function goToLesson(index) {
  const course = getActiveCourse();

  if (!course) return;

  if (index < 0 || index >= course.lessons.length) {
    return;
  }

  activeLessonIndex = index;
  renderCurrentLesson();
}

// Previous lesson button
if (previousLessonButton) {
  previousLessonButton.addEventListener("click", function () {
    goToLesson(activeLessonIndex - 1);
  });
}

// Next lesson button
if (nextLessonButton) {
  nextLessonButton.addEventListener("click", function () {
    goToLesson(activeLessonIndex + 1);
  });
}

// Close button
if (closeLessonButton) {
  closeLessonButton.addEventListener(
    "click",
    closeLessonModal
  );
}

// Close modal when clicking outside its content
if (lessonModal) {
  lessonModal.addEventListener("click", function (event) {
    if (event.target === lessonModal) {
      closeLessonModal();
    }
  });
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLessonModal();
  }
});

// Open a course when clicking its card or button
if (languageGrid) {
  languageGrid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-open-course]");

    if (button) {
      event.stopPropagation();
      openCourse(button.dataset.openCourse);
      return;
    }

    const card = event.target.closest("[data-course-id]");

    if (card) {
      openCourse(card.dataset.courseId);
    }
  });

  languageGrid.addEventListener("keydown", function (event) {
    const card = event.target.closest("[data-course-id]");

    if (
      card &&
      event.target === card &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      openCourse(card.dataset.courseId);
    }
  });
}

// Search courses as the user types
if (searchInput) {
  searchInput.addEventListener("input", renderCourseCards);
}

// Filter courses by category
if (categoryFilter) {
  categoryFilter.addEventListener(
    "change",
    renderCourseCards
  );
}

/* =====================================
   Part 10: Quizzes and Progress Tracking
===================================== */

// Store completed lessons in the browser
const PROGRESS_STORAGE_KEY = "csMateCompletedLessons";

function getCompletedLessons() {
  try {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveCompletedLessons(completed) {
  try {
    localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify(completed)
    );
  } catch (error) {
    showToast("Progress could not be saved on this device.");
  }
}

function getLessonKey(courseId, lessonIndex) {
  return courseId + "-" + lessonIndex;
}

function isLessonCompleted(courseId, lessonIndex) {
  return getCompletedLessons().includes(
    getLessonKey(courseId, lessonIndex)
  );
}

// Mark the current lesson as completed
function completeCurrentLesson() {
  const course = getActiveCourse();

  if (!course) return;

  const completed = getCompletedLessons();
  const key = getLessonKey(
    activeCourseId,
    activeLessonIndex
  );

  if (!completed.includes(key)) {
    completed.push(key);
    saveCompletedLessons(completed);
  }

  showToast("Lesson completed! أحسنتِ، خلصتي الدرس بنجاح.");

  updateCompletionButton();
}

// Update completion button text
function updateCompletionButton() {
  if (!completeLessonButton) return;

  const completed = isLessonCompleted(
    activeCourseId,
    activeLessonIndex
  );

  completeLessonButton.textContent = completed
    ? "✓ Completed — تم إكمال الدرس"
    : "Mark as Complete — علّمي الدرس كمكتمل";

  completeLessonButton.classList.toggle(
    "completed",
    completed
  );
}

// Connect the completion button
if (completeLessonButton) {
  completeLessonButton.addEventListener(
    "click",
    completeCurrentLesson
  );
}

// Copy code examples
if (lessonContent) {
  lessonContent.addEventListener("click", async function (event) {
    const copyButton = event.target.closest(
      ".copy-code-button"
    );

    if (copyButton) {
      const codeBox = copyButton.closest(".lesson-code");
      const codeElement = codeBox
        ? codeBox.querySelector("code")
        : null;

      if (!codeElement) return;

      try {
        await navigator.clipboard.writeText(
          codeElement.textContent
        );

        showToast("Code copied! تم نسخ الكود.");
      } catch (error) {
        showToast(
          "Copy is unavailable here. حددي الكود وانسخيه يدويًا."
        );
      }

      return;
    }

    // Check a quiz answer
    const optionButton = event.target.closest(".quiz-option");

    if (!optionButton) return;

    const course = getActiveCourse();

    if (!course) return;

    const lesson = course.lessons[activeLessonIndex];

    if (!lesson) return;

    const blockIndex = Number(
      optionButton.dataset.quizBlock
    );

    const optionIndex = Number(
      optionButton.dataset.optionIndex
    );

    const quizBlock = lesson.blocks[blockIndex];

    if (!quizBlock || quizBlock.type !== "quiz") return;

    const quizContainer = optionButton.closest(".lesson-quiz");

    if (!quizContainer) return;

    const feedback = quizContainer.querySelector(
      ".quiz-feedback"
    );

    const allOptions = quizContainer.querySelectorAll(
      ".quiz-option"
    );

    // Prevent changing an answer after checking it
    if (quizContainer.dataset.answered === "true") {
      return;
    }

    quizContainer.dataset.answered = "true";

    allOptions.forEach(function (button) {
      button.disabled = true;
    });

    if (optionIndex === quizBlock.answer) {
      optionButton.classList.add("correct");

      if (feedback) {
        feedback.textContent =
          "Correct! إجابة صحيحة، ممتازة!";
        feedback.classList.add("correct");
      }
    } else {
      optionButton.classList.add("incorrect");

      if (feedback) {
        feedback.textContent =
          "Not quite. إجابة غير صحيحة، راجعي الشرح وحاولي في المرة القادمة.";
        feedback.classList.add("incorrect");
      }

      allOptions.forEach(function (button) {
        if (
          Number(button.dataset.optionIndex) ===
          quizBlock.answer
        ) {
          button.classList.add("correct");
        }
      });
    }
  });
}

// Refresh completion button whenever a lesson opens
const originalRenderCurrentLesson = renderCurrentLesson;

renderCurrentLesson = function () {
  originalRenderCurrentLesson();
  updateCompletionButton();
};

// Refresh course cards with completed lesson counts
function renderCourseCardsWithProgress() {
  renderCourseCards();

  if (!languageGrid) return;

  courses.forEach(function (course) {
    const card = languageGrid.querySelector(
      '[data-course-id="' + course.id + '"]'
    );

    if (!card) return;

    const completedCount = course.lessons.filter(
      function (lesson, index) {
        return isLessonCompleted(course.id, index);
      }
    ).length;

    const progress = document.createElement("p");

    progress.className = "course-progress";
    progress.textContent =
      "Progress — التقدم: " +
      completedCount +
      "/" +
      course.lessons.length;

    const meta = card.querySelector(".card-meta");

    if (meta) {
      meta.insertAdjacentElement("afterend", progress);
    }
  });
}

// Initial progress display
renderCourseCardsWithProgress();

/* =====================================
   Part 11: Language and Theme Settings
===================================== */

// Save the selected interface language
function saveInterfaceLanguage(language) {
  try {
    localStorage.setItem("csMateLanguage", language);
  } catch (error) {
    // The website can still work without storage.
  }
}

// Load saved language preference
function loadInterfaceLanguage() {
  try {
    const saved = localStorage.getItem("csMateLanguage");

    if (saved === "ar" || saved === "en") {
      currentInterfaceLanguage = saved;
    }
  } catch (error) {
    currentInterfaceLanguage = "ar";
  }
}

// Update basic interface text
function updateInterfaceLanguage() {
  const isArabic = currentInterfaceLanguage === "ar";

  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  const translations = {
    "#searchInput": {
      ar: "ابحثي عن لغة برمجة...",
      en: "Search programming languages..."
    },
    "#themeToggle": {
      ar: "الوضع الليلي",
      en: "Dark Mode"
    }
  };

  Object.keys(translations).forEach(function (selector) {
    const element = document.querySelector(selector);

    if (!element) return;

    if (element.tagName === "INPUT") {
      element.placeholder = translations[selector][
        currentInterfaceLanguage
      ];
    } else {
      element.textContent = translations[selector][
        currentInterfaceLanguage
      ];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = isArabic
      ? "English"
      : "العربية";

    languageToggle.setAttribute(
      "aria-label",
      isArabic ? "Switch to English" : "التغيير إلى العربية"
    );
  }

  // Update category labels
  if (categoryFilter) {
    const categoryTranslations = {
      all: { ar: "كل الكورسات", en: "All Categories" },
      programming: { ar: "برمجة", en: "Programming" },
      web: { ar: "تطوير الويب", en: "Web Development" },
      database: { ar: "قواعد البيانات", en: "Database" },
      mobile: { ar: "تطوير الموبايل", en: "Mobile Development" }
    };

    Array.from(categoryFilter.options).forEach(function (option) {
      const translation = categoryTranslations[option.value];

      if (translation) {
        option.textContent = translation[currentInterfaceLanguage];
      }
    });
  }

  renderCourseCardsWithProgress();
}

// Toggle Arabic and English
if (languageToggle) {
  languageToggle.addEventListener("click", function () {
    currentInterfaceLanguage =
      currentInterfaceLanguage === "ar" ? "en" : "ar";

    saveInterfaceLanguage(currentInterfaceLanguage);
    updateInterfaceLanguage();
  });
}

// Save and load the selected theme
function saveTheme(theme) {
  try {
    localStorage.setItem("csMateTheme", theme);
  } catch (error) {
    // The website can still work without storage.
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark-theme", isDark);
  document.body.classList.toggle("dark-theme", isDark);

  if (themeToggle) {
    themeToggle.textContent =
      isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  saveTheme(theme);
}

// Load saved theme
function loadTheme() {
  let savedTheme = "light";

  try {
    savedTheme =
      localStorage.getItem("csMateTheme") || "light";
  } catch (error) {
    savedTheme = "light";
  }

  applyTheme(savedTheme);
}

// Toggle between light and dark themes
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isDark = document.documentElement.classList.contains(
      "dark-theme"
    );

    applyTheme(isDark ? "light" : "dark");
  });
}

// Initialize settings
loadInterfaceLanguage();
loadTheme();
updateInterfaceLanguage();

/* =====================================
   Part 12: Final Setup and Improvements
===================================== */

// Show the current year in the footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Refresh progress information after completing a lesson
if (completeLessonButton) {
  completeLessonButton.addEventListener("click", function () {
    renderCourseCardsWithProgress();
  });
}

// Keep the current lesson completion button updated
function refreshLessonCompletionState() {
  if (!activeCourseId) return;

  updateCompletionButton();
}

// Improve keyboard navigation inside the lesson modal
document.addEventListener("keydown", function (event) {
  if (!lessonModal || !lessonModal.classList.contains("open")) {
    return;
  }

  // Do not change lessons while typing in an input
  const tagName = event.target.tagName;

  if (
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT"
  ) {
    return;
  }

  if (event.altKey && event.key === "ArrowRight") {
    goToLesson(activeLessonIndex + 1);
  }

  if (event.altKey && event.key === "ArrowLeft") {
    goToLesson(activeLessonIndex - 1);
  }
});

// Make sure the website starts with the saved settings
function initializeCSMate() {
  loadInterfaceLanguage();
  loadTheme();

  updateInterfaceLanguage();
  updateCourseStats();
  renderCourseCardsWithProgress();

  refreshLessonCompletionState();
}

// Start the application
initializeCSMate();

console.log("CS MATE is ready!");
