export class User {
    userId: number;
    username: string;
    email: string;
    password: string;
    admin: boolean;
    pages: number[];

    public constructor(userId: number, username: string,email: string, password: string, admin: boolean, pages:number[]) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.pages = pages;
    }
}