import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "wajehni-2820c.firebaseapp.com",
  projectId: "wajehni-2820c",
  storageBucket: "wajehni-2820c.appspot.com",
  messagingSenderId: "712361399660",
  appId: "1:712361399660:web:1dd3ad0cc0852a5979cf49"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// نموذج التسجيل
const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("loginPassword").value;
  const userType = document.querySelector('input[name="user"]:checked');

  if (!fullName || !email || !phone || !password || !userType) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // حفظ البيانات في Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: fullName,
      email: email,
      phone: phone,
      userType: userType.value
    });

    // حفظ الاسم في localStorage
    localStorage.setItem("studentName", fullName);

    alert("🎉 تم إنشاء الحساب بنجاح!");
    window.location.href = "index.html";

  } catch (error) {
    alert("حدث خطأ أثناء إنشاء الحساب: " + error.message);
    console.error(error);
  }
});

