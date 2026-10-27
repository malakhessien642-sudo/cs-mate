
"use strict";

/* =========================================
   CS MATE — JAVASCRIPT COURSE
   Lessons 1–5
========================================= */

const JAVASCRIPT_LESSONS = [
  {
    id: 1,
    title: {
      ar: "مقدمة في JavaScript",
      en: "Introduction to JavaScript"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "JavaScript لغة برمجة تُستخدم لإضافة التفاعل إلى صفحات الويب. تعمل مع HTML لبناء الهيكل، ومع CSS لتنسيق الشكل، بينما تتحكم JavaScript في السلوك والتفاعل.",
      en: "JavaScript is a programming language used to add interactivity to web pages. HTML defines the structure, CSS controls the appearance, and JavaScript handles behavior."
    },
    code: `console.log("Hello, JavaScript!");
alert("Welcome to CS MATE");`,
    codeExplanation: {
      ar: [
        "console.log() تطبع رسالة في وحدة التحكم Console.",
        "alert() تعرض نافذة تنبيه للمستخدم."
      ],
      en: [
        "console.log() prints a message in the console.",
        "alert() displays a message dialog."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة اسم الدالة بطريقة مختلفة مثل Console.log.",
        "نسيان علامات الاقتباس حول النصوص."
      ],
      en: [
        "Using incorrect capitalization in function names.",
        "Forgetting quotation marks around strings."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يطبع اسمك ورسالة ترحيب في Console.",
      en: "Write a program that prints your name and a welcome message."
    },
    summary: {
      ar: "JavaScript تضيف التفاعل للمواقع. استخدمي console.log() لعرض النتائج في Console.",
      en: "JavaScript adds interactivity to websites. Use console.log() to display output."
    }
  },

  {
    id: 2,
    title: {
      ar: "المتغيرات وأنواع البيانات",
      en: "Variables and Data Types"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "المتغير مكان لتخزين قيمة. نستخدم let للقيم التي قد تتغير، وconst للقيم التي لا نعيد إسنادها. من أنواع البيانات String وNumber وBoolean وUndefined وNull.",
      en: "A variable stores a value. Use let for values that may be reassigned and const for bindings that should not be reassigned. Common types include String, Number, Boolean, Undefined, and Null."
    },
    code: `let studentName = "Malak";
let age = 19;
const isStudent = true;

console.log(studentName);
console.log(age);
console.log(isStudent);
console.log(typeof age);`,
    codeExplanation: {
      ar: [
        "studentName متغير يحتوي على نص.",
        "age يحتوي على رقم.",
        "isStudent يحتوي على قيمة منطقية Boolean.",
        "typeof يعرض نوع القيمة."
      ],
      en: [
        "studentName stores a string.",
        "age stores a number.",
        "isStudent stores a Boolean.",
        "typeof returns the type of a value."
      ]
    },
    commonMistakes: {
      ar: [
        "إعادة إسناد قيمة إلى const.",
        "نسيان علامات الاقتباس حول النصوص."
      ],
      en: [
        "Trying to reassign a const binding.",
        "Forgetting quotation marks around strings."
      ]
    },
    exercise: {
      ar: "أنشئي متغيرات للاسم والسن والدرجة، ثم اطبعيها.",
      en: "Create variables for a name, age, and grade, then print them."
    },
    summary: {
      ar: "استخدمي let وconst لتعريف المتغيرات، وتعلمي التمييز بين أنواع البيانات.",
      en: "Use let and const to declare variables and learn the common data types."
    }
  },

  {
    id: 3,
    title: {
      ar: "العمليات الحسابية والمقارنة",
      en: "Operators and Comparisons"
    },
    duration: "25 min",
    level: "Beginner",
    explanation: {
      ar: "تسمح العمليات الحسابية بإجراء الجمع والطرح والضرب والقسمة وباقي القسمة. وتستخدم عمليات المقارنة لمقارنة القيم وإنتاج true أو false.",
      en: "Arithmetic operators perform calculations. Comparison operators compare values and return true or false."
    },
    code: `let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b);
console.log(a === b);`,
    codeExplanation: {
      ar: [
        "+ للجمع، و- للطرح، و* للضرب، و/ للقسمة.",
        "% يعرض باقي القسمة.",
        "> يقارن إذا كانت القيمة الأولى أكبر.",
        "=== يقارن القيمة والنوع معًا."
      ],
      en: [
        "Arithmetic operators perform basic calculations.",
        "% returns the remainder.",
        "> checks whether the left value is greater.",
        "=== compares both value and type."
      ]
    },
    commonMistakes: {
      ar: [
        "الخلط بين = للإسناد و=== للمقارنة.",
        "استخدام == دون فهم التحويل التلقائي للأنواع."
      ],
      en: [
        "Confusing assignment = with comparison ===.",
        "Using == without understanding type coercion."
      ]
    },
    exercise: {
      ar: "خزني رقمين في متغيرين واطبعي ناتج العمليات الحسابية والمقارنة بينهما.",
      en: "Store two numbers and print their arithmetic and comparison results."
    },
    summary: {
      ar: "العمليات الحسابية تحسب القيم، وعمليات المقارنة تنتج true أو false.",
      en: "Arithmetic operators calculate values; comparison operators return true or false."
    }
  },

  {
    id: 4,
    title: {
      ar: "استقبال البيانات والتحويل بين الأنواع",
      en: "Input and Type Conversion"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "تسمح prompt() باستقبال إدخال من المستخدم في بيئة المتصفح. القيمة الناتجة تكون نصًا عادةً، لذلك قد نستخدم Number() لتحويلها إلى رقم.",
      en: "In a browser, prompt() can collect user input. Its result is usually a string, so Number() can convert numeric input into a number."
    },
    code: `const input = prompt("Enter your age:");
const age = Number(input);

if (input !== null && input.trim() !== "" &&
    Number.isFinite(age)) {
  console.log("Next year:", age + 1);
} else {
  console.log("Please enter a valid number.");
}`,
    codeExplanation: {
      ar: [
        "prompt() تطلب إدخالًا من المستخدم.",
        "Number() تحاول تحويل النص إلى رقم.",
        "Number.isFinite() تتحقق من أن الناتج رقم محدود وصالح.",
        "التحقق من null والنص الفارغ يمنع اعتبار الإلغاء أو الإدخال الفارغ عمرًا صالحًا."
      ],
      en: [
        "prompt() asks the user for input.",
        "Number() attempts to convert the input to a number.",
        "Number.isFinite() checks whether the result is a finite number.",
        "The null and empty-string checks reject cancelled or blank input."
      ]
    },
    commonMistakes: {
      ar: [
        "جمع نص ورقم دون تحويل النص.",
        "نسيان أن prompt() قد تعيد null إذا ألغى المستخدم."
      ],
      en: [
        "Adding a string to a number without conversion.",
        "Forgetting that prompt() may return null when cancelled."
      ]
    },
    exercise: {
      ar: "اطلبي من المستخدم إدخال رقمين، ثم حوّليهما إلى أرقام واطبعي مجموعهما.",
      en: "Ask the user for two values, convert them to numbers, and print their sum."
    },
    summary: {
      ar: "إدخال المستخدم من prompt() يكون نصًا عادةً. تحققي من الإدخال قبل استخدامه.",
      en: "Input from prompt() is usually a string. Validate it before using it."
    }
  },

  {
    id: 5,
    title: {
      ar: "الشروط if وelse",
      en: "Conditional Statements"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "تسمح الشروط بتنفيذ كود مختلف حسب تحقق شرط معين. نستخدم if للتحقق، وelse if لاختبار شرط آخر، وelse للحالة المتبقية.",
      en: "Conditional statements run different code depending on whether conditions are true. Use if, else if, and else to define the branches."
    },
    code: `let grade = 85;

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 75) {
  console.log("Very Good");
} else if (grade >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}`,
    codeExplanation: {
      ar: [
        "if تختبر الشرط الأول.",
        "else if تختبر شرطًا آخر إذا لم يتحقق السابق.",
        "else تنفذ عند عدم تحقق أي شرط سابق."
      ],
      en: [
        "if checks the first condition.",
        "else if checks another condition when previous ones fail.",
        "else runs when no previous condition is true."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان الأقواس المعقوفة عند تنظيم الكود.",
        "ترتيب الشروط بطريقة تجعل شرطًا عامًا يسبق شرطًا أكثر تحديدًا."
      ],
      en: [
        "Using braces incorrectly.",
        "Placing a broad condition before a more specific condition."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يحدد إذا كانت الدرجة نجاحًا أم رسوبًا، ثم يطبع التقدير.",
      en: "Write a program that determines pass or fail and prints a grade category."
    },
    summary: {
      ar: "الشروط تجعل البرنامج يتخذ قرارات بناءً على القيم.",
      en: "Conditionals allow programs to make decisions based on values."
    }
  }
];

/* =========================================
   CS MATE — JAVASCRIPT COURSE
   Lessons 6–10
========================================= */

JAVASCRIPT_LESSONS.push(

  {
    id: 6,
    title: {
      ar: "جملة switch",
      en: "Switch Statement"
    },
    duration: "25 min",
    level: "Beginner",
    explanation: {
      ar: "تُستخدم switch لاختيار مسار من عدة مسارات بناءً على قيمة تعبير. كل case تمثل قيمة محتملة، وتُستخدم break للخروج من switch بعد تنفيذ الحالة.",
      en: "The switch statement selects a branch based on an expression. Each case represents a possible value, and break exits the switch."
    },
    code: `const day = 3;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown day");
}`,
    codeExplanation: {
      ar: [
        "switch تفحص قيمة المتغير day.",
        "case 3 تنفذ لأن قيمة day تساوي 3.",
        "break تمنع الانتقال إلى الحالات التالية.",
        "default تنفذ إذا لم تتطابق أي حالة."
      ],
      en: [
        "switch evaluates the value of day.",
        "case 3 runs because day equals 3.",
        "break exits the switch statement.",
        "default runs when no case matches."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان break مما قد يؤدي إلى تنفيذ الحالات التالية.",
        "نسيان default عند الحاجة إلى حالة احتياطية."
      ],
      en: [
        "Forgetting break can cause fall-through.",
        "Forgetting a default case when a fallback is needed."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يستخدم رقمًا من 1 إلى 7 لطباعة اسم يوم من أيام الأسبوع.",
      en: "Use a number from 1 to 7 to print a day of the week."
    },
    summary: {
      ar: "switch مناسبة للاختيار بين حالات متعددة، بينما default تمثل الحالة الاحتياطية.",
      en: "switch is useful for choosing among multiple cases, with default as a fallback."
    }
  },

  {
    id: 7,
    title: {
      ar: "الحلقات التكرارية",
      en: "Loops: for and while"
    },
    duration: "35 min",
    level: "Beginner",
    explanation: {
      ar: "تسمح الحلقات بتكرار تنفيذ الكود. تستخدم for غالبًا عندما نعرف عدد التكرارات، بينما يمكن استخدام while طالما أن الشرط صحيح.",
      en: "Loops repeat code. A for loop is commonly used when the iteration count is known, while a while loop repeats as long as its condition is true."
    },
    code: `for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

let number = 1;

while (number <= 3) {
  console.log(number);
  number++;
}`,
    codeExplanation: {
      ar: [
        "let i = 1 تحدد قيمة البداية.",
        "i <= 5 هو شرط استمرار الحلقة.",
        "i++ تزيد قيمة i بمقدار واحد.",
        "while تستمر طالما أن الشرط صحيح."
      ],
      en: [
        "let i = 1 sets the starting value.",
        "i <= 5 is the loop condition.",
        "i++ increases i by one.",
        "while repeats while its condition is true."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان تحديث المتغير داخل while مما قد يسبب حلقة لا نهائية.",
        "كتابة شرط توقف غير صحيح."
      ],
      en: [
        "Forgetting to update a while-loop variable can cause an infinite loop.",
        "Using an incorrect stopping condition."
      ]
    },
    exercise: {
      ar: "اطبعي الأعداد من 1 إلى 10 باستخدام for، ثم الأعداد الزوجية باستخدام while.",
      en: "Print numbers from 1 to 10 using for, then print even numbers using while."
    },
    summary: {
      ar: "استخدمي for وwhile لتكرار الأوامر مع التأكد من وجود شرط توقف مناسب.",
      en: "Use for and while to repeat instructions with a valid stopping condition."
    }
  },

  {
    id: 8,
    title: {
      ar: "الدوال Functions",
      en: "Functions"
    },
    duration: "35 min",
    level: "Beginner",
    explanation: {
      ar: "الدالة مجموعة أوامر تؤدي مهمة محددة ويمكن إعادة استخدامها. يمكن للدالة استقبال Parameters وإرجاع نتيجة باستخدام return.",
      en: "A function is a reusable block of code that performs a task. It can accept parameters and return a result using return."
    },
    code: `function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result);

function greet(name) {
  console.log("Hello, " + name);
}

greet("Malak");`,
    codeExplanation: {
      ar: [
        "function تُستخدم لتعريف دالة.",
        "a وb هما Parameters تستقبل الدالة من خلالها القيم.",
        "return تعيد ناتج الجمع.",
        "add(5, 3) تستدعي الدالة بالقيمتين 5 و3."
      ],
      en: [
        "function declares a function.",
        "a and b are parameters.",
        "return sends the result back to the caller.",
        "add(5, 3) calls the function with two arguments."
      ]
    },
    commonMistakes: {
      ar: [
        "الخلط بين تعريف الدالة واستدعائها.",
        "الاعتقاد أن console.log يعوض عن return؛ فلكل منهما وظيفة مختلفة."
      ],
      en: [
        "Confusing function declaration with function invocation.",
        "Confusing console.log output with a returned value."
      ]
    },
    exercise: {
      ar: "اكتبي دالة تستقبل رقمين وتعيد الرقم الأكبر بينهما.",
      en: "Write a function that accepts two numbers and returns the larger one."
    },
    summary: {
      ar: "الدوال تنظم الكود وتسمح بإعادة استخدامه، ويمكنها استقبال مدخلات وإرجاع نتائج.",
      en: "Functions organize reusable code and can accept inputs and return results."
    }
  },

  {
    id: 9,
    title: {
      ar: "نطاق المتغيرات Scope",
      en: "Variable Scope"
    },
    duration: "30 min",
    level: "Intermediate",
    explanation: {
      ar: "النطاق يحدد الأماكن التي يمكن الوصول فيها إلى المتغير. المتغير المعرّف داخل دالة يكون محليًا لها، والمتغير المعرّف داخل كتلة باستخدام let أو const يكون متاحًا داخل هذه الكتلة.",
      en: "Scope determines where a variable can be accessed. Function-local variables belong to their function, and let or const declarations inside a block are limited to that block."
    },
    code: `const globalMessage = "Hello";

function showMessage() {
  const localMessage = "Welcome";
  console.log(globalMessage);
  console.log(localMessage);
}

showMessage();

if (true) {
  let score = 90;
  console.log(score);
}

// score is not accessible here`,
    codeExplanation: {
      ar: [
        "globalMessage معرّف خارج الدالة ويمكن الوصول إليه داخلها.",
        "localMessage متاح داخل الدالة فقط.",
        "score متاح داخل كتلة if فقط.",
        "محاولة الوصول إلى score خارج الكتلة تسبب ReferenceError."
      ],
      en: [
        "globalMessage is accessible inside the function.",
        "localMessage is available only inside the function.",
        "score is accessible only inside the if block.",
        "Accessing score outside that block causes a ReferenceError."
      ]
    },
    commonMistakes: {
      ar: [
        "محاولة استخدام متغير خارج نطاقه.",
        "الخلط بين نطاق الكتلة ونطاق الدالة."
      ],
      en: [
        "Accessing a variable outside its scope.",
        "Confusing block scope with function scope."
      ]
    },
    exercise: {
      ar: "أنشئي متغيرًا داخل دالة وآخر خارجها، واختبري أماكن الوصول لكل منهما.",
      en: "Create one variable inside a function and another outside, then test their accessibility."
    },
    summary: {
      ar: "فهم Scope يساعد على تنظيم المتغيرات وتجنب أخطاء الوصول إليها.",
      en: "Understanding scope helps organize variables and prevent access errors."
    }
  },

  {
    id: 10,
    title: {
      ar: "المصفوفات Arrays",
      en: "Arrays"
    },
    duration: "35 min",
    level: "Beginner",
    explanation: {
      ar: "المصفوفة بنية بيانات تخزن مجموعة من القيم في متغير واحد. يبدأ الفهرس Index من الصفر، ويمكن الوصول إلى العناصر وتعديلها وإضافة عناصر جديدة.",
      en: "An array stores multiple values in one variable. Indexing starts at zero, and elements can be accessed, modified, and added."
    },
    code: `const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);

fruits[1] = "Mango";
fruits.push("Grape");

console.log(fruits);
console.log(fruits.length);`,
    codeExplanation: {
      ar: [
        "fruits تحتوي على ثلاثة عناصر.",
        "fruits[0] تصل إلى العنصر الأول.",
        "يمكن تعديل عنصر بتحديد الفهرس.",
        "push() تضيف عنصرًا إلى نهاية المصفوفة.",
        "length تعرض عدد العناصر."
      ],
      en: [
        "fruits contains three elements.",
        "fruits[0] accesses the first element.",
        "An element can be changed using its index.",
        "push() adds an element to the end.",
        "length returns the number of elements."
      ]
    },
    commonMistakes: {
      ar: [
        "الاعتقاد أن فهرس أول عنصر هو 1 بدلًا من 0.",
        "استخدام فهرس غير موجود في المصفوفة."
      ],
      en: [
        "Assuming the first index is 1 instead of 0.",
        "Using an index that does not exist."
      ]
    },
    exercise: {
      ar: "أنشئي مصفوفة تحتوي على خمسة أسماء، واطبعي الاسم الأول والأخير وعدد العناصر.",
      en: "Create an array of five names and print the first name, last name, and array length."
    },
    summary: {
      ar: "المصفوفات تخزن عدة قيم، ويبدأ الفهرس من صفر، وتساعد push() على إضافة العناصر.",
      en: "Arrays store multiple values, use zero-based indexing, and support adding items with push()."
    }
  }

);

window.JAVASCRIPT_LESSONS = JAVASCRIPT_LESSONS;

/* =========================================
   CS MATE — JAVASCRIPT COURSE
   Lessons 11–15
========================================= */

JAVASCRIPT_LESSONS.push(

  {
    id: 11,
    title: {
      ar: "طرق التعامل مع المصفوفات",
      en: "Array Methods"
    },
    duration: "35 min",
    level: "Intermediate",
    explanation: {
      ar: "توفر JavaScript طرقًا جاهزة للتعامل مع المصفوفات. من أشهرها push وpop وshift وunshift وmap وfilter وfind. بعض الطرق تعدّل المصفوفة الأصلية، بينما تنشئ طرق أخرى مصفوفة جديدة.",
      en: "JavaScript provides built-in array methods such as push, pop, shift, unshift, map, filter, and find. Some mutate the original array, while others return new arrays."
    },
    code: `const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const found = numbers.find(n => n > 3);
console.log(found);`,
    codeExplanation: {
      ar: [
        "push() تضيف عنصرًا إلى نهاية المصفوفة الأصلية.",
        "map() تنشئ مصفوفة جديدة بعد تطبيق العملية على كل عنصر.",
        "filter() تعيد العناصر التي تحقق الشرط.",
        "find() تعيد أول عنصر يحقق الشرط، أو undefined إذا لم تجد عنصرًا."
      ],
      en: [
        "push() adds an item to the original array.",
        "map() creates a new array from transformed elements.",
        "filter() returns elements that satisfy a condition.",
        "find() returns the first matching element or undefined."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان return داخل دالة map عند استخدام الأقواس المعقوفة.",
        "الخلط بين find التي تعيد عنصرًا واحدًا وfilter التي تعيد مصفوفة."
      ],
      en: [
        "Forgetting return inside a braced map callback.",
        "Confusing find, which returns one item, with filter, which returns an array."
      ]
    },
    exercise: {
      ar: "أنشئي مصفوفة أرقام، واستخدمي filter لاستخراج الأرقام الأكبر من 10، ثم map لمضاعفتها.",
      en: "Create a number array, filter values greater than 10, then double them with map."
    },
    summary: {
      ar: "طرق المصفوفات تسهّل معالجة البيانات دون الحاجة إلى كتابة الحلقات في كل مرة.",
      en: "Array methods simplify data processing without writing loops every time."
    }
  },

  {
    id: 12,
    title: {
      ar: "النصوص وطرق التعامل معها",
      en: "Strings and String Methods"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "النصوص Strings تمثل البيانات المكتوبة. توفر JavaScript طرقًا مثل trim وtoUpperCase وtoLowerCase وincludes وslice للبحث عن النصوص وتعديل طريقة عرضها واستخراج أجزاء منها.",
      en: "Strings represent text. JavaScript provides methods such as trim, toUpperCase, toLowerCase, includes, and slice for inspecting and extracting text."
    },
    code: `const message = "  Hello JavaScript  ";

console.log(message.trim());
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("JavaScript"));
console.log(message.slice(2, 7));

const name = "Malak";
console.log(\`Hello, \${name}!\`);`,
    codeExplanation: {
      ar: [
        "trim() تزيل المسافات من بداية النص ونهايته.",
        "toUpperCase() تحول الحروف إلى أحرف كبيرة.",
        "toLowerCase() تحول الحروف إلى أحرف صغيرة.",
        "includes() تتحقق من وجود جزء معين داخل النص.",
        "slice() تستخرج جزءًا من النص.",
        "Template literals تستخدم العلامة الخلفية وتسمح بإدراج المتغيرات."
      ],
      en: [
        "trim() removes whitespace from both ends.",
        "toUpperCase() converts letters to uppercase.",
        "toLowerCase() converts letters to lowercase.",
        "includes() checks whether a substring exists.",
        "slice() extracts part of a string.",
        "Template literals use backticks and support interpolation."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان أن النصوص لا تتغير في مكانها؛ الطرق تعيد نصًا جديدًا.",
        "استخدام علامات اقتباس عادية بدل العلامة الخلفية عند إدراج المتغيرات."
      ],
      en: [
        "Forgetting that strings are immutable and methods return new strings.",
        "Using regular quotes instead of backticks for interpolation."
      ]
    },
    exercise: {
      ar: "اطلبي من المستخدم اسمه، ثم أزيلي المسافات الزائدة واطبعي رسالة ترحيب باستخدام Template Literal.",
      en: "Ask for a name, trim extra spaces, and print a welcome message using a template literal."
    },
    summary: {
      ar: "طرق النصوص تساعد على البحث عن البيانات النصية واستخراجها وتنسيقها.",
      en: "String methods help inspect, extract, and format text."
    }
  },

  {
    id: 13,
    title: {
      ar: "الكائنات Objects",
      en: "Objects"
    },
    duration: "35 min",
    level: "Beginner",
    explanation: {
      ar: "الكائن Object يخزن البيانات في صورة خصائص Properties وقيم. يمكن الوصول إلى الخصائص باستخدام النقطة أو الأقواس المربعة، كما يمكن إضافة خصائص وتعديلها.",
      en: "An object stores data as properties and values. Properties can be accessed with dot notation or bracket notation, and they can be added or updated."
    },
    code: `const student = {
  name: "Malak",
  age: 19,
  major: "Computer Science"
};

console.log(student.name);
console.log(student["major"]);

student.age = 20;
student.grade = "A";

console.log(student);`,
    codeExplanation: {
      ar: [
        "student كائن يحتوي على ثلاث خصائص.",
        "النقطة تُستخدم للوصول إلى خاصية معروفة مثل student.name.",
        "الأقواس المربعة تسمح باستخدام اسم الخاصية كنص.",
        "يمكن تعديل خاصية أو إضافة خاصية جديدة."
      ],
      en: [
        "student is an object with three properties.",
        "Dot notation accesses a known property.",
        "Bracket notation accesses a property by its string key.",
        "Properties can be updated or added."
      ]
    },
    commonMistakes: {
      ar: [
        "الخلط بين اسم الخاصية والنص الذي يمثل اسمها.",
        "استخدام نقطة للوصول إلى خاصية يكون اسمها محفوظًا داخل متغير."
      ],
      en: [
        "Confusing a property name with a string containing its name.",
        "Using dot notation when the property key is stored in a variable."
      ]
    },
    exercise: {
      ar: "أنشئي كائنًا لكتاب يحتوي على العنوان والمؤلف والسعر، ثم اطبعي بياناته وعدّلي السعر.",
      en: "Create a book object with title, author, and price, then print its data and update the price."
    },
    summary: {
      ar: "الكائنات تنظم البيانات المرتبطة في خصائص يمكن الوصول إليها وتعديلها.",
      en: "Objects organize related data into accessible and editable properties."
    }
  },

  {
    id: 14,
    title: {
      ar: "الكائنات والمصفوفات المتداخلة",
      en: "Nested Arrays and Objects"
    },
    duration: "35 min",
    level: "Intermediate",
    explanation: {
      ar: "يمكن أن تحتوي المصفوفة على كائنات، ويمكن للكائن أن يحتوي على مصفوفات أو كائنات أخرى. تساعد هذه البنية على تمثيل بيانات حقيقية مثل قائمة الطلاب ودرجاتهم.",
      en: "Arrays can contain objects, and objects can contain arrays or other objects. This structure models real-world data such as students and their grades."
    },
    code: `const students = [
  {
    name: "Ali",
    grades: [80, 90, 85]
  },
  {
    name: "Sara",
    grades: [95, 88, 92]
  }
];

console.log(students[0].name);
console.log(students[1].grades[0]);

students.forEach(student => {
  console.log(student.name);
  console.log(student.grades);
});`,
    codeExplanation: {
      ar: [
        "students مصفوفة تحتوي على كائنين.",
        "students[0].name تصل إلى اسم الطالب الأول.",
        "students[1].grades[0] تصل إلى أول درجة للطالب الثاني.",
        "forEach() تنفذ دالة لكل عنصر في المصفوفة."
      ],
      en: [
        "students is an array containing two objects.",
        "students[0].name accesses the first student's name.",
        "students[1].grades[0] accesses the second student's first grade.",
        "forEach() runs a callback for each array element."
      ]
    },
    commonMistakes: {
      ar: [
        "الخطأ في ترتيب الأقواس والفهارس عند الوصول إلى البيانات المتداخلة.",
        "نسيان أن الفهرسة تبدأ من صفر."
      ],
      en: [
        "Using incorrect nesting or indexes when accessing data.",
        "Forgetting that array indexes start at zero."
      ]
    },
    exercise: {
      ar: "أنشئي مصفوفة من ثلاثة منتجات، بحيث يحتوي كل منتج على الاسم والسعر، ثم اطبعي أسماء المنتجات.",
      en: "Create an array of three products with names and prices, then print their names."
    },
    summary: {
      ar: "يمكن دمج المصفوفات والكائنات لتمثيل مجموعات بيانات أكثر تعقيدًا.",
      en: "Nested arrays and objects represent more complex data structures."
    }
  },

  {
    id: 15,
    title: {
      ar: "الأرقام والتواريخ وMath",
      en: "Numbers, Dates, and Math"
    },
    duration: "30 min",
    level: "Intermediate",
    explanation: {
      ar: "توفر JavaScript الكائن Math لعمليات رياضية مثل التقريب والجذور والأعداد العشوائية، كما يوفر Date التعامل مع التاريخ والوقت.",
      en: "JavaScript provides Math for operations such as rounding, square roots, and random numbers, while Date handles dates and times."
    },
    code: `console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.sqrt(81));

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());`,
    codeExplanation: {
      ar: [
        "Math.round() تقرب إلى أقرب عدد صحيح.",
        "Math.floor() تقرب إلى الأسفل.",
        "Math.ceil() تقرب إلى الأعلى.",
        "Math.sqrt() تحسب الجذر التربيعي.",
        "Math.random() تنتج رقمًا عشوائيًا بين صفر وواحد، والقانون المستخدم هنا ينتج عددًا صحيحًا من 1 إلى 10.",
        "getMonth() تعيد الشهر من 0 إلى 11؛ لذلك أضفنا 1."
      ],
      en: [
        "Math.round() rounds to the nearest integer.",
        "Math.floor() rounds down.",
        "Math.ceil() rounds up.",
        "Math.sqrt() calculates the square root.",
        "Math.random() returns a value from zero inclusive to one exclusive; this formula produces an integer from 1 to 10.",
        "getMonth() returns values from 0 to 11, so we add 1."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان أن Math.random() لا تصل إلى 1.",
        "نسيان أن getMonth() تبدأ من صفر."
      ],
      en: [
        "Forgetting that Math.random() never returns 1.",
        "Forgetting that getMonth() is zero-based."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا ينتج رقمًا عشوائيًا من 1 إلى 100، ثم يطبع السنة والشهر الحاليين.",
      en: "Generate a random integer from 1 to 100, then print the current year and month."
    },
    summary: {
      ar: "Math للعمليات الرياضية، وDate للتعامل مع التاريخ والوقت.",
      en: "Use Math for mathematical operations and Date for date and time."
    }
  }

);

/* =========================================
   CS MATE — JAVASCRIPT COURSE
   Lessons 16–20
========================================= */

JAVASCRIPT_LESSONS.push(

  {
    id: 16,
    title: {
      ar: "التعامل مع DOM",
      en: "Document Object Model (DOM)"
    },
    duration: "40 min",
    level: "Intermediate",
    explanation: {
      ar: "DOM هو تمثيل صفحة HTML في صورة شجرة من العناصر يمكن لـ JavaScript قراءتها وتعديلها. يمكننا اختيار العناصر وتغيير النصوص والأنماط وإنشاء عناصر جديدة.",
      en: "The DOM represents an HTML document as a tree of objects that JavaScript can read and modify. We can select elements, change text and styles, and create new elements."
    },
    code: `// HTML: <h1 id="title">Hello</h1>

const title = document.getElementById("title");

if (title) {
  title.textContent = "Welcome to CS MATE";
  title.style.color = "blue";
}

const paragraph = document.createElement("p");
paragraph.textContent = "Learning JavaScript";
document.body.appendChild(paragraph);`,
    codeExplanation: {
      ar: [
        "getElementById() تختار عنصرًا باستخدام قيمة id.",
        "textContent تغيّر النص الموجود داخل العنصر.",
        "style.color تغيّر لون النص.",
        "createElement() تنشئ عنصر HTML جديدًا.",
        "appendChild() تضيف العنصر إلى الصفحة."
      ],
      en: [
        "getElementById() selects an element by its ID.",
        "textContent changes the element's text.",
        "style.color changes the text color.",
        "createElement() creates a new HTML element.",
        "appendChild() adds the element to the page."
      ]
    },
    commonMistakes: {
      ar: [
        "محاولة تعديل عنصر قبل وجوده في الصفحة.",
        "نسيان أن id يجب أن يطابق العنصر المطلوب."
      ],
      en: [
        "Trying to modify an element that does not exist.",
        "Using an ID that does not match the HTML element."
      ]
    },
    exercise: {
      ar: "أنشئي صفحة تحتوي على عنوان وزر، واجعلي JavaScript تغيّر نص العنوان عند الضغط على الزر.",
      en: "Create a page with a heading and a button, then change the heading text using JavaScript."
    },
    summary: {
      ar: "DOM يسمح لـ JavaScript بتغيير محتوى صفحة الويب وعناصرها.",
      en: "The DOM lets JavaScript change webpage content and elements."
    }
  },

  {
    id: 17,
    title: {
      ar: "الأحداث Events",
      en: "JavaScript Events"
    },
    duration: "35 min",
    level: "Intermediate",
    explanation: {
      ar: "الأحداث هي أفعال أو تغييرات تحدث في الصفحة، مثل الضغط على زر أو الكتابة في حقل. نستخدم addEventListener() لتنفيذ دالة عند وقوع حدث معين.",
      en: "Events are actions or changes on a page, such as clicking a button or typing into a field. addEventListener() runs a callback when a specified event occurs."
    },
    code: `// HTML: <button id="myButton">Click me</button>
// HTML: <p id="message"></p>

const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Button clicked!";
  });
}`,
    codeExplanation: {
      ar: [
        "نختار الزر والفقرة باستخدام id.",
        "addEventListener() تربط دالة بحدث معين.",
        "click هو الحدث الذي يقع عند الضغط على الزر.",
        "تتغير الرسالة بعد تنفيذ الدالة."
      ],
      en: [
        "We select the button and paragraph by ID.",
        "addEventListener() registers an event handler.",
        "click fires when the button is clicked.",
        "The message changes when the callback runs."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة click مع أقواس مثل click() بدلًا من اسم الحدث النصي.",
        "اختيار عنصر غير موجود أو استخدام id غير صحيح."
      ],
      en: [
        "Using click() instead of the event name string click.",
        "Selecting a missing element or using an incorrect ID."
      ]
    },
    exercise: {
      ar: "أنشئي زرًا يغيّر لون خلفية الصفحة عند الضغط عليه.",
      en: "Create a button that changes the page background color when clicked."
    },
    summary: {
      ar: "الأحداث تجعل صفحات الويب تفاعلية وتستجيب لتصرفات المستخدم.",
      en: "Events make webpages interactive and responsive to user actions."
    }
  },

  {
    id: 18,
    title: {
      ar: "مميزات ES6 الحديثة",
      en: "Modern JavaScript: ES6+"
    },
    duration: "40 min",
    level: "Intermediate",
    explanation: {
      ar: "قدمت ES6 ميزات مهمة مثل let وconst وArrow Functions وTemplate Literals وDestructuring وSpread Syntax. تساعد هذه الميزات على كتابة كود أوضح وأكثر اختصارًا.",
      en: "ES6 introduced useful features including let, const, arrow functions, template literals, destructuring, and spread syntax. These features help make code clearer and more concise."
    },
    code: `const name = "Malak";
const greeting = \`Hello, \${name}!\`;
console.log(greeting);

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

const student = {
  studentName: "Ali",
  age: 20
};

const { studentName, age } = student;
console.log(studentName, age);

const square = number => number * number;
console.log(square(5));`,
    codeExplanation: {
      ar: [
        "Template Literals تسمح بإدراج المتغيرات داخل النصوص باستخدام ${}.",
        "Spread Syntax تنسخ عناصر المصفوفة إلى مصفوفة أخرى.",
        "Destructuring تستخرج خصائص الكائن إلى متغيرات.",
        "Arrow Functions طريقة مختصرة لكتابة بعض الدوال."
      ],
      en: [
        "Template literals interpolate values using ${}.",
        "Spread syntax copies array elements into another array.",
        "Destructuring extracts object properties into variables.",
        "Arrow functions provide concise function syntax."
      ]
    },
    commonMistakes: {
      ar: [
        "الخلط بين الأقواس العادية والأقواس المعقوفة في Destructuring.",
        "نسيان العلامة الخلفية في Template Literals.",
        "الاعتقاد أن Spread Syntax تنشئ نسخة عميقة من الكائنات المتداخلة."
      ],
      en: [
        "Confusing parentheses and braces in destructuring.",
        "Forgetting backticks in template literals.",
        "Assuming spread syntax creates a deep copy of nested objects."
      ]
    },
    exercise: {
      ar: "أنشئي مصفوفة أرقام، وانسخيها باستخدام Spread Syntax، ثم اكتبي دالة Arrow Function لحساب مربع رقم.",
      en: "Copy an array with spread syntax and write an arrow function that squares a number."
    },
    summary: {
      ar: "ميزات ES6 تجعل الكود أكثر وضوحًا واختصارًا عند استخدامها بالشكل الصحيح.",
      en: "ES6 features can make JavaScript code clearer and more concise."
    }
  },

  {
    id: 19,
    title: {
      ar: "معالجة الأخطاء وتصحيح الكود",
      en: "Error Handling and Debugging"
    },
    duration: "35 min",
    level: "Intermediate",
    explanation: {
      ar: "تساعد معالجة الأخطاء على التعامل مع المشكلات المتوقعة دون توقف البرنامج بطريقة غير منظمة. نستخدم try وcatch لالتقاط الأخطاء، ويمكن استخدام finally لتنفيذ كود في نهاية العملية.",
      en: "Error handling helps manage expected failures. try and catch handle exceptions, while finally runs after the try/catch process."
    },
    code: `try {
  const input = "abc";
  const number = Number(input);

  if (!Number.isFinite(number)) {
    throw new Error("Invalid number");
  }

  console.log(number);
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("Operation finished");
}`,
    codeExplanation: {
      ar: [
        "try تحتوي على الكود الذي قد ينتج عنه خطأ.",
        "throw تنشئ خطأ وتوقف التنفيذ الطبيعي داخل try.",
        "catch تستقبل الخطأ وتتعامل معه.",
        "finally تنفذ بعد انتهاء try/catch سواء حدث خطأ أم لا."
      ],
      en: [
        "try contains code that may throw an exception.",
        "throw creates an error and interrupts normal execution in the try block.",
        "catch receives and handles the error.",
        "finally runs after try/catch whether an error occurred or not."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام try/catch دون معالجة مفيدة للخطأ.",
        "الاعتقاد أن finally لا تعمل إلا عند حدوث خطأ.",
        "تجاهل رسائل Console أثناء اكتشاف المشكلات."
      ],
      en: [
        "Using try/catch without meaningful error handling.",
        "Assuming finally runs only when an error occurs.",
        "Ignoring console messages while debugging."
      ]
    },
    exercise: {
      ar: "اكتبي دالة تتحقق من أن القيمة رقم صالح، وتطلق Error برسالة واضحة إذا كانت غير صالحة.",
      en: "Write a function that validates a number and throws an Error with a clear message for invalid input."
    },
    summary: {
      ar: "استخدمي أدوات Debugging وtry/catch لفهم الأخطاء والتعامل معها.",
      en: "Use debugging tools and try/catch to understand and handle errors."
    }
  },

  {
    id: 20,
    title: {
      ar: "البرمجة غير المتزامنة",
      en: "Asynchronous JavaScript"
    },
    duration: "45 min",
    level: "Intermediate",
    explanation: {
      ar: "تساعد البرمجة غير المتزامنة في التعامل مع العمليات التي تستغرق وقتًا، مثل طلب البيانات من خادم. Promises تمثل نتيجة مستقبلية للعملية، وasync/await تجعل كتابة الكود غير المتزامن أكثر وضوحًا.",
      en: "Asynchronous programming helps handle operations that take time, such as network requests. Promises represent future results, while async/await makes asynchronous code easier to read."
    },
    code: `function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Finished!"), 1000);
  });
}

async function runExample() {
  try {
    console.log("Please wait...");
    const result = await waitOneSecond();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

runExample();`,
    codeExplanation: {
      ar: [
        "Promise تمثل نتيجة قد تكون متاحة الآن أو لاحقًا.",
        "setTimeout() تنفذ الدالة بعد مرور مدة محددة تقريبًا.",
        "async تجعل الدالة تعيد Promise.",
        "await تنتظر نتيجة Promise داخل دالة async دون حجب خيط التنفيذ الرئيسي.",
        "try/catch يمكنهما التعامل مع الأخطاء الناتجة عن العملية."
      ],
      en: [
        "A Promise represents a result that may become available later.",
        "setTimeout() schedules a callback after a delay.",
        "An async function returns a Promise.",
        "await pauses the async function until the Promise settles, without blocking the main thread.",
        "try/catch can handle errors from the operation."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام await داخل دالة عادية بدل دالة async، خارج السياقات التي تسمح بذلك.",
        "نسيان التعامل مع الأخطاء المحتملة في العمليات غير المتزامنة.",
        "الاعتقاد أن setTimeout تضمن تنفيذًا دقيقًا في نفس اللحظة المحددة."
      ],
      en: [
        "Using await in a regular function where it is not allowed.",
        "Ignoring possible errors in asynchronous operations.",
        "Assuming setTimeout guarantees execution at an exact time."
      ]
    },
    exercise: {
      ar: "أنشئي Promise تنجح بعد ثانيتين، واستخدمي async/await لعرض النتيجة في Console.",
      en: "Create a Promise that resolves after two seconds and use async/await to print the result."
    },
    summary: {
      ar: "Promises وasync/await تساعد على تنظيم العمليات غير المتزامنة والتعامل مع نتائجها وأخطائها.",
      en: "Promises and async/await organize asynchronous operations and their results or errors."
    }
  }

);

window.JAVASCRIPT_LESSONS = JAVASCRIPT_LESSONS;

/* =========================================
   CS MATE — JavaScript Course Connection
   Part 1: Register the course lessons
========================================= */

window.JAVASCRIPT_LESSONS = JAVASCRIPT_LESSONS;

window.JAVASCRIPT_COURSE = {
  id: "javascript",
  title: {
    ar: "جافاسكريبت",
    en: "JavaScript"
  },
  description: {
    ar: "تعلّمي JavaScript من الأساسيات حتى التعامل مع صفحات الويب.",
    en: "Learn JavaScript from fundamentals to interactive webpages."
  },
  lessons: window.JAVASCRIPT_LESSONS
};

console.log(
  "JavaScript course ready:",
  window.JAVASCRIPT_COURSE.lessons.length,
  "lessons"
);

/* =========================================
   CS MATE — JavaScript Course Connection
   Part 2: Open the JavaScript course
========================================= */

(function connectJavaScriptCourse() {
  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-open-course]");

    if (!button) return;

    if (button.dataset.openCourse !== "javascript") return;

    const lessons = window.JAVASCRIPT_LESSONS;

    if (!Array.isArray(lessons) || lessons.length === 0) {
      alert("محتوى دروس JavaScript غير جاهز. تأكدي من حفظ ملف javascript.js.");
      return;
    }

    console.log("JavaScript lessons:", lessons);

    alert(
      "تم تحميل كورس JavaScript وفيه " +
      lessons.length +
      " درس. الخطوة التالية هي عرض الدروس داخل واجهة الموقع."
    );
  });
})();
