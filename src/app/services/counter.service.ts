import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // Create a signal with initial value
  private count = signal(0);

  // Create a computed signal
  doubleCount = computed(() => this.count() * 2);

  increment() {
    // Update signal value
    this.count.update(current => current + 1);
  }

  decrement() {
    this.count.update(current => current - 1);
  }

  getCount() {
    return this.count;
  }
}