
/* =========================================
   CS MATE — PYTHON COURSE
   20 Lessons — Part 1
========================================= */

const PYTHON_LESSONS = [
  {
    id: "python-01",
    title: {
      ar: "مقدمة في Python",
      en: "Introduction to Python"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "Python لغة برمجة سهلة القراءة وتُستخدم في تطوير الويب وتحليل البيانات والأتمتة والذكاء الاصطناعي. في هذا الدرس سنتعرف على اللغة وأهم استخداماتها.",
      en: "Python is a readable programming language used in web development, data analysis, automation, and AI. This lesson introduces Python and its main uses."
    },
    code: `print("Hello, World!")
print("Welcome to Python")`,
    codeExplanation: {
      ar: [
        "print() دالة بتعرض النص أو القيمة على الشاشة.",
        "النصوص بنكتبها بين علامتي اقتباس.",
        "كل سطر هنا بيطبع رسالة مستقلة."
      ],
      en: [
        "print() displays text or a value on the screen.",
        "Strings are written inside quotation marks.",
        "Each line prints a separate message."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان علامة اقتباس.",
        "كتابة اسم print بحروف مختلفة مثل Print.",
        "نسيان الأقواس حول النص."
      ],
      en: [
        "Forgetting a quotation mark.",
        "Changing the capitalization of print.",
        "Forgetting the parentheses around the text."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يطبع اسمك، ثم يطبع جملة توضّح لماذا تتعلمين البرمجة.",
      en: "Write a program that prints your name and a sentence explaining why you are learning programming."
    },
    summary: {
      ar: "Python لغة برمجة متعددة الاستخدامات، وprint() من أول الدوال التي سنتعلمها.",
      en: "Python is a versatile programming language, and print() is one of the first functions to learn."
    }
  },
  {
    id: "python-02",
    title: {
      ar: "تشغيل وتجربة كود Python",
      en: "Running Python Code"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "يمكن كتابة كود Python في محرر يدعم اللغة وتشغيله باستخدام مفسر Python. ولو بتتعلمي من الموبايل، يمكنك استخدام محرر Python موثوق يعمل من المتصفح.",
      en: "Python code can be written in an editor and executed by the Python interpreter. On a phone, you can use a trusted browser-based Python editor."
    },
    code: `print("My first program")
print(10 + 5)
print("I am learning Python")`,
    codeExplanation: {
      ar: [
        "السطر الأول يطبع نصًا.",
        "السطر الثاني يحسب 10 + 5 ويطبع الناتج 15.",
        "السطر الثالث يطبع رسالة أخرى."
      ],
      en: [
        "The first line prints text.",
        "The second line calculates 10 + 5 and prints 15.",
        "The third line prints another message."
      ]
    },
    commonMistakes: {
      ar: [
        "الاعتقاد أن حفظ الملف وحده يشغّل البرنامج.",
        "عدم الانتباه لرسائل الخطأ.",
        "الخلط بين النصوص والأرقام."
      ],
      en: [
        "Assuming that saving a file automatically runs it.",
        "Ignoring error messages.",
        "Confusing strings with numbers."
      ]
    },
    exercise: {
      ar: "شغّلي المثال، ثم عدّلي الأرقام ليظهر الناتج 25.",
      en: "Run the example, then change the numbers so the result is 25."
    },
    summary: {
      ar: "نكتب الكود في محرر ثم نشغله بمفسر Python أو بيئة تشغيل مناسبة.",
      en: "Write code in an editor and run it using Python or a suitable execution environment."
    }
  },
  {
    id: "python-03",
    title: {
      ar: "المتغيرات وأنواع البيانات",
      en: "Variables and Data Types"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "المتغير اسم بنستخدمه للإشارة إلى قيمة. من الأنواع الأساسية: int للأعداد الصحيحة، وfloat للأعداد العشرية، وstr للنصوص، وbool للقيم المنطقية.",
      en: "A variable is a name that refers to a value. Common types include int for integers, float for decimals, str for strings, and bool for Boolean values."
    },
    code: `name = "Malak"
age = 19
height = 1.65
is_learning = True

print(name)
print(age)
print(type(height))
print(type(is_learning))`,
    codeExplanation: {
      ar: [
        "name متغير يحتوي على نص.",
        "age يحتوي على عدد صحيح.",
        "height يحتوي على عدد عشري.",
        "is_learning يحتوي على قيمة منطقية True.",
        "type() بتساعدنا نعرف نوع القيمة."
      ],
      en: [
        "name stores a string.",
        "age stores an integer.",
        "height stores a decimal number.",
        "is_learning stores the Boolean value True.",
        "type() helps identify a value's type."
      ]
    },
    commonMistakes: {
      ar: [
        "وضع النص من غير علامات اقتباس.",
        "استخدام مسافة في اسم المتغير.",
        "الخلط بين = لإسناد القيمة و == للمقارنة."
      ],
      en: [
        "Writing a string without quotation marks.",
        "Using spaces in variable names.",
        "Confusing = for assignment with == for comparison."
      ]
    },
    exercise: {
      ar: "أنشئي متغيرات للاسم والسن وعدد المواد التي تدرسينها، واطبعي قيمها وأنواعها.",
      en: "Create variables for a name, age, and number of subjects, then print their values and types."
    },
    summary: {
      ar: "المتغيرات تحفظ مراجع للقيم، ولكل قيمة نوع بيانات مناسب.",
      en: "Variables refer to values, and each value has a data type."
    }
  },

  {
    id: "python-04",
    title: {
      ar: "الطباعة والإدخال",
      en: "Output and Input"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم print() لعرض النتائج، وinput() لاستقبال بيانات من المستخدم. القيمة اللي بترجع من input() بتكون نصًا، حتى لو المستخدم كتب رقمًا.",
      en: "We use print() to display output and input() to receive user input. The value returned by input() is a string, even when the user enters a number."
    },
    code: `name = input("Enter your name: ")
age = input("Enter your age: ")

print("Hello,", name)
print("Your age is", age)`,
    codeExplanation: {
      ar: [
        "input() بتعرض رسالة وتنتظر إدخال المستخدم.",
        "القيمة المدخلة بتتخزن في المتغير.",
        "print() بتعرض رسالة مع القيم."
      ],
      en: [
        "input() displays a prompt and waits for user input.",
        "The entered value is stored in a variable.",
        "print() displays text alongside values."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان الأقواس بعد input.",
        "توقع أن input() تحول الرقم إلى عدد تلقائيًا.",
        "نسيان تخزين القيمة في متغير عند الحاجة إليها."
      ],
      en: [
        "Forgetting parentheses after input.",
        "Expecting input() to convert numbers automatically.",
        "Not storing the returned value when it is needed."
      ]
    },
    exercise: {
      ar: "اطلبي من المستخدم اسمه ولونه المفضل، ثم اطبعي رسالة تحتوي على الإجابتين.",
      en: "Ask the user for their name and favorite color, then print a message containing both answers."
    },
    summary: {
      ar: "print() للعرض وinput() لاستقبال الإدخال، والإدخال يكون نصًا في البداية.",
      en: "Use print() for output and input() for input; input is initially returned as a string."
    }
  },
  {
    id: "python-05",
    title: {
      ar: "العمليات الحسابية",
      en: "Arithmetic Operators"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "توفر Python عمليات حسابية مثل الجمع والطرح والضرب والقسمة. وتوجد أيضًا عملية باقي القسمة % والأسّ ** والقسمة الصحيحة //.",
      en: "Python supports addition, subtraction, multiplication, and division, along with modulo %, exponentiation **, and floor division //."
    },
    code: `a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)`,
    codeExplanation: {
      ar: [
        "a + b للجمع والناتج 13.",
        "a - b للطرح والناتج 7.",
        "a * b للضرب والناتج 30.",
        "a / b للقسمة العادية.",
        "a // b للقسمة الصحيحة والناتج 3.",
        "a % b لباقي القسمة والناتج 1.",
        "a ** b للأس، والناتج 1000."
      ],
      en: [
        "Addition returns 13.",
        "Subtraction returns 7.",
        "Multiplication returns 30.",
        "Division returns a decimal-capable result.",
        "Floor division returns 3.",
        "Modulo returns the remainder, 1.",
        "Exponentiation returns 1000."
      ]
    },
    commonMistakes: {
      ar: [
        "الخلط بين / و //.",
        "الاعتقاد أن % تعني النسبة المئوية.",
        "نسيان أولوية العمليات الحسابية."
      ],
      en: [
        "Confusing / with //.",
        "Assuming % means percentage.",
        "Ignoring operator precedence."
      ]
    },
    exercise: {
      ar: "أنشئي متغيرين بقيمتي 17 و5، واطبعي الجمع والضرب وباقي القسمة.",
      en: "Create variables with values 17 and 5, then print their sum, product, and remainder."
    },
    summary: {
      ar: "اختاري العامل الحسابي حسب العملية المطلوبة، وانتبهي للفرق بين القسمة العادية والصحيحة.",
      en: "Choose the operator that matches the operation, especially the difference between regular and floor division."
    }
  },
  {
    id: "python-06",
    title: {
      ar: "التعامل مع النصوص",
      en: "Working with Strings"
    },
    duration: "25 min",
    level: "Beginner",
    explanation: {
      ar: "النصوص Strings بتُستخدم لتخزين الكلمات والجمل. نقدر ندمج النصوص، ونحسب طولها، ونحوّل الحروف إلى كبيرة أو صغيرة، ونستخرج جزءًا منها.",
      en: "Strings store words and sentences. We can join strings, measure their length, change letter case, and extract substrings."
    },
    code: `first_name = "Malak"
last_name = "Hussein"

full_name = first_name + " " + last_name

print(full_name)
print(len(full_name))
print(full_name.upper())
print(full_name.lower())
print(full_name[0])
print(full_name[0:5])`,
    codeExplanation: {
      ar: [
        "علامة + بتدمج النصوص.",
        "len() بتحسب عدد الحروف والمسافات.",
        "upper() بتحوّل الحروف إلى كبيرة.",
        "lower() بتحوّل الحروف إلى صغيرة.",
        "full_name[0] بتجيب أول حرف لأن العد يبدأ من صفر.",
        "full_name[0:5] بتجيب الحروف من الفهرس صفر حتى قبل الفهرس خمسة."
      ],
      en: [
        "The + operator joins strings.",
        "len() counts characters, including spaces.",
        "upper() converts letters to uppercase.",
        "lower() converts letters to lowercase.",
        "full_name[0] accesses the first character because indexing starts at zero.",
        "full_name[0:5] extracts characters from index 0 up to, but not including, index 5."
      ]
    },
    commonMistakes: {
      ar: [
        "محاولة جمع نص مع رقم من غير تحويل النوع.",
        "نسيان أن فهرسة النص تبدأ من صفر.",
        "الاعتقاد أن upper() وlower() يغيّران النص الأصلي مباشرةً."
      ],
      en: [
        "Trying to combine a string and a number without converting the type.",
        "Forgetting that string indexing starts at zero.",
        "Assuming upper() and lower() modify the original string in place."
      ]
    },
    exercise: {
      ar: "خدي كلمة من المستخدم، واطبعي طولها والحرف الأول منها والكلمة بحروف كبيرة.",
      en: "Ask the user for a word, then print its length, first character, and uppercase version."
    },
    summary: {
      ar: "النصوص تدعم الدمج والفهرسة والتقطيع ودوالًا مفيدة لمعالجة الحروف.",
      en: "Strings support concatenation, indexing, slicing, and useful text-processing methods."
    }
  },

  {
    id: "python-07",
    title: {
      ar: "الشروط if و elif و else",
      en: "Conditional Statements"
    },
    duration: "25 min",
    level: "Beginner",
    explanation: {
      ar: "الشروط بتخلّي البرنامج يختار ينفّذ أنهي كود حسب نتيجة شرط معين. بنستخدم if لاختبار الشرط، وelif لاختبار شرط إضافي، وelse لما الشروط السابقة كلها تكون غير متحققة. المسافات البادئة Indentation مهمة جدًا في Python.",
      en: "Conditions allow a program to choose which code to execute based on a test. Use if for the first condition, elif for additional conditions, and else when none of the previous conditions is true. Indentation is essential in Python."
    },
    code: `grade = int(input("Enter your grade: "))

if grade >= 85:
    print("Excellent")
elif grade >= 65:
    print("Good")
elif grade >= 50:
    print("Pass")
else:
    print("Needs improvement")`,
    codeExplanation: {
      ar: [
        "input() تستقبل الدرجة، وint() تحولها لعدد صحيح.",
        "if بتختبر هل الدرجة 85 أو أكتر.",
        "elif بتختبر شرطًا جديدًا لو الشرط السابق لم يتحقق.",
        "else بتتنفذ لو كل الشروط السابقة غير متحققة.",
        "المسافات قبل print بتحدد إن السطر تابع للشرط."
      ],
      en: [
        "input() receives the grade, and int() converts it to an integer.",
        "if checks whether the grade is at least 85.",
        "elif checks another condition if the previous one was false.",
        "else runs when none of the previous conditions is true.",
        "Indentation defines which statements belong to each condition."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان النقطتين : بعد الشرط.",
        "عدم الالتزام بالمسافات البادئة.",
        "استخدام = بدلًا من == عند المقارنة.",
        "إدخال نص بدل رقم عند استخدام int()."
      ],
      en: [
        "Forgetting the colon after a condition.",
        "Using inconsistent indentation.",
        "Using = instead of == for comparison.",
        "Entering non-numeric text when int() is expected."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يستقبل رقمًا، ويطبع هل الرقم موجب أو سالب أو يساوي صفرًا.",
      en: "Write a program that receives a number and prints whether it is positive, negative, or zero."
    },
    summary: {
      ar: "if وelif وelse بتتحكم في مسار البرنامج حسب الشروط، مع ضرورة استخدام المسافات البادئة الصحيحة.",
      en: "if, elif, and else control program flow according to conditions, using correct indentation."
    }
  },
  {
    id: "python-08",
    title: {
      ar: "الحلقات التكرارية for و while",
      en: "Loops: for and while"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "الحلقات بتسمح بتكرار تنفيذ الكود. بنستخدم for للتكرار على عناصر أو نطاق من القيم، وwhile لتكرار الكود طالما الشرط صحيح. لازم ننتبه إن while ممكن تستمر بلا نهاية لو الشرط لا يتغير.",
      en: "Loops repeat code. Use for to iterate over items or a range of values, and while to repeat code while a condition remains true. A while loop may run forever if its condition never changes."
    },
    code: `for number in range(1, 6):
    print(number)

count = 1

while count <= 3:
    print("Count:", count)
    count += 1`,
    codeExplanation: {
      ar: [
        "range(1, 6) بتنتج الأرقام من 1 إلى 5؛ الرقم 6 غير مشمول.",
        "for بتنفذ print خمس مرات.",
        "count = 1 بتحدد قيمة البداية.",
        "while بتكرر الكود طالما count أصغر من أو يساوي 3.",
        "count += 1 بتزود قيمة count بمقدار واحد لتجنب التكرار اللانهائي."
      ],
      en: [
        "range(1, 6) generates numbers from 1 to 5; 6 is excluded.",
        "The for loop executes print five times.",
        "count = 1 sets the initial value.",
        "while repeats the code while count is at most 3.",
        "count += 1 increases count by one to avoid an infinite loop."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان النقطتين بعد for أو while.",
        "نسيان تحديث المتغير داخل while.",
        "الاعتقاد أن الحد الأخير في range() مشمول.",
        "استخدام مسافات بادئة غير صحيحة."
      ],
      en: [
        "Forgetting the colon after for or while.",
        "Forgetting to update a variable inside while.",
        "Assuming the final value in range() is included.",
        "Using incorrect indentation."
      ]
    },
    exercise: {
      ar: "استخدمي for لطباعة الأرقام من 1 إلى 10، ثم استخدمي while لطباعة الأرقام من 5 إلى 1 تنازليًا.",
      en: "Use for to print numbers from 1 to 10, then use while to print numbers from 5 down to 1."
    },
    summary: {
      ar: "for مناسبة للتكرار على العناصر أو نطاق محدد، وwhile مناسبة للتكرار المرتبط بشرط.",
      en: "for is useful for iterating over items or a range, while while repeats based on a condition."
    }
  },
  {
    id: "python-09",
    title: {
      ar: "القوائم Lists",
      en: "Lists"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "القائمة List بتخزن مجموعة من العناصر في متغير واحد. القوائم مرتبة وقابلة للتعديل، وتسمح بتكرار القيم. بنستخدم الفهرسة للوصول للعناصر، وappend() لإضافة عنصر، وremove() لحذف عنصر بالقيمة.",
      en: "A list stores multiple items in one variable. Lists are ordered, mutable, and allow duplicate values. Use indexing to access items, append() to add an item, and remove() to delete an item by value."
    },
    code: `courses = ["Python", "HTML", "CSS"]

print(courses)
print(courses[0])

courses.append("JavaScript")
print(courses)

courses.remove("HTML")
print(courses)

print(len(courses))`,
    codeExplanation: {
      ar: [
        "أنشأنا قائمة تحتوي على ثلاثة أسماء لكورسات.",
        "courses[0] بتجيب أول عنصر لأن الفهرسة تبدأ من صفر.",
        "append() بتضيف JavaScript في نهاية القائمة.",
        "remove() بتحذف أول عنصر يطابق القيمة HTML.",
        "len() بتحسب عدد العناصر الموجودة في القائمة."
      ],
      en: [
        "We created a list containing three course names.",
        "courses[0] accesses the first item because indexing starts at zero.",
        "append() adds JavaScript to the end of the list.",
        "remove() deletes the first matching HTML item.",
        "len() returns the number of items in the list."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام فهرس غير موجود في القائمة.",
        "نسيان علامات الاقتباس حول النصوص.",
        "محاولة حذف قيمة غير موجودة باستخدام remove().",
        "الخلط بين append() لإضافة عنصر وremove() لحذفه."
      ],
      en: [
        "Using an index that does not exist.",
        "Forgetting quotation marks around strings.",
        "Trying to remove a value that is not in the list.",
        "Confusing append() for adding with remove() for deleting."
      ]
    },
    exercise: {
      ar: "أنشئي قائمة بثلاث مواد دراسية، وأضيفي مادة رابعة، ثم اطبعي أول مادة وعدد المواد.",
      en: "Create a list of three subjects, add a fourth subject, then print the first subject and the total number of subjects."
    },
    summary: {
      ar: "القوائم بتخزن عناصر متعددة، وتسمح بالإضافة والحذف والوصول للعناصر باستخدام الفهرسة.",
      en: "Lists store multiple items and support adding, removing, and accessing elements by index."
    }
  },

  {
    id: "python-10",
    title: {
      ar: "الـ Tuples والـ Sets",
      en: "Tuples and Sets"
    },
    duration: "25 min",
    level: "Beginner",
    explanation: {
      ar: "الـ Tuple بتخزن مجموعة عناصر مرتبة، لكنها غير قابلة للتعديل بعد إنشائها. أما الـ Set فبتخزن عناصر غير مكررة، ولا تعتمد على ترتيب ثابت للعناصر.",
      en: "A tuple stores an ordered collection that cannot be modified after creation. A set stores unique elements and does not guarantee a fixed iteration order."
    },
    code: `colors = ("red", "blue", "green")
print(colors[0])
print(len(colors))

numbers = {1, 2, 2, 3, 4}
print(numbers)

numbers.add(5)
numbers.discard(2)
print(numbers)`,
    codeExplanation: {
      ar: [
        "الأقواس () بتُستخدم لإنشاء Tuple.",
        "colors[0] بتجيب أول عنصر.",
        "len() بتحسب عدد عناصر الـ Tuple.",
        "الـ Set بتحذف التكرارات تلقائيًا.",
        "add() بتضيف عنصرًا جديدًا.",
        "discard() بتحذف العنصر لو موجود من غير خطأ لو مش موجود."
      ],
      en: [
        "Parentheses are commonly used to create a tuple.",
        "colors[0] accesses the first item.",
        "len() counts the tuple elements.",
        "A set automatically removes duplicate elements.",
        "add() inserts an element.",
        "discard() removes an element if present without raising an error if absent."
      ]
    },
    commonMistakes: {
      ar: [
        "محاولة تعديل عنصر داخل Tuple.",
        "توقع أن الـ Set تحتفظ بترتيب ثابت.",
        "استخدام set فارغة بالشكل {}؛ لأن ده ينشئ Dictionary. استخدمي set()."
      ],
      en: [
        "Trying to modify an element inside a tuple.",
        "Expecting a set to preserve a fixed order.",
        "Using {} for an empty set; it creates a dictionary. Use set() instead."
      ]
    },
    exercise: {
      ar: "أنشئي Tuple فيها ثلاثة ألوان، وأنشئي Set فيها أرقام مكررة، ثم اطبعي النتائج بعد إزالة التكرارات.",
      en: "Create a tuple with three colors and a set with duplicate numbers, then print the results after duplicates are removed."
    },
    summary: {
      ar: "Tuple مناسبة للمجموعات المرتبة غير القابلة للتعديل، وSet مناسبة لتخزين القيم الفريدة.",
      en: "Tuples suit ordered collections that should not be modified, while sets store unique values."
    }
  },
  {
    id: "python-11",
    title: {
      ar: "القواميس Dictionaries",
      en: "Dictionaries"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "الـ Dictionary بتخزن البيانات على شكل مفتاح وقيمة Key-Value. نقدر نستخدم المفتاح للوصول للقيمة أو تعديلها أو إضافة بيانات جديدة.",
      en: "A dictionary stores data as key-value pairs. We can use a key to access or update a value and to add new entries."
    },
    code: `student = {
    "name": "Malak",
    "age": 19,
    "course": "Python"
}

print(student["name"])
print(student.get("age"))

student["age"] = 20
student["level"] = "Beginner"

student.pop("course")

print(student)
print(student.keys())
print(student.values())`,
    codeExplanation: {
      ar: [
        "أنشأنا Dictionary فيها بيانات طالبة.",
        "student[\"name\"] بتجيب القيمة المرتبطة بالمفتاح name.",
        "get() بتجيب القيمة، ويمكنها إرجاع None لو المفتاح مش موجود.",
        "الإسناد لمفتاح موجود بيغيّر قيمته.",
        "الإسناد لمفتاح جديد بيضيف عنصرًا جديدًا.",
        "pop() بتحذف المفتاح والعنصر المرتبط به.",
        "keys() بتعرض المفاتيح وvalues() بتعرض القيم."
      ],
      en: [
        "We created a dictionary containing student information.",
        "student[\"name\"] retrieves the value associated with name.",
        "get() retrieves a value and can return None if the key is absent.",
        "Assigning to an existing key updates its value.",
        "Assigning to a new key adds an entry.",
        "pop() removes a key and its associated value.",
        "keys() provides the keys and values() provides the values."
      ]
    },
    commonMistakes: {
      ar: [
        "محاولة الوصول لمفتاح غير موجود باستخدام الأقواس المربعة.",
        "الخلط بين المفتاح والقيمة.",
        "نسيان الفاصلة بين عناصر القاموس.",
        "الاعتقاد أن keys() وvalues() بترجع نصوصًا عادية."
      ],
      en: [
        "Accessing a missing key using square brackets.",
        "Confusing keys with values.",
        "Forgetting commas between dictionary entries.",
        "Assuming keys() and values() return ordinary strings."
      ]
    },
    exercise: {
      ar: "أنشئي قاموسًا لكتاب يحتوي على الاسم والمؤلف والسعر، ثم غيّري السعر وأضيفي سنة النشر.",
      en: "Create a dictionary for a book containing its title, author, and price. Update the price and add the publication year."
    },
    summary: {
      ar: "القواميس بتنظم البيانات باستخدام أزواج المفتاح والقيمة، وبتسمح بالوصول والتعديل والإضافة والحذف.",
      en: "Dictionaries organize data into key-value pairs and support access, updates, insertion, and deletion."
    }
  },
  {
    id: "python-12",
    title: {
      ar: "الدوال Functions",
      en: "Functions"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "الدالة مجموعة أوامر بنجمعها تحت اسم واحد علشان نقدر نعيد استخدامها. بنعرّف الدالة باستخدام def، وبنستدعيها باسمها مع الأقواس.",
      en: "A function groups statements under one name so they can be reused. Define a function using def, then call it by its name followed by parentheses."
    },
    code: `def greet(name):
    print("Hello,", name)

def add(a, b):
    result = a + b
    return result

greet("Malak")

total = add(10, 5)
print(total)`,
    codeExplanation: {
      ar: [
        "def بتبدأ تعريف الدالة.",
        "name هو Parameter بتستقبل من خلاله الدالة قيمة.",
        "greet(\"Malak\") بيستدعي الدالة ويرسل لها اسمًا.",
        "الدالة add() بتستقبل رقمين وتحسب مجموعهما.",
        "return بترجع النتيجة إلى المكان اللي استدعى الدالة.",
        "خزّنا النتيجة في total وبعدها طبعناها."
      ],
      en: [
        "def begins a function definition.",
        "name is a parameter that receives a value.",
        "greet(\"Malak\") calls the function and passes a name.",
        "add() receives two numbers and calculates their sum.",
        "return sends the result back to the caller.",
        "We store the result in total and then print it."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان النقطتين بعد تعريف الدالة.",
        "نسيان المسافات البادئة داخل الدالة.",
        "تعريف الدالة من غير استدعائها وتوقع ظهور النتيجة.",
        "الخلط بين print() لعرض النتيجة وreturn لإرجاعها."
      ],
      en: [
        "Forgetting the colon after the function definition.",
        "Using incorrect indentation inside the function.",
        "Expecting a function to run without calling it.",
        "Confusing print(), which displays output, with return, which returns a value."
      ]
    },
    exercise: {
      ar: "اكتبي دالة اسمها square تستقبل رقمًا وترجع مربعه، ثم استدعيها واطبعي الناتج.",
      en: "Write a function named square that accepts a number and returns its square, then call it and print the result."
    },
    summary: {
      ar: "الدوال بتساعدنا نقسم البرنامج لأجزاء قابلة لإعادة الاستخدام، وreturn بترجع نتيجة يمكن استخدامها.",
      en: "Functions divide a program into reusable parts, and return provides a result that can be used elsewhere."
    }
  },

  {
    id: "python-13",
    title: {
      ar: "معاملات الدوال وإرجاع القيم",
      en: "Function Parameters and Return Values"
    },
    duration: "30 min",
    level: "Beginner",
    explanation: {
      ar: "الدوال ممكن تستقبل معاملات Parameters، ونمرر لها قيمًا عند الاستدعاء Arguments. ويمكن تحديد قيم افتراضية للمعاملات، واستخدام return لإرجاع نتيجة. ويمكن أيضًا إرجاع أكثر من قيمة في Tuple واحدة.",
      en: "Functions can accept parameters, and we pass values called arguments when calling them. Parameters can have default values, and return sends a result back. A function can also return multiple values in a tuple."
    },
    code: `def greet(name, message="Welcome"):
    return f"{message}, {name}!"

def calculate(a, b):
    return a + b, a * b

print(greet("Malak"))
print(greet("Ali", "Hello"))

total, product = calculate(4, 3)
print("Total:", total)
print("Product:", product)`,
    codeExplanation: {
      ar: [
        "name وmessage هما معاملات الدالة.",
        "message لها قيمة افتراضية هي Welcome.",
        "عند استدعاء greet باسم فقط، تُستخدم الرسالة الافتراضية.",
        "عند تمرير Hello، تُستخدم الرسالة الجديدة بدل الافتراضية.",
        "calculate() بترجع المجموع والضرب داخل Tuple واحدة.",
        "وزعنا القيمتين على المتغيرين total وproduct."
      ],
      en: [
        "name and message are function parameters.",
        "message has a default value of Welcome.",
        "Calling greet with only a name uses the default message.",
        "Passing Hello overrides the default message.",
        "calculate() returns the sum and product in a tuple.",
        "We unpack the returned values into total and product."
      ]
    },
    commonMistakes: {
      ar: [
        "وضع معامل له قيمة افتراضية قبل معامل إجباري.",
        "تمرير عدد غير مناسب من المعاملات.",
        "الخلط بين تعريف المعامل وتمرير الـ Argument.",
        "توقع أن return تطبع النتيجة تلقائيًا."
      ],
      en: [
        "Placing a default parameter before a required parameter.",
        "Passing an incorrect number of arguments.",
        "Confusing a parameter with an argument.",
        "Expecting return to print the result automatically."
      ]
    },
    exercise: {
      ar: "اكتبي دالة calculate_discount تستقبل السعر ونسبة الخصم، وترجع السعر بعد الخصم. اجعلي نسبة الخصم 10% افتراضيًا.",
      en: "Write a calculate_discount function that accepts a price and discount rate and returns the discounted price. Use 10% as the default discount rate."
    },
    summary: {
      ar: "المعاملات بتسمح للدوال باستقبال بيانات مختلفة، والقيم الافتراضية بتوفر اختيارات جاهزة، وreturn بترجع النتيجة.",
      en: "Parameters let functions receive different inputs, default values provide convenient options, and return sends results back."
    }
  },
  {
    id: "python-14",
    title: {
      ar: "التعامل مع الملفات",
      en: "File Handling"
    },
    duration: "30 min",
    level: "Intermediate",
    explanation: {
      ar: "Python بتسمح بقراءة الملفات وكتابتها باستخدام open(). الأفضل استخدام with open() لأنه بيغلق الملف تلقائيًا بعد الانتهاء. من أوضاع الفتح: r للقراءة، وw للكتابة مع استبدال المحتوى القديم، وa للإضافة في نهاية الملف.",
      en: "Python can read and write files using open(). Using with open() is recommended because it closes the file automatically. Common modes are r for reading, w for writing and replacing existing content, and a for appending."
    },
    code: `with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Learning Python\\n")
    file.write("File handling lesson")

with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)`,
    codeExplanation: {
      ar: [
        "open() بتفتح الملف notes.txt.",
        "الوضع w بيكتب المحتوى، وقد يستبدل المحتوى السابق.",
        "encoding=\"utf-8\" بيساعد في التعامل مع النصوص العربية.",
        "write() بتكتب النص داخل الملف.",
        "الرمز \\n بينقل النص للسطر التالي.",
        "الوضع r بيفتح الملف للقراءة.",
        "read() بتقرأ المحتوى، وبعدها print() بتعرضه."
      ],
      en: [
        "open() opens notes.txt.",
        "Mode w writes content and may replace existing content.",
        "encoding=\"utf-8\" helps handle Arabic text.",
        "write() writes text into the file.",
        "\\n moves the text to a new line.",
        "Mode r opens the file for reading.",
        "read() reads the content, and print() displays it."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام w من غير الانتباه إلى أنه قد يمسح المحتوى القديم.",
        "محاولة قراءة ملف غير موجود.",
        "نسيان مسار الملف الصحيح.",
        "توقع أن الملف يُحفظ في مكان ثابت دون معرفة مجلد التشغيل."
      ],
      en: [
        "Using w without realizing it can replace existing content.",
        "Trying to read a file that does not exist.",
        "Using an incorrect file path.",
        "Assuming the file is saved in a fixed location without checking the working directory."
      ]
    },
    exercise: {
      ar: "أنشئي ملفًا باسم tasks.txt واكتبي فيه ثلاث مهام، ثم افتحيه للقراءة واطبعي المحتوى.",
      en: "Create a file named tasks.txt, write three tasks into it, then open it for reading and print its contents."
    },
    summary: {
      ar: "نستخدم open() لفتح الملفات، وwith لإغلاقها تلقائيًا، مع اختيار وضع الفتح المناسب.",
      en: "Use open() to access files and with to close them automatically, choosing the appropriate file mode."
    }
  },
  {
    id: "python-15",
    title: {
      ar: "معالجة الأخطاء Exceptions",
      en: "Exception Handling"
    },
    duration: "30 min",
    level: "Intermediate",
    explanation: {
      ar: "الأخطاء الاستثنائية Exceptions بتحصل أثناء تشغيل البرنامج، مثل محاولة تحويل نص غير رقمي إلى عدد. بنستخدم try لتجربة الكود، وexcept للتعامل مع الخطأ، وelse لو التنفيذ تم من غير خطأ، وfinally لتنفيذ كود سواء حصل خطأ أو لا.",
      en: "Exceptions occur while a program runs, such as converting non-numeric text to a number. Use try to test code, except to handle an error, else when no error occurs, and finally for code that should run either way."
    },
    code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number

except ValueError:
    print("Please enter a valid integer.")

except ZeroDivisionError:
    print("Cannot divide by zero.")

else:
    print("Result:", result)

finally:
    print("Program finished.")`,
    codeExplanation: {
      ar: [
        "try بتحتوي على الكود اللي ممكن يحصل فيه خطأ.",
        "ValueError بيتعامل مع إدخال لا يمكن تحويله إلى عدد صحيح.",
        "ZeroDivisionError بيتعامل مع القسمة على صفر.",
        "else بتتنفذ لو مفيش استثناء حصل داخل try.",
        "finally بتتنفذ سواء حصل خطأ أو لا."
      ],
      en: [
        "try contains code that might raise an exception.",
        "ValueError handles input that cannot be converted to an integer.",
        "ZeroDivisionError handles division by zero.",
        "else runs when no exception occurs in try.",
        "finally runs whether an exception occurs or not."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام except عام من غير تحديد نوع الخطأ عند الحاجة.",
        "وضع except قبل try.",
        "الاعتقاد أن else مرتبطة بشرط if.",
        "نسيان أن finally بتتنفذ حتى عند حدوث استثناء."
      ],
      en: [
        "Using a broad except without identifying the expected error when possible.",
        "Placing except before try.",
        "Confusing try-else with an if-else statement.",
        "Forgetting that finally runs even when an exception occurs."
      ]
    },
    exercise: {
      ar: "اكتبي برنامجًا يطلب رقمين ويقسم الأول على الثاني، ويتعامل مع الإدخال غير الصحيح والقسمة على صفر.",
      en: "Write a program that asks for two numbers and divides the first by the second, handling invalid input and division by zero."
    },
    summary: {
      ar: "معالجة الاستثناءات بتساعد البرنامج يتعامل مع الأخطاء المتوقعة بدل ما يتوقف بصورة غير مناسبة.",
      en: "Exception handling helps a program respond to expected errors instead of stopping unexpectedly."
    }
  },

  {
    id: "python-16",
    title: {
      ar: "الموديولات Modules",
      en: "Modules"
    },
    duration: "25 min",
    level: "Intermediate",
    explanation: {
      ar: "الـ Module هو ملف Python يحتوي على كود يمكن إعادة استخدامه في ملفات أخرى. نقدر نستورد الموديولات الجاهزة باستخدام import، أو نستورد دالة معينة باستخدام from. مثال: math للعمليات الرياضية وrandom لاختيار قيم عشوائية.",
      en: "A module is a Python file containing reusable code. We can import built-in modules using import or import a specific function using from. For example, math provides mathematical operations and random generates random choices."
    },
    code: `import math
import random
from math import sqrt

print(math.sqrt(25))
print(sqrt(49))
print(math.pi)

number = random.randint(1, 10)
print("Random number:", number)`,
    codeExplanation: {
      ar: [
        "import math بيستورد الموديول math.",
        "math.sqrt(25) بتحسب الجذر التربيعي للعدد 25.",
        "from math import sqrt بتسمح باستخدام sqrt مباشرةً.",
        "math.pi بتوفر قيمة تقريبية للعدد π.",
        "random.randint(1, 10) بتختار عددًا صحيحًا عشوائيًا من 1 إلى 10 شاملًا الطرفين."
      ],
      en: [
        "import math imports the math module.",
        "math.sqrt(25) calculates the square root of 25.",
        "from math import sqrt allows sqrt to be used directly.",
        "math.pi provides an approximation of pi.",
        "random.randint(1, 10) selects an integer from 1 through 10, including both endpoints."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان استيراد الموديول قبل استخدامه.",
        "كتابة اسم الدالة أو الموديول بصورة غير صحيحة.",
        "توقع أن الرقم العشوائي يكون ثابتًا في كل تشغيل.",
        "تسمية الملف باسم math.py أو random.py، مما قد يتعارض مع الموديولات الأصلية."
      ],
      en: [
        "Forgetting to import a module before using it.",
        "Misspelling a module or function name.",
        "Expecting a random number to stay the same on every run.",
        "Naming your file math.py or random.py, which may conflict with the standard modules."
      ]
    },
    exercise: {
      ar: "استوردي math واحسبي الجذر التربيعي لعدد يدخله المستخدم، ثم استخدمي random لاختيار رقم من 1 إلى 20.",
      en: "Import math to calculate the square root of a number entered by the user, then use random to choose a number from 1 to 20."
    },
    summary: {
      ar: "الموديولات بتساعدنا نستخدم كود جاهز بدل كتابة كل شيء من الصفر.",
      en: "Modules let us reuse existing code instead of writing everything from scratch."
    }
  },
  {
    id: "python-17",
    title: {
      ar: "مقدمة في البرمجة الكائنية OOP",
      en: "Introduction to Object-Oriented Programming"
    },
    duration: "30 min",
    level: "Intermediate",
    explanation: {
      ar: "البرمجة الكائنية أسلوب لتنظيم البرنامج حول الكائنات Objects. الكائن ممكن يحتوي على بيانات تمثل حالته، ودوال تمثل سلوكه. من أهم مفاهيم OOP: التغليف Encapsulation، والوراثة Inheritance، وتعدد الأشكال Polymorphism، والتجريد Abstraction.",
      en: "Object-oriented programming organizes code around objects. An object can contain data representing its state and methods representing its behavior. Key OOP concepts include encapsulation, inheritance, polymorphism, and abstraction."
    },
    code: `class Student:
    def introduce(self):
        print("I am a student.")

student1 = Student()
student2 = Student()

student1.introduce()
student2.introduce()`,
    codeExplanation: {
      ar: [
        "class بتعرّف قالبًا لإنشاء كائنات من نوع Student.",
        "introduce() دالة داخل الكلاس، وتسمى Method.",
        "self بتشير إلى الكائن الحالي عند استدعاء الميثود.",
        "Student() بتنشئ كائنًا جديدًا.",
        "student1 وstudent2 كائنان منفصلان من نفس الكلاس."
      ],
      en: [
        "class defines a blueprint for Student objects.",
        "introduce() is a function defined inside the class, called a method.",
        "self refers to the current instance when the method is called.",
        "Student() creates a new object.",
        "student1 and student2 are separate instances of the same class."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان النقطتين بعد تعريف الكلاس.",
        "نسيان self كأول معامل في الميثود العادية داخل الكلاس.",
        "الخلط بين الكلاس نفسه والكائن الذي يتم إنشاؤه منه.",
        "عدم الالتزام بالمسافات البادئة."
      ],
      en: [
        "Forgetting the colon after the class definition.",
        "Forgetting self as the first parameter of a regular instance method.",
        "Confusing the class with an object created from it.",
        "Using incorrect indentation."
      ]
    },
    exercise: {
      ar: "أنشئي كلاس باسم Car يحتوي على ميثود اسمها start تطبع رسالة بأن السيارة بدأت التشغيل، ثم أنشئي كائنًا واستدعي الميثود.",
      en: "Create a Car class with a start method that prints a message indicating the car has started, then create an object and call the method."
    },
    summary: {
      ar: "OOP بتنظم الكود باستخدام الكلاسات والكائنات، وتساعد على بناء برامج منظمة وقابلة للتطوير.",
      en: "OOP organizes code using classes and objects, helping create structured and maintainable programs."
    }
  },
  {
    id: "python-18",
    title: {
      ar: "الكلاسات والكائنات والـ Constructor",
      en: "Classes, Objects, and Constructors"
    },
    duration: "35 min",
    level: "Intermediate",
    explanation: {
      ar: "الكلاس Class هو القالب، والـ Object هو كائن تم إنشاؤه من هذا القالب. في Python بنستخدم __init__ لتهيئة بيانات الكائن عند إنشائه، وبنستخدم self للوصول إلى خصائصه وميثوداته.",
      en: "A class is a blueprint, and an object is an instance created from it. In Python, __init__ initializes an object's data when it is created, while self accesses its attributes and methods."
    },
    code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def display_info(self):
        print("Name:", self.name)
        print("Grade:", self.grade)

student1 = Student("Malak", 95)
student2 = Student("Ali", 88)

student1.display_info()
student2.display_info()`,
    codeExplanation: {
      ar: [
        "__init__ بتُستدعى تلقائيًا عند إنشاء الكائن لتهيئة بياناته.",
        "name وgrade قيم بيتم تمريرها عند إنشاء كل طالب.",
        "self.name وself.grade خصائص خاصة بكل كائن.",
        "أنشأنا كائنين ببيانات مختلفة.",
        "display_info() بتعرض بيانات الكائن الذي استدعاه."
      ],
      en: [
        "__init__ is called automatically when an object is created to initialize its data.",
        "name and grade are values passed when creating each student.",
        "self.name and self.grade are attributes belonging to each instance.",
        "We created two objects with different data.",
        "display_info() displays the data of the object that calls it."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة اسم __init__ بصورة غير صحيحة.",
        "نسيان self عند تعريف الميثود.",
        "نسيان تمرير القيم المطلوبة عند إنشاء الكائن.",
        "استخدام name بدل self.name عند الحاجة إلى حفظ البيانات كخاصية للكائن."
      ],
      en: [
        "Misspelling __init__.",
        "Forgetting self in a method definition.",
        "Not providing required values when creating an object.",
        "Using name instead of self.name when storing data as an instance attribute."
      ]
    },
    exercise: {
      ar: "أنشئي كلاس باسم Book يستقبل عنوان الكتاب واسم المؤلف داخل __init__، ثم أضيفي ميثود تعرض بيانات الكتاب.",
      en: "Create a Book class that receives a title and author in __init__, then add a method that displays the book's information."
    },
    summary: {
      ar: "بنستخدم الكلاسات لتعريف نوع الكائن، و__init__ لتهيئة بياناته، وself للوصول إلى خصائص كل كائن.",
      en: "Classes define object types, __init__ initializes their data, and self accesses each object's attributes."
    }
  },

  {
    id: "python-19",
    title: {
      ar: "مشروع تطبيقي: نظام إدارة درجات الطلاب",
      en: "Practical Project: Student Grade Manager"
    },
    duration: "45 min",
    level: "Intermediate",
    explanation: {
      ar: "هنطبّق اللي اتعلمناه في مشروع صغير لإدارة درجات الطلاب. هنستخدم القوائم والقواميس والدوال والحلقات والشروط ومعالجة الأخطاء. البرنامج هيستقبل أسماء الطلاب ودرجاتهم، ويعرض متوسط الدرجات ويحدد حالة كل طالب.",
      en: "We will apply what we learned in a small student grade management project. It uses lists, dictionaries, functions, loops, conditions, and exception handling. The program accepts student names and grades, calculates the average, and determines each student's result."
    },
    code: `students = []

def add_student():
    name = input("Enter student name: ").strip()

    if not name:
        print("Name cannot be empty.")
        return

    try:
        grade = float(input("Enter grade (0-100): "))

        if not 0 <= grade <= 100:
            print("Grade must be between 0 and 100.")
            return

    except ValueError:
        print("Please enter a valid number.")
        return

    students.append({
        "name": name,
        "grade": grade
    })

    print("Student added successfully.")

def show_students():
    if not students:
        print("No students recorded.")
        return

    for student in students:
        status = "Pass" if student["grade"] >= 50 else "Needs improvement"
        print(
            student["name"],
            "- Grade:", student["grade"],
            "- Status:", status
        )

def show_average():
    if not students:
        print("No grades available.")
        return

    average = sum(
        student["grade"] for student in students
    ) / len(students)

    print("Average grade:", round(average, 2))

while True:
    print("\\n1. Add student")
    print("2. Show students")
    print("3. Show average")
    print("4. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        add_student()
    elif choice == "2":
        show_students()
    elif choice == "3":
        show_average()
    elif choice == "4":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Try again.")`,
    codeExplanation: {
      ar: [
        "students قائمة بتخزن بيانات الطلاب.",
        "add_student() بتستقبل الاسم والدرجة وتتحقق من صحة البيانات.",
        "try وexcept بيتعاملوا مع إدخال درجة غير رقمية.",
        "الشرط بيتأكد إن الدرجة بين 0 و100.",
        "كل طالب بيتخزن كقاموس فيه الاسم والدرجة.",
        "show_students() بتعرض الطلاب وبتحدد النجاح عند درجة 50 أو أكثر.",
        "show_average() بتحسب المتوسط باستخدام sum() وlen().",
        "while True بتشغّل القائمة باستمرار، وbreak بتنهي البرنامج عند اختيار الخروج."
      ],
      en: [
        "students is a list that stores student records.",
        "add_student() collects the name and grade and validates the input.",
        "try and except handle non-numeric grade input.",
        "The condition ensures the grade is between 0 and 100.",
        "Each student is stored as a dictionary containing a name and grade.",
        "show_students() displays students and marks grades of 50 or above as Pass.",
        "show_average() calculates the mean using sum() and len().",
        "while True keeps the menu running, and break exits when selected."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان الأقواس أو المسافات البادئة داخل الدوال.",
        "عدم التحقق من أن الدرجة بين 0 و100.",
        "القسمة على عدد الطلاب عندما تكون القائمة فارغة.",
        "نسيان break عند اختيار الخروج."
      ],
      en: [
        "Forgetting parentheses or correct indentation in functions.",
        "Failing to validate that grades are between 0 and 100.",
        "Dividing by the student count when the list is empty.",
        "Forgetting break when exiting the loop."
      ]
    },
    exercise: {
      ar: "طوّري المشروع بإضافة خيار للبحث عن طالب باسمه، وخيار لحذف طالب من القائمة.",
      en: "Extend the project by adding an option to search for a student by name and another option to remove a student."
    },
    summary: {
      ar: "المشروع بيجمع مفاهيم Python الأساسية في برنامج واحد، وبيوضح إزاي نقسم الكود لدوال ونتحقق من البيانات.",
      en: "This project combines core Python concepts in one program and demonstrates how to organize code into functions and validate input."
    }
  },
  {
    id: "python-20",
    title: {
      ar: "مراجعة شاملة واختبار نهائي",
      en: "Final Review and Assessment"
    },
    duration: "40 min",
    level: "Beginner to Intermediate",
    explanation: {
      ar: "الدرس ده بيراجع أهم مفاهيم الكورس: المتغيرات، وأنواع البيانات، والشروط، والحلقات، وهياكل البيانات، والدوال، والملفات، ومعالجة الأخطاء، والموديولات، والبرمجة الكائنية.",
      en: "This lesson reviews the course's main concepts: variables, data types, conditions, loops, data structures, functions, files, exception handling, modules, and object-oriented programming."
    },
    code: `def calculate_total(numbers):
    total = 0

    for number in numbers:
        if number >= 0:
            total += number

    return total

values = [10, -3, 5, 20]
result = calculate_total(values)

print("Total:", result)

student = {
    "name": "Malak",
    "grade": 90
}

print(student["name"])
print(student["grade"])`,
    codeExplanation: {
      ar: [
        "calculate_total() دالة بتستقبل قائمة أرقام.",
        "المتغير total بيبدأ بصفر.",
        "حلقة for بتمر على كل رقم في القائمة.",
        "الشرط if بيضيف الأرقام غير السالبة فقط.",
        "return بترجع مجموع الأرقام المقبولة.",
        "القاموس student بيخزن بيانات الطالب في صورة مفاتيح وقيم."
      ],
      en: [
        "calculate_total() is a function that receives a list of numbers.",
        "The total variable starts at zero.",
        "The for loop visits every number in the list.",
        "The if condition adds only non-negative numbers.",
        "return sends the resulting sum back.",
        "The student dictionary stores student information as key-value pairs."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان تهيئة المتغير قبل استخدامه في الجمع.",
        "الخلط بين return وprint().",
        "نسيان المسافات البادئة داخل الشروط والحلقات.",
        "استخدام مفتاح غير موجود في القاموس."
      ],
      en: [
        "Forgetting to initialize a variable before accumulating values.",
        "Confusing return with print().",
        "Using incorrect indentation inside conditions and loops.",
        "Accessing a dictionary key that does not exist."
      ]
    },
    exercise: {
      ar: "حاولي الإجابة عن الأسئلة التالية: ما الفرق بين List وTuple؟ ما وظيفة return؟ ما الفرق بين for وwhile؟ ولماذا نستخدم try وexcept؟ ثم عدّلي المثال ليحسب مجموع الأرقام الموجبة فقط.",
      en: "Answer these questions: What is the difference between a list and a tuple? What does return do? How do for and while differ? Why do we use try and except? Then modify the example to sum only positive numbers."
    },
    summary: {
      ar: "بعد مراجعة الدروس والتدرب على المشروع، المفروض تكوني قادرة على كتابة برامج Python بسيطة ومنظمة، وتكوني جاهزة للانتقال إلى مشروعات أكبر.",
      en: "After reviewing the lessons and practicing the project, you should be able to write simple, organized Python programs and begin working on larger projects."
    }
  }
];

/* =========================================
   CS MATE — PYTHON COURSE CONTROLS
   Navigation, progress and saved results
========================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "csmate_python_progress";

  function getLessons() {
    if (typeof PYTHON_LESSONS !== "undefined") {
      return PYTHON_LESSONS;
    }

    if (Array.isArray(window.PYTHON_LESSONS)) {
      return window.PYTHON_LESSONS;
    }

    return [];
  }

  function getProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        completed: [],
        currentLesson: 0,
        quizScores: {}
      };
    } catch (error) {
      return {
        completed: [],
        currentLesson: 0,
        quizScores: {}
      };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
      );
    } catch (error) {
      console.warn("Could not save Python progress.", error);
    }
  }

  function markLessonComplete(lessonId) {
    const progress = getProgress();

    if (!progress.completed.includes(lessonId)) {
      progress.completed.push(lessonId);
    }

    saveProgress(progress);
    updateProgressDisplay();
  }

  function saveQuizScore(lessonId, score, total) {
    const progress = getProgress();

    progress.quizScores[lessonId] = {
      score: Number(score),
      total: Number(total),
      date: new Date().toISOString()
    };

    saveProgress(progress);
  }

  function updateProgressDisplay() {
    const lessons = getLessons();
    const progress = getProgress();

    const percentage = lessons.length
      ? Math.round(
          progress.completed.length / lessons.length * 100
        )
      : 0;

    document.querySelectorAll(
      "[data-python-progress]"
    ).forEach(function (element) {
      element.textContent = percentage + "%";
    });

    document.querySelectorAll(
      "[data-python-progress-bar]"
    ).forEach(function (element) {
      element.style.width = percentage + "%";
      element.setAttribute("aria-valuenow", percentage);
    });

    document.querySelectorAll(
      "[data-python-completed]"
    ).forEach(function (element) {
      element.textContent = progress.completed.length;
    });
  }

  window.CSMatePython = {
    getLessons: getLessons,
    getProgress: getProgress,
    saveProgress: saveProgress,
    markLessonComplete: markLessonComplete,
    saveQuizScore: saveQuizScore,
    updateProgressDisplay: updateProgressDisplay
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      updateProgressDisplay
    );
  } else {
    updateProgressDisplay();
  }
})();

/* =========================================
   CS MATE — PYTHON LESSON NAVIGATION
========================================= */

(function () {
  "use strict";

  const api = window.CSMatePython;

  if (!api) {
    console.warn("Load the Python controls code first.");
    return;
  }

  const lessons = api.getLessons();

  if (!Array.isArray(lessons) || lessons.length === 0) {
    console.warn("Python lessons are not available.");
    return;
  }

  let progress = api.getProgress();

  function getLessonId(index) {
    const lesson = lessons[index];
    return lesson ? (lesson.id ?? index + 1) : null;
  }

  function saveCurrentLesson(index) {
    progress = api.getProgress();
    progress.currentLesson = index;
    api.saveProgress(progress);
  }

  function getText(value) {
    if (typeof value === "string") return value;

    if (value && typeof value === "object") {
      return value.ar || value.en || "";
    }

    return "";
  }

  function renderPythonLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    const lesson = lessons[index];

    const title = getText(lesson.title);
    const explanation = getText(lesson.explanation);
    const code = getText(lesson.code);
    const exercise = getText(lesson.exercise);
    const summary = getText(lesson.summary);

    const selectors = {
      title: "[data-python-title]",
      explanation: "[data-python-explanation]",
      code: "[data-python-code]",
      exercise: "[data-python-exercise]",
      summary: "[data-python-summary]",
      counter: "[data-python-lesson-counter]"
    };

    function setText(selector, value) {
      document.querySelectorAll(selector).forEach(function (el) {
        el.textContent = value;
      });
    }

    setText(selectors.title, title);
    setText(selectors.explanation, explanation);
    setText(selectors.code, code);
    setText(selectors.exercise, exercise);
    setText(selectors.summary, summary);

    setText(
      selectors.counter,
      "Lesson " + (index + 1) + " / " + lessons.length
    );

    document.querySelectorAll("[data-python-previous]")
      .forEach(function (button) {
        button.disabled = index === 0;
      });

    document.querySelectorAll("[data-python-next]")
      .forEach(function (button) {
        button.disabled = index === lessons.length - 1;
      });

    saveCurrentLesson(index);
  }

  document.addEventListener("click", function (event) {
    const previous = event.target.closest(
      "[data-python-previous]"
    );

    const next = event.target.closest(
      "[data-python-next]"
    );

    const complete = event.target.closest(
      "[data-python-complete]"
    );

    progress = api.getProgress();

    let index = Number(progress.currentLesson) || 0;

    if (previous) {
      renderPythonLesson(index - 1);
    }

    if (next) {
      renderPythonLesson(index + 1);
    }

    if (complete) {
      const lessonId = getLessonId(index);
      api.markLessonComplete(lessonId);

      complete.textContent = "Completed ✓";
      complete.disabled = true;
    }
  });

  window.CSMatePython.renderLesson = renderPythonLesson;

  document.addEventListener("DOMContentLoaded", function () {
    progress = api.getProgress();

    const index = Math.min(
      Math.max(Number(progress.currentLesson) || 0, 0),
      lessons.length - 1
    );

    renderPythonLesson(index);
  });

  if (document.readyState !== "loading") {
    const index = Math.min(
      Math.max(Number(progress.currentLesson) || 0, 0),
      lessons.length - 1
    );

    renderPythonLesson(index);
  }
})();

/* =========================================
   CS MATE — PYTHON QUIZ SYSTEM
   Scoring, answers and saved results
========================================= */

(function () {
  "use strict";

  const api = window.CSMatePython;

  if (!api) {
    console.warn("Python controls are not loaded.");
    return;
  }

  function saveScore(lessonId, score, total) {
    api.saveQuizScore(lessonId, score, total);

    document.querySelectorAll("[data-python-quiz-score]")
      .forEach(function (element) {
        element.textContent = score + " / " + total;
      });

    document.querySelectorAll("[data-python-quiz-percent]")
      .forEach(function (element) {
        element.textContent = total > 0
          ? Math.round(score / total * 100) + "%"
          : "0%";
      });
  }

  function gradeQuiz(form) {
    const questions = Array.from(
      form.querySelectorAll("[data-correct-answer]")
    );

    if (!questions.length) {
      const result = form.querySelector("[data-quiz-result]");
      if (result) {
        result.textContent =
          "No quiz questions were found.";
      }
      return;
    }

    let score = 0;

    questions.forEach(function (question) {
      const correctAnswer =
        question.dataset.correctAnswer;

      const selected = question.querySelector(
        'input[type="radio"]:checked, ' +
        'input[type="checkbox"]:checked'
      );

      const textInput = question.querySelector(
        'input[type="text"], input:not([type])'
      );

      const answer = selected
        ? selected.value
        : textInput
          ? textInput.value.trim()
          : "";

      const isCorrect =
        String(answer).trim().toLowerCase() ===
        String(correctAnswer).trim().toLowerCase();

      question.dataset.answeredCorrectly =
        String(isCorrect);

      question.querySelectorAll("[data-answer-feedback]")
        .forEach(function (feedback) {
          feedback.textContent = isCorrect
            ? "Correct!"
            : "Try again.";

          feedback.dataset.correct = String(isCorrect);
        });

      if (isCorrect) score++;
    });

    const progress = api.getProgress();
    const index = Number(progress.currentLesson) || 0;
    const lessons = api.getLessons();
    const lesson = lessons[index];

    if (lesson) {
      saveScore(lesson.id ?? index + 1, score, questions.length);
    }

    const result = form.querySelector("[data-quiz-result]");

    if (result) {
      const percentage = Math.round(
        score / questions.length * 100
      );

      result.textContent =
        "Your score: " + score + " / " +
        questions.length + " (" + percentage + "%)";
    }
  }

  document.addEventListener("submit", function (event) {
    const form = event.target.closest(
      "[data-python-quiz]"
    );

    if (!form) return;

    event.preventDefault();
    gradeQuiz(form);
  });

  window.CSMatePython.gradeQuiz = gradeQuiz;
})();

/* =========================================
   CS MATE — PYTHON RESULTS SUMMARY
========================================= */

(function () {
  "use strict";

  const api = window.CSMatePython;
  if (!api) return;

  function updateQuizSummary() {
    const progress = api.getProgress();
    const scores = Object.values(progress.quizScores || {});

    const totalCorrect = scores.reduce(function (sum, item) {
      return sum + (Number(item.score) || 0);
    }, 0);

    const totalQuestions = scores.reduce(function (sum, item) {
      return sum + (Number(item.total) || 0);
    }, 0);

    const percentage = totalQuestions
      ? Math.round(totalCorrect / totalQuestions * 100)
      : 0;

    document.querySelectorAll("[data-python-total-score]")
      .forEach(function (element) {
        element.textContent =
          totalCorrect + " / " + totalQuestions;
      });

    document.querySelectorAll("[data-python-average-score]")
      .forEach(function (element) {
        element.textContent = percentage + "%";
      });

    document.querySelectorAll("[data-python-quiz-count]")
      .forEach(function (element) {
        element.textContent = scores.length;
      });
  }

  window.CSMatePython.updateQuizSummary =
    updateQuizSummary;

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      updateQuizSummary
    );
  } else {
    updateQuizSummary();
  }
})();
/* =========================================
   CS MATE — PYTHON COURSE DIAGNOSTICS
========================================= */

