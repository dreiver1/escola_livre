import useApi from 'src/composables/useApi'
import { api } from 'src/boot/axios'
import Cookies from 'js-cookie'

export default function freqService () {
  const { list, post, update, remove } = useApi('frequencia')
  const getFreqByAluno = async (id) => {
    const token = await Cookies.get('_myAppToken')
    try {
      const frequencia = await api.get('frequencia/aluno/' + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return frequencia.data
    } catch (error) {
      console.log('ocorreu um erro: ' + error)
    }
  }
  return {
    listFreq: list,
    postFreq: post,
    updateFreq: update,
    removeFreq: remove,
    getFreqByAluno
  }
}
