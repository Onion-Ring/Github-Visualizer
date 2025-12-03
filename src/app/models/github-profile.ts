import { Signal, signal } from "@angular/core";

export class GithubProfileModel {

    private user = signal<string>("");
    private realName = signal<string>("");
    private avatarUrl = signal<string>("");
    private userBio = signal<string>("");
    private createdAt = signal<string>("");
    private userEmail = signal<string>("");
    private followers = signal<number>(0);
    private following = signal<number>(0);
    private htmlUrl = signal<string>("");

    setFollowers(followers: number) {
        this.followers.set(followers);
    }
    setUser(value: string): void {
        this.user.set(value);
    }

    setRealName(value: string): void {
        this.realName.set(value);
    }

    setAvatarUrl(value: string): void {
        this.avatarUrl.set(value);
    }

    setUserBio(value: string): void {
        this.userBio.set(value);
    }

    setCreatedAt(value: string): void {
        this.createdAt.set(value);
    }

    setUserEmail(value: string): void {
        this.userEmail.set(value);
    }

    setFollowing(value: number): void {
        this.following.set(value);
    }

    setHtmlUrl(value: string): void {
        this.htmlUrl.set(value);
    }

    getFollowers(): number {
        return this.followers();
    }
    getUser(): string {
        return this.user();
    }

    getRealName(): string {
        return this.realName();
    }

    getAvatarUrl(): string {
        return this.avatarUrl();
    }

    getUserBio(): string {
        return this.userBio();
    }

    getCreatedAt(): string {
        return this.createdAt();
    }

    getUserEmail(): string {
        return this.userEmail();
    }

    getFollowing(): number {
        return this.following();
    }

    getHtmlUrl(): string {
        return this.htmlUrl();
    }

}