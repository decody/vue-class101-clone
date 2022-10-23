<template>
	<div class="sub-title-wrap">
        <h3>{{titleText}}</h3>
    </div>
</template>

<script>
export default {
	name: 'SubTitle',
    props: {
        titleText: String
    },
	components: {
		
	},
	data() {
		return {
			
		}
	},
	created() {
	},
	mounted() {
	},
	methods: {
	},
}
</script>

<style lang="scss" scoped>
.sub-title-wrap {
    display: flex;
    font-size: 1.825rem;
    font-weight: 700;
    line-height: 2.25rem;

    h3 {
        border-width: 0px;
        color: #0c0c0c;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1.825rem;
    }
}
</style>