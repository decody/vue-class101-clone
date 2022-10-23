<template>
    <div>
        <div class="banner">
            <div class="banner-inner">
                <a href="/">
                    구독 오픈 기념! 선착순 100명 쿠팡이츠 4천원 쿠폰 &gt;
                </a>
                <button class="btn-close">닫기</button>
            </div>
        </div>
        <div class="header-wrap">
            <div class="headers">
                <a href="/">
                    
                </a>
                <div class="nav-wrap">
                    <nav class="nav">
                        <li class="nav-item">
                            <a href="#">구독</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">스토어</a>
                        </li>
                    </nav>
                    <div class="search">
                        <input type="text" class="input" placeholder="찾으시는 취미가 있나요?" />
                        <button class="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="m22.925 21.16-5.605-5.605A8.453 8.453 0 0 0 19 10.5 8.5 8.5 0 0 0 10.5 2 8.5 8.5 0 0 0 2 10.5a8.5 8.5 0 0 0 8.5 8.5c1.895 0 3.64-.63 5.055-1.68l5.605 5.605c.1.1.255.1.355 0l1.415-1.415a.246.246 0 0 0-.005-.35ZM4.5 10.5c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <ul class="utilmenu">
                    <li class="utilmenu-item">
                        <a href="#">크리에이터 지원</a>
                    </li>
                    <li class="utilmenu-item">
                        <a href="#">기업교육</a>
                    </li>
                    <li class="utilmenu-item">
                        <a href="#">로그인</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>

.banner {
    height: 50px;
    background-color: rgb(255, 76, 19);

    a {
        font-size: 14px;
        font-weight: normal;
        color: #fff;
        line-height: 20px;
        text-decoration: none;
    }
}
.banner-inner {
    width: 1216px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;   
}
.btn-close {
    margin-left: auto;
    color: #fff;
}
.header-wrap {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    height: auto;
    background: #fff;
    backdrop-filter: var(--bg-color);
}
.headers {
    display: flex;
    align-items: center;
    max-width: 1216px;
    margin: 0 auto;
    height: 78px;

    svg {
        display: block;
        width: auto;
        height: 24px;
        fill: #1a1a1a;
        margin-top: -3px;
    }
}
.nav-wrap {
    display: flex;
    align-items: center;
}
.nav {
    display: flex;
    align-items: center;
    margin-left: 40px; 
}
.nav-item {
    a {
        border-width: 0;
        color: #1a1a1a;
        margin: 0 10px;
        padding: 0;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1.625rem;
        white-space: nowrap;
        text-decoration: none;
    }
}
.utilmenu {
    margin-left: auto;
    display: flex;
    align-items: center;    
}
.utilmenu-item {
    a {
        border-width: 0px px;
        color: var(--system-on-color);
        margin: 0 0 0 24px;
        padding: 0px;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.125rem;
        text-decoration: none;
    }  
}
.search {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    width: 370px;
    height: 38px;
    margin-left: 30px;
    background: #f8f8f8;

    .input {
        width: calc(100% - 30px);
        height: 100%;
        padding: 0 10px;
        border: none;
        background: transparent;   
    }

    .search-button {
        width: 20px;
        height: 20px;
        margin-right: 10px;

        svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: #1a1a1a;
        }
    }  
}
</style>