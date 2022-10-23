<template>
	<div>
		<SliderTitle titleText="최근 업데이트 클래스" />
		<p class="thumb-txt">
			크리에이터가 최근 활동한 클래스에요.
		</p>
		<div class="lastest-list-wrap">
			<ul class="thumb-list">
				<li v-for="thumb in thumbList" :key="thumb.id" class="thumb-item">
					<ThumbBox :thumbData="thumb" :imgType="null" :isShowPrice="false" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import SliderTitle from './SliderTitle.vue';
import ThumbBox from './ThumbBox.vue';

export default {
	name: 'LastestList',
	components: {
		SliderTitle,
		ThumbBox
	},
	data() {
		return {
			thumbList: [
				{
					id: 1,
					imgUrl: "lastest1.webp",
					imgTxt: "호야초",
					tags: ["3D", "호야초"],
					title: "현직 10년차 디자이너의 블렌더로 완성하는 3D 애니메이션",
					favors: "11732",
					likes: "99",
					updatedTime: "15분 전"
				},
				{
					id: 2,
					imgUrl: "lastest2.webp",
					imgTxt: "이천당",
					tags: ["떡", "전통다과", "이천당"],
					title: "화과자, 더 고급스럽게! 전직 호텔조리사가 알려주는 '입문자를 위한 모던 화과자'",
					favors: "1426",
					likes: "97",
					updatedTime: "31분 전"
				},
				{
					id: 3,
					imgUrl: "lastest3.webp",
					imgTxt: "오이마트",
					tags: ["사진", "nmnu(최은영)", "오아시스"],
					title: "곰손도 괜찮아! 드로잉 그림책, 0원으로 기획부터 출판까지",
					favors: "8460",
					likes: "97",
					updatedTime: "36분 전"
				},
				{
					id: 4,
					imgUrl: "lastest4.webp",
					imgTxt: "소이그린",
					tags: ["영상", "소이그린"],
					title: "상황 4개로 끝내는 브이로그, 평범한 일상을 영화처럼 만드는 영상 제작법'",
					favors: "1403",
					likes: "",
					updatedTime: "37분 전"
				},
				{
					id: 5,
					imgUrl: "lastest5.webp",
					imgTxt: "최은영",
					tags: ["사진", "nmnu(최은영)"],
					title: "스마트폰 하나로 감성 가득한 나만의 브랜드 만들기",
					favors: "3165",
					likes: "92",
					updatedTime: "39분 전"
				},
				{
					id: 6,
					imgUrl: "lastest6.webp",
					imgTxt: "레전드 남캐 작가 쩐구",
					tags: ["사진", "nmnu(최은영)", "오아시스"],
					title: "레전드 남캐 작가 쩐구의 <유형별 남캐 디자인의 모든 것>",
					favors: "3165",
					likes: "92",
					updatedTime: "39분 전"
				},
				{
					id: 7,
					imgUrl: "lastest7.webp",
					imgTxt: "맥시",
					tags: ["캐릭터 드로잉", "맥시"],
					title: "사랑스러운 취향 가득, 맥시의 키치한 하이틴 일러스트",
					favors: "3029",
					likes: "100",
					updatedTime: "39분 전"
				},
				{
					id: 8,
					imgUrl: "lastest8.webp",
					imgTxt: "혀기야",
					tags: ["수채화", "혀기야 수채화"],
					title: "허기야 수채화의 맛깔스러운 수채화 표현 기법!",
					favors: "459",
					likes: "",
					updatedTime: "1시간 전"
				}
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
.lastest-list-wrap {
	margin-top: 24px;
}
.thumb-txt {
	font-size: 14px;
    font-weight: normal;
    color: rgb(162, 162, 162);
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 4px 0px 0px;
}
.thumb-list {
	overflow: hidden;
    list-style: none;
    margin: 0px -12px -32px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    place-content: stretch flex-start;
}
.thumb-item {
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 32px;
    box-sizing: border-box;

    a {
        display: block;
        text-decoration: none;
    }
}
</style>