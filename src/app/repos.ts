export class Repos {
  constructor(
    public name: string,
    public description: string,
    public html_url: string,
    public forks: number,
    public watchers_count: number,
    public language: string,
    public created_at: Date
  ) {}
}