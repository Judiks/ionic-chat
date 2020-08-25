export class PermissionDto {
    public isActive: boolean;
    public code: string;

    constructor(isActive: boolean, code: string) {
        this.isActive = isActive;
        this.code = code;
    }
}
