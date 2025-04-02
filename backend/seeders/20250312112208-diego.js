'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Encriptar la contraseña para el usuario de ejemplo
    const passwordHash = await bcrypt.hash('jose', 10);

    // Insertar el usuario en la tabla 'users'
    await queryInterface.bulkInsert('Users', [{
      name: 'jose',
      email: 'jose@example.com',
      password: passwordHash,
      // Si la tabla tiene timestamps, puedes agregar createdAt/updatedAt:
      // createdAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar el usuario de ejemplo
    await queryInterface.bulkDelete('users', { email: 'diparo@example.com' }, {});
  }
};