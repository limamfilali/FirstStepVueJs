<template>
<div>
     <Header />
    <h1>Hello {{name}} , Welcome on Home Page</h1>
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>City</th>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
         <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.contact}}</td>
        <td>{{item.city}}</td>
      </tr>
    </table>
   
  </div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
   name : 'HomeT',
   data(){
     return{
       name:'',
       restaurants:[],
       
     }
   },
   components:{
       Header
   },
   async mounted(){
     let user = localStorage.getItem('user-info');
     this.name=JSON.parse(user).name;
     let result = await axios.get("http://localhost:3000/restaurants");
     this.restaurants=result.data;

   }
   
}
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 80%;
  margin-left: 10%;
 
}
  td{
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  }
  th {
  background-color: #04AA6D;
  color: white;
}
</style>