<template>
	<div class="myclass-slider-wrap">
		<SliderTitle titleText="내 클래스" />
		<div class="swiper-wrap">
			<div class="myclass-swiper">
                <swiper class="swiper" ref="swiper" :options="swiperOptions">
                    <swiper-slide v-for="slide in myClassData" :key="slide.id">
                        <ClassThumbBox :slideData="slide" />
                    </swiper-slide>
                </swiper>
			</div>
		</div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import SliderTitle from './SliderTitle.vue';
import ClassThumbBox from './ClassThumbBox.vue';

export default {
	name: 'MyClassSlider',
	components: {
        swiper,
        swiperSlide,
		SliderTitle,
        ClassThumbBox,
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
            myClassData: [
                {
                    id: 1,
                    imgUrl: "myclass_01.webp",
                    imgTxt: "디자인 시스템의 모든 것",
                    title: "UIUX 디자인이 쉬워지는 디자인 시스템의 모든 것",
                    classIng: "56",
                    validDate: "56"
                },
                {
                    id: 2,
                    imgUrl: "myclass_02.webp",
                    imgTxt: "화장품 패키지 디자인 실무",
                    title: "핵심만 쏙쏙! 20년 경력 디자이너가 알려주는 화장품 패키지 디자인 실무",
                    classIng: "15",
                    validDate: "108"
                },
                {
                    id: 3,
                    imgUrl: "myclass_03.webp",
                    imgTxt: "디자인 시스템의 모든 것",
                    title: "풀스택 웹 개발로 배우는 확진자 지도 서비스 만들기",
                    classIng: "28",
                    validDate: "20"
                },
                {
                    id: 4,
                    imgUrl: "myclass_04.webp",
                    imgTxt: "디자인 시스템의 모든 것",
                    title: "포토샵과 일러스트레이터로 시작하는 나만의 굿즈 제작",
                    classIng: "7",
                    validDate: "20"
                },
                {
                    id: 5,
                    imgUrl: "myclass_05.webp",
                    imgTxt: "디자인 시스템의 모든 것",
                    title: "크리에이터 & 사업자를 위한 셀프 디자인 (로고, 명함, 포스터, 스터커)",
                    classIng: "53",
                    validDate: "262"
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
.myclass-slider-wrap {
	display: flex;
    align-items: stretch;
    flex-direction: column; 
    margin-top: 40px;
}
.swiper-wrap {
	margin-top: 16px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
    }
}
.myclass-swiper {
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