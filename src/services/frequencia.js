import useApi from 'src/composables/UseApi'
import { api } from 'src/boot/axios'
export default function freqService () {
  const { list, post, update, remove } = useApi('frequencia')
  const getFreqByTurma = async (id) => {
    try {
      const frequencia = await api.get('frequencia/turma/' + id)
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
    getFreqByTurma
  }
}
