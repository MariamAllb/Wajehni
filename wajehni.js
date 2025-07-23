// إظهار اسم الطالب بعد تسجيل الدخول
document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('studentName'); // تأكد أن الاسم محفوظ بهذا المفتاح
  const nameSpan = document.getElementById('studentNameInline');
  if (name && nameSpan) {
    nameSpan.textContent = `، ${name}`;
  }
});
const specializationInfo = {
  "medicine": {
    title: "الطب",
    content: "الطب هو مجال يهتم بصحة الإنسان وتشخيص وعلاج الأمراض. يتطلب مهارات تحليلية وإنسانية قوية.",
    videoPage: "forWajehni/medicineForWajehni.html"
  },
  "engineering": {
    title: "الهندسة",
    content: "الهندسة تشمل تصميم وتطوير الحلول التقنية، وتشمل فروع مثل الهندسة المدنية، الكهربائية، والميكانيكية.",
    videoPage: "forWajehni/engineeringForWajehni.html"
  },
  "computer-science": {
    title: "الحاسب الآلي",
    content: "مجال الحاسب الآلي يركز على البرمجة، تحليل البيانات، الأمن السيبراني، وتطوير البرمجيات.",
    videoPage: "forWajehni/computerScienceForWajehni.html"
  },
  "science": {
    title: "العلمي",
    content: "المسار العلمي يشمل الفيزياء والكيمياء والأحياء، ويؤهل الطلاب للتخصصات الصحية والهندسية.",
    videoPage: "forWajehni/scienceForWajehni.html"
  },
  "literature": {
    title: "الأدبي",
    content: "يشمل المسار الأدبي تخصصات اللغة العربية، التاريخ، الجغرافيا، والعلوم الاجتماعية.",
    videoPage: "forWajehni/literatureForWajehni.html"
  },
  "education": {
    title: "التربوي",
    content: "يركز على إعداد المعلمين والموجهين، ويهتم بأساليب التدريس والإرشاد الأكاديمي.",
    videoPage: "forWajehni/educationForWajehni.html"
  },
  "business": {
    title: "إدارة الأعمال",
    content: "يتناول هذا التخصص مفاهيم الإدارة، التسويق، المحاسبة، وريادة الأعمال.",
    videoPage: "forWajehni/businessForWajehni.html"
  }
};

const circles = document.querySelectorAll('.specialization-circle');
const detailsSection = document.getElementById('detailsSection');

circles.forEach(circle => {
  let clickCount = 0;
  let clickTimer;

  circle.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
        const field = circle.getAttribute('data-field');
        const info = specializationInfo[field];

        if (info) {
          detailsSection.innerHTML = `
            <div class="active">
              <h2>${info.title}</h2>
              <p>${info.content}</p>
            </div>
          `;
          detailsSection.classList.add('active');
          detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
    } else if (clickCount === 2) {
      clearTimeout(clickTimer);
      clickCount = 0;
      const field = circle.getAttribute('data-field');
      const info = specializationInfo[field];

      if (info && info.videoPage) {
        window.location.href = info.videoPage;
      }
    }
  });
});
