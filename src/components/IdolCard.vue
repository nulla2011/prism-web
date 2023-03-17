<template>
  <el-card :body-style="{ padding: '0px' }" class="m-8">
    <router-link :to="{ name: 'idol', params: { idolName: data.roman } }">
      <div class="img-container w-full h-auto overflow-hidden">
        <el-image :src="data.imagesrc" class="image duration-200" />
      </div>
      <div class="text-center p-3 text-xl font-sans font-medium bg-white">{{ data.name }}</div>
    </router-link>
  </el-card>
</template>
<script setup lang="ts">
let props = defineProps<{ data: { name: string, roman: string, imagesrc: string } }>()
</script>
<style lang="scss" scoped>
.img-container {
  aspect-ratio: 16/9;
}

.image:hover {
  scale: 1.12;
}
</style>