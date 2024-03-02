export default class ErrorRepository {
  constructor() {
    this.errorsStorage = new Map();
  }

  add(code, message) {
    this.errorsStorage.set(code, message);
    return this.errorsStorage;
  }

  translate(code) {
    if (!this.errorsStorage.has(code)) {
      throw new Error(`Unknown error. Code: ${code}`);
    } else {
      return this.errorsStorage.get(code);
    }
  }
}
