<template lang="pug">
  div
    todoForm(@addTodo="addTodo")
    todoList(:todoList="todoList", @changeColor="changeColor")
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import todoForm from '~/components/todoForm.vue'
import todoList from '~/components/todoList.vue'

interface todoList {
  text:     string,
  disabled: boolean,
  color:    string
}

export default defineComponent({
  components:{
    todoForm,
    todoList
  },
  setup() {
    const defaultColor: string = "#66cccc"
    const todoList = reactive<todoList[]>([
      {
        text:     '牛乳を買う',
        disabled: false,
        color:    defaultColor,
      },
      {
        text:     'ゴミを出す',
        disabled: false,
        color:    defaultColor,
      },
      {
        text:     '晩御飯を作る',
        disabled: false,
        color:    defaultColor,
      },
    ])
    const changeColor = (index: number) => {
      if (todoList[index].color === defaultColor) {
        todoList[index].color = "accent"
      } else {
        todoList[index].color = defaultColor
      }
    }
    const addTodo = (todo: string) => {
      todoList.push({
        text:     todo,
        disabled: false,
        color:    defaultColor,
      })
    }
    return {
      todoList,
      changeColor,
      addTodo
    }
  },
})
</script>

