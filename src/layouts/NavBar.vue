<template>
  <div class="wrapper container mx-auto flex flex-row justify-center">
    <el-dropdown>
      <span class="el-dropdown-link tab">IDOL
        <el-icon class="el-icon-right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(value, name) in groups"><a class="w-52" @click="toGroup(name)">{{ value
          }}</a></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="tab">COMIC</div>
  </div>
</template>
<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import groups from '@/constant/group'
import { useRouter } from 'vue-router'
const router = useRouter()
const toGroup = (group: string) => {
  router.push({
    name: 'GROUPS',
    params: {
      groupName: group
    }
  })
}
// import { TabsPaneContext } from "element-plus";
// import { ref } from "vue";
// const activeName = ref('first')

</script>
<style lang="scss">
.tab {
  @apply text-xl mx-3 py-2 px-1
}
</style>