
"use strict";

/* =========================================
   CS MATE
   PART 1 — Setup and C# Course
========================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

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

const closeLessonButton = $("#closeLesson");
const previousLessonButton = $("#previousLesson");
const nextLessonButton = $("#nextLesson");
const completeLessonButton = $("#completeLesson");

const languageCount = $("#languageCount");
const lessonCount = $("#lessonCount");
const themeToggle = $("#themeToggle");
const languageToggle = $("#languageToggle");
const toast = $("#toast");

const currentYear = $("#currentYear");

const STORAGE_KEY = "csmate-progress-v1";

let activeCourse = null;
let activeLessonIndex = 0;
let toastTimeout = null;

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

const progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );
  } catch {
    showToast("تعذر حفظ التقدم على هذا الجهاز.");
  }
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* =========================================
   COURSE DATA
========================================= */

const courses = [
  {
    id: "csharp",
    name: "C#",
    englishName: "C# Programming",
    category: "programming",
    icon: "♯",
    color: "#9b7bff",
    level: "مبتدئ",
    description:
      "تعلّم C# من الأساسيات إلى البرمجة الكائنية والتطبيقات العملية.",
    lessons: [
      {
        title: "مقدمة في C#",
        description: "تعرّف على اللغة وأول برنامج لك.",
        content: `
          <h3>ما هي C#؟</h3>
          <p>
            C# لغة برمجة طورتها Microsoft، وتُستخدم
            في تطبيقات سطح المكتب والويب والألعاب وغيرها.
          </p>

          <h3>أول برنامج</h3>
          <p>هذا المثال يطبع رسالة على الشاشة:</p>

          <pre><code>Console.WriteLine("Hello, World!");</code></pre>

          <h3>شرح الكود</h3>
          <ul>
            <li><code>Console</code>: التعامل مع نافذة الأوامر.</li>
            <li><code>WriteLine()</code>: طباعة نص ثم الانتقال لسطر جديد.</li>
            <li>النص المكتوب بين علامتي اقتباس هو الرسالة المطبوعة.</li>
          </ul>

          <div class="lesson-tip">
            <strong>جرّبي بنفسك:</strong>
            غيّري الرسالة إلى اسمك ولاحظي النتيجة.
          </div>
        `,
        quiz: {
          question: "ما وظيفة Console.WriteLine()؟",
          options: [
            "إنشاء متغير",
            "طباعة رسالة على الشاشة",
            "إنهاء البرنامج دائمًا",
            "إنشاء قاعدة بيانات"
          ],
          answer: 1,
          explanation:
            "تُستخدم Console.WriteLine() لعرض النص أو القيمة في نافذة الإخراج."
        }
      },
      {
        title: "المتغيرات وأنواع البيانات",
        description: "تخزين البيانات واستخدامها في البرامج.",
        content: `
          <h3>ما هو المتغير؟</h3>
          <p>
            المتغير (Variable) مكان مسمّى نستخدمه
            لتخزين قيمة يمكن الرجوع إليها أثناء تنفيذ البرنامج.
          </p>

          <h3>مثال عملي</h3>
          <pre><code>string name = "Malak";
int age = 19;
double price = 25.5;
bool isStudent = true;

Console.WriteLine(name);
Console.WriteLine(age);</code></pre>

          <h3>أنواع البيانات</h3>
          <ul>
            <li><code>int</code>: للأعداد الصحيحة.</li>
            <li><code>double</code>: للأعداد العشرية.</li>
            <li><code>string</code>: للنصوص.</li>
            <li><code>char</code>: لحرف واحد.</li>
            <li><code>bool</code>: للقيمة true أو false.</li>
          </ul>

          <div class="lesson-tip">
            <strong>ملحوظة:</strong>
            نوع البيانات يحدد نوع القيمة التي يخزنها المتغير.
          </div>
        `,
        quiz: {
          question: "أي نوع بيانات مناسب لتخزين عدد صحيح؟",
          options: ["string", "bool", "int", "char"],
          answer: 2,
          explanation:
            "يُستخدم int لتخزين الأعداد الصحيحة مثل 10 و25 و-3."
        }
      },
      {
        title: "الشروط If و Else",
        description: "اتخاذ القرارات داخل البرنامج.",
        content: `
          <h3>ما فائدة الشروط؟</h3>
          <p>
            تسمح الشروط للبرنامج باختيار ما ينفذه
            بناءً على تحقق شرط معين.
          </p>

          <h3>مثال</h3>
          <pre><code>int mark = 85;

if (mark >= 50)
{
    Console.WriteLine("Passed");
}
else
{
    Console.WriteLine("Failed");
}</code></pre>

          <h3>كيف يعمل الكود؟</h3>
          <ol>
            <li>نخزن الدرجة داخل المتغير mark.</li>
            <li>يفحص البرنامج هل الدرجة أكبر من أو تساوي 50.</li>
            <li>إذا تحقق الشرط يطبع Passed، وإلا يطبع Failed.</li>
          </ol>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            غيّري قيمة mark إلى 40، وتوقعي الرسالة التي ستظهر.
          </div>
        `,
        quiz: {
          question: "متى يُنفذ الجزء الموجود داخل else؟",
          options: [
            "عندما يكون الشرط صحيحًا",
            "عندما يكون الشرط غير صحيح",
            "قبل فحص الشرط دائمًا",
            "عند إنشاء متغير فقط"
          ],
          answer: 1,
          explanation:
            "يُنفذ else عندما لا يتحقق الشرط الموجود في if."
        }
      }
    ]
  },

  {
    id: "python",
    name: "Python",
    englishName: "Python Programming",
    category: "programming",
    icon: "🐍",
    color: "#4da6ff",
    level: "مبتدئ",
    description:
      "ابدأ تعلم Python من المتغيرات وحتى الشروط والحلقات.",
    lessons: [
      {
        title: "مقدمة في Python",
        description: "اكتب أول برنامج بلغة Python.",
        content: `
          <h3>ما هي Python؟</h3>
          <p>
            Python لغة برمجة سهلة القراءة نسبيًا،
            وتُستخدم في تطوير الويب وتحليل البيانات
            والأتمتة والذكاء الاصطناعي.
          </p>

          <h3>أول برنامج</h3>
          <pre><code>print("Hello, World!")</code></pre>

          <h3>شرح الكود</h3>
          <ul>
            <li><code>print()</code>: تعرض قيمة أو نصًا.</li>
            <li>النص بين علامتي الاقتباس هو ما سيظهر.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            اطبعي اسمك بدلًا من Hello, World!
          </div>
        `,
        quiz: {
          question: "ما وظيفة print() في Python؟",
          options: [
            "طباعة قيمة",
            "إنشاء قاعدة بيانات",
            "حذف متغير",
            "إنشاء Class فقط"
          ],
          answer: 0,
          explanation:
            "تُستخدم print() لعرض النصوص والقيم في المخرجات."
        }
      },
      {
        title: "المتغيرات وأنواع البيانات",
        description: "تخزين النصوص والأرقام والقيم المنطقية.",
        content: `
          <h3>ما هو المتغير؟</h3>
          <p>
            المتغير اسم نستخدمه للإشارة إلى قيمة
            نحتاج إلى استخدامها داخل البرنامج.
          </p>

          <h3>مثال</h3>
          <pre><code>name = "Malak"
age = 19
price = 25.5
is_student = True

print(name)
print(age)</code></pre>

          <h3>أنواع البيانات الأساسية</h3>
          <ul>
            <li><code>str</code>: النصوص.</li>
            <li><code>int</code>: الأعداد الصحيحة.</li>
            <li><code>float</code>: الأعداد العشرية.</li>
            <li><code>bool</code>: True أو False.</li>
          </ul>

          <div class="lesson-tip">
            <strong>جرّبي:</strong>
            غيّري age إلى رقم آخر، ثم اطبعيه.
          </div>
        `,
        quiz: {
          question: "أي نوع يُستخدم للأعداد العشرية في Python؟",
          options: ["str", "int", "float", "bool"],
          answer: 2,
          explanation:
            "float يُستخدم لتمثيل الأعداد التي تحتوي على جزء عشري."
        }
      },
      {
        title: "الشروط والحلقات",
        description: "استخدام if و for لتحديد سير البرنامج.",
        content: `
          <h3>أولًا: الشروط</h3>
          <pre><code>mark = 85

if mark >= 50:
    print("Passed")
else:
    print("Failed")</code></pre>

          <p>
            تتحقق if من الشرط، وإذا لم يتحقق
            ينتقل البرنامج إلى else.
          </p>

          <h3>ثانيًا: الحلقات</h3>
          <pre><code>for number in range(1, 6):
    print(number)</code></pre>

          <p>
            تتكرر الحلقة خمس مرات، وتطبع الأعداد
            من 1 إلى 5؛ لأن الحد الأخير في range
            لا يدخل ضمن النتائج.
          </p>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            اجعلي الحلقة تطبع الأعداد من 1 إلى 10.
          </div>
        `,
        quiz: {
          question: "ما الأعداد التي ينتجها range(1, 4)؟",
          options: [
            "1 و2 و3",
            "1 و2 و3 و4",
            "0 و1 و2 و3",
            "2 و3 و4"
          ],
          answer: 0,
          explanation:
            "تبدأ range(1, 4) من 1 وتتوقف قبل الوصول إلى 4."
        }
      }
    ]
  },

  {
    id: "java",
    name: "Java",
    englishName: "Java Programming",
    category: "programming",
    icon: "☕",
    color: "#ff9b54",
    level: "مبتدئ",
    description:
      "تعلّم أساسيات Java والبرمجة الكائنية خطوة بخطوة.",
    lessons: [
      {
        title: "مقدمة في Java",
        description: "تعرّف على اللغة واكتب أول برنامج.",
        content: `
          <h3>ما هي Java؟</h3>
          <p>
            Java لغة برمجة متعددة الاستخدامات،
            وتُستخدم في تطبيقات المؤسسات والأنظمة
            وبعض تطبيقات Android وغيرها.
          </p>

          <h3>أول برنامج</h3>
          <pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

          <h3>شرح الكود</h3>
          <ul>
            <li><code>class Main</code>: تعريف كلاس اسمه Main.</li>
            <li><code>main()</code>: نقطة بداية تنفيذ البرنامج.</li>
            <li><code>System.out.println()</code>: طباعة النص بسطر جديد.</li>
            <li>الأقواس تحدد بداية ونهاية أجزاء الكود.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            غيّري النص المطبوع إلى Welcome to Java.
          </div>
        `,
        quiz: {
          question: "ما وظيفة System.out.println()؟",
          options: [
            "تعريف كلاس",
            "طباعة قيمة بسطر جديد",
            "إنشاء متغير فقط",
            "تكرار الحلقة"
          ],
          answer: 1,
          explanation:
            "تُستخدم لطباعة النصوص والقيم ثم الانتقال إلى سطر جديد."
        }
      },
      {
        title: "المتغيرات وأنواع البيانات",
        description: "تخزين البيانات والتعامل معها.",
        content: `
          <h3>تعريف المتغيرات</h3>
          <p>
            في Java نحدد نوع البيانات عند تعريف
            المتغير، مثل int للأعداد الصحيحة وString للنصوص.
          </p>

          <h3>مثال</h3>
          <pre><code>String name = "Malak";
int age = 19;
double price = 25.5;
boolean isStudent = true;

System.out.println(name);
System.out.println(age);</code></pre>

          <h3>أهم الأنواع</h3>
          <ul>
            <li><code>int</code>: عدد صحيح.</li>
            <li><code>double</code>: عدد عشري.</li>
            <li><code>String</code>: نص.</li>
            <li><code>char</code>: حرف واحد بين علامتي اقتباس مفردتين.</li>
            <li><code>boolean</code>: true أو false.</li>
          </ul>

          <div class="lesson-tip">
            <strong>ملحوظة:</strong>
            تنتهي أغلب تعليمات Java بالفاصلة المنقوطة ;
          </div>
        `,
        quiz: {
          question: "ما النوع المناسب لتخزين true أو false؟",
          options: ["String", "int", "boolean", "double"],
          answer: 2,
          explanation:
            "يُستخدم boolean لتخزين قيمة منطقية: true أو false."
        }
      },
      {
        title: "الشروط والحلقات",
        description: "التحكم في تنفيذ التعليمات وتكرارها.",
        content: `
          <h3>الشروط باستخدام if و else</h3>
          <pre><code>int mark = 75;

if (mark >= 50) {
    System.out.println("Passed");
} else {
    System.out.println("Failed");
}</code></pre>

          <p>
            إذا كانت الدرجة 50 أو أكثر ستظهر Passed،
            وإلا ستظهر Failed.
          </p>

          <h3>الحلقة for</h3>
          <pre><code>for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}</code></pre>

          <p>
            تبدأ i بقيمة 1، وتستمر الحلقة طالما
            i أصغر من أو تساوي 5، وتزيد قيمتها بمقدار 1
            بعد كل دورة.
          </p>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            عدّلي شرط الحلقة لتطبع الأعداد من 1 إلى 10.
          </div>
        `,
        quiz: {
          question: "ما وظيفة i++ في الحلقة؟",
          options: [
            "تقليل قيمة i",
            "زيادة قيمة i بمقدار 1",
            "إنهاء البرنامج",
            "تعريف String"
          ],
          answer: 1,
          explanation:
            "تزيد i++ قيمة المتغير i بمقدار واحد."
        }
      }
    ]
  },

  {
    id: "html",
    name: "HTML",
    englishName: "HTML Fundamentals",
    category: "web",
    icon: "🌐",
    color: "#ff7043",
    level: "مبتدئ",
    description:
      "تعلّم بناء صفحات الويب وتنظيم العناوين والنصوص والروابط والصور.",
    lessons: [
      {
        title: "مقدمة في HTML",
        description: "افهم وظيفة HTML وأنشئ أول صفحة ويب.",
        content: `
          <h3>ما هي HTML؟</h3>
          <p>
            HTML اختصار لـ HyperText Markup Language،
            وهي لغة توصيف تُستخدم لتحديد هيكل محتوى صفحات الويب.
          </p>

          <h3>هيكل صفحة HTML</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;Welcome to my website.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h3>شرح العناصر</h3>
          <ul>
            <li><code>html</code>: العنصر الرئيسي للصفحة.</li>
            <li><code>head</code>: معلومات الصفحة وإعداداتها.</li>
            <li><code>title</code>: عنوان الصفحة في تبويب المتصفح.</li>
            <li><code>body</code>: المحتوى الذي يظهر داخل الصفحة.</li>
            <li><code>h1</code>: عنوان رئيسي.</li>
            <li><code>p</code>: فقرة نصية.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            غيّري العنوان والنص واكتبي محتوى صفحتك الخاصة.
          </div>
        `,
        quiz: {
          question: "ما العنصر المستخدم لكتابة فقرة نصية؟",
          options: ["<h1>", "<p>", "<title>", "<head>"],
          answer: 1,
          explanation:
            "العنصر p مخصص لتمثيل الفقرات النصية في HTML."
        }
      },
      {
        title: "العناوين والنصوص والروابط",
        description: "تنظيم النصوص وإنشاء روابط قابلة للضغط.",
        content: `
          <h3>العناوين</h3>
          <p>
            توفر HTML ستة مستويات للعناوين، من h1 إلى h6،
            وتساعد في تنظيم المحتوى بشكل هرمي.
          </p>

          <pre><code>&lt;h1&gt;عنوان رئيسي&lt;/h1&gt;
&lt;h2&gt;عنوان فرعي&lt;/h2&gt;
&lt;p&gt;هذه فقرة نصية.&lt;/p&gt;
&lt;strong&gt;نص مهم&lt;/strong&gt;
&lt;em&gt;نص للتأكيد&lt;/em&gt;</code></pre>

          <h3>إنشاء رابط</h3>
          <pre><code>&lt;a href="https://example.com"&gt;
    زيارة الموقع
&lt;/a&gt;</code></pre>

          <p>
            العنصر a ينشئ رابطًا، وتحدد الخاصية href
            الوجهة التي سينتقل إليها المستخدم عند الضغط عليه.
          </p>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            أنشئي عنوانًا وفقرة ورابطًا لموقع تختارينه.
          </div>
        `,
        quiz: {
          question: "ما وظيفة الخاصية href في العنصر a؟",
          options: [
            "تغيير لون النص",
            "تحديد وجهة الرابط",
            "إضافة صورة",
            "إنشاء عنوان رئيسي"
          ],
          answer: 1,
          explanation:
            "تحدد href عنوان الوجهة التي يشير إليها الرابط."
        }
      },
      {
        title: "الصور والقوائم",
        description: "إضافة الصور وإنشاء القوائم المرتبة وغير المرتبة.",
        content: `
          <h3>إضافة صورة</h3>
          <pre><code>&lt;img
    src="image.jpg"
    alt="وصف الصورة"
    width="300"
&gt;</code></pre>

          <p>
            src يحدد مصدر الصورة، وalt يوفر وصفًا بديلًا
            يساعد في إمكانية الوصول ويظهر عند تعذر تحميل الصورة.
          </p>

          <h3>قائمة غير مرتبة</h3>
          <pre><code>&lt;ul&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>

          <h3>قائمة مرتبة</h3>
          <pre><code>&lt;ol&gt;
    &lt;li&gt;تعلّم HTML&lt;/li&gt;
    &lt;li&gt;تعلّم CSS&lt;/li&gt;
    &lt;li&gt;تعلّم JavaScript&lt;/li&gt;
&lt;/ol&gt;</code></pre>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            أنشئي قائمة بثلاث لغات برمجة وصورة لها وصف بديل.
          </div>
        `,
        quiz: {
          question: "ما العنصر المستخدم لإنشاء قائمة مرتبة؟",
          options: ["<ul>", "<li>", "<ol>", "<img>"],
          answer: 2,
          explanation:
            "العنصر ol ينشئ قائمة مرتبة، بينما ul ينشئ قائمة غير مرتبة."
        }
      }
    ]
  },

  {
    id: "css",
    name: "CSS",
    englishName: "CSS Styling",
    category: "web",
    icon: "🎨",
    color: "#42a5f5",
    level: "مبتدئ",
    description:
      "تعلّم تنسيق صفحات الويب باستخدام الألوان والخطوط والتخطيطات المتجاوبة.",
    lessons: [
      {
        title: "مقدمة في CSS",
        description: "افهم طريقة تنسيق عناصر HTML.",
        content: `
          <h3>ما هي CSS؟</h3>
          <p>
            CSS اختصار لـ Cascading Style Sheets،
            وتُستخدم للتحكم في شكل عناصر HTML،
            مثل الألوان والخطوط والمسافات والتخطيطات.
          </p>

          <h3>طرق إضافة CSS</h3>
          <p>
            يمكن كتابة CSS في ملف خارجي أو داخل عنصر
            style أو باستخدام الخاصية style داخل عنصر HTML.
            والأفضل غالبًا استخدام ملف خارجي للمشروعات المنظمة.
          </p>

          <h3>مثال</h3>
          <pre><code>h1 {
    color: purple;
    font-size: 32px;
}

p {
    color: #555;
    line-height: 1.8;
}</code></pre>

          <h3>شرح القواعد</h3>
          <ul>
            <li><code>h1</code>: العنصر الذي نريد تنسيقه.</li>
            <li><code>color</code>: لون النص.</li>
            <li><code>font-size</code>: حجم الخط.</li>
            <li><code>line-height</code>: ارتفاع السطر.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            غيّري لون العنوان وحجم الخط، ولاحظي الفرق.
          </div>
        `,
        quiz: {
          question: "ما الخاصية التي تغيّر لون النص؟",
          options: [
            "font-size",
            "background",
            "color",
            "margin"
          ],
          answer: 2,
          explanation:
            "تُستخدم color لتحديد لون النص في CSS."
        }
      },
      {
        title: "Selectors والألوان والخطوط",
        description: "اختيار عناصر HTML وتحديد مظهرها.",
        content: `
          <h3>ما هو Selector؟</h3>
          <p>
            الـ Selector هو الجزء الذي يحدد عناصر HTML
            التي ستُطبّق عليها قواعد CSS.
          </p>

          <h3>اختيار عنصر</h3>
          <pre><code>p {
    color: blue;
}</code></pre>

          <h3>اختيار Class</h3>
          <p>
            نستخدم النقطة قبل اسم الـ class في CSS.
          </p>
          <pre><code>.card {
    background-color: #20243a;
    padding: 20px;
    border-radius: 12px;
}</code></pre>

          <h3>اختيار ID</h3>
          <p>
            نستخدم علامة # قبل اسم الـ ID.
          </p>
          <pre><code>#main-title {
    color: orange;
}</code></pre>

          <h3>الخطوط</h3>
          <pre><code>body {
    font-family: Arial, sans-serif;
    font-size: 16px;
}</code></pre>

          <div class="lesson-tip">
            <strong>تذكّري:</strong>
            النقطة . لاختيار class، وعلامة # لاختيار id.
          </div>
        `,
        quiz: {
          question: "كيف نختار عنصرًا يحمل class اسمه card؟",
          options: [
            "#card",
            ".card",
            "card()",
            "@card"
          ],
          answer: 1,
          explanation:
            "نستخدم .card لاختيار العناصر التي تحمل class باسم card."
        }
      },
      {
        title: "Flexbox وResponsive Design",
        description: "ترتيب العناصر وإنشاء تصميم مناسب للموبايل.",
        content: `
          <h3>ما هو Flexbox؟</h3>
          <p>
            Flexbox نظام تخطيط يساعد على ترتيب العناصر
            داخل حاوية في صف أو عمود والتحكم في المسافات بينها.
          </p>

          <h3>مثال</h3>
          <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}</code></pre>

          <ul>
            <li><code>display: flex</code>: تفعيل Flexbox.</li>
            <li><code>justify-content</code>: توزيع العناصر على المحور الرئيسي.</li>
            <li><code>align-items</code>: محاذاة العناصر على المحور الآخر.</li>
            <li><code>gap</code>: تحديد المسافة بين العناصر.</li>
            <li><code>flex-wrap</code>: السماح للعناصر بالانتقال لسطر آخر.</li>
          </ul>

          <h3>تصميم متجاوب</h3>
          <pre><code>.card {
    width: 50%;
}

@media (max-width: 600px) {
    .card {
        width: 100%;
    }
}</code></pre>

          <p>
            عند استخدام شاشة عرضها 600px أو أقل،
            سيصبح عرض البطاقة 100% من المساحة المتاحة.
          </p>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            جرّبي تغيير عرض الشاشة وشاهدي كيف يتغير تصميم البطاقة.
          </div>
        `,
        quiz: {
          question: "ما وظيفة @media في CSS؟",
          options: [
            "إنشاء متغير JavaScript",
            "تغيير التصميم حسب خصائص الشاشة",
            "إنشاء رابط",
            "إضافة محتوى نصي"
          ],
          answer: 1,
          explanation:
            "تسمح Media Queries بتطبيق قواعد CSS وفق خصائص الشاشة مثل العرض."
        }
      }
    ]
  },

  {
    id: "javascript",
    name: "JavaScript",
    englishName: "JavaScript Fundamentals",
    category: "web",
    icon: "⚡",
    color: "#f0db4f",
    level: "مبتدئ",
    description:
      "تعلّم البرمجة التفاعلية للويب باستخدام المتغيرات والشروط والدوال والتعامل مع الصفحة.",
    lessons: [
      {
        title: "مقدمة في JavaScript",
        description: "اكتب أول كود JavaScript وتعرّف على طريقة عمله.",
        content: `
          <h3>ما هي JavaScript؟</h3>
          <p>
            JavaScript لغة برمجة تُستخدم لإضافة التفاعل
            إلى صفحات الويب، ويمكن تشغيلها في المتصفح
            واستخدامها أيضًا في بيئات أخرى مثل Node.js.
          </p>

          <h3>أول مثال</h3>
          <pre><code>console.log("Hello, World!");</code></pre>

          <p>
            تعرض console.log() القيمة داخل وحدة التحكم
            (Console) في أدوات المطور بالمتصفح.
          </p>

          <h3>عرض رسالة للمستخدم</h3>
          <pre><code>alert("Welcome to JavaScript!");</code></pre>

          <p>
            تعرض alert() نافذة تنبيه للمستخدم.
            في المشروعات الحقيقية، نستخدمها عند الحاجة فقط
            لأنها توقف التفاعل مع الصفحة حتى يغلقها المستخدم.
          </p>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            غيّري النص داخل console.log() واكتبي رسالة من اختيارك.
          </div>
        `,
        quiz: {
          question: "ما وظيفة console.log()؟",
          options: [
            "عرض قيمة في وحدة التحكم",
            "إنشاء ملف HTML",
            "تغيير لون الصفحة تلقائيًا",
            "حذف عناصر الموقع"
          ],
          answer: 0,
          explanation:
            "تُستخدم console.log() لعرض القيم والرسائل في وحدة التحكم."
        }
      },
      {
        title: "المتغيرات وأنواع البيانات",
        description: "تخزين البيانات والتعامل معها باستخدام JavaScript.",
        content: `
          <h3>تعريف المتغيرات</h3>
          <p>
            المتغير اسم يشير إلى قيمة نستخدمها في البرنامج.
            يمكن تعريف المتغيرات باستخدام let أو const.
          </p>

          <h3>مثال</h3>
          <pre><code>let name = "Malak";
let age = 19;
const country = "Egypt";
let isStudent = true;

console.log(name);
console.log(age);</code></pre>

          <h3>الفرق بين let و const</h3>
          <ul>
            <li><code>let</code>: تسمح بإسناد قيمة جديدة للمتغير.</li>
            <li><code>const</code>: لا تسمح بإعادة إسناد قيمة جديدة للمتغير نفسه.</li>
          </ul>

          <h3>أنواع بيانات شائعة</h3>
          <ul>
            <li><code>String</code>: النصوص.</li>
            <li><code>Number</code>: الأعداد الصحيحة والعشرية.</li>
            <li><code>Boolean</code>: true أو false.</li>
            <li><code>Array</code>: مجموعة مرتبة من القيم.</li>
            <li><code>Object</code>: بيانات على هيئة خصائص وقيم.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            أنشئي متغيرًا باسم favoriteLanguage وخزّني فيه اسم لغتك المفضلة.
          </div>
        `,
        quiz: {
          question: "أي كلمة نستخدمها لتعريف متغير لا نريد إعادة إسناد قيمته؟",
          options: ["if", "for", "const", "return"],
          answer: 2,
          explanation:
            "const تمنع إعادة إسناد قيمة جديدة للمتغير بعد تعريفه."
        }
      },
      {
        title: "الشروط والدوال",
        description: "اتخاذ القرارات وتنظيم الكود في دوال قابلة لإعادة الاستخدام.",
        content: `
          <h3>الشروط</h3>
          <pre><code>let mark = 85;

if (mark >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}</code></pre>

          <p>
            يفحص if الشرط، وينفذ الكود المناسب حسب النتيجة.
          </p>

          <h3>الدوال Functions</h3>
          <pre><code>function greet(name) {
  return "Hello, " + name;
}

const message = greet("Malak");
console.log(message);</code></pre>

          <h3>شرح المثال</h3>
          <ul>
            <li><code>function</code>: تُستخدم لتعريف دالة.</li>
            <li><code>name</code>: معامل تستقبله الدالة.</li>
            <li><code>return</code>: تعيد نتيجة من الدالة.</li>
            <li><code>greet("Malak")</code>: تستدعي الدالة وتُمرر لها قيمة.</li>
          </ul>

          <div class="lesson-tip">
            <strong>تحدّي:</strong>
            عدّلي الدالة لتعيد رسالة ترحيب باسم تختارينه.
          </div>
        `,
        quiz: {
          question: "ما وظيفة return داخل الدالة؟",
          options: [
            "إعادة نتيجة من الدالة",
            "تغيير لون النص",
            "إنشاء عنصر HTML دائمًا",
            "بدء حلقة for"
          ],
          answer: 0,
          explanation:
            "تُستخدم return لإرجاع قيمة من الدالة إلى المكان الذي استدعاها."
        }
      },
      {
        title: "التعامل مع عناصر HTML",
        description: "تغيير محتوى الصفحة والاستجابة لضغطات المستخدم.",
        content: `
          <h3>اختيار عنصر من الصفحة</h3>
          <pre><code>const title = document.querySelector("#title");

title.textContent = "Welcome!";</code></pre>

          <p>
            يختار querySelector أول عنصر يطابق المحدد،
            ويغيّر textContent النص الموجود داخله.
          </p>

          <h3>التعامل مع الأحداث</h3>
          <pre><code>const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  alert("Button clicked!");
});</code></pre>

          <p>
            يستمع addEventListener إلى حدث click،
            وينفذ الدالة عندما يضغط المستخدم على الزر.
          </p>

          <div class="lesson-tip">
            <strong>مهم:</strong>
            يجب أن يكون العنصران #title و#myButton موجودين في HTML
            حتى يعمل المثال كما هو متوقع.
          </div>
        `,
        quiz: {
          question: "ما وظيفة addEventListener('click', ... )؟",
          options: [
            "إنشاء قاعدة بيانات",
            "تنفيذ كود عند الضغط على العنصر",
            "حذف ملف CSS",
            "تعريف نوع بيانات جديد"
          ],
          answer: 1,
          explanation:
            "يربط addEventListener دالة بحدث معين، مثل الضغط على الزر."
        }
      }
    ]
  },

  {
    id: "sql",
    name: "SQL",
    englishName: "SQL & Databases",
    category: "database",
    icon: "🗄️",
    color: "#52c7b8",
    level: "مبتدئ",
    description:
      "تعلّم إنشاء قواعد البيانات والجداول والاستعلام عن البيانات وتعديلها.",
    lessons: [
      {
        title: "مقدمة في SQL",
        description: "تعرّف على قواعد البيانات وأوامر SQL الأساسية.",
        content: `
          <h3>ما هي SQL؟</h3>
          <p>
            SQL اختصار لـ Structured Query Language،
            وهي لغة تُستخدم للتعامل مع قواعد البيانات العلائقية،
            مثل استرجاع البيانات وإضافتها وتعديلها وحذفها.
          </p>

          <h3>استرجاع البيانات</h3>
          <pre><code>SELECT *
FROM Students;</code></pre>

          <p>
            هذا الاستعلام يعرض جميع الأعمدة والصفوف
            الموجودة في جدول Students.
          </p>

          <h3>اختيار أعمدة معينة</h3>
          <pre><code>SELECT Name, Age
FROM Students;</code></pre>

          <p>
            هنا نطلب عرض عمودي Name وAge فقط.
          </p>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            اكتبي استعلامًا يعرض عمود Name فقط من جدول Students.
          </div>
        `,
        quiz: {
          question: "ما وظيفة SELECT في SQL؟",
          options: [
            "استرجاع البيانات",
            "حذف قاعدة البيانات دائمًا",
            "تغيير لون الجدول",
            "إنشاء ملف HTML"
          ],
          answer: 0,
          explanation:
            "يُستخدم SELECT لاسترجاع البيانات من قاعدة البيانات."
        }
      },
      {
        title: "إضافة البيانات وتعديلها وحذفها",
        description: "تعلّم أوامر INSERT وUPDATE وDELETE.",
        content: `
          <h3>إضافة بيانات</h3>
          <pre><code>INSERT INTO Students (Name, Age)
VALUES ('Malak', 19);</code></pre>

          <p>
            يضيف هذا الأمر سجلًا جديدًا إلى جدول Students.
          </p>

          <h3>تعديل البيانات</h3>
          <pre><code>UPDATE Students
SET Age = 20
WHERE Name = 'Malak';</code></pre>

          <p>
            يغيّر الأمر قيمة Age للصفوف التي تحقق الشرط.
            يجب الانتباه إلى WHERE حتى لا يتم تعديل كل الصفوف.
          </p>

          <h3>حذف البيانات</h3>
          <pre><code>DELETE FROM Students
WHERE Name = 'Malak';</code></pre>

          <p>
            يحذف الأمر الصفوف التي تحقق الشرط.
            احرصي على مراجعة شرط WHERE قبل تنفيذ الحذف.
          </p>

          <div class="lesson-tip">
            <strong>تذكّري:</strong>
            INSERT للإضافة، وUPDATE للتعديل، وDELETE للحذف.
          </div>
        `,
        quiz: {
          question: "أي أمر يُستخدم لتعديل بيانات موجودة؟",
          options: ["SELECT", "INSERT", "UPDATE", "CREATE"],
          answer: 2,
          explanation:
            "يُستخدم UPDATE لتعديل قيم الصفوف الموجودة في الجدول."
        }
      },
      {
        title: "الشروط والربط بين الجداول",
        description: "تصفية البيانات وفهم العلاقات بين الجداول.",
        content: `
          <h3>استخدام WHERE</h3>
          <pre><code>SELECT Name, Age
FROM Students
WHERE Age >= 18;</code></pre>

          <p>
            يعرض الاستعلام الطلاب الذين أعمارهم 18 عامًا أو أكثر.
          </p>

          <h3>ترتيب النتائج</h3>
          <pre><code>SELECT Name, Age
FROM Students
ORDER BY Age DESC;</code></pre>

          <p>
            يرتب النتائج حسب العمر من الأكبر إلى الأصغر.
            DESC للترتيب التنازلي، وASC للتصاعدي.
          </p>

          <h3>ربط جدولين باستخدام JOIN</h3>
          <pre><code>SELECT Students.Name, Courses.CourseName
FROM Students
INNER JOIN Courses
ON Students.CourseID = Courses.ID;</code></pre>

          <p>
            يربط INNER JOIN الصفوف المتطابقة بين الجدولين
            وفق الشرط الموجود في ON.
          </p>

          <div class="lesson-tip">
            <strong>ملحوظة:</strong>
            يجب أن تتوافق أسماء الجداول والأعمدة مع تصميم قاعدة البيانات الفعلي.
          </div>
        `,
        quiz: {
          question: "ما وظيفة WHERE في SQL؟",
          options: [
            "تصفية الصفوف حسب شرط",
            "إنشاء لغة برمجة جديدة",
            "تغيير شكل صفحة الويب",
            "إضافة صورة إلى الجدول"
          ],
          answer: 0,
          explanation:
            "تحدد WHERE الصفوف التي تحقق شرطًا معينًا."
        }
      }
    ]
  },

  {
    id: "php",
    name: "PHP",
    englishName: "PHP Web Development",
    category: "web",
    icon: "🐘",
    color: "#a99bff",
    level: "مبتدئ",
    description:
      "تعلّم أساسيات PHP وكيفية استقبال البيانات وإنشاء صفحات ويب ديناميكية.",
    lessons: [
      {
        title: "مقدمة في PHP",
        description: "تعرّف على PHP وطريقة كتابة أول كود.",
        content: `
          <h3>ما هي PHP؟</h3>
          <p>
            PHP لغة برمجة تُستخدم غالبًا في جانب الخادم
            (Server-side)، ويمكنها إنشاء محتوى صفحات ويب ديناميكي.
          </p>

          <h3>أول كود</h3>
          <pre><code>&lt;?php
echo "Hello, World!";
?&gt;</code></pre>

          <p>
            الأمر echo يطبع النص أو القيمة الناتجة.
            ويبدأ كود PHP عادةً بالرمز &lt;?php.
          </p>

          <h3>المتغيرات</h3>
          <pre><code>&lt;?php
$name = "Malak";
$age = 19;

echo $name;
echo $age;
?&gt;</code></pre>

          <p>
            يبدأ اسم المتغير في PHP بعلامة الدولار $.
          </p>

          <div class="lesson-tip">
            <strong>تذكّري:</strong>
            هذا الكود يحتاج إلى بيئة تشغّل PHP؛
            نسخه داخل ملف HTML وحده لا يشغّله ككود PHP.
          </div>
        `,
        quiz: {
          question: "بأي رمز تبدأ أسماء المتغيرات في PHP؟",
          options: ["#", "$", "@", "&"],
          answer: 1,
          explanation:
            "تبدأ أسماء المتغيرات في PHP بعلامة الدولار $."
        }
      },
      {
        title: "الشروط والحلقات",
        description: "استخدام if وfor في تنفيذ الأوامر.",
        content: `
          <h3>الجمل الشرطية</h3>
          <pre><code>&lt;?php
$age = 20;

if ($age >= 18) {
    echo "Adult";
} else {
    echo "Under 18";
}
?&gt;</code></pre>

          <p>
            تُنفّذ if الأوامر حسب تحقق الشرط،
            بينما تُنفّذ else عند عدم تحققه.
          </p>

          <h3>حلقة for</h3>
          <pre><code>&lt;?php
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
?&gt;</code></pre>

          <p>
            تبدأ الحلقة من 1 وتستمر ما دام الشرط صحيحًا،
            وتزيد قيمة i بمقدار واحد في كل دورة.
          </p>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            عدّلي الحلقة لتطبع الأرقام من 1 إلى 10.
          </div>
        `,
        quiz: {
          question: "متى يُنفّذ الجزء الموجود داخل else؟",
          options: [
            "عندما يتحقق شرط if دائمًا",
            "عندما لا يتحقق شرط if",
            "قبل فحص الشرط",
            "مرة واحدة فقط في كل البرامج"
          ],
          answer: 1,
          explanation:
            "يُنفّذ else عندما يكون شرط if غير صحيح."
        }
      },
      {
        title: "استقبال البيانات من النماذج",
        description: "فهم طريقة إرسال بيانات نموذج HTML إلى PHP.",
        content: `
          <h3>نموذج HTML</h3>
          <pre><code>&lt;form action="welcome.php" method="post"&gt;
  &lt;input type="text" name="username"&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>

          <h3>استقبال البيانات في PHP</h3>
          <pre><code>&lt;?php
$username = $_POST["username"] ?? "";
echo htmlspecialchars($username);
?&gt;</code></pre>

          <p>
            يُستخدم $_POST للوصول إلى البيانات المُرسلة بطريقة POST.
            وتساعد htmlspecialchars على عرض النص بأمان داخل HTML.
          </p>

          <div class="lesson-tip">
            <strong>مهم:</strong>
            عند بناء موقع حقيقي، تحققي من البيانات على الخادم،
            ولا تعتمدي على فحص المتصفح وحده.
          </div>
        `,
        quiz: {
          question: "ما الغرض من $_POST في PHP؟",
          options: [
            "استقبال بيانات أُرسلت باستخدام POST",
            "تغيير ألوان CSS",
            "إنشاء جدول SQL تلقائيًا",
            "تشغيل JavaScript داخل المتصفح"
          ],
          answer: 0,
          explanation:
            "تتيح $_POST الوصول إلى البيانات المُرسلة عبر طلب POST."
        }
      }
    ]
  },

  {
    id: "dart",
    name: "Dart",
    englishName: "Dart Programming",
    category: "mobile",
    icon: "🎯",
    color: "#55b8e8",
    level: "مبتدئ",
    description:
      "تعلّم أساسيات Dart استعدادًا لتطوير تطبيقات الموبايل باستخدام Flutter.",
    lessons: [
      {
        title: "مقدمة في Dart",
        description: "تعرّف على اللغة واكتب أول برنامج.",
        content: `
          <h3>ما هي Dart؟</h3>
          <p>
            Dart لغة برمجة طورتها Google، وتُستخدم مع Flutter
            لبناء تطبيقات تعمل على منصات متعددة.
          </p>

          <h3>أول برنامج</h3>
          <pre><code>void main() {
  print('Hello, World!');
}</code></pre>

          <p>
            الدالة main هي نقطة بداية تنفيذ البرنامج،
            بينما print تطبع النص في المخرجات.
          </p>

          <h3>المتغيرات</h3>
          <pre><code>void main() {
  String name = 'Malak';
  int age = 19;
  double grade = 95.5;
  bool isStudent = true;

  print(name);
  print(age);
}</code></pre>

          <div class="lesson-tip">
            <strong>تذكّري:</strong>
            String للنصوص، وint للأعداد الصحيحة،
            وdouble للأعداد العشرية، وbool للقيم المنطقية.
          </div>
        `,
        quiz: {
          question: "ما الدالة التي تبدأ منها عملية تنفيذ برنامج Dart عادةً؟",
          options: ["start()", "main()", "print()", "runCode()"],
          answer: 1,
          explanation:
            "الدالة main هي نقطة بداية تنفيذ البرنامج في Dart."
        }
      },
      {
        title: "الشروط والحلقات",
        description: "استخدام if وfor للتحكم في سير البرنامج.",
        content: `
          <h3>الجمل الشرطية</h3>
          <pre><code>void main() {
  int age = 20;

  if (age >= 18) {
    print('Adult');
  } else {
    print('Under 18');
  }
}</code></pre>

          <h3>حلقة for</h3>
          <pre><code>void main() {
  for (int i = 1; i <= 5; i++) {
    print(i);
  }
}</code></pre>

          <p>
            تكرر حلقة for تنفيذ الأوامر طالما أن الشرط صحيح.
            في المثال، ستُطبع الأرقام من 1 إلى 5.
          </p>

          <div class="lesson-tip">
            <strong>تدريب:</strong>
            غيّري قيمة الشرط لتطبع الحلقة الأرقام من 1 إلى 10.
          </div>
        `,
        quiz: {
          question: "ما نتيجة الشرط age >= 18 عندما تكون age = 20؟",
          options: [
            "true",
            "false",
            "خطأ في بناء الجملة",
            "لا توجد نتيجة"
          ],
          answer: 0,
          explanation:
            "بما أن 20 أكبر من أو تساوي 18، فالشرط صحيح."
        }
      },
      {
        title: "الدوال والقوائم",
        description: "إنشاء الدوال والتعامل مع List.",
        content: `
          <h3>إنشاء دالة</h3>
          <pre><code>int add(int a, int b) {
  return a + b;
}

void main() {
  print(add(3, 4));
}</code></pre>

          <p>
            تستقبل الدالة add عددين وتُرجع مجموعهما باستخدام return.
          </p>

          <h3>القوائم List</h3>
          <pre><code>void main() {
  List<String> names = ['Ali', 'Malak', 'Omar'];

  print(names[0]);

  names.add('Mona');

  print(names.length);
}</code></pre>

          <p>
            يبدأ فهرس القائمة من صفر؛ لذلك names[0] تُرجع Ali.
            وتضيف add عنصرًا جديدًا إلى القائمة.
          </p>

          <div class="lesson-tip">
            <strong>معلومة:</strong>
            بعد فهم أساسيات Dart، يمكنك الانتقال إلى Flutter
            لتتعلمي بناء واجهات تطبيقات الموبايل.
          </div>
        `,
        quiz: {
          question: "ما قيمة names[0] في المثال السابق؟",
          options: ["Malak", "Omar", "Ali", "Mona"],
          answer: 2,
          explanation:
            "أول عنصر في القائمة يحمل الفهرس صفر، وهو Ali."
        }
      }
    ]
  },

/* =========================================
   CS MATE — PART 10
   Course setup and progress helpers
========================================= */

// إغلاق مصفوفة الكورسات بعد إضافة جميع الكورسات
];

