export class Order {
  id;
  date;
  name;
  photo;
  type;
  price;
  quantity;
  total;
  userId;
  constructor(props) {
    this.id = props.id;
    this.date = props.date;
    this.name = props.name;
    this.photo = props.phot;
    this.type = props.type;
    this.price = props.price;
    this.quantity = props.quantity;
    this.total = props.total;
    this.userId = props.userId;
  }
}
