class MyPromise {
  #state = "pending";
  #value;
  #error;
  #handlers = [];
​
  constructor(executor) {
    try {
      executor(
        value => this.resolve(value),
        error => this.reject(error)
      );
    } catch (error) {
      this.reject(error);
    }
  }
​
  then(onFulfilled, onRejected) {
    const handler = {
      onFulfilled,
      onRejected
    };
​
    if (this.#state === "pending") {
      this.#handlers.push(handler);
    } else {