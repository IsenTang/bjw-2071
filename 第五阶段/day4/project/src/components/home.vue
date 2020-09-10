<template>
    <div>
        <Header></Header>
        <div>
            <div class="home-main">
                <p>欢迎加入半圆</p>
                <button>咨询</button>
            </div>

            <div>
                <img v-oss-src="'/home/pic_yingjian_support.png'" alt="">
                <img v-oss-src="'/training/pic_banner_zhiqian.png'" alt="">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./header"
import Footer from "./footer"
export default {
    name: 'home',
    data () {
        return {
        }
    },
    components:{
        Header, Footer
    }
}
</script>

<style>
.home-main{
    width: 100%;
    height: 300px;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-main p{
    height: 45px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    line-height: 45px;
    margin-bottom: 60px;

}

.home-main button{
    width: 280px;
    height: 55px;
    background-color: #fff;
    border-radius: 28px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-align: center;
    line-height: 55px;
    cursor: pointer;
    border: none;
    outline: none;
}
</style>