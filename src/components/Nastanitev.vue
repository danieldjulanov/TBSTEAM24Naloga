<template>
    <th scope="row" class="text-center" @click="$emit('toggle-view',nastanitev.id)">
        {{index}}
    </th>
        <td class="text-left">{{nastanitev.name}} </td>
        <td class="text-left"> {{nastanitev.priceInEur}}$</td>
        <td class="text-left"> <button class="btn btn-warning" style="color: white">
    Add to favourites
</button></td>
</template>

<script>
    export default {
        name: 'Nastanitev',
        props: {
            nastanitev: Object,
            index : null,
        }
    }
</script>

<style scope>
    .nastanitev {
        text-align: left;
      background: #b6c6e9;
      margin: 5px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .nastanitev h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    </style>