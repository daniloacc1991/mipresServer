import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { EstadoJuntaProfesional } from '../entities/estado-junta-profesional.entity';
import { ESTADO_JUNTA_PROFESIONAL_ACTIONS } from '../actions/estado-junta-profesional.actions';

@WebSocketGateway()
export class EstadoJuntaProfesionalGateway implements OnGatewayConnection, OnGatewayConnection {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket estadoJuntaProfesional initialized');
  }

  handleConnection(client) {
    Logger.log('client estadoJuntaProfesional connected');
  }

  handleDisconnect(client) {
    Logger.log('client estadoJuntaProfesional disconnected');
  }

  estadoJuntaProfesionalCreated(estadoJuntaProfesional: EstadoJuntaProfesional) {
    Logger.log('PT-GATEWAY: estadoJuntaProfesional created');
    this.socket$.emit(ESTADO_JUNTA_PROFESIONAL_ACTIONS.LIVE_CREATED, estadoJuntaProfesional);
  }

  estadoJuntaProfesionalUpdated(estadoJuntaProfesional: EstadoJuntaProfesional) {
    Logger.log('PT-GATEWAY: estadoJuntaProfesional updated', JSON.stringify(estadoJuntaProfesional));
    this.socket$.emit(ESTADO_JUNTA_PROFESIONAL_ACTIONS.LIVE_UPDATED, estadoJuntaProfesional);
  }

  estadoJuntaProfesionalDeleted(id: number) {
    Logger.log('PT-GATEWAY: estadoJuntaProfesional deleted', id.toString());
    this.socket$.emit(ESTADO_JUNTA_PROFESIONAL_ACTIONS.LIVE_DELETED, id);
  }
}
