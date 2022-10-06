<template>
    <div class="navbar" >
        <div>
        <router-link :to="{name: 'home'}">Ponovno izberi valute in nastavitve</router-link>
        </div>  
    </div >
<template v-for="mojNastanitev in mojeNastanitve" :key="mojNastanitev.id">
    <div class="task">
    <h1>{{mojNastanitev.id}} {{mojNastanitev.name}}</h1>
    {{mojNastanitev.address}} | {{mojNastanitev.city}} | {{mojNastanitev.country}} | {{mojNastanitev.createdAt}}
        <div v-for="(mojoValuto,index) in mojeValute" :key="mojoValuto.valuto" >
           <h3> {{(parseFloat(mojeVrednoste[index]) * parseFloat(mojNastanitev.priceInEur)).toFixed(3)}} {{mojoValuto}} </h3>
        </div>
        <div style="text-align:right;">{{(mojNastanitev.avaliable) ? "Na voljo :)" : "Ni na voljo :("}}</div>
        </div>
    </template>
</template>
  <script>
  export default {
    name: 'FavouritesView',
    components: {
    },
    data () {
      return {
        mojeNastanitve: [],
        mojeValute: [], 
        mojeVrednoste: [],
       
      }
    },
    methods: {
        myPrice(vrednost, cenaEur) {
            var a = Number(vrednost)
            var b = Number(cenaEur)
            return a*b
        }
      },
      created () {
        this.mojeNastanitve = JSON.parse(this.$route.query.nastanitveObj)
        this.mojeValute = JSON.parse(this.$route.query.valuteObj)
        this.mojeVrednoste = JSON.parse(this.$route.query.vrednosteObj)
      },
}
  </script>
  
  
<style scope>
    .task {
      background: #f4f4f4;
      margin: 5px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .task h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navbar {
      overflow: hidden;
      background-color: #333;
    }
    
    .navbar a {
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    
    .navbar a:hover{
      background-color: red;
    }
    </style>