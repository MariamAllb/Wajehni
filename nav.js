document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const navRight = document.querySelector(".nav-right");
  const userName = localStorage.getItem("userName");

  if (userName && loginLink && navRight) {
    // تعديل النص الظاهر
    loginLink.textContent = `مرحبًا، ${userName}`;
    loginLink.href = "#";
    loginLink.style.pointerEvents = "none"; // يمنع النقر

    // إنشاء زر تسجيل خروج
    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.textContent = "تسجيل خروج";
    logoutLink.className = "login-btn";
    logoutLink.style.marginRight = "10px";

    logoutLink.addEventListener("click", () => {
      localStorage.removeItem("userName");
      alert("تم تسجيل الخروج بنجاح");
      window.location.reload(); // يعيد تحميل الصفحة
    });

    const logoutLi = document.createElement("li");
    logoutLi.appendChild(logoutLink);
    navRight.appendChild(logoutLi);
  }
});
