
/* =========================================
   CS MATE — HTML COURSE
   Lessons 1–4
========================================= */

const HTML_LESSONS = [
  {
    id: "html-01",
    title: {
      ar: "مقدمة في HTML",
      en: "Introduction to HTML"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "HTML هي لغة بنستخدمها لبناء هيكل صفحات الويب. بنحدد بيها العناوين والفقرات والصور والروابط وغيرها من العناصر.",
      en: "HTML is used to create the structure of web pages. It defines headings, paragraphs, images, links, and other elements."
    },
    code: `<!DOCTYPE html>
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
    codeExplanation: {
      ar: [
        "DOCTYPE بيحدد إن المستند بيستخدم HTML5.",
        "html هو العنصر الرئيسي للصفحة.",
        "head يحتوي على معلومات الصفحة.",
        "title هو عنوان الصفحة في المتصفح.",
        "body يحتوي على المحتوى الظاهر.",
        "h1 عنوان رئيسي وp فقرة نصية."
      ],
      en: [
        "DOCTYPE declares an HTML5 document.",
        "html is the root element.",
        "head contains page metadata.",
        "title sets the browser tab title.",
        "body contains visible page content.",
        "h1 is a main heading and p is a paragraph."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان إغلاق العناصر التي تحتاج إلى وسم إغلاق.",
        "وضع المحتوى الظاهر خارج body.",
        "نسيان DOCTYPE."
      ],
      en: [
        "Forgetting closing tags where required.",
        "Placing visible content outside body.",
        "Forgetting the DOCTYPE declaration."
      ]
    },
    exercise: {
      ar: "اعملي صفحة فيها عنوان باسمك وفقرة بتعرّفي فيها بنفسك.",
      en: "Create a page with your name as a heading and a paragraph introducing yourself."
    },
    summary: {
      ar: "HTML بتحدد هيكل الصفحة، والعناصر بتتكتب باستخدام Tags.",
      en: "HTML defines page structure using elements and tags."
    }
  },

  {
    id: "html-02",
    title: {
      ar: "العناوين والفقرات",
      en: "Headings and Paragraphs"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم h1 إلى h6 للعناوين بمستويات مختلفة، وبنستخدم p لكتابة الفقرات. الأفضل نرتب العناوين حسب أهمية المحتوى.",
      en: "Use h1 through h6 for headings of different levels and p for paragraphs. Organize headings according to content hierarchy."
    },
    code: `<h1>My Website</h1>
<h2>About Me</h2>
<p>I am learning web development.</p>

<h3>My Goals</h3>
<p>I want to build useful websites.</p>`,
    codeExplanation: {
      ar: [
        "h1 يمثل العنوان الرئيسي.",
        "h2 عنوان لقسم داخل الصفحة.",
        "h3 عنوان فرعي داخل القسم.",
        "p بتستخدم لكتابة فقرة."
      ],
      en: [
        "h1 represents the main heading.",
        "h2 introduces a section.",
        "h3 introduces a subsection.",
        "p creates a paragraph."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام العناوين لمجرد تكبير الخط.",
        "اختيار مستويات عناوين بترتيب غير منطقي.",
        "استخدام h1 لكل سطر بدلًا من تنظيم المحتوى."
      ],
      en: [
        "Using headings only to make text larger.",
        "Choosing heading levels in an illogical order.",
        "Using headings instead of paragraphs for ordinary text."
      ]
    },
    exercise: {
      ar: "اعملي عنوانًا رئيسيًا، وعنوانين فرعيين، وفقرة تحت كل عنوان فرعي.",
      en: "Create one main heading, two subheadings, and a paragraph under each subheading."
    },
    summary: {
      ar: "العناوين بتنظم المحتوى، والفقرات بتعرض النصوص.",
      en: "Headings organize content, while paragraphs contain text."
    }
  },

  {
    id: "html-03",
    title: {
      ar: "الروابط",
      en: "Links"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم العنصر a لإنشاء رابط. الخاصية href بتحدد العنوان اللي الرابط هيفتحه.",
      en: "The a element creates a link. Its href attribute specifies the destination."
    },
    code: `<a href="https://www.google.com">
  Visit Google
</a>

<br>

<a href="about.html">
  About Us
</a>`,
    codeExplanation: {
      ar: [
        "a هو العنصر المسؤول عن إنشاء الرابط.",
        "href بتحدد وجهة الرابط.",
        "الرابط الأول بيفتح موقعًا خارجيًا.",
        "الرابط الثاني بيفتح ملفًا اسمه about.html إذا كان موجودًا في المسار المحدد.",
        "br بينزل المحتوى للسطر التالي."
      ],
      en: [
        "a creates a hyperlink.",
        "href specifies the destination.",
        "The first link points to an external website.",
        "The second link points to about.html if it exists at that path.",
        "br creates a line break."
      ]
    },
    commonMistakes: {
      ar: [
        "نسيان كتابة href.",
        "كتابة مسار ملف غير صحيح.",
        "نسيان التأكد من صحة عنوان الموقع."
      ],
      en: [
        "Forgetting the href attribute.",
        "Using an incorrect file path.",
        "Not checking the destination URL."
      ]
    },
    exercise: {
      ar: "اعملي رابطًا لموقع تختاريه، ورابطًا لصفحة contact.html.",
      en: "Create a link to a website of your choice and another link to contact.html."
    },
    summary: {
      ar: "العنصر a بيعمل الروابط، وhref بتحدد وجهتها.",
      en: "The a element creates links, and href defines their destinations."
    }
  },

  {
    id: "html-04",
    title: {
      ar: "الصور",
      en: "Images"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم img لإضافة صورة للصفحة. الخاصية src بتحدد مسار الصورة، وalt بتوفر وصفًا بديلًا لو الصورة مش ظاهرة أو لقارئات الشاشة.",
      en: "Use img to display an image. The src attribute specifies its path, while alt provides alternative text for accessibility."
    },
    code: `<h1>My Favorite Place</h1>

<img
  src="beach.jpg"
  alt="A beautiful beach"
  width="400"
>

<p>This is my favorite place.</p>`,
    codeExplanation: {
      ar: [
        "img هو العنصر المستخدم لعرض الصور.",
        "src بتحدد مكان ملف الصورة.",
        "alt بتقدم وصفًا بديلًا للصورة.",
        "width بتحدد عرض الصورة بالبكسل في المثال.",
        "لا يحتاج img إلى وسم إغلاق منفصل."
      ],
      en: [
        "img displays an image.",
        "src specifies the image file path.",
        "alt provides alternative text.",
        "width sets the image width in pixels in this example.",
        "img does not require a separate closing tag."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة اسم الصورة أو مسارها بشكل خاطئ.",
        "نسيان وصف alt.",
        "الاعتقاد أن الصورة هتظهر لو الملف مش موجود."
      ],
      en: [
        "Using an incorrect image filename or path.",
        "Forgetting alternative text.",
        "Expecting an image to appear when its file is missing."
      ]
    },
    exercise: {
      ar: "ضيفي صورة لموقعك، واكتبي وصفًا مناسبًا في alt.",
      en: "Add an image to your page and provide a suitable alt description."
    },
    summary: {
      ar: "img لعرض الصور، وsrc لمسار الصورة، وalt لوصفها.",
      en: "img displays images, src specifies the path, and alt describes the image."
    }
  }
];

console.log("HTML lessons 1–4 loaded.");

/* =========================================
   CS MATE — HTML LESSONS 5–8
========================================= */

HTML_LESSONS.push(

  // LESSON 5 — LISTS
  {
    id: "html-05",
    title: {
      ar: "القوائم في HTML",
      en: "Lists in HTML"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم القوائم لتنظيم العناصر. ul بتعمل قائمة غير مرتبة، وol بتعمل قائمة مرتبة بالأرقام، وli بتمثل كل عنصر في القائمة.",
      en: "Lists organize content. ul creates an unordered list, ol creates an ordered list, and li represents each list item."
    },
    code: `<h2>My Skills</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>My Learning Plan</h2>

<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>`,
    codeExplanation: {
      ar: [
        "h2 بيعرض عنوانًا للقائمة.",
        "ul بتنظم العناصر في قائمة غير مرتبة.",
        "ol بتنظم العناصر في قائمة مرقمة.",
        "li بتمثل عنصرًا واحدًا داخل القائمة."
      ],
      en: [
        "h2 displays a section heading.",
        "ul creates an unordered list.",
        "ol creates a numbered list.",
        "li represents one item in a list."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة عناصر القائمة مباشرة داخل ul أو ol بدون li.",
        "استخدام ol عندما لا يكون الترتيب مهمًا.",
        "نسيان إغلاق عناصر li."
      ],
      en: [
        "Placing list items directly inside ul or ol without li.",
        "Using ol when ordering is not important.",
        "Forgetting closing li tags."
      ]
    },
    exercise: {
      ar: "اعملي قائمة غير مرتبة بأكلاتك المفضلة، وقائمة مرتبة بخطوات تعلم HTML.",
      en: "Create an unordered list of your favorite foods and an ordered list of steps for learning HTML."
    },
    summary: {
      ar: "ul لقائمة غير مرتبة، وol لقائمة مرتبة، وli لكل عنصر.",
      en: "Use ul for unordered lists, ol for ordered lists, and li for each item."
    }
  },

  // LESSON 6 — TABLES
  {
    id: "html-06",
    title: {
      ar: "الجداول في HTML",
      en: "Tables in HTML"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "الجداول بتعرض البيانات في صفوف وأعمدة. بنستخدم table للجدول، وtr للصف، وth لخلية عنوان، وtd لخلية بيانات.",
      en: "Tables display data in rows and columns. Use table for the table, tr for a row, th for a header cell, and td for a data cell."
    },
    code: `<table border="1">
  <tr>
    <th>Course</th>
    <th>Duration</th>
  </tr>
  <tr>
    <td>HTML</td>
    <td>2 Weeks</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>3 Weeks</td>
  </tr>
</table>`,
    codeExplanation: {
      ar: [
        "table بيحتوي على الجدول كله.",
        "tr بيحدد صفًا.",
        "th بيحدد خلية عنوان.",
        "td بيحدد خلية بيانات.",
        "border مستخدمة هنا للتوضيح فقط، والأفضل تنسيق حدود الجدول باستخدام CSS."
      ],
      en: [
        "table contains the entire table.",
        "tr defines a row.",
        "th defines a header cell.",
        "td defines a data cell.",
        "border is used here for demonstration; CSS is preferred for table styling."
      ]
    },
    commonMistakes: {
      ar: [
        "عدم توحيد عدد الخلايا بين الصفوف بدون سبب.",
        "استخدام td بدل th لعناوين الأعمدة.",
        "استخدام الجداول لتقسيم تصميم الصفحة بدلًا من عرض البيانات."
      ],
      en: [
        "Using inconsistent cell counts without a reason.",
        "Using td instead of th for column headings.",
        "Using tables for page layout instead of tabular data."
      ]
    },
    exercise: {
      ar: "اعملي جدولًا لثلاث مواد دراسية، يحتوي على اسم المادة وعدد الساعات.",
      en: "Create a table for three subjects with their names and number of hours."
    },
    summary: {
      ar: "table للجدول، tr للصف، th للعناوين، وtd للبيانات.",
      en: "Use table for the table, tr for rows, th for headers, and td for data."
    }
  },

  // LESSON 7 — FORMS
  {
    id: "html-07",
    title: {
      ar: "النماذج وحقول الإدخال",
      en: "Forms and Input Fields"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "بنستخدم form لجمع بيانات المستخدم، وlabel لوصف الحقول، وinput لإدخال البيانات، وbutton لإرسال النموذج. HTML وحدها لا تحفظ البيانات في قاعدة بيانات.",
      en: "Forms collect user input. Use form to group fields, label to describe them, input for data entry, and button to submit. HTML alone does not save data to a database."
    },
    code: `<form action="#" method="get">
  <label for="username">Your Name:</label>
  <input
    type="text"
    id="username"
    name="username"
    required
  >

  <br><br>

  <label for="email">Your Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    required
  >

  <br><br>

  <button type="submit">Submit</button>
</form>`,
    codeExplanation: {
      ar: [
        "form بيجمع حقول النموذج.",
        "label بيوضح للمستخدم وظيفة الحقل.",
        "for في label لازم يطابق id الخاص بالحقل.",
        "type بيحدد نوع الإدخال.",
        "name بيساعد في إرسال قيمة الحقل.",
        "required بيجعل الحقل مطلوبًا قبل الإرسال.",
        "action وmethod بيحددا وجهة الإرسال وطريقته."
      ],
      en: [
        "form groups the form fields.",
        "label describes a field.",
        "The label's for value should match the field's id.",
        "type specifies the input type.",
        "name identifies the field's submitted value.",
        "required makes the field mandatory.",
        "action and method define the submission destination and method."
      ]
    },
    commonMistakes: {
      ar: [
        "عدم ربط label بالحقل الصحيح.",
        "نسيان name عند الحاجة لإرسال البيانات.",
        "الاعتقاد أن النموذج يحفظ البيانات تلقائيًا بدون Backend."
      ],
      en: [
        "Failing to associate a label with its field.",
        "Forgetting name when submitted data is needed.",
        "Assuming a form automatically stores data without a backend."
      ]
    },
    exercise: {
      ar: "اعملي نموذج تسجيل يحتوي على الاسم والبريد الإلكتروني وكلمة المرور وزر تسجيل.",
      en: "Create a registration form with name, email, password, and a submit button."
    },
    summary: {
      ar: "النماذج بتجمع بيانات المستخدم، لكن معالجة البيانات وتخزينها قد تحتاج إلى Backend.",
      en: "Forms collect user data, but processing and storage may require a backend."
    }
  },

  // LESSON 8 — TEXT FORMATTING
  {
    id: "html-08",
    title: {
      ar: "تنسيق النصوص",
      en: "Text Formatting"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "HTML فيها عناصر لتوضيح معنى النص، زي strong للأهمية وem للتأكيد. وفي عناصر تانية زي mark للتظليل وsmall للنص الأصغر.",
      en: "HTML provides elements that express text meaning, such as strong for importance and em for emphasis. Other elements include mark for highlighting and small for side comments."
    },
    code: `<p>
  This is <strong>important</strong> text.
</p>

<p>
  This is <em>emphasized</em> text.
</p>

<p>
  Remember to <mark>practice daily</mark>.
</p>

<p>
  <small>Additional information.</small>
</p>

<p>
  Water formula: H<sub>2</sub>O
</p>

<p>
  Two squared: 2<sup>2</sup> = 4
</p>`,
    codeExplanation: {
      ar: [
        "strong بيشير إلى أهمية النص.",
        "em بيضيف تأكيدًا للنص.",
        "mark بيظلل جزءًا من النص.",
        "small بيعرض ملاحظات أو نصوصًا جانبية بحجم أصغر.",
        "sub بيعرض نصًا منخفضًا مثل الرقم 2 في H2O.",
        "sup بيعرض نصًا مرتفعًا مثل الأس في الرياضيات."
      ],
      en: [
        "strong indicates important text.",
        "em adds emphasis.",
        "mark highlights text.",
        "small represents side comments or fine print.",
        "sub displays subscript text, such as the 2 in H2O.",
        "sup displays superscript text, such as mathematical powers."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام عناصر التنسيق بدل CSS للتحكم في كل تفاصيل الشكل.",
        "استخدام strong وem لمجرد تغيير شكل الخط دون مراعاة المعنى.",
        "الخلط بين sub وsup."
      ],
      en: [
        "Using HTML formatting elements for all visual styling instead of CSS.",
        "Using strong and em only for appearance without considering meaning.",
        "Confusing sub with sup."
      ]
    },
    exercise: {
      ar: "اكتبي فقرة فيها كلمة مهمة باستخدام strong، وكلمة مؤكدة باستخدام em، ومعادلة بسيطة باستخدام sub أو sup.",
      en: "Write a paragraph with an important word using strong, an emphasized word using em, and a simple formula using sub or sup."
    },
    summary: {
      ar: "عناصر تنسيق النصوص بتساعد في توضيح معنى المحتوى، بينما CSS مسؤولة عن التحكم التفصيلي في المظهر.",
      en: "Text formatting elements communicate meaning, while CSS controls detailed visual presentation."
    }
  }

);

console.log("HTML lessons 5–8 added.");

/* =========================================
   CS MATE — HTML LESSONS 9–12
========================================= */

HTML_LESSONS.push(

  // LESSON 9 — SEMANTIC HTML
  {
    id: "html-09",
    title: {
      ar: "العناصر الدلالية في HTML",
      en: "Semantic HTML"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "العناصر الدلالية بتوضح وظيفة كل جزء في الصفحة. مثلًا header للرأس، nav للتنقل، main للمحتوى الأساسي، section لقسم، article لمحتوى مستقل، وfooter للتذييل.",
      en: "Semantic elements describe the meaning of page sections. Examples include header, nav, main, section, article, and footer."
    },
    code: `<header>
  <h1>CS MATE</h1>
</header>

<nav>
  <a href="index.html">Home</a>
  <a href="courses.html">Courses</a>
</nav>

<main>
  <section>
    <h2>Our Courses</h2>
    <p>Learn web development step by step.</p>
  </section>

  <article>
    <h2>HTML Basics</h2>
    <p>HTML defines the structure of web pages.</p>
  </article>
</main>

<footer>
  <p>Copyright 2026 CS MATE</p>
</footer>`,
    codeExplanation: {
      ar: [
        "header يحتوي على مقدمة الصفحة أو القسم.",
        "nav يحتوي على روابط التنقل.",
        "main يحتوي على المحتوى الأساسي للصفحة.",
        "section بيجمع محتوى مرتبطًا بموضوع معين.",
        "article مناسب لمحتوى مستقل نسبيًا.",
        "footer يحتوي على معلومات التذييل."
      ],
      en: [
        "header contains introductory content.",
        "nav contains navigation links.",
        "main contains the primary page content.",
        "section groups related content.",
        "article represents relatively independent content.",
        "footer contains footer information."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام العناصر الدلالية بدون مراعاة معناها.",
        "وضع أكثر من main ظاهر في نفس الصفحة.",
        "استخدام section بدون عنوان مناسب عندما يحتاج السياق إلى عنوان."
      ],
      en: [
        "Using semantic elements without considering their meaning.",
        "Using multiple visible main elements on one page.",
        "Creating sections without appropriate headings when needed."
      ]
    },
    exercise: {
      ar: "اعملي صفحة تعليمية فيها header وnav وmain وsection وfooter.",
      en: "Create an educational page using header, nav, main, section, and footer."
    },
    summary: {
      ar: "العناصر الدلالية بتخلي هيكل الصفحة أوضح للمطورين والتقنيات المساعدة.",
      en: "Semantic elements make page structure clearer to developers and assistive technologies."
    }
  },

  // LESSON 10 — AUDIO AND VIDEO
  {
    id: "html-10",
    title: {
      ar: "إضافة الصوت والفيديو",
      en: "Audio and Video"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "HTML بتسمح بإضافة ملفات الصوت باستخدام audio والفيديو باستخدام video. الخاصية controls بتظهر أدوات التشغيل للمستخدم.",
      en: "HTML supports audio through audio and video through video. The controls attribute displays playback controls."
    },
    code: `<h2>Audio Example</h2>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>

<h2>Video Example</h2>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video>`,
    codeExplanation: {
      ar: [
        "audio لعرض مشغل صوت.",
        "video لعرض مشغل فيديو.",
        "controls بتظهر أدوات التشغيل والإيقاف.",
        "source بيحدد ملف الوسائط ونوعه.",
        "لازم ملفات audio.mp3 وvideo.mp4 تكون موجودة في المسار المحدد."
      ],
      en: [
        "audio creates an audio player.",
        "video creates a video player.",
        "controls displays playback controls.",
        "source specifies the media file and its type.",
        "The audio.mp3 and video.mp4 files must exist at the specified paths."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة مسار ملف غير صحيح.",
        "اختيار نوع ملف لا يتوافق مع محتواه.",
        "الاعتقاد أن controls بتضيف ملف الصوت أو الفيديو نفسه."
      ],
      en: [
        "Using an incorrect media path.",
        "Specifying a media type that does not match the file.",
        "Assuming controls supplies the media file itself."
      ]
    },
    exercise: {
      ar: "اعملي صفحة فيها مشغل صوت ومشغل فيديو باستخدام ملفات موجودة عندك.",
      en: "Create a page containing an audio player and a video player using available media files."
    },
    summary: {
      ar: "audio وvideo لعرض الوسائط، وsource لتحديد الملفات، وcontrols لإظهار أدوات التشغيل.",
      en: "Use audio and video for media, source for files, and controls for playback controls."
    }
  },

  // LESSON 11 — DIV AND SPAN
  {
    id: "html-11",
    title: {
      ar: "الفرق بين div وspan",
      en: "div vs span"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "div عنصر عام بيستخدم لتجميع عناصر في كتلة، أما span فبيستخدم لتجميع جزء صغير داخل النص. غالبًا بنستخدمهم مع CSS لتنسيق المحتوى.",
      en: "div is a generic block-level container, while span is a generic inline container. Both are often used with CSS to style content."
    },
    code: `<div>
  <h2>About CS MATE</h2>
  <p>Learn <span>HTML</span> and build websites.</p>
</div>`,
    codeExplanation: {
      ar: [
        "div بيجمع مجموعة من العناصر في حاوية.",
        "h2 عنوان داخل الحاوية.",
        "p بيعرض فقرة.",
        "span بيحدد جزء HTML داخل الفقرة بدون إنشاء سطر جديد تلقائيًا."
      ],
      en: [
        "div groups elements in a container.",
        "h2 displays a heading inside the container.",
        "p displays a paragraph.",
        "span wraps the word HTML without creating a new line by default."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام div لكل شيء بدل العناصر الدلالية المناسبة.",
        "توقع أن div وspan بيضيفوا تنسيقًا بصريًا تلقائيًا.",
        "استخدام span لتجميع تخطيط كامل للصفحة."
      ],
      en: [
        "Using div for everything instead of suitable semantic elements.",
        "Expecting div and span to add visual styling automatically.",
        "Using span to group an entire page layout."
      ]
    },
    exercise: {
      ar: "اعملي div يحتوي على عنوان وفقرة، واستخدمي span لتحديد كلمة داخل الفقرة.",
      en: "Create a div containing a heading and paragraph, then use span around one word."
    },
    summary: {
      ar: "div حاوية عامة على مستوى الكتلة، وspan حاوية عامة داخل السطر.",
      en: "div is a generic block-level container, while span is a generic inline container."
    }
  },

  // LESSON 12 — ATTRIBUTES AND COMMENTS
  {
    id: "html-12",
    title: {
      ar: "الخصائص والتعليقات",
      en: "Attributes and Comments"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "الخصائص Attributes بتضيف معلومات للعناصر، زي id وclass وtitle. أما التعليقات Comments فهي ملاحظات داخل الكود لا تظهر ضمن محتوى الصفحة.",
      en: "Attributes provide additional information about elements, such as id, class, and title. Comments are notes in the source code that do not appear as page content."
    },
    code: `<!-- This is a comment -->

<h1 id="main-title" class="heading">
  Welcome to CS MATE
</h1>

<p title="Course description">
  Learn HTML step by step.
</p>`,
    codeExplanation: {
      ar: [
        "التعليق بيبدأ بـ <!-- وينتهي بـ -->.",
        "id بيميز عنصرًا بمعرّف فريد داخل الصفحة.",
        "class بتسمح بتجميع العناصر للتنسيق أو التعامل معها.",
        "title ممكن يعرض معلومة إضافية عند مرور المؤشر في بعض المتصفحات.",
        "الخصائص بتتكتب داخل وسم البداية."
      ],
      en: [
        "A comment starts with <!-- and ends with -->.",
        "id provides a unique identifier for an element on the page.",
        "class groups elements for styling or scripting.",
        "title may show additional information on hover in some browsers.",
        "Attributes are written inside the opening tag."
      ]
    },
    commonMistakes: {
      ar: [
        "استخدام id نفسه لأكثر من عنصر بدون داعٍ.",
        "كتابة الخاصية خارج وسم البداية.",
        "وضع كلمات مرور أو معلومات سرية داخل التعليقات؛ لأن مصدر الصفحة يمكن الاطلاع عليه."
      ],
      en: [
        "Reusing the same id for multiple elements unnecessarily.",
        "Writing an attribute outside the opening tag.",
        "Putting passwords or secrets in comments, since page source can be inspected."
      ]
    },
    exercise: {
      ar: "اعملي عنوانًا له id وclass، وفقرة لها title، واكتبي تعليقًا يوضح وظيفة الصفحة.",
      en: "Create a heading with id and class, a paragraph with title, and a comment describing the page."
    },
    summary: {
      ar: "الخصائص بتضيف معلومات للعناصر، والتعليقات بتساعد في توضيح الكود للمطور.",
      en: "Attributes add information to elements, while comments help explain the source code."
    }
  }

);

console.log("HTML lessons 9–12 added.");

/* =========================================
   CS MATE — HTML LESSONS 13–16
========================================= */

HTML_LESSONS.push(

  {
    id: "html-13",
    title: {
      ar: "الروابط الداخلية والخارجية",
      en: "Internal and External Links"
    },
    duration: "15 min",
    level: "Beginner",
    explanation: {
      ar: "الروابط الخارجية بتوصل المستخدم بمواقع أخرى، والروابط الداخلية ممكن تنقله لصفحة أخرى في مشروعك أو لقسم داخل نفس الصفحة باستخدام id.",
      en: "External links point to other websites. Internal links can navigate to another page in your project or to a section on the same page using an id."
    },
    code: `<h1 id="top">My Website</h1>

<a href="about.html">About Us</a>

<br>

<a href="https://developer.mozilla.org/">
  Learn HTML
</a>

<br>

<a href="#contact">Go to Contact</a>

<div style="height: 500px;"></div>

<h2 id="contact">Contact Us</h2>

<a href="#top">Back to Top</a>`,
    codeExplanation: {
      ar: [
        "about.html رابط لصفحة أخرى داخل المشروع.",
        "الرابط الخارجي بيستخدم عنوان الموقع الكامل.",
        "href=\"#contact\" بينقل المستخدم للعنصر اللي عنده id يساوي contact.",
        "href=\"#top\" بيرجع المستخدم لبداية الصفحة.",
        "المسافة الكبيرة في المثال للتوضيح فقط، ويمكن استبدالها بمحتوى حقيقي."
      ],
      en: [
        "about.html links to another page in the project.",
        "An external link uses the website's full URL.",
        "href=\"#contact\" navigates to the element with id contact.",
        "href=\"#top\" returns to the top of the page.",
        "The large spacer is for demonstration and can be replaced with real content."
      ]
    },
    commonMistakes: {
      ar: [
        "كتابة id مختلف عن الاسم الموجود في الرابط.",
        "نسيان إنشاء الصفحة المشار إليها.",
        "توقع أن الرابط الداخلي يعمل لو العنصر المستهدف غير موجود."
      ],
      en: [
        "Using an id that does not match the link target.",
        "Forgetting to create the linked page.",
        "Expecting an anchor link to work when its target is missing."
      ]
    },
    exercise: {
      ar: "اعملي صفحة فيها رابط لصفحة about.html ورابط ينقلك إلى قسم Contact في نفس الصفحة.",
      en: "Create a page with a link to about.html and another link to a Contact section on the same page."
    },
    summary: {
      ar: "استخدمي عنوان الصفحة للانتقال لصفحة أخرى، و#id للانتقال لقسم داخل الصفحة نفسها.",
      en: "Use a page URL to navigate to another page and #id to navigate to a section on the same page."
    }
  },

  {
    id: "html-14",
    title: {
      ar: "مسارات الملفات",
      en: "File Paths"
    },
    duration: "20 min",
    level: "Beginner",
    explanation: {
      ar: "المسار بيحدد مكان الملف اللي عايزين نستخدمه، مثل صورة أو صفحة أخرى. المسار النسبي بيعتمد على مكان الملف الحالي، أما المسار المطلق فيحدد عنوانًا كاملًا أو مسارًا من جذر الموقع حسب السياق.",
      en: "A file path specifies where a resource is located, such as an image or another page. A relative path depends on the current file, while an absolute URL specifies a full web address."
    },
    code: `<!-- File in the same folder -->
<img src="logo.png" alt="Website logo">

<!-- File inside an images folder -->
<img src="images/photo.jpg" alt="A landscape">

<!-- Page inside a pages folder -->
<a href="pages/about.html">About</a>

<!-- Go up one folder -->
<img src="../shared/banner.jpg" alt="Banner">

<!-- External image URL -->
<img
  src="https://example.com/image.jpg"
  alt="Example image"
>`,
    codeExplanation: {
      ar: [
        "logo.png موجود في نفس مجلد الملف الحالي.",
        "images/photo.jpg موجود داخل مجلد اسمه images.",
        "pages/about.html موجود داخل مجلد pages.",
        "../ بيرجع مستوى واحدًا للخلف في المسار النسبي.",
        "عنوان HTTPS مثال لمسار صورة من موقع خارجي، ويجب أن يكون الرابط حقيقيًا حتى تظهر الصورة."
      ],
      en: [
        "logo.png is in the same folder as the current file.",
        "images/photo.jpg is inside the images folder.",
        "pages/about.html is inside the pages folder.",
        "../ moves up one level in a relative path.",
        "The HTTPS example is an external image URL; it must be a valid URL for the image to load."
      ]
    },
    commonMistakes: {
      ar: [
        "اختلاف الحروف الكبيرة والصغيرة في أسماء الملفات على بعض الخوادم.",
        "نسيان امتداد الملف مثل .png أو .jpg.",
        "كتابة مسار لا يطابق ترتيب المجلدات في GitHub."
      ],
      en: [
        "Mismatched capitalization in filenames on case-sensitive servers.",
        "Forgetting the file extension.",
        "Using a path that does not match the folder structure."
      ]
    },
    exercise: {
      ar: "أنشئي مجلد images وضعي فيه صورة، ثم اعرضي الصورة باستخدام مسارها النسبي.",
      en: "Create an images folder, place an image inside it, and display it using a relative path."
    },
    summary: {
      ar: "المسار الصحيح ضروري لتحميل الصور والصفحات والملفات المرتبطة بمشروعك.",
      en: "Correct paths are essential for loading images, pages, and other project resources."
    }
  },

  {
    id: "html-15",
    title: {
      ar: "الجداول المتقدمة",
      en: "Advanced Tables"
    },
    duration: "20 min",
    level: "Intermediate",
    explanation: {
      ar: "نقدر ننظم الجدول باستخدام thead لرأس الجدول وtbody للبيانات وtfoot للتذييل. وتسمح colspan للخلية بالامتداد عبر أكثر من عمود.",
      en: "Tables can be organized with thead, tbody, and tfoot. The colspan attribute allows a cell to span multiple columns."
    },
    code: `<table>
  <thead>
    <tr>
      <th>Course</th>
      <th>Hours</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>15</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>20</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Total Hours</th>
      <td>35</td>
    </tr>
    <tr>
      <td colspan="2">End of Report</td>
    </tr>
  </tfoot>
</table>`,
    codeExplanation: {
      ar: [
        "thead بيجمع صفوف رأس الجدول.",
        "tbody بيجمع صفوف البيانات الأساسية.",
        "tfoot بيجمع صفوف ملخص أو تذييل الجدول.",
        "colspan=\"2\" يجعل الخلية تمتد عبر عمودين.",
        "يمكن استخدام CSS لتنسيق الجدول وحدوده ومسافاته."
      ],
      en: [
        "thead groups the table header rows.",
        "tbody groups the main data rows.",
        "tfoot groups summary or footer rows.",
        "colspan=\"2\" makes a cell span two columns.",
        "CSS can style the table, borders, and spacing."
      ]
    },
    commonMistakes: {
      ar: [
        "تحديد colspan بعدد لا يناسب عدد الأعمدة.",
        "استخدام الجداول لتصميم الصفحة بدلًا من عرض البيانات.",
        "إهمال العناوين الواضحة لخلايا البيانات."
      ],
      en: [
        "Using a colspan value that does not fit the table structure.",
        "Using tables for layout instead of data.",
        "Omitting clear header cells for tabular data."
      ]
    },
    exercise: {
      ar: "اعملي جدولًا لمواد دراسية مع رأس وتذييل، وأضيفي خلية تمتد عبر عمودين.",
      en: "Create a course table with a header and footer, including a cell that spans two columns."
    },
    summary: {
      ar: "تقسيم الجدول لأجزاء دلالية بيخلي البيانات أكثر تنظيمًا، وcolspan بيسمح بدمج الأعمدة.",
      en: "Semantic table sections organize data, and colspan allows cells to span columns."
    }
  },

  {
    id: "html-16",
    title: {
      ar: "إمكانية الوصول في HTML",
      en: "Accessibility in HTML"
    },
    duration: "20 min",
    level: "Intermediate",
    explanation: {
      ar: "إمكانية الوصول معناها إن الموقع يكون قابلًا للاستخدام لأكبر عدد ممكن من الناس، بما فيهم مستخدمو قارئات الشاشة. بنساعد في ده باستخدام عناصر دلالية وعناوين واضحة ووصف مناسب للصور وتسميات لحقول النماذج.",
      en: "Accessibility helps make websites usable by as many people as possible, including screen-reader users. Semantic elements, clear headings, image descriptions, and form labels all help."
    },
    code: `<main>
  <h1>Student Registration</h1>

  <form>
    <label for="student-name">Full Name</label>
    <input
      id="student-name"
      name="studentName"
      type="text"
      required
    >

    <br><br>

    <label for="student-email">Email</label>
    <input
      id="student-email"
      name="studentEmail"
      type="email"
      required
    >

    <br><br>

    <button type="submit">Register</button>
  </form>

  <img
    src="campus.jpg"
    alt="Students walking on campus"
  >
</main>`,
    codeExplanation: {
      ar: [
        "main بيحدد المحتوى الرئيسي للصفحة.",
        "h1 بيوضح عنوان الصفحة.",
        "label بيوفر اسمًا واضحًا لكل حقل.",
        "for لازم يطابق id الخاص بحقل الإدخال.",
        "alt بيقدم وصفًا مناسبًا للصورة.",
        "required بيحدد الحقول المطلوبة."
      ],
      en: [
        "main identifies the page's primary content.",
        "h1 provides a clear page heading.",
        "label gives each form field a clear name.",
        "for must match the input field's id.",
        "alt provides an appropriate image description.",
        "required marks mandatory fields."
      ]
    },
    commonMistakes: {
      ar: [
        "ترك الصور المهمة بدون وصف مناسب في alt.",
        "الاعتماد على placeholder بدل label واضح.",
        "اختيار عناوين غير مرتبة أو غير مفهومة.",
        "استخدام زر أو رابط بدون اسم واضح يصف وظيفته."
      ],
      en: [
        "Leaving meaningful images without suitable alt text.",
        "Relying on placeholder instead of a proper label.",
        "Using unclear or poorly structured headings.",
        "Using buttons or links without accessible names."
      ]
    },
    exercise: {
      ar: "راجعي نموذج تسجيل قديم وأضيفي labels واضحة ووصف alt مناسبًا لأي صورة مهمة.",
      en: "Review an existing registration form and add clear labels and suitable alt text for meaningful images."
    },
    summary: {
      ar: "إمكانية الوصول جزء أساسي من بناء صفحات ويب مفهومة وقابلة للاستخدام.",
      en: "Accessibility is an essential part of building understandable and usable web pages."
    }
  }

);

console.log("HTML lessons 13–16 added.");

/* =========================================
   CS MATE — HTML COURSE CONNECTION
   Connect HTML lessons to the existing UI
========================================= */

(function connectHTMLCourse() {
  "use strict";

  // Make the HTML course show the correct lesson count.
  const htmlCourse = COURSES.find(
    course => course.id === "html"
  );

  if (htmlCourse) {
    htmlCourse.lessons = HTML_LESSONS.length;
  }

  // Keep a reference to the original C# lesson list.
  const originalLessonList = window.renderCourseLessonList;

  // Display the lesson list for HTML only.
  window.renderCourseLessonList = function(courseId) {
    if (courseId !== "html") {
      return originalLessonList.call(this, courseId);
    }

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const language = getCurrentLanguage();

    viewer.innerHTML = `
      <div class="lesson-header">
        <h2>${language === "ar"
          ? "كورس HTML — محتوى الدروس"
          : "HTML Course — Lessons"}</h2>
        <p>${language === "ar"
          ? `عدد الدروس: ${HTML_LESSONS.length}`
          : `Total lessons: ${HTML_LESSONS.length}`}</p>
      </div>

      <div class="lesson-list">
        ${HTML_LESSONS.map((lesson, index) => `
          <button
            type="button"
            class="lesson-list-item"
            data-html-lesson="${index}">
            <span>${index + 1}</span>
            <span>${lesson.title[language] || lesson.title.en}</span>
            <span>${lesson.duration}</span>
          </button>
        `).join("")}
      </div>

      <button type="button" id="htmlBackToCourses">
        ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
      </button>
    `;

    viewer.hidden = false;
    viewer.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    viewer.querySelectorAll("[data-html-lesson]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.htmlLesson);
        const lesson = HTML_LESSONS[index];

        if (!lesson) return;

        // Convert the explanation arrays into readable text.
        const preparedLesson = {
          ...lesson,
          codeExplanation: {
            ar: Array.isArray(lesson.codeExplanation?.ar)
              ? lesson.codeExplanation.ar.join("\n")
              : lesson.codeExplanation?.ar || "",
            en: Array.isArray(lesson.codeExplanation?.en)
              ? lesson.codeExplanation.en.join("\n")
              : lesson.codeExplanation?.en || ""
          }
        };

        window.renderLesson(preparedLesson);
      });
    });

    document.querySelector("#htmlBackToCourses")
      ?.addEventListener("click", () => {
        viewer.hidden = true;
        document.querySelector("#coursesGrid")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  };

  // Refresh the course cards so HTML displays 16 lessons.
  if (typeof renderCourses === "function") {
    renderCourses();
  }

  console.log("CS MATE: HTML course connection loaded.");
})();

/* =========================================
   CS MATE — HTML COURSE INTEGRATION
========================================= */

(function connectHTMLLessons() {
  "use strict";

  // Register HTML lessons for the existing learning interface.
  window.HTML_LESSONS = HTML_LESSONS;

  // Update the HTML course lesson count.
  const htmlCourse = COURSES.find(
    course => course.id === "html"
  );

  if (htmlCourse) {
    htmlCourse.lessons = HTML_LESSONS.length;
  }

  // Return the correct lessons for each course.
  const originalRenderList = window.renderCourseLessonList;

  if (typeof originalRenderList === "function") {
    window.renderCourseLessonList = function(courseId) {
      if (courseId !== "html") {
        return originalRenderList.call(this, courseId);
      }

      const viewer = document.querySelector("#lessonViewer");
      if (!viewer) return;

      const language = getCurrentLanguage();

      viewer.innerHTML = `
        <div class="lesson-header">
          <h2>
            ${language === "ar" ? "كورس HTML" : "HTML Course"}
          </h2>
          <p>
            ${language === "ar"
              ? `عدد الدروس: ${HTML_LESSONS.length}`
              : `Total lessons: ${HTML_LESSONS.length}`}
          </p>
        </div>

        <div class="lesson-list">
          ${HTML_LESSONS.map((lesson, index) => `
            <button
              type="button"
              class="lesson-list-item"
              data-html-index="${index}">
              <span>${index + 1}</span>
              <span>${lesson.title[language] || lesson.title.en}</span>
              <span>${lesson.duration}</span>
            </button>
          `).join("")}
        </div>
      `;

      viewer.hidden = false;
      viewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
  }

  console.info("CS MATE: HTML lessons registered.");
})();

/* =========================================
   CS MATE — HTML LESSON CLICK HANDLER
========================================= */

(function connectHTMLLessonClicks() {
  "use strict";

  const previousRenderer = window.renderCourseLessonList;

  if (typeof previousRenderer !== "function") {
    console.error("CS MATE: Lesson renderer was not found.");
    return;
  }

  window.renderCourseLessonList = function (courseId) {
    previousRenderer.call(this, courseId);

    if (courseId !== "html") return;

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    viewer.querySelectorAll("[data-html-index]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.htmlIndex);
        const lesson = HTML_LESSONS[index];

        if (!lesson || typeof window.renderLesson !== "function") {
          return;
        }

        const language = getCurrentLanguage();

        const preparedLesson = {
          ...lesson,
          codeExplanation: {
            ar: lesson.codeExplanation.ar.join("\n"),
            en: lesson.codeExplanation.en.join("\n")
          }
        };

        window.renderLesson(preparedLesson);
      });
    });
  };

  console.log("CS MATE: HTML lesson click handler ready.");
})();

/* =========================================
   CS MATE — FINAL HTML COURSE FIX
   Connect the HTML course to the existing UI
========================================= */

(function () {
  "use strict";

  // Make the HTML lesson data available to the existing app.
  window.HTML_LESSONS = HTML_LESSONS;

  // Update the displayed number of HTML lessons.
  const htmlCourse = COURSES.find(course => course.id === "html");

  if (htmlCourse) {
    htmlCourse.lessons = HTML_LESSONS.length;
  }

  // Use the original lesson viewer and lesson list.
  const originalRenderLesson = window.renderLesson;
  const originalRenderList = window.renderCourseLessonList;

  // Show HTML lessons in the existing lesson list.
  window.renderCourseLessonList = function (courseId) {
    if (courseId !== "html") {
      if (typeof originalRenderList === "function") {
        return originalRenderList.call(this, courseId);
      }
      return;
    }

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const language = getCurrentLanguage();

    viewer.innerHTML = `
      <div class="lesson-header">
        <h2>${language === "ar" ? "كورس HTML" : "HTML Course"}</h2>
        <p>${language === "ar"
          ? `عدد الدروس: ${HTML_LESSONS.length}`
          : `Total lessons: ${HTML_LESSONS.length}`}</p>
      </div>

      <div class="lesson-list">
        ${HTML_LESSONS.map((lesson, index) => `
          <button
            type="button"
            class="lesson-list-item"
            data-html-index="${index}">
            <span>${index + 1}</span>
            <span>${lesson.title[language] || lesson.title.en}</span>
            <span>${lesson.duration}</span>
          </button>
        `).join("")}
      </div>

      <button id="closeLessonList" type="button">
        ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
      </button>
    `;

    viewer.hidden = false;

    viewer.querySelectorAll("[data-html-index]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.htmlIndex);
        const lesson = HTML_LESSONS[index];

        if (!lesson || typeof originalRenderLesson !== "function") {
          return;
        }

        originalRenderLesson.call(window, lesson);
      });
    });

    document.querySelector("#closeLessonList")
      ?.addEventListener("click", () => {
        viewer.hidden = true;
        document.body.classList.remove("cs-mate-learning-open");
        document.body.style.overflow = "";
      });

    viewer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Route HTML course clicks to the HTML lesson list.
  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-open-course='html']");
    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (typeof CourseNavigation !== "undefined") {
      CourseNavigation.currentCourseId = "html";
    }

    window.renderCourseLessonList("html");
  }, true);

  console.log("CS MATE: HTML course integration initialized.");
})();
/* =========================================
   CS MATE — WORKING HTML COURSE FIX
========================================= */

(function () {
  "use strict";

  // Update the HTML course card.
  const htmlCourse = COURSES.find(
    course => course.id === "html"
  );

  if (htmlCourse) {
    htmlCourse.lessons = HTML_LESSONS.length;
    renderCourses();
  }

  // Use the existing lesson viewer for HTML.
  openCourseLessons = function (courseId) {
    if (courseId === "html") {
      renderCourseLessonList("html");
      return;
    }

    if (courseId === "csharp") {
      renderCourseLessonList("csharp");
      return;
    }

    const language = getCurrentLanguage();

    alert(
      language === "ar"
        ? "محتوى هذا الكورس قيد الإعداد."
        : "This course content is being prepared."
    );
  };

  // Display the right lessons for each course.
  renderCourseLessonList = function (courseId) {
    const course = COURSES.find(
      item => item.id === courseId
    );

    if (!course) return;

    const language = getCurrentLanguage();
    const lessons = courseId === "html"
      ? HTML_LESSONS
      : courseId === "csharp"
        ? CSHARP_LESSONS
        : [];

    const viewer = createLessonViewer();

    if (!lessons.length) {
      viewer.innerHTML = `
        <h2>${language === "ar"
          ? "الدروس قيد الإعداد"
          : "Lessons coming soon"}</h2>
        <button id="closeLessonList" type="button">
          ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
        </button>
      `;
      viewer.hidden = false;
      document.querySelector("#closeLessonList")
        ?.addEventListener("click", () => {
          viewer.hidden = true;
        });
      return;
    }

    viewer.innerHTML = `
      <div class="lesson-header">
        <h2>${language === "ar"
          ? `كورس ${course.name.ar} — محتوى الدروس`
          : `${course.name.en} Course — Lessons`}</h2>
        <p>${language === "ar"
          ? `عدد الدروس: ${lessons.length}`
          : `Total lessons: ${lessons.length}`}</p>
      </div>

      <div class="lesson-list">
        ${lessons.map((lesson, index) => `
          <button type="button"
            class="lesson-list-item"
            data-course-lesson-index="${index}">
            <span>${index + 1}</span>
            <span>${lesson.title[language] || lesson.title.en}</span>
            <span>${lesson.duration}</span>
          </button>
        `).join("")}
      </div>

      <button id="closeLessonList" type="button">
        ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
      </button>
    `;

    viewer.hidden = false;
    viewer.scrollIntoView({ behavior: "smooth", block: "start" });

    viewer.querySelectorAll("[data-course-lesson-index]")
      .forEach(button => {
        button.addEventListener("click", () => {
          const index = Number(button.dataset.courseLessonIndex);
          const lesson = lessons[index];

          if (lesson) renderLesson(lesson);
        });
      });

    viewer.querySelector("#closeLessonList")
      ?.addEventListener("click", () => {
        viewer.hidden = true;
      });
  };

  console.log("CS MATE: HTML course is now connected.");
})();
/* =========================================
   CS MATE — HTML COURSE NAVIGATION FIX
   Previous / Next / Completion / Progress
========================================= */

(function setupHTMLCourseNavigation() {
  "use strict";

  let currentHTMLIndex = 0;

  const getLanguage = () =>
    typeof getCurrentLanguage === "function"
      ? getCurrentLanguage()
      : "en";

  const getCompleted = (id) =>
    typeof isLessonCompleted === "function"
      ? isLessonCompleted(id)
      : false;

  function prepareHTMLLesson(lesson) {
    return {
      ...lesson,
      codeExplanation: {
        ar: Array.isArray(lesson.codeExplanation?.ar)
          ? lesson.codeExplanation.ar.join("\n")
          : lesson.codeExplanation?.ar || "",
        en: Array.isArray(lesson.codeExplanation?.en)
          ? lesson.codeExplanation.en.join("\n")
          : lesson.codeExplanation?.en || ""
      }
    };
  }

  function updateHTMLProgress() {
    const viewer = document.querySelector("#lessonViewer");
    if (!viewer) return;

    const language = getLanguage();
    const completedCount = HTML_LESSONS.filter(
      lesson => getCompleted(lesson.id)
    ).length;

    const percent = Math.round(
      completedCount / HTML_LESSONS.length * 100
    );

    let progress = viewer.querySelector(".html-course-progress");

    if (!progress) {
      progress = document.createElement("section");
      progress.className = "lesson-progress html-course-progress";

      const header = viewer.querySelector(".lesson-header");
      if (header) {
        header.after(progress);
      } else {
        viewer.prepend(progress);
      }
    }

    progress.innerHTML = `
      <div class="lesson-progress-info">
        <strong>
          ${language === "ar" ? "تقدمك في HTML" : "HTML Progress"}
        </strong>
        <span>
          ${completedCount} / ${HTML_LESSONS.length}
          — ${percent}%
        </span>
      </div>

      <div class="lesson-progress-track"
           role="progressbar"
           aria-valuemin="0"
           aria-valuemax="100"
           aria-valuenow="${percent}">
        <div class="lesson-progress-fill"
             style="width:${percent}%"></div>
      </div>
    `;
  }

  function addHTMLNavigation() {
    const viewer = document.querySelector("#lessonViewer");
    const lesson = HTML_LESSONS[currentHTMLIndex];

    if (!viewer || !lesson) return;

    viewer.querySelectorAll(
      ".lesson-actions, .html-lesson-navigation"
    ).forEach(element => element.remove());

    const language = getLanguage();
    const navigation = document.createElement("div");

    navigation.className = "lesson-actions html-lesson-navigation";

    navigation.innerHTML = `
      <button type="button" data-html-nav="list">
        ${language === "ar" ? "قائمة الدروس" : "Lesson List"}
      </button>

      <button type="button" data-html-nav="previous"
        ${currentHTMLIndex === 0 ? "disabled" : ""}>
        ${language === "ar" ? "← السابق" : "← Previous"}
      </button>

      <span>
        ${currentHTMLIndex + 1} / ${HTML_LESSONS.length}
      </span>

      <button type="button" data-html-nav="next"
        ${currentHTMLIndex === HTML_LESSONS.length - 1
          ? "disabled"
          : ""}>
        ${language === "ar" ? "التالي →" : "Next →"}
      </button>
    `;

    const completeButton = viewer.querySelector(
      "#completeLessonButton"
    );

    if (completeButton) {
      completeButton.after(navigation);
    } else {
      viewer.appendChild(navigation);
    }

    updateHTMLProgress();
  }

  function showHTMLLesson(index) {
    if (index < 0 || index >= HTML_LESSONS.length) return;

    currentHTMLIndex = index;

    if (typeof window.renderLesson === "function") {
      window.renderLesson(
        prepareHTMLLesson(HTML_LESSONS[index])
      );
    }
  }

  // Save the existing renderers before adding HTML-specific behavior.
  const originalRenderLesson = window.renderLesson;
  const originalRenderList = window.renderCourseLessonList;

  if (typeof originalRenderLesson === "function") {
    window.renderLesson = function(lesson) {
      originalRenderLesson.call(this, lesson);

      if (!lesson || !String(lesson.id).startsWith("html-")) {
        return;
      }

      const index = HTML_LESSONS.findIndex(
        item => item.id === lesson.id
      );

      if (index !== -1) {
        currentHTMLIndex = index;
        addHTMLNavigation();
      }
    };
  }

  if (typeof originalRenderList === "function") {
    window.renderCourseLessonList = function(courseId) {
      if (courseId !== "html") {
        return originalRenderList.call(this, courseId);
      }

      const viewer = typeof createLessonViewer === "function"
        ? createLessonViewer()
        : document.querySelector("#lessonViewer");

      if (!viewer) return;

      const language = getLanguage();

      viewer.innerHTML = `
        <div class="lesson-header">
          <h2>${language === "ar" ? "كورس HTML" : "HTML Course"}</h2>
          <p>${language === "ar"
            ? `عدد الدروس: ${HTML_LESSONS.length}`
            : `Total lessons: ${HTML_LESSONS.length}`}</p>
        </div>

        <div class="lesson-list">
          ${HTML_LESSONS.map((lesson, index) => `
            <button type="button"
              class="lesson-list-item"
              data-html-index="${index}">
              <span>${getCompleted(lesson.id) ? "✓" : index + 1}</span>
              <span>${lesson.title[language] || lesson.title.en}</span>
              <span>${getCompleted(lesson.id)
                ? (language === "ar" ? "مكتمل" : "Completed")
                : lesson.duration}</span>
            </button>
          `).join("")}
        </div>

        <button type="button" id="htmlCloseList">
          ${language === "ar" ? "العودة للكورسات" : "Back to courses"}
        </button>
      `;

      viewer.hidden = false;

      viewer.querySelectorAll("[data-html-index]").forEach(button => {
        button.addEventListener("click", () => {
          showHTMLLesson(Number(button.dataset.htmlIndex));
        });
      });

      viewer.querySelector("#htmlCloseList")
        ?.addEventListener("click", () => {
          viewer.hidden = true;
          document.body.classList.remove("cs-mate-learning-open");
          document.body.style.overflow = "";
        });

      updateHTMLProgress();
    };
  }

  // Handle HTML navigation without interfering with C# buttons.
  document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-html-nav]");
    if (!button) return;

    const viewer = document.querySelector("#lessonViewer");
    if (!viewer || !viewer.contains(button)) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const action = button.dataset.htmlNav;

    if (action === "previous") {
      showHTMLLesson(currentHTMLIndex - 1);
    } else if (action === "next") {
      showHTMLLesson(currentHTMLIndex + 1);
    } else if (action === "list") {
      window.renderCourseLessonList("html");
    }
  }, true);

  // Refresh HTML progress after the existing completion handler runs.
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#completeLessonButton")) return;

    const viewer = document.querySelector("#lessonViewer");
    const lessonId = viewer
      ?.querySelector("#completeLessonButton")
      ?.dataset.lessonId;

    if (!String(lessonId || "").startsWith("html-")) return;

    window.setTimeout(() => {
      updateHTMLProgress();

      const button = viewer.querySelector("#completeLessonButton");
      if (button) {
        const language = getLanguage();
        button.textContent = getCompleted(lessonId)
          ? (language === "ar" ? "✓ تم إكمال الدرس" : "✓ Lesson Completed")
          : (language === "ar" ? "✓ إكمال الدرس" : "✓ Mark as Completed");
      }

      viewer.querySelectorAll("[data-html-index]").forEach(item => {
        const index = Number(item.dataset.htmlIndex);
        const lesson = HTML_LESSONS[index];
        if (!lesson) return;

        const number = item.querySelector("span:first-child");
        const status = item.querySelector("span:last-child");

        if (number) {
          number.textContent = getCompleted(lesson.id) ? "✓" : index + 1;
        }

        if (status) {
          status.textContent = getCompleted(lesson.id)
            ? (getLanguage() === "ar" ? "مكتمل" : "Completed")
            : lesson.duration;
        }
      });
    }, 100);
  });

  console.info("CS MATE: HTML navigation and progress initialized.");
})();

/* =========================================
   CS MATE — FINAL HTML LESSON FIX
   Navigation + Completion + Progress
========================================= */

(function fixHTMLCourse() {
  "use strict";

  const lessons = HTML_LESSONS;
  const $viewer = () => document.querySelector("#lessonViewer");
  const language = () =>
    typeof getCurrentLanguage === "function"
      ? getCurrentLanguage()
      : "ar";

  let currentIndex = 0;

  window.HTML_LESSONS = lessons;

  function isDone(id) {
    return typeof isLessonCompleted === "function"
      ? isLessonCompleted(id)
      : false;
  }

  function progressHTML() {
    const done = lessons.filter(lesson => isDone(lesson.id)).length;
    const percent = Math.round(done / lessons.length * 100);

    return `
      <section class="lesson-progress html-only-progress">
        <div class="lesson-progress-info">
          <strong>${language() === "ar" ? "تقدمك في HTML" : "HTML Progress"}</strong>
          <span>${done} / ${lessons.length} — ${percent}%</span>
        </div>
        <div class="lesson-progress-track"
             role="progressbar"
             aria-valuemin="0"
             aria-valuemax="100"
             aria-valuenow="${percent}">
          <div class="lesson-progress-fill" style="width:${percent}%"></div>
        </div>
      </section>
    `;
  }

  function addProgress() {
    const viewer = $viewer();
    if (!viewer) return;

    viewer.querySelectorAll(".lesson-progress").forEach(el => el.remove());

    const header = viewer.querySelector(".lesson-header");
    if (header) {
      header.insertAdjacentHTML("afterend", progressHTML());
    } else {
      viewer.insertAdjacentHTML("afterbegin", progressHTML());
    }
  }

  function addNavigation() {
    const viewer = $viewer();
    if (!viewer) return;

    viewer.querySelectorAll(".lesson-actions, .html-only-navigation")
      .forEach(el => el.remove());

    const nav = document.createElement("div");
    nav.className = "lesson-actions html-only-navigation";

    nav.innerHTML = `
      <button type="button" data-html-action="list">
        ${language() === "ar" ? "قائمة الدروس" : "Lesson List"}
      </button>
      <button type="button" data-html-action="previous"
        ${currentIndex === 0 ? "disabled" : ""}>
        ${language() === "ar" ? "الدرس السابق" : "Previous Lesson"}
      </button>
      <span>${currentIndex + 1} / ${lessons.length}</span>
      <button type="button" data-html-action="next"
        ${currentIndex === lessons.length - 1 ? "disabled" : ""}>
        ${language() === "ar" ? "الدرس التالي" : "Next Lesson"}
      </button>
    `;

    const complete = viewer.querySelector("#completeLessonButton");
    if (complete) complete.insertAdjacentElement("afterend", nav);
    else viewer.appendChild(nav);

    addProgress();
  }

  function showLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    currentIndex = index;
    window.renderLesson(lessons[index]);
  }

  function showList() {
    const viewer = $viewer();
    if (!viewer) return;

    viewer.innerHTML = `
      <div class="lesson-header">
        <h2>${language() === "ar" ? "كورس HTML" : "HTML Course"}</h2>
        <p>${language() === "ar"
          ? `عدد الدروس: ${lessons.length}`
          : `Total lessons: ${lessons.length}`}</p>
      </div>

      ${progressHTML()}

      <div class="lesson-list">
        ${lessons.map((lesson, index) => `
          <button type="button" class="lesson-list-item"
            data-html-index="${index}">
            <span>${isDone(lesson.id) ? "✓" : index + 1}</span>
            <span>${lesson.title[language()] || lesson.title.en}</span>
            <span>${isDone(lesson.id)
              ? (language() === "ar" ? "مكتمل" : "Completed")
              : lesson.duration}</span>
          </button>
        `).join("")}
      </div>

      <button type="button" id="html-return-courses">
        ${language() === "ar" ? "العودة للكورسات" : "Back to courses"}
      </button>
    `;

    viewer.hidden = false;
    document.body.classList.add("cs-mate-learning-open");
    document.body.style.overflow = "hidden";
  }

  // Keep the original lesson renderer, but correct HTML navigation.
  const originalRenderLesson = window.renderLesson;

  if (typeof originalRenderLesson === "function") {
    window.renderLesson = function(lesson) {
      originalRenderLesson.call(this, lesson);

      if (!lesson || !String(lesson.id).startsWith("html-")) return;

      const index = lessons.findIndex(item => item.id === lesson.id);
      if (index < 0) return;

      currentIndex = index;

      const viewer = $viewer();
      if (!viewer) return;

      // Remove navigation/progress created by the C#-only handlers.
      viewer.querySelectorAll(".lesson-actions, .lesson-progress")
        .forEach(el => el.remove());

      addNavigation();
    };
  }

  // Make the course card open the HTML lesson list.
  const originalRenderList = window.renderCourseLessonList;

  window.renderCourseLessonList = function(courseId) {
    if (courseId !== "html") {
      if (typeof originalRenderList === "function") {
        return originalRenderList.call(this, courseId);
      }
      return;
    }

    showList();
  };

  // Route clicks to the correct HTML lesson.
  document.addEventListener("click", function(event) {
    const viewer = $viewer();
    if (!viewer || !viewer.contains(event.target)) return;

    const lessonButton = event.target.closest("[data-html-index]");
    if (lessonButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      showLesson(Number(lessonButton.dataset.htmlIndex));
      return;
    }

    const actionButton = event.target.closest("[data-html-action]");
    if (actionButton) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const action = actionButton.dataset.htmlAction;

      if (action === "previous") showLesson(currentIndex - 1);
      if (action === "next") showLesson(currentIndex + 1);
      if (action === "list") showList();

      return;
    }

    if (event.target.closest("#html-return-courses")) {
      viewer.hidden = true;
      document.body.classList.remove("cs-mate-learning-open");
      document.body.style.overflow = "";
    }
  }, true);

  // Refresh HTML progress after the original completion handler runs.
  document.addEventListener("click", function(event) {
    const button = event.target.closest("#completeLessonButton");
    if (!button || !String(button.dataset.lessonId).startsWith("html-")) {
      return;
    }

    setTimeout(() => {
      const viewer = $viewer();
      if (!viewer) return;

      addProgress();

      const completed = isDone(button.dataset.lessonId);
      button.textContent = completed
        ? (language() === "ar" ? "✓ تم إكمال الدرس" : "✓ Lesson Completed")
        : (language() === "ar" ? "✓ إكمال الدرس" : "✓ Mark as Completed");
    }, 100);
  });

  console.log("CS MATE: HTML course navigation fix loaded.");
})();


