import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  async findAll() {
    const port = process.env.PORT;
    return `Escuchando por el Puerto ${port}`;
  }

  // @Get('junta')
  // @Render('junta')
  // root() {
  //   const rows: PrescripcionDetalleJunta[] = [
  //     {
  //       TipoTecnologia: 'N',
  //       ConOrden: 1,
  //       EstJM: 2,
  //       prescripcion: {
  //         NoPrescripcion: '20190405114011265754',
  //         FPrescripcion: '2019-04-05T10:00:00.000Z',
  //         TipoIDPaciente: 'RC',
  //         NroIDPaciente: '1097131527',
  //         PAPaciente: 'GAMBOA',
  //         SAPaciente: '',
  //         PNPaciente: 'JUAN',
  //         SNPaciente: '',
  //       },
  //     },
  //   ];
  //   return {
  //     rows,
  //   };
  // }
}
