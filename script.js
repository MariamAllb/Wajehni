document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("userGreeting");
  const loginLink = document.getElementById("loginLink");
  const joinLink = document.getElementById("joinLink");
  const profileItem = document.getElementById("profileItem");
  const studentName = localStorage.getItem("studentName");
  const loginStatus = localStorage.getItem("loginStatus");

  // ترحيب داخل الصفحة (إن وُجد عنصر userGreeting)
  if (greeting) {
    if (studentName) {
      greeting.innerHTML = `<span style="color: #39A852; font-weight: bold;">مرحبًا، ${studentName}</span>`;
    } else {
      greeting.innerHTML = `<a href="login.html" class="login-link">تسجيل الدخول</a>`;
    }
  }

  // تغيير زر تسجيل الدخول إلى الاسم
  if (loginLink && studentName) {
    loginLink.textContent = `مرحبًا، ${studentName}`;
    loginLink.href = "profile.html";
  }

  // إظهار زر حسابك إذا وُجد
  if (profileItem && studentName) {
    profileItem.style.display = "inline-block";
  }

  // تعديل زر "انضم معنا" إلى "تسجيل الخروج"
  if (joinLink && studentName) {
    joinLink.textContent = "تسجيل الخروج";
    joinLink.href = "#";
    joinLink.addEventListener("click", () => {
      localStorage.removeItem("studentName");
      alert("تم تسجيل الخروج بنجاح");
      window.location.reload();
    });
  }

  // إشعار بعد تسجيل الدخول أو إنشاء الحساب
  if (loginStatus) {
    alert(loginStatus);
    localStorage.removeItem("loginStatus");
  }
});
