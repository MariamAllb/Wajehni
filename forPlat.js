// قاعدة بيانات الأسئلة - تخصص علوم الحاسب
const csQuestions = {
     beginner: [
    { question: "ما هو المكون الأساسي للحاسوب المسؤول عن معالجة البيانات؟", options: ["القرص الصلب", "الذاكرة", "المعالج (CPU)", "كرت الشاشة"], correct: 2 },
    { question: "أي من التالي يُستخدم لتنسيق شكل صفحة الويب؟", options: ["HTML", "CSS", "SQL", "Python"], correct: 1 },
    { question: "ما هو الامتداد الشائع لملفات البرمجة بلغة Python؟", options: [".js", ".html", ".py", ".css"], correct: 2 },
    { question: "أي من هذه الوظائف تنتمي لتخصص أمن المعلومات؟", options: ["تصميم واجهات", "تحليل الشبكات", "الحماية من الهجمات الإلكترونية", "تصميم قواعد البيانات"], correct: 2 },
    { question: "ما الهدف من استخدام قواعد البيانات؟", options: ["تخزين البيانات", "تصميم صفحات", "ربط المواقع بالشبكات", "إرسال رسائل"], correct: 0 },
    { question: "أي من هذه لغات تُستخدم في الذكاء الاصطناعي؟", options: ["HTML", "CSS", "Python", "Bootstrap"], correct: 2 },
    { question: "ما وظيفة جدار الحماية (Firewall)؟", options: ["تسريع الإنترنت", "فلترة البيانات الضارة", "تحسين الصور", "زيادة سعة الذاكرة"], correct: 1 },
    { question: "أي من التالي يعتبر من أنظمة التشغيل؟", options: ["Linux", "Google", "Python", "SQL"], correct: 0 },
    { question: "ما هو الإنترنت؟", options: ["برنامج", "أداة", "شبكة عالمية", "نظام تشغيل"], correct: 2 },
    { question: "ما اسم الأداة التي تُستخدم لتحليل البيانات؟", options: ["Excel", "Photoshop", "Visual Studio", "PowerPoint"], correct: 0 }
  ],
  intermediate: [
    { question: "أي نوع من البيانات يُستخدم لتخزين القيم الحقيقية (مثل 3.14)؟", options: ["int", "boolean", "float", "char"], correct: 2 },
    { question: "ما هو مفهوم الشبكة المحلية (LAN)؟", options: ["شبكة على مستوى العالم", "شبكة داخل شركة أو مبنى", "ربط حاسوب مع الأقمار", "شبكة سحابية"], correct: 1 },
    { question: "أي لغة تُستخدم غالبًا لتحليل البيانات؟", options: ["Java", "Python", "HTML", "C#"], correct: 1 },
    { question: "ما هي وظيفة الخوارزمية؟", options: ["تصميم الواجهة", "تنظيم البيانات", "حل مشكلة بخطوات منطقية", "إنشاء جداول"], correct: 2 },
    { question: "ما هو الـ IP Address؟", options: ["عنوان صفحة ويب", "عنوان إلكتروني فريد للجهاز", "رمز تشفير", "عنوان بريد"], correct: 1 },
    { question: "ما هي بنية البيانات المناسبة لتنفيذ طابور الانتظار؟", options: ["Stack", "Queue", "Tree", "Graph"], correct: 1 },
    { question: "أي من هذه تُستخدم لحماية الحسابات عبر التحقق بخطوتين؟", options: ["VPN", "Firewall", "2FA", "Proxy"], correct: 2 },
    { question: "في الذكاء الاصطناعي، ما هو الـ Neural Network؟", options: ["قاعدة بيانات", "شبكة عصبية اصطناعية", "سيرفر بيانات", "شبكة اتصال"], correct: 1 },
    { question: "ما الفرق بين Data Mining و Data Analysis؟", options: ["لا يوجد فرق", "التحليل هو جزء من التنقيب", "العكس", "كلاهما للتخزين"], correct: 1 },
    { question: "ما هي لغة برمجة كائنية التوجه؟", options: ["Java", "HTML", "SQL", "CSS"], correct: 0 }
  ],
  advanced: [
    { question: "في مجال الأمن السيبراني، ماذا يعني هجوم DDoS؟", options: ["تشفير الملفات", "منع الخدمة عبر إغراق الخادم", "تجسس عن بعد", "اختراق كلمات المرور"], correct: 1 },
    { question: "أي خوارزمية بحث تُستخدم في الأشجار الثنائية؟", options: ["Breadth First Search", "Hashing", "Bubble Sort", "Linear Search"], correct: 0 },
    { question: "ما الفرق بين supervised و unsupervised learning؟", options: ["النوع الأول يستخدم بيانات مصنفة والثاني لا", "العكس", "النوعان متشابهان", "كلاهما للصور فقط"], correct: 0 },
    { question: "ما هو RESTful API؟", options: ["لغة برمجة", "بروتوكول قواعد البيانات", "أسلوب تصميم واجهات تعتمد على HTTP", "نظام تشغيل"], correct: 2 },
    { question: "فائدة Docker؟", options: ["تحليل البيانات", "تشغيل تطبيقات داخل حاويات", "تشغيل ألعاب", "رسم بياني"], correct: 1 },
    { question: "ما الفرق بين IPv4 و IPv6؟", options: ["IPv6 يدعم عدد أكبر من العناوين", "IPv4 أكثر أمانًا", "IPv6 أبطأ", "IPv4 للأجهزة القديمة فقط"], correct: 0 },
    { question: "مفهوم Overfitting؟", options: ["نموذج يتعلم من البيانات فقط دون تعميم", "أداء ممتاز دائمًا", "نموذج ضعيف", "لا علاقة له بالذكاء الاصطناعي"], correct: 0 },
    { question: "وظيفة HTTPS؟", options: ["تشفير الاتصال الآمن", "تشغيل ملفات", "ربط الواجهات", "تحليل الصور"], correct: 0 },
    { question: "ما هو WebSocket؟", options: ["بروتوكول اتصال لحظي", "مكتبة في CSS", "خوارزمية تشفير", "نوع من الخوادم"], correct: 0 },
    { question: "pandas في Python تُستخدم لـ:", options: ["رسم الرسومات", "قراءة ملفات Excel", "تحليل وتنظيف البيانات", "إنشاء قواعد البيانات"], correct: 2 }
  ]
}; 



