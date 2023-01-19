import useApi from 'src/composables/UseApi'

export default function turmaService () {
  const { list, post, update, remove, getById } = useApi('turmas')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
