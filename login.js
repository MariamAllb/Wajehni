import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./secrets.js";

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// عند الضغط على زر تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // جلب بيانات المستخدم من Firestore
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      // حفظ البيانات في localStorage
      localStorage.setItem("studentName", userData.fullName);
      localStorage.setItem("loginStatus", "تم تسجيل الدخول بنجاح!");

      // التوجيه للصفحة الرئيسية
      window.location.href = "index.html";
    } else {
      alert("لم يتم العثور على بيانات المستخدم في قاعدة البيانات.");
    }
  } catch (error) {
    console.error("خطأ في تسجيل الدخول:", error);
    alert("فشل في تسجيل الدخول: " + error.message);
  }
});
