export class UserService {
    users = [];

    addUser(user) {
        this.users.push(user);
    }
}
