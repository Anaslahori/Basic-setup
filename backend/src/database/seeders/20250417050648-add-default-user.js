"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert(
                "users",
                [
                    {
                        id: "d2629237-94b1-419f-874e-eeb2440d8f76",
                        name: "Admin",
                        email: "admin@admin.com",
                        mobile_number: "1234567890",
                        address: "123 Admin St, Admin City, Admin State, 12345",
                        password: "8196f4ce85794ca7c54124867d0820c2d40ff20ac7ac9471dbcc3cc445c8ad7842568ce32a078e7b79bc8109641bbc002d99caebbf23d3e14dc87d75261f0505",
                        user_salt: "09bd5d51a05f6ce1",
                        role: 'Super User',
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                ]
            )
        ]);
    },
    async down(queryInterface, Sequelize) {
        const ids = ["d2629237-94b1-419f-874e-eeb2440d8f76"];
        await Promise.all([
            queryInterface.bulkDelete("users", { id: ids })]);
    }
};
