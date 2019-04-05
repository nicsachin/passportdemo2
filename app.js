const express = require('express')
const app = express()
const      passport = require('passport')
const      keys = require('./keys')
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
        clientID:     keys.googleClientId,
        clientSecret: keys.googleSecretId,
        callbackURL: "http://localhost:3000/auth/google/redirect",
        //passReqToCallback   : true
    },
    function( accessToken,refreshtoken,profile,done) {


        //console.log(accessToken)
        console.log(refreshtoken)
        console.log(profile)
        return done(null,profile)

    }
));
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']},{successRedirect: '/'}),(req,res)=>{
    res.redirect('/')
})

app.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('logged in!!')
})
const port = process.env.PORT || 3000

app.listen(port,()=>console.log('server started'))











































