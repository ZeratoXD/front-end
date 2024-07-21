import Product from "./Product";

export default interface User {
  id: number;
  name: string;
  password: string;
  type: string;
  email: string;
  photo: string;
  product?: Product | null;
}
