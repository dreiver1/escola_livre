import useApi from 'src/composables/UseApi'

export default function alunoService () {
  const { list, post, update, remove, getById } = useApi('alunos')

  return {
    listAluno: list,
    postAluno: post,
    updateAluno: update,
    removeAluno: remove,
    getByIdAluno: getById
  }
}
