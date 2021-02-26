import { RegisterUserController } from '@/web-controllers'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository'
import { MongodbUserRepository } from '@/external/repositories/mongodb'

export const MakeRegisterUserController = (): RegisterUserController => {
    const mongoDbUserRepository = new MongodbUserRepository([])
    const RegisterUserOnMailingListUseCase = new RegisterUserOnMailingList(mongoDbUserRepository)
    const registerUserController = new RegisterUserController(RegisterUserOnMailingListUseCase)
    return registerUserController
}