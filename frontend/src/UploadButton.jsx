import { useState , useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './buttons.css'

function UploadButton({setData}) {
  const onDrop = useCallback(async acceptedFiles => {
    const formData = new FormData();
    acceptedFiles.forEach(acceptedFiles => {
      formData.append("files", acceptedFiles)
    });
    const res = await fetch("http://127.0.0.1:5000/process", {method: "POST", body: formData});
    const data = await res.json();
    
    setData(data);
    console.log(data);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {"application/pdf": [".pdf"]}, multiple:true})

  return (
    <div {...getRootProps()} className="upload">
      <button className="upButton">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </button>
    </div>
  )
}

export default UploadButton
