'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mp_frecuencia', [
      {
        id: 1,
        descripcion: 'Minuto(s)',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 2,
        descripcion: 'Hora(s)',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 3,
        descripcion: 'Día(s)',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 4,
        descripcion: 'Semana(s)',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 5,
        descripcion: 'Mes(es)',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 6,
        descripcion: 'Año',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 7,
        descripcion: 'Según respuesta al tratamiento',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 8,
        descripcion: 'Única',
        habilitado: true,
        fecha: '2016/11/18 ',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('mp_frecuencia', null, {});
  }
};
