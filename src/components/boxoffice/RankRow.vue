<template>
          <tr>
          <td>{{ item.rank }}</td>
          <td>{{ item.movieNm }}</td>
          <td>{{ item.openDt }}</td>
          <td>{{ getaudiAcc }}</td>
          <td>{{ getsalesAcc }}</td>
          </tr>
</template>

<script>
export default { // props 부모로부터 전달받는 통로 (일반 통행)
    props: {
        item: Object
    },
    computed: {
        getaudiAcc() {
            return this.numberComma(this.item.audiAcc);
        },
        getsalesAcc() {
            return this.numberComma(this.item.salesAcc);
        }
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
}
</script>

<style>

</style>