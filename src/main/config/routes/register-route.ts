import { Router } from 'express'
import { MakeRegisterUserController } from '@/main/factories'
import { adaptRoute } from '@/main/config/adapters'


export default (router: Router): void => {
    router.post('/register', adaptRoute(MakeRegisterUserController()))
}