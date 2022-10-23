<template>
	<div>
		<SliderTitle titleText="MD 추천 클래스" />
		<div class="swiper-wrap">
			<div class="md-swiper">
                <swiper class="swiper" ref="swiper" :options="swiperOptions">
                    <swiper-slide v-for="slide in mdClassData" :key="slide.id">
                        <ThumbBox :thumbData="slide" :imgType="'long'" :isShowPrice="true" />
                    </swiper-slide>
                </swiper>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import SliderTitle from './SliderTitle.vue';
import ThumbBox from './ThumbBox.vue';

export default {
	name: 'MdSlider',
	components: {
		swiper,
        swiperSlide,
		SliderTitle,
        ThumbBox,
	},
	data() {
		return {
			swiperOptions: {
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    clickable: true
                }
            },
			mdClassData: [
                {
					id: 1,
					imgUrl: "750xauto_01.webp",
					imgTxt: "주연규PD",
					tags: ["주연규PD"],
					title: "(2022년 전면개정판) 가장 빠르게 돈 버는 유튜브 채널 만드는 방법",
					favors: "7795",
					likes: "97",
					updatedTime: null,
					discount: "19",
					monthPrice: "27416",
					payUnit: "12"
				},
				{
					id: 2,
					imgUrl: "750xauto_02.webp",
					imgTxt: "박세진",
					tags: ["박세진"],
					title: "220문자으로 토익부터 회화까지! 비즈니스 영어 완성",
					favors: "14384",
					likes: "98",
					updatedTime: null,
					discount: "18",
					monthPrice: "41700",
					payUnit: "5"
				},
				{
					id: 3,
					imgUrl: "750xauto_03.webp",
					imgTxt: "토익독학길잡이",
					tags: ["토익독학길잡이"],
					title: "국내 1위 토익 유튜버의 '해석을 위한 문법'",
					favors: "4505",
					likes: "97",
					updatedTime: null,
					discount: "19",
					monthPrice: "36200",
					payUnit: "5"
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
.md-slider-wrap {
	display: flex;
    align-items: stretch;
    flex-direction: column;
}
.swiper-wrap {
	margin-top: 16px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
    }
}
.md-swiper {
	overflow-x: clip;
	overflow-y: visible;

    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        top: -50px;
        left: inherit;
        right: 0;
        bottom: 0;
        width: 32px;
        height: 32px;
        margin: 0;
        background-image: none;

        &:after {
            color: #000;
            font-size: 18px;
        }
    }
    .swiper-button-prev {
        right: 40px;
    }
}   
</style>