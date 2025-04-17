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
                        password: "45ca907d70fa30c231e929e3f57a8c9a1f896a7abb30d06cd7132b72d9301a23ba567853e5e3a178232d7fe47b8657007f41498dc206ae0b32a4fa11f2852f73",
                        user_salt: "09bd5d51a05f6ce1",
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
