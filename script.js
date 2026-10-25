
"use strict";

/* =====================================
   CS MATE - Main JavaScript
   Part 1: Setup and course information
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

/* Course catalog */

const courses = [
  {
    id: "csharp",
    name: "C#",
    logo: "C#",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم البرمجة الكائنية وبناء تطبيقات .NET.",
    color: "#a78bfa",
    lessons: []
  },
  {
    id: "python",
    name: "Python",
    logo: "Py",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "ابدأ بالأساسيات ثم انتقل إلى البرمجة المتقدمة.",
    color: "#facc15",
    lessons: []
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "JS",
    category: "web",
    level: "مبتدئ إلى متقدم",
    description: "أضف التفاعل إلى صفحات الويب وتعلّم أساسيات الويب.",
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
    description: "تعلّم الأساسيات والخوارزميات وإدارة الذاكرة.",
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
    description: "نسّق الصفحات وأنشئ تصاميم متجاوبة.",
    color: "#60a5fa",
    lessons: []
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "TS",
    category: "web",
    level: "متوسط",
    description: "اكتب JavaScript مع نظام أنواع أكثر وضوحًا.",
    color: "#3b82f6",
    lessons: []
  },
  {
    id: "php",
    name: "PHP",
    logo: "PHP",
    category: "web",
    level: "مبتدئ إلى متقدم",
    description: "تعرّف على البرمجة الخلفية وتطوير مواقع الويب.",
    color: "#a5b4fc",
    lessons: []
  },
  {
    id: "sql",
    name: "SQL",
    logo: "SQL",
    category: "database",
    level: "من الصفر",
    description: "استعلم عن البيانات وأضفها وعدّلها ونظّمها.",
    color: "#38bdf8",
    lessons: []
  },
  {
    id: "dart",
    name: "Dart",
    logo: "Dart",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم اللغة المستخدمة في تطوير تطبيقات Flutter.",
    color: "#22d3ee",
    lessons: []
  },
  {
    id: "go",
    name: "Go",
    logo: "Go",
    category: "programming",
    level: "مبتدئ إلى متقدم",
    description: "تعرّف على لغة مناسبة للخدمات والأنظمة الخلفية.",
    color: "#67e8f9",
    lessons: []
  },
  {
    id: "kotlin",
    name: "Kotlin",
    logo: "K",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "تعلّم أساسيات تطوير تطبيقات Android.",
    color: "#c084fc",
    lessons: []
  },
  {
    id: "swift",
    name: "Swift",
    logo: "S",
    category: "mobile",
    level: "مبتدئ إلى متقدم",
    description: "اكتشف أساسيات البرمجة لتطبيقات Apple.",
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
    description: "تعرّف على منصة بناء تطبيقات الويب والخدمات.",
    color: "#a78bfa",
    lessons: []
  }
];

/* Shared helpers */

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

function getActiveCourse() {
  return getCourse(activeCourseId);
}

/* =====================================
   Part 2: Lessons, examples and quizzes
===================================== */

