import useApi from 'src/composables/useApi'
import Cookies from 'js-cookie'
import { api } from 'boot/axios'

export default function alunoService () {
  const { list, post, update, remove, getById } = useApi('alunos')

  const getAlunoByturmaId = async (id) => {
    try {
      const token = await Cookies.get('_myAppToken')
      const request = 'http://localhost:3002/alunos/turma/' + id
      const { data } = await api.get(request, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      console.log('ocorreu um erro: ' + error)
    }
  }
  return {
    listAluno: list,
    postAluno: post,
    updateAluno: update,
    removeAluno: remove,
    getByIdAluno: getById,
    getByTurma: getAlunoByturmaId
  }
}
