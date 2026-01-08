import { signal } from "@angular/core";



export class RepositoryLanguageModel {

    private name = signal<string>("");
    private usePercentage = signal<number>(0);

    setName(name: string): void {
        this.name.set(name);
    }

    setUsePercentage(usePercentage: number): void {
        this.usePercentage.set(usePercentage);
    }

    getName(): string {
        return this.name();
    }

    getUsePercentage(): number {
        return this.usePercentage();
    }
}