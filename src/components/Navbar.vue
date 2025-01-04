<template>
    <div class="navbar">
        <router-link to="/">HOME</router-link>
        <router-link to="/add">ADD A NEW PROJECT</router-link>
    </div>
</template>



<style>
    .navbar {
        display: flex;
        justify-content: space-around;
        padding: 10px;
        background: #333;
        border-bottom: 1px solid #d9e6f2;
        border-radius: 4px;
    }
    .navbar a {
        text-decoration: none;
        color: #2c3e70;
        font-size: 25px;
        transition: 0.3s;
    }
    .navbar a:hover {
        color: #3498db;
        border-bottom: 2px solid #3498db;
        padding-bottom: 4px;
    }
</style>