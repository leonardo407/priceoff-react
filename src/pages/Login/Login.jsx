import React, { useState } from 'react'
import classes from './Login.module.scss'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const Login = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className={classes.Form}>
      <h2 className={classes.Title}>Вход</h2>

      <InputWrapper label={'Имя'} required={true} id={0}>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          id={0}
        />
      </InputWrapper>

      <InputWrapper label={'Номер телефона'} required={true} id={1}>
        <Input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          id={1}
        />
      </InputWrapper>

      <div className={classes.ButtonWrapper}>
        <Button>
          Отправить
        </Button>
      </div>
    </div>
  )
}

export default Login