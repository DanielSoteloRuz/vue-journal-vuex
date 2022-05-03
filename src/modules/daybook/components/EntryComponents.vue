<template>
  <div class="entry-container mb-3 pointer p2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">29</span>
      <span class="mx-1 fs-5">Abril</span>
      <span class="mx-2 fw-light">2022, Viernes</span>
    </div>

    <div class="entry-description">
      Commodo laboris ex proident non aliqua laborum amet ad occaecat laboris. Sint aute ut reprehenderit quis mollit aute pariatur do ea consequat consequat officia velit eu. Lorem magna minim cupidatat ex dolore. Sunt ex veniam anim ullamco dolor enim cupidatat cillum et Lorem excepteur enim ut do. Ea aliquip aliqua amet in amet eiusmod est ullamco excepteur consectetur ullamco et consequat.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description {
      font-size: 12px;
    }
  }

</style>