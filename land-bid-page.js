import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ycXtES3tqzyK4nVMmKoXsniYAcqyBd8",
  authDomain: "my-project-635e4.firebaseapp.com",
  projectId: "my-project-635e4",
  storageBucket: "my-project-635e4.appspot.com",
  messagingSenderId: "423533185631",
  appId: "1:423533185631:web:23a88a1302e9517042e9ea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);

const land_ID = JSON.parse(localStorage.getItem("doc_id"))
const landDoc = await getDoc(doc(firestore, "lands", land_ID));

if(landDoc.exists()){
    const landData = landDoc.data();
  console.log("Land Data:", landData);

  // Create image element
  const image = document.createElement("img");
  image.src = landData.imageUrl;

  // Create "View More Images" button
  const viewMoreButton = document.createElement("button");
  viewMoreButton.textContent = "View More Images";
  viewMoreButton.classList.add("view-more-button");
  viewMoreButton.id = land_ID
  viewMoreButton.onclick = onCardbtnClick(viewMoreButton.id)

  // Append image and button to image container
  const imageContainer = document.getElementById("image-container");
  imageContainer.appendChild(image);
  imageContainer.appendChild(viewMoreButton);
}else{
  console.log("doc not found");
  
}



function onCardbtnClick(id){
  console.log(id);
  
  localStorage.setItem("images_doc_id",JSON.stringify(id))
  
}