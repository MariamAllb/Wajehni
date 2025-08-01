import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./secrets.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.querySelector('form');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // تخزين الاسم والبريد محليًا
      localStorage.setItem("studentName", email.split('@')[0]);  // مثال: اسم قبل @
      localStorage.setItem("loginStatus", "تم إنشاء الحساب بنجاح!");

      window.location.href = "index.html";
    } catch (error) {
      alert("فشل في إنشاء الحساب: " + error.message);
    }
  });
}
