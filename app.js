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
    },
    attack: function () {
      this.monsterHealth -= this.damageCal(10, 3);

      if (this.gameCheck()) {
        return;
      }

      this.playerHealth -= this.damageCal(12, 5);

      this.gameCheck();
    },
    specialAttack: function () {
      
    },
    heal: function () {
      
    },
    run: function () {
      
    },
    damageCal: function (max, min) {
      return damage = Math.max(Math.floor(Math.random() * max), min);
    },
    gameCheck: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('Monster defeated! Have another battle?')) {
          this.startGame()
        } else {
          this.gameStarted = false
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You have been killed... Another life?')) {
          this.startGame()
        } else {
          this.gameStarted = false
        }
        return true;
      }
      return false;
    }
  }
})