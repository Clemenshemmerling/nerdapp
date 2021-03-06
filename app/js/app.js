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
    loginP: true,
    autentificado: false,
    partida: true,
    perfil: false,
    activeUser : null,
    btnPartida: true,
    selectOne: false,
    selectTwo: false,
    photo: false,
    video: false,
    texto: false,
    btnVideo: true,
    btnPic: true,
    btnTxt: true,
    temaVideo: false,
    temaPic: false,
    temaTxt: false,
    batallaPic: false,
    videoInfo: {
      tema: null,
      video: null,
      Userid: null,
    },
    allUsers: []
  },
  computed: {

  },
  methods: {
    fblogin: function () {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(provider)
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        console.log(error)
      });
    },
    Glogin: function () {
      // Login
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
       // This gives you a Google Access Token. You can use it to access the Google API.
       const token = result.credential.accessToken;
       // The signed-in user info.
       const user = result.user;
       // ...
       console.log(provider)
     }).catch(function(error) {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       const credential = error.credential;
       // ...
     });
    },
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
    },
    signOut: function () {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('desconectado')
      }, function(error) {
        // An error happened.
        console.log(error)
      });
    },
    appAuth: function () {
      // Add a realtieme listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            console.log(firebaseUser)
            this.loginP = false
            this.autentificado = true
            this.activeUser = firebaseUser
            this.allUsers.push({
              refreshToken: this.activeUser.refreshToken,
              displayName: this.activeUser.displayName,
              email: this.activeUser.email
            })
            if (this.activeUser.photoURL == null) {
              this.activeUser.photoURL = '../img/profile.png'
            }
          } else {
            console.log('not logged in')
            this.loginP = true
            this.autentificado = false
            this.activeUser = null
          }
      })
    },
    inicio: function () {
      this.perfil = false
      this.partida = true
    },
    option: function () {
      this.perfil = true
      this.partida = false
    },
    newGame: function () {
      this.btnPartida = false
      this.selectOne = true

    },
    seleVid: function () {
      this.selectTwo = true
      this.selectOne = false
      this.video = true
    },
    selePic: function () {
      this.selectTwo = true
      this.selectOne = false
      this.photo = true
    },
    seleTxt: function () {
      this.selectTwo = true
      this.selectOne = false
      this.texto = true
    },
    videoT: function () {
      this.btnVideo = false
      this.temaVideo = true
    },
    pictureT: function () {
      this.btnPic = false
      this.temaPic = true
    },
    textoT: function () {
      this.btnTxt = false
      this.temaTxt = true
    },
  },
  mounted: function () {
    $(document).foundation()
    this.appAuth()
  }
})