// حساب عدد الدروس في جميع الكورسات
function getTotalLessons() {
  return courses.reduce(
    (total, course) => total + course.lessons.length,
    0
  );
}

// معرفة عدد الدروس المكتملة في كورس معين
function getCompletedLessons(course) {
  const completed = progress[course.id] || [];
  return course.lessons.filter((lesson) =>
    completed.includes(lesson.title)
  ).length;
}

// حساب نسبة التقدم في كورس معين
function getCourseProgress(course) {
  if (course.lessons.length === 0) return 0;

  return Math.round(
    (getCompletedLessons(course) / course.lessons.length) * 100
  );
}

// التحقق من اكتمال درس
function isLessonCompleted(course, lesson) {
  const completed = progress[course.id] || [];
  return completed.includes(lesson.title);
}

// حفظ درس مكتمل
function markLessonCompleted(course, lesson) {
  if (!progress[course.id]) {
    progress[course.id] = [];
  }

  if (!progress[course.id].includes(lesson.title)) {
    progress[course.id].push(lesson.title);
    saveProgress();
  }
}

// إلغاء حالة اكتمال درس
function unmarkLessonCompleted(course, lesson) {
  if (!progress[course.id]) return;

  progress[course.id] = progress[course.id].filter(
    (title) => title !== lesson.title
  );

  saveProgress();
}

