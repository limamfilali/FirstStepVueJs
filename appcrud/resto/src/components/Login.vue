<template>
    <div>
    <img class="logo" src="../assets/logo.jpg" />
    <h1>resto food</h1>
    <div class="register">
        <input type="email" required v-model="email" placeholder="Entrer votre emeil" name="" id="">
        <input type="password" required v-model="password" placeholder="Entrer votre password" name="" id="">
        <button v-on:click="login" type="submit">Login</button><br><br>
        <button><router-link to="/sign-up">SignUp Page</router-link></button>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LoginP',
    data(){
        return{
            email:'',
            password:''
        }
    },
     methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.warn(result);
            if(result.status==200 && result.data.length>0){
               // alert("sign-up done")
               localStorage.setItem("user-info",JSON.stringify(result.data))
               this.$router.push({name:'Home'})
            }
            else{
                alert("dsl!!!")
            }
            
        }
        }
}

</script>
<style scoped>
.logo{
    width:100px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left:auto;
    border: 1px solid sandybrown;

     
 }   
 .register button{
     width:320px;
     height: 40px;
     border: 1px solid aqua;
     background: skyblue;
     color: aliceblue;
     cursor: pointer;
    }



</style>