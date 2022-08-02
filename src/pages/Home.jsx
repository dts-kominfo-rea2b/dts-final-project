import { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'
import { getUsers } from '../context/github/GithubActions'
import UserResults from '../components/users/UserResults'

function Home() {
  const { dispatch } = useContext(GithubContext)

  useEffect(() => {
    getRandomUsers()
    // eslint-disable-next-line
  }, [])

  const getRandomUsers = async () => {
    dispatch({ type: 'SET_LOADING' })

    const users = await getUsers()

    dispatch({ type: 'GET_USERS', payload: users })
  }

  return <UserResults />
}

export default Home
