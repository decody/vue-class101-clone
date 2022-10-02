<template>
    <div class="navbar">
        <h1>Class101</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>
.navbar {
    display: flex;
    min-height: 40px;
    padding: 10px;
    align-items: center;
    background-color: #eee;
}
.navbar h1 {
    padding: 0 .2em;
    font-size: 2rem;
}
.navbar a {
    padding: 0 .5em;
    color: #333;
    text-decoration: none;
}
.navbar a:hover {
    color: #f60;
}
</style>