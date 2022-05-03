<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">29</span>
      <span class="mx-1 fs-3">Abril</span>
      <span class="mx-2 fs-4 fw-light">2022, Viernes</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Borrar">
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Subir foto">
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué te paso hoy?"></textarea>
  </div>

  <FabComponents icon="fa-save"/>

  <img src="https://1.bp.blogspot.com/-YlBvOKg08Z0/XFHWx9mvNqI/AAAAAAAAk5o/gwaLpaIO8A8yUlumfyAKnPMUKHaf8tGcgCLcBGAs/w1200-h630-p-k-no-nu/5-Pintores-Importantes-de-Paisajes-Naturales_1.jpg" alt="entry-picture" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
  components: {
    FabComponents: defineAsyncComponent(() => import('@/modules/daybook/components/FabComponents.vue'))
  }
}
</script>

<style lang="scss" scoped>

  textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    resize: none;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom:  150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }

</style>