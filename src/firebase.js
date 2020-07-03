import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCNwex6MTUiDS9Wm__GYJFxXlFkdlLgBkI",
	authDomain: "judotemp.firebaseapp.com",
	databaseURL: "https://judotemp.firebaseio.com",
	projectId: "judotemp",
	storageBucket: "judotemp.appspot.com",
	messagingSenderId: "499184910291",
	appId: "1:499184910291:web:981613d94f9c8daa8fb926",
	measurementId: "G-1BK8S8H7KT"
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();