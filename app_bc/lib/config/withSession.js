import { getIronSession } from "iron-session";
import { ironOptions } from "./iron-config";

export function withSessionRoute(handler) {
  return getIronSession(handler, ironOptions);
}