// قاعدة بيانات الأسئلة - إدارة الأعمال
const businessQuestions = { 
    beginner: [
    { question: "ما هو تعريف التسويق؟", options: ["الترويج فقط", "الترويج والبيع", "تحديد احتياجات العملاء وتلبيتها", "الدعاية والإعلان"], correct: 2 },
    { question: "ما هي وظيفة المدير؟", options: ["المراقبة فقط", "التخطيط والتنظيم والقيادة والرقابة", "المحاسبة", "البيع المباشر"], correct: 1 },
    { question: "ما هو رأس المال؟", options: ["النقود فقط", "الأصول فقط", "موارد مالية تُستخدم للإنتاج", "الأسهم فقط"], correct: 2 },
    { question: "ما هي الإدارة المالية؟", options: ["إدارة التسويق", "إدارة العمليات", "إدارة الموارد البشرية", "إدارة المال داخل المنظمة"], correct: 3 },
    { question: "ما هو المنتج؟", options: ["خدمة فقط", "سلعة فقط", "أي شيء يُعرض للبيع لتلبية حاجة", "عرض ترويجي"], correct: 2 },
    { question: "من أنواع الشركات:؟", options: ["شركات مساهمة", "شركات فردية", "شركات تضامن", "جميع ما سبق"], correct: 3 },
    { question: "ما هو الهدف الأساسي للمحاسبة؟", options: ["جذب العملاء", "قياس الأداء التسويقي", "توفير معلومات مالية دقيقة", "التسعير"], correct: 2 },
    { question: "العنصر الأساسي في التسويق الرقمي هو:", options: ["الصحف", "الراديو", "وسائل التواصل الاجتماعي", "الإذاعة"], correct: 2 },
    { question: "ما هي دورة حياة المنتج؟", options: ["مرحلة الترويج فقط", "التصميم والإنتاج", "مراحل من التقديم حتى الانحدار", "البيع فقط"], correct: 2 },
    { question: "أي مما يلي يعتبر من وظائف الموارد البشرية؟", options: ["الإنتاج", "التوزيع", "التوظيف والتدريب", "المحاسبة"], correct: 2 }
  ],
  intermediate: [
    { question: "ما هو مفهوم SWOT؟", options: ["تحليل السوق", "تحليل القوى والضعف والفرص والتهديدات", "نموذج تسويقي", "خطة مالية"], correct: 1 },
    { question: "في التسويق، ما المقصود بـ 4Ps؟", options: ["أشخاص، مكان، سعر، منتج", "سعر، منتج، ترويج، مكان", "منتج، تكلفة، إعلان، موظفين", "كل ما سبق"], correct: 1 },
    { question: "ما هي الاستراتيجية؟", options: ["خطة قصيرة المدى", "إجراء مفاجئ", "خطة لتحقيق الأهداف طويلة المدى", "أداة تنفيذية فقط"], correct: 2 },
    { question: "ماذا تعني KPI؟", options: ["مؤشر الأداء الرئيسي", "الخطة الترويجية", "التسعير المستهدف", "مستوى الربح"], correct: 0 },
    { question: "أي مما يلي يعد من تقنيات تحليل المنافسين؟", options: ["تحليل SWOT", "Pestel", "نموذج بورتر", "جميع ما سبق"], correct: 3 },
    { question: "ما هو مفهوم السوق المستهدف؟", options: ["العملاء العشوائيين", "كل العملاء", "فئة معينة من العملاء يتم توجيه الجهود نحوها", "الأسواق المحلية فقط"], correct: 2 },
    { question: "ما هو الفرق بين الرؤية والرسالة؟", options: ["لا يوجد فرق", "الرؤية هدف بعيد، الرسالة ما نقوم به حاليًا", "العكس", "الرؤية قصيرة المدى"], correct: 1 },
    { question: "ما هو التقسيم السوقي؟", options: ["توزيع الرواتب", "توزيع الموظفين", "تقسيم السوق إلى مجموعات حسب الخصائص", "تقسيم الأرباح"], correct: 2 },
    { question: "ما هي الميزانية التشغيلية؟", options: ["مصاريف الموظفين فقط", "كل التكاليف الجارية لتشغيل العمل", "الإعلانات فقط", "شراء معدات"], correct: 1 },
    { question: "في المحاسبة، ما الفرق بين الأصول والخصوم؟", options: ["الأصول ملكية، الخصوم التزامات", "الأصول ديون", "الخصوم دخل", "لا فرق"], correct: 0 }
  ],
  advanced: [
    { question: "ما هو IRR؟", options: ["المعدل الداخلي للعائد", "العائد المالي المتوقع", "نسبة التوزيع", "التكلفة التشغيلية"], correct: 0 },
    { question: "ما هو مفهوم التدفق النقدي الحر؟", options: ["الأرباح فقط", "النقد المتاح بعد المصاريف الرأسمالية", "إجمالي المبيعات", "الدخل التشغيلي"], correct: 1 },
    { question: "في نموذج بورتر، كم عدد قوى التنافس؟", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "متى يتم استخدام تحليل break-even؟", options: ["لتحديد نقطة التعادل بين التكاليف والإيرادات", "لتحديد الأسعار", "لحساب الرواتب", "لمعرفة عدد الموظفين"], correct: 0 },
    { question: "ما الفرق بين التسويق B2B و B2C؟", options: ["B2B يبيع للأفراد، B2C للشركات", "B2B للشركات، B2C للأفراد", "B2B تسويق إلكتروني فقط", "B2C تسويق مباشر فقط"], correct: 1 },
    { question: "ما هو ROA؟", options: ["العائد على الأصول", "العائد على الاستثمار", "معدل الإنتاج", "المبيعات السنوية"], correct: 0 },
    { question: "ما الفرق بين الكفاءة والفاعلية؟", options: ["لا يوجد فرق", "الكفاءة تعني الإنجاز بأقل موارد، الفاعلية تحقيق الأهداف", "العكس", "الكفاءة تتعلق بالخسارة"], correct: 1 },
    { question: "أي من التالي هو جزء من تحليل PESTEL؟", options: ["السياسية", "البيئية", "الاقتصادية", "جميع ما سبق"], correct: 3 },
    { question: "في المحاسبة، ما هو الاستهلاك؟", options: ["ارتفاع القيمة", "الربح السنوي", "نقص تدريجي في قيمة الأصل", "زيادة رأس المال"], correct: 2 },
    { question: "ما هو مفهوم الحوكمة؟", options: ["تنظيم العلاقة بين الإدارة والمساهمين", "مراقبة الموظفين فقط", "هيكلة الفريق", "زيادة الأرباح"], correct: 0 }
  ]
}; 



