<template>
  <div class="blank h-28"></div>
  <h2>produce cards</h2>
  <el-row class="flex-warp justify-center" type="flex">
    <el-col v-for="card in pIdols" :span="8" class="col m-8">
      <card-card
        :data="{ name: card.name, imagesrc: useGetUrlHash(produceIdolCard, card.id, 'jpg', card.hash) }"></card-card>
    </el-col>
  </el-row>
  <hr>
  <h2>support cards</h2>
  <el-row class="flex-warp justify-center" type="flex">
    <el-col v-for="card in sIdols" :span="8" class="col m-8">
      <card-card
        :data="{ name: card.name, imagesrc: useGetUrlHash(supportIdolCard, card.id, 'jpg', card.hash) }"></card-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import useGetIdolCards from "@/composables/useGetIdolCards";
import useGetUrlHash from "@/composables/useGetUrlHash"
import { useRoute } from "vue-router";
import idols from "@/constants/idols";
import CardCard from "@/components/CardCard.vue";
import { produceIdolCard, supportIdolCard } from '@/constants/paths'
import { ref, onMounted, Ref } from "vue";
const route = useRoute();
const id = idols.findIndex((item) => item.roman === (route.params.idolName as string)) + 1;
const pIdols: Ref<Array<any>> = ref([]);
const sIdols: Ref<Array<any>> = ref([]);
onMounted(async () => {
  const { produceIdols, supportIdols } = await useGetIdolCards(id)
  pIdols.value = produceIdols;
  sIdols.value = supportIdols;
})

</script>
<style lang="scss">
h2 {
  @apply text-center font-sans font-semibold text-2xl my-4;
}

.col {
  min-width: 250px;
  max-width: 350px;
}
</style>