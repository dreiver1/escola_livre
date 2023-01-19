import useApi from 'src/composables/UseApi'

export default function turmaService () {
  const { list, post, update, remove, getById } = useApi('turmas')

  return {
    listTurma: list,
    postTurma: post,
    updateTurma: update,
    removeTurma: remove,
    getByIdTurma: getById
  }
}
