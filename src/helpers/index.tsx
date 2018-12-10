export function* sleep(time: number) {
  yield new Promise(resolve => setTimeout(resolve, time * 1000));
}
