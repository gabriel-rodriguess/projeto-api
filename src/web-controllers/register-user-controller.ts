import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list'
import { HttpRequest, HttpResponse } from './ports'
import { UserData } from '@/entities'
import { created, badRequest } from '@/web-controllers/util'

export class RegisterUserController {
    private readonly usecase: RegisterUserOnMailingList

    constructor (usecase: RegisterUserOnMailingList){
        this.usecase = usecase
    }

    public async handle(request: HttpRequest): Promise<HttpResponse> {
        const userData: UserData = request.body
        const response = await this.usecase.RegisterUserOnMailingList(userData)

        if(response.isLeft()){
            return badRequest(response.value)
        }

        if(response.isRight()){
            return created(response.value)
        }
    }
}