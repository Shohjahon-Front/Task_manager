<template>
  <div class="home">
    <form @submit.prevent="addProject">
      <label>Title:</label>
      <input
        type="text"
        v-model="title"
      />
      <label>Deadline:</label>
      <textarea
        required
        v-model="deadline">
        </textarea>
      <button>Add Project</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddNewProject',

  data() {
    return {
      title: '',
      deadline: '',
      url: 'http://localhost:3000/projects',
    }
  },
  methods: {
    async addProject() {
      try {
        await axios.post(this.url, {
          title: this.title,
          deadline: this.deadline,
          completed: false,
        });
        (this.title = ''), (this.deadline = ''), this.$router.push('/')
      } catch (error) {
        console.error('Error adding project:', error)
      }
    },
  },
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Butun ekranni egallash */
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 89.5vh;
    border-radius: 5px;
    background: linear-gradient(135deg, #f0f4f8, #d9e6f2);
    font-family: Arial, sans-serif;
  }

  /* Forma uchun uslub */
  form {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
  }

  /* Label uslubi */
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
  }

  /* Input va Textarea uslubi */
  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 14px;
    background: #f9f9f9;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  input:focus, textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    outline: none;
  }

  /* Tugma uslubi */
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  button:active {
    background-color: #003f8a;
    transform: translateY(0);
  }
</style>
