import useApi from 'src/composables/UseApi'

export default function mesService () {
  const { list, post, update, remove, getById } = useApi('mes')

  return {
    listMes: list,
    postMes: post,
    updateMes: update,
    removeMes: remove,
    getByIdMes: getById
  }
}
