<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <router-link  to="/add">Add Resto</router-link>
        <router-link to="/update">Update Resto</router-link>
        <a v-on:click="logout">LogOut</a>
    </div>
</template>
<script>
export default {
    name:'HeaderT',
    methods:{
         logout(){
            
               // alert("sign-up done")
               this.$router.push({name:'Login'})
           
        
            
        }
        }
}
</script>

<style scoped>
.header{
    background-color: #333;
    overflow: hidden;
}
.header a{
    float: left;
    color: aquamarine;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration:none ;
    margin: 6px ;

}
.header a:hover{
    background: aliceblue;
    color:#333;
    cursor: pointer;
}
</style>