<template>
  <div id="app" class="container mt-5">
    
    <form @submit.prevent="calcularPromedio">
      <div class="form-group">
        <label for="nota1">Nota 1</label>
        <input
          type="number"
          class="form-control"
          id="nota1"
          v-model.number="notas.nota1"
          min="10"
          max="70"
          placeholder="Nota 1"
          required
        />
      </div>
      <div class="form-group">
        <label for="nota2">Nota 2</label>
        <input
          type="number"
          class="form-control"
          id="nota2"
          v-model.number="notas.nota2"
          min="10"
          max="70"
          placeholder="Nota 2"
          required
        />
      </div>
      <div class="form-group">
        <label for="nota3">Nota 3</label>
        <input
          type="number"
          class="form-control"
          id="nota3"
          v-model.number="notas.nota3"
          min="10"
          max="70"
          placeholder="Nota 3"
          required
        />
      </div>
      <div class="form-group">
        <label for="asistencia">Asistencia (%)</label>
        <input
          type="number"
          class="form-control"
          id="asistencia"
          v-model.number="notas.asistencia"
          min="0"
          max="100"
          placeholder="Asistencia"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>
    <div v-if="resultado">
      <p>{{ resultado }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: {
        nota1: '',
        nota2: '',
        nota3: '',
        asistencia: '',
      },
      resultado: '',
    };
  },
  methods: {
    calcularPromedio() {
      let promedio =
        this.notas.nota1 * 0.35 +
        this.notas.nota2 * 0.35 +
        this.notas.nota3 * 0.3;
      let asistencia = this.notas.asistencia;

      if (promedio >= 40 && asistencia >= 80) {
        this.resultado = `Aprobado con un promedio de ${promedio.toFixed(2)}`;
      } else {
        this.resultado = `Reprobado con un promedio de ${promedio.toFixed(2)}`;
      }
    },
  },
};
</script>

<style scoped>
    #app {
        width: 30%;
        margin: 0 auto;
        text-align: center;
    }
    
    
    h1, h2 {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        color: #333;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    

    .btn {
        margin-top: 20px;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
        border: none;
    }

    .btn-danger {
        background-color: #dc3545;
        color: white;
        border: none;
    }

    .empty-cart-message {
        font-style: italic;
        color: gray;
    }

    .total-label {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
    }
</style>
