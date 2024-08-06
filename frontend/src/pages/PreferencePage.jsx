import { VStack, Card, Heading, Box, Button, Textarea, Text, Input , Divider, HStack} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { getPreference,setPreference, getName, setName} from "../context/preferenceSlice";

const PreferencePage = () => {
    const dispatch = useDispatch()
    const {user} = useAuthContext();
    const preference = useSelector((state) => state.preference.preferences);
    const name = useSelector((state) => state.preference.name);

    const [preferences, setPreferences] = useState('')
    const [newName, setNewName] = useState('')

    useEffect(() => {
        dispatch(getPreference(user));
        dispatch(getName(user));
    }, [dispatch, user]);

    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch(setPreference({user:user, preferences:preferences}))
    }

    const handleSubmitName = async (e) => {
        e.preventDefault()
        dispatch(setName({user:user, name:newName}))
      }
  
  return (
    <Box display={"flex"} flexDirection={"column"} mx={'8%'} alignItems="flex-start">
        <Heading
            as="h1"
            color="#333"
            marginBottom="1rem"
            >
            Preferences
        </Heading>
        <VStack alignItems="flex-start" maxW={'80%'} mx='auto'>
            <Heading
               as="h2"
               color="#333"
                >
                Preferred Name
            </Heading>
            <Card padding={"2em"}> 
                <form onSubmit={handleSubmitName}>
                    <Text margin="2rem">
                        Current Name: {name}
                    </Text>
                    <HStack>
                        <Input  type='name' id="name" value={newName} minW={{base: '80%', md:'500px'}} onChange={(e) => setNewName(e.target.value)} />
                        <Button mt={5} type="submit">Set Name</Button>
                    </HStack>
                </form>
            </Card>
            <Divider />
            <Heading
               as="h2"
               color="#333"
               marginBottom="1rem"
                >
                Dietary Restrictions
            </Heading>
            <Card padding={"2em"}> 
                <Heading
                as="h3"
                fontSize="1rem"
                fontWeight="500"
                color="#333"
                    >
                    Please add any Restrictions that you would like for us to take into account!
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Text margin="2rem">
                        Here are your current preferences: <br/><b>{preference}</b>
                    </Text>
                    <Textarea type='preferences' id="preferences" value={preferences} minW={{base: '80%', md:'500px'}} onChange={(e) => setPreferences(e.target.value)} />
                    <Button mt={5} type="submit">Set Preferences</Button>
                </form>
            </Card>
        </VStack>
    </Box>
  )
}


export default PreferencePage
