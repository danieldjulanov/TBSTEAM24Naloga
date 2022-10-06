<template>
  <div class="nastanitve">
    <Nastanitve :nastanitve="this.nastanitve" :vseValute="this.valute" :vseVrednoste="this.vrednoste"/>
  </div>
</template>
<script>
import Nastanitve from '../components/Nastanitve.vue'
export default {
  name: 'HomeView',
  components: {
    Nastanitve
  },
  data () {
    return {
      nastanitve:[],
      valute:[],
      vrednoste: []
    }
  },
  methods: {
    async getNastanitve() {
      const res = await fetch('https://5ddbbbd5041ac10014de14d7.mockapi.io/accommodations/prices')
      const data = await res.json()

      return data
    }
  },
  async created() {
   this.nastanitve = await this.getNastanitve()
   this.valute = JSON.parse(this.$route.query.valutaObj)
   this.vrednoste = JSON.parse(this.$route.query.vrednostObj)
  },
  
}
</script>

