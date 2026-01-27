import { signal } from "@angular/core";
import { Utils } from "../utils/utils";



export class RepositoryLanguageModel {

    private name = signal<string>("");
    private usePercentage = signal<number>(0);
    private color = signal<string>("");

    setName(name: string): void {
        this.name.set(name);
        this.color.set( "rgb("+ Utils.randomIntFromInterval(0, 200) + "," + Utils.randomIntFromInterval(0, 200) + "," + Utils.randomIntFromInterval(0, 200)+")");        
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

    getColor(): string{
        return this.color();
    }
}