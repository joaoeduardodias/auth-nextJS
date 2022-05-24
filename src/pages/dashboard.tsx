import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { api } from '../services/api'

const Dashboard: NextPage = function () {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me').then((response) => console.log(response))
  }, [])

  return <h1>Dashboard: {user?.email}</h1>
}

export default Dashboard
