import { db } from './firebase.js';
import { 
  collection, 
  addDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Create post
export const createPost = async (content, imageUrl) => {
  await addDoc(collection(db, "posts"), {
    content,
    imageUrl,
    likes: 0,
    comments: [],
    createdAt: new Date()
  });
};

// Real-time posts listener
export const loadPosts = () => {
  onSnapshot(collection(db, "posts"), (snapshot) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    snapshot.forEach(doc => {
      const post = doc.data();
      postsContainer.innerHTML += `
        <div class="post">
          <p>${post.content}</p>
          ${post.imageUrl ? `<img src="${post.imageUrl}">` : ''}
        </div>
      `;
    });
  });
};
