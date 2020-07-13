import { AppComponent } from './app'

describe('todo-app', () => {
  test('Should be rendered', () => {
    const element = new AppComponent()
    const renderedElement = document.body.appendChild(element)
    expect(renderedElement.textContent).toBe(`Todo App`)
  })
})
