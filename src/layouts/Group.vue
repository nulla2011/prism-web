<template>
  <el-row class="top-28">
    <el-col v-for="idol in idolList" :span="8"><idol-card
        :data="{ name: idol.name, roman: idol.roman, imagesrc: 'https://idollist.idolmaster-official.jp/images/character_main/' + idol.roman + '_01.jpg' }"></idol-card></el-col>
  </el-row>
</template>
<script setup lang="ts">
import IdolCard from "@/components/IdolCard.vue";
import { watch, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import usePickIdols from "@/composables/usePickIdols";
import idols from "@/constant/idols";

const route = useRoute();
let idolList: Ref<typeof idols> = ref(usePickIdols(route.params.groupName as string))
// onMounted(() => idolList.value = 
watch(() => route.params.groupName, (value) => idolList.value = usePickIdols(value as string))
// let imgsrc = (idol: typeof idols[0]) => `https://idollist.idolmaster-official.jp/images/character_main/${idol.roman}_01.jpg`
</script>