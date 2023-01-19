import useApi from 'src/composables/UseApi'

export default function alunoService () {
  const { list, post, update, remove, getById } = useApi('alunos')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
