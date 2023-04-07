import useApi from 'src/composables/useApi'

export default function profService () {
  const { list, post, update, remove, getById } = useApi('prof')

  return {
    listProf: list,
    postProf: post,
    updateProf: update,
    removeProf: remove,
    getByIProf: getById
  }
}
