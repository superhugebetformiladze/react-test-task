import { useState, useEffect, useRef } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

interface UserProfile {
  picture: string
  name: string
  email: string
}

interface UseGoogleAuthProps {
  onLoginSuccess: (profile: UserProfile) => void
  onLogoutSuccess: () => void
}

export const useGoogleAuth = ({ onLoginSuccess, onLogoutSuccess }: UseGoogleAuthProps) => {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const prevUser = useRef<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  })

  useEffect(() => {
    if (user && user !== prevUser.current) {
      prevUser.current = user

      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          const userProfile: UserProfile = res.data
          setProfile(userProfile)
          onLoginSuccess(userProfile)

          localStorage.setItem('user', JSON.stringify(user))
        })
        .catch((err) => console.log(err))
    }
  }, [user, onLoginSuccess])

  const logOut = () => {
    googleLogout()
    setProfile(null)
    onLogoutSuccess()

    localStorage.removeItem('user')
  }

  return {
    user,
    profile,
    login,
    logOut,
  }
}