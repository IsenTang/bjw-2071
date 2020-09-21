<template>
  <div class="about">
    <h1>{{ $store.state.count }}</h1>
    <h1>双倍{{ $store.getters.doubleCount }}</h1>
    <h1>isFinish是true的列表{{ $store.getters.finishList }}</h1>
  </div>
</template>

<script>
export default {
  
}
</script>