// تحديث الأرقام الظاهرة في الصفحة
function updateStatistics() {
  if (languageCount) {
    languageCount.textContent = courses.length;
  }

  if (lessonCount) {
    lessonCount.textContent = getTotalLessons();
  }
}

// الحصول على اسم التصنيف بالعربية
function getCategoryName(category) {
  const categories = {
    programming: "البرمجة",
    web: "تطوير الويب",
    database: "قواعد البيانات",
    mobile: "تطبيقات الموبايل"
  };

  return categories[category] || "عام";
}

// تحويل النص إلى صيغة آمنة عند عرضه كـ HTML
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
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

/* =========================================
   CS MATE — PART 11
   Render courses, search and filters
========================================= */

// إنشاء بطاقة كورس
function createCourseCard(course) {
  const completed = getCompletedLessons(course);
  const total = course.lessons.length;
  const percentage = getCourseProgress(course);

  const card = document.createElement("article");
  card.className = "course-card";
  card.style.setProperty("--course-color", course.color);

  card.innerHTML = `
    <div class="course-card-header">
      <span class="course-icon">${escapeHTML(course.icon)}</span>
      <span class="course-level">${escapeHTML(course.level)}</span>
    </div>

    <h3 class="course-name">${escapeHTML(course.name)}</h3>

    <p class="course-english-name">
      ${escapeHTML(course.englishName)}
    </p>

    <p class="course-description">
      ${escapeHTML(course.description)}
    </p>

    <div class="course-meta">
      <span>📚 ${total} دروس</span>
      <span>🏷️ ${escapeHTML(getCategoryName(course.category))}</span>
    </div>

    <div class="course-progress-info">
      <span>تقدمك في الكورس</span>
      <span>${percentage}%</span>
    </div>

    <div
      class="course-progress-track"
      role="progressbar"
      aria-label="نسبة إكمال الكورس"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="${percentage}"
    >
      <div
        class="course-progress-fill"
        style="width: ${percentage}%"
      ></div>
    </div>

    <p class="course-completed-count">
      أكملت ${completed} من ${total} دروس
    </p>

    <button
      type="button"
      class="course-open-button"
      data-course-id="${escapeHTML(course.id)}"
    >
      ${percentage === 100 ? "مراجعة الكورس" : "ابدأ التعلّم"}
      <span aria-hidden="true">←</span>
    </button>
  `;

  const openButton = card.querySelector(".course-open-button");

  openButton.addEventListener("click", () => {
    openCourse(course.id);
  });

  return card;
}

