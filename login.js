import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDECIS-T7Q_gj2NeJLBkzIo0Dr688oe-U",
  authDomain: "wajehni-2820c.firebaseapp.com",
  projectId: "wajehni-2820c",
  storageBucket: "wajehni-2820c.appspot.com",
  messagingSenderId: "712361399660",
  appId: "1:712361399660:web:1dd3ad0cc0852a5979cf49"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const fullName = data.fullName || "المستخدم";
        localStorage.setItem("studentName", fullName);

        alert("✅ تم تسجيل الدخول بنجاح");
        window.location.href = "index.html";
      } else {
        alert("❌ لم يتم العثور على بيانات المستخدم.");
      }

    } catch (error) {
      alert(" تاكد من المعلومات: " + error.message);
    }
  });
}
