<template>
    <div class="header-container">
        <img v-oss-src="'/commonbg/logo.png'" :style="{width: wid*2 + 'px'}" alt="">
        <ul class="ul">
            <li>首页</li>
            <li>之前集训</li>
            <li>高校俱乐部</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            wid: 100
        }
    }
}
</script>

<style>
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 2px 6px 10px #eee;
}
.ul{
    display: flex;
    flex-direction: row;
    align-items: center;

}
.ul li{
    list-style: none;
    margin-left: 20px;
}
</style>