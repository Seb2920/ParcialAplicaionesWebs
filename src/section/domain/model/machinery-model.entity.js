/**
 * @summary MachineryModelEntity represents a machinery model in the mining operation.
 * @author Andre Sebastian Quispe Almonacid
 */
export class MachineryModelEntity {
    constructor(id = 0, modelName='', manufacturer='', idSection = 0) {
        this.id = id;
        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.idSection = idSection;
    }
}