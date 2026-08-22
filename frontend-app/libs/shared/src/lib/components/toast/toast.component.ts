import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../service/toast/toast.service';
import { ToastType } from '../../model/toast.interface';

interface TouchState {
  startX: number;
  currentX: number;
  swiping: boolean;
}

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
  private touchStates = new Map<string, TouchState>();

  getAriaRole(type: ToastType): 'alert' | 'status' {
    return type === 'error' || type === 'warning' ? 'alert' : 'status';
  }

  getAriaLive(type: ToastType): 'assertive' | 'polite' {
    return type === 'error' || type === 'warning' ? 'assertive' : 'polite';
  }

  getStyles(type: ToastType): string {
    switch (type) {
      case 'error':
        return 'bg-red-50/95 border-red-200 text-red-900 focus-visible:ring-red-500 shadow-red-500/10';
      case 'success':
        return 'bg-emerald-50/95 border-emerald-200 text-emerald-900 focus-visible:ring-emerald-500 shadow-emerald-500/10';
      case 'warning':
        return 'bg-amber-50/95 border-amber-200 text-amber-900 focus-visible:ring-amber-500 shadow-amber-500/10';
      default:
        return 'bg-blue-50/95 border-blue-200 text-blue-900 focus-visible:ring-blue-500 shadow-blue-500/10';
    }
  }

  // --- Mouse Hover Handlers ---
  onMouseEnter(id: string): void {
    this.toastService.pause(id);
  }

  onMouseLeave(id: string): void {
    this.toastService.resume(id);
  }

  // --- Touch & Swipe Handlers ---
  onTouchStart(id: string, event: TouchEvent): void {
    this.toastService.pause(id); // Pause auto-dismiss timer on press/hold

    const touch = event.touches[0];
    this.touchStates.set(id, {
      startX: touch.clientX,
      currentX: touch.clientX,
      swiping: true,
    });
  }

  onTouchMove(id: string, event: TouchEvent): void {
    const state = this.touchStates.get(id);
    if (!state || !state.swiping) return;

    state.currentX = event.touches[0].clientX;
  }

  onTouchEnd(id: string): void {
    const state = this.touchStates.get(id);
    if (!state) return;

    const deltaX = state.currentX - state.startX;
    const swipeThreshold = 75;

    if (Math.abs(deltaX) > swipeThreshold) {
      this.toastService.remove(id);
    } else {
      this.toastService.resume(id); // Resume timer if gesture didn't dismiss
    }

    this.touchStates.delete(id);
  }

  getTranslateX(id: string): string {
    const state = this.touchStates.get(id);
    if (!state || !state.swiping) return 'translateX(0px)';

    const deltaX = state.currentX - state.startX;
    return `translateX(${deltaX}px)`;
  }

  getOpacity(id: string): number {
    const state = this.touchStates.get(id);
    if (!state || !state.swiping) return 1;

    const deltaX = Math.abs(state.currentX - state.startX);
    return Math.max(0, 1 - deltaX / 150);
  }
}
