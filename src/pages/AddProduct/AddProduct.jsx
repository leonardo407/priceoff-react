import React, { useEffect, useState } from 'react'
import classes from './AddProduct.module.scss'
import prettyDate from '../../utils/prettyDate'
import PageWrapper from '../../hoc/PageWrapper/PageWrapper'
import CardProduct from '../../components/CardProduct/CardProduct'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Select from 'react-dropdown-select'
import Textarea from '../../components/UI/Textarea/Textarea'
import InputFile from '../../components/UI/InputFile/InputFile'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

const AddProduct = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const selectStyle = {
    marginTop: '10px',
    border: '3px solid #DCD9D5',
    borderRadius: '10px',
    paddingLeft: '15px',
    maxWidth: '300px',
  }

  const [category, setCategory] = useState([{ value: 'chocolate', label: 'Chocolate' }])
  const [title, setTitle] = useState('Пауло Коэльо')
  const [address, setAddress] = useState('г. Москва')
  const [description, setDescription] = useState('Отдам лучшие книги Пауло')
  const [date] = useState(prettyDate)
  const [files, setFiles] = useState([])
  const [fileBase64, setFileBase64] = useState('')

  useEffect(() => {
    async function watcherFiles() {
      if (files.length) {
        const firstFile = files[0]
        const base64FirstFile = await toBase64(firstFile)

        setFileBase64(base64FirstFile)
      } else {
        setFileBase64('')
      }
    }

    watcherFiles()
  })

  function onChangeFiles(e) {
    const newFiles = e.target.files
    const filesArr = Array.from(newFiles)

    setFiles(filesArr)
  }

  function removeFile(removeFile) {
    const changedFiles = files.filter(file => file !== removeFile)

    setFiles(changedFiles)
  }

  return (
    <main className={classes.AddProduct}>
      <div className='container'>
        <PageWrapper>
          <h3>Добавить товар</h3>

          <div className={classes.mainWrapper}>
            <div className={classes.leftWrapper}>

              <InputWrapper label="Категория" required={true}>
                <Select
                  values={category}
                  options={options}
                  onChange={setCategory}
                  style={selectStyle}
                />
              </InputWrapper>

              <InputWrapper label="Название" required={true}>
                <Input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </InputWrapper>

              <InputWrapper label="Адрес" required={true}>
                <Input
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </InputWrapper>

              <InputWrapper label="Описание" required={true}>
                <Textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </InputWrapper>

              <InputWrapper label="Фотографии">
                <InputFile
                  files={files}
                  onChangeFiles={onChangeFiles}
                  removeFile={removeFile}
                />
              </InputWrapper>
            </div>

            <div className={classes.rightWrapper}>
              <h3>Предпросмотр:</h3>

              <CardProduct
                category={category.length ? category[0].value : ''}
                title={title}
                address={address}
                description={description}
                date={date}
                img={fileBase64}
              />
            </div>
          </div>

          <div className={classes.btnWrapper}>
            <Button>
              <h3>Добавить</h3>
            </Button>
          </div>

        </PageWrapper>
      </div>
    </main>
  )
}

export default AddProduct