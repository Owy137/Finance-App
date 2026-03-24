import { useState , useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function UploadButton({setData}) {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(async acceptedFiles => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append("files", file)
    });
    setLoading(true);
    const res = await fetch("http://127.0.0.1:5000/process", {method: "POST", body: formData});
    const data = await res.json();
    
    setData(data);
    setLoading(false);
    console.log(data);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {"application/pdf": [".pdf"]}, multiple:true})

  return (
    <div {...getRootProps()} className="flex flex-col items-center w-full max-w-md">
      <button className="w-full border border-blue-300 rounded-xl bg-white py-3 px-4 text-blue-800 font-medium transition hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <input {...getInputProps()} className="hidden" />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </button>
      <p className="mt-2 text-sm text-gray-500">{loading ? "Loading...": ""}</p>
    </div>
  )
}

export default UploadButton
