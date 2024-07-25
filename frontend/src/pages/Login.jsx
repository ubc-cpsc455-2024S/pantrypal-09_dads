import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Button
} from '@chakra-ui/react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }


  return (
  <form className="login" onSubmit={handleSubmit}>
    <FormControl isInvalid={error}>
      <Heading>Log In</Heading>
      <FormLabel>Email</FormLabel>
      <Input type='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />

      <FormLabel>Password</FormLabel>
      <Input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
      <Button disabled={isLoading} type="submit">Log in</Button>
    </FormControl>
  </form>
  )
}

export default Login