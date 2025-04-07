const { USERS } = require("../../config/database-schema");
const { Base } = require("./base");

class Users extends Base {
    constructor(requestQuery) {
        super(requestQuery);
        this.modelName = USERS;
        this.initializeModel();
        this.fields = {
            id: "id",
            name: "name",
            email: "email",
            mobileNumber: "mobileNumber",
            password: "password",
            userSalt: "user_salt",
            isActive: "is_active",
            createdBy: "created_by",
            updatedBy: "updated_by",
            createdAt: "created_at",
            updatedAt: "updated_at"
        };
        this.fieldsList = Object.keys(this.fields);
        this.relations = [
            {
                model: this.db[USERS],
                attributes: ["id", "name", "code"],
                foreignKey: "created_by",
                as: "created"

            },
            {
                model: this.db[USERS],
                attributes: ["id", "name", "code"],
                foreignKey: "updated_by",
                as: "updated"
            }
        ];
    }
}

module.exports = Users;
