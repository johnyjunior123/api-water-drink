export class User {
  id;
  name;
  email;
  password;
  role;
  constructor(attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.email = attributes.email;
    this.password = attributes.password;
    this.role = attributes.role;
  }
}
