import {localHttp} from "../../../shared/infrastructure/services/http-common.js";

/**
 * @summary InspectionsRecordsApiService is responsible for making API calls related to inspections records.
 * @author Andre Sebastian Quispe Almonacid
    */
    export class InspectionsRecordsApiService {
    getAll() {
        return localHttp.get('/inspections-records');
    }
}