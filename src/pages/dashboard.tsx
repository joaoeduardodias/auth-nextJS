import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { Can } from '../components/Can'
import { AuthContext } from '../context/AuthContext'
import { setupApiClient } from '../services/api'
import { api } from '../services/apiClient'
import { withSSRAuth } from '../utils/withSSRAuth'

const Dashboard: NextPage = function () {
  const { user, signOut } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me').catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button type="button" onClick={signOut}>
        Sign out
      </button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export default Dashboard

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  await apiClient.get('/me')

  return {
    props: {},
  }
})
