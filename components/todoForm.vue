<template lang="pug">
  v-form.d-flex.align-center
    v-text-field(
      v-model="newTodo",
      label="新しいTodo"
    )
    v-checkbox(
      v-model="checked",
      :label="'純正'"
    )
    v-btn.ml-3(
      dark=true,
      color="#33CCFF",
      @click="onSubmit"
    ) 確認
</template>
<script lang="ts">
import { 
  defineComponent,
  ref,
  watch,
 } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const newTodo = ref<string>('')
    const checked = ref<boolean>(false)
    const onSubmit = () => {
    }
     
    return {
      newTodo,
      checked,
      onSubmit
    }
  },
})
</script>
