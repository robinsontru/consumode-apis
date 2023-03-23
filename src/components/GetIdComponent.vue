<template>
    <main>
<h1>registrar nuevo usuario</h1>
<form  @submit=postUser()>
    <div>
    <label for="nomUser">NOMBRE</label>
    <input type="text"  id="nombreUser" v-model="usuarioNuevo.name">
</div>
<div>
    <label for="cityUser">Ciudad</label>
    <input type="text"  id="cityUser" v-model="usuarioNuevo.city">
</div>
<div>
    <label for="rolUser">Rol</label>
    <input type="text"  id="rolUser" v-model="usuarioNuevo.rol">
</div>
<button>crear</button>
<!-- <div>
    <label for="rolUser">rol</label>
    <input type="text"  id="rolUser" v-model="usuarioNuevo.rol">
</div> -->
</form>
    </main>
</template>
<script>


export default{
    name:'GetIdComponent',
    data(){
        return{
            usuarioNuevo:{
                name:'',
                city:'',
                rol:''
            }
        }
    },
    methods:{
        postUser(){
            axios
            .post('http://localhost:3000/api/usuarios',this.usuarioNuevo)
            .then((response)=>console.log(response))
        }
    }
}
</script>