export class ApiAuthRequest {
    private email: string;
    private password: string;

    constructor(
        _email: string,
        _password: string
    ){
        this.email = _email;
        this.password = _password;
    }

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _password(): string {
        return this.password;
    }

    set _password(value: string) {
        this.password = value;
    }
}