import {externalHttp} from '../../../shared/infrastructure/services/http-common.js';

export class MachineryModelApiService {
    /*
    @summary MachineryModelApiService is responsible for making API calls related to machinery models.
    @author Andre Sebastian Quispe Almonacid
     */
    getAll() {
        return externalHttp.get(import.meta.env.VITE_EXTERNAL_MACHINERY_MODELS_URL);
    }
}