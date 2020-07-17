new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameStarted: false,
    turns:[]
  },
  methods: {
    startGame: function () {
      this.gameStarted = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      var damage = this.damageCal(10, 3);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'You damage the monster for ' + damage
      })
      if (this.gameCheck()) {
        return;
      }

      this.monsterAttack();
    },
    specialAttack: function () {
      var damage = this.damageCal(20, 0)
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Magic gave the monster ' + damage + ' hit'
      })
      if (this.gameCheck()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'You healed 10'
      })
      this.monsterAttack();
    },
    run: function () {
      this.gameStarted = false;
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
    },
    monsterAttack: function () {
      var damage = this.damageCal(12, 5);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hit you for ' + damage
      })
      this.gameCheck();
    }
  }
})