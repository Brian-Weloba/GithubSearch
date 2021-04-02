export class User {

  constructor(
    public name: string,
    public username: string,
    public details: string,
    public repos: string,
    public followers: number,
    public following: number,
    public location: string,
    public email: string,
    public url: string
  ){}
}