// قاعدة بيانات الأسئلة - الطب
const medicineQuestions = {
     beginner: [
    { question: "ما هو العضو المسؤول عن ضخ الدم في الجسم؟", options: ["الكبد", "الكلى", "القلب", "الطحال"], correct: 2 },
    { question: "ما هو العنصر الأساسي في خلايا الدم الحمراء؟", options: ["الحديد", "الكالسيوم", "البوتاسيوم", "الزنك"], correct: 0 },
    { question: "ما هي وظيفة الرئتين؟", options: ["تنقية الدم", "إنتاج الطاقة", "امتصاص الأكسجين وإخراج ثاني أكسيد الكربون", "تحليل الطعام"], correct: 2 },
    { question: "ما هو الجهاز المسؤول عن التحكم في الجسم؟", options: ["الهضمي", "الدوري", "العصبي", "التنفسي"], correct: 2 },
    { question: "ما هو العظم الأطول في جسم الإنسان؟", options: ["عظم الفخذ", "الساعد", "الكتف", "الجمجمة"], correct: 0 },
    { question: "كم عدد صمامات القلب؟", options: ["2", "4", "3", "5"], correct: 1 },
    { question: "ما هو الفيتامين المرتبط بالتعرض لأشعة الشمس؟", options: ["فيتامين C", "فيتامين D", "فيتامين A", "فيتامين B"], correct: 1 },
    { question: "ما هو اسم الطبيب المختص في علاج الأطفال؟", options: ["جراح", "طبيب باطنية", "طبيب أطفال", "طبيب طوارئ"], correct: 2 },
    { question: "ما هو الاختبار الذي يُستخدم للكشف عن نسبة السكر في الدم؟", options: ["تخطيط القلب", "فحص البول", "تحليل الجلوكوز", "تحليل الدهون"], correct: 2 },
    { question: "ما هو العدد الطبيعي لأسنان الإنسان البالغ؟", options: ["28", "30", "32", "36"], correct: 2 }
  ],
  intermediate: [
    { question: "ما هو العضو الذي يُنتج الإنسولين في الجسم؟", options: ["الكبد", "الطحال", "البنكرياس", "الكلى"], correct: 2 },
    { question: "أي مما يلي يعتبر من علامات الالتهاب؟", options: ["الحرارة", "الانتفاخ", "الألم", "جميع ما ذكر"], correct: 3 },
    { question: "ما هي وظيفة الكلى؟", options: ["إنتاج الهيموغلوبين", "إنتاج الأنسولين", "تنقية الدم من الفضلات", "هضم الطعام"], correct: 2 },
    { question: "ما اسم العصب الذي يتحكم في حركات الوجه؟", options: ["العصب السمعي", "العصب الوجهي", "العصب البصري", "العصب القحفي"], correct: 1 },
    { question: "ما هو الاسم العلمي لمرض ارتفاع ضغط الدم؟", options: ["Hypertension", "Hypotension", "Hyperglycemia", "Anemia"], correct: 0 },
    { question: "ما هي الطبقة الخارجية من الجلد؟", options: ["الأدمة", "الأنسجة", "الطبقة القرنية", "البشرة"], correct: 3 },
    { question: "أي من هذه الفحوصات يُستخدم لتصوير العظام؟", options: ["الرنين المغناطيسي", "الموجات فوق الصوتية", "الأشعة السينية (X-ray)", "التصوير النووي"], correct: 2 },
    { question: "ما اسم الجزء من الدم المسؤول عن التجلط؟", options: ["خلايا الدم الحمراء", "خلايا الدم البيضاء", "البلازما", "الصفائح الدموية"], correct: 3 },
    { question: "أين تقع المعدة في جسم الإنسان؟", options: ["الجهة اليمنى العليا", "الجهة اليسرى العليا", "الجهة اليمنى السفلى", "منتصف البطن"], correct: 1 },
    { question: "ما هو عدد فقرات العمود الفقري؟", options: ["26", "28", "30", "33"], correct: 3 }
  ],
  advanced: [
    { question: "ما هو اسم الهرمون الذي يُفرز من الغدة الدرقية؟", options: ["الأنسولين", "الأدرينالين", "الثيروكسين", "الكورتيزول"], correct: 2 },
    { question: "ما هو الاسم العلمي لكريات الدم البيضاء؟", options: ["Leukocytes", "Erythrocytes", "Platelets", "Plasma"], correct: 0 },
    { question: "ما هي الجرثومة المسؤولة عن قرحة المعدة؟", options: ["HIV", "Helicobacter pylori", "Salmonella", "E. coli"], correct: 1 },
    { question: "ما هو الفرق بين الورم الحميد والخبيث؟", options: ["لا يوجد فرق", "الحميد لا ينتشر، الخبيث ينتشر", "الخبيث لا يُعالج", "الحميد يُسبب عدوى"], correct: 1 },
    { question: "ما اسم المادة التي تُستخدم في التخدير الموضعي؟", options: ["باراسيتامول", "ليدوكايين", "أيبوبروفين", "كيتامين"], correct: 1 },
    { question: "ما هو معدل نبض القلب الطبيعي للبالغين؟", options: ["30-50 نبضة/دقيقة", "60-100 نبضة/دقيقة", "120-150 نبضة/دقيقة", "100-120 نبضة/دقيقة"], correct: 1 },
    { question: "ما اسم الصبغة التي تعطي الدم لونه الأحمر؟", options: ["ميلانين", "هيموغلوبين", "كلوروفيل", "كرياتين"], correct: 1 },
    { question: "ما اسم الفيتامين الذي يساعد على تخثر الدم؟", options: ["فيتامين C", "فيتامين D", "فيتامين K", "فيتامين A"], correct: 2 },
    { question: "أي من هذه الأجهزة تُستخدم لقياس تشبع الأكسجين؟", options: ["جهاز تخطيط القلب", "مقياس التأكسج النبضي", "جهاز الرنين", "ميزان الحرارة"], correct: 1 },
    { question: "أي من هذه الأمراض يُعد من أمراض المناعة الذاتية؟", options: ["السكري النوع الثاني", "الربو", "التصلب اللويحي المتعدد (MS)", "الضغط المرتفع"], correct: 2 }
  ]
};



