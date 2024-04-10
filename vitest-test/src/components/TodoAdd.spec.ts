import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoAdd from '@/components/TodoAdd.vue'

describe('测试TodoAdd组件', () => {

  test('测试添加新的todo', async () => {
    const component = mount(TodoAdd)
    // 设置input的值
    const inputElement = component.find('input')
    await inputElement.setValue('new todo')
    // 断言input的值
    expect(inputElement.element.value).toBe('new todo')
    // 触发submit事件
    await component.find('form').trigger('submit')
    // 检查是否触发了 addTodo 事件
    expect(component.emitted()).toHaveProperty('addTodo')
    // 检查事件的有效载荷
    await inputElement.setValue('new todo1')
    await component.find('form').trigger('submit')

    expect(component.emitted().addTodo[0]).toEqual(['new todo'])
    expect(component.emitted().addTodo[1]).toEqual(['new todo1'])
  })

})