import React, { useState } from 'react'
import classes from './InputFile.module.scss'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

const InputFile = () => {

  const [files, setFiles] = useState([])
  const [fileBase64, setFileBase64] = useState('')

  async function onChange(e) {
    const newFiles = e.target.files
    const filesArr = Array.prototype.slice.call(newFiles)

    setFiles(filesArr)

    const firstFile = filesArr[0]
    const base64FirstFile = await toBase64(firstFile)
    setFileBase64(base64FirstFile)
  }

  function removeFile(removeFile) {
    const changedFiles = files.filter(file => file !== removeFile)

    setFiles(changedFiles)
  }

  return (
    <>
      <label className={classes.customFileUpload}>
        <input
          type="file"
          className={classes.inputFile}
          multiple
          onChange={e => onChange(e)}
        />
        <i className="fa fa-cloud-upload"/> Attach
      </label>

      {files.map((file, index) => (
        <div
          className={classes.filePreview}
          onClick={() => removeFile(file)}
          key={index}
        >
          {file.name}
        </div>
      ))}

      <img src={fileBase64} alt=""/>
    </>
  )
}

export default InputFile