import useApi from 'src/composables/UseApi'

export default function profService () {
  const { list, post, update, remove, getById } = useApi('prof')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
