<template>
  <div class="wrapper container mx-auto absolute flex flex-row justify-center">
    <el-dropdown>
      <span class="el-dropdown-link tab">IDOL
        <el-icon class="el-icon-right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="group in groups"><router-link :to="{ name: group }" class="w-52">{{ group
          }}</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="tab">COMIC</div>
  </div>
</template>
<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { groups } from '@/constant/group'
// import { TabsPaneContext } from "element-plus";
// import { ref } from "vue";
// const activeName = ref('first')

</script>
<style lang="scss">
.tab {
  @apply text-xl mx-3 py-2 px-1
}
</style>