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
    auth = firebase.auth()

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
      // Login
      const promise = auth.signInWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e.message))
    },
    signin: function () {
      // obtener email y password
      const email = $('#email').val()
      const pass = $('#passwd').val()
      const auth = firebase.auth()
      // registrarse
      const promise = auth.createUserWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e.message))
      this.$nextTick(function () {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
              console.log(firebaseUser)
            } else {
              console.log('not logged in')
            }
        })
      })
    },
    appAuth: function () {
      // Add a realtieme listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            console.log(firebaseUser)
          } else {
            console.log('not logged in')
          }
      })
    }
  },
  mounted: function () {
    $(document).foundation()
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          console.log(firebaseUser)
        } else {
          console.log('not logged in')
        }
    })
  }
})
