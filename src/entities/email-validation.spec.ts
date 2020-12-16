import { testEnvironment } from "../../jest.config"

import { Email } from './email'

describe('Email validation', () => {
    test('should not accept null strings', () => {
        const email = null
        expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept empty strings', () => {
        const email:string = ''
        expect(Email.validate(email)).toBeFalsy()
    })

    test('should accept valid email', () => {
        const email = 'any@email.com'
        expect(Email.validate(email)).toBeTruthy()
    })

    test('should not accept strings larger than 320 chars', () => {
        const email = 'l'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)
        expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept domain larger than 255 chars', () => {
        const email = 'local@'+ 'd'.repeat(128) + '.' + 'd'.repeat(127)
        expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept local part larger than 64 chars', () => {
        const email = 'l'.repeat(65) + '@email.com'
        expect(Email.validate(email)).toBeFalsy()
    })
})