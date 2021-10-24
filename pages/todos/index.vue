<template lang="pug">
  div
    todoForm(@addTodo="addTodo")
    todoList(:todoList="todoList", @changeColor="changeColor")
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import todoForm from '~/components/todoForm.vue'
import todoList from '~/components/todoList.vue'

import { todo } from '@/models/todo'

export default defineComponent({
  components:{
    todoForm,
    todoList
  },
  setup() {
    const defaultColor: string = "#66cccc"
    const todoList = reactive<todo[]>([
      {
        text:     '牛乳を買う',
        disabled: false,
        color:    defaultColor,
        category: '買い物'
      },
      {
        text:     'ゴミを出す',
        disabled: false,
        color:    defaultColor,
        category: 'その他'
      },
      {
        text:     '晩御飯を作る',
        disabled: false,
        color:    defaultColor,
        category: 'その他',
      },
    ])
    const changeColor = (index: number) => {
      if (todoList[index].color === defaultColor) {
        todoList[index].color = "accent"
      } else {
        todoList[index].color = defaultColor
      }
    }
    const addTodo = (todo: todo) => {
      todoList.push({
        text:     todo.text,
        disabled: false,
        color:    defaultColor,
        category: todo.category,
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

