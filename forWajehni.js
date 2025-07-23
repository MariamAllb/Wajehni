// forWajehni.js - مخصص لصفحات تخصصات وجهني

document.addEventListener("DOMContentLoaded", () => {
  console.log(" تم تحميل صفحة التخصص.");

  //  التعرف على اسم التخصص من العنوان <h1>
  const subjectTitle = document.querySelector(".subject-hero h1");
  if (subjectTitle) {
    console.log(` التخصص الحالي: ${subjectTitle.textContent.trim()}`);
  }

  //  التأكد من وجود الفيديو وإظهاره بطريقة احترافية
  const videoFrame = document.querySelector(".youtube-video iframe");
  if (videoFrame) {
    if (videoFrame.getAttribute("src") === "") {
      videoFrame.style.border = "2px dashed #ccc";
      videoFrame.style.background = "#f8f8f8";
      videoFrame.title = "سيتم إضافة الفيديو لاحقًا";
      console.warn("⚠️ رابط الفيديو غير مضاف بعد.");
    } else {
      console.log("✅ تم العثور على رابط الفيديو.");
    }
  }

  //  زر العودة
  const returnButton = document.querySelector(".return-button");
  if (returnButton) {
    returnButton.addEventListener("click", () => {
      console.log("لرجوع إلى صفحة وجهني.");
    });
  }
});
