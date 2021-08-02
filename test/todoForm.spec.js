import { mount } from '@vue/test-utils'
import todoForm from '@/components/todoForm.vue'

describe('NuxtLogo', () => {
  it('インスタンスができること', () => {
    const wrapper = mount(todoForm)
    expect(wrapper.vm).toBeTruthy()
  })
  it('watchのテスト', () => {
    const wrapper = mount(todoForm)

    wrapper.setData({ newTodo: '純正' });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.checked.value).toBeTruthy()
      done();
    });
  })

  it('watchのテスト2', () => {
    const wrapper = mount(todoForm)

    wrapper.setData({ newTodo: 'スバル' });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.checked.value).toBeFalsy()
      done();
    });
  })
})
