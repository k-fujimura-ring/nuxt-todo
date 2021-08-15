import { mount } from '@vue/test-utils'
import todoList from '@/components/todoList.vue'

describe('todoList', () => {
  const defaultColor = "#66cccc"

  const propTodoList =[
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

  const component = mount(todoList, {
    propsData: {
      todoList: propTodoList
    },
  })


  it('インスタンスができること', () => {
    expect(component.vm).toBeTruthy()
  })

  describe('onClick', () => {

    it('inputイベントがemitされること', () => {
      component.vm.onClick()
      expect(component.emitted().changeColor).toBeTruthy()
      expect(component.emitted().changeColor.length).toEqual(1)
    })
  })
})
