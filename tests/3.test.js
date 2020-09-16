import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import MyButton from '../src/component/MyButton'

describe('my button', () => {
  
  test('could receive text as child', () => {
    const testMessage = 'Test Message'
    render(<MyButton>{testMessage}</MyButton>)
    expect(screen.getByText(testMessage + '--YT')).toBeInTheDocument()
  })

  test('can fire click event', () => {
    const onClick = jest.fn()
    render(<MyButton onClick={onClick}>test</MyButton>)
    
    for (let i = 0; i < 10; i ++) {
      fireEvent.click(screen.getByText('test' + '--YT'))
    }
    expect(onClick.mock.calls.length).toBe(5)
  })

})