export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface Toast {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
  duration?: number;
}

export interface TimerInfo {
  timerId: ReturnType<typeof setTimeout> | null;
  startTime: number;
  remaining: number;
}
