import { mount } from '@vue/test-utils'
import Index from '@/pages/todos/index.vue'

describe('todoForm', () => {
  const component = mount(Index,{
    created() {
      this.$vuetify.lang = {
        t: () => {},
      };
      this.$vuetify.theme = { dark: false };
    }
  })

  const defaultColor = "#66cccc"
  const todoList = [
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
  ]

  it('インスタンスができること', () => {
    expect(component.vm).toBeTruthy()
  })

  describe('changeColor', () => {

    it('色が変わること', () => {
      component.vm.changeColor(0)
      expect(component.vm.todoList[0].color).toBe('accent')
      component.vm.changeColor(0)
      expect(component.vm.todoList[0].color).toBe(defaultColor)
    })
  })

  describe('addTodo', () => {

    it('todoListに追加されること', () => {
      const text = 'うりゃあああ'
      component.vm.addTodo(text)
      expect(component.vm.todoList.length).toBe(4)
    })
  })
})