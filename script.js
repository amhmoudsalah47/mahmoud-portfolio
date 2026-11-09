/**
 * MAHMOUD SALAH PERSONAL PORTFOLIO
 * Complete interactive script:
 * - Bilingual Language Switcher (Arabic RTL / English LTR) with LocalStorage
 * - Mobile Drawer Navigation
 * - Active Navigation Highlight on Scroll
 * - Interactive Direct Messaging Form (WhatsApp 1, WhatsApp 2, Email)
 * - Copy to Clipboard with Animated Toast Notification
 * - Smooth Scrolling & Accessibility Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. BILINGUAL TRANSLATION DICTIONARY (AR / EN)
  // =========================================================================
  const translations = {
    ar: {
      // Meta & Document
      page_title: "محمود صلاح | Mahmoud Salah Portfolio",
      meta_desc: "Portfolio محمود صلاح — طالب تكنولوجيا معلومات (IT) وصانع حلول رقمية، مهتم بالشبكات والمونتاج والتجارة الإلكترونية وتطوير المواقع والتطبيقات بالذكاء الاصطناعي.",

      // Navigation
      nav_home: "الرئيسية",
      nav_about: "نبذة عني",
      nav_skills: "المهارات",
      nav_experience: "الخبرات",
      nav_projects: "المشاريع",
      nav_future_projects: "مشاريع مستقبلية",
      nav_business_model: "نموذج العمل",
      nav_contact: "تواصل معي",

      // Hero Section
      hero_eyebrow: "IT STUDENT · CREATIVE BUILDER",
      hero_title: `ببني مهاراتي،<br /><span class="gradient-text">وبحوّل الأفكار لحلول.</span>`,
      hero_description: "أنا محمود صلاح، طالب في تكنولوجيا المعلومات مهتم بالشبكات والتقنية وصناعة المحتوى والتجارة الإلكترونية. أطور مهاراتي باستمرار وأبني المواقع والتطبيقات والحلول الرقمية بمساعدة أدوات الذكاء الاصطناعي.",
      hero_btn_projects: "استكشف مشاريعي",
      hero_btn_contact: "تواصل معي",
      hero_slogan: `"ببني مهاراتي، وبحوّل الأفكار لحلول."`,

      // Quick Info
      info_location: "مصر (Egypt)",
      info_education: "الفرقة الثانية – جامعة تكنولوجية",
      info_learning: "تعلم مستمر (Always Learning)",
      info_open: "متاح للتعلم والمشاريع",

      // Profile Card
      card_status: "OPEN TO LEARNING & PROJECTS",
      card_name: "Mahmoud Salah",
      card_specialization: "تكنولوجيا معلومات · شبكات · مهارات رقمية",
      tag_networking: "Networking",
      tag_editing: "Video Editing",
      tag_web: "Web Development",
      tag_app: "App Development",
      card_phrase_building: "BUILDING STEP BY STEP",
      badge_learn_build: "LEARN · BUILD · IMPROVE",
      badge_ai_assisted: "AI-ASSISTED DEVELOPMENT",

      // About Me
      about_eyebrow: "01 / ABOUT ME",
      about_title: "من هو محمود صلاح؟",
      about_subtitle: "طالب تكنولوجيا معلومات، شغوف بالتعلم العملي وبناء حلول رقمية ذات قيمة حقيقية.",
      about_p1: "أنا محمود صلاح، طالب في الجامعة التكنولوجية (Technology University) مهتم بالشبكات، التقنية، صناعة المحتوى، التجارة الإلكترونية، وتطوير المنتجات الرقمية. شغوف بتعلم المهارات التقنية وتحويل المعرفة النظرية إلى تطبيقات عملية ومشاريع على أرض الواقع.",
      about_p2: "أعمل على تطوير مهاراتي في مجال الشبكات، ولدي خبرة عملية في المونتاج واقتطاع البودكاست (Podcast Clipping). كما أهتم ببناء مواقع المتاجر الإلكترونية وتطبيقات الهاتف التي تساعد أصحاب الأنشطة التجارية على إدارة أعمالهم بكفاءة أعلى.",
      about_p3: "أعتمد على أدوات الذكاء الاصطناعي كمساعد في التعلم والتطوير وبناء المشاريع مع التركيز الكامل على فهم الكود ومراجعته وتطويره. هدفي بناء منتجات رقمية حقيقية ونافعة يمكن تقديمها للعملاء كخدمات وتطويرها مستقبلاً.",
      about_quote: "هدفي ليس مجرد تجربة أدوات جديدة أو حفظ أكواد؛ بل فهم الأساس التقني المتين واستخدامه لبناء مشاريع حقيقية تقدم قيمة ملموسة للناس وأصحاب الأعمال.",
      feat_practical_title: "تطبيق عملي مباشر",
      feat_practical_desc: "تحويل المعرفة النظرية إلى مختبرات شبكات حقيقية وتجارب تطبيقية بدون مبالغات.",
      feat_business_title: "حلول لأصحاب الأعمال",
      feat_business_desc: "التركيز على المتاجر وتطبيقات الكاشير (POS) ولوحات التحكم التي تسهل الإدارة المستقلة.",
      feat_ai_title: "تطوير مدعوم بالذكاء الاصطناعي",
      feat_ai_desc: "توظيف أدوات الـ AI لتسريع الإنجاز مع التدقيق والمراجعة الشاملة لجودة الكود وتصميمه.",

      // Skills & Learning Paths
      skills_eyebrow: "02 / SKILLS & LEARNING",
      skills_title: "المهارات ومسارات التعلم",
      skills_subtitle: "مقسمة بدقة بين خبرات عملية بدأت تطبيقها بالفعل، ومسارات تعلم مستمرة أعمل على تطويرها خطوة بخطوة.",
      
      skill_net_level: "PRACTICAL · BEGINNER",
      skill_net_title: "Networking (الشبكات)",
      skill_net_desc: "تطبيق أساسيات الشبكات عملياً ومحاكاتها باستخدام Cisco Packet Tracer.",
      skill_net_1: "إنشاء طوبولوجيا الشبكات (Network Topologies)",
      skill_net_2: "توصيل وإعداد أجهزة الراوتر والسويتش (Routers & Switches)",
      skill_net_3: "ربط أجهزة الكمبيوتر والأجهزة الشبكية المختلفة",
      skill_net_4: "إعداد وتوزيع عناوين IP Address",
      skill_net_5: "أساسيات تقسيم الشبكات (Basic Subnetting)",
      skill_net_6: "إعداد وتفعيل خادم DHCP Configuration",
      skill_net_7: "اختبار الاتصال واستقرار الشبكة بواسطة Ping",
      skill_net_8: "استكشاف وحل مشكلات الشبكة الأساسية (Troubleshooting)",

      skill_edit_level: "PRACTICAL EXPERIENCE",
      skill_edit_title: "Video Editing & Podcast Clipping",
      skill_edit_desc: "خبرة عملية في تحويل حلقات البودكاست والفيديوهات الطويلة إلى مقاطع قصيرة ممتعة وجذابة للمشاهدات.",
      skill_edit_1: "انتقاء اللحظات الأكثر إثارة وتأثيراً في البودكاست",
      skill_edit_2: "صياغة Hooks بصرية ونصوص تجذب انتباه المشاهد في الثواني الأولى",
      skill_edit_3: "مونتاج الفيديوهات وتحرير الصوت والصورة",
      skill_edit_4: "العمل الاحترافي ببرنامج CapCut Pro",
      skill_edit_5: "إنتاج YouTube Shorts بمقاسات وتنسيقات مناسبة",
      skill_edit_6: "صناعة المحتوى القصير (Short-form Content)",
      skill_edit_7: "تجهيز الكليبات للنشر عبر مختلف منصات التواصل الاجتماعي",

      skill_ecom_level: "EXPERIENCE & INTEREST",
      skill_ecom_title: "E-commerce (التجارة الإلكترونية)",
      skill_ecom_desc: "اهتمام عملي بتجربة المتاجر الرقمية، إدارة المنتجات، وفهم متطلبات العملاء وأصحاب المتاجر.",
      skill_ecom_1: "تجربة إدارة المتجر الإلكتروني على أرض الواقع",
      skill_ecom_2: "مفاهيم إدارة كتالوج المنتجات وتسعيرها",
      skill_ecom_3: "التعامل مع المنتجات والخدمات الرقمية",
      skill_ecom_4: "فهم احتياجات العملاء وسلوك الشراء عبر الإنترنت",
      skill_ecom_5: "أساسيات البيع عبر المنصات الرقمية (Online Selling)",
      skill_ecom_6: "التعرف على منصات التجارة الإلكترونية المختلفة واستخداماتها",

      skill_web_level: "LEARNING PATH",
      skill_web_title: "Web Development (تطوير المواقع)",
      skill_web_desc: "مسار تعلم يهدف لبناء مواقع تجارية متكاملة تلبي احتياجات حقيقية وتُباع كخدمات للعملاء.",
      skill_web_1: "بناء مواقع تجارية للأنشطة والمحلات (Business Websites)",
      skill_web_2: "إنشاء متاجر إلكترونية لمحلات الملابس والأحذية",
      skill_web_3: "إنشاء كتالوجات المنتجات التفاعلية (Product Catalogs)",
      skill_web_4: "بناء لوحات تحكم للإدارة (Admin Dashboards)",
      skill_web_5: "نظام إدارة المنتجات، الصور، والأسعار",
      skill_web_6: "إدارة ومتابعة طلبات العملاء (Order Management)",
      skill_web_7: "تصميم متجاوب بالكامل مع كافة الشاشات (Responsive Web Design)",
      skill_web_8: "التطوير بمساعدة الذكاء الاصطناعي مع فهم عميق للكود",

      skill_app_level: "LEARNING PATH",
      skill_app_title: "App Development (تطوير التطبيقات)",
      skill_app_desc: "مسار تعلم لتطوير تطبيقات جوال مخصصة لأداء وظائف محددة وحل مشاكل إدارة الأعمال اليومية.",
      skill_app_1: "تطبيقات الهواتف الذكية (Mobile Applications)",
      skill_app_2: "تطبيقات نقاط البيع والكاشير (POS Applications)",
      skill_app_3: "أنظمة الكاشير الميسرة للمتاجر الصغرى والمتوسطة",
      skill_app_4: "إدارة وتتبع المخزون والكميات (Inventory Management)",
      skill_app_5: "إدارة وتسجيل المبيعات اليومية والفواتير",
      skill_app_6: "تطوير تطبيقات مخصصة وفق رغبة العميل (Custom Apps)",
      skill_app_7: "تقديم حلول برمجية مخصصة لكل نشاط تجاري",

      skill_ai_level: "LEARNING APPROACH",
      skill_ai_title: "AI-Assisted Development",
      skill_ai_desc: "استخدام الذكاء الاصطناعي كمسرّع للإنجاز مع التركيز التام على استيعاب وفحص وتنقيح الأكواد.",
      skill_ai_1: "البرمجة بمساعدة الذكاء الاصطناعي (AI-Assisted Coding)",
      skill_ai_2: "فهم معماري للكود ومراجعته قبل التنفيذ (Code Understanding)",
      skill_ai_3: "اكتشاف وحل الأخطاء البرمجية (Debugging)",
      skill_ai_4: "تحسين أداء وتنظيم الكود (Code Optimization)",
      skill_ai_5: "التخطيط الهندسي للمشاريع وتحديد المتطلبات بدقة",
      skill_ai_6: "تحويل الأفكار إلى منتجات رقمية قابلة للاستخدام والتسويق",

      // Practical Experience
      exp_eyebrow: "03 / EXPERIENCE",
      exp_title: "الخبرات والتجارب العملية",
      exp_subtitle: "تجارب حقيقية قمت بها في مجالات صناعة المحتوى، شبكات الكمبيوتر، وإدارة المتاجر.",
      exp_tasks_title: "المسؤوليات والمهام:",

      exp1_tag: "CONTENT & VIDEO",
      exp1_status: "PRACTICAL EXPERIENCE",
      exp1_title: "Podcast Clipping – Whop",
      exp1_desc: "خبرة عملية في انتقاء اللحظات الأقوى من حلقات البودكاست وتحويلها إلى مقاطع فيديو قصيرة مصممة لزيادة التفاعل وجلب المشاهدات عبر منصات التواصل الاجتماعي.",
      exp1_t1: "اختيار المقاطع الأكثر أهمية وإثارة داخل الحلقات",
      exp1_t2: "تحديد المحتوى الجذاب وبناء Hook افتتاحي قوي في أول ثوانٍ",
      exp1_t3: "مونتاج الفيديوهات وتنسيقها باحترافية باستخدام برنامج CapCut Pro",
      exp1_t4: "تجهيز ومواءمة الفيديوهات للمنصات (Reels, TikTok, Shorts)",
      exp1_note: "تضمنت هذه التجربة العمل مع صانع المحتوى Ali Alhamed بنظام تعويض قائم على أداء ومعدلات المشاهدات.",
      exp1_btn: "عرض حساب الكليبات (@ali_alhamed_clips.45)",

      exp2_tag: "NETWORKING",
      exp2_status: "HANDS-ON PRACTICE",
      exp2_title: "Cisco Packet Tracer Labs",
      exp2_desc: "تطبيق المفاهيم الأساسية لشبكات الحاسب من خلال مختبرات وتمارين عملية حقيقية على برنامج محاكاة الشبكات Cisco Packet Tracer.",
      exp2_t1: "رسم وبناء هياكل شبكية متكاملة (Network Topologies)",
      exp2_t2: "توصيل وضبط إعدادات أجهزة الراوتر والسويتش والأجهزة الطرفية (PCs)",
      exp2_t3: "تهيئة وتخصيص عناوين IP Addresses لجميع مكونات الشبكة",
      exp2_t4: "تطبيق إعدادات بروتوكول توزيع العناوين التلقائي DHCP",
      exp2_t5: "اختبار كفاءة وسرعة الاتصال بين مختلف الأجهزة بواسطة أداة Ping",
      exp2_t6: "التدرب على اكتشاف الأعطال وحلها (Basic Network Troubleshooting)",

      exp3_tag: "E-COMMERCE",
      exp3_status: "STORE EXPERIENCE",
      exp3_title: "Dukan Online Store (متجر دكان)",
      exp3_desc: "تجربة مرتبطة بإدارة متجر إلكتروني منشور على منصة \"دكان\" المتخصصة في المتاجر الرقمية.",
      exp3_url_label: "رابط المتجر المباشر:",
      exp3_btn: "زيارة المتجر (Visit Store)",
      exp3_clarify: "* تم توثيق المتجر كرابط فعلي متاح، مع الالتزام بعدم إضافة أي بيانات غير مؤكدة حول طبيعة الدور تفادياً لأي مبالغة.",

      // Projects Showcase
      proj_eyebrow: "04 / PROJECTS",
      proj_title: "المشاريع والأعمال الحالية",
      proj_subtitle: "مشاريع تم بناؤها أو تجارب قائمة تمثل هويتي التقنية الحالية دون أي روابط وهمية.",
      
      p1_cat: "PERSONAL WEBSITE",
      p1_status: "CURRENT PROJECT",
      p1_title: "Mahmoud Salah Portfolio",
      p1_desc: "موقع ويب شخصي متكامل يمثل هويتي الرقمية، ويعرض مهاراتي التقنية، خبراتي العملية، مشروعاتي، وخططي المستقبلية مع دعم كامل للغتين العربية والإنجليزية.",
      p1_view: "استعراض الموقع الحالي",

      p2_cat: "E-COMMERCE",
      p2_status: "EXISTING EXPERIENCE",
      p2_title: "Dukan Online Store",
      p2_desc: "متجر إلكتروني قائم ومستضاف عبر منصة \"دكان\" لتقديم المنتجات والخدمات عبر واجهة تسوق إلكترونية.",
      p2_view: "زيارة المتجر (Visit Store)",

      p3_cat: "NETWORKING",
      p3_status: "PRACTICAL LEARNING",
      p3_title: "Cisco Packet Tracer Labs",
      p3_desc: "مجموعة من التمارين العملية لبناء طوبولوجيا الشبكات، ربط الراوترات بالسويتشات، وضبط بروتوكولات العناوين واختبار الاتصال واستكشاف الأخطاء.",
      p3_view: "استعراض تفاصيل المهارات",

      p4_cat: "CONTENT CREATION",
      p4_status: "PRACTICAL EXPERIENCE",
      p4_title: "Podcast Clipping",
      p4_desc: "تحويل حلقات البودكاست الطويلة إلى مقاطع قصيرة عالية الجاذبية والتأثير والمشاهدات باستخدام برنامج CapCut Pro مع إعداد Hooks مميزة.",
      p4_view: "مشاهدة حساب المقاطع",

      // Future Projects
      future_eyebrow: "05 / FUTURE PROJECTS",
      future_title: "مشاريع مستقبلية قيد التخطيط والتطوير",
      future_subtitle: "هذا القسم يوضح اتجاهي المستقبلي في بناء وتقديم منتجات رقمية قابلة للاستخدام والبيع لأصحاب الأنشطة التجارية. (مشاريع مخطط لها وليست منتجات نهائية مكتملة).",
      future_badge_planned: "PLANNED PRODUCT · قيد التخطيط",
      future_badge_dev: "IN DEVELOPMENT · قيد التطوير",
      idea_label: "فكرة المشروع:",
      concept_label: "المفهوم الأساسي للمنتج:",
      features_label: "المميزات المخطط لها:",
      workflow_title: "مراحل وخطوات العمل مع العميل:",

      fp1_title: "E-commerce Website Builder (متاجر جاهزة للمحلات)",
      fp1_idea: "بناء مواقع وتطبيقات تجارية مخصصة لأصحاب المحلات والأنشطة الصغيرة، مثل: متاجر الملابس، متاجر الأحذية، متاجر الإكسسوارات، والأنشطة التجارية المحلية.",
      fp1_concept: "أقوم ببناء الموقع وبرمجته بالكامل، بينما يحصل صاحب المتجر على لوحة تحكم إدارية سهلة (Admin Dashboard) تمكنه بشكل مستقل من إضافة وتعديل وحذف المنتجات وتغيير الصور والأسعار ومتابعة الطلبات بنفسه دون الحاجة للرجوع إليّ في كل تعديل.",
      fp1_f1: "متجر إلكتروني مخصص ومجهز بهوية العميل",
      fp1_f2: "إدارة شاملة للمنتجات وتصنيفاتها",
      fp1_f3: "رفع وإدارة صور المنتجات بسهولة",
      fp1_f4: "إدارة الأسعار والعروض والتخفيضات",
      fp1_f5: "لوحة متابعة وإدارة الطلبات الواردة",
      fp1_f6: "لوحة تحكم إدارية بسيطة باللغة العربية",
      fp1_f7: "تصميم متجاوب وسريع جداً على شاشات الهواتف",
      fp1_f8: "سهولة الإدارة المباشرة من الموبايل لصاحب المحل",

      fp2_title: "POS & Cashier Application (تطبيق كاشير ونقاط بيع)",
      fp2_idea: "تطوير تطبيق نقاط بيع (POS) ونظام كاشير وإدارة مخازن مخصص للمحلات ومتاجر التجزئة لتسهيل المعاملات وسرعة المحاسبة.",
      fp2_concept: "توفير نظام سريع وموثوق يحل مشكلة تسجيل الحسابات الورقية المعقدة، ويمنح صاحب النشاط إمكانية متابعة المبيعات والأرباح والمخزون في الوقت الفعلي من خلال واجهة بسيطة وعملية.",
      fp2_f1: "تسجيل عمليات البيع وطباعة الفواتير بسرعة",
      fp2_f2: "إضافة المنتجات وتعديل الأسعار في ثوانٍ",
      fp2_f3: "حساب إجمالي الفواتير والمتبقي تلقائياً",
      fp2_f4: "إدارة المخزون والتنبيه عند نقص الكميات",
      fp2_f5: "تقارير مبيعات يومية وشهرية دقيقة",
      fp2_f6: "واجهة مستخدم عصرية وسهلة الاستخدام لعمال الكاشير",
      fp2_f7: "إمكانية تخصيص المزايا وفقاً لنشاط كل متجر بعينه",

      fp3_title: "Custom Mobile Applications (تطبيقات موبايل مخصصة)",
      fp3_idea: "تطوير تطبيقات هواتف ذكية مخصصة بالكامل وفق متطلبات العملاء لتنفيذ وظائف محددة وحل مشاكل إدارة الأعمال، مثل: تطبيقات تنظيم المهام، تطبيقات الخدمات، وتطبيقات إدارة المنتجات.",
      wf_s1: "عرض الفكرة: يطرح العميل فكرته واحتياجات مشروعه.",
      wf_s2: "تحديد المتطلبات: حصر الميزات الفنية والوظائف بدقة.",
      wf_s3: "تصميم الواجهات: تصميم واجهة مستخدم (UI/UX) مريحة.",
      wf_s4: "التطوير والبرمجة: كتابة الكود وبناء النظام بالكامل.",
      wf_s5: "الاختبار: فحص التطبيق والتأكد من خلوه من الأخطاء.",
      wf_s6: "التسليم والدعم: تسليم التطبيق للعميل وتقديم الصيانة والتحديثات حسب الاتفاق.",

      // Business Model
      biz_eyebrow: "06 / BUSINESS MODEL",
      biz_title: "نموذج العمل والخدمات",
      biz_subtitle: "هدفي تقديم منتجات رقمية وحلول تقنية حقيقية للعملاء كخدمات مدفوعة بنموذج واضح وعادل يضمن استقلالية العميل واستمرار دعمه.",
      biz_services_title: "الخدمات الإضافية المتاحة:",

      biz_web_title: "نموذج عمل المواقع الإلكترونية",
      biz_web_desc: "يدفع العميل مقابل تطوير وبرمجة الموقع. وبعد التسليم، يستطيع إدارة منتجاته بنفسه من خلال لوحة تحكم إدارية مستقلة.",
      biz_w_s1: "صيانة دورية شهرية للموقع",
      biz_w_s2: "تحديثات مستمرة وتطوير أداء",
      biz_w_s3: "إضافة مميزات وصفحات جديدة حسب الطلب",
      biz_w_s4: "دعم فني واستشارات تقنية مباشرة",

      biz_app_title: "نموذج عمل تطبيقات الموبايل",
      biz_app_desc: "يدفع العميل مقابل تطوير وبرمجة التطبيق ويحصل على الملكية أو حقوق الاستخدام الكاملة وفقاً للاتفاق المبرم.",
      biz_a_s1: "صيانة شهرية منتظمة للتطبيق",
      biz_a_s2: "دعم فني وحل أي مشكلات تشغيلية",
      biz_a_s3: "تحديثات التطبيق وإصدار نسخ أحدث",
      biz_a_s4: "تطوير ميزات مخصصة إضافية",

      biz_sys_tag: "FUTURE DEVELOPMENT PLAN · خطة تطوير مستقبلية",
      biz_sys_title: "نظام إشعارات التحديثات للعملاء (Updates Notification System)",
      biz_sys_desc: `إحدى أفكاري المستقبلية المستهدفة هي تطوير نظام إشعارات ذكي يُعلم العملاء وأصحاب المتاجر عند توفر تحديثات أو ميزات برمجية جديدة لمواقعهم وتطبيقاتهم؛ مما يتيح للعميل استعراض التحديث وطلب تنفيذه بضغطة زر عند حاجته.<br /><small>* هذا النظام يمثل رؤية مستقبلية ضمن خطط التطوير القادمة ولا يُعرض كميزة حالية قائمة.</small>`,
      biz_sys_note: "* هذا النظام يمثل رؤية مستقبلية ضمن خطط التطوير القادمة ولا يُعرض كميزة حالية قائمة.",

      // Contact Section
      contact_eyebrow: "07 / CONTACT",
      contact_title: `عندك فكرة أو مشروع؟<br /><span class="gradient-text">خلينا نتكلم ونحولها لحقيقة.</span>`,
      contact_subtitle: "أنا دائماً مهتم بالتواصل بخصوص فرص التعلم، التعاون المثمر، المشاريع الرقمية، وتطوير مواقع الويب وتطبيقات الهواتف.",
      
      lbl_email: "EMAIL ADDRESS",
      btn_send_email: "إرسال إيميل ↗",
      btn_copy: "نسخ",
      lbl_wa1: "WHATSAPP (رقم 1)",
      lbl_wa2: "WHATSAPP (رقم 2)",
      btn_open_wa: "محادثة واتساب ↗",
      lbl_fb: "FACEBOOK",
      btn_visit_profile: "زيارة الصفحة ↗",
      lbl_ig_personal: "INSTAGRAM (الحساب الشخصي)",
      lbl_ig_podcast: "INSTAGRAM (أعمال اقتطاع البودكاست)",

      // Form
      form_heading: "أرسل رسالتك مباشرة",
      form_sub: "اكتب رسالتك واختر وسيلة الإرسال المباشرة (واتساب أو إيميل). ستفتح رسالتك جاهزة للإرسال فوراً وبشكل حقيقي 100%.",
      lbl_form_name: "اسمك الكريم:",
      ph_form_name: "أدخل اسمك",
      lbl_form_email: "بريدك الإلكتروني أو هاتفك:",
      ph_form_email: "example@email.com أو رقم هاتفك",
      lbl_form_msg: "رسالتك أو تفاصيل مشروعك:",
      ph_form_msg: "اكتب فكرتك أو استفسارك هنا...",
      lbl_form_destination: "طريقة الإرسال المفضلة:",
      opt_wa1: "واتساب (01145690507)",
      opt_wa2: "واتساب (01070619939)",
      opt_email: "الإيميل الرسمي",
      btn_submit_msg: "بدء الإرسال المباشر",
      form_guarantee: "🔒 يتم توجيه رسالتك مباشرة عبر التطبيق المعتمد دون أي تزييف أو ادعاء إرسال وهمي.",

      // Social Section
      social_eyebrow: "08 / SOCIAL PROFILES",
      social_title: "حساباتي على منصات التواصل",
      social_subtitle: "تواصل معي أو تابع أعمالي ومحتواي على مختلف المنصات.",
      social_ig_personal_label: "Instagram (Personal)",
      social_ig_clips_label: "Podcast Clipping Work",

      // Footer
      footer_title: "Mahmoud Salah · IT Student · Creative Builder",
      footer_slogan: `"Building skills, turning ideas into solutions."`,
      footer_quick_links: "روابط سريعة",
      footer_contact_title: "بيانات التواصل",
      footer_copy: "Copyright © 2026 Mahmoud Salah. All Rights Reserved.",
      btn_top: "العودة للأعلى",

      // Toasts
      toast_copied: "تم النسخ إلى الحافظة بنجاح!",
      toast_opening_wa: "جارٍ فتح تطبيق واتساب لإرسال رسالتك...",
      toast_opening_email: "جارٍ فتح تطبيق البريد لإرسال رسالتك...",
      toast_fill_fields: "يرجى ملء جميع الحقول المطلوبة للمتابعة."
    },

    en: {
      // Meta & Document
      page_title: "Mahmoud Salah | Portfolio",
      meta_desc: "Mahmoud Salah Portfolio — IT Student & Creative Builder, focused on Networking, Video Editing, E-commerce, and AI-assisted Web & App Development.",

      // Navigation
      nav_home: "Home",
      nav_about: "About Me",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_future_projects: "Future Projects",
      nav_business_model: "Business Model",
      nav_contact: "Contact Me",

      // Hero Section
      hero_eyebrow: "IT STUDENT · CREATIVE BUILDER",
      hero_title: `Building skills,<br /><span class="gradient-text">turning ideas into solutions.</span>`,
      hero_description: "I am Mahmoud Salah, an Information Technology student interested in networking, technology, content creation, and e-commerce. I am continuously developing my skills and building websites, applications, and digital solutions with the assistance of AI tools.",
      hero_btn_projects: "Explore My Projects",
      hero_btn_contact: "Contact Me",
      hero_slogan: `"Building skills, turning ideas into solutions."`,

      // Quick Info
      info_location: "Egypt",
      info_education: "Year 2 – Technology University",
      info_learning: "Always Learning",
      info_open: "Open to Learning & Projects",

      // Profile Card
      card_status: "OPEN TO LEARNING & PROJECTS",
      card_name: "Mahmoud Salah",
      card_specialization: "IT · Networking · Digital Skills",
      tag_networking: "Networking",
      tag_editing: "Video Editing",
      tag_web: "Web Development",
      tag_app: "App Development",
      card_phrase_building: "BUILDING STEP BY STEP",
      badge_learn_build: "LEARN · BUILD · IMPROVE",
      badge_ai_assisted: "AI-ASSISTED DEVELOPMENT",

      // About Me
      about_eyebrow: "01 / ABOUT ME",
      about_title: "About Mahmoud Salah",
      about_subtitle: "Information Technology student dedicated to practical learning and creating high-impact digital solutions.",
      about_p1: "I am Mahmoud Salah, a Technology University student interested in networking, technology, content creation, e-commerce, and digital product development. I enjoy learning technical skills and turning theoretical knowledge into practical applications and real-world projects.",
      about_p2: "I am developing my skills in Networking and have practical experience in Video Editing and Podcast Clipping. I am also interested in building e-commerce websites and mobile applications that help business owners manage their businesses more efficiently.",
      about_p3: "I use Artificial Intelligence tools as assistants for learning, development, and building projects while focusing on understanding, reviewing, and improving the code. My goal is to build useful digital products that can be offered to clients, sold as services, and developed further in the future.",
      about_quote: "My goal is not simply to learn new tools or memorize code snippets; it is to master the technical foundation and build real projects that deliver measurable value to clients and business owners.",
      feat_practical_title: "Direct Hands-on Practice",
      feat_practical_desc: "Translating theoretical concepts into real networking labs and practical projects without exaggeration.",
      feat_business_title: "Business-Centric Solutions",
      feat_business_desc: "Focusing on retail stores, POS cashiers, and admin dashboards that enable independent client management.",
      feat_ai_title: "AI-Accelerated Engineering",
      feat_ai_desc: "Leveraging AI to accelerate workflows while maintaining complete code comprehension and quality review.",

      // Skills & Learning Paths
      skills_eyebrow: "02 / SKILLS & LEARNING",
      skills_title: "Skills & Learning Paths",
      skills_subtitle: "Accurately divided between hands-on practical experience and evolving learning paths being built step by step.",

      skill_net_level: "PRACTICAL · BEGINNER",
      skill_net_title: "Networking",
      skill_net_desc: "Applying networking fundamentals through hands-on simulation using Cisco Packet Tracer.",
      skill_net_1: "Creating Network Topologies",
      skill_net_2: "Connecting and configuring Routers and Switches",
      skill_net_3: "Connecting PCs and various network devices",
      skill_net_4: "IP Address configuration and distribution",
      skill_net_5: "Basic Subnetting concepts",
      skill_net_6: "DHCP Server configuration",
      skill_net_7: "Ping and Connectivity Testing",
      skill_net_8: "Basic Network Troubleshooting",

      skill_edit_level: "PRACTICAL EXPERIENCE",
      skill_edit_title: "Video Editing & Podcast Clipping",
      skill_edit_desc: "Hands-on experience transforming long-form podcast episodes into engaging short-form content that drives views.",
      skill_edit_1: "Selecting interesting and impactful podcast moments",
      skill_edit_2: "Creating engaging hooks to capture viewer attention in the first seconds",
      skill_edit_3: "Video editing, audio enhancements, and pacing",
      skill_edit_4: "Professional video editing using CapCut Pro",
      skill_edit_5: "Creating properly formatted YouTube Shorts",
      skill_edit_6: "Producing viral short-form content",
      skill_edit_7: "Preparing clips optimized for diverse social media platforms",

      skill_ecom_level: "EXPERIENCE & INTEREST",
      skill_ecom_title: "E-commerce",
      skill_ecom_desc: "Practical interest in digital storefront operations, product catalog management, and understanding merchant needs.",
      skill_ecom_1: "Real-world online store management experience",
      skill_ecom_2: "Product catalog and pricing management concepts",
      skill_ecom_3: "Handling digital products and online services",
      skill_ecom_4: "Understanding consumer behavior and online buying needs",
      skill_ecom_5: "Online selling principles across digital platforms",
      skill_ecom_6: "Exploring modern e-commerce platforms and architectures",

      skill_web_level: "LEARNING PATH",
      skill_web_title: "Web Development",
      skill_web_desc: "Learning path focused on building commercial websites designed for real clients and small businesses.",
      skill_web_1: "Building commercial business websites",
      skill_web_2: "Creating online stores for clothing and shoe retailers",
      skill_web_3: "Developing interactive product catalogs",
      skill_web_4: "Building custom Admin Dashboards",
      skill_web_5: "Product, image, and price management systems",
      skill_web_6: "Order management and customer tracking",
      skill_web_7: "Fully responsive web design across all devices",
      skill_web_8: "AI-assisted development with in-depth code comprehension",

      skill_app_level: "LEARNING PATH",
      skill_app_title: "App Development",
      skill_app_desc: "Learning path aimed at developing customized mobile apps that perform specific workflows and solve operational pain points.",
      skill_app_1: "Custom Mobile Applications",
      skill_app_2: "Point of Sale (POS) applications",
      skill_app_3: "Streamlined cashier systems for retail stores",
      skill_app_4: "Inventory tracking and stock management",
      skill_app_5: "Recording daily transactions and sales reports",
      skill_app_6: "Tailored custom apps built for specific client needs",
      skill_app_7: "Delivering client-specific technical solutions",

      skill_ai_level: "LEARNING APPROACH",
      skill_ai_title: "AI-Assisted Development",
      skill_ai_desc: "Using Artificial Intelligence to accelerate project delivery while strictly focusing on understanding and optimizing code.",
      skill_ai_1: "AI-assisted coding and scaffolding",
      skill_ai_2: "Architectural code understanding and review",
      skill_ai_3: "Debugging and troubleshooting errors",
      skill_ai_4: "Code optimization and refactoring",
      skill_ai_5: "Project planning and technical specification",
      skill_ai_6: "Transforming ideas into marketable digital products",

      // Practical Experience
      exp_eyebrow: "03 / EXPERIENCE",
      exp_title: "Practical Experience",
      exp_subtitle: "Real-world engagements in content creation, computer networking, and digital store management.",
      exp_tasks_title: "Responsibilities & Tasks:",

      exp1_tag: "CONTENT & VIDEO",
      exp1_status: "PRACTICAL EXPERIENCE",
      exp1_title: "Podcast Clipping – Whop",
      exp1_desc: "Experience selecting the best moments from podcast episodes and transforming them into short videos designed to maximize viewer engagement and reach.",
      exp1_t1: "Selecting high-impact moments from podcast episodes",
      exp1_t2: "Identifying captivating content and crafting strong opening hooks",
      exp1_t3: "Editing and polishing videos using CapCut Pro",
      exp1_t4: "Optimizing clips for social platforms (Reels, TikTok, Shorts)",
      exp1_note: "This experience included collaborating with content creator Ali Alhamed, with compensation based on view performance.",
      exp1_btn: "View Clips Account (@ali_alhamed_clips.45)",

      exp2_tag: "NETWORKING",
      exp2_status: "HANDS-ON PRACTICE",
      exp2_title: "Cisco Packet Tracer Labs",
      exp2_desc: "Hands-on application of core networking fundamentals through simulated network topologies in Cisco Packet Tracer.",
      exp2_t1: "Designing and building complete Network Topologies",
      exp2_t2: "Connecting and configuring Routers, Switches, and End Devices (PCs)",
      exp2_t3: "Assigning and configuring IP Addresses across network devices",
      exp2_t4: "Configuring DHCP services for automatic IP allocation",
      exp2_t5: "Testing connectivity and network stability with Ping",
      exp2_t6: "Troubleshooting common network connectivity issues",

      exp3_tag: "E-COMMERCE",
      exp3_status: "STORE EXPERIENCE",
      exp3_title: "Dukan Online Store",
      exp3_desc: "Practical experience related to managing an online store hosted on the Dukan e-commerce platform.",
      exp3_url_label: "Direct Store URL:",
      exp3_btn: "Visit Store",
      exp3_clarify: "* The store is documented with its real link; no unverified claims or exaggerations have been added regarding the role.",

      // Projects Showcase
      proj_eyebrow: "04 / PROJECTS",
      proj_title: "Current Projects & Work",
      proj_subtitle: "Active projects and real initiatives representing my digital identity without any fabricated links.",

      p1_cat: "PERSONAL WEBSITE",
      p1_status: "CURRENT PROJECT",
      p1_title: "Mahmoud Salah Portfolio",
      p1_desc: "A comprehensive personal portfolio website showcasing my digital identity, technical skills, practical experience, projects, and future plans with full Arabic and English support.",
      p1_view: "Explore Current Site",

      p2_cat: "E-COMMERCE",
      p2_status: "EXISTING EXPERIENCE",
      p2_title: "Dukan Online Store",
      p2_desc: "An active digital storefront hosted on the Dukan platform providing products and services via an intuitive web interface.",
      p2_view: "Visit Store",

      p3_cat: "NETWORKING",
      p3_status: "PRACTICAL LEARNING",
      p3_title: "Cisco Packet Tracer Labs",
      p3_desc: "A series of hands-on networking labs covering topology creation, router/switch configurations, IP addressing, and connectivity troubleshooting.",
      p3_view: "Explore Skill Details",

      p4_cat: "CONTENT CREATION",
      p4_status: "PRACTICAL EXPERIENCE",
      p4_title: "Podcast Clipping",
      p4_desc: "Transforming long podcast episodes into engaging short-form videos with strong hooks and high retention using CapCut Pro.",
      p4_view: "View Clips Profile",

      // Future Projects
      future_eyebrow: "05 / FUTURE PROJECTS",
      future_title: "Upcoming Projects & Product Direction",
      future_subtitle: "This section illustrates my planned product direction for building commercial digital solutions for business owners. (Clearly marked as Planned or In Development).",
      future_badge_planned: "PLANNED PRODUCT",
      future_badge_dev: "IN DEVELOPMENT",
      idea_label: "Project Idea:",
      concept_label: "Core Product Concept:",
      features_label: "Planned Features:",
      workflow_title: "Client Engagement & Development Workflow:",

      fp1_title: "E-commerce Website Builder",
      fp1_idea: "Building tailored commercial websites for small businesses and retail shops, such as clothing boutiques, shoe stores, and accessory shops.",
      fp1_concept: "I engineer the website and core architecture once, and provide the business owner with an intuitive Admin Dashboard to independently add, edit, and delete products, images, and prices without needing to call me for routine changes.",
      fp1_f1: "Customized storefront styled with client branding",
      fp1_f2: "Comprehensive product & catalog management",
      fp1_f3: "Easy product image uploading and gallery management",
      fp1_f4: "Price, discounts, and promotion management",
      fp1_f5: "Incoming order tracking dashboard",
      fp1_f6: "Simple, user-friendly admin interface",
      fp1_f7: "Ultra-responsive mobile-optimized shopping experience",
      fp1_f8: "Effortless store management directly from a smartphone",

      fp2_title: "POS & Cashier Application",
      fp2_idea: "Developing a Point of Sale (POS), cashier, and inventory management application tailored for retail shops and grocery merchants.",
      fp2_concept: "Eliminating cumbersome paper bookkeeping with a swift, reliable digital register that gives store owners real-time visibility into sales, profits, and stock levels through a clean interface.",
      fp2_f1: "Fast sales transaction logging and receipt generation",
      fp2_f2: "Quick item additions and price modifications",
      fp2_f3: "Automated invoice totaling and change calculation",
      fp2_f4: "Inventory tracking with low-stock alerts",
      fp2_f5: "Detailed daily and monthly sales summaries",
      fp2_f6: "Modern, easy-to-use interface for cashier staff",
      fp2_f7: "Customized feature sets aligned with each shop's workflow",

      fp3_title: "Custom Mobile Applications",
      fp3_idea: "Developing bespoke mobile applications according to clients' exact specifications to solve operational bottlenecks, such as task management, on-demand services, and product catalogs.",
      wf_s1: "Idea Presentation: The client shares the initial concept and core objectives.",
      wf_s2: "Requirement Definition: Specifying technical requirements and features.",
      wf_s3: "UI/UX Design: Crafting an intuitive and visually pleasing user interface.",
      wf_s4: "Development & Coding: Writing clean code and assembling the application.",
      wf_s5: "Testing: Comprehensive testing to ensure zero functional defects.",
      wf_s6: "Delivery & Support: Handover to the client with ongoing maintenance per agreement.",

      // Business Model
      biz_eyebrow: "06 / BUSINESS MODEL",
      biz_title: "Service & Business Model",
      biz_subtitle: "My objective is delivering tangible digital products and software services to clients under transparent, mutually beneficial terms.",
      biz_services_title: "Available Supplementary Services:",

      biz_web_title: "Website Business Model",
      biz_web_desc: "The client pays for website engineering and deployment. Post-delivery, the client manages their own catalog through an independent admin panel.",
      biz_w_s1: "Monthly scheduled maintenance",
      biz_w_s2: "Continuous performance and security updates",
      biz_w_s3: "Adding custom pages and features on demand",
      biz_w_s4: "Direct technical support and guidance",

      biz_app_title: "Mobile App Business Model",
      biz_app_desc: "The client pays for custom application development and retains full ownership or usage rights according to the agreement.",
      biz_a_s1: "Regular monthly app maintenance",
      biz_a_s2: "Prompt technical troubleshooting",
      biz_a_s3: "Periodic feature releases and OS upgrades",
      biz_a_s4: "Bespoke custom feature extensions",

      biz_sys_tag: "FUTURE DEVELOPMENT PLAN",
      biz_sys_title: "Client Updates Notification System",
      biz_sys_desc: `One of my planned innovations is building an intelligent update notification system that informs clients when new features or optimizations become available for their deployed apps and websites, allowing them to review and request rollout with a single click.<br /><small>* This represents a future development milestone and is not presented as an active feature.</small>`,
      biz_sys_note: "* This represents a future development milestone and is not presented as an active feature.",

      // Contact Section
      contact_eyebrow: "07 / CONTACT",
      contact_title: `Have an idea or a project?<br /><span class="gradient-text">Let's talk and make it happen.</span>`,
      contact_subtitle: "I am always excited to connect regarding learning opportunities, collaborations, digital products, and web/mobile development.",

      lbl_email: "EMAIL ADDRESS",
      btn_send_email: "Send Email ↗",
      btn_copy: "Copy",
      lbl_wa1: "WHATSAPP (Line 1)",
      lbl_wa2: "WHATSAPP (Line 2)",
      btn_open_wa: "Chat on WhatsApp ↗",
      lbl_fb: "FACEBOOK",
      btn_visit_profile: "Visit Profile ↗",
      lbl_ig_personal: "INSTAGRAM (Personal)",
      lbl_ig_podcast: "INSTAGRAM (Podcast Clips)",

      // Form
      form_heading: "Send a Direct Message",
      form_sub: "Draft your message and choose your preferred dispatch method (WhatsApp or Email). It opens directly in the real app ready to send.",
      lbl_form_name: "Your Name:",
      ph_form_name: "Enter your full name",
      lbl_form_email: "Your Email or Phone:",
      ph_form_email: "name@example.com or phone number",
      lbl_form_msg: "Your Message or Project Details:",
      ph_form_msg: "Describe your project or inquiry here...",
      lbl_form_destination: "Preferred Dispatch Method:",
      opt_wa1: "WhatsApp (01145690507)",
      opt_wa2: "WhatsApp (01070619939)",
      opt_email: "Official Email",
      btn_submit_msg: "Send Real Message Now",
      form_guarantee: "🔒 Your message is forwarded directly through verified official channels without fake submission handlers.",

      // Social Section
      social_eyebrow: "08 / SOCIAL PROFILES",
      social_title: "Connect on Social Media",
      social_subtitle: "Follow my content or reach out directly on any preferred network.",
      social_ig_personal_label: "Instagram (Personal)",
      social_ig_clips_label: "Podcast Clipping Work",

      // Footer
      footer_title: "Mahmoud Salah · IT Student · Creative Builder",
      footer_slogan: `"Building skills, turning ideas into solutions."`,
      footer_quick_links: "Quick Navigation",
      footer_contact_title: "Contact Info",
      footer_copy: "Copyright © 2026 Mahmoud Salah. All Rights Reserved.",
      btn_top: "Back to top",

      // Toasts
      toast_copied: "Copied to clipboard successfully!",
      toast_opening_wa: "Opening WhatsApp to send your message...",
      toast_opening_email: "Opening your email app to send your message...",
      toast_fill_fields: "Please fill in all required fields before proceeding."
    }
  };

  // =========================================================================
  // 2. LANGUAGE SWITCHER IMPLEMENTATION
  // =========================================================================
  const langToggleBtn = document.getElementById('lang-toggle');
  const pageTitleEl = document.getElementById('page-title');
  const metaDescEl = document.getElementById('meta-description');
  const ogTitleEl = document.getElementById('og-title');
  const ogDescEl = document.getElementById('og-description');
  const profileImg = document.getElementById('profile-img');

  const STORAGE_KEY = 'mahmoud_portfolio_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'ar';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'ar';
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update HTML root attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Update document title & metadata
    if (pageTitleEl) pageTitleEl.textContent = translations[lang].page_title;
    if (metaDescEl) metaDescEl.setAttribute('content', translations[lang].meta_desc);
    if (ogTitleEl) ogTitleEl.setAttribute('content', translations[lang].page_title);
    if (ogDescEl) ogDescEl.setAttribute('content', translations[lang].meta_desc);

    // Profile photo alt
    if (profileImg) {
      profileImg.alt = (lang === 'ar') 
        ? "محمود صلاح - طالب تكنولوجيا معلومات وصانع حلول رقمية" 
        : "Mahmoud Salah - IT Student & Creative Builder";
    }

    // Update all elements with data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        // If string contains HTML (e.g. <br>, <span>), use innerHTML
        if (translations[lang][key].includes('<')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');

    if (nameInput) nameInput.placeholder = translations[lang].ph_form_name;
    if (emailInput) emailInput.placeholder = translations[lang].ph_form_email;
    if (msgInput) msgInput.placeholder = translations[lang].ph_form_msg;
  }

  // Toggle Language Click
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'ar') ? 'en' : 'ar';
      applyLanguage(nextLang);
    });
  }

  // Initial language application
  applyLanguage(currentLang);

  // =========================================================================
  // 3. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerItems = document.querySelectorAll('.drawer-item');

  function openDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerItems.forEach(item => {
    item.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close drawer on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-item');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // =========================================================================
  // 5. TOAST NOTIFICATION COMPONENT
  // =========================================================================
  const toast = document.getElementById('toast');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    if (toastTimeout) clearTimeout(toastTimeout);

    toast.textContent = message;
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 6. COPY TO CLIPBOARD BUTTONS
  // =========================================================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(translations[currentLang].toast_copied);
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(translations[currentLang].toast_copied);
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
    document.body.removeChild(tempInput);
  }

  // =========================================================================
  // 7. DIRECT CONTACT FORM HANDLER (100% REAL DISPATCH)
  // =========================================================================
  const contactForm = document.getElementById('direct-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('form-name')?.value.trim();
      const emailVal = document.getElementById('form-email')?.value.trim();
      const msgVal = document.getElementById('form-message')?.value.trim();
      const destEl = document.querySelector('input[name="send-dest"]:checked');
      const destVal = destEl ? destEl.value : 'wa1';

      if (!nameVal || !emailVal || !msgVal) {
        showToast(translations[currentLang].toast_fill_fields);
        return;
      }

      // Format payload text
      const fullText = (currentLang === 'ar')
        ? `مرحباً محمود صلاح،\n\nأنا: ${nameVal}\nالبريد/الهاتف: ${emailVal}\n\nالرسالة:\n${msgVal}\n\n(تم الإرسال عبر الموقع الشخصي)`
        : `Hello Mahmoud Salah,\n\nName: ${nameVal}\nEmail/Phone: ${emailVal}\n\nMessage:\n${msgVal}\n\n(Sent via your Portfolio Website)`;

      if (destVal === 'wa1') {
        showToast(translations[currentLang].toast_opening_wa);
        const encoded = encodeURIComponent(fullText);
        const waUrl = `https://wa.me/201145690507?text=${encoded}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } else if (destVal === 'wa2') {
        showToast(translations[currentLang].toast_opening_wa);
        const encoded = encodeURIComponent(fullText);
        const waUrl = `https://wa.me/201070619939?text=${encoded}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } else if (destVal === 'email') {
        showToast(translations[currentLang].toast_opening_email);
        const subject = encodeURIComponent(
          (currentLang === 'ar') 
            ? `رسالة جديدة من الموقع: ${nameVal}` 
            : `New Portfolio Message from: ${nameVal}`
        );
        const body = encodeURIComponent(fullText);
        const mailtoUrl = `mailto:amhmoudsalah47@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
      }
    });
  }

  // =========================================================================
  // 8. BACK TO TOP SMOOTH SCROLL
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
