import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginThunk } from 'redux/auth/thunks';
import { toast } from 'react-toastify';

const LoginPage = () => {
  // const isAuth = useSelector( state=> state.auth.token)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(loginThunk({ email, password })).unwrap().then(
     () => {
       toast.success('Welcome')
       navigate('/contacts')
       
     })
    .catch(() => {
      // Обробка помилки, якщо необхідно
      toast.error('Login failed');
    });

};

  const handleChange = ({target: {value, name}}) => {
    name ==='email' ? setEmail(value) : setPassword(value)
  }
  
  // useEffect(() => {
  //   isAuth && navigate('/')
  // },[isAuth, navigate])
    
  
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <h2 className="text-center mb-4">Вхід</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  disabled={!email || !password}
                  >
                  Увійти
                </Button>
                <Link to= '/singup'> Sing Up</Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;

