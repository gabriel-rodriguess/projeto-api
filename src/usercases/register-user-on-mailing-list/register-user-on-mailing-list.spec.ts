import { UserRepository } from './ports/user-repository'
import { UserData } from '../../entities/user-data'
import { InMemoryUserRepository } from './repository/in-memory-user-repository'
import { RegisterUserOnMailingList } from './register-user-on-mailing-list'
import { left } from '../../shared/either'
import { InvalidEmailError } from '../../entities/errors/invalid-email-error'

describe('Register user on mailing list use case', () => {
    test('should add user with complete data to mailing list',async () =>{
        const users: UserData[] = []
        console.log(users)
         const repo: UserRepository = new InMemoryUserRepository(users)
         const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
         const name = 'any_name'
         const email = 'any@email.com'
         const response = await usecase.RegisterUserOnMailingList({name , email})
         const user = repo.findUserByEmail('any@email.com')
         expect((await user).name).toBe('any_name')
         expect(response.value.name).toBe('any_name')
    })

    test('should not add user with invalid email to mailing list',async () =>{
        const users: UserData[] = []
        console.log(users)
         const repo: UserRepository = new InMemoryUserRepository(users)
         const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
         const name = 'any_name'
         const invalidEmail = 'invalid_email'
         const response = await usecase.RegisterUserOnMailingList({name: name , email: invalidEmail})
         const user = await repo.findUserByEmail('any@email.com')
         expect(user).toBeNull()
         expect(response).toEqual(left(new InvalidEmailError()))
    })
    
})