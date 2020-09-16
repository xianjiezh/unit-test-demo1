describe('第一个测试套件', () => {

  test('true', () => {
    expect(1 + 1 === 2).toBe(true)
  })

  test('加法', () => {
    expect(1 + 1).toEqual(2)
    // 
  })
  
  test('测试数组包含', () => {
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([3, 1]))
  })
  
  test('测试数组不包含', () => {
    expect([1, 2, 3, 4]).not.toEqual(expect.arrayContaining([3, 6]))
  })
})
