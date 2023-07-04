import axios from "axios";

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

const instanceContact = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

let authToken = ''; 

export const setToken = (token) => {
  authToken = token;
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  instanceContact.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const signUp = async (body) => {
  return await instance.post('/signup', body);
};

export const logIn = async (body) => {
  const { data } = await instance.post('/login', body);
  if ('token' in data) setToken(data.token);
  return data;
};

export const logOut = async (body) => {
  await instance.post('/logout', body);
  authToken = ''; 
  delete instance.defaults.headers.common['Authorization'];
  delete instanceContact.defaults.headers.common['Authorization'];
};

export const getUserProfile = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const { data } = await instance.get('/current', config);
  return data;
};

export const getContact = async () => {
  const { data } = await instanceContact.get();
  return data;
};

export const addContact = async (contactData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const { data } = await instanceContact.post('', contactData, config);
  return data;
};

export const deleteContact = async (contactId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  await instanceContact.delete(`/${contactId}`, config);
  return contactId;
};
