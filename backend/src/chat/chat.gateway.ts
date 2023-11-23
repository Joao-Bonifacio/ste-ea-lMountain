import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('message: ', payload, client.id);
  }

  // afterInit(server: Server) { // (talves seja necessário)
  afterInit() {
    this.logger.log('init');
  }
  handleConnection(client: Socket) {
    this.logger.log(`Client connectet: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnectet: ${client.id}`);
  }
}
