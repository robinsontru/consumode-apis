<template>
    <main>
        <h1>Registrar Nuevo Usurio</h1>
        <!-- PASO 3: Crear la Intefaz -->
        <form class="border p-2" @submit='postUser()'>
            <div class="mb-3">
                <label for="nomUser" class="form-label">Nombre</label>
                <input type="text" id="nomUser" class="form-control" v-model="usuarioNuevo.name">
            </div>
            <div class="mb-3">
                <label for="cityUser" class="form-label">Ciudad</label>
                <input type="text" id="cityUser" class="form-control" v-model="usuarioNuevo.city">
            </div>
            <div class="mb-3">
                <label for="rolUser" class="form-label">Rol</label>
                <input type="text" id="rolUser" class="form-control" v-model="usuarioNuevo.rol">
            </div>
            <br>
            
            <button class="btn btn-primary">Crear</button>
        </form>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    name:'PostComponent',
    data() {
        return {
            usuarioNuevo: {
                name:'',
                city: '',
                rol: ''
            }
        }
    },
    methods:{ 
        postUser() {
            axios 
                .post('http://localhost:3000/api/usuarios', this.usuarioNuevo)
               
                .then((response) => console.log(response))
        }
    }
}
</script>
<style scoped>

</style>

