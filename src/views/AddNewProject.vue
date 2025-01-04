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
        v-model="deadline"
      ></textarea>
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
        })
        ;(this.title = ''), (this.deadline = ''), this.$router.push('/')
      } catch (error) {
        console.error('Error adding project:', error)
      }
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  border: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #aaa;
  border-radius: 5px;
}

textarea {
  padding: 10px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 100px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  color: white;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
</style>
