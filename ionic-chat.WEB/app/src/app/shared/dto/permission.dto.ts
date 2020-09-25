export class PermissionDto {
    public isActive: boolean;
    public code!: number;
    public permission: string;

    constructor(isActive: boolean, code: number, permission: string) {
        this.isActive = isActive;
        this.code = code;
        this.permission = permission;
    }
}
