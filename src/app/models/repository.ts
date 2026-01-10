import { signal } from "@angular/core";
import { RepositoryLanguageModel } from "./repository-language";
import { RouterTestingHarness } from "@angular/router/testing";

export class RepositoryModel {

    private name = signal<string>("");
    private fullName = signal<string>("");
    private url = signal<string>("");
    private fork = signal<boolean>(false);
    private forkUrl = signal<string>("");
    private createdAt = signal<string>("");
    private updatedAt = signal<string>("");
    private pushedAt = signal<string>("");
    private ownerName = signal<string>("");
    private repositoryLanguages = signal<RepositoryLanguageModel[]>([]);


    getRepositoryLanguages(): RepositoryLanguageModel[]{
        return this.repositoryLanguages();
    }
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
    getOwnerName(): string {
        return this.ownerName();
    }

    setCreatedAt(createdAt: string): void {
        this.createdAt.set(createdAt);
    }
    setUrl(url: string): void {
        this.url.set(url);
    }
    setFullName(fullName: string): void {
        this.fullName.set(fullName);
    }
    setName(name: string): void {
        this.name.set(name);
    }
    setPushedAt(pushedAt: string): void {
        this.pushedAt.set(pushedAt);
    }
    setUpdatedAt(updatedAt: string): void {
        this.updatedAt.set(updatedAt);
    }
    setForkUrl(forkUrl: string): void {
        this.forkUrl.set(forkUrl);
    }
    setFork(fork: boolean): void {
        this.fork.set(fork);
    }
    setOwnerName(ownerName: string) {
        this.ownerName.set(ownerName);
    }
    setRepositoryLanguages(repositoryLanguages: RepositoryLanguageModel[]){
        this.repositoryLanguages.set(repositoryLanguages);
    }
}