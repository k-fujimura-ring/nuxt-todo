<template lang="pug">
  v-container.lighten-5
    v-row
      v-col やること
    v-row(
      v-for="(todo, index) in todoList",
      :key="index",
      no-gutters,
      justify="center",
      align="center"
    )
      v-col
        v-btn.mb-4(
          block,
          :color="todo.color",
          elevation="6",
          large,
          :disabled="todo.disabled"
          @click="onClick(index)"
        ) {{ todo.text }} 
</template>
<script lang="ts">

import { 
  defineComponent,
  ref,
  SetupContext,
} from '@nuxtjs/composition-api'

interface Props {
  todoList: object[]
}

export default defineComponent({
  props: {
    todoList: {
      type: Array
    }
  },
  setup(props: Props, context: SetupContext) {
    const onClick = (index: number) => {
      console.log(context)
      context.emit("changeColor", index);
    }
    return {
      onClick
    }
  },
})
</script>
