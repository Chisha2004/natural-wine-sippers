export enum RouteCode {
  CHECKOUT = 'CO',
  HOME = 'HM',
}

// Internal path mapping dictionary
const ROUTE_CODE_MAP: Record<RouteCode, string> = {
  [RouteCode.CHECKOUT]: '/checkout',
  [RouteCode.HOME]: '/wine',
};

// Helper function to resolve codes safely with a fallback
export function resolveRouteCode(code: string | null | undefined): string {
  if (code && Object.values(RouteCode).includes(code as RouteCode)) {
    return ROUTE_CODE_MAP[code as RouteCode];
  }
  return ROUTE_CODE_MAP[RouteCode.HOME]; // Safe default fallback
}
