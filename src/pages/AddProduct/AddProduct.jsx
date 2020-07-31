import React from 'react'
import classes from './AddProduct.module.scss'
import { PageWrapper } from '../../hoc/PageWrapper/PageWrapper'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { InputWrapper } from '../../components/InputWrapper/InputWrapper'
import { Input } from '../../components/UI/Input/Input'

export const AddProduct = () => (
  <main className={classes.AddProduct}>
    <div className='container'>
      <PageWrapper>
        <h3>Добавить товар</h3>

        <div className={classes.AddProduct__mainWrapper}>
          <div className={classes.AddProduct__leftWrapper}>
            {/* TODO: do it iteration*/}
            <InputWrapper label="Категория" required={true}>
              <Input />
            </InputWrapper>

            <InputWrapper label="Название" required={true}>
              <Input />
            </InputWrapper>

            <InputWrapper label="Адрес" required={true}>
              <Input />
            </InputWrapper>

            <InputWrapper label="Описание" required={true}>
              <Input />
            </InputWrapper>
          </div>

          <div className={classes.AddProduct__rightWrapper}>
            <h3>Предпросмотр:</h3>
            <CardProduct />
          </div>
        </div>
      </PageWrapper>
    </div>
  </main>
)