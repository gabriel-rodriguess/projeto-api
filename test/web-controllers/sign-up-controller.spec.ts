import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list'
import { HttpRequest, HttpResponse } from '@/web-controllers/ports'
import { UserData } from '@/entities'
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports'
import { InMemoryUserRepository } from '@test/usecases/register-user-on-mailing-list/repository'
import { RegisterUserController } from '@/web-controllers/register-user-controller'

describe('Register user web controller', () => {
    test('Should return status code 201 when request contains valid user data', async () => {
        const request: HttpRequest = {
            body: {
                name: 'Any name',
                email: 'any@mail.com'
            }
        }

        const users: UserData[] = []
        const repo: UserRepository = new InMemoryUserRepository(users)
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
        const controller: RegisterUserController = new RegisterUserController(usecase)
        const response: HttpResponse = await controller.handle(request)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toEqual(request.body)
    })
})