import { toast } from "react-toastify";
export default function fileUploadOperations({
  filename,
  newFile,
  setNewFile,
  newFilesArr,
  setNewFilesArr,
  setAddCourseData,
  setIsEditable,
  operation,
}) {
  if (operation === "save") {
    if (!newFile) return toast.error("Please upload a file first");
    if (newFilesArr.includes(newFile))
      return toast.error("This file is already uploaded");
    setNewFilesArr((prev) => [...prev, newFile]);
    setAddCourseData((prev) => ({
      ...prev,
      files: [...prev.files, newFile],
    }));
    setNewFile();
    setIsEditable(false);
  }
  if (operation === "cancel") {
    setIsEditable(false);
    setNewFile();
  }
  if (operation === "delete") {
    console.log(filename);
    setNewFilesArr((prev) => prev.filter((obj) => obj !== filename));
    setAddCourseData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file !== filename),
    }));
    setNewFile();
  }
}