// عرض الكورسات داخل الصفحة
function renderCourses() {
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
      course.englishName,
      course.description,
      getCategoryName(course.category)
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  languageGrid.replaceChildren();

  filteredCourses.forEach((course) => {
    languageGrid.appendChild(createCourseCard(course));
  });

  if (emptyState) {
    emptyState.hidden = filteredCourses.length > 0;
  }
}

// تفعيل البحث أثناء الكتابة
if (searchInput) {
  searchInput.addEventListener("input", renderCourses);
}

// تفعيل فلتر التصنيفات
if (categoryFilter) {
  categoryFilter.addEventListener("change", renderCourses);
}

// إعادة رسم البطاقات عند تغيّر التقدم
function refreshCourses() {
  updateStatistics();
  renderCourses();
}

/* =========================================
   CS MATE — PART 12
   Open courses and navigate lessons
========================================= */

// فتح كورس محدد
function openCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    showToast("لم نتمكن من العثور على هذا الكورس.");
    return;
  }

  if (course.lessons.length === 0) {
    showToast("لا توجد دروس في هذا الكورس حتى الآن.");
    return;
  }

  activeCourse = course;
  activeLessonIndex = 0;

  // افتحي أول درس لم يكتمل، إن وُجد
  const firstUncompletedIndex = course.lessons.findIndex(
    (lesson) => !isLessonCompleted(course, lesson)
  );

  if (firstUncompletedIndex !== -1) {
    activeLessonIndex = firstUncompletedIndex;
  }

  renderLessonNavigation();
  renderActiveLesson();

  if (lessonModal) {
    lessonModal.hidden = false;
    lessonModal.setAttribute("aria-hidden", "false");
    lessonModal.classList.add("active", "open", "show");
    document.body.classList.add("modal-open");
  }
}

