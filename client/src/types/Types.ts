export type PasswordType = {
    id: any
    userId: string,
    password: string,
    criteria: CriteriaType,
    createdAt: Date
}

export type CriteriaType = {
    passwordLength: number,
    includeUppercase: boolean,
    includeLowercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean,
}