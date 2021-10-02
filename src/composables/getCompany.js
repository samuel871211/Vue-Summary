import fetchCompany from '../api/fetchCompany.js'
import { ref } from 'vue'

export default function getCompany() {
  const companys = ref([])
  companys.value = fetchCompany()
  return { companys }
}