// قاعدة بيانات الأسئلة - تخصص الهندسة
const engineeringQuestions = {
  beginner: [
    { question: "ما هو فرع الهندسة المختص بتصميم المباني والطرق؟", options: ["الهندسة الكهربائية", "الهندسة المدنية", "الهندسة الكيميائية", "هندسة الحاسوب"], correct: 1 },
    { question: "ما هو الجهاز المستخدم لقياس الزوايا؟", options: ["المسطرة", "الفرجار", "المنقلة", "الكوس"], correct: 2 },
    { question: "أي من هذه المواد يُستخدم في البناء؟", options: ["الخشب", "الخرسانة", "الطين", "النحاس"], correct: 1 },
    { question: "ما هو دور المهندس الميكانيكي؟", options: ["تصميم الدوائر الكهربائية", "تصنيع الآلات وتحليل الحركة", "تحليل البيانات", "تصميم الواجهات"], correct: 1 },
    { question: "أي من هذه وحدات تُستخدم لقياس الطول؟", options: ["كيلوغرام", "متر", "لتر", "أوم"], correct: 1 },
    { question: "ما هو نوع الرسم المستخدم في التصاميم الهندسية؟", options: ["رسم بياني", "رسم فني", "رسم هندسي", "رسم حر"], correct: 2 },
    { question: "الهندسة الكهربائية تهتم بـ:", options: ["المياه", "الحركة", "الدوائر الكهربائية والطاقة", "الخرسانة"], correct: 2 },
    { question: "ما هي وحدة قياس التيار الكهربائي؟", options: ["فولت", "أوم", "أمبير", "واط"], correct: 2 },
    { question: "الهندسة الصناعية تهتم بـ:", options: ["تحليل الأسواق", "تحسين العمليات والإنتاج", "بناء الجسور", "التسويق"], correct: 1 },
    { question: "ما هو الرسم الذي يوضح أجزاء الجهاز بشكل تفصيلي؟", options: ["رسم بياني", "رسم تخطيطي", "رسم تجريدي", "رسم إبداعي"], correct: 1 }
  ],
  intermediate: [
    { question: "ما الفرق بين القوى المحصلة والقوى المتوازنة؟", options: ["لا فرق", "المحصلة تنتج حركة، المتوازنة لا تؤثر على الحركة", "المتوازنة تسبب تسارع", "المحصلة تعني توقف الجسم"], correct: 1 },
    { question: "الهندسة الكيميائية تهتم بـ:", options: ["تصميم المواقع", "عمليات التفاعل الكيميائي في الصناعة", "تحليل البيانات", "بناء الجسور"], correct: 1 },
    { question: "أي من هذه الأدوات تُستخدم في تحليل الإجهاد والضغط؟", options: ["الفأرة", "البرمجيات الهندسية", "المسطرة", "الآلة الحاسبة"], correct: 1 },
    { question: "ما المقصود بـ CAD؟", options: ["نظام تسويقي", "تصميم باستخدام الحاسوب", "برمجة شبكات", "تحليل نظم"], correct: 1 },
    { question: "أي من هذه البرامج يُستخدم في الهندسة المعمارية؟", options: ["Photoshop", "AutoCAD", "Excel", "Notepad"], correct: 1 },
    { question: "ما وحدة قياس القوة؟", options: ["نيوتن", "أمبير", "كيلو", "فولت"], correct: 0 },
    { question: "ما هو مبدأ العزم؟", options: ["دفع الجسم", "دوران القوة حول نقطة", "تسارع الجسم", "تقليل الوزن"], correct: 1 },
    { question: "الهندسة البيئية تركز على:", options: ["المباني", "الدوائر", "حماية البيئة", "تصميم المنتجات"], correct: 2 },
    { question: "الخرسانة تتكون من:", options: ["رمل فقط", "أسمنت وماء وركام", "طين وزيت", "خشب وأسمنت"], correct: 1 },
    { question: "ما هو الحديد المقاوم للصدأ؟", options: ["حديد الزهر", "الفولاذ المقاوم للصدأ (Stainless Steel)", "الحديد المطاوع", "النحاس الأسود"], correct: 1 }
  ],
  advanced: [
    { question: "في التحليل الإنشائي، ما هو العنصر الذي يتحمل فقط قوى الشد؟", options: ["العمود", "العارضة", "الكابل", "الأساس"], correct: 2 },
    { question: "ما هو مبدأ عمل محرك الاحتراق الداخلي؟", options: ["استخدام بخار الماء", "احتراق الوقود داخل غرفة لإنتاج طاقة", "تدوير مغناطيسي", "ضغط الهواء البارد"], correct: 1 },
    { question: "ما هي وظيفة الـ PLC في الأنظمة الصناعية؟", options: ["حفظ الملفات", "برمجة التحكم في العمليات", "تحليل البيانات", "تشغيل الصوت"], correct: 1 },
    { question: "ما الفرق بين الحديد الطري والحديد عالي المقاومة؟", options: ["لا فرق", "الطري يستخدم للزينة، العالي للبناء", "الطري أقوى", "العالي للزراعة فقط"], correct: 1 },
    { question: "ما هو معامل الأمان في التصميم؟", options: ["عامل الخطر", "نسبة احتياطية للتحميل الزائد", "وزن المادة", "قوة الشد"], correct: 1 },
    { question: "الهندسة الجيوتقنية تهتم بـ:", options: ["الشبكات", "البرمجة", "خصائص التربة والأساسات", "التجارة"], correct: 2 },
    { question: "في الهندسة الكهربائية، ما هو المقصود بـ RMS؟", options: ["متوسط الجهد", "متوسط القدرة", "القيمة الجذرية للتيار أو الجهد", "السرعة"], correct: 2 },
    { question: "أي من هذه يستخدم لتحليل الإجهاد والانفعال؟", options: ["SPSS", "SolidWorks", "ANSYS", "Photoshop"], correct: 2 },
    { question: "ما هي الخوارزمية المستخدمة لتقليل الفاقد في العمليات؟", options: ["Lean", "Scrum", "Agile", "Waterfall"], correct: 0 },
    { question: "الهندسة الحيوية تهدف إلى:", options: ["تحسين التعليم", "تصميم أجهزة طبية", "تصنيع الأغذية", "إدارة المشاريع"], correct: 1 }
  ]
};

