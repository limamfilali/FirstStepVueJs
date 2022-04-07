<template>
<div>
    <img class="logo" src="../assets/logo.jpg" />
    <h1>resto food</h1>
    <div class="register">
        <input type="text" v-model="nom" placeholder="Entrer votre nom" name="" id="">
        <input type="text" v-model="prenom" placeholder="Entrer votre prenom" name="" id="">
        <input type="email" v-model="email" placeholder="Entrer votre emeil" name="" id="">
        <input type="password" v-model="password" placeholder="Entrer votre password" name="" id="">
        <button v-on:click="signUp" type="submit">SignUp</button><br><br>
        <button><router-link to="/Login">Login</router-link></button>
    </div>
 </div>
</template>
<script>
import axios from 'axios';

export default {
    name : 'SignUp',
    data(){
        return{
            nom:'',
            prenom:'',
            email:'',
            password:''
        }
    } ,
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users",{
                nom:this.nom,
                prenom:this.prenom,
                email:this.email,
                password:this.password
            });
            console.warn(result);
            if(result.status==201){
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