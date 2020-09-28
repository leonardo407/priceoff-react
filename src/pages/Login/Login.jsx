import React, { useState } from 'react'
import classes from './Login.module.scss'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const Login = props => {

  const dispatch = useDispatch()

  const [name, setName] = useState('Leon')
  const [phone, setPhone] = useState('98765432100')

  async function btnHandler() {
    const user = await dispatch(login(name, phone))

    if (user) {
      props.history.push('/')
    }
  }

  return (
    <div className={classes.Form}>
      <h2 className={classes.Title}>Вход</h2>

      <InputWrapper
        label={'Имя'}
        required={true}
        id={0}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id={0}
        />
      </InputWrapper>

      <InputWrapper
        label={'Номер телефона'}
        required={true}
        id={1}
      >
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          id={1}
        />
      </InputWrapper>

      <div className={classes.ButtonWrapper}>
        <Button onClick={() => btnHandler()}>
          <h3>Отправить</h3>
        </Button>
      </div>
    </div>
  )
}

export default Login