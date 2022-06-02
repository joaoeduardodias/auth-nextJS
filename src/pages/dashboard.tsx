import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { setupApiClient } from '../services/api'
import { api } from '../services/apiClient'
import { withSSRAuth } from '../utils/withSSRAuth'

const Dashboard: NextPage = function () {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return <h1>Dashboard: {user?.email}</h1>
}

export default Dashboard

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get('/me')
  console.log(response.data)

  return {
    props: {},
  }
})
