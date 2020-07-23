// You may of course also outsource this script code into a separate file (e.g. app.js) and simply import this file here
var vm1 = new Vue({
  //element section
  el: "#app1",
  //data section
  data: {
    // etape 1
    secondCompteur: 0,
    //title: "Hello World!",
    link: "www.google.com",
    finishedLink: "<a href='www.google.com'>Google</a>",
    counter: 0,
    x: 0,
    y: 0,
    name: "ndeme yvan",
    result: "",
    // etape2 dinamic style
    attachRed: true,
    color: "green",
    //etape 3 conditions et listes
    show: true,
    ingredients: ["oil", "fruits", "cookies"],
    persons: [
      { name: "Ndeme yvan", age: 27, color: "red" },
      { name: "Micheal Nde", age: 60, color: "green" },
    ],
    //etape 4 premier project
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
    //etape 5 Comprendre l'instance de vuejs
    title: "The VueJS Instance",
    showParagraph: false,
  },
  // etape 3 computed section
  computed: {
    output: function () {
      console.log("ouput");
      return this.counter > 5 ? "grather than 5" : "small than 5";
    },
    divClasses: function () {
      return {
        red: this.attachRed == true,
        blue: !this.attachRed,
      };
    },
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  //method section
  methods: {
    show: function () {
      console.log("show");
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
    },
    updateTitle: function (title) {
      this.title = title;
    },
    monsterAttack: function () {
      var damage = this.calculateDammage(5, 18);
      this.playerHealth -= damage;
      this.checkwin();
      this.turns.unshift({
        isPlayer: false,
        text: "Le monstre a frapper le joeur de " + damage,
      });
    },
    checkwin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("Vous avez gagner")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("Vous avez Perdu")) {
          this.startGame();
        } else {
          this.gameIsRunning = true;
        }
        return true;
      }
      return false;
    },
    calculateDammage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    attack: function () {
      var damage = this.calculateDammage(3, 10);
      var damage = damage;

      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Le joeur a frapper le monstre de " + damage,
      });
      if (this.checkwin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function () {
      var damage = this.calculateDammage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Le joeur a frapper durement le monstre de " + damage,
      });
      if (this.checkwin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 80) {
        this.playerHealth += 15;
        this.turns.unshift({
          isPlayer: true,
          text: "Le joeur recupere " + 15 + " de vie",
        });
      } else {
        this.playerHealth = 100;
      }

      this.monsterAttack();
    },
    giveUp: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = false;
      this.turns = [];
    },
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    addIngredient: function () {
      this.ingredients.push("lol");
    },
    swith: function () {
      this.show = !show;
    },
    changeLink: function () {
      this.link = "apple.com";
    },
    changeGreeting: function (event) {
      this.title = event.target.value;
    },
    sayHello: function () {
      this.title = "mouf";
      return "Bonjour monsieur Ndeme , j'adore , le code et j'adore Vuejs";
    },
    // incrise: function(){
    // 	this.counter++;
    // 	this.result = this.counter >10 ? 'grather than 10' : 'small than 10';
    // },
    // dicrise: function(){
    // 	this.counter--;
    // 	this.result = this.counter >10 ? 'grather than 10' : 'small than 10';
    // },
    mouseMove: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function (event) {
      alert("key up");
    },
    result: function () {
      console.log("method");
      return this.counter > 5 ? "grather than 5" : "small than 5";
    },
  },
  //watch section pour les operations asynchrone
  watch: {
    counter: function (value) {
      var vn = this;
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    },
    title: function (value) {
      alert("Title changed, new value: " + value);
    },
  },
});

/*setTimeout(() => {
    vm1.title ='Change';
     vm1.show();
 }, 3000);*/

var vm2 = new Vue({
  // el:'#app2',
  data: {
    title: "Hello am app 2 title",
  },
  methods: {
    changeSomething: function () {
      // vm1.title="titre de vm1 changer par le click sur vm2"
      // this.$refs.myButton.innerText="Hello ref button";
      console.log(this.$refs);
    },
  },
  computed: {},
  watch: {},
});
vm2.$mount("#app2");

var vm3 = new Vue({
     el:"#app3",
//   template: "<h1>Hello Bro , i am a template think</h1>",
  data: {
    title: "Hello am app 3 title",
  },
  methods: {
    changeTitle: function() {
        this.title = "mouff";
    },
    destroy:function(){
        this.$destroy();
    }
  },
  computed: {

  },

  watch: {

  },
  //avant la creation
  beforeCreate: function () {
    console.log("beforeCreated");
  },
  //created
  created: function () {
    console.log("Created");
  },
  beforeMount: function () {
    console.log("beforeMounted");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate:function() {
    console.log("beforeUpdate");
  },
  updated:function() {
    console.log("updated");

  },
  beforeDestroy:function() {
    console.log("beforeDestroy");

  },
  destroyed:function() {
    console.log("destroyed");

  },
});

