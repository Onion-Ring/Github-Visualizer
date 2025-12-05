import { signal } from "@angular/core";

export class RepositoryModel {

    private name = signal<string>("");
    private fullName = signal<string>("");
    private url = signal<string>("");
    private fork = signal<boolean>(false);
    private forkUrl = signal<string>("");
    private createdAt = signal<string>("");
    private updatedAt = signal<string>("");
    private pushedAt = signal<string>("");    

    getName(): string {
        return this.name();
    }
    getFullName(): string {
        return this.fullName();
    }
    getUrl(): string {
        return this.url();
    }
    getFork(): boolean {
        return this.fork();
    }
    getForkUrl(): string {
        return this.forkUrl();
    }
    getCreatedAt(): string {
        return this.createdAt();
    }
    getUpdatedAt(): string {
        return this.updatedAt();
    }
    getPushedAt(): string {
        return this.pushedAt();
    }

    setCreatedAt(value: string): void {
        this.createdAt.set(value);
    }
    setUrl(value: string): void {
        this.url.set(value);
    }
    setFullName(value: string): void {
        this.fullName.set(value);
    }
    setName(value: string): void {
        this.name.set(value);
    }
    setPushedAt(value: string): void {
        this.pushedAt.set(value);
    }
    setUpdatedAt(value: string): void {
        this.updatedAt.set(value);
    }
    setForkUrl(value: string): void {
        this.forkUrl.set(value);
    }
    setFork(value: boolean): void {
        this.fork.set(value);
    }
}