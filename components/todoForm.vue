<template lang="pug">
  v-row
    v-col
      v-form.d-flex.align-center
        v-select(
          :items="dropDownList",
          v-model="newTodoModels.category",
          label="カテゴリー"
        )
        v-text-field.ml-3(
          v-model="newTodoModels.text",
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
  SetupContext,
  computed,
  reactive,
 } from '@nuxtjs/composition-api'
 import { newTodoModels } from '@/models/todo'

export default defineComponent({
  setup(_, context: SetupContext) {
    const newTodoModels = reactive<newTodoModels>({
      text: '',
      category: '',
    })

    const onAdd = () => {
      if (newTodoModels.text && newTodoModels.category) {
        context.emit("addTodo", newTodoModels)
        newTodoModels.text = ''
        newTodoModels.category = ''
      }
    }

    const disabled = computed(
      () => {
        return !newTodoModels.text && !newTodoModels.category
      }
    )

    const dropDownList :string[] = ["買い物", "あとでやるもの", "その他"]

    return {
      newTodoModels,
      onAdd,
      disabled,
      dropDownList
    }
  },
})
</script>
