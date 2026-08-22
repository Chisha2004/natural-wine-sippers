import {
  Injectable,
  signal,
  computed,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TimerInfo, Toast, ToastType } from '../../model/toast.interface';

export type CreateToastInput = Omit<Toast, 'id'> & {};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly rawToasts = signal<Toast[]>([]);
  private readonly isMobile = signal<boolean>(this.checkIsMobile());
  private readonly timers = new Map<string, TimerInfo>();

  constructor() {
    if (this.isBrowser) {
      const mediaQuery = window.matchMedia('(max-width: 639px)');
      mediaQuery.addEventListener('change', (e) =>
        this.isMobile.set(e.matches)
      );
    }
  }

  readonly toasts = computed(() => {
    const list = this.rawToasts();
    const limit = this.isMobile() ? 1 : 3;
    return list.slice(-limit);
  });

  show(toastInput: CreateToastInput): void {
    const existing = this.rawToasts().find(
      (t) => t.title === toastInput.title && t.message === toastInput.message
    );

    // If found, close the old instance and clear its timer first
    if (existing) {
      this.remove(existing.id);
    }

    // Generate a fresh unique ID for the new toast
    const id = crypto.randomUUID();
    const duration = toastInput.duration ?? 5000;
    const type = toastInput.type ?? ToastType.INFO;

    const newToast: Toast = {
      ...toastInput,
      id,
      duration,
      type,
    };

    this.rawToasts.update((current) => [...current, newToast]);

    if (duration > 0) {
      this.startTimer(id, duration);
    }
  }

  remove(id?: string): void {
    if (!id) {
      return;
    }
    this.clearTimer(id);
    this.rawToasts.update((current) => current.filter((t) => t.id !== id));
  }

  pause(id: string): void {
    const timer = this.timers.get(id);
    if (!timer || !timer.timerId) return;

    clearTimeout(timer.timerId);
    timer.timerId = null;
    timer.remaining -= Date.now() - timer.startTime;
  }

  resume(id: string): void {
    const timer = this.timers.get(id);
    if (!timer || timer.timerId !== null || timer.remaining <= 0) return;

    this.startTimer(id, timer.remaining);
  }

  clear(): void {
    this.timers.forEach((_, id) => this.clearTimer(id));
    this.rawToasts.set([]);
  }

  private startTimer(id: string, duration: number): void {
    const timerId = setTimeout(() => this.remove(id), duration);
    this.timers.set(id, {
      timerId,
      startTime: Date.now(),
      remaining: duration,
    });
  }

  private clearTimer(id: string): void {
    const timer = this.timers.get(id);
    if (timer?.timerId) {
      clearTimeout(timer.timerId);
    }
    this.timers.delete(id);
  }

  private checkIsMobile(): boolean {
    if (!this.isBrowser) return false;
    return window.matchMedia('(max-width: 639px)').matches;
  }
}
