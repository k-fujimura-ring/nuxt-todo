import { mount } from '@vue/test-utils'
import todoForm from '@/components/todoForm.vue'

describe('todoForm', () => {
  const component = mount(todoForm)


  it('インスタンスができること', () => {
    expect(component.vm).toBeTruthy()
  })

  describe('onAdd', () => {

    it('newTodoが空の時はemitされないこと', () => {
      component.vm.onAdd()
      expect(component.emitted().addTodo).toBeFalsy()
    })

    it('inputイベントがemitされること', () => {
      component.setData({ newTodo: '牛乳を買う' })
      component.vm.onAdd()
      expect(component.emitted().addTodo).toBeTruthy()
      expect(component.emitted().addTodo.length).toEqual(1)
      expect(component.vm.newTodo).toEqual('')
    })

  })
})