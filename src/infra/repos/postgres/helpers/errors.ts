export class ConnectionError extends Error {
    constructor(error: Error) {
        super(`Failed to connect, reason: ${error.message}`)
        this.name = 'ConnectionError'
    }
}

export class ConnectionNotFoundError extends Error {
    constructor() {
        super('No connection was found')
        this.name = 'ConnectionNotFoundError'
    }
}


