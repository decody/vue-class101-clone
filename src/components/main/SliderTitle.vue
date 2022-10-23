<template>
	<div class="title-wrap">
        <h3>{{titleText}}</h3>
    </div>
</template>

<script>
export default {
	name: 'SliderTitle',
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
.title-wrap {
    display: flex;
    margin-top: 48px;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;

    h3 {
        border-width: 0px;
        color: #0c0c0c;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.625rem;
    }
} 
</style>