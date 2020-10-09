<template>
    <Father>
        <div slot='child'>
            <div>child1</div> 
            <div>child2</div> 
            <div>child3</div> 
        </div>
    </Father>
</template>

<script>
import Father from './Father';

export default {
    components:{
        Father
    }
}
</script>

<style>

</style>
