import request from 'supertest'
import app from '@/main/config/app'

describe('Registe route', () =>{
    test('Should return an account on success', async () => {
        app.post('/test_cors', (req, res) => {
            res.send()
        })

        await request(app)
            .post('/api/register')
            .send({
                name: 'Any name',
                email: 'any@mail.com'
            })
            .expect(201)
    })
})
