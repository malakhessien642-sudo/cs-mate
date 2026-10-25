
"use strict";

/* =====================================
   CS MATE
   Complete JavaScript
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

let activeCourseId = null;
let activeLessonIndex = 0;
let currentInterfaceLanguage = "ar";
let toastTimer = null;

/* =====================================
   Course Catalog
===================================== */

const courses = [
  {
    id: "csharp",
    name: "C#",
    logo: "C#",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم البرمجة من الأساسيات إلى OOP و.NET.",
    color: "#a78bfa",
    lessons: []
  },
  {
    id: "python",
    name: "Python",
    logo: "Py",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم Python وهياكل البيانات والبرمجة المتقدمة.",
    color: "#facc15",
    lessons: []
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "JS",
    category: "web",
    level: "مبتدئ إلى متقدم",
    description: "أنشئ مواقع تفاعلية وتعلّم أساسيات JavaScript.",
    color: "#f7df1e",
    lessons: []
  },
  {
    id: "java",
    name: "Java",
    logo: "☕",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم الكلاسات والأوبجكتس ومبادئ OOP.",
    color: "#fb923c",
    lessons: []
  },
  {
    id: "cpp",
    name: "C++",
    logo: "C++",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم أساسيات C++ والخوارزميات.",
    color: "#60a5fa",
    lessons: []
  },
  {
    id: "html",
    name: "HTML",
    logo: "5",
    category: "web",
    level: "من الصفر",
    description: "ابنِ هيكل صفحات الويب بطريقة صحيحة.",
    color: "#fb923c",
    lessons: []
  },
  {
    id: "css",
    name: "CSS",
    logo: "3",
    category: "web",
    level: "من الصفر",
    description: "نسّق صفحات الويب وأنشئ تصاميم متجاوبة.",
    color: "#60a5fa",
    lessons: []
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "TS",
    category: "web",
    level: "متوسط",
    description: "اكتب JavaScript باستخدام نظام أنواع واضح.",
    color: "#3b82f6",
    lessons: []
  },
  {
    id: "php",
    name: "PHP",
    logo: "PHP",
    category: "web",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم البرمجة الخلفية وتطوير مواقع الويب.",
    color: "#a5b4fc",
    lessons: []
  },
  {
    id: "sql",
    name: "SQL",
    logo: "SQL",
    category: "database",
    level: "من الصفر",
    description: "تعلّم قواعد البيانات والاستعلامات والعلاقات.",
    color: "#38bdf8",
    lessons: []
  },
  {
    id: "dart",
    name: "Dart",
    logo: "Dart",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم لغة Dart المستخدمة مع Flutter.",
    color: "#22d3ee",
    lessons: []
  },
  {
    id: "go",
    name: "Go",
    logo: "Go",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم بناء الخدمات والبرامج باستخدام Go.",
    color: "#67e8f9",
    lessons: []
  },
  {
    id: "kotlin",
    name: "Kotlin",
    logo: "K",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "ابدأ بتعلّم Kotlin وتطوير تطبيقات Android.",
    color: "#c084fc",
    lessons: []
  },
  {
    id: "swift",
    name: "Swift",
    logo: "S",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم أساسيات تطوير تطبيقات Apple.",
    color: "#fb7185",
    lessons: []
  },
  {
    id: "rust",
    name: "Rust",
    logo: "R",
    category: "programming",
    level: "متوسط إلى متقدم",
    description: "تعرّف على الأنواع وإدارة الذاكرة بأمان.",
    color: "#fdba74",
    lessons: []
  },
  {
    id: "react",
    name: "React",
    logo: "⚛",
    category: "web",
    level: "متوسط",
    description: "أنشئ واجهات تفاعلية باستخدام المكوّنات.",
    color: "#67e8f9",
    lessons: []
  },
  {
    id: "dotnet",
    name: ".NET",
    logo: ".NET",
    category: "programming",
    level: "متوسط إلى متقدم",
    description: "تعلّم بناء تطبيقات الويب والخدمات باستخدام .NET.",
    color: "#a78bfa",
    lessons: []
  }
];

/* =====================================
   Shared Helpers
===================================== */

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
    (total, course) => total + course.lessons.length,
    0
  );
}

function showToast(message) {
  if (!toastElement) return;

  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2600);
}

/* =====================================
   Part 2: Lesson Library
===================================== */

