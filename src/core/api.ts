export const dummyApi = async <T>(data, timeout): Promise<T> => new Promise(resolve => {
  setTimeout(() => resolve(data), timeout)
})
