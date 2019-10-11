
const sub = (x, y) => { return y-x }

const coder2 = new Vue({
  el: '#coder2',
  data: {
    guest: 'chaitanya',
    first: 'web',
    second: 4
  },
  computed: {
    mul: function () {
      const i = this.first.length;
      const j = parseInt(this.second)
      return `${this.guest}, your remaining length is ${sub(i, j)}.`
    }
  }
})