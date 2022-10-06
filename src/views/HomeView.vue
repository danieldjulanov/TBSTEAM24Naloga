<template>
  <div class="container">
    <h3>Prosim izberite si svojo valuto</h3>
    <form @submit.prevent="handleSubmit">
    <div class="form-group form-check" v-for="(currency,index) in currencies.rates" :key="index">
      <input style="margin-right: 5px;" type="checkbox" v-model="valuta" :value="index" :id="index" @change="addValuta(currency,$event)"/>
      <label  class="form-check-label" :for="index">{{currency}} {{index}}</label>
    </div>
      <br/>
     </form>
  </div>
  <router-link class="btn btn-primary mt-2" :to="{name: 'nastanitve', query: { valutaObj: JSON.stringify(valuta), vrednostObj: JSON.stringify(vrednost) }}">Nadaljuj</router-link>
 
</template>

<script>
 
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      currencies: [],
      valuta: [],
      vrednost: []
    }
  },
  methods: {
    async getCurrencies() {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/EUR')
      const data = await res.json()

      return data
    },
    addValuta: function(index,e) {
        if(!this.vrednost.includes(index)){          //checking weather array contain the id
          this.vrednost.push(index);               //adding to array because value doesnt exists
          }
          else{
          this.vrednost.splice(this.vrednost.indexOf(index), 1);  //deleting
          }
    }
  },
  async created() {
   this.currencies = await this.getCurrencies()
  },
}
</script>