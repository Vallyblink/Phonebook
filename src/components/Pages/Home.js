import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <FaPhone size={32} style={{ marginBottom: '1rem' }} />
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Ласкаво просимо до вашої телефонної книги
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Тут ви знайдете контакти різних людей, які точно чекають звінка чи повідомлення.
      </Typography>
      <Button variant="contained" color="primary" onClick={()=> navigate('/singup')}>Старт</Button>
    </Container>
  );
};

export default HomePage;
