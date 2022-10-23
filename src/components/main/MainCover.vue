<template>
	<div class="maincover-wrap">
		<div class="maincover-box">
			<div class="main-image">
				<img
					src="../../assets/main/750xauto.webp"
					alt="New Class"
				/>
			</div>
			<div class="main-copy">
				<h4>
					오픈 클래스 구경하고<br />
					10% 구폰 받으세요!
				</h4>
				<p>
					9월 5주차 막 오픈한<br />
					뉴-클래스에 10% 쿠폰까지
				</p>
				<div class="main-slide-nav">
					<div class="slide-count">
						<span>02</span>
						<span>06</span>
					</div>
					<div class="slide-line"></div>
					<span class="nav-btns">
						<button class="prev-btn">
							<!-- prev icon -->
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24" 
								height="24" 
								fill="none" 
								viewBox="0 0 24 24"
							>
								<path 
									fill-rule="evenodd" 
									d="M15.5 5.5l-6 6.5 6 6.5L14 20l-7.5-8L14 4l1.5 1.5z" fill="#1a1a1a"
								></path>
							</svg>
						</button>
						<button class="next-btn">
							<!-- next icon -->
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								height="24" 
								fill="none" 
								viewBox="0 0 24 24"
							>
								<path 
									fill-rule="evenodd" 
									d="M8.5 18.5l6-6.5-6-6.5L10 4l7.5 8-7.5 8-1.5-1.5z" fill="#1a1a1a"
								></path>
							</svg>
						</button>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PrevBtn from '../../assets/prev-icon.svg';
// import NextBtn from '../../assets/next-icon.svg';

export default {
	name: 'MainCover',
	components: {
		// PrevBtn,
		// NextBtn,
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
.maincover-wrap {
	position: relative;
	display: flex;
	height: 455px;
	margin-bottom: 20px;
	align-items: stretch;
	flex-direction: column;
	background-color: rgb(0, 0, 0);
}
.maincover-box {
	position: relative;
    width: 1216px;
    height: 455px;
    margin: 0 auto;
}
.main-image {
	position: absolute;
    top: 32px;
    left: 0;
    width: 676px;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.main-copy {
	float: right;
    position: relative;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    min-width: 450px;
    width: 516px;
    height: 455px;
    padding: 56px 0 32px 48px;
    z-index: 1;

    h4 {
        display: flex;
        white-space: pre-line;
        -webkit-box-align: center;
        align-items: center;
        max-width: 380px;
        color: rgb(255, 255, 255);
        font-size: 34px;
        line-height: 44px;
        font-weight: bold;
        letter-spacing: -0.02rem;
        word-break: keep-all;
        animation-duration: 600ms;
        animation-fill-mode: both;
        transition-timing-function: cubic-bezier(0, 0.63, 0.35, 1.01);
    }

    p {
        margin: 10px 0px 0px;
        white-space: pre-line;
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        line-height: 26px;
        max-width: 300px;
        font-weight: normal;
        animation-delay: 75ms;
        animation-duration: 600ms;
        animation-fill-mode: both;
        transition-timing-function: cubic-bezier(0, 0.63, 0.35, 1.01);
    }
}
.main-slide-nav {
	position: absolute;
    bottom: 30px;
    width: 468px;
    height: 32px;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.slide-count {
	display: flex;
    width: 50px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    cursor: default;
    margin-right: 8px;

    & span:nth-child(1) {
        margin-right: 10px;
    }
}
.slide-line {
	width: 300px;
    height: 6px;
    margin-right: 10px;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
.nav-btns {
	.prev-btn,
	.next-btn {
		width: 24px;
		height: 24px;
		background: transparent;
		cursor: pointer;

		svg {
			width: 100%;
			fill: none;
			opacity: 1;
			path {
				fill: #fff;
			}
		}
	}
	.prev-btn {
		margin-right: 6px;
	}
}

</style>