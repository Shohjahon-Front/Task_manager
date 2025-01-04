<template>
    <div class="single-project" :class="{ activeComplete: project.completed }">
        <div class="actions">
           <h3 @click="showDetails=!showDetails">{{ project.title }}</h3>
           <div class="icons">
                <span class="material-icons" @click="completeMethod">done</span>
                <span class="material-icons" @click="deleteProject">delete</span>
                <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
                    <span class="material-icons">edit</span>
                </router-link>
           </div>
        </div>
        <div class="deadline" v-if="showDetails">
            <p>{{ project.deadline }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SingleProdject',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showDetails: false
        }
    },
    methods: {
        async deleteProject() {
            const url = 'http://localhost:3000/projects/' + this.project.id
            try {
                await axios.delete(url)
                this.$emit('project-deleted', this.project.id)
            } catch (error) {
                console.error('Error deleting project:', error)
            }
        },
        async completeMethod() {
            const url = 'http://localhost:3000/projects/' + this.project.id
            try {
                await axios.patch(url, {
                    completed: !this.project.completed
                })
                this.$emit('project-updated', this.project.id)
            } catch (error) {
                console.error('Error updating project:', error)
            }
        }
    }
}
</script>

<style scoped>
    .single-project {
        padding: 10px 20px;
        margin: 20px auto;
        background: linear-gradient(135deg, #f0f4f8, #d9e6f2);
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
        border-left: 15px solid #e90074;
    }
    h3 {
        cursor: pointer;
    }
    .actions {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .deadline {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .icons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100px;
    }
    .material-icons {
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }
    .material-icons:hover {
        color: #777;
    }
    .material-icons:active {
        color: #555;
    }
    .activeComplete {
        border-left: 15px solid #00ff00;
    }
</style>