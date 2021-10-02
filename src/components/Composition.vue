<template>
  <table>
    <thead>
      <tr>
        <th>CompanyName1</th>
        <th>CompanyName2</th>
        <th>Tel</th>
        <th>Address1</th>
        <th>Email</th>
        <th>BusinessHours</th>
        <th>Charges</th>
        <th>SportType</th>
        <th>SportType1</th>
        <th>CompanyNo</th>
        <th>LatLng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="companyObj in filteredCompanys" :key="companyObj">
        <td v-for="detail in companyObj" :key="detail">{{ detail }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import getCompany from '../composables/getCompany.js'
import filterCompanyByNo from '../composables/filterCompanyByNo.js'

export default {
  setup() {
    const { companys } = getCompany()
    const { filteredCompanys } = filterCompanyByNo(companys, '')
    return { filteredCompanys }
  },
}
</script>
