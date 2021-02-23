<template>
  <div class="about">
    <p v-for="item in list">
      <span>{{ item.name }}</span>
      <!-- <input type="text" v-model="item.value"> -->
    </p>
    <!-- <p v-for="(item, index) in list" :key="item.id">
      <span @click="remove(index)">{{ item.name }}</span>
      <input type="text" v-model="item.value">
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      list: [
        {name: 'A', id: 1, value: 'a'},
        {name: 'B', id: 2, value: 'b'},
        {name: 'C', id: 3, value: 'c'},
        {name: 'D', id: 4, value: 'd'},
        {name: 'E', id: 5, value: 'e'}
      ]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.list.splice(2, 0, {name: 'F', id: 6});
    }, 2000)
  },
  methods: {
    remove(index) {
      this.list.splice(index, 1);
    }
  },
}
</script>

<style lang="scss">
  
</style>