import { api } from 'boot/axios'
import Cookies from 'js-cookie'

export default function useApi (url) {
  const list = async () => {
    try {
      const token = await Cookies.get('_myAppToken')
      console.log(token)
      const { data } = await api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const getById = async (id) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const { data } = await api.get(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const post = async (form) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const { data } = await api.post(url, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const update = async (form) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const { data } = await api.put(`${url}/${form.id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const { data } = await api.delete(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
