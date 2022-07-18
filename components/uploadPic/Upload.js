import { useState } from "react";
import styles from "../../styles/upload.module.css";
import Image from "next/dist/client/image";
import { width } from "@mui/system";
function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <h1>upload</h1>
      <form className={styles.form}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className={styles.formInput}
        />
        <button className={styles.btn} type="button">
          submit{" "}
        </button>
      </form>
      <a>
        {previewSource && (
          <Image
            src={previewSource}
            alt={"chosen"}
            height={"300px"}
            width={"300px"}
          />
        )}
      </a>
    </div>
  );
}

export default Upload;
