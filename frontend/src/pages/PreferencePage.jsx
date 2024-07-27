import { VStack, Wrap, WrapItem, Heading, Box, Button, Textarea, Text, FormControl} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { getPreference,setPreference } from "../context/preferenceSlice";

const PreferencePage = () => {
    const dispatch = useDispatch()
    const {user} = useAuthContext();
    const preference = useSelector((state) => state.preference.preferences);
    const [preferences, setPreferences] = useState('')

    useEffect(() => {
        dispatch(getPreference(user));
    }, [dispatch, user]);

    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch(setPreference({user:user, preferences:preferences}))
    }
  
  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"} alignItems="flex-start">
        <VStack alignItems="flex-start">
            <Heading
               as="h1"
               fontSize="2rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Dietary Restrictions
            </Heading>
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
                <Textarea type='preferences' id="preferences" value={preferences} minW={'500px'} onChange={(e) => setPreferences(e.target.value)} />
                <Button mt={5} type="submit">Set Preferences</Button>
            </form>
        </VStack>
    </Box>
  )
}


export default PreferencePage
