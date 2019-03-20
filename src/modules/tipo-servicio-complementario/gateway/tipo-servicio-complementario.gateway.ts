import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { TipoServicioComplementario } from '../entities/tipo-servicio-complementario.entity';
import { TIPO_SERVICIO_COMPLEMENTARIO_ACTIONS } from '../actions/tipo-servicio-complementario.actions';

@WebSocketGateway({
  namespace: '/tipo-servicio-complementario',
})
export class TipoServicioComplementarioGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() private socket$;

  afterInit() {
    Logger.log('socket tipoServicioComplementario initialized');
  }

  handleConnection(client) {
    Logger.log('client tipoServicioComplementario connected');
  }

  handleDisconnect(client) {
    Logger.log('client tipoServicioComplementario disconnected');
  }

  tipoServicioComplementarioCreated(tipoServicioComplementario: TipoServicioComplementario) {
    Logger.log('PT-GATEWAY: tipoServicioComplementario created');
    this.socket$.emit(TIPO_SERVICIO_COMPLEMENTARIO_ACTIONS.LIVE_CREATED, tipoServicioComplementario);
  }

  tipoServicioComplementarioUpdated(tipoServicioComplementario: TipoServicioComplementario) {
    Logger.log('PT-GATEWAY: tipoServicioComplementario updated', JSON.stringify(tipoServicioComplementario));
    this.socket$.emit(TIPO_SERVICIO_COMPLEMENTARIO_ACTIONS.LIVE_UPDATED, tipoServicioComplementario);
  }

  tipoServicioComplementarioDeleted(id: number) {
    Logger.log('PT-GATEWAY: tipoServicioComplementario deleted', id.toString());
    this.socket$.emit(TIPO_SERVICIO_COMPLEMENTARIO_ACTIONS.LIVE_DELETED, id);
  }
}
