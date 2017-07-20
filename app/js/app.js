var config = {
    apiKey: "AIzaSyC4EQlOx8CtiNqOT85PVXL5g-1YHnxypFo",
    authDomain: "nerdapp-252f5.firebaseapp.com",
    databaseURL: "https://nerdapp-252f5.firebaseio.com",
    projectId: "nerdapp-252f5",
    storageBucket: "",
    messagingSenderId: "942238883834"
  };
  firebase.initializeApp(config);

  var app = new Vue({
  el: '.container',
  data: {
  },
  computed: {

  },
  methods: {

  },
  mounted: function () {
    $(document).foundation()
  }

})
