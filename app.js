new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameStarted: false
  },
  methods: {
    startGame: function () {
      this.gameStarted = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    }
  }
})