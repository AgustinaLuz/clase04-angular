export class Usuario {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public isTop10: boolean,
    public course: string,
    public averageGrades: number,
    public birthdate: Date,
  ) {}
}
