import { ref } from 'vue'

export default function filterCompanyByNo (companys, searchQuery) {
    const filteredCompanys = ref([])
    filteredCompanys.value = companys.value.filter(company => {
        return company.CompanyNo.startsWith(searchQuery)
    })
    return { filteredCompanys }
}