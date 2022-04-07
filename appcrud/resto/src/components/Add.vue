<template>
<div>
     <Header />
    <h1>Hello User , Welcome on Add Page</h1>
    <form  class="add">
        <input type="text"  v-model="name" placeholder="Entrer le nom de restaurant"/>
        <input type="text"  v-model="contact" placeholder="Entrer le contact de restaurant" />
        <input type="text"  v-model="city" placeholder="Entrer la ville de restaurant" />
        <button v-on:click="addRestaurant">Ajouter</button>
    </form>
   
  </div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
   name : 'AddT',
   components:{
    Header
},
data(){
    return {
        
            name:'',
            contact:'',
            city:''
        
    }
},
methods:{
    async addRestaurant(){
        const result = await axios.post("http://localhost:3000/restaurants",{
            name:this.name,
            contact:this.contact,
            city:this.city
        });
        if (result.status==201){
            alert("resto ajouté!!!");
            this.$router.push({name:'Home'});
        }

    }

}
   
}
</script>
<style scoped>
.add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left:auto;
    border: 1px solid sandybrown;
 } 
  .add button{
     width:320px;
     height: 40px;
     border: 1px solid aqua;
     background: skyblue;
     color: aliceblue;
     cursor: pointer;
    }  
</style>