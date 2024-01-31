import React, { useContext } from 'react';
import Input from '../../../shared/ui/input/Input.tsx';
import Button from '../../../shared/ui/button/Button.tsx';
import { AuthContext } from '../../../context/index.js';

export default function AuthForm() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };

  return (
    <div>
      <form onSubmit={login}>
        <Input type='text' placeholder='Введите почту' />
        <Input type='text' placeholder='Введите пароль' />
        <div className='content__footer'>
          <Button>Авторизоваться</Button>
        </div>
      </form>
    </div>
  );
}
