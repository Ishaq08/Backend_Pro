class ApiResponse {
    constructor(stateCode, data, massage = "Success") {
        this.stateCode = stateCode
        this.data = data
        this.massage = massage
        this.success = statusCode < 400
    }
}