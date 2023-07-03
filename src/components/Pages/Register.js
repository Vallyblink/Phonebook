import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { signUp } from 'api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    signUp({
      name,
      email,
      password
    }).then(() => {navigate('/login') 
    toast.success('Hi, there! Registration Done')})
    
  }

  const handleChange = ({target:{value, name}}) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      :setName(value)
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <h2 className="text-center mb-4">Реєстрація</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name='name'
                  id="formName"
                  label="Ім'я"
                  type="text"
                  variant="outlined"
                  fullWidth
                  placeholder="Введіть ім'я"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='email'
                  id="formEmail"
                  label="Email адреса"
                  type="email"
                  variant="outlined"
                  fullWidth
                  placeholder="Введіть email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='password'
                  id="formPassword"
                  label="Пароль"
                  type="password"
                  variant="outlined"
                  fullWidth
                  placeholder="Введіть пароль"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Зареєструватися
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationPage;
