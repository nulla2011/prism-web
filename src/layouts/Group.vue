<template>
  <el-row>
    <el-col v-for="idol in idolList"><idol-card :idolData="idol"></idol-card></el-col>
  </el-row>
</template>
<script setup lang="ts">
import IdolCard from "@/components/IdolCard.vue";
import { watch, Ref, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import usePickIdols from "@/composables/usePickIdols";
import idols from "@/constant/idols";

const route = useRoute();
let idolList: Ref<typeof idols> = ref(usePickIdols(route.params.groupName as string))
// onMounted(() => idolList.value = 
watch(() => route.params.groupName, (value) => idolList.value = usePickIdols(value as string))
</script>