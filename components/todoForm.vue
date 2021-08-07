<template lang="pug">
  v-row
    v-col
      v-form.d-flex.align-center
        v-text-field(
          v-model="newTodo",
          label="新しいTodo"
        )
        v-btn.ml-3.font-weight-black(
          dark=true,
          color="secondary",
          :disabled="disabled"
          @click="onAdd"
        ) 追加する
</template>
<script lang="ts">
import { 
  defineComponent,
  ref,
  SetupContext,
  computed,
 } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(_, context: SetupContext) {
    const newTodo = ref<string>('')

    const onAdd = () => {
      if (newTodo.value) {
        context.emit("addTodo", newTodo.value)
        newTodo.value = ''
      } else {
        console.log('からだわ。。。')
      }
    }

    const disabled = computed(
      () => {
        return !newTodo.value
      }
    )

    return {
      newTodo,
      onAdd,
      disabled
    }
  },
})
</script>
