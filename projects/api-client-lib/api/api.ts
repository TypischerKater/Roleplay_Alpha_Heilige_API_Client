export * from './gameController.api.service';
import { GameControllerApiService } from './gameController.api.service';
export * from './map.api.service';
import { MapApiService } from './map.api.service';
export * from './playerController.api.service';
import { PlayerControllerApiService } from './playerController.api.service';
export const APIS = [GameControllerApiService, MapApiService, PlayerControllerApiService];