const lessonLibrary = {
  csharp: [
    {
      title: "المتغيرات وأنواع البيانات",
      description: "Variables and Data Types",
      blocks: [
        { type: "heading", text: "ما هو المتغير؟" },
        { type: "text", text: "المتغير مكان مسمّى في الذاكرة نخزن فيه قيمة. في C# نحدد نوع البيانات مثل int للأعداد الصحيحة وstring للنصوص وbool للقيم المنطقية." },
        { type: "code", text: 'string name = "Malak";\nint age = 20;\ndouble price = 19.5;\nbool isStudent = true;\nConsole.WriteLine(name);\nConsole.WriteLine(age);' },
        { type: "output", text: "Malak\n20" },
        { type: "heading", text: "قواعد مهمة" },
        { type: "list", items: ["كل تعليمة غالبًا تنتهي بفاصلة منقوطة ;", "اسم المتغير لا يبدأ برقم.", "استخدم النوع المناسب للقيمة.", "يمكن استخدام var عندما يستطيع المترجم استنتاج النوع."] },
        { type: "quiz", question: "ما نوع البيانات المناسب لتخزين عدد صحيح مثل 25؟", options: ["string", "int", "bool"], answer: 1, explanation: "int يُستخدم للأعداد الصحيحة." }
      ]
    },
    {
      title: "الشروط والحلقات",
      description: "Conditions and Loops",
      blocks: [
        { type: "heading", text: "اتخاذ القرار باستخدام if" },
        { type: "text", text: "تسمح if بتنفيذ كود عند تحقق شرط. ويمكن استخدام else للتعامل مع الحالة الأخرى." },
        { type: "code", text: 'int mark = 85;\n\nif (mark >= 50)\n{\n    Console.WriteLine("Passed");\n}\nelse\n{\n    Console.WriteLine("Failed");\n}' },
        { type: "output", text: "Passed" },
        { type: "heading", text: "الحلقات التكرارية" },
        { type: "text", text: "تُستخدم for عندما يكون عدد التكرارات معروفًا غالبًا، بينما يمكن استخدام while ما دام الشرط صحيحًا." },
        { type: "code", text: 'for (int i = 1; i <= 3; i++)\n{\n    Console.WriteLine(i);\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "quiz", question: "أي حلقة تناسب تكرارًا معروف العدد؟", options: ["for", "if", "class"], answer: 0, explanation: "حلقة for مناسبة عندما يكون عدد التكرارات معروفًا." }
      ]
    },
    {
      title: "الدوال والمصفوفات",
      description: "Methods and Arrays",
      blocks: [
        { type: "heading", text: "الدوال Methods" },
        { type: "text", text: "الدالة تجمع تعليمات في وحدة قابلة لإعادة الاستخدام. قد تستقبل parameters وتعيد نتيجة باستخدام return." },
        { type: "code", text: 'static int Add(int a, int b)\n{\n    return a + b;\n}\n\nConsole.WriteLine(Add(4, 6));' },
        { type: "output", text: "10" },
        { type: "heading", text: "المصفوفات Arrays" },
        { type: "text", text: "المصفوفة تخزن عدة قيم من النوع نفسه، ويبدأ الفهرس index من صفر." },
        { type: "code", text: 'int[] numbers = { 10, 20, 30 };\nConsole.WriteLine(numbers[0]);\nConsole.WriteLine(numbers.Length);' },
        { type: "output", text: "10\n3" },
        { type: "quiz", question: "ما قيمة numbers[0] في المثال؟", options: ["0", "10", "20"], answer: 1, explanation: "أول عنصر في المصفوفة يحمل الفهرس صفر." }
      ]
    },
    {
      title: "البرمجة الكائنية OOP",
      description: "Classes, Objects and Encapsulation",
      blocks: [
        { type: "heading", text: "Class و Object" },
        { type: "text", text: "الكلاس Class هو مخطط يحدد البيانات والسلوك. أما الأوبجكت Object فهو نسخة من هذا الكلاس." },
        { type: "code", text: 'class Student\n{\n    public string Name { get; set; }\n\n    public void Introduce()\n    {\n        Console.WriteLine($"I am {Name}");\n    }\n}\n\nStudent student = new Student();\nstudent.Name = "Ali";\nstudent.Introduce();' },
        { type: "output", text: "I am Ali" },
        { type: "heading", text: "المبادئ الأساسية" },
        { type: "list", items: ["Encapsulation: حماية البيانات وتنظيم الوصول إليها.", "Inheritance: إنشاء كلاس مشتق من كلاس آخر.", "Polymorphism: التعامل مع كائنات مختلفة من خلال واجهة مشتركة.", "Abstraction: إظهار المهم وإخفاء تفاصيل التنفيذ."] },
        { type: "quiz", question: "ما المقصود بـ Encapsulation؟", options: ["تكرار الكود", "حماية البيانات وتنظيم الوصول إليها", "حذف الكلاس"], answer: 1, explanation: "التغليف ينظم الوصول إلى البيانات ويخفي تفاصيلها الداخلية عند الحاجة." }
      ]
    }
  ],

  python: [
    {
      title: "المتغيرات والطباعة",
      description: "Variables and Output",
      blocks: [
        { type: "heading", text: "كتابة أول برنامج" },
        { type: "text", text: "Python لغة سهلة القراءة. لا تحتاج عادةً إلى كتابة نوع المتغير مسبقًا؛ فاللغة تستنتج النوع من القيمة." },
        { type: "code", text: 'name = "Malak"\nage = 20\nis_student = True\n\nprint(name)\nprint(age)\nprint(type(age))' },
        { type: "output", text: "Malak\n20\n<class 'int'>" },
        { type: "heading", text: "أنواع شائعة" },
        { type: "list", items: ["int: الأعداد الصحيحة.", "float: الأعداد العشرية.", "str: النصوص.", "bool: True أو False.", "list: مجموعة مرتبة قابلة للتعديل."] },
        { type: "quiz", question: "ما نوع القيمة \"Hello\"؟", options: ["int", "str", "bool"], answer: 1, explanation: "النصوص في Python من النوع str." }
      ]
    },
    {
      title: "الشروط والحلقات",
      description: "Conditions and Loops",
      blocks: [
        { type: "heading", text: "الشروط" },
        { type: "text", text: "تستخدم Python if وelif وelse لاتخاذ القرارات. المسافات البادئة Indentation جزء أساسي من تركيب اللغة." },
        { type: "code", text: 'mark = 85\n\nif mark >= 90:\n    print("Excellent")\nelif mark >= 50:\n    print("Passed")\nelse:\n    print("Failed")' },
        { type: "output", text: "Passed" },
        { type: "heading", text: "الحلقات" },
        { type: "code", text: 'for number in range(1, 4):\n    print(number)' },
        { type: "output", text: "1\n2\n3" },
        { type: "quiz", question: "ما وظيفة range(1, 4)؟", options: ["ينتج 1 و2 و3", "ينتج 1 و2 و3 و4", "ينتج 4 فقط"], answer: 0, explanation: "الحد الأخير في range غير مشمول." }
      ]
    },
    {
      title: "الدوال وهياكل البيانات",
      description: "Functions and Data Structures",
      blocks: [
        { type: "heading", text: "كتابة دالة" },
        { type: "code", text: 'def multiply(a, b):\n    return a * b\n\nresult = multiply(4, 5)\nprint(result)' },
        { type: "output", text: "20" },
        { type: "heading", text: "List و Dictionary" },
        { type: "text", text: "القائمة List تخزن عناصر بترتيب، أما القاموس Dictionary فيربط كل مفتاح Key بقيمة Value." },
        { type: "code", text: 'colors = ["red", "blue"]\ncolors.append("green")\n\nstudent = {"name": "Ali", "age": 21}\nprint(colors[0])\nprint(student["name"])' },
        { type: "output", text: "red\nAli" },
        { type: "quiz", question: "أي بنية تخزن البيانات في أزواج مفتاح وقيمة؟", options: ["Dictionary", "Integer", "Boolean"], answer: 0, explanation: "Dictionary تربط المفاتيح بالقيم." }
      ]
    },
    {
      title: "البرمجة الكائنية ومعالجة الأخطاء",
      description: "OOP and Exceptions",
      blocks: [
        { type: "heading", text: "إنشاء Class" },
        { type: "code", text: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print(self.name + " says Woof")\n\npet = Dog("Max")\npet.bark()' },
        { type: "output", text: "Max says Woof" },
        { type: "text", text: "تُستخدم __init__ لتهيئة الكائن، ويشير self إلى الكائن الحالي." },
        { type: "heading", text: "معالجة الأخطاء" },
        { type: "code", text: 'try:\n    number = int("abc")\nexcept ValueError:\n    print("Invalid number")' },
        { type: "output", text: "Invalid number" },
        { type: "quiz", question: "ما فائدة try وexcept؟", options: ["إنشاء قائمة", "التعامل مع الاستثناءات", "تعريف متغير فقط"], answer: 1, explanation: "تساعدان على التعامل مع أخطاء وقت التشغيل المتوقعة." }
      ]
    }
  ],

  javascript: [
    {
      title: "المتغيرات وأنواع البيانات",
      description: "Variables and Data Types",
      blocks: [
        { type: "heading", text: "let و const" },
        { type: "text", text: "تُستخدم let لمتغير يمكن إعادة إسناد قيمته، بينما const تمنع إعادة إسناد المتغير. JavaScript تدعم أنواعًا مثل string وnumber وboolean وobject." },
        { type: "code", text: 'const name = "Malak";\nlet score = 10;\nscore = 15;\n\nconsole.log(name);\nconsole.log(score);' },
        { type: "output", text: "Malak\n15" },
        { type: "quiz", question: "أي كلمة تناسب قيمة لن نعيد إسنادها؟", options: ["const", "if", "for"], answer: 0, explanation: "const تمنع إعادة إسناد المتغير." }
      ]
    },
    {
      title: "الشروط والحلقات",
      description: "Conditions and Loops",
      blocks: [
        { type: "heading", text: "الشروط" },
        { type: "code", text: 'const age = 20;\n\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}' },
        { type: "output", text: "Adult" },
        { type: "heading", text: "الحلقات" },
        { type: "code", text: 'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "quiz", question: "ما العامل الذي يعني مقارنة القيمة والنوع معًا؟", options: ["=", "===", "+"], answer: 1, explanation: "=== يقارن القيمة والنوع دون تحويل نوع تلقائي." }
      ]
    },
    {
      title: "الدوال والمصفوفات",
      description: "Functions and Arrays",
      blocks: [
        { type: "heading", text: "الدوال" },
        { type: "code", text: 'function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(3, 7));' },
        { type: "output", text: "10" },
        { type: "heading", text: "المصفوفات" },
        { type: "code", text: 'const numbers = [2, 4, 6];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);' },
        { type: "output", text: "[4, 8, 12]" },
        { type: "text", text: "map تُنتج مصفوفة جديدة من نتائج تطبيق دالة على عناصر المصفوفة الأصلية." },
        { type: "quiz", question: "ما الذي تعيده map؟", options: ["مصفوفة جديدة", "صفحة HTML", "ملف قاعدة بيانات"], answer: 0, explanation: "map تنشئ مصفوفة تحتوي على نتائج التحويل." }
      ]
    },
    {
      title: "التعامل مع صفحة الويب",
      description: "DOM and Events",
      blocks: [
        { type: "heading", text: "ما هو DOM؟" },
        { type: "text", text: "يمثل DOM صفحة HTML كشجرة من العناصر يمكن لـ JavaScript قراءتها وتعديلها." },
        { type: "code", text: 'const title = document.querySelector("#title");\nconst button = document.querySelector("#changeButton");\n\nbutton.addEventListener("click", () => {\n  title.textContent = "Welcome!";\n});' },
        { type: "text", text: "يبحث querySelector عن عنصر، بينما addEventListener يربط حدثًا مثل click بدالة تُنفّذ عند وقوعه." },
        { type: "quiz", question: "ما وظيفة addEventListener؟", options: ["ربط حدث بدالة", "حذف JavaScript", "إنشاء قاعدة بيانات"], answer: 0, explanation: "تستخدم للاستجابة لأحداث المستخدم." }
      ]
    }
  ],

  html: [
    {
      title: "بنية صفحة HTML",
      description: "HTML Document Structure",
      blocks: [
        { type: "heading", text: "ما هي HTML؟" },
        { type: "text", text: "HTML لغة توصيف تحدد هيكل ومحتوى الصفحة، وليست لغة برمجة عامة. العناصر تتكون عادةً من وسم بداية ومحتوى ووسم نهاية." },
        { type: "code", text: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>My first page.</p>\n</body>\n</html>' },
        { type: "heading", text: "عناصر مهمة" },
        { type: "list", items: ["h1 إلى h6: العناوين.", "p: فقرة نصية.", "a: رابط.", "img: صورة.", "ul وol وli: القوائم.", "form وinput وbutton: النماذج والتفاعل الأساسي."] },
        { type: "quiz", question: "أي عنصر يُستخدم لإنشاء رابط؟", options: ["<p>", "<a>", "<h1>"], answer: 1, explanation: "العنصر a يُستخدم للروابط." }
      ]
    },
    {
      title: "الروابط والصور والنماذج",
      description: "Links, Images and Forms",
      blocks: [
        { type: "heading", text: "الروابط والصور" },
        { type: "code", text: '<a href="https://example.com">Visit website</a>\n\n<img src="photo.jpg" alt="A landscape">' },
        { type: "text", text: "تحدد href وجهة الرابط، وتحدد src مصدر الصورة. النص البديل alt يساعد المستخدمين الذين لا يستطيعون رؤية الصورة." },
        { type: "heading", text: "النماذج" },
        { type: "code", text: '<form>\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n  <button type="submit">Send</button>\n</form>' },
        { type: "text", text: "يساعد label المستخدم على فهم الحقل. وتوفر خصائص مثل required وtype=email تحققًا أساسيًا من المدخلات." },
        { type: "quiz", question: "لماذا نكتب alt للصورة؟", options: ["للوصولية ووصف الصورة", "لتغيير لون الصفحة", "لتشغيل JavaScript"], answer: 0, explanation: "النص البديل يصف الصورة عند تعذر عرضها أو لقارئات الشاشة." }
      ]
    }
  ],

  css: [
    {
      title: "المحددات والألوان",
      description: "Selectors and Colors",
      blocks: [
        { type: "heading", text: "ما هي CSS؟" },
        { type: "text", text: "تتحكم CSS في مظهر عناصر HTML مثل الألوان والخطوط والمسافات والتخطيط." },
        { type: "code", text: 'body {\n  font-family: Arial, sans-serif;\n  background: #f5f5f5;\n  color: #222;\n}\n\n.card {\n  padding: 20px;\n  border-radius: 12px;\n  background: white;\n}' },
        { type: "heading", text: "أنواع المحددات" },
        { type: "list", items: ["p يستهدف عناصر الفقرة.", ".card يستهدف العناصر ذات الكلاس card.", "#main يستهدف العنصر صاحب المعرّف main.", "يمكن جمع محددات متعددة في قاعدة واحدة."] },
        { type: "quiz", question: "ما الرمز المستخدم قبل اسم class في CSS؟", options: ["#", ".", ":"], answer: 1, explanation: "النقطة . تُستخدم لاستهداف class." }
      ]
    },
    {
      title: "Flexbox وGrid والتجاوب",
      description: "Layouts and Responsive Design",
      blocks: [
        { type: "heading", text: "Flexbox" },
        { type: "code", text: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}' },
        { type: "text", text: "Flexbox مناسب لترتيب العناصر في اتجاه واحد، أفقي أو رأسي." },
        { type: "heading", text: "Grid وMedia Queries" },
        { type: "code", text: '.cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n@media (max-width: 700px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n}' },
        { type: "text", text: "CSS Grid مناسب لتخطيطات الصفوف والأعمدة. وتساعد Media Queries على تكييف التصميم مع أحجام الشاشات المختلفة." },
        { type: "quiz", question: "ما فائدة Media Query؟", options: ["تغيير التخطيط حسب ظروف العرض", "إنشاء متغير JavaScript", "الاتصال بقاعدة البيانات"], answer: 0, explanation: "تُستخدم لتطبيق قواعد CSS وفق عرض الشاشة أو خصائص أخرى." }
      ]
    }
  ],

  sql: [
    {
      title: "SELECT وWHERE",
      description: "Querying Data",
      blocks: [
        { type: "heading", text: "استرجاع البيانات" },
        { type: "text", text: "SQL لغة للاستعلام عن قواعد البيانات العلائقية. SELECT تحدد الأعمدة المطلوبة، وFROM تحدد الجدول، وWHERE تصفي النتائج." },
        { type: "code", text: 'SELECT Name, Age\nFROM Students\nWHERE Age >= 18\nORDER BY Name;' },
        { type: "text", text: "يعرض الاستعلام أسماء وأعمار الطلاب الذين أعمارهم 18 أو أكثر، ويرتبهم حسب الاسم." },
        { type: "heading", text: "عمليات أخرى" },
        { type: "list", items: ["INSERT INTO: إضافة سجلات.", "UPDATE: تعديل سجلات.", "DELETE: حذف سجلات.", "COUNT: حساب عدد السجلات.", "GROUP BY: تجميع النتائج."] },
        { type: "quiz", question: "أي كلمة تُستخدم لتصفية النتائج؟", options: ["WHERE", "ORDER", "TABLE"], answer: 0, explanation: "WHERE تحدد الشروط التي يجب أن تحققها السجلات." }
      ]
    },
    {
      title: "العلاقات وJOIN",
      description: "Relational Databases",
      blocks: [
        { type: "heading", text: "المفاتيح" },
        { type: "text", text: "Primary Key يميّز كل سجل داخل الجدول. Foreign Key يربط جدولًا بجدول آخر من خلال الإشارة إلى مفتاح مناسب." },
        { type: "heading", text: "ربط الجداول" },
        { type: "code", text: 'SELECT Students.Name, Courses.Title\nFROM Students\nINNER JOIN Courses\n  ON Students.CourseId = Courses.Id;' },
        { type: "text", text: "يعيد INNER JOIN الصفوف التي تحقق شرط الربط في الجدولين. توجد أيضًا LEFT JOIN وغيرها بحسب الحاجة." },
        { type: "quiz", question: "ما الغرض من Foreign Key؟", options: ["ربط الجداول", "تنسيق النص", "تغيير لون الصفحة"], answer: 0, explanation: "المفتاح الخارجي يربط سجلًا بسجل في جدول آخر." }
      ]
    }
  ],

  java: [
    {
      title: "المتغيرات والأنواع",
      description: "Variables and Types",
      blocks: [
        { type: "heading", text: "الأنواع الأساسية" },
        { type: "code", text: 'String name = "Ali";\nint age = 21;\ndouble price = 12.5;\nboolean active = true;\n\nSystem.out.println(name);\nSystem.out.println(age);' },
        { type: "output", text: "Ali\n21" },
        { type: "text", text: "Java لغة ذات أنواع ثابتة؛ لذلك يجب تحديد نوع المتغير أو استخدام صيغة مناسبة تسمح للمترجم باستنتاجه." },
        { type: "quiz", question: "ما نوع البيانات المنطقي في Java؟", options: ["boolean", "String", "double"], answer: 0, explanation: "boolean يخزن true أو false." }
      ]
    },
    {
      title: "الحلقات والدوال",
      description: "Loops and Methods",
      blocks: [
        { type: "heading", text: "حلقة for" },
        { type: "code", text: 'for (int i = 1; i <= 3; i++) {\n    System.out.println(i);\n}' },
        { type: "output", text: "1\n2\n3" },
        { type: "heading", text: "Method" },
        { type: "code", text: 'static int square(int number) {\n    return number * number;\n}\n\nSystem.out.println(square(5));' },
        { type: "output", text: "25" },
        { type: "quiz", question: "ما وظيفة return؟", options: ["إعادة نتيجة من الدالة", "إنشاء حلقة", "تعريف كلاس فقط"], answer: 0, explanation: "تعيد return قيمة إلى المكان الذي استدعى الدالة." }
      ]
    },
    {
      title: "الكلاسات والأوبجكتس",
      description: "Object-Oriented Programming",
      blocks: [
        { type: "heading", text: "تعريف كلاس" },
        { type: "code", text: 'class Student {\n    String name;\n\n    Student(String studentName) {\n        name = studentName;\n    }\n\n    void introduce() {\n        System.out.println("I am " + name);\n    }\n}' },
        { type: "text", text: "الـ constructor يهيّئ الكائن عند إنشائه. ويمكن إنشاء نسخة باستخدام new ثم استدعاء الدوال والحقول المتاحة." },
        { type: "code", text: 'Student student = new Student("Sara");\nstudent.introduce();' },
        { type: "output", text: "I am Sara" },
        { type: "quiz", question: "ما وظيفة constructor؟", options: ["تهيئة الكائن", "حذف كل المتغيرات", "تكرار حلقة"], answer: 0, explanation: "يُستدعى الـ constructor عند إنشاء الكائن لتهيئته." }
      ]
    }
  ],

  php: [
    {
      title: "المتغيرات والطباعة",
      description: "PHP Basics",
      blocks: [
        { type: "heading", text: "بداية PHP" },
        { type: "text", text: "تُستخدم PHP غالبًا في الخادم Server لتوليد محتوى صفحات الويب والتعامل مع الطلبات والبيانات." },
        { type: "code", text: '<?php\n$name = "Malak";\n$age = 20;\n\necho $name;\necho $age;\n?>' },
        { type: "output", text: "Malak20" },
        { type: "text", text: "تبدأ أسماء المتغيرات في PHP بعلامة $. ويُستخدم echo لإخراج النصوص والقيم." },
        { type: "quiz", question: "بماذا يبدأ اسم المتغير في PHP؟", options: ["$", "#", "@"], answer: 0, explanation: "تبدأ أسماء المتغيرات في PHP بعلامة الدولار." }
      ]
    },
    {
      title: "الدوال والمصفوفات",
      description: "Functions and Arrays",
      blocks: [
        { type: "heading", text: "الدوال" },
        { type: "code", text: '<?php\nfunction add($a, $b) {\n    return $a + $b;\n}\necho add(3, 4);\n?>' },
        { type: "output", text: "7" },
        { type: "heading", text: "المصفوفات" },
        { type: "code", text: '<?php\n$colors = ["red", "blue"];\necho $colors[0];\n?>' },
        { type: "output", text: "red" },
        { type: "quiz", question: "كيف نصل إلى أول عنصر في المصفوفة؟", options: ["$colors[0]", "$colors[1]", "$colors[first]"], answer: 0, explanation: "يبدأ فهرس المصفوفة في هذا المثال من صفر." }
      ]
    }
  ],

  dart: [
    {
      title: "المتغيرات والدوال",
      description: "Dart Fundamentals",
      blocks: [
        { type: "heading", text: "تعريف المتغيرات" },
        { type: "code", text: 'void main() {\n  String name = "Malak";\n  int age = 20;\n  final city = "Benha";\n  print(name);\n  print(age);\n  print(city);\n}' },
        { type: "output", text: "Malak\n20\nBenha" },
        { type: "text", text: "تستخدم Dart أنواعًا مثل String وint وdouble وbool. تُستخدم final للقيمة التي تُسند مرة واحدة، بينما const للقيم الثابتة وقت الترجمة." },
        { type: "heading", text: "الدوال" },
        { type: "code", text: 'int multiply(int a, int b) {\n  return a * b;\n}\n\nvoid main() {\n  print(multiply(3, 4));\n}' },
        { type: "output", text: "12" },
        { type: "quiz", question: "ما الكلمة التي تعني قيمة لا يعاد إسنادها بعد التهيئة؟", options: ["final", "while", "break"], answer: 0, explanation: "final تسمح بإسناد القيمة مرة واحدة." }
      ]
    },
    {
      title: "الكلاسات وFlutter",
      description: "Classes and Widgets",
      blocks: [
        { type: "heading", text: "Class في Dart" },
        { type: "code", text: 'class Person {\n  final String name;\n  Person(this.name);\n  void greet() {\n    print("Hello $name");\n  }\n}\n\nvoid main() {\n  Person person = Person("Ali");\n  person.greet();\n}' },
        { type: "output", text: "Hello Ali" },
        { type: "text", text: "Flutter إطار عمل لبناء واجهات تطبيقات متعددة المنصات باستخدام Dart. الواجهات تُبنى من Widgets مثل Text وColumn وRow." },
        { type: "code", text: 'Column(\n  children: const [\n    Text("Welcome"),\n    Text("Learn Flutter"),\n  ],\n)' },
        { type: "quiz", question: "ما اللغة المستخدمة عادةً مع Flutter؟", options: ["Dart", "SQL", "CSS"], answer: 0, explanation: "Dart هي اللغة الأساسية لتطوير تطبيقات Flutter." }
      ]
    }
  ],

  typescript: [
    {
      title: "الأنواع والمتغيرات",
      description: "Type Safety",
      blocks: [
        { type: "heading", text: "إضافة أنواع إلى JavaScript" },
        { type: "code", text: 'let username: string = "Ali";\nlet age: number = 21;\nlet isActive: boolean = true;\nconsole.log(username, age, isActive);' },
        { type: "text", text: "TypeScript تضيف نظام أنواع إلى JavaScript وتساعد على اكتشاف كثير من أخطاء الأنواع أثناء التطوير." },
        { type: "quiz", question: "ما النوع المناسب للنص؟", options: ["string", "number", "boolean"], answer: 0, explanation: "string هو نوع النصوص في TypeScript." }
      ]
    },
    {
      title: "Interfaces والدوال",
      description: "Interfaces and Functions",
      blocks: [
        { type: "heading", text: "تعريف Interface" },
        { type: "code", text: 'interface User {\n  name: string;\n  age: number;\n}\n\nfunction greet(user: User): string {\n  return `Hello ${user.name}`;\n}\n\nconsole.log(greet({ name: "Sara", age: 20 }));' },
        { type: "output", text: "Hello Sara" },
        { type: "text", text: "تصف interface شكل الكائن والخصائص المطلوبة، وتحدد الدالة نوع المدخلات ونوع القيمة التي تعيدها." },
        { type: "quiz", question: "ما الغرض من interface؟", options: ["وصف شكل الكائن", "تشغيل قاعدة بيانات تلقائيًا", "تنسيق الصفحة"], answer: 0, explanation: "تحدد interface العقد الخاص بخصائص الكائن وأنواعها." }
      ]
    }
  ],

  go: [
    {
      title: "المتغيرات والدوال",
      description: "Go Fundamentals",
      blocks: [
        { type: "heading", text: "برنامج Go بسيط" },
        { type: "code", text: 'package main\n\nimport "fmt"\n\nfunc main() {\n    name := "Malak"\n    age := 20\n    fmt.Println(name, age)\n}' },
        { type: "output", text: "Malak 20" },
        { type: "text", text: "تستخدم := لتعريف متغير واستنتاج نوعه داخل الدالة. وتستخدم fmt للطباعة والتنسيق." },
        { type: "code", text: 'func add(a int, b int) int {\n    return a + b\n}' },
        { type: "quiz", question: "ما الذي تعيده الدالة في المثال؟", options: ["مجموع العددين", "نصًا دائمًا", "قائمة تلقائيًا"], answer: 0, explanation: "تعيد الدالة مجموع a وb كقيمة من النوع int." }
      ]
    }
  ],

  kotlin: [
    {
      title: "المتغيرات والدوال",
      description: "Kotlin Fundamentals",
      blocks: [
        { type: "heading", text: "val وvar" },
        { type: "code", text: 'fun main() {\n    val name = "Malak"\n    var score = 10\n    score = 15\n    println(name)\n    println(score)\n}' },
        { type: "output", text: "Malak\n15" },
        { type: "text", text: "val لا يسمح بإعادة إسناد المتغير، بينما var يسمح بذلك. وتدعم Kotlin استنتاج الأنواع." },
        { type: "code", text: 'fun square(number: Int): Int {\n    return number * number\n}' },
        { type: "quiz", question: "أي كلمة تسمح بإعادة إسناد المتغير؟", options: ["var", "val", "fun"], answer: 0, explanation: "var يسمح بتغيير القيمة المسندة إلى المتغير." }
      ]
    }
  ],

  swift: [
    {
      title: "المتغيرات والدوال",
      description: "Swift Fundamentals",
      blocks: [
        { type: "heading", text: "let وvar" },
        { type: "code", text: 'let name = "Malak"\nvar score = 10\nscore = 20\nprint(name)\nprint(score)' },
        { type: "output", text: "Malak\n20" },
        { type: "text", text: "تستخدم Swift كلمة let للقيم غير القابلة لإعادة الإسناد، وvar للمتغيرات القابلة للتغيير." },
        { type: "code", text: 'func add(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}\n\nprint(add(2, 5))' },
        { type: "output", text: "7" },
        { type: "quiz", question: "ما الكلمة المستخدمة لتعريف دالة في Swift؟", options: ["func", "method", "define"], answer: 0, explanation: "تُستخدم func لتعريف الدوال في Swift." }
      ]
    }
  ],

  rust: [
    {
      title: "المتغيرات والدوال",
      description: "Rust Fundamentals",
      blocks: [
        { type: "heading", text: "المتغيرات" },
        { type: "code", text: 'fn main() {\n    let name = "Malak";\n    let mut score = 10;\n    score = 20;\n    println!("{name}");\n    println!("{score}");\n}' },
        { type: "output", text: "Malak\n20" },
        { type: "text", text: "المتغيرات في Rust غير قابلة للتغيير افتراضيًا. تسمح mut بتعديل القيمة. وتهتم اللغة بسلامة الذاكرة من خلال قواعد الملكية والاستعارة." },
        { type: "code", text: 'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}' },
        { type: "quiz", question: "ما وظيفة mut؟", options: ["السماح بتغيير القيمة", "إنشاء حلقة", "تعريف ملف"], answer: 0, explanation: "mut تجعل المتغير قابلًا للتغيير." }
      ]
    }
  ],

  cpp: [
    {
      title: "المتغيرات والطباعة",
      description: "C++ Fundamentals",
      blocks: [
        { type: "heading", text: "أول برنامج" },
        { type: "code", text: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "Ali";\n    int age = 20;\n    cout << name << "\\n";\n    cout << age << "\\n";\n    return 0;\n}' },
        { type: "output", text: "Ali\n20" },
        { type: "text", text: "تُستخدم cout للطباعة، وcin لقراءة المدخلات، وint لتخزين الأعداد الصحيحة، وstring للنصوص." },
        { type: "quiz", question: "ما الأداة المستخدمة للطباعة في المثال؟", options: ["cout", "cin", "return"], answer: 0, explanation: "cout ترسل البيانات إلى مخرج البرنامج." }
      ]
    }
  ],

  react: [
    {
      title: "المكونات وJSX",
      description: "Components and JSX",
      blocks: [
        { type: "heading", text: "ما هو React؟" },
        { type: "text", text: "React مكتبة JavaScript لبناء واجهات المستخدم. تُقسّم الواجهة إلى Components يمكن إعادة استخدامها." },
        { type: "code", text: 'function Welcome() {\n  return <h1>Hello, student!</h1>;\n}\n\nexport default Welcome;' },
        { type: "text", text: "JSX صياغة تسمح بكتابة شكل قريب من HTML داخل JavaScript." },
        { type: "quiz", question: "ما الفكرة الأساسية في React؟", options: ["المكونات القابلة لإعادة الاستخدام", "كتابة SQL فقط", "إدارة نظام التشغيل"], answer: 0, explanation: "تُبنى الواجهات في React باستخدام المكونات." }
      ]
    },
    {
      title: "الحالة والأحداث",
      description: "State and Events",
      blocks: [
        { type: "heading", text: "useState" },
        { type: "code", text: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n\nexport default Counter;' },
        { type: "text", text: "useState تسمح للمكوّن بتخزين حالة. استدعاء دالة التحديث يطلب من React إعادة عرض المكوّن بالقيمة الجديدة." },
        { type: "quiz", question: "ما وظيفة setCount؟", options: ["تحديث الحالة", "حذف المكوّن", "إنشاء قاعدة بيانات"], answer: 0, explanation: "تحدّث setCount قيمة الحالة count." }
      ]
    }
  ],

  dotnet: [
    {
      title: "ما هي منصة .NET؟",
      description: "Runtime, SDK and Applications",
      blocks: [
        { type: "heading", text: "المنصة واللغة" },
        { type: "text", text: ".NET منصة تطوير وتشغيل تطبيقات، بينما C# لغة شائعة تُستخدم معها. يوفر .NET مكتبات وأدوات لبناء تطبيقات الويب والخدمات والبرامج." },
        { type: "list", items: ["SDK: أدوات بناء وتطوير التطبيقات.", "Runtime: البيئة التي تشغّل التطبيق.", "ASP.NET Core: إطار لبناء مواقع الويب وواجهات API.", "NuGet: نظام إدارة حزم ومكتبات .NET."] },
        { type: "heading", text: "مثال API بسيط" },
        { type: "code", text: 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\napp.MapGet("/", () => "Hello from .NET");\napp.Run();' },
        { type: "text", text: "ينشئ المثال تطبيق ويب بسيطًا ويربط طلب GET على المسار / بنص استجابة. يحتاج إلى مشروع ASP.NET Core مُعدّ بشكل صحيح." },
        { type: "quiz", question: "أي إطار يُستخدم لبناء Web APIs في .NET؟", options: ["ASP.NET Core", "CSS", "HTML"], answer: 0, explanation: "ASP.NET Core يُستخدم لتطوير تطبيقات الويب وواجهات API." }
      ]
    }
  ]
};

/* Attach lesson content to courses */

courses.forEach((course) => {
  course.lessons = lessonLibrary[course.id] || [];
});

/* =====================================
   Part 3: Course Cards, Search and Filters
===================================== */

function getCategoryName(category) {
  const names = {
    programming: "Programming",
    web: "Web Development",
    database: "Database",
    mobile: "Mobile Development"
  };

  return names[category] || "Programming";
}

function renderCourseCards() {
  if (!languageGrid) return;

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const filteredCourses = courses.filter((course) => {
    const searchableText = [
      course.name,
      course.description,
      course.level,
      getCategoryName(course.category)
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.innerHTML = filteredCourses.map((course) => {
    const lessonTotal = course.lessons.length;

    return `
      <article class="language-card" data-course-id="${escapeHTML(course.id)}">
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

        <p class="card-description">
          ${escapeHTML(course.description)}
        </p>

        <div class="card-meta">
          <span>📚 ${lessonTotal} Lessons</span>
          <span>🎯 ${escapeHTML(course.level)}</span>
        </div>

        <button
          class="card-button"
          type="button"
          data-open-course="${escapeHTML(course.id)}"
        >
          ابدأ التعلّم
          <span aria-hidden="true">←</span>
        </button>
      </article>
    `;
  }).join("");

  if (emptyState) {
    emptyState.hidden = filteredCourses.length !== 0;
  }
}

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

/* Search while typing */

if (searchInput) {
  searchInput.addEventListener("input", renderCourseCards);
}

/* Filter by category */

if (categoryFilter) {
  categoryFilter.addEventListener("change", renderCourseCards);
}

/* Open the selected course */

if (languageGrid) {
  languageGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-course]");

    if (!button) return;

    const courseId = button.dataset.openCourse;

    if (typeof openCourse === "function") {
      openCourse(courseId);
    }
  });
}

/* Initial rendering */

updateCourseStats();
renderCourseCards();

/* =====================================
   Part 4: Lesson Modal and Navigation
===================================== */

function openCourse(courseId) {
  const course = getCourse(courseId);

  if (!course || course.lessons.length === 0) {
    showToast("لا توجد دروس متاحة لهذا الكورس حاليًا.");
    return;
  }

  activeCourseId = courseId;
  activeLessonIndex = 0;

  renderLessonNavigation();
  renderCurrentLesson();

  if (lessonModal) {
    lessonModal.classList.add("open");
    lessonModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function renderLessonNavigation() {
  const course = getActiveCourse();

  if (!course || !lessonNavigation) return;

  lessonNavigation.innerHTML = course.lessons.map((lesson, index) => `
    <button
      type="button"
      class="lesson-nav-button ${index === activeLessonIndex ? "active" : ""}"
      data-lesson-index="${index}"
    >
      <span>${index + 1}</span>
      <span>${escapeHTML(lesson.title)}</span>
    </button>
  `).join("");
}

function renderCurrentLesson() {
  const course = getActiveCourse();

  if (!course || !course.lessons[activeLessonIndex]) return;

  const lesson = course.lessons[activeLessonIndex];

  if (lessonLanguage) {
    lessonLanguage.textContent = course.name;
  }

  if (lessonTitle) {
    lessonTitle.textContent =
      `${activeLessonIndex + 1}. ${lesson.title}`;
  }

  if (lessonDescription) {
    lessonDescription.textContent =
      lesson.description || "تعلّم المفهوم ثم جرّب المثال بنفسك.";
  }

  if (lessonContent) {
    lessonContent.innerHTML = lesson.sections.map((section) => {
      if (section.type === "heading") {
        return `<h3>${escapeHTML(section.text)}</h3>`;
      }

      if (section.type === "text") {
        return `<p>${escapeHTML(section.text)}</p>`;
      }

      if (section.type === "code") {
        return `
          <pre class="lesson-code"><code>${escapeHTML(section.text)}</code></pre>
        `;
      }

      if (section.type === "output") {
        return `
          <div class="lesson-output">
            <strong>الناتج المتوقع:</strong>
            <pre>${escapeHTML(section.text)}</pre>
          </div>
        `;
      }

      if (section.type === "quiz") {
        return `
          <div class="lesson-quiz" data-correct-answer="${section.answer}">
            <h3>اختبر فهمك</h3>
            <p>${escapeHTML(section.question)}</p>

            <div class="quiz-options">
              ${section.options.map((option, index) => `
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

      return "";
    }).join("");
  }

  if (previousLessonButton) {
    previousLessonButton.disabled = activeLessonIndex === 0;
  }

  if (nextLessonButton) {
    nextLessonButton.disabled =
      activeLessonIndex === course.lessons.length - 1;
  }

  if (completeLessonButton) {
    completeLessonButton.textContent = "✓ إكمال الدرس";
  }

  renderLessonNavigation();
}

function closeLessonModal() {
  if (!lessonModal) return;

  lessonModal.classList.remove("open");
  lessonModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (lessonNavigation) {
  lessonNavigation.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-index]");

    if (!button) return;

    const index = Number(button.dataset.lessonIndex);
    const course = getActiveCourse();

    if (!course || !Number.isInteger(index)) return;
    if (index < 0 || index >= course.lessons.length) return;

    activeLessonIndex = index;
    renderCurrentLesson();

    if (lessonContent) {
      lessonContent.scrollTop = 0;
    }
  });
}

if (lessonContent) {
  lessonContent.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-option-index]");

    if (!optionButton) return;

    const quiz = optionButton.closest(".lesson-quiz");

    if (!quiz || optionButton.disabled) return;

    const correctAnswer = Number(quiz.dataset.correctAnswer);
    const selectedAnswer = Number(optionButton.dataset.optionIndex);
    const feedback = quiz.querySelector(".quiz-feedback");
    const options = quiz.querySelectorAll("[data-option-index]");

    options.forEach((option) => {
      option.disabled = true;
      option.classList.remove("correct", "incorrect");
    });

    const isCorrect = selectedAnswer === correctAnswer;

    optionButton.classList.add(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      feedback.textContent = "إجابة صحيحة! أحسنت.";
    } else {
      options[correctAnswer].classList.add("correct");
      feedback.textContent = "مش بالضبط. راجع الإجابة الصحيحة باللون الأخضر.";
    }
  });
}

if (previousLessonButton) {
  previousLessonButton.addEventListener("click", () => {
    if (activeLessonIndex <= 0) return;

    activeLessonIndex--;
    renderCurrentLesson();
  });
}

if (nextLessonButton) {
  nextLessonButton.addEventListener("click", () => {
    const course = getActiveCourse();

    if (!course || activeLessonIndex >= course.lessons.length - 1) {
      return;
    }

    activeLessonIndex++;
    renderCurrentLesson();
  });
}

if (closeLessonButton) {
  closeLessonButton.addEventListener("click", closeLessonModal);
}

if (lessonModal) {
  lessonModal.addEventListener("click", (event) => {
    if (event.target === lessonModal) {
      closeLessonModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLessonModal();
  }
});

/* =====================================
   Part 5: Progress, Theme and Settings
===================================== */

/* Save completed lessons */

const STORAGE_KEY = "csMateCompletedLessons";
const THEME_KEY = "csMateTheme";

function getCompletedLessons() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveCompletedLessons(completed) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completed)
    );
  } catch (error) {
    showToast("تعذّر حفظ التقدم على هذا الجهاز.");
  }
}

function getLessonKey(courseId, lessonIndex) {
  return `${courseId}-${lessonIndex}`;
}

function updateProgressDisplay() {
  const completed = getCompletedLessons();
  const total = getAllLessonsCount();

  const progressElement = $("#progressBar");
  const progressText = $("#progressText");

  const percentage = total === 0
    ? 0
    : Math.round((completed.length / total) * 100);

  if (progressElement) {
    progressElement.style.width = `${percentage}%`;
    progressElement.setAttribute("aria-valuenow", percentage);
  }

  if (progressText) {
    progressText.textContent =
      `${percentage}% — ${completed.length} من ${total} درس`;
  }

  if (completeLessonButton) {
    const key = getLessonKey(activeCourseId, activeLessonIndex);
    completeLessonButton.textContent = completed.includes(key)
      ? "✓ تم إكمال الدرس"
      : "✓ إكمال الدرس";
  }
}

if (completeLessonButton) {
  completeLessonButton.addEventListener("click", () => {
    if (!activeCourseId) return;

    const completed = getCompletedLessons();
    const key = getLessonKey(activeCourseId, activeLessonIndex);

    if (!completed.includes(key)) {
      completed.push(key);
      saveCompletedLessons(completed);
      showToast("أحسنت! تم تسجيل إكمال الدرس.");
    } else {
      showToast("هذا الدرس مكتمل بالفعل.");
    }

    updateProgressDisplay();
  });
}

/* Theme toggle */

function applyTheme(theme) {
  const selectedTheme = theme === "light" ? "light" : "dark";

  document.documentElement.dataset.theme = selectedTheme;

  const themeButton = $("#themeToggle");

  if (themeButton) {
    themeButton.textContent =
      selectedTheme === "dark" ? "☀️" : "🌙";

    themeButton.setAttribute(
      "aria-label",
      selectedTheme === "dark"
        ? "تفعيل الوضع النهاري"
        : "تفعيل الوضع الليلي"
    );
  }

  try {
    localStorage.setItem(THEME_KEY, selectedTheme);
  } catch (error) {
    // The theme still works for the current page.
  }
}

let savedTheme = "dark";

try {
  savedTheme = localStorage.getItem(THEME_KEY) || "dark";
} catch (error) {
  savedTheme = "dark";
}

applyTheme(savedTheme);

const themeToggle = $("#themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme || "dark";

    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

/* Interface language toggle */

const languageToggle = $("#languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentInterfaceLanguage =
      currentInterfaceLanguage === "ar" ? "en" : "ar";

    const isEnglish = currentInterfaceLanguage === "en";

    document.documentElement.lang = isEnglish ? "en" : "ar";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";

    languageToggle.textContent = isEnglish ? "AR" : "EN";

    showToast(
      isEnglish
        ? "The page direction changed. Some lesson content remains in Arabic."
        : "تم تغيير اتجاه الصفحة. بعض محتوى الدروس ما زال بالعربية."
    );
  });
}

/* Refresh progress when the page opens */

updateProgressDisplay();

/* Refresh progress after changing lessons */

const originalRenderCurrentLesson = renderCurrentLesson;

renderCurrentLesson = function () {
  originalRenderCurrentLesson();
  updateProgressDisplay();
};
