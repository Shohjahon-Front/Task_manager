<template>
  <div class="home">
    <div v-for="project in projects" :key="project.id">
      <SingleProdject :project="project" @project-deleted="handleProject" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SingleProdject from '../components/SingleProdject.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      projects: [],
    }
  },
  components: {
    SingleProdject
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/projects')
      this.projects = response.data
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  },
  methods: {
    handleProject(id) {
      this.projects = this.projects.filter(project => project.id !== id)
    }
  }
}
</script>