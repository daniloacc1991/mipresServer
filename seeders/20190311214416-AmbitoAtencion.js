'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mp_ambito_atencion', [
      { id: 11, descripcion: 'Ambulatorio - priorizado', createdAt: 'now()', updatedAt: 'now()' },
      { id: 12, descripcion: 'Ambulatorio - no priorizado', createdAt: 'now()', updatedAt: 'now()' },
      { id: 21, descripcion: 'Hospitalario - domiciliario', createdAt: 'now()', updatedAt: 'now()' },
      { id: 22, descripcion: 'Hospitalario - internación', createdAt: 'now()', updatedAt: 'now()' },
      { id: 30, descripcion: 'Urgencias', createdAt: 'now()', updatedAt: 'now()' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mp_ambito_atencion', null, {});
  }
};
