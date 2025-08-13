import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./secrets.js";

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// النموذج
const form = document.getElementById("registerForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const userTypeRadio = document.querySelector('input[name="userType"]:checked');

    // تحقق من اختيار نوع المستخدم
    if (!userTypeRadio) {
      alert("يرجى تحديد نوع المستخدم.");
      return;
    }

    const userType = userTypeRadio.value;

    try {
      // إنشاء الحساب
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // حفظ البيانات في Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        phone,
        userType
      });

      // حفظ البيانات في localStorage
      localStorage.setItem("studentName", fullName);
      localStorage.setItem("studentEmail", email);
      localStorage.setItem("studentPhone", phone);
      localStorage.setItem("studentUserType", userType);
      localStorage.setItem("loginStatus", "تم إنشاء الحساب بنجاح!");

      // التوجيه للصفحة الرئيسية
      window.location.href = "index.html";
    } catch (error) {
      alert("فشل في إنشاء الحساب: " + error.message);
      console.error("Firebase Error:", error);
    }
  });
}
