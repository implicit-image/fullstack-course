import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"




const getAll = () => axios.get(baseUrl)

const create = newObj => axios.post(baseUrl, newObj)

const update = (id, newObj) => axios.put(`${baseUrl}/${id}`, newObj)

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const entryService = {
  getAll,
  create,
  update,
  remove
}

export default entryService
