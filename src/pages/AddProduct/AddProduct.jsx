import React, { useState } from 'react'
import classes from './AddProduct.module.scss'
import PageWrapper from '../../hoc/PageWrapper/PageWrapper'
import CardProduct from '../../components/CardProduct/CardProduct'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const AddProduct = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy


  const [category, setCategory] = useState('Книга')
  const [title, setTitle] = useState('Пауло Коэльо')
  const [address, setAddress] = useState('г. Москва')
  const [description, setDescription] = useState('Отдам лучшие книги Пауло')
  const [date] = useState(today)

  return (
    <main className={classes.AddProduct}>
      <div className='container'>
        <PageWrapper>
          <h3>Добавить товар</h3>

          <div className={classes.mainWrapper}>
            <div className={classes.leftWrapper}>
              {/* TODO: do it iteration*/}
              <InputWrapper label="Категория" required={true}>
                <Input
                  value={category}
                  onChange={e => setCategory(e.target.value)}
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
                <Input
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </InputWrapper>
            </div>

            <div className={classes.rightWrapper}>
              <h3>Предпросмотр:</h3>

              <CardProduct
                category={category}
                title={title}
                address={address}
                description={description}
                date={date}
              />
            </div>
          </div>

          <div className={classes.btnWrapper}>
            <Button><h3>Добавить</h3></Button>
          </div>

        </PageWrapper>
      </div>
    </main>
  )
}

export default AddProduct