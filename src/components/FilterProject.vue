<template>
    <div class="filter-nav">
        <button @click="filterProjects('all')" :class="{ active: current === 'all' }">All |</button>
        <button @click="filterProjects('completed')" :class="{ active: current === 'completed' }">Completed |</button>
        <button @click="filterProjects('incomplete')" :class="{ active: current === 'incomplete' }">Incomplete</button>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: String,
            required: true
        }
    },
    name: 'FilterProject',
    methods: {
        filterProjects(filter) {
            this.$emit('filter-projects', filter)
        }
    }
}
</script>

<style scoped>  
.filter-nav {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.filter-nav button {
    background: none;
    border: none;
    color: #fff;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 5px;
    transition: 0.3s;
}
.filter-nav button:hover {
    color: #3498db;
}
.filter-nav button.active {
    color: #9199da;
}
</style>