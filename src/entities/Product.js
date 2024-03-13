export class Product {
  id;
  name;
  measure;
  price;
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    if (props.price < 0) {
      throw new Error("price can't be negative");
    }
    this.measure = props.measure;
    this.price = props.price;
  }
}