(function () {
  "use strict";

  function startPythonCheck() {
    console.log("CS MATE: Checking Python course...");

    const lessons = window.PYTHON_LESSONS;

    if (!Array.isArray(lessons) || lessons.length === 0) {
      console.error(
        "Python lessons are missing or not globally accessible."
      );
      return;
    }

    console.log(
      "Python lessons found:",
      lessons.length
    );

    console.log(
      "First lesson:",
      lessons[0]
    );

    const courseElements = document.querySelectorAll(
      '[data-course="python"], ' +
      '[data-course-id="python"], ' +
      '#python-course, ' +
      '.python-course'
    );

    console.log(
      "Possible Python course containers:",
      courseElements.length
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      startPythonCheck
    );
  } else {
    startPythonCheck();
  }
})();/* =========================================
   CS MATE — CONNECT PYTHON TO COURSE SYSTEM
========================================= */

(function () {
  "use strict";

  function connectPythonCourse() {
    if (!Array.isArray(window.PYTHON_LESSONS)) {
      console.error("CS MATE: Python lessons are unavailable.");
      return;
    }

    const lessons = window.PYTHON_LESSONS;

    if (typeof window.renderCourseLessonList !== "function") {
      console.error("CS MATE: Course lesson renderer not found.");
      return;
    }

    const originalRenderList = window.renderCourseLessonList;

    window.renderCourseLessonList = function (courseId) {
      if (courseId !== "python") {
        return originalRenderList.apply(this, arguments);
      }

      const viewer = document.querySelector("#lessonViewer");
      if (!viewer) {
        console.error("CS MATE: Lesson viewer not found.");
        return;
      }

      const language =
        typeof getCurrentLanguage === "function"
          ? getCurrentLanguage()
          : "ar";

      const getText = function (value) {
        if (typeof value === "string") return value;
        return value?.[language] || value?.en || "";
      };

      viewer.hidden = false;

      viewer.innerHTML = `
        <div class="lesson-header">
          <h2>${language === "ar" ? "كورس Python" : "Python Course"}</h2>
          <p>
            ${language === "ar"
              ? `عدد الدروس: ${lessons.length}`
              : `Total lessons: ${lessons.length}`}
          </p>
          <button type="button" id="pythonBackToCourses">
            ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
          </button>
        </div>

        <div class="lesson-list">
          ${lessons.map((lesson, index) => `
            <button
              type="button"
              class="lesson-list-item"
              data-python-lesson-index="${index}"
            >
              <span>${index + 1}</span>
              <span>${getText(lesson.title)}</span>
              <span>${lesson.duration || ""}</span>
            </button>
          `).join("")}
        </div>
      `;

      viewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      viewer.querySelector("#pythonBackToCourses")
        .addEventListener("click", function () {
          viewer.hidden = true;
          document.querySelector("#coursesGrid")
            ?.scrollIntoView({ behavior: "smooth" });
        });
    };

    document.addEventListener("click", function (event) {
      const button = event.target.closest(
        "[data-python-lesson-index]"
      );

      if (!button) return;

      const index = Number(button.dataset.pythonLessonIndex);
      const lesson = lessons[index];

      if (!lesson || typeof window.renderLesson !== "function") {
        return;
      }

      window.renderLesson(lesson);
    });

    console.info(
      `CS MATE: Connected ${lessons.length} Python lessons.`
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      connectPythonCourse,
      { once: true }
    );
  } else {
    connectPythonCourse();
  }
})();/* =========================================
   CS MATE — PYTHON LESSON DATA FIX
========================================= */

