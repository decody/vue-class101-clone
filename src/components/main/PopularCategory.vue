<template>
	<div class="popular-category-wrap">
		<SubTitle titleText="인기 카테고리" />
		<ul class="category-list">
			<li v-for="item in categories" :key="item.id" class="category-item">
				<CategoryLink 
					:subcopy="item.subcopy" 
					:title="item.title" 
				/>
			</li>			
		</ul>
		<div class="category-banner">
			<a href="/">
				<span>Class101+</span>
				<h6>위 모든 카테고리의 클래스를 하나의 구독으로 즐겨 보세요</h6>
			</a>
		</div>
	</div>
</template>

<script>
import CategoryLink from './CategoryLink.vue';
import SubTitle from './SubTitle.vue';

export default {
	name: 'PopularCategory',
	components: {
		CategoryLink,
		SubTitle
	},
	data() {
		return {
			categories: [
				{ id: 1, title: '디지털 드로잉', subcopy: '크리에이티브' },
				{ id: 2, title: '공예', subcopy: '크리에이티브' },
				{ id: 3, title: '드로잉', subcopy: '크리에이티브' },
				{ id: 4, title: '창업 부업', subcopy: '수익 창출' },
				{ id: 5, title: '베이킹 디저트', subcopy: '크리에이티브' },
				{ id: 6, title: '디자인', subcopy: '커리어' },
				{ id: 7, title: '운동', subcopy: '크리에이티브' },
				{ id: 8, title: '클래스 추천 받기', subcopy: '내게 맞는' },
			]
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

.popular-category-wrap {
	margin-top: 72px;
}
.category-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 -10px 20px;
}
.category-item {
	display: flex;
    flex: 1 1 25%;
    padding: 10px;
}
.category-banner {
	display: flex;
    width: 100%;
    height: 160px;
    padding: 0 60px;
    background-color: rgb(255, 93, 0);
    margin-bottom: 72px;
    border-radius: 14px;

    a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        text-decoration: none;
        font-size: 2rem;
        color: #fff;

		span {
			font-weight: 700;
		}
		h6 {
			font-size: 1.2rem;
		}

    }
}
 
</style>