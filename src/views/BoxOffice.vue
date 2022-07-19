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
      title: '',
      selectedDate: '',
      list: [],
      pathName: ''
    }
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-','');
      this.getData(targetDt);
    },
    async getData(targetDt) {
            switch(this.pathName) {
        case 'boxOfficeByDay':
            this.list = (await this.getBoxOfficeByDay(targetDt))
                        .boxOfficeResult.dailyBoxOfficeList;
            break;
        case 'boxOfficeweek':
             this.list = (await this.getBoxOfficeweek(targetDt))
                        .boxOfficeResult.weeklyBoxOfficeList;
            break;
        }
    },

  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getOnlyDateStr(d);

  },
  updated(){
    this.pathName = this.$route.name;
    switch(this.pathName) {
        case 'boxOfficeByDay':
            this.title = '일간 박스오피스';
            break;
        case 'boxOfficeweek':
            this.title = '주간 박스오피스';
            break;
    }
  }
}
</script>

<style scoped>
</style>