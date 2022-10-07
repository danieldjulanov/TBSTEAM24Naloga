<template>
    <div class="navbar" >
        <div>
        <router-link :to="{name: 'home'}">Ponovno izberi valute</router-link>
        </div>  
    <div >
        <router-link :to="{name: 'favourites', query: { valuteObj: JSON.stringify(vseValute),vrednosteObj: JSON.stringify(vseVrednoste) ,nastanitveObj: JSON.stringify(itemsSelected) }}">Moje nastanitve</router-link>
    </div>
</div>
<div>
        <span>Izberi filter:</span>
        <select class="form-select" style="margin:5px; margin-right:15px;" v-model="searchField">
            <option></option>
            <option value="name">Ime</option>
            <option value="country">Država</option>
            <option value="city">Mesto</option>
            <option value="address">Naslov</option>
        </select>
        <input type="text" id="searchValue" v-model="searchValue">
        <input style="margin-left: 50px;" type="checkbox" v-model="showAvb"/>
    </div>
<div v-if="!showAvb">
    <EasyDataTable
        v-model:items-selected ="itemsSelected"
        rows-per-page = 11
        :headers = "headers"
        :items = "nastanitve"
        :search-field="searchField"
        :search-value="searchValue">

        <template #expand="nastavitev">
            <div style="padding: 15px">
                Država: {{nastavitev.country}} <br/>
                Mesto: {{nastavitev.city}} <br/>
                Naslov: {{nastavitev.address}} <br/>
            </div>
        </template>
        
    </EasyDataTable>
</div>
<div v-if="showAvb">
    <EasyDataTable
        v-model:items-selected ="itemsSelected"
        rows-per-page = 11
        :headers = "headers"
        :items = "addValuta"
        :search-field="searchField"
        :search-value="searchValue">

        <template #expand="nastavitev">
            <div style="padding: 15px">
                Država: {{nastavitev.country}} <br/>
                Mesto: {{nastavitev.city}} <br/>
                Naslov: {{nastavitev.address}} <br/>
            </div>
        </template>
        
    </EasyDataTable>
</div>
</template>
<script>
import Nastanitev from './Nastanitev.vue';
export default {
    name: 'Nastanitve',
    props: {
        nastanitve: Array,
        vseValute: Array,
        vseVrednoste: Array,
    },
    components: {
    Nastanitev
},
data() {
return{
     headers: [
      { text: "#", value: "id" },
      { text: "Cena (v EUR)", value: "priceInEur", sortable: true },
      { text: "Ime", value: "name", sortable: true }
    ],
    itemsSelected: [],
    searchField : "",
    searchValue: "",
    showAvb: false,
}},
computed : {    
    addValuta() {
    return this.nastanitve.filter((nastanitev) => { 
      return nastanitev.avaliable
    });
  }

}}
</script>
<style scoped>
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
