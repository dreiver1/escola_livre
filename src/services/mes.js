import useApi from 'src/composables/useApi'
import { api } from 'src/boot/axios'
import Cookies from 'js-cookie'

export default function mesService () {
  const { list, post, update, remove } = useApi('mes')

  const getMesByFrequencyID = async (id) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const freq = await api.get('mes/frequencia/' + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return freq.data
    } catch (error) {
      return console.log(error);
    }
  }

  return {
    listMes: list,
    postMes: post,
    upMes: update,
    removeMes: remove,
    getByIdMes: getMesByFrequencyID
  }
}
