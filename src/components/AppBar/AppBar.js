import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Phone } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { loginProfileThunk, logoutThunk } from 'redux/auth/thunks';
import { setToken } from 'api/auth';




const MyAppBar = () => {
  const { token, profile} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  console.log(profile)
   const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logoutThunk())
    navigate('/')
    
  }
  
  useEffect(() => {
    if (token && profile === "") {
      setToken(token)
      dispatch(loginProfileThunk(token))
      
    }
  }, [token, dispatch, profile])

 
 
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Phone sx={{ marginRight: '0.1rem' }} />
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Phonebook
        </Typography> */}
        <Button 
          color="inherit"
          sx={{ textTransform: 'none',  fontSize: '1.3rem' }}
          onClick={() => navigate('/contacts')}>My Contacts
        </Button>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {token? profile.name : 'Welcome' }
        </Typography>
        <Button
          onClick={() => {
            token ? handleLogOut() : navigate('/login')  ;
          }}
          variant="outlined"
          color="inherit">
          {token?'LogOut':'LogIn'  }
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;