// قاعدة بيانات الأسئلة -  الأدب
const literatureQuestions = {
  beginner: [
    { question: "ما هو علم العروض؟", options: ["علم النفس", "علم البحور الشعرية", "علم البلاغة", "علم النحو"], correct: 1 },
    { question: "من رواد الأدب الجاهلي؟", options: ["المتنبي", "امرؤ القيس", "الجاحظ", "أحمد شوقي"], correct: 1 },
    { question: "ما المقصود بالرمزية في الأدب؟", options: ["استخدام الأرقام", "استخدام الرموز للتعبير عن المعاني", "البلاغة", "الوزن الشعري"], correct: 1 },
    { question: "أي من التالي يعد من فروع علم النفس؟", options: ["التحليل الأدبي", "التحليل النفسي", "النقد اللغوي", "النحو المقارن"], correct: 1 },
    { question: "من هو مؤلف رواية (البؤساء)؟", options: ["ديستويفسكي", "فيكتور هوغو", "تولستوي", "شكسبير"], correct: 1 },
    { question: "ما هو السجع؟", options: ["تشبيه أدبي", "محسن بديعي في النثر", "نمط شعري", "أسلوب بلاغي في الحوار"], correct: 1 },
    { question: "ما اسم النظرية التي أسسها فرويد؟", options: ["النظرية السلوكية", "التحليل النفسي", "النظرية الإنسانية", "النظرية الاجتماعية"], correct: 1 },
    { question: "من هو شاعر النيل؟", options: ["أحمد شوقي", "حافظ إبراهيم", "إيليا أبو ماضي", "بدر شاكر السياب"], correct: 1 },
    { question: "ما وظيفة الخريطة الذهنية في علم الاجتماع؟", options: ["حفظ المفاهيم", "رسم الحدود", "تحليل البيانات الإحصائية", "تنظيم الأفكار وتحليل الظواهر الاجتماعية"], correct: 3 },
    { question: "من فلاسفة الأدب الإنجليزي؟", options: ["هيجل", "أفلاطون", "شكسبير", "سقراط"], correct: 2 }
  ],
  intermediate: [
    { question: "من هو رائد علم الاجتماع؟", options: ["ابن خلدون", "أفلاطون", "الجاحظ", "هارولد لاسويل"], correct: 0 },
    { question: "ما هو التناص في الأدب؟", options: ["تشابه العناوين", "اقتباس جزئي من نصوص أخرى", "التقليد الكامل", "تكرار الكلمات"], correct: 1 },
    { question: "أي من هذه المدارس الأدبية ظهرت أولًا؟", options: ["الرومانسية", "الواقعية", "الكلاسيكية", "الرمزية"], correct: 2 },
    { question: "من هو مؤلف كتاب (الأدب والغرابة)؟", options: ["إحسان عباس", "صلاح فضل", "طه حسين", "عبد الله الغذامي"], correct: 1 },
    { question: "ما المقصود بالبنية السردية؟", options: ["موسيقى الشعر", "أسلوب النحو", "ترتيب عناصر القصة أو الرواية", "نوع اللغة"], correct: 3 },
    { question: "ما وظيفة علم النفس الأدبي؟", options: ["تحليل النصوص رياضيًا", "فهم دوافع الشخصيات", "قياس طول النص", "مقارنة الأساليب"], correct: 1 },
    { question: "أي مما يلي يستخدم في النقد الأدبي الحديث؟", options: ["الأسلوبية", "البلاغة فقط", "علم النحو", "الوزن والقافية"], correct: 0 },
    { question: "أين نشأت المدرسة الواقعية؟", options: ["فرنسا", "إيطاليا", "ألمانيا", "أمريكا"], correct: 0 },
    { question: "ما هو الفرق بين المقالة والخطبة؟", options: ["المقالة تُقرأ والخطبة تُلقى", "لا فرق", "المقالة أدبية فقط", "الخطبة قصيرة دائمًا"], correct: 0 },
    { question: "من هو كاتب رواية (1984)؟", options: ["جورج أورويل", "فيكتور هوغو", "فرانز كافكا", "جبران خليل جبران"], correct: 0 }
  ],
  advanced: [
    { question: "ما هو السيميائيات؟", options: ["علم الرموز والدلالات", "علم النحو", "البلاغة", "علم الاجتماع الأدبي"], correct: 0 },
    { question: "ما اسم النظرية التي تربط الأدب بالسياق الاجتماعي؟", options: ["نظرية البنائية", "النظرية الاجتماعية", "نظرية التلقي", "نظرية التحليل النصي"], correct: 1 },
    { question: "من مؤلف كتاب (مقدمة في السيميولوجيا)؟", options: ["رولان بارت", "جاك دريدا", "إمبرتو إيكو", "عبد الفتاح كيليطو"], correct: 0 },
    { question: "ما الفرق بين الحداثة وما بعد الحداثة في الأدب؟", options: ["ما بعد الحداثة تشكك في الثوابت", "الحداثة تنتمي للروايات فقط", "الحداثة تعتمد الرمزية فقط", "لا فرق بينهما"], correct: 0 },
    { question: "ما هو التيار النفسي في النقد؟", options: ["التركيز على اللغة", "التركيز على الحياة الشخصية للمؤلف", "تحليل دوافع الشخصيات وسلوكها", "المقارنة بين النصوص"], correct: 2 },
    { question: "ما هو الفرق بين اللغة التقريرية واللغة المجازية؟", options: ["الأولى مباشرة، الثانية رمزية", "لا فرق", "الأولى تستخدم في الشعر فقط", "الثانية علمية"], correct: 0 },
    { question: "ما اسم الكتاب الذي كتبه ابن خلدون؟", options: ["الأغاني", "البيان والتبيين", "المقدمة", "العقد الفريد"], correct: 2 },
    { question: "أي من المفكرين يُعد من مؤسسي النقد الثقافي؟", options: ["عبد الله الغذامي", "نصر حامد أبو زيد", "محمد عابد الجابري", "محمد أركون"], correct: 0 },
    { question: "ما هو الانزياح في اللغة؟", options: ["الابتعاد عن المعنى الحرفي", "الكتابة بخط مائل", "التكرار", "فصل الجمل"], correct: 0 },
    { question: "ما اسم النظرية التي تهتم بتفاعل القارئ مع النص؟", options: ["نظرية البنيوية", "نظرية التلقي", "النظرية النحوية", "نظرية التكوين"], correct: 1 }
  ]
};