window.PYTHON_LESSONS = PYTHON_LESSONS;/* ==========================================
   CS MATE — PYTHON COURSE VIEWER
   Independent lesson viewer and progress
========================================== */

(function () {
  "use strict";

  function startPythonViewer() {
    const lessons = window.PYTHON_LESSONS;

    if (!Array.isArray(lessons) || lessons.length === 0) {
      console.error("CS MATE: Python lessons were not found.");
      return;
    }

    if (document.getElementById("csmate-python-launcher")) {
      return;
    }

    const STORAGE_KEY = "csmate_python_viewer_v1";

    let saved = {};

    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      saved = {};
    }

    if (!Array.isArray(saved.completed)) saved.completed = [];

    let currentIndex = Math.min(
      Math.max(Number(saved.currentIndex) || 0, 0),
      lessons.length - 1
    );

    function getText(value) {
      if (typeof value === "string") return value;

      if (value && typeof value === "object") {
        return value.ar || value.en || "";
      }

      return "";
    }

    function save() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(saved)
        );
      } catch (error) {
        console.warn("Python progress could not be saved.", error);
      }
    }

    const style = document.createElement("style");

    style.textContent = `
      #csmate-python-launcher {
        position: fixed;
        bottom: 18px;
        right: 18px;
        z-index: 99990;
        padding: 13px 18px;
        border: 0;
        border-radius: 12px;
        background: #1677ff;
        color: white;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 5px 20px #0004;
      }

      #csmate-python-overlay {
        position: fixed;
        inset: 0;
        z-index: 99991;
        display: none;
        background: #080b12;
        color: #f3f6ff;
        overflow-y: auto;
        font-family: Arial, sans-serif;
      }

      #csmate-python-overlay * {
        box-sizing: border-box;
      }

      #csmate-python-overlay .py-shell {
        max-width: 950px;
        margin: auto;
        padding: 22px;
      }

      #csmate-python-overlay .py-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }

      #csmate-python-overlay .py-btn {
        border: 0;
        border-radius: 9px;
        padding: 11px 16px;
        color: white;
        background: #1769e0;
        cursor: pointer;
        font-size: 14px;
      }

      #csmate-python-overlay .py-btn:disabled {
        opacity: .4;
        cursor: not-allowed;
      }

      #csmate-python-overlay .py-card {
        background: #111827;
        border: 1px solid #26344a;
        border-radius: 15px;
        padding: 22px;
        margin: 18px 0;
      }

      #csmate-python-overlay .py-muted {
        color: #aebbd0;
        line-height: 1.8;
        white-space: pre-wrap;
      }

      #csmate-python-overlay .py-code {
        background: #030712;
        color: #7dd3fc;
        border-radius: 10px;
        padding: 18px;
        overflow-x: auto;
        white-space: pre-wrap;
        direction: ltr;
        text-align: left;
        line-height: 1.7;
      }

      #csmate-python-overlay .py-progress {
        height: 9px;
        background: #26344a;
        border-radius: 20px;
        overflow: hidden;
        margin: 12px 0;
      }

      #csmate-python-overlay .py-progress span {
        display: block;
        height: 100%;
        width: 0;
        background: #22c55e;
        transition: width .2s;
      }

      #csmate-python-overlay .py-nav {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 20px;
      }

      #csmate-python-overlay .py-lesson-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 10px;
        margin-top: 15px;
      }

      #csmate-python-overlay .py-lesson-item {
        width: 100%;
        text-align: start;
        padding: 14px;
        border: 1px solid #26344a;
        border-radius: 10px;
        background: #111827;
        color: #f3f6ff;
        cursor: pointer;
      }

      #csmate-python-overlay .py-lesson-item.active {
        border-color: #3987ff;
        background: #142745;
      }

      @media (max-width: 600px) {
        #csmate-python-overlay .py-shell {
          padding: 14px;
        }

        #csmate-python-overlay .py-card {
          padding: 16px;
        }

        #csmate-python-launcher {
          bottom: 12px;
          right: 12px;
        }
      }
    `;

    document.head.appendChild(style);

    const launcher = document.createElement("button");
    launcher.id = "csmate-python-launcher";
    launcher.textContent = "🐍 افتحي كورس Python";
    launcher.type = "button";

    const overlay = document.createElement("div");
    overlay.id = "csmate-python-overlay";

    overlay.innerHTML = `
      <div class="py-shell" dir="rtl">
        <div class="py-top">
          <div>
            <h1>🐍 Python Course</h1>
            <div class="py-muted" id="py-counter"></div>
          </div>
          <button type="button" class="py-btn" id="py-close">
            إغلاق الكورس ✕
          </button>
        </div>

        <div class="py-card">
          <strong>تقدمك في الكورس</strong>
          <div class="py-progress">
            <span id="py-progress-bar"></span>
          </div>
          <div class="py-muted" id="py-progress-text"></div>
        </div>

        <div class="py-card">
          <h2>قائمة الدروس</h2>
          <div class="py-lesson-list" id="py-lesson-list"></div>
        </div>

        <article class="py-card">
          <h2 id="py-title"></h2>
          <div class="py-muted" id="py-duration"></div>
          <div class="py-muted" id="py-explanation"></div>

          <h3>مثال عملي</h3>
          <pre class="py-code"><code id="py-code"></code></pre>

          <h3>شرح المثال</h3>
          <div class="py-muted" id="py-code-explanation"></div>

          <h3>أخطاء شائعة</h3>
          <div class="py-muted" id="py-mistakes"></div>

          <h3>تدريب الدرس</h3>
          <div class="py-muted" id="py-exercise"></div>

          <h3>ملخص الدرس</h3>
          <div class="py-muted" id="py-summary"></div>

          <div class="py-nav">
            <button type="button" class="py-btn" id="py-prev">
              ← الدرس السابق
            </button>

            <button type="button" class="py-btn" id="py-complete">
              إكمال الدرس ✓
            </button>

            <button type="button" class="py-btn" id="py-next">
              الدرس التالي →
            </button>
          </div>
        </article>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(overlay);

    function setText(id, value) {
      const element = document.getElementById(id);
      if (element) element.textContent = value || "";
    }

    function updateProgress() {
      const count = saved.completed.length;
      const percentage = Math.round(count / lessons.length * 100);

      document.getElementById("py-progress-bar").style.width =
        percentage + "%";

      setText(
        "py-progress-text",
        `أكملتِ ${count} من ${lessons.length} درسًا — ${percentage}%`
      );
    }

    function renderLesson() {
      const lesson = lessons[currentIndex];

      if (!lesson) return;

      setText("py-counter", `الدرس ${currentIndex + 1} من ${lessons.length}`);
      setText("py-title", getText(lesson.title));
      setText("py-duration", lesson.duration || "");
      setText("py-explanation", getText(lesson.explanation));
      setText("py-code", getText(lesson.code));

      const codeExplanation = lesson.codeExplanation;

      setText(
        "py-code-explanation",
        Array.isArray(codeExplanation)
          ? codeExplanation.map(getText).join("\n")
          : getText(codeExplanation)
      );

      const mistakes = lesson.commonMistakes;

      setText(
        "py-mistakes",
        Array.isArray(mistakes)
          ? mistakes.map(getText).join("\n")
          : getText(mistakes)
      );

      setText("py-exercise", getText(lesson.exercise));
      setText("py-summary", getText(lesson.summary));

      const id = lesson.id ?? currentIndex + 1;

      const completeButton = document.getElementById("py-complete");

      completeButton.textContent = saved.completed.includes(id)
        ? "تم إكمال الدرس ✓"
        : "إكمال الدرس ✓";

      document.getElementById("py-prev").disabled =
        currentIndex === 0;

      document.getElementById("py-next").disabled =
        currentIndex === lessons.length - 1;

      const list = document.getElementById("py-lesson-list");
      list.replaceChildren();

      lessons.forEach(function (item, index) {
        const itemId = item.id ?? index + 1;
        const button = document.createElement("button");

        button.type = "button";
        button.className = "py-lesson-item";

        if (index === currentIndex) {
          button.classList.add("active");
        }

        button.textContent =
          `${saved.completed.includes(itemId) ? "✓ " : ""}` +
          `${index + 1}. ${getText(item.title)}`;

        button.addEventListener("click", function () {
          currentIndex = index;
          saved.currentIndex = currentIndex;
          save();
          renderLesson();
        });

        list.appendChild(button);
      });

      updateProgress();

      saved.currentIndex = currentIndex;
      save();
    }

    launcher.addEventListener("click", function () {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
      renderLesson();
    });

    document.getElementById("py-close").addEventListener("click", function () {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    });

    document.getElementById("py-prev").addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        renderLesson();
      }
    });

    document.getElementById("py-next").addEventListener("click", function () {
      if (currentIndex < lessons.length - 1) {
        currentIndex++;
        renderLesson();
      }
    });

    document.getElementById("py-complete").addEventListener("click", function () {
      const id = lessons[currentIndex].id ?? currentIndex + 1;

      if (!saved.completed.includes(id)) {
        saved.completed.push(id);
      }

      save();
      renderLesson();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay.style.display === "block") {
        overlay.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    console.info(
      "CS MATE Python viewer ready:",
      lessons.length,
      "lessons"
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      startPythonViewer,
      { once: true }
    );
  } else {
    startPythonViewer();
  }
})();/* =========================================
   CS MATE — PYTHON BUTTON REPAIR
========================================= */

(function () {
  "use strict";

  function repairPythonButtons() {
    const overlay = document.getElementById("csmate-python-overlay");

    if (!overlay || overlay.dataset.buttonsRepaired === "true") {
      return;
    }

    const lessons = window.PYTHON_LESSONS;

    if (!Array.isArray(lessons) || lessons.length === 0) {
      console.error("Python lessons not found.");
      return;
    }

    overlay.dataset.buttonsRepaired = "true";

    const storageKey = "csmate_python_viewer_v1";

    function readProgress() {
      try {
        return JSON.parse(localStorage.getItem(storageKey)) || {
          currentIndex: 0,
          completed: []
        };
      } catch (error) {
        return { currentIndex: 0, completed: [] };
      }
    }

    function saveProgress(data) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(data));
      } catch (error) {
        console.error("Could not save Python progress.", error);
      }
    }

    function textOf(value) {
      if (typeof value === "string") return value;
      if (value && typeof value === "object") {
        return value.ar || value.en || "";
      }
      return "";
    }

    function showLesson(index) {
      if (index < 0 || index >= lessons.length) return;

      const lesson = lessons[index];
      const progress = readProgress();

      progress.currentIndex = index;
      saveProgress(progress);

      const fields = {
        "py-counter": `الدرس ${index + 1} من ${lessons.length}`,
        "py-title": textOf(lesson.title),
        "py-duration": lesson.duration || "",
        "py-explanation": textOf(lesson.explanation),
        "py-code": textOf(lesson.code),
        "py-exercise": textOf(lesson.exercise),
        "py-summary": textOf(lesson.summary)
      };

      Object.entries(fields).forEach(function ([id, value]) {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
      });

      const previous = document.getElementById("py-prev");
      const next = document.getElementById("py-next");

      if (previous) previous.disabled = index === 0;
      if (next) next.disabled = index === lessons.length - 1;

      const complete = document.getElementById("py-complete");
      const lessonId = lesson.id ?? index + 1;

      if (complete) {
        complete.textContent = progress.completed.includes(lessonId)
          ? "تم إكمال الدرس ✓"
          : "إكمال الدرس ✓";
      }

      const bar = document.getElementById("py-progress-bar");
      const progressText = document.getElementById("py-progress-text");
      const percentage = Math.round(
        progress.completed.length / lessons.length * 100
      );

      if (bar) bar.style.width = percentage + "%";

      if (progressText) {
        progressText.textContent = Math.round(percentage) + "%";
      }

      if (prevButton) {
        prevButton.disabled = index === 0;
      }

      if (nextButton) {
        nextButton.disabled = index === PYTHON_LESSONS.length - 1;
      }

      if (completeButton) {
        completeButton.textContent = completed.includes(lesson.id)
          ? "✓ مكتمل"
          : "تحديد كمكتمل";
      }

      if (lessonList) {
        lessonList.querySelectorAll("button").forEach((button, i) => {
          button.classList.toggle("active", i === index);
        });
      }

      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            currentIndex: index,
            completed: completed
          })
        );
      } catch (error) {
        console.warn("تعذر حفظ تقدم دروس Python:", error);
      }
    }

    overlay.addEventListener("click", function (event) {
      const target = event.target;

      if (target.closest("#py-prev")) {
        event.preventDefault();
        showLesson(currentIndex - 1);
        return;
      }

      if (target.closest("#py-next")) {
        event.preventDefault();
        showLesson(currentIndex + 1);
        return;
      }

      if (target.closest("#py-complete")) {
        event.preventDefault();

        const lesson = PYTHON_LESSONS[currentIndex];

        if (!lesson) return;

        if (completed.includes(lesson.id)) {
          completed = completed.filter(id => id !== lesson.id);
        } else {
          completed.push(lesson.id);
        }

        showLesson(currentIndex);
        return;
      }

      const lessonButton = target.closest("#py-lesson-list button");

      if (lessonButton) {
        const buttons = Array.from(
          lessonList.querySelectorAll("button")
        );

        const clickedIndex = buttons.indexOf(lessonButton);

        if (clickedIndex !== -1) {
          showLesson(clickedIndex);
        }
      }
    });

    showLesson(currentIndex);

    console.log("Python buttons initialized successfully.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", repairPythonButtons);
  } else {
    repairPythonButtons();
  }
})();