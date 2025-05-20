module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        field: "id",
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        field: "name",
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        field: "email",
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        field: "role",
      },
      mobileNumber: {
        type: DataTypes.STRING,
        field: "mobile_number",
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        field: "address",
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        field: "password",
      },
      userSalt: {
        type: DataTypes.STRING,
        field: "user_salt",
      },
      isActive: {
        type: DataTypes.ENUM,
        field: "is_active",
        values: ["0", "1"],
        allowNull: false,
        defaultValue: "1",
      },
      createdBy: {
        type: DataTypes.UUID,
        field: "created_by",
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: "updated_by",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at",
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
      associate: (models) => {
        users.belongsTo(models.users, {
          foreignKey: "created_by",
          as: "created",
        });
        users.belongsTo(models.users, {
          foreignKey: "updated_by",
          as: "updated",
        });
      },
    }
  );
  return users;
};
