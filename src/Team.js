// нельзя добавлять в команду несколько раз одного и того же персонажа!
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw Error('Такой персонаж уже существует в команде');
    }
    this.members.add(character);
    return [...this.members];
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
    return [...this.members];
  }

  toArray() {
    return [...this.members];
  }
}
