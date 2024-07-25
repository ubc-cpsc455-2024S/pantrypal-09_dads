import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Button
} from '@chakra-ui/react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <FormControl isInvalid={error}>
        <Heading>Sign Up</Heading>
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

export default Signup