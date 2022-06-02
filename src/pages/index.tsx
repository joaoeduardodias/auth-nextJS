import type { NextPage } from 'next'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../styles/Home.module.scss'
import { withSSRGuest } from '../utils/withSSRGuest'

const Home: NextPage = function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.content}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  }
})

export default Home
