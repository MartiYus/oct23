import { OrderServiceService } from '../app/services/order-service.service';
import { OrderServiceLocalService } from './services/order-service-local.service';
import { OrderServiceRemoteService } from './services/order-service-remote.service';

export const environment = {
  production: false,
  localService: OrderServiceLocalService,
  remoteService: OrderServiceRemoteService
};

