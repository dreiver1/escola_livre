import { api } from 'src/boot/axios'
import Cookies from 'js-cookie'

export default function useAuthAdmin () {
  const login = async (data) => {
    const result = await api.post('/admin/login', data)
    if (result.message) { alert(result.message) }
    return result.data.token
  }
  const loginWithSocialProvider = async (provider) => {

  }

  const logout = async () => {

  }

  const isLoggedIn = async () => {
    try {
      const token = Cookies.get('_myAppToken')
      const pass = await api.post('services/auth', token)
      console.log(pass)
      return true
    } catch (error) {
      return false
    }
  }

  const register = async ({ email, password, ...meta }) => {

  }

  const update = async (data) => {

  }

  const sendPasswordRestEmail = async () => {

  }

  return {
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
  }
}
