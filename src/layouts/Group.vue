<template>
  <el-row class="top-28 flex-warp justify-center" type="flex">
    <el-col v-for="idol in idolList" :span="8" class="col m-8">
      <router-link :to="{ name: 'idol', params: { idolName: idol.roman } }">
        <idol-card
          :data="{ name: idol.name, roman: idol.roman, imagesrc: 'https://idollist.idolmaster-official.jp/images/character_main/' + idol.roman + '_01.jpg' }"></idol-card>
      </router-link>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import IdolCard from "@/components/IdolCard.vue";
import { watch, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import usePickIdols from "@/composables/usePickIdols";
import idols from "@/constants/idols";

const route = useRoute();
let idolList: Ref<typeof idols> = ref(usePickIdols(route.params.groupName as string))
// onMounted(() => idolList.value = 
watch(() => route.params.groupName, (value) => idolList.value = usePickIdols(value as string))
// let imgsrc = (idol: typeof idols[0]) => `https://idollist.idolmaster-official.jp/images/character_main/${idol.roman}_01.jpg`
</script>
<style lang="scss">
.col {
  min-width: 250px;
  max-width: 350px;
}
</style>