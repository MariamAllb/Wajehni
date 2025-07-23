// تخصيص روابط صفحات الاختبارات حسب التخصص داخل مجلد forPlat
const testPages = {
  "medicine": "forPlat/medicineForPlat.html",
  "engineering": "forPlat/engineeringForPlat.html",
  "computer-science": "forPlat/computerscienceForPlat.html",
  "science": "forPlat/scienceForPlat.html",
  "literature": "forPlat/literatureForPlat.html",
  "education": "forPlat/educationForPlat.html",
  "business": "forPlat/businessForPlat.html"
};

// إضافة حدث عند الضغط على كل دائرة تخصص
const platformCircles = document.querySelectorAll('.specialization-circle');

platformCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    const field = circle.getAttribute('data-field');
    const page = testPages[field];
    if (page) {
      window.location.href = page;
    }
  });
});

