import { TextField } from '@mui/material';
import { useState } from 'react';
import type { Credentials } from './login.types'

const LoginPage = () => {

  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TextField 
        name="username"
        onChange={handleChange}
        value={credentials?.username}
      />
      <TextField 
        name="password"
        onChange={handleChange}
        value={credentials?.password}
      />
    </>
  );
};
export default LoginPage;