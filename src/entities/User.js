export class User {
  id;
  name;
  email;
  password;
  constructor(attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.email = attributes.email;
    this.password = attributes.password;
  }
}
