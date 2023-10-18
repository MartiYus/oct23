import { OrderLocalService } from "./services/order-local.service";
import { OrderRemoteService } from "./services/order-remote.service";

export const environment = {
    localService: OrderLocalService,
    remoteService: OrderRemoteService
}