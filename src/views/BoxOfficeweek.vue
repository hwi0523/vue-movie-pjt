<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <button @click="search">검색</button>
    </div>
    <rank-table :list="list"/>
  </div>

</template>

<script>
import RankTable from '../components/boxoffice/RankTable.vue';

export default {
    components: {
        RankTable
    },
  data() {
    return {
      title: '주간 박스 오피스',
      selectedDate: '',
      list: []
    }
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-','');
      this.getData(targetDt);
    },
    async getData(targetDt) {
      const data = await this.getBoxOfficeweek(targetDt)
      this.list = data.boxOfficeResult.weeklyBoxOfficeList;
    },

  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getOnlyDateStr(d);
  }
}
</script>

<style scoped>
</style>