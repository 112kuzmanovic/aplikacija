import { Administrator } from 'entities/administrator.entity';
import { AdministratorService } from './services/administrator/administrator.service';
export declare class AppController {
    private administratorService;
    constructor(administratorService: AdministratorService);
    getIndex(): string;
    getAllAdmins(): Promise<Administrator[]>;
}
