import { useState } from 'react'
import './Button.css'

function UploadButton() {

  function uploadFile(){
    //Create file upload
  }

  return (
    <>
      <div>
        <button className="upload_file_button" action={uploadFile}>Upload Statement</button>
      </div>
    </>
  )
}

export default UploadButton
