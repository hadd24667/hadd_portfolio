import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; 

const uploadProjects = async () => {
  const localProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const projectsRef = collection(db, "projects");

  for (let project of localProjects) {
    try {
      await addDoc(projectsRef, project);
      console.log(`Uploaded: ${project.Title}`);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  }
};

uploadProjects();
