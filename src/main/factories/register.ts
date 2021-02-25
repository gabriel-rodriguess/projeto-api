import { RegisterUserController } from '@/web-controllers'
import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list'
import { InMemoryUserRepository } from '@test/usecases/register-user-on-mailing-list/repository'

export const MakeRegisterUserController = (): RegisterUserController => {
    const inMemoryUserRepository = new InMemoryUserRepository([])
    const RegisterUserOnMailingListUseCase = new RegisterUserOnMailingList(inMemoryUserRepository)
    const registerUserController = new RegisterUserController(RegisterUserOnMailingListUseCase)
    return registerUserController
}