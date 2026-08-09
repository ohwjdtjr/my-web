// Firebase 콘솔의 프로젝트 설정에서 복사해온 config 값
const firebaseConfig = {
  apiKey: "AIzaSyBtazu-QkEd_iUz0MRJNR5AbbYPQMQK2hs",
  authDomain: "guestbook-4f21b.firebaseapp.com",
  projectId: "guestbook-4f21b",
  storageBucket: "guestbook-4f21b.firebasestorage.app",
  messagingSenderId: "327752784279",
  appId: "1:327752784279:web:7409b9cc7fbfee047b0cd2",
  measurementId: "G-YEX9WKNMCY"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 'visitors' 컬렉션의 'count' 문서 참조
const docRef = db.collection('visitors').doc('count');

// 접속 시 숫자를 1 올리고 화면에 표시
db.runTransaction((transaction) => {
  return transaction.get(docRef).then((sfDoc) => {
    if (!sfDoc.exists) {
      transaction.set(docRef, { visits: 1 });
      return 1;
    }
    const newCount = sfDoc.data().visits + 1;
    transaction.update(docRef, { visits: newCount });
    return newCount;
  });
}).then((newCount) => {
  document.getElementById('visit-count').textContent = newCount;
}).catch((err) => {
  console.error("Firebase 오류:", err);
  document.getElementById('visit-count').textContent = '-';
});
