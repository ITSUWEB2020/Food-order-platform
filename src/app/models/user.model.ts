export class User {
  username: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  balance: number;
  id?: number;

}
export class Login {
  id?;
  email: string;
  password: string;
}

export class Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  constructor(id: number, name: string, description: string) {
  }
}
