<template lang="pug">
  v-form.d-flex.align-center
    v-text-field(
      v-model="newTodo",
      label="新しいTodo"
    )
    v-btn.ml-3(
      dark=true,
      color="#33CCFF",
      @click="onSubmit"
    ) 送信
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const newTodo :string = ''
    const onSubmit = () => {
      console.log('まじ卍')
    }
    return {
      newTodo,
      onSubmit
    }
  },
})
</script>
