import Category from "./Category";
import User from "./User";

export default interface Produto {
  id: number;
  name: string;
  validity: string;
  photo: string;
  description: string;
  quantity: number;
  price: number;
  category: Category | null;
  user: User | null;
}
