<template>
  <div>
      <div class="category-link-wrap">
        <nav>
            <a href="/">전체 카테고리</a>
            <a href="/">구독</a>
            <a href="/">BEST</a>
            <a href="/">이벤트</a>
            <a href="/">101 아카데미</a>
            <a href="/">신규 클래스</a>
            <a href="/">시그니처</a>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
	name: 'CategoryMenu',
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
.category-link-wrap {
	nav {
		display: flex;
		width: 1216px;
		height: 44px;
		margin: 0 auto;

		a {
			display: flex;
			padding-right: 32px;
			text-decoration: none;
			font-weight: 700;
			font-size: 16px;
			align-items: center;
			flex-direction: row;

			&:last-child {
				padding-right: 0;
			}
		}
	}
}
</style>