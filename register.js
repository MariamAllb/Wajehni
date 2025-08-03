import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./secrets.js";

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// الحصول على النموذج عبر ID
const form = document.getElementById("registerForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      // إنشاء حساب جديد
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // حفظ بيانات المستخدم محليًا
      localStorage.setItem("studentName", fullName);
      localStorage.setItem("loginStatus", "تم إنشاء الحساب بنجاح!");

      // توجيه المستخدم للصفحة الرئيسية
      window.location.href = "index.html";
    } catch (error) {
      alert("فشل في إنشاء الحساب: " + error.message);
    }
  });
}
