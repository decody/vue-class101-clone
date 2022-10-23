<template>
	<div class="content-box">
		<footer class="footer-wrap">
			<div class="footer-box">
				<div class="footer-copy-box">
					<div class="footer-logo">
						<img src="../../assets/home_logo.svg" alt="Class101" />
					</div>
					<p class="slogun">
						클래스101은 모든 사람이 사랑하는 일을 하며<br />
						살 수 있도록 세상을 바꾸고자 합니다.
					</p>
					<div class="lang">
						<p>kr 한국어</p>
					</div>
				</div>
				<div class="footer-menu">
					<div class="footer-col">
						<h5 class="footer-title">클래스101</h5>
						<div>
							<a href="/">홈</a>
							<a href="/">기업교육</a>
							<a href="/">채용</a>
							<a href="/">도움말</a>
						</div>
					</div>
					<div class="footer-col">
						<h5 class="footer-title">크리에이터</h5>
						<div>
							<a href="/">크리에이터 센터</a>
							<a href="/">정규 클래스 지원하기</a>
							<a href="/">도움말</a>
						</div>
					</div>
					<div class="footer-col">
						<h5 class="footer-title">고객센터</h5>
						<div class="qna-box">
							<button class="qna-button">문의하기</button>
							<div class="qna-guide">오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Footer',
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
.footerw-wrap {
	max-width: 1216px;
	margin: 0 auto;
}
.footer-box {
	display: flex;
	padding-top: 40px;
	padding-bottom: 64px;
}
.footer-copy-box {
	width: 366px;
	margin-top: 24px;
}
.footer-logo {
	width: 110px;
	height: auto;
	overflow: hidden;
}
.slogun {
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.15px;
	color: rgb(102, 102, 102);
	font-feature-settings: "case", "ss02";
	margin-top: 20px;
	font-style: normal;
}
.lang {
	color: rgb(26, 26, 26);
    padding: 8px 0px;
    margin-top: 12px;
    display: inline-block;
    cursor: pointer;
}
.footer-menu {
	display: flex;
	justify-content: space-between;
	margin-top: 24px;
	flex: 1 1 33.33%;
}
.footer-title {
	color: rgb(26, 26, 26);
	margin-bottom: 8px;
	padding: 0 14px 0;
	font-size: 16px;
	line-height: 24px;
}
.footer-col {
	width: 100%;
	a {
		display: flex;
		padding: 8px 12px;
		-webkit-box-align: center;
		align-items: center;
		text-decoration: none;
		font-size: 14px;
		font-weight: normal;
		color: rgb(26, 26, 26);
		line-height: 20px;
		letter-spacing: -0.15px;
	}
}
.qna-box {
	padding: 0 14px 0;
}
.qna-button {
	display: flex;
	vertical-align: middle;
	border-radius: 3px;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	letter-spacing: -0.15px;
	width: 100%;
	height: 40px;
	color: rgb(26, 26, 26);
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: rgb(248, 248, 248);
	transition: background-color 0.1s ease 0s;
	text-decoration-line: none;
	border: 0;

	&:hover,
	&:active {
		background-color: rgb(223, 223, 223);
	}
}
.qna-guide {
	text-align: center;
	padding-top: 12px;
	text-align: center;
	font-size: 14px;
	font-weight: normal;
	color: rgb(162, 162, 162);
	line-height: 20px;
	letter-spacing: -0.15px;
	margin: 0px;
}
</style>