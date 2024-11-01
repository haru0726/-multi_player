import { HANDLER_IDS } from "../constants/handlerlds.js";
import LocationUpdateHandler from "./game/LocationUpdate.handler.js";
import initialHandler from "./user/initial.handler.js";

const handlers = {
  [HANDLER_IDS.INITAL]: {
    handler: initialHandler,
    protoType: "initial.InitialPayload",
  },
  [HANDLER_IDS.LOCATION_UPDATE]: {
    handler: LocationUpdateHandler,
    protoType: "game.LocationUpdatePayload",
  },
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    throw Error();
  }

  return handlers[handlerId].handler;
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) {
    throw Error();
  }

  return handlers[handlerId].protoType;
};
