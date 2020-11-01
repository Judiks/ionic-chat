export class PermissionDto {
    public isActive: boolean;
    public code!: number;
    public permission: string;

    constructor(isActive: boolean, permission: string) {
        this.isActive = isActive;
        this.permission = permission;
    }
}
