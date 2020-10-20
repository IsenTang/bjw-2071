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


console.log('child');
export default {
    components:{
        Father
    }
}
</script>

<style>

</style>