// إنشاء قائمة الدروس الجانبية
function renderLessonNavigation() {
  if (!activeCourse || !lessonNavigation) return;

  lessonNavigation.replaceChildren();

  activeCourse.lessons.forEach((lesson, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "lesson-nav-button";

    if (index === activeLessonIndex) {
      button.classList.add("active");
      button.setAttribute("aria-current", "step");
    }

    if (isLessonCompleted(activeCourse, lesson)) {
      button.classList.add("completed");
    }

    button.innerHTML = `
      <span class="lesson-nav-number">
        ${
          isLessonCompleted(activeCourse, lesson)
            ? "✓"
            : index + 1
        }
      </span>

      <span class="lesson-nav-title">
        ${escapeHTML(lesson.title)}
      </span>
    `;

    button.addEventListener("click", () => {
      activeLessonIndex = index;
      renderLessonNavigation();
      renderActiveLesson();
    });

    lessonNavigation.appendChild(button);
  });
}

// عرض بيانات الدرس الحالي
function renderActiveLesson() {
  if (!activeCourse) return;

  const lesson = activeCourse.lessons[activeLessonIndex];

  if (!lesson) return;

  if (lessonLanguage) {
    lessonLanguage.textContent = activeCourse.name;
  }

  if (lessonTitle) {
    lessonTitle.textContent = lesson.title;
  }

  if (lessonDescription) {
    lessonDescription.textContent = lesson.description || "";
  }

  if (lessonContent) {
    lessonContent.innerHTML = lesson.content || "";
  }

  if (previousLessonButton) {
    previousLessonButton.disabled = activeLessonIndex === 0;
  }

  if (nextLessonButton) {
    nextLessonButton.disabled =
      activeLessonIndex === activeCourse.lessons.length - 1;
  }

  if (completeLessonButton) {
    const completed = isLessonCompleted(activeCourse, lesson);

    completeLessonButton.textContent = completed
      ? "إلغاء إكمال الدرس"
      : "إكمال الدرس ✓";

    completeLessonButton.setAttribute(
      "aria-pressed",
      String(completed)
    );
  }

  renderLessonNavigation();
}

