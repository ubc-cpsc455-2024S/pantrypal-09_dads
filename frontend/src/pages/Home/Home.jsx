import { useEffect }from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"
import Hero from './Hero'

// components
//import WorkoutDetails from '../components/WorkoutDetails'
//import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  //const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('/api/workouts', {
//         headers: {'Authorization': `Bearer ${user.token}`},
//       })
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_WORKOUTS', payload: json})
//       }
//     }

//     if (user) {
//       fetchWorkouts()
//     }
//   }, [dispatch, user])

  return (
    <div className="home">
        <Hero/>
    </div>
  )
}

export default Home