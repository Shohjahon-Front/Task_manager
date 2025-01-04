<template>
  <div class="home">
    <FilterProject @filter-projects="currentFilter=$event" :current="currentFilter" />
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject :project="project" @project-deleted="handleProject" @project-updated="handleComplete" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SingleProject from '../components/SingleProdject.vue'
import FilterProject from '../components/FilterProject.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      projects: [],
      currentFilter: 'all'
    }
  },
  components: {
    SingleProject,
    FilterProject
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects
      } else if (this.currentFilter === 'completed') {
        return this.projects.filter(project => project.completed)
      } else if (this.currentFilter === 'incomplete') {
        return this.projects.filter(project => !project.completed)
      }
    }
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
    },
    handleComplete(id) {
      this.projects = this.projects.map(project => {
        if (project.id === id) {
          project.completed = !project.completed
        }
        return project
      })
    }
  }
}
</script>