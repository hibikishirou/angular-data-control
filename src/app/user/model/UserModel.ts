export class UserModel {
  id: number;
  username: string;
  description: string;
  constructor(user?) {
    user = user || {};
    this.id = user.id;
    this.username = user.username || '';
    this.description = user.description || '';
  }
}
