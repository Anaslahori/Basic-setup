"use strict";
/**
 * A sample migration to create table and insert data from csv keep this file for future reference
 */
module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.createTable(
            "users",
            {
                id: {
                    type: Sequelize.UUID,
                    field: "id",
                    primaryKey: true,
                    unique: true,
                    defaultValue: Sequelize.UUIDV4
                },
                name: {
                    type: Sequelize.STRING,
                    field: "name",
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    field: "email"
                },
                mobileNumber: {
                    type: Sequelize.STRING,
                    field: "mobile_number",
                    allowNull: false
                },
                address: {
                    type: Sequelize.STRING,
                    field: "address",
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING,
                    field: "password"
                },
                userSalt: {
                    type: Sequelize.STRING,
                    field: "user_salt"
                },  
                isActive: {
                    type: Sequelize.ENUM,
                    field: "is_active",
                    values: ["0", "1"],
                    allowNull: false,
                    defaultValue: "1"
                },
                createdBy: {
                    type: Sequelize.UUID,
                    field: "created_by"
                },
                updatedBy: {
                    type: Sequelize.UUID,
                    field: "updated_by"
                },
                createdAt: {
                    type: Sequelize.DATE,
                    field: "created_at",
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    field: "updated_at",
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                    allowNull: false
                },
                deletedAt: {
                    type: Sequelize.DATE,
                    field: "deleted_at"
                }
            }
        );
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(USERS);
    }
};
