<template>
  <el-row>
    <el-col></el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import usePickIdols from "@/composables/usePickIdols";
const route = useRoute()
console.log(usePickIdols(route.params.groupName as string))
</script>