export class Product {
  id;
  name;
  photo;
  price;
  userId;
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    if (props.price < 0) {
      throw new Error("price can't be negative");
    }
    this.photo = props.photo;
    this.price = props.price;
    this.userId = props.userId;
  }
}
