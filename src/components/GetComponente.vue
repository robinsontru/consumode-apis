<template>
    <div>
        <!-- PASO 3. Crear la Interfaz para mostrar los datos -->
        <h1> Listado de Usuarios</h1>
        <!-- // crear la Tabla para organizar los Datos -->
        <table class="table table-primary table-bordered border-secondary">
            <!-- crear encabezados para los Titulos -->
            <thead>
                <tr class="table-danger">
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>CIUDAD</td>
                    <td>ROL</td>
                    <td>ACCION</td>
                </tr>
            </thead>
            <!-- // crear el cuerpo de la tabla para ubicar los datos -->
            <tbody>
                <!-- // Recorrer los datos de la Variable Usuarios mediante V-for -->
                <tr v-for="usuario in usuarios" v-bind:key="usuario">
                    <!-- // interpolar los datos del arreglo en cada celda -->
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.city }}</td>
                    <td>{{ usuario.rol }}</td>
                    <td>
                        <input type="button" value="Editar" class="btn btn-primary">
                        
                        <input type="button" value="Elimiinar" class="btn btn-danger">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default{
    name:'GetComponente',
    data(){
        return{
            usuarios:[]
        }
    },
    async mounted(){
        await this.axios.get('http://localhost:3000/api/usuarios')

        .then(response =>{
            this.usuarios= response.data;
            console.log(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })
}

}


</script>

<style scoped>

</style>