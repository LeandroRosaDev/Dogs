import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFecth from '../../Hooks/useFecth';
import Error from '../Helper/Error';
import { PASSWORD_LOST } from '../../Api';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFecth();

  async function handleSubmit(event) {
    event.preventDefault;
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Clique aqui</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
