import { RegisterUserController } from '@/web-controllers'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository'

export const MakeRegisterUserController = (): RegisterUserController => {
    const inMemoryUserRepository = new InMemoryUserRepository([])
    const RegisterUserOnMailingListUseCase = new RegisterUserOnMailingList(inMemoryUserRepository)
    const registerUserController = new RegisterUserController(RegisterUserOnMailingListUseCase)
    return registerUserController
}