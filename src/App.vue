<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import '@/assets/scss/_index.scss';

export default {
	components: {
		Header,
		Footer,
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body {
	font-size: 14px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
