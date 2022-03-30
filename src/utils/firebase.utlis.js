//Just for using firebase
import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {doc,getDoc,setDoc,getFirestore,collection,writeBatch,query,getDocs} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4oOcl72GK3ZQQMvGe6w2IYjKhFaSCC1U",
    authDomain: "shop-clothing26-db.firebaseapp.com",
    projectId: "shop-clothing26-db",
    storageBucket: "shop-clothing26-db.appspot.com",
    messagingSenderId: "953343887621",
    appId: "1:953343887621:web:4af4dd9b525f4a681c4f6c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //Set up for authentication
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account",
  });

  //Create db firebase
  export const db = getFirestore();
  //
  export const addCollectionAndDocuments =async (collectionKey,objectsToAdd) =>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit();
  }
  //
  export const getCategoriesAndDocuments = async ()=>{
      const collectionRef = collection(db,'categories');
      const q = query(collectionRef);
      const querySnapShot = await getDocs(q);
      const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
          const {title, items} = docSnapShot.data();
          acc[title.toLowerCase()] = items;
          return acc;
      },{})
      return categoryMap;
  }
  //
  export const createUserDocumentFromAuth = async (userAuth,additionalInfomation={}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    //if user data does not exists
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,email,createAt,...additionalInfomation
            });
        }catch(err){
            console.log("Error creating the user ", err.message);
        }
    }
    return userDocRef;
  }
  //handle auth with email and password
  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password);
  }
  //handle log in with email and password
  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
      if(!email || !password) return;
      return await signInWithEmailAndPassword(auth,email,password);
  }
  //handle log out user
  export const signOutUser = async () => await signOut(auth);
  //
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);
  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);