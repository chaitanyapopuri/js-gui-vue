const mul = (x, y) => { return x * y }

const multipler = new Vue({
  el: '#multipler',
  data: {
    guest: 'Emmett',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your sum is ${mul(i, j)}.`
    }
  }
})