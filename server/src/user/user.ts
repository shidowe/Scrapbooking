export class User {
    userId: number;
    email: string;
    username: string;
    password: string;

    public constructor(userId: number, email: string, username: string, password: string) {
        this.userId = userId;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}