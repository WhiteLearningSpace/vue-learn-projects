import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoAdd from '@/components/TodoAdd.vue'

describe('测试TodoAdd组件', () => {
  test('测试添加新的todo', async () => {
    const component = mount(TodoAdd)
    const inputElement = component.find('input')
    // 设置input的值
    await inputElement.setValue('new todo')
    // 断言input的值
    expect(inputElement.element.value).toBe('new todo')
    // 触发submit事件
    await component.find('form').trigger('submit')
    // 检查是否触发了 addTodo 事件
    expect(component.emitted()).toHaveProperty('addTodo')
    // 检查事件的有效载荷
    expect(component.emitted().addTodo[0]).toEqual(['new todo'])
  })

  test('测试添加空的todo', async () => {
    const component = mount(TodoAdd)
    const inputElement = component.find('input')
    // 设置input的值
    await inputElement.setValue('')
    // 断言input的值
    expect(inputElement.element.value).toBe('')
    // 触发submit事件
    await component.find('form').trigger('submit')
    // 检查是否触发了 addTodo 事件
    expect(component.emitted()).not.toHaveProperty('addTodo')
  })


})