const lessonLibrary = {
  csharp: [
    {
      title: "1. Introduction to C#",
      description: "التعرّف على C# وطريقة تشغيل أول برنامج.",
      blocks: [
        { type: "heading", text: "ما هي C#؟" },
        { type: "text", text: "C# لغة برمجة من Microsoft، تُستخدم في تطبيقات سطح المكتب والويب والألعاب والخدمات باستخدام تقنيات .NET." },
        { type: "heading", text: "أول برنامج" },
        { type: "code", text: 'Console.WriteLine("Hello, World!");' },
        { type: "output", text: "Hello, World!" },
        { type: "text", text: "Console.WriteLine تطبع النص ثم تنتقل إلى سطر جديد. النصوص توضع بين علامتي اقتباس." },
        { type: "quiz", question: "ما وظيفة Console.WriteLine؟", options: ["طباعة النص", "حذف ملف", "إنشاء قاعدة بيانات"], answer: 0 }
      ]
    },
    {
      title: "2. Variables and Data Types",
      description: "المتغيرات وأنواع البيانات الأساسية.",
      blocks: [
        { type: "heading", text: "ما هو المتغير؟" },
        { type: "text", text: "المتغير Variable مساحة مسماة نستخدمها للاحتفاظ بقيمة أثناء تشغيل البرنامج." },
        { type: "code", text: 'string name = "Malak";\nint age = 20;\ndouble price = 25.5;\nbool isActive = true;\n\nConsole.WriteLine(name);\nConsole.WriteLine(age);' },
        { type: "output", text: "Malak\n20" },
        { type: "list", items: ["int: الأعداد الصحيحة", "double: الأعداد العشرية", "string: النصوص", "char: حرف واحد", "bool: true أو false"] },
        { type: "quiz", question: "أي نوع يناسب قيمة true أو false؟", options: ["string", "bool", "double"], answer: 1 }
      ]
    },
    {
      title: "3. Operators",
      description: "العمليات الحسابية والمقارنات.",
      blocks: [
        { type: "heading", text: "Arithmetic Operators" },
        { type: "text", text: "تُستخدم العمليات الحسابية لإجراء الجمع والطرح والضرب والقسمة وباقي القسمة." },
        { type: "code", text: 'int a = 10;\nint b = 3;\n\nConsole.WriteLine(a + b);\nConsole.WriteLine(a / b);\nConsole.WriteLine(a % b);' },
        { type: "output", text: "13\n3\n1" },
        { type: "text", text: "لأن a وb من نوع int، فإن القسمة الصحيحة تحذف الجزء العشري. العامل % يعيد باقي القسمة." },
        { type: "quiz", question: "ما ناتج 10 % 3؟", options: ["3", "1", "0"], answer: 1 }
      ]
    },
    {
      title: "4. Conditions",
      description: "اتخاذ القرارات باستخدام if وelse.",
      blocks: [
        { type: "heading", text: "جملة if" },
        { type: "text", text: "تسمح if بتنفيذ كود عند تحقق شرط، ويمكن استخدام else للحالة الأخرى." },
        { type: "code", text: 'int score = 85;\n\nif (score >= 50)\n{\n    Console.WriteLine("Passed");\n}\nelse\n{\n    Console.WriteLine("Failed");\n}' },
        { type: "output", text: "Passed" },
        { type: "text", text: "العامل >= يعني أكبر من أو يساوي. الأقواس المعقوفة تحدد الكود التابع لكل فرع." },
        { type: "quiz", question: "ماذا تعني == في الشرط؟", options: ["إسناد قيمة", "مقارنة قيمتين", "ضرب رقمين"], answer: 1 }
      ]
    },
    {
      title: "5. Loops",
      description: "تكرار الأوامر باستخدام for وwhile.",
      blocks: [
        { type: "heading", text: "حلقة for" },
        { type: "text", text: "نستخدم الحلقات عندما نريد تكرار أمر أكثر من مرة." },
        { type: "code", text: 'for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(i);\n}' },
        { type: "output", text: "1\n2\n3\n4\n5" },
        { type: "list", items: ["for: مناسبة عندما تكون خطوات التكرار واضحة.", "while: تستمر طالما الشرط صحيح.", "break: تنهي الحلقة.", "continue: تتخطى بقية الدورة الحالية."] },
        { type: "quiz", question: "أي كلمة تنهي الحلقة فورًا؟", options: ["continue", "break", "return"], answer: 1 }
      ]
    },
    {
      title: "6. Methods",
      description: "إنشاء الدوال واستدعاؤها.",
      blocks: [
        { type: "heading", text: "ما هي الدالة؟" },
        { type: "text", text: "Method مجموعة أوامر لها اسم، ويمكن أن تستقبل Parameters وتعيد قيمة باستخدام return." },
        { type: "code", text: 'static int Add(int a, int b)\n{\n    return a + b;\n}\n\nConsole.WriteLine(Add(4, 6));' },
        { type: "output", text: "10" },
        { type: "text", text: "النوع int قبل اسم الدالة يعني أنها تعيد عددًا صحيحًا. أما void فتعني أنها لا تعيد قيمة." },
        { type: "quiz", question: "ما وظيفة return؟", options: ["إعادة قيمة من الدالة", "طباعة كل المتغيرات", "إنشاء حلقة"], answer: 0 }
      ]
    },
    {
      title: "7. Arrays",
      description: "تخزين عدة قيم من النوع نفسه.",
      blocks: [
        { type: "heading", text: "المصفوفات" },
        { type: "text", text: "Array تخزّن مجموعة عناصر، ويبدأ الفهرس Index عادةً من صفر." },
        { type: "code", text: 'int[] numbers = { 10, 20, 30 };\n\nConsole.WriteLine(numbers[0]);\nConsole.WriteLine(numbers.Length);' },
        { type: "output", text: "10\n3" },
        { type: "text", text: "numbers[0] هو العنصر الأول، وLength تعيد عدد عناصر المصفوفة." },
        { type: "quiz", question: "ما فهرس العنصر الثاني؟", options: ["0", "1", "2"], answer: 1 }
      ]
    },
    {
      title: "8. Object-Oriented Programming",
      description: "مقدمة في Classes وObjects.",
      blocks: [
        { type: "heading", text: "Class وObject" },
        { type: "text", text: "Class قالب يحدد البيانات والسلوك، أما Object فهو نسخة منشأة من هذا القالب." },
        { type: "code", text: 'class Student\n{\n    public string Name = "";\n\n    public void Introduce()\n    {\n        Console.WriteLine($"Hello {Name}");\n    }\n}\n\nStudent s = new Student();\ns.Name = "Ali";\ns.Introduce();' },
        { type: "output", text: "Hello Ali" },
        { type: "list", items: ["Encapsulation: تنظيم وحماية الوصول إلى البيانات.", "Inheritance: إعادة استخدام خصائص وسلوك صنف آخر.", "Polymorphism: سلوك متعدد وفق النوع أو التنفيذ.", "Abstraction: إظهار المهم وإخفاء تفاصيل التنفيذ."] },
        { type: "quiz", question: "ما الذي ينشئ نسخة من Class؟", options: ["new", "if", "using"], answer: 0 }
      ]
    }
  ],

  python: [
    {
      title: "1. Introduction and Print",
      description: "أول خطواتك في Python.",
      blocks: [
        { type: "heading", text: "ما هي Python؟" },
        { type: "text", text: "Python لغة عالية المستوى، تتميز بسهولة القراءة وتستخدم في الأتمتة وتحليل البيانات والويب والذكاء الاصطناعي." },
        { type: "code", text: 'print("Hello, World!")' },
        { type: "output", text: "Hello, World!" },
        { type: "quiz", question: "ما الأمر الشائع لطباعة النص؟", options: ["echo()", "print()", "writeLine()"], answer: 1 }
      ]
    },
    {
      title: "2. Variables and Types",
      description: "المتغيرات وأنواع البيانات.",
      blocks: [
        { type: "heading", text: "إنشاء متغير" },
        { type: "code", text: 'name = "Malak"\nage = 20\nheight = 1.65\nis_student = True\n\nprint(name, age)' },
        { type: "output", text: "Malak 20" },
        { type: "list", items: ["int: عدد صحيح", "float: عدد عشري", "str: نص", "bool: قيمة منطقية", "list: قائمة قابلة للتعديل"] },
        { type: "quiz", question: "ما نوع القيمة True؟", options: ["str", "bool", "float"], answer: 1 }
      ]
    },
    {
      title: "3. Conditions",
      description: "الشروط في Python.",
      blocks: [
        { type: "heading", text: "استخدام if" },
        { type: "code", text: 'score = 80\n\nif score >= 50:\n    print("Passed")\nelse:\n    print("Failed")' },
        { type: "output", text: "Passed" },
        { type: "text", text: "تعتمد Python على المسافات البادئة Indentation لتحديد الأوامر التابعة للشرط." },
        { type: "quiz", question: "ما أهمية Indentation؟", options: ["تحديد بنية الكود", "تسمية الملفات", "حذف المتغيرات"], answer: 0 }
      ]
    },
    {
      title: "4. Loops",
      description: "التكرار باستخدام for وwhile.",
      blocks: [
        { type: "code", text: 'for i in range(1, 4):\n    print(i)' },
        { type: "output", text: "1\n2\n3" },
        { type: "text", text: "range(1, 4) تنتج الأعداد 1 و2 و3، ولا تشمل الحد الأعلى 4." },
        { type: "quiz", question: "كم مرة تعمل هذه الحلقة؟", options: ["مرتين", "3 مرات", "4 مرات"], answer: 1 }
      ]
    },
    {
      title: "5. Functions",
      description: "كتابة الدوال وإعادة القيم.",
      blocks: [
        { type: "code", text: 'def add(a, b):\n    return a + b\n\nresult = add(3, 7)\nprint(result)' },
        { type: "output", text: "10" },
        { type: "text", text: "def تعرّف دالة، وreturn تعيد النتيجة إلى المكان الذي استدعى الدالة." },
        { type: "quiz", question: "ما الكلمة المستخدمة لتعريف دالة؟", options: ["func", "def", "method"], answer: 1 }
      ]
    },
    {
      title: "6. Lists and Dictionaries",
      description: "هياكل البيانات الأساسية.",
      blocks: [
        { type: "code", text: 'numbers = [10, 20, 30]\nstudent = {"name": "Ali", "grade": 90}\n\nprint(numbers[1])\nprint(student["name"])' },
        { type: "output", text: "20\nAli" },
        { type: "text", text: "List تحفظ عناصر مرتبة، وDictionary تربط المفاتيح Keys بالقيم Values." },
        { type: "quiz", question: "أي بنية تحفظ بيانات على شكل مفتاح وقيمة؟", options: ["Dictionary", "Integer", "Boolean"], answer: 0 }
      ]
    },
    {
      title: "7. Exceptions",
      description: "التعامل مع الأخطاء المتوقعة.",
      blocks: [
        { type: "code", text: 'try:\n    number = int("abc")\nexcept ValueError:\n    print("Invalid number")' },
        { type: "output", text: "Invalid number" },
        { type: "text", text: "try يشغّل الكود، وexcept يتعامل مع نوع الخطأ الذي حددناه." },
        { type: "quiz", question: "أي كلمة تُستخدم للتعامل مع الاستثناء؟", options: ["catch فقط", "except", "error"], answer: 1 }
      ]
    },
    {
      title: "8. Classes and Objects",
      description: "مقدمة في البرمجة الكائنية.",
      blocks: [
        { type: "code", text: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print("Hello", self.name)\n\nstudent = Student("Ali")\nstudent.introduce()' },
        { type: "output", text: "Hello Ali" },
        { type: "text", text: "__init__ تهيئ الكائن عند إنشائه، وself تشير إلى الكائن الحالي." },
        { type: "quiz", question: "ما وظيفة __init__؟", options: ["تهيئة الكائن", "إنهاء الحلقة", "استيراد مكتبة"], answer: 0 }
      ]
    }
  ],

  javascript: [
    {
      title: "1. Introduction",
      description: "مقدمة عن JavaScript.",
      blocks: [
        { type: "text", text: "JavaScript لغة برمجة تضيف التفاعل إلى صفحات الويب، وتعمل في المتصفح ويمكن استخدامها في الخادم أيضًا." },
        { type: "code", text: 'console.log("Hello, World!");' },
        { type: "output", text: "Hello, World!" },
        { type: "quiz", question: "أين يمكن تشغيل JavaScript؟", options: ["المتصفح فقط دائمًا", "المتصفح والخادم", "داخل HTML فقط دون تشغيل"], answer: 1 }
      ]
    },
    {
      title: "2. Variables",
      description: "استخدام let وconst.",
      blocks: [
        { type: "code", text: 'let age = 20;\nconst name = "Ali";\nage = 21;\n\nconsole.log(name, age);' },
        { type: "output", text: "Ali 21" },
        { type: "text", text: "let يسمح بإعادة إسناد قيمة، بينما const يمنع إعادة إسناد المتغير إلى قيمة جديدة." },
        { type: "quiz", question: "أي كلمة تناسب متغيرًا لن تعيدي إسناده؟", options: ["const", "repeat", "print"], answer: 0 }
      ]
    },
    {
      title: "3. Conditions and Loops",
      description: "الشروط والحلقات.",
      blocks: [
        { type: "code", text: 'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "text", text: "تستخدم for للتكرار، ويمكن استخدام if لتنفيذ أوامر عند تحقق شرط." },
        { type: "quiz", question: "ما وظيفة if؟", options: ["اختبار شرط", "إنشاء ملف", "تعريف HTML"], answer: 0 }
      ]
    },
    {
      title: "4. Functions and Arrays",
      description: "الدوال والمصفوفات.",
      blocks: [
        { type: "code", text: 'function double(number) {\n  return number * 2;\n}\n\nconst numbers = [1, 2, 3];\nconsole.log(double(numbers[1]));' },
        { type: "output", text: "4" },
        { type: "text", text: "تُستخدم الدوال لإعادة استخدام الكود، وتبدأ فهارس المصفوفات من صفر." },
        { type: "quiz", question: "ما قيمة numbers[1]؟", options: ["1", "2", "3"], answer: 1 }
      ]
    },
    {
      title: "5. DOM and Events",
      description: "تغيير صفحة الويب والتفاعل معها.",
      blocks: [
        { type: "code", text: 'const button = document.querySelector("#myButton");\n\nbutton.addEventListener("click", () => {\n  alert("Button clicked!");\n});' },
        { type: "text", text: "DOM يمثل عناصر الصفحة، وaddEventListener تربط حدثًا مثل click بوظيفة تنفّذ عند حدوثه." },
        { type: "quiz", question: "ما الحدث الذي يمثله click؟", options: ["الضغط على العنصر", "إغلاق المتصفح", "تحميل صورة فقط"], answer: 0 }
      ]
    }
  ],

  html: [
    {
      title: "1. HTML Document",
      description: "بناء هيكل صفحة ويب.",
      blocks: [
        { type: "text", text: "HTML لغة ترميز تحدد هيكل ومحتوى صفحة الويب، وليست لغة برمجة عامة." },
        { type: "code", text: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n  <p>My first page.</p>\n</body>\n</html>' },
        { type: "text", text: "head يحتوي على بيانات الصفحة، بينما body يحتوي على المحتوى الظاهر للمستخدم." },
        { type: "quiz", question: "ما العنصر المستخدم لعنوان رئيسي؟", options: ["<h1>", "<p>", "<footer>"], answer: 0 }
      ]
    },
    {
      title: "2. Links and Images",
      description: "إضافة الروابط والصور.",
      blocks: [
        { type: "code", text: '<a href="https://example.com">Visit website</a>\n<img src="photo.jpg" alt="A description">' },
        { type: "text", text: "href يحدد وجهة الرابط، وsrc يحدد مصدر الصورة. نص alt يساعد في الوصولية ويظهر عند تعذّر تحميل الصورة." },
        { type: "quiz", question: "ما الخاصية التي تحدد وجهة الرابط؟", options: ["src", "href", "alt"], answer: 1 }
      ]
    },
    {
      title: "3. Forms",
      description: "إنشاء نموذج لإدخال البيانات.",
      blocks: [
        { type: "code", text: '<form>\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n  <button type="submit">Send</button>\n</form>' },
        { type: "text", text: "form يجمع مدخلات المستخدم، وlabel يوضح وظيفة الحقل. هذا المثال لا يرسل البيانات إلى خادم بمفرده." },
        { type: "quiz", question: "ما نوع الحقل المناسب للبريد الإلكتروني؟", options: ['type="email"', 'type="image"', 'type="heading"'], answer: 0 }
      ]
    }
  ],

  css: [
    {
      title: "1. Selectors",
      description: "اختيار عناصر HTML لتنسيقها.",
      blocks: [
        { type: "code", text: 'p {\n  color: blue;\n  font-size: 18px;\n}\n\n.card {\n  padding: 16px;\n}' },
        { type: "text", text: "p يختار عناصر الفقرة، و.card يختار العناصر التي تحمل class باسم card." },
        { type: "quiz", question: "كيف نختار class اسمها card؟", options: ["#card", ".card", "card()"], answer: 1 }
      ]
    },
    {
      title: "2. Box Model",
      description: "فهم المساحة حول العناصر.",
      blocks: [
        { type: "code", text: '.card {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n  box-sizing: border-box;\n}' },
        { type: "text", text: "Content هو المحتوى، وPadding المسافة الداخلية، وBorder الإطار، وMargin المسافة الخارجية. مع border-box يدخل الحشو والإطار ضمن العرض المحدد." },
        { type: "quiz", question: "ما الذي يضيف مساحة خارج العنصر؟", options: ["padding", "margin", "font-size"], answer: 1 }
      ]
    },
    {
      title: "3. Flexbox and Grid",
      description: "تنظيم التخطيطات.",
      blocks: [
        { type: "code", text: '.container {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}' },
        { type: "text", text: "Flexbox مفيد لترتيب العناصر في اتجاه واحد، بينما Grid مناسب لتخطيطات الصفوف والأعمدة." },
        { type: "quiz", question: "أي تقنية تناسب تخطيطًا من صفوف وأعمدة؟", options: ["Grid", "font-style", "border"], answer: 0 }
      ]
    }
  ],

  sql: [
    {
      title: "1. SELECT and WHERE",
      description: "قراءة البيانات وتصفية النتائج.",
      blocks: [
        { type: "code", text: "SELECT Name, Age\nFROM Students\nWHERE Age >= 18;" },
        { type: "text", text: "SELECT تحدد الأعمدة، وFROM يحدد الجدول، وWHERE يحدد الصفوف المطابقة للشرط." },
        { type: "quiz", question: "ما وظيفة WHERE؟", options: ["تصفية الصفوف", "حذف قاعدة البيانات دائمًا", "إنشاء واجهة ويب"], answer: 0 }
      ]
    },
    {
      title: "2. INSERT, UPDATE, DELETE",
      description: "إضافة البيانات وتعديلها وحذفها.",
      blocks: [
        { type: "code", text: "INSERT INTO Students (Name, Age)\nVALUES ('Ali', 20);\n\nUPDATE Students\nSET Age = 21\nWHERE Name = 'Ali';" },
        { type: "text", text: "INSERT تضيف صفوفًا، وUPDATE تعدّلها. يجب الانتباه إلى WHERE عند التعديل أو الحذف لتجنب التأثير على صفوف غير مقصودة." },
        { type: "quiz", question: "أي أمر يضيف صفًا جديدًا؟", options: ["SELECT", "INSERT", "WHERE"], answer: 1 }
      ]
    },
    {
      title: "3. JOIN and Relationships",
      description: "ربط البيانات من أكثر من جدول.",
      blocks: [
        { type: "code", text: "SELECT Students.Name, Courses.Title\nFROM Students\nINNER JOIN Courses\nON Students.CourseId = Courses.Id;" },
        { type: "text", text: "JOIN تربط الصفوف بين الجداول باستخدام علاقة أو شرط. INNER JOIN يعيد الصفوف المتطابقة في الطرفين." },
        { type: "quiz", question: "ما الغرض من JOIN؟", options: ["ربط بيانات الجداول", "تنسيق النص", "إنشاء حلقة"], answer: 0 }
      ]
    }
  ]
};

/* =====================================
   End of Lesson Library
===================================== */

/* =====================================
   Part 3: More Lessons
===================================== */

Object.assign(lessonLibrary, {
  java: [
    {
      title: "1. Java Basics",
      description: "المتغيرات والطباعة.",
      blocks: [
        { type: "text", text: "Java لغة برمجة متعددة الاستخدامات، وتُستخدم في تطبيقات المؤسسات وتطبيقات Android وغيرها." },
        { type: "code", text: 'public class Main {\n    public static void main(String[] args) {\n        String name = "Ali";\n        int age = 20;\n        System.out.println(name);\n        System.out.println(age);\n    }\n}' },
        { type: "output", text: "Ali\n20" },
        { type: "quiz", question: "ما الأمر المستخدم للطباعة؟", options: ["Console.WriteLine", "System.out.println", "echo"], answer: 1 }
      ]
    },
    {
      title: "2. Conditions and Loops",
      description: "الشروط والتكرار.",
      blocks: [
        { type: "code", text: 'for (int i = 1; i <= 3; i++) {\n    System.out.println(i);\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "text", text: "تسمح for بتكرار الأوامر. ويمكن استخدام if وelse لاتخاذ القرارات." },
        { type: "quiz", question: "كم مرة تتكرر الحلقة؟", options: ["مرتين", "3 مرات", "4 مرات"], answer: 1 }
      ]
    },
    {
      title: "3. Classes and Objects",
      description: "مبادئ OOP في Java.",
      blocks: [
        { type: "code", text: 'class Student {\n    String name;\n\n    void introduce() {\n        System.out.println("Hello " + name);\n    }\n}' },
        { type: "text", text: "يمكن إنشاء كائن باستخدام new، ثم الوصول إلى الأعضاء المتاحة وفق محددات الوصول." },
        { type: "quiz", question: "ما الكلمة الشائعة لإنشاء كائن؟", options: ["new", "class", "break"], answer: 0 }
      ]
    }
  ],

  php: [
    {
      title: "1. PHP Basics",
      description: "المتغيرات والطباعة.",
      blocks: [
        { type: "code", text: '<?php\n$name = "Ali";\n$age = 20;\necho $name;\necho $age;\n?>' },
        { type: "output", text: "Ali20" },
        { type: "text", text: "تبدأ أسماء المتغيرات في PHP بعلامة $. ويُستخدم echo لإخراج النص أو القيمة." },
        { type: "quiz", question: "بماذا يبدأ اسم المتغير في PHP؟", options: ["$", "#", "@"], answer: 0 }
      ]
    },
    {
      title: "2. Conditions and Loops",
      description: "التحكم في تنفيذ البرنامج.",
      blocks: [
        { type: "code", text: '<?php\n$score = 75;\nif ($score >= 50) {\n    echo "Passed";\n} else {\n    echo "Failed";\n}\n?>' },
        { type: "output", text: "Passed" },
        { type: "quiz", question: "ما وظيفة else؟", options: ["تنفيذ الفرع البديل", "تعريف متغير فقط", "إيقاف الخادم"], answer: 0 }
      ]
    },
    {
      title: "3. Arrays and Functions",
      description: "المصفوفات والدوال.",
      blocks: [
        { type: "code", text: '<?php\nfunction add($a, $b) {\n    return $a + $b;\n}\n\n$colors = ["red", "blue"];\necho add(2, 3);\necho $colors[0];\n?>' },
        { type: "output", text: "5red" },
        { type: "text", text: "تُستخدم function لتعريف دالة، وreturn لإرجاع قيمتها، وتبدأ فهارس المصفوفة الرقمية من صفر." },
        { type: "quiz", question: "ما فهرس أول عنصر في هذه المصفوفة؟", options: ["0", "1", "2"], answer: 0 }
      ]
    }
  ],

  dart: [
    {
      title: "1. Dart Basics",
      description: "المتغيرات والطباعة.",
      blocks: [
        { type: "code", text: "void main() {\n  String name = 'Ali';\n  int age = 20;\n  print('$name is $age');\n}" },
        { type: "output", text: "Ali is 20" },
        { type: "text", text: "Dart هي اللغة المستخدمة عادةً في تطوير تطبيقات Flutter. يبدأ تنفيذ المثال من main." },
        { type: "quiz", question: "ما الدالة التي يبدأ منها المثال؟", options: ["start()", "main()", "runCode()"], answer: 1 }
      ]
    },
    {
      title: "2. Functions and Lists",
      description: "الدوال والقوائم.",
      blocks: [
        { type: "code", text: "int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  List<int> numbers = [10, 20, 30];\n  print(add(numbers[0], numbers[1]));\n}" },
        { type: "output", text: "30" },
        { type: "quiz", question: "ما نوع الأرقام داخل List<int>؟", options: ["نصوص", "أعداد صحيحة", "قيم منطقية"], answer: 1 }
      ]
    }
  ],

  typescript: [
    {
      title: "1. Types and Variables",
      description: "إضافة أنواع إلى JavaScript.",
      blocks: [
        { type: "code", text: "let age: number = 20;\nlet name: string = 'Ali';\nlet active: boolean = true;\n\nconsole.log(name, age, active);" },
        { type: "output", text: "Ali 20 true" },
        { type: "text", text: "TypeScript تضيف نظام أنواع إلى JavaScript، ثم تُحوّل عادةً إلى JavaScript لتشغيلها في البيئة المستهدفة." },
        { type: "quiz", question: "ما النوع المناسب للنص؟", options: ["number", "string", "boolean"], answer: 1 }
      ]
    },
    {
      title: "2. Interfaces",
      description: "تحديد شكل الكائنات.",
      blocks: [
        { type: "code", text: "interface Student {\n  name: string;\n  age: number;\n}\n\nconst student: Student = {\n  name: 'Ali',\n  age: 20\n};\n\nconsole.log(student.name);" },
        { type: "output", text: "Ali" },
        { type: "text", text: "Interface تحدد شكل البيانات المتوقع، وتساعد TypeScript على اكتشاف أخطاء الأنواع أثناء التطوير." },
        { type: "quiz", question: "ما الغرض من interface؟", options: ["تحديد شكل البيانات", "طباعة صورة", "تشغيل قاعدة البيانات"], answer: 0 }
      ]
    }
  ],

  go: [
    {
      title: "1. Variables and Output",
      description: "أساسيات Go.",
      blocks: [
        { type: "code", text: 'package main\nimport "fmt"\n\nfunc main() {\n    name := "Ali"\n    age := 20\n    fmt.Println(name, age)\n}' },
        { type: "output", text: "Ali 20" },
        { type: "text", text: "تُستخدم := لتعريف متغير واستنتاج نوعه داخل نطاق محلي، وتوفر fmt.Println الطباعة." },
        { type: "quiz", question: "ما اسم الدالة الرئيسية؟", options: ["main", "start", "print"], answer: 0 }
      ]
    },
    {
      title: "2. Functions",
      description: "إنشاء الدوال.",
      blocks: [
        { type: "code", text: 'package main\nimport "fmt"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc main() {\n    fmt.Println(add(2, 5))\n}' },
        { type: "output", text: "7" },
        { type: "quiz", question: "ما نوع القيمة التي تعيدها add؟", options: ["string", "int", "bool"], answer: 1 }
      ]
    }
  ],

  kotlin: [
    {
      title: "1. Variables",
      description: "المتغيرات في Kotlin.",
      blocks: [
        { type: "code", text: 'fun main() {\n    val name = "Ali"\n    var age = 20\n    age = 21\n    println("$name $age")\n}' },
        { type: "output", text: "Ali 21" },
        { type: "text", text: "val لا يسمح بإعادة إسناد المتغير، أما var فيسمح بذلك." },
        { type: "quiz", question: "أي كلمة تسمح بتغيير القيمة؟", options: ["val", "var", "fun"], answer: 1 }
      ]
    },
    {
      title: "2. Functions and Conditions",
      description: "الدوال والشروط.",
      blocks: [
        { type: "code", text: 'fun maxNumber(a: Int, b: Int): Int {\n    return if (a > b) a else b\n}\n\nfun main() {\n    println(maxNumber(4, 9))\n}' },
        { type: "output", text: "9" },
        { type: "quiz", question: "ما نوع القيمة المعادة من الدالة؟", options: ["Int", "String", "Unit فقط"], answer: 0 }
      ]
    }
  ],

  swift: [
    {
      title: "1. Variables and Constants",
      description: "المتغيرات والثوابت في Swift.",
      blocks: [
        { type: "code", text: 'let name = "Ali"\nvar age = 20\nage = 21\nprint(name, age)' },
        { type: "output", text: "Ali 21" },
        { type: "text", text: "let لتعريف قيمة لا يعاد إسنادها، وvar لتعريف متغير قابل للتغيير." },
        { type: "quiz", question: "ما الكلمة المناسبة لقيمة ثابتة؟", options: ["var", "let", "loop"], answer: 1 }
      ]
    },
    {
      title: "2. Functions",
      description: "كتابة الدوال.",
      blocks: [
        { type: "code", text: 'func add(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}\n\nprint(add(3, 4))' },
        { type: "output", text: "7" },
        { type: "quiz", question: "ما الرمز المستخدم لتحديد نوع القيمة المعادة؟", options: ["->", "==", "=>"], answer: 0 }
      ]
    }
  ],

  rust: [
    {
      title: "1. Variables and Mutability",
      description: "المتغيرات في Rust.",
      blocks: [
        { type: "code", text: 'fn main() {\n    let name = "Ali";\n    let mut age = 20;\n    age = 21;\n    println!("{} {}", name, age);\n}' },
        { type: "output", text: "Ali 21" },
        { type: "text", text: "المتغيرات غير قابلة للتغيير افتراضيًا، وتسمح mut بإعادة إسناد قيمة جديدة." },
        { type: "quiz", question: "ما الغرض من mut؟", options: ["السماح بالتغيير", "طباعة النص", "تعريف دالة"], answer: 0 }
      ]
    },
    {
      title: "2. Functions",
      description: "الدوال في Rust.",
      blocks: [
        { type: "code", text: 'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!("{}", add(2, 3));\n}' },
        { type: "output", text: "5" },
        { type: "text", text: "في Rust يمكن أن تكون آخر تعبير في الدالة قيمة معادة إذا لم ينتهِ بفاصلة منقوطة." },
        { type: "quiz", question: "ما نوع العدد الصحيح الموقع في المثال؟", options: ["i32", "str", "bool"], answer: 0 }
      ]
    }
  ],

  cpp: [
    {
      title: "1. Variables and Output",
      description: "أساسيات C++.",
      blocks: [
        { type: "code", text: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "Ali";\n    int age = 20;\n    cout << name << " " << age << endl;\n    return 0;\n}' },
        { type: "output", text: "Ali 20" },
        { type: "text", text: "cout لطباعة البيانات، وendl للانتقال إلى سطر جديد. يجب تضمين المكتبات المطلوبة." },
        { type: "quiz", question: "ما وظيفة cout؟", options: ["إخراج البيانات", "قراءة ملف فقط", "تعريف صنف"], answer: 0 }
      ]
    },
    {
      title: "2. Conditions and Loops",
      description: "الشروط والحلقات.",
      blocks: [
        { type: "code", text: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "quiz", question: "أي جزء يغيّر قيمة i في كل دورة؟", options: ["i++", "cout", "return"], answer: 0 }
      ]
    }
  ],

  react: [
    {
      title: "1. Components and JSX",
      description: "بناء واجهات باستخدام المكونات.",
      blocks: [
        { type: "code", text: 'function Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n\nexport default Welcome;' },
        { type: "text", text: "Component جزء مستقل من واجهة المستخدم. JSX صياغة تسمح بكتابة شكل قريب من HTML داخل JavaScript." },
        { type: "quiz", question: "ما الذي يعيده المكون عادةً؟", options: ["واجهة أو عناصر React", "قاعدة بيانات", "ملف تنفيذي"], answer: 0 }
      ]
    },
    {
      title: "2. State and Events",
      description: "إدارة الحالة والتفاعل.",
      blocks: [
        { type: "code", text: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}" },
        { type: "text", text: "useState تحفظ حالة المكون، وعند استدعاء setCount تتحدث الواجهة بالقيمة الجديدة." },
        { type: "quiz", question: "ما وظيفة setCount؟", options: ["تحديث الحالة", "إنشاء ملف CSS", "إغلاق الصفحة"], answer: 0 }
      ]
    }
  ],

  dotnet: [
    {
      title: "1. What is .NET?",
      description: "التعرّف على منصة .NET.",
      blocks: [
        { type: "text", text: ".NET منصة تطوير تدعم بناء تطبيقات الويب والخدمات والتطبيقات المكتبية وغيرها، ويمكن استخدام C# معها." },
        { type: "code", text: 'Console.WriteLine(".NET is a development platform");' },
        { type: "output", text: ".NET is a development platform" },
        { type: "quiz", question: "ما العلاقة بين C# و.NET؟", options: ["C# لغة يمكن استخدامها مع .NET", ".NET نوع متغير", "لا توجد علاقة"], answer: 0 }
      ]
    },
    {
      title: "2. Web APIs",
      description: "فكرة واجهات البرمجة.",
      blocks: [
        { type: "text", text: "Web API تسمح للتطبيقات بالتواصل عبر HTTP. يمكن أن يستقبل الخادم طلبًا ويعيد استجابة مثل JSON." },
        { type: "code", text: 'app.MapGet("/hello", () =>\n    Results.Ok(new { message = "Hello" }));' },
        { type: "output", text: 'HTTP response body:\n{"message":"Hello"}' },
        { type: "quiz", question: "ما الغرض الشائع من API؟", options: ["تبادل البيانات بين التطبيقات", "تنسيق الألوان فقط", "زيادة حجم الصور"], answer: 0 }
      ]
    }
  ]
});

/* =====================================
   Attach lessons to each course
===================================== */

courses.forEach((course) => {
  course.lessons = lessonLibrary[course.id] || [];
});

/* =====================================
   Part 4: Course Cards and Lesson Viewer
===================================== */

function getCategoryName(category) {
  const categories = {
    programming: "Programming",
    web: "Web Development",
    database: "Database",
    mobile: "Mobile Development"
  };

  return categories[category] || category;
}

/* Update course statistics */
function updateCourseStats() {
  if (languageCount) {
    languageCount.textContent = courses.length;
  }

  if (lessonCount) {
    lessonCount.textContent = getAllLessonsCount();
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

/* Render course cards */
function renderCourseCards() {
  if (!languageGrid) return;

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      getCategoryName(course.category)
        .toLowerCase()
        .includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.innerHTML = filteredCourses.map((course) => `
    <article
      class="language-card"
      data-open-course="${escapeHTML(course.id)}"
      tabindex="0"
      role="button"
      aria-label="Open ${escapeHTML(course.name)} course"
    >
      <div class="card-top">
        <div
          class="language-logo"
          style="--language-color: ${escapeHTML(course.color)}"
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
        <span>${escapeHTML(course.level)}</span>
        <span>${course.lessons.length} lessons</span>
      </div>

      <button
        class="card-button"
        type="button"
        data-open-course="${escapeHTML(course.id)}"
      >
        Start Learning
      </button>
    </article>
  `).join("");

  if (emptyState) {
    emptyState.hidden = filteredCourses.length > 0;
  }
}

/* Render lesson navigation */
function renderLessonNavigation() {
  if (!lessonNavigation) return;

  const course = getActiveCourse();

  if (!course) {
    lessonNavigation.innerHTML = "";
    return;
  }

  lessonNavigation.innerHTML = course.lessons.map(
    (lesson, index) => `
      <button
        type="button"
        class="lesson-nav-button ${
          index === activeLessonIndex ? "active" : ""
        }"
        data-lesson-index="${index}"
      >
        <span>${index + 1}.</span>
        ${escapeHTML(lesson.title)}
      </button>
    `
  ).join("");
}

/* Render content blocks */
function renderBlock(block) {
  const content = escapeHTML(block.content || "");

  switch (block.type) {
    case "heading":
      return `<h3>${content}</h3>`;

    case "text":
      return `<p>${content}</p>`;

    case "code":
      return `
        <pre class="lesson-code"><code>${content}</code></pre>
      `;

    case "output":
      return `
        <div class="lesson-output">
          <strong>Output:</strong>
          <pre>${content}</pre>
        </div>
      `;

    case "list": {
      const items = Array.isArray(block.items)
        ? block.items
        : [];

      return `
        <ul>
          ${items.map((item) =>
            `<li>${escapeHTML(item)}</li>`
          ).join("")}
        </ul>
      `;
    }

    case "quiz": {
      const options = Array.isArray(block.options)
        ? block.options
        : [];

      return `
        <div
          class="lesson-quiz"
          data-correct-answer="${Number(block.answer)}"
        >
          <h3>Quick Quiz</h3>
          <p>${content}</p>

          <div class="quiz-options">
            ${options.map((option, index) => `
              <button
                type="button"
                class="quiz-option"
                data-option-index="${index}"
              >
                ${escapeHTML(option)}
              </button>
            `).join("")}
          </div>

          <p class="quiz-feedback" aria-live="polite"></p>
        </div>
      `;
    }

    default:
      return `<p>${content}</p>`;
  }
}

/* Show the currently selected lesson */
function renderCurrentLesson() {
  const course = getActiveCourse();

  if (!course || !course.lessons.length) {
    if (lessonContent) {
      lessonContent.innerHTML =
        "<p>No lessons are available yet.</p>";
    }
    return;
  }

  if (activeLessonIndex < 0) {
    activeLessonIndex = 0;
  }

  if (activeLessonIndex >= course.lessons.length) {
    activeLessonIndex = course.lessons.length - 1;
  }

  const lesson = course.lessons[activeLessonIndex];

  if (lessonLanguage) {
    lessonLanguage.textContent = course.name;
  }

  if (lessonTitle) {
    lessonTitle.textContent = lesson.title;
  }

  if (lessonDescription) {
    lessonDescription.textContent =
      lesson.description || course.description;
  }

  if (lessonContent) {
    const blocks = lesson.blocks || lesson.sections || [];

    lessonContent.innerHTML = blocks.length
      ? blocks.map(renderBlock).join("")
      : "<p>Lesson content is coming soon.</p>";
  }

  renderLessonNavigation();

  if (previousLessonButton) {
    previousLessonButton.disabled = activeLessonIndex === 0;
  }

  if (nextLessonButton) {
    nextLessonButton.disabled =
      activeLessonIndex === course.lessons.length - 1;
  }

  updateCompletionButton();
}

/* Open a course */
function openCourse(courseId) {
  const course = getCourse(courseId);

  if (!course) return;

  if (!course.lessons.length) {
    showToast("No lessons are available for this course yet.");
    return;
  }

  activeCourseId = courseId;
  activeLessonIndex = 0;

  if (lessonModal) {
    lessonModal.classList.add("open");
    lessonModal.setAttribute("aria-hidden", "false");
  }

  document.body.style.overflow = "hidden";

  renderCurrentLesson();
}

/* Close the lesson window */
function closeLessonModal() {
  if (lessonModal) {
    lessonModal.classList.remove("open");
    lessonModal.setAttribute("aria-hidden", "true");
  }

  document.body.style.overflow = "";
}

/* Move between lessons */
function goToLesson(index) {
  const course = getActiveCourse();

  if (!course) return;
  if (index < 0 || index >= course.lessons.length) return;

  activeLessonIndex = index;
  renderCurrentLesson();
}

/* =====================================
   Part 4: Event Listeners
===================================== */

/* Click on a course card or its button */
if (languageGrid) {
  languageGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open-course]");

    if (!target) return;

    openCourse(target.dataset.openCourse);
  });

  /* Keyboard support for course cards */
  languageGrid.addEventListener("keydown", (event) => {
    if (event.target !== event.currentTarget &&
        event.target.closest("button")) {
      return;
    }

    const card = event.target.closest(
      ".language-card[data-open-course]"
    );

    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCourse(card.dataset.openCourse);
    }
  });
}

/* Search courses */
if (searchInput) {
  searchInput.addEventListener("input", renderCourseCards);
}

/* Filter courses */
if (categoryFilter) {
  categoryFilter.addEventListener("change", renderCourseCards);
}

/* Select a lesson from the navigation */
if (lessonNavigation) {
  lessonNavigation.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-index]");

    if (!button) return;

    goToLesson(Number(button.dataset.lessonIndex));
  });
}

