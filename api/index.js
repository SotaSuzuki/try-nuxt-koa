import Router from 'koa-router'
import oauth from './oauth'

const router = new Router()

router.use('/api/oauth', oauth.routes())

export default router