// الانتقال إلى الدرس السابق
if (previousLessonButton) {
  previousLessonButton.addEventListener("click", () => {
    if (!activeCourse || activeLessonIndex <= 0) return;

    activeLessonIndex--;
    renderActiveLesson();
  });
}

// الانتقال إلى الدرس التالي
if (nextLessonButton) {
  nextLessonButton.addEventListener("click", () => {
    if (
      !activeCourse ||
      activeLessonIndex >= activeCourse.lessons.length - 1
    ) {
      return;
    }

    activeLessonIndex++;
    renderActiveLesson();
  });
}

/* =========================================
   CS MATE — PART 13
   Complete lessons and save progress
========================================= */

// إكمال الدرس الحالي أو إلغاء إكماله
if (completeLessonButton) {
  completeLessonButton.addEventListener("click", () => {
    if (!activeCourse) return;

    const lesson = activeCourse.lessons[activeLessonIndex];

    if (!lesson) return;

    const completed = isLessonCompleted(activeCourse, lesson);

    if (completed) {
      unmarkLessonCompleted(activeCourse, lesson);
      showToast("تم إلغاء إكمال الدرس.");
    } else {
      markLessonCompleted(activeCourse, lesson);
      showToast("أحسنتِ! تم تسجيل إكمال الدرس 🎉");
    }

    // تحديث قائمة الدروس ونسبة التقدم
    renderLessonNavigation();
    renderActiveLesson();
    refreshCourses();
  });
}

