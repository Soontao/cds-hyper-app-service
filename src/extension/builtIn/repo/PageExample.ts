

export interface Page { rows?: number, offset?: number }

export class Example<T = any> {
  private example: Partial<T>;

  constructor(example: Partial<T>) {
    this.example = example;
  }

  public getExample() {
    return this.example;
  }

}

export class PageExample<T = any> extends Example<T> {

  private page: Page;

  constructor(example: T, page: Page) {
    super(example);
    this.page = page;
  }

  public getPage() {
    return this.page;
  }


} 
