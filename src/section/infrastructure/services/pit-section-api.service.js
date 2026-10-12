import {externalHttp} from '../../../shared/infrastructure/services/http-common.js';

export class PitSectionApiService {
    /*
    @summary PitSectionApiService is responsible for making API calls related to pit sections.
    @author Andre Sebastian Quispe Almonacid
     */
    getAll() {
        return externalHttp.get(import.meta.env.VITE_EXTERNAL_PIT_SECTIONS_URL);
    }
}