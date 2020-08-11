import React from 'react'
import classes from './InputFile.module.scss'
import icon from '../../../assets/images/mdiPublish.svg'

const InputFile = ({ files, onChangeFiles, removeFile }) => {

  return (
    <div className={classes.fileWrapper}>
      <label className={classes.customFileUpload}>
        <input
          type="file"
          className={classes.inputFile}
          multiple
          onChange={e => onChangeFiles(e)}
        />
        <img src={icon} alt=""/>
      </label>

      <div>
        {files.map((file, index) => (
          <div
            className={classes.filePreview}
            onClick={() => removeFile(file)}
            key={index}
          >
            {file.name}
          </div>
        ))}
      </div>

    </div>
  )
}

export default InputFile