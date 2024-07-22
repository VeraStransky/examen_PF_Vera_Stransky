<template>
  <div id="app" class="container mt-5">
    <form @submit.prevent="registrarUsuario">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          v-model.trim="registro.nombre"
          required
        />
      </div>
      <div class="form-group">
        <label for="correo">Correo</label>
        <input
          type="email"
          class="form-control"
          id="correo"
          v-model.trim="registro.correo"
          required
        />
      </div>
      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="contrasena"
          v-model="registro.contrasena"
          required
        />
      </div>
      <div class="form-group">
        <label for="repetirContrasena">Repetir Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="repetirContrasena"
          v-model="registro.repetirContrasena"
          required
        />
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
    <div v-if="mensajeError" class="alert alert-danger mt-3">
      <p>{{ mensajeError }}</p>
    </div>
    <div v-if="mensajeExito" class="alert alert-success mt-3">
      <p>{{ mensajeExito }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registro: {
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: '',
      },
      mensajeError: '',
      mensajeExito: ''
    };
  },
  methods: {
    validarCorreo(correo) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(correo);
    },
    registrarUsuario() {
      if (!this.validarCorreo(this.registro.correo)) {
        this.mensajeError = 'El correo no tiene un formato válido';
        this.mensajeExito = '';
        return;
      }

      if (this.registro.contrasena !== this.registro.repetirContrasena) {
        this.mensajeError = 'Las contraseñas no coinciden';
        this.mensajeExito = '';
        return;
      }

      this.mensajeError = '';
      this.mensajeExito = 'El registro se ha realizado correctamente';
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.registro.nombre = '';
      this.registro.correo = '';
      this.registro.contrasena = '';
      this.registro.repetirContrasena = '';
    },
  },
};
</script>

<style scoped>
.container {
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 20px;
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background-color: darkgreen;
}

button:active {
  border: 2px solid black;
}

.alert {
  margin-top: 20px;
}
</style>