// إغلاق نافذة الدروس
function closeCourseModal() {
  if (!lessonModal) return;

  lessonModal.classList.remove("active", "open", "show");
  lessonModal.hidden = true;
  lessonModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

// زر إغلاق نافذة الدروس
if (closeLessonButton) {
  closeLessonButton.addEventListener("click", closeCourseModal);
}

// الإغلاق عند الضغط على خلفية النافذة
if (lessonModal) {
  lessonModal.addEventListener("click", (event) => {
    if (event.target === lessonModal) {
      closeCourseModal();
    }
  });
}

// الإغلاق بزر Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lessonModal && !lessonModal.hidden) {
    closeCourseModal();
  }
});

// منع التنقل غير الصحيح بين الدروس
function goToLesson(index) {
  if (!activeCourse) return;

  if (index < 0 || index >= activeCourse.lessons.length) {
    return;
  }

  activeLessonIndex = index;
  renderLessonNavigation();
  renderActiveLesson();
}

/* =========================================
   CS MATE — PART 14
   Interactive quizzes and answer checking
========================================= */

// عرض الاختبار الخاص بالدرس
function renderLessonQuiz(lesson) {
  if (!lessonContent || !lesson.quiz) return;

  const quiz = lesson.quiz;
  const quizSection = document.createElement("section");

  quizSection.className = "quiz-box";
  quizSection.setAttribute("aria-label", "اختبار الدرس");

  const heading = document.createElement("h3");
  heading.textContent = "اختبر فهمك 🧠";

  const question = document.createElement("p");
  question.className = "quiz-question";
  question.textContent = quiz.question;

  const optionsContainer = document.createElement("div");
  optionsContainer.className = "quiz-options";

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";
  feedback.hidden = true;
  feedback.setAttribute("aria-live", "polite");

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "quiz-check-button";
  checkButton.textContent = "تحقّق من الإجابة";

  let selectedAnswer = null;
  let answered = false;

  quiz.options.forEach((option, index) => {
    const optionButton = document.createElement("button");

    optionButton.type = "button";
    optionButton.className = "quiz-option";
    optionButton.textContent = option;
    optionButton.setAttribute("aria-pressed", "false");

    optionButton.addEventListener("click", () => {
      if (answered) return;

      selectedAnswer = index;

      optionsContainer.querySelectorAll(".quiz-option").forEach((item) => {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
      });

      optionButton.classList.add("selected");
      optionButton.setAttribute("aria-pressed", "true");
    });

    optionsContainer.appendChild(optionButton);
  });

  checkButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
      showToast("اختاري إجابة الأول.");
      return;
    }

    if (answered) return;

    answered = true;

    const isCorrect = selectedAnswer === quiz.answer;

    feedback.hidden = false;
    feedback.classList.toggle("correct", isCorrect);
    feedback.classList.toggle("incorrect", !isCorrect);

    feedback.textContent = isCorrect
      ? `إجابة صحيحة! 🎉 ${quiz.explanation || ""}`
      : `إجابة غير صحيحة. ${quiz.explanation || "راجعي الدرس وحاولي مرة أخرى."}`;

    optionsContainer.querySelectorAll(".quiz-option").forEach((item, index) => {
      item.disabled = true;

      if (index === quiz.answer) {
        item.classList.add("correct");
      } else if (index === selectedAnswer) {
        item.classList.add("incorrect");
      }
    });

    checkButton.disabled = true;
    checkButton.textContent = isCorrect ? "إجابة صحيحة ✓" : "تم التصحيح";
  });

  quizSection.append(
    heading,
    question,
    optionsContainer,
    checkButton,
    feedback
  );

  lessonContent.appendChild(quizSection);
}

// إعادة عرض الدرس وإضافة الاختبار الخاص به
const originalRenderActiveLesson = renderActiveLesson;

renderActiveLesson = function () {
  originalRenderActiveLesson();

  if (!activeCourse || !lessonContent) return;

  const lesson = activeCourse.lessons[activeLessonIndex];

  if (lesson && lesson.quiz) {
    renderLessonQuiz(lesson);
  }
};

/* =========================================
   CS MATE — PART 15
   Theme, language direction and footer
========================================= */

// تفعيل الوضع المحفوظ أو الوضع الافتراضي
function initializeTheme() {
  const savedTheme = localStorage.getItem("csmate-theme");
  const theme = savedTheme === "light" ? "light" : "dark";

  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.textContent =
      theme === "dark" ? "☀️ الوضع النهاري" : "🌙 الوضع الليلي";

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"
    );
  }
}

// التبديل بين الوضعين
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme || "dark";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem("csmate-theme", nextTheme);
    } catch {
      // يستمر تغيير المظهر حتى لو تعذر حفظه.
    }

    themeToggle.textContent =
      nextTheme === "dark" ? "☀️ الوضع النهاري" : "🌙 الوضع الليلي";

    themeToggle.setAttribute(
      "aria-label",
      nextTheme === "dark" ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"
    );
  });
}

// زر تغيير اتجاه الصفحة
// ملاحظة: هذا يغيّر الاتجاه فقط ولا يترجم المحتوى تلقائيًا.
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const isArabic = root.dir !== "ltr";

    if (isArabic) {
      root.dir = "ltr";
      root.lang = "en";
      languageToggle.textContent = "العربية";
      showToast("تم تغيير اتجاه الصفحة. المحتوى لم يُترجم بعد.");
    } else {
      root.dir = "rtl";
      root.lang = "ar";
      languageToggle.textContent = "English";
      showToast("تمت إعادة اتجاه الصفحة إلى العربية.");
    }
  });
}

// تحديث السنة تلقائيًا
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// تشغيل إعدادات المظهر
initializeTheme();

/* =========================================
   CS MATE — PART 16
   Initialize the application
========================================= */

// تشغيل الموقع بعد تحميل الصفحة
function initializeApp() {
  try {
    // التأكد من وجود بيانات الكورسات
    if (!Array.isArray(courses) || courses.length === 0) {
      console.error("CS MATE: No courses were found.");
      showToast("لم يتم العثور على الكورسات.");
      return;
    }

    // تحديث عدد الكورسات والدروس
    updateStatistics();

    // عرض الكورسات في الصفحة
    renderCourses();

    // تطبيق الوضع المحفوظ
    initializeTheme();

    // تعيين السنة الحالية
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }

    console.info("CS MATE initialized successfully.");
  } catch (error) {
    console.error("CS MATE initialization error:", error);
    showToast("حدث خطأ أثناء تشغيل الموقع. راجعي Console.");
  }
}

// تشغيل التطبيق مرة واحدة بعد تجهيز الصفحة
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, {
    once: true
  });
} else {
  initializeApp();
}

/* =========================================
   CS MATE — PART 17
   Keyboard navigation and progress refresh
========================================= */

// التنقل بين الدروس باستخدام الأسهم
document.addEventListener("keydown", (event) => {
  if (!lessonModal || lessonModal.hidden || !activeCourse) {
    return;
  }

  // لا تتعارض الأسهم مع الكتابة داخل حقول الإدخال.
  const target = event.target;

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target.isContentEditable
  ) {
    return;
  }

  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.key === "ArrowRight" && activeLessonIndex > 0) {
    event.preventDefault();
    goToLesson(activeLessonIndex - 1);
  }

  if (
    event.key === "ArrowLeft" &&
    activeLessonIndex < activeCourse.lessons.length - 1
  ) {
    event.preventDefault();
    goToLesson(activeLessonIndex + 1);
  }
});

// تحديث عرض الكورسات عند العودة إلى الصفحة
window.addEventListener("pageshow", () => {
  refreshCourses();
});

// التأكد من ظهور حالة التقدم المحفوظة
function getOverallProgress() {
  const total = getTotalLessons();

  if (total === 0) return 0;

  const completed = courses.reduce(
    (sum, course) => sum + getCompletedLessons(course),
    0
  );

  return Math.round((completed / total) * 100);
}

console.info("CS MATE: Navigation and progress helpers loaded.");
