import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { ReporteEntrega } from '../entities/reporte-entrega.entity';
import { REPORTE_ENTREGA_ACTIONS } from '../actions/reporte-entrega';

@WebSocketGateway({
  namespace: '/reporte-entrega',
})
export class ReporteEntregaGateway implements OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket reporte-entrega initialized');
  }

  handleConnection(client) {
    Logger.log('client reporte-entrega connected');
  }

  handleDisconnect(client) {
    Logger.log('client reporte-entrega disconnected');
  }

  reporteEntregaCreated(reporteEntrega: ReporteEntrega) {
    Logger.log('PT-GATEWAY: reporte-entrega created');
    this.socket$.emit(REPORTE_ENTREGA_ACTIONS.LIVE_CREATED, reporteEntrega);
  }

  reporteEntregaUpdated(reporteEntrega: ReporteEntrega) {
    Logger.log('PT-GATEWAY: reporte-entrega updated', JSON.stringify(reporteEntrega));
    this.socket$.emit(REPORTE_ENTREGA_ACTIONS.LIVE_UPDATED, reporteEntrega);
  }

  reporteEntregaDeleted(id: number) {
    Logger.log('PT-GATEWAY: reporte-entrega deleted', id.toString());
    this.socket$.emit(REPORTE_ENTREGA_ACTIONS.LIVE_DELETED, id);
  }
}
