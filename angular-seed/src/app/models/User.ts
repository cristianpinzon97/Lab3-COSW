export class User {
    public name: string;
public lastname: string;
public image: string;
public username: string;
public email: string;
public password: string;

constructor(name: string, lastname: string, image: string, username: string, email: string, password: string) {
            this.name = name;
            this.lastname = lastname;
            this.image = image;
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }