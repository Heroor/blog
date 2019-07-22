function mock(data, {
  dir = 200,
  isResolve = true
} = {}) {
  return new Promise((resolve, reject) =>
    setTimeout(isResolve ? resolve : reject, dir, data))
}

export default function (Vue) {
  Object.defineProperty(Vue.prototype, 'mock', {
    value: mock
  })
}
