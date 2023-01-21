import { ref } from 'vue'
import { api } from 'src/boot/axios'
const user = ref(null)

export default function useAuthAdmin () {
  const login = async (data) => {
    const { token, message } = await api.post('/admin/login', data)
    if (message) { alert(message) }
    return token
  }
  const loginWithSocialProvider = async (provider) => {

  }

  const logout = async () => {

  }

  const isLogedIn = () => {
    return !!user.value
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
    isLogedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
  }
}
