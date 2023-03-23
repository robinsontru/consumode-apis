<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>lista de usuarios</h1>
      <table class="table table-primary table-bordered border-primary">
        <thead>
            <tr class="table-warnig" >
                
                <td>ID</td>
                <td>Nombre</td>
                <td>Ciudad</td>
                <td>Rol</td>
                <td>Accion</td>

            </tr>
        </thead>

      </table>
      <tbody>
        <tr v-for="usuario in usuarios" v-bind:key="usuario" >
            <td>{{usuario.id}}</td>
            <td>{{usuario.name}}</td>
            <td>{{usuario.city}}</td>
            <td>{{usuario.Rol}}</td>
           

        </tr>

      </tbody>


      <GetComponente></GetComponente>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
  import GetComponente from '@/components/GetComponente.vue'
  
  export default {
    name: 'HomeView',
    components: {
    //   HelloWorld,
      GetComponente
      
    }
  }
  </script>
  