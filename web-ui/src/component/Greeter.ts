export class Greeter {
    to: string;
    constructor(to: string) {
        this.to = to;
    }
    getGreeting():string {
        return `Hi {this.to}!`;
    }
}