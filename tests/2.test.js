import { getNameFromDockerImage } from '../src/util'


describe('getNameFromDockerImage', () => {
  test('getNameFromDockerImage 1', () => {
    expect(getNameFromDockerImage('harbor.sigsus.cn:8443/sz_gongdianju/apulistech/node:12')).toEqual('node:12')
  })
})