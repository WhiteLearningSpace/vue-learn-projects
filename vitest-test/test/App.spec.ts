import { describe, expect, test, vitest } from 'vitest'
import App from '../src/App.vue'
import { mount } from '@vue/test-utils'
import TodoAdd from '../src/components/TodoAdd.vue'
import TodoList from '../src/components/TodoList.vue'
import TodoItem from '../src/components/TodoItem.vue'
import TodoFilter from '../src/components/TodoFilter.vue'

describe('测试所有Todo组件', () => {
  const app = mount(App)

  test('测试添加Todo', async () => {
    const todoAdd = app.findComponent(TodoAdd)
    // 添加10个todo
    for (let i = 0; i < 10; i++) {
      await todoAdd.find('input').setValue(`new todo ${i}`)
      await todoAdd.find('form').trigger('submit')
      expect(todoAdd.emitted()).toHaveProperty('addTodo')
      expect(todoAdd.emitted().addTodo[i]).toEqual([`new todo ${i}`])
    }
    const todoItems = app.findAll('.todo-item')
    console.log(`创建todo后的todo列表长度: ${todoItems.length}`)
    // 断言是否todoList的长度为10
    expect(todoItems).toHaveLength(10)
  })

  test('测试删除Todo', async () => {
    const todoList = app.findComponent(TodoList)
    const todoItem = todoList.findComponent(TodoItem)
    // 点击删除按钮
    await todoItem.find('.remove-btn').trigger('click')
    // 断言是否触发了removeTodo事件
    expect(todoItem.emitted()).toHaveProperty('removeTodo')
    // 断言是否传递了正确的参数
    expect(todoItem.emitted().removeTodo[0]).toEqual([10])
    const todoItems = app.findAll('.todo-item')
    console.log(`删除一个todo后的todo列表长度: ${todoItems.length}`)
    // 断言是否长度为9
    expect(todoItems).toHaveLength(9)
  })

  test('测试修改Todo', async () => {
    const todoList = app.findComponent(TodoList)
    const todoItem = todoList.findComponent(TodoItem)

    // 模拟用户点击编辑按钮
    await todoItem.find('.edit-btn').trigger('click')

    // 模拟用户在输入框中输入新的文本
    const newText = 'updated todo text'
    await todoItem.find('textarea').setValue(newText)

    // 模拟用户点击完成按钮
    await todoItem.find('.edit-done-btn').trigger('click')

    // 检查是否正确地触发了 editTodo 事件，并且检查该事件的参数是否正确
    expect(todoItem.emitted()).toHaveProperty('editTodo')
    expect(todoItem.emitted().editTodo[0]).toEqual([9, newText]) // 假设你正在编辑的 Todo 项的 id 是 9

    // 输出修改的todo文本
    console.log(`修改后的todo文本: ${todoItem.find('.text').text()}`)

    // 检查 Todo 项的文本是否已经被正确地更新
    expect(todoItem.find('.text').text()).toBe(newText)

  })

  test('测试删除所有Todo', async () => {
    const todoFilter = app.findComponent(TodoFilter)
    // 模拟confirm弹窗点击确定
    window.confirm = vitest.fn(() => true)
    // 点击删除所有按钮
    await todoFilter.find('.remove-all-btn.all').trigger('click')
    // 断言是否触发了removeAll事件
    expect(todoFilter.emitted()).toHaveProperty('removeAll')

    const todoItems = app.findAll('.todo-item')
    console.log(`删除所有todo后的todo列表长度: ${todoItems.length}`)
    // 断言是否删除成功
    expect(todoItems).toHaveLength(0)
  })
})