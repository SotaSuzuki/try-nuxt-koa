import Router from 'koa-router'
import passport from 'koa-passport'
import InstagramPassport from 'passport-instagram'

const router = new Router()
const InstagramStrategy = InstagramPassport.Strategy

const INSTAGRAM_CLIENT_ID = ''
const INSTAGRAM_CLIENT_SECRET = ''
const INSTAGRAM_CALLBACK_URL = ''

passport.use(new InstagramStrategy({
  clientID: INSTAGRAM_CLIENT_ID,
  clientSecret: INSTAGRAM_CLIENT_SECRET,
  callbackURL: INSTAGRAM_CALLBACK_URL,
}, (accessToken, refreshToken, profile, cb) => {
  profile.accessToken = accessToken
  return cb(null, profile)
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((id, done) => {
  done(null, id)
})

router
  .get('/ping', (ctx) => { ctx.body = 'pong' })

  .get('/instagram', passport.authenticate('instagram'))

  .get('/instagram/callback',
    passport.authenticate('instagram', {
      successRedirect: '/settings',
      failureRedirect: '/',
    }))

export default router
