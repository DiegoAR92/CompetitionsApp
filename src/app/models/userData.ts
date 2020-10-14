
export class UserData{

    public userName :string;
    public password :string;
    public email : string;
    
    constructor(user: string, pass: string, email: string){

      this.userName = user;
      this.password = pass;
      this.email = email;

    }

    
}