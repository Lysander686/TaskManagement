export default {
  authenticate (detail) {
    return new Promise((resolve, reject) => {
      (detail.username === 'sunny' || detail.username === 'sunny@TaskFocus.com') &&
      detail.password === 'JestRocks!'
        ? resolve({result: 'success'})
        : reject(new Error('Invalid credentials'))
    })
  }
}