const educationQuestions = {
  beginner: [
    { question: "ما هو الهدف الأساسي من التربية؟", options: ["تحقيق الربح", "نقل المعرفة والقيم", "إدارة الأعمال", "الابتكار الصناعي"], correct: 1 },
    { question: "أي من التالي يعتبر من نظريات التعلم؟", options: ["النظرية الذرية", "نظرية الجاذبية", "النظرية السلوكية", "النظرية الاقتصادية"], correct: 2 },
    { question: "أي من هذه المهارات تعتبر من مهارات القرن 21 في التعليم؟", options: ["الحفظ فقط", "التلقين", "التفكير النقدي", "الاستظهار"], correct: 2 },
    { question: "ما هو المقصود بالتقويم التكويني؟", options: ["اختبار نهائي", "تقويم خلال العملية التعليمية", "تقويم خارجي", "قياس مستوى الخريجين فقط"], correct: 1 },
    { question: "أي من التالي يعد من أساليب التدريس الحديثة؟", options: ["الإلقاء فقط", "المناقشة والتعلم النشط", "الحفظ والتلقين", "النسخ من السبورة"], correct: 1 },
    { question: "ما الفرق بين التعليم والتعلم؟", options: ["لا فرق", "التعليم أوسع من التعلم", "التعلم يعني الحفظ فقط", "التعلم هو عملية داخل الصف فقط"], correct: 1 },
    { question: "متى يبدأ التعليم المبكر؟", options: ["بعد الجامعة", "في سن الطفولة المبكرة", "في المرحلة الثانوية", "عند البلوغ"], correct: 1 },
    { question: "ما هو دور المعلم في التعلم النشط؟", options: ["ملقن", "مراقب", "موجه ومحفز", "غير مشارك"], correct: 2 },
    { question: "ما هو المقصود بالاحتياجات الخاصة؟", options: ["طلاب الموهبة فقط", "جميع الطلاب", "طلاب يحتاجون دعم إضافي", "الطلاب الجامعيون فقط"], correct: 2 },
    { question: "ما هو الهدف من الأنشطة الصفية؟", options: ["تمضية الوقت", "تعزيز الفهم والتطبيق", "تقييم نهائي", "منافسة بين الطلاب فقط"], correct: 1 }
  ],
  intermediate: [
    { question: "ما هو تعريف المنهج التربوي؟", options: ["المواد فقط", "كل ما يقدمه المعلم", "مجموع الخبرات التي يمر بها المتعلم", "الكتب الدراسية فقط"], correct: 2 },
    { question: "من أهداف التقويم التربوي:", options: ["تحديد نقاط القوة والضعف", "حفظ النظام", "إدارة الوقت", "تنفيذ العقوبات"], correct: 0 },
    { question: "من أدوات التقويم:", options: ["الامتحانات فقط", "الاختبارات والمقابلات والملاحظات", "الحضور والغياب فقط", "الدرجات النهائية فقط"], correct: 1 },
    { question: "في علم النفس التربوي، ما هو التعزيز الإيجابي؟", options: ["معاقبة الطالب", "تحفيزه بمكافأة عند السلوك الجيد", "تجاهل السلوك", "إعطاء واجب إضافي"], correct: 1 },
    { question: "ما هو المقصود بالفروق الفردية؟", options: ["الطلاب متشابهون", "الطلاب يختلفون في القدرات والأساليب", "جميع الطلاب بطيئو التعلم", "تقييم الطلاب بالتساوي"], correct: 1 },
    { question: "ما هي خصائص التعليم الجيد؟", options: ["التلقين والحفظ", "مشاركة المتعلم ووضوح الأهداف", "السرعة في الشرح", "الاعتماد على المعلم فقط"], correct: 1 },
    { question: "ما هو التعليم التعاوني؟", options: ["تعلم فردي", "تعلم عن بعد", "تعلم ضمن مجموعات", "تعلم تلقيني"], correct: 2 },
    { question: "ماذا تعني الكفاءة التربوية؟", options: ["حفظ المنهج", "إتقان المعلم للمهارات التدريسية", "تقييم نهائي فقط", "إعطاء الواجبات فقط"], correct: 1 },
    { question: "أي من هذه الأساليب يُستخدم لتعليم ذوي اضطراب التوحد؟", options: ["أسلوب عقابي", "أسلوب بصري وتكرار التعليم", "أسلوب تنافسي", "أسلوب جماعي إجباري"], correct: 1 },
    { question: "من أساليب تعزيز التفكير الناقد:", options: ["الأسئلة المفتوحة والنقاش", "الأسئلة المغلقة فقط", "حفظ النصوص", "قراءة المقرر فقط"], correct: 0 }
  ],
  advanced: [
    { question: "ما هو مفهوم التعلم البنائي؟", options: ["اكتساب المعرفة عن طريق التلقين", "بناء المعرفة من خلال التفاعل والتجربة", "الاعتماد الكلي على المعلم", "حفظ المعلومات فقط"], correct: 1 },
    { question: "ما هو Bloom's Taxonomy؟", options: ["تصنيف للغات", "نظرية في الاقتصاد", "تصنيف لمستويات التفكير", "مادة دراسية"], correct: 2 },
    { question: "ما المقصود بالتقويم البنائي؟", options: ["يُجرى في نهاية العام فقط", "يُستخدم لتعديل التعليم أثناء التنفيذ", "يهدف إلى تحديد الراسبين", "تقويم عام دون تحليل"], correct: 1 },
    { question: "ما هو الفرق بين الأهداف العامة والخاصة في التدريس؟", options: ["لا فرق", "الأهداف العامة أوسع وأشمل", "الأهداف الخاصة لا تقاس", "الهدف العام يُستخدم للواجبات فقط"], correct: 1 },
    { question: "ما هو تعريف التفكير الإبداعي؟", options: ["التفكير التقليدي", "التفكير بخط واحد", "إيجاد حلول جديدة ومبتكرة", "الابتعاد عن الواقع"], correct: 2 },
    { question: "ما هي أهم مبادئ النظرية المعرفية؟", options: ["الاستجابة فقط", "الدافعية الداخلية وفهم العمليات العقلية", "السلوك الظاهري فقط", "الحفظ المتكرر"], correct: 1 },
    { question: "كيف يتم دعم المتعلمين المتأخرين دراسيًا؟", options: ["العقاب", "التهميش", "خطط فردية ودعم خاص", "منع المشاركة"], correct: 2 },
    { question: "ما هو التعليم المتمركز حول المتعلم؟", options: ["المعلم يشرح فقط", "الطالب شريك في بناء المعرفة", "الطالب يستمع فقط", "التلقين المستمر"], correct: 1 },
    { question: "في التقويم، ماذا تعني مصداقية الأداة؟", options: ["قياس غير دقيق", "قياس ما يُفترض قياسه بدقة", "قياس غير موحد", "تقدير عشوائي"], correct: 1 },
    { question: "ما هو الفرق بين التقويم الكمي والكيفي؟", options: ["الاثنان متشابهان", "الكمي أرقام، والكيفي وصفي تحليلي", "الكيفي أقوى دائمًا", "الكمي بدون أهمية"], correct: 1 }
  ]
};


