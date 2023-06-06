import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC0xkgc1AvLlSd87_owN8reRMjUS7XFqKY",
	authDomain: "global-living-fc4b7.firebaseapp.com",
	projectId: "global-living-fc4b7",
	storageBucket: "global-living-fc4b7.appspot.com",
	messagingSenderId: "465855728101",
	appId: "1:465855728101:web:b2939e8baf8e764699870c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const getLink = (file) => {
	return new Promise((resolve, reject) => {
		const metadata = {
			contentType: "image/jpeg",
		};

		const storageRef = ref(storage, "images/" + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file, metadata);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Track progress if needed
			},
			(error) => {
				// Handle upload error
				reject(error);
			},
			() => {
				// Upload completed successfully, get the download URL
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						resolve(downloadURL);
					})
					.catch((error) => {
						reject(error);
					});
			}
		);
	});
};

export const getLinkVideo = (video) => {
	return new Promise((resolve, reject) => {
		const metadata = {
			contentType: "video/mp4",
		};

		const storageRef = ref(storage, "video/" + video.name);
		const uploadTask = uploadBytesResumable(storageRef, video, metadata);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Track progress if needed
			},
			(error) => {
				// Handle upload error
				reject(error);
			},
			() => {
				// Upload completed successfully, get the download URL
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						resolve(downloadURL);
					})
					.catch((error) => {
						reject(error);
					});
			}
		);
	});
};
