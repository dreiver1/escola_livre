import { api } from 'src/boot/axios'
import Cookies from 'js-cookie'

export default function useAuthAdmin () {
  const login = async (data) => {
    const result = await api.post('/admin/login', data)
    if (result.data.token) {
      return result.data.token
    } else {
      return 'não autorizado'
    }
  }
  const loginWithSocialProvider = async (provider) => {

  }

  const logout = async () => {

  }

  const isLoggedIn = async () => {
    try {
      const tokenGet = Cookies.get('_myAppToken')
      const req = {
        token: tokenGet
      }
      const pass = await api.post('services/auth', req)
      if (pass.data.message === 'Token invalido') {
        Cookies.remove('_myAppToken')
        return false
      }
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