const scienceQuestions = {
  beginner: [
    { question: "ما هو الكوكب الأقرب إلى الشمس؟", options: ["الأرض", "المريخ", "عطارد", "الزهرة"], correct: 2 },
    { question: "ما هو العنصر الأساسي الذي نتنفسه؟", options: ["النيتروجين", "الأوكسجين", "ثاني أكسيد الكربون", "الهيدروجين"], correct: 1 },
    { question: "أي من الحواس يستخدمها الإنسان للرؤية؟", options: ["الأنف", "الأذن", "العين", "اليد"], correct: 2 },
    { question: "ما هو مصدر الطاقة الرئيسي على الأرض؟", options: ["النفط", "الشمس", "الغاز", "الكهرباء"], correct: 1 },
    { question: "ما هو شكل جزيء الماء؟", options: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
    { question: "أي من التالي يستخدم في قياس درجة الحرارة؟", options: ["الباروميتر", "الترمومتر", "الميكرومتر", "المسطرة"], correct: 1 },
    { question: "ما هو أقرب نجم إلى الأرض؟", options: ["نجم الشعرى", "الشمس", "نجم القطب", "القمر"], correct: 1 },
    { question: "أي من هذه الظواهر تسبب الرعد؟", options: ["البرق", "الضوء", "الرياح", "الغيوم"], correct: 0 },
    { question: "ما هي حالات المادة الثلاث الأساسية؟", options: ["صلبة، سائلة، غازية", "حديد، نحاس، زجاج", "صوت، ضوء، حرارة", "ماء، تراب، هواء"], correct: 0 },
    { question: "في أي جزء من النبات تحدث عملية البناء الضوئي؟", options: ["الجذر", "الساق", "الأوراق", "البذور"], correct: 2 }
  ],
  intermediate: [
    { question: "ما هو عدد كواكب المجموعة الشمسية؟", options: ["7", "8", "9", "10"], correct: 1 },
    { question: "ما هو الحمض النووي المسؤول عن الصفات الوراثية؟", options: ["DNA", "ATP", "RNA", "H2O"], correct: 0 },
    { question: "ما هو الجهاز المسؤول عن ضخ الدم؟", options: ["الكبد", "القلب", "الرئتين", "المعدة"], correct: 1 },
    { question: "ما هي وحدة قياس القوة؟", options: ["متر", "نيوتن", "أوم", "واط"], correct: 1 },
    { question: "ما هي المعادلة الكيميائية للماء؟", options: ["H2O", "CO2", "NaCl", "O2"], correct: 0 },
    { question: "من هو مكتشف قانون الجاذبية؟", options: ["أينشتاين", "نيوتن", "داروين", "باستور"], correct: 1 },
    { question: "أي من التالي مادة ناقلة للكهرباء؟", options: ["الخشب", "البلاستيك", "النحاس", "الزجاج"], correct: 2 },
    { question: "ما اسم العملية التي ينتج بها النبات الغذاء؟", options: ["الاحتراق", "التنفس", "البناء الضوئي", "التمثيل الحراري"], correct: 2 },
    { question: "ما هو الغاز الناتج عن تنفس الإنسان؟", options: ["أوكسجين", "نيتروجين", "ثاني أكسيد الكربون", "هيدروجين"], correct: 2 },
    { question: "في أي طبقة من الأرض تحدث الزلازل؟", options: ["القشرة", "النواة", "الوشاح", "الغلاف الجوي"], correct: 0 }
  ],
  advanced: [
    { question: "ما هو الفرق بين السرعة والتسارع؟", options: ["لا يوجد فرق", "السرعة معدل التغير في المسافة، التسارع معدل تغير السرعة", "التسارع ثابت دائمًا", "السرعة لا تقاس"], correct: 1 },
    { question: "ما هو الرقم الهيدروجيني للماء النقي؟", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "ما هي صيغة ثاني أكسيد الكربون؟", options: ["CO2", "O2", "H2O", "NaCl"], correct: 0 },
    { question: "من هو مكتشف الإلكترون؟", options: ["ديموقريطس", "رذرفورد", "تومسون", "بوهر"], correct: 2 },
    { question: "ما هو الجهاز الذي يُستخدم لقياس شدة الزلازل؟", options: ["الباروميتر", "مقياس ريختر", "الترمومتر", "الأميتر"], correct: 1 },
    { question: "أي من هذه الظواهر يحتاج وسط مادي للانتقال؟", options: ["الضوء", "الحرارة", "الصوت", "المجال المغناطيسي"], correct: 2 },
    { question: "ما هو الفرق بين الكتلة والوزن؟", options: ["لا فرق", "الوزن يعتمد على الجاذبية والكتلة لا", "الكتلة تتغير بالموقع", "الوزن ثابت دائمًا"], correct: 1 },
    { question: "ما اسم أصغر وحدة في المادة؟", options: ["الخلايا", "الذرات", "الجزيئات", "الأيونات"], correct: 1 },
    { question: "أي من الآتي ينتج طاقة كهربائية؟", options: ["المصباح", "المولد", "السلك", "القاعدة"], correct: 1 },
    { question: "في جسم الإنسان، ما العضو المسؤول عن تنقية الدم؟", options: ["الكبد", "الرئتين", "الكلى", "المعدة"], correct: 2 }
  ]
};

let currentQuestions = [];

function startQuiz(level, subject) {
  const quizContainer = document.getElementById('question-section');
  const submitBtn = document.getElementById('submit-btn');
  const resultBox = document.getElementById('result');

  resultBox.innerHTML = "";
  quizContainer.innerHTML = "";

  const allQuestions = {
    cs: csQuestions,
    business: businessQuestions,
    medicine: medicineQuestions,
    engineering: typeof engineeringQuestions !== 'undefined' ? engineeringQuestions : {},
    education: typeof educationQuestions !== 'undefined' ? educationQuestions : {},
    literature: typeof literatureQuestions !== 'undefined' ? literatureQuestions : {},
    science: typeof scienceQuestions !== 'undefined' ? scienceQuestions : {}
  };

  currentQuestions = allQuestions[subject][level];

currentQuestions.forEach((q, index) => {
  const questionBox = document.createElement("div");
  questionBox.className = "question-box";
  questionBox.style.animationDelay = `${index * 0.1}s`; // تأخير متدرج

    const questionTitle = document.createElement("p");
    questionTitle.textContent = `(${index + 1}) ${q.question}`;
    questionBox.appendChild(questionTitle);

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${optIndex}">
        ${opt}
      `;
      questionBox.appendChild(label);
    });

    quizContainer.appendChild(questionBox);
  });

  quizContainer.style.display = "block";
  submitBtn.style.display = "block";
}

function submitQuiz() {
  let score = 0;

  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });

  const resultBox = document.getElementById('result');
  const percent = (score / currentQuestions.length) * 100;
  let message = "";

  if (percent >= 80) {
    message = "ممتاز! يبدو أن هذا المجال يناسبك كثيرًا. تابع تطوير مهاراتك فيه!";
  } else if (percent >= 50) {
    message = "أنت على الطريق الصحيح، لكن ما زال أمامك المزيد لتكتشف هذا المجال.";
  } else {
    message = "قد لا يكون هذا المجال هو الأنسب لك، لكنك بالتأكيد مبدع في مجال آخر. استمر في البحث عن شغفك!";
  }

resultBox.style.animation = 'none'; // إعادة تعيين
resultBox.offsetHeight; // إجبار إعادة التهيئة
resultBox.style.animation = 'fadeInUp 0.8s ease-out forwards';


resultBox.style.display = "block";
resultBox.innerHTML = `<h3>درجتك: ${score} / ${currentQuestions.length}</h3><p>${message}</p>`;

}

function goToHome() {
  window.location.href = "../index.html";
}

function goToPlatform() {
  window.location.href = "../platform.html";
}
