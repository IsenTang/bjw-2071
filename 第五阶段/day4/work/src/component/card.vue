<template>
    <div class="card-container">
        <div class="card-info">
            <img :src="item.cover" alt="">
            <h1>{{ item.title }}</h1>

        </div>
        <p>{{ item.decp }}</p>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            item: {
                type: Object,
                require: true
            }
        }
    }
</script>

<style>
.card-container{
    padding-bottom: 50px;
}
.card-info img{
    width: 100%;
    height: 240px;
}
.card-info h1{
    font-size: 20px;
    padding-left: 10px;
    
}
</style>