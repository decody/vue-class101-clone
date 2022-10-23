<template>
	<div>
		<CategoryMenu />
		<MainCover />
		<div class="content-box">
			<MyClassSlider />
			<MdSlider />
			<TopTenSlider />
		</div>
		<BannerSection />
		<div class="content-box">
			<LastestList />
			<PopularCategory />
		</div>
	</div>
</template>

<script>
import CategoryMenu from '../components/main/CategoryMenu.vue';
import MainCover from '../components/main/MainCover.vue';
import MyClassSlider from '../components/main/MyClassSlider.vue';
import MdSlider from '../components/main/MdSlider.vue';
import TopTenSlider from '../components/main/TopTenSlider.vue';
import BannerSection from '../components/main/BannerSection.vue';
import LastestList from '../components/main/LastestList.vue';
import PopularCategory from '../components/main/PopularCategory.vue';

export default {
	components: {
		CategoryMenu,
		MainCover,
		MyClassSlider,
		MdSlider,
		TopTenSlider,
		BannerSection,
		LastestList,
		PopularCategory
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

<style scoped>

</style>
