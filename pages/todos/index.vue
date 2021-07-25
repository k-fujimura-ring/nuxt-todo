<template lang="pug">
  div
    todoForm
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import todoForm from '~/components/todoForm.vue'

export default defineComponent({
  components:{
    todoForm
  }
  // setup() {
    
  // },
})
</script>

