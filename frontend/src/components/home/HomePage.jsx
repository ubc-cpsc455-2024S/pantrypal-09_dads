import { Stack, Button} from '@chakra-ui/react'
import ImageUpload from './Upload'
import { FaRegKeyboard } from 'react-icons/fa'
import { getUser, goToIngredients} from '../../context/userSlice'
import { useEffect} from 'react'
import { useSelector } from 'react-redux'

function HomePage({dispatch}) {
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
      dispatch(getUser(username));
  }, [dispatch, username]);

  const insertIngredientOnclick = () => {
    dispatch(goToIngredients())
  }

  return (
    <>
      <div className='buttonsContainer'>
        <Stack direction='column' spacing={4}>
          {/* <Button leftIcon={<FaCameraRetro />} variant='solid' >
            <Link href="/ingredients">Take a picture</Link>
          </Button> */}
          <ImageUpload goTo = "/ingredients" dispatch={dispatch}/>
          <Button leftIcon={<FaRegKeyboard />} variant='outline' onClick={insertIngredientOnclick}>
            Insert ingredients
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default HomePage
