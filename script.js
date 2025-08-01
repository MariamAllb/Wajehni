document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("userGreeting");
  const loginLink = document.getElementById("loginLink");
  const joinLink = document.getElementById("joinLink");
  const profileItem = document.getElementById("profileItem");
  const studentName = localStorage.getItem("studentName");
  const loginStatus = localStorage.getItem("loginStatus");

  if (greeting) {
    greeting.innerHTML = studentName
      ? `<span style="color: #39A852; font-weight: bold;">مرحبًا، ${studentName}</span>`
      : `<a href="login.html" class="login-link">تسجيل الدخول</a>`;
  }

  if (loginLink && studentName) {
    loginLink.textContent = `مرحبًا، ${studentName}`;
    loginLink.href = "profile.html";
  }

  if (profileItem && studentName) {
    profileItem.style.display = "inline-block";
  }

  if (joinLink && studentName) {
    joinLink.textContent = "تسجيل الخروج";
    joinLink.href = "#";
    joinLink.addEventListener("click", () => {
      localStorage.removeItem("studentName");
      alert("تم تسجيل الخروج بنجاح");
      window.location.reload();
    });
  }

  if (loginStatus) {
    alert(loginStatus);
    localStorage.removeItem("loginStatus");
  }
});
