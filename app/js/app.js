var config = {
  apiKey: "AIzaSyC4EQlOx8CtiNqOT85PVXL5g-1YHnxypFo",
  authDomain: "nerdapp-252f5.firebaseapp.com",
  databaseURL: "https://nerdapp-252f5.firebaseio.com",
  projectId: "nerdapp-252f5",
  storageBucket: "nerdapp-252f5.appspot.com",
  messagingSenderId: "942238883834"
};
firebase.initializeApp(config);

var db = firebase.database(),
    auth = firebase.auth(),
    provider = new firebase.auth.GoogleAuthProvider()

  var app = new Vue({
  el: '.container',
  data: {
    autentificado: false,
    activeUser : null
  },
  computed: {

  },
  methods: {
    login: function () {
      // obtener email y password
      const email = $('#email').val()
      const pass = $('#passwd').val()
      const auth = firebase.auth()
      // registrarse
      const promise = auth.signInWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e.message))
    }
  },
  mounted: function () {
    $(document).foundation()
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.warn('no conectado');
      }
    });
  },
})