/* Previous lesson */
if (previousLessonButton) {
  previousLessonButton.addEventListener("click", () => {
    goToLesson(activeLessonIndex - 1);
  });
}

/* Next lesson */
if (nextLessonButton) {
  nextLessonButton.addEventListener("click", () => {
    goToLesson(activeLessonIndex + 1);
  });
}

/* Close button */
if (closeLessonButton) {
  closeLessonButton.addEventListener(
    "click",
    closeLessonModal
  );
}

/* Close when clicking the modal background */
if (lessonModal) {
  lessonModal.addEventListener("click", (event) => {
    if (event.target === lessonModal) {
      closeLessonModal();
    }
  });
}

/* Close with Escape */
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    lessonModal &&
    lessonModal.classList.contains("open")
  ) {
    closeLessonModal();
  }
});

/* =====================================
   Part 5: Progress, Quiz, Theme and Start
===================================== */

/* Safely save and load completed lessons */
function readCompletedLessons() {
  try {
    const saved = localStorage.getItem("csMateCompletedLessons");
    const parsed = saved ? JSON.parse(saved) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let completedLessons = readCompletedLessons();

function getLessonKey() {
  return `${activeCourseId}-${activeLessonIndex}`;
}

function isCurrentLessonCompleted() {
  return completedLessons.includes(getLessonKey());
}

function saveCompletedLessons() {
  try {
    localStorage.setItem(
      "csMateCompletedLessons",
      JSON.stringify(completedLessons)
    );
  } catch (error) {
    showToast("Progress could not be saved on this device.");
  }
}

function updateCompletionButton() {
  if (!completeLessonButton) return;

  const completed = isCurrentLessonCompleted();

  completeLessonButton.textContent = completed
    ? "✓ Completed"
    : "Mark as Complete";

  completeLessonButton.classList.toggle("completed", completed);
}

function completeCurrentLesson() {
  const course = getActiveCourse();

  if (!course || !course.lessons.length) return;

  const key = getLessonKey();

  if (!completedLessons.includes(key)) {
    completedLessons.push(key);
    saveCompletedLessons();
    showToast("Lesson completed successfully!");
  } else {
    showToast("You have already completed this lesson.");
  }

  updateCompletionButton();
}

if (completeLessonButton) {
  completeLessonButton.addEventListener(
    "click",
    completeCurrentLesson
  );
}

/* Quiz answer checking */
if (lessonContent) {
  lessonContent.addEventListener("click", (event) => {
    const optionButton = event.target.closest(
      ".quiz-option[data-option-index]"
    );

    if (!optionButton) return;

    const quiz = optionButton.closest(".lesson-quiz");

    if (!quiz) return;

    const feedback = quiz.querySelector(".quiz-feedback");
    const correctAnswer = Number(
      quiz.dataset.correctAnswer
    );
    const selectedAnswer = Number(
      optionButton.dataset.optionIndex
    );

    const options = quiz.querySelectorAll(".quiz-option");

    options.forEach((option) => {
      option.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
      optionButton.classList.add("correct");

      if (feedback) {
        feedback.textContent = "Correct answer! Great job.";
      }
    } else {
      optionButton.classList.add("incorrect");

      if (feedback) {
        feedback.textContent = "Not quite. Review the lesson and try again next time.";
      }

      if (options[correctAnswer]) {
        options[correctAnswer].classList.add("correct");
      }
    }
  });
}

/* Theme toggle */
const themeToggle = $("#themeToggle");

function applyTheme(theme) {
  const selectedTheme =
    theme === "light" ? "light" : "dark";

  document.documentElement.dataset.theme = selectedTheme;

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      selectedTheme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

    themeToggle.textContent =
      selectedTheme === "dark" ? "☀️" : "🌙";
  }

  try {
    localStorage.setItem("csMateTheme", selectedTheme);
  } catch (error) {
    // The theme still works for the current page.
  }
}

let savedTheme = "dark";

try {
  savedTheme = localStorage.getItem("csMateTheme") || "dark";
} catch (error) {
  savedTheme = "dark";
}

applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme || "dark";

    applyTheme(
      currentTheme === "dark" ? "light" : "dark"
    );
  });
}

/* Interface language toggle */
const languageToggle = $("#languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentInterfaceLanguage =
      currentInterfaceLanguage === "ar" ? "en" : "ar";

    document.documentElement.lang = currentInterfaceLanguage;
    document.documentElement.dir =
      currentInterfaceLanguage === "ar" ? "rtl" : "ltr";

    languageToggle.textContent =
      currentInterfaceLanguage === "ar" ? "EN" : "AR";

    showToast(
      currentInterfaceLanguage === "ar"
        ? "تم تغيير اتجاه الصفحة للعربية."
        : "Page direction changed to English."
    );
  });
}

/* =====================================
   Start CS MATE
===================================== */

function initializeCSMate() {
  updateCourseStats();
  renderCourseCards();

  if (lessonModal) {
    lessonModal.classList.remove("open");
    lessonModal.setAttribute("aria-hidden", "true");
  }

  document.body.style.overflow = "";
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeCSMate
  );
} else {
  initializeCSMate();
}
