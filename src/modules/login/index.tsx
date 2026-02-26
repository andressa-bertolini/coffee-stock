import { TextField, Button } from '@mui/material';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <Button 
        type="submit"
        onClick={handleSubmit}
      />
    </>
  );
};
export default LoginPage;