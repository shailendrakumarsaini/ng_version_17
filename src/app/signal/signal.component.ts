import { JsonPipe, NgIf } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [JsonPipe,NgIf],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  test = false;
  count = signal(0);
  colors = signal<any[]>(['red', 'green']);
  height = signal(10);
  width = signal(20);
  area = computed(()=> this.height() * this.width());

  constructor(){
    effect(()=>{
      console.log('Effect due to count signal is triggered', this.count());
    });
    effect(()=>{
      console.log('Effect due to colors signal is triggered', this.colors());
    });
    effect(()=>{
      console.log('Effect due to area signal is triggered', this.area());
    });
  }

  ngOnInit(): void {
    console.log('count => ', this.count());
    console.log('colors => ', this.colors());
    console.log('height => ', this.height());
    console.log('width => ', this.width());
    console.log('area => ', this.area());
  }

  setCount() { this.count.set(7); }
  increaseCount(){ this.count.update(value => value + 1); }
  decreaseCount(){ this.count.update(value => value -1); }

  addYellowColor(){ this.colors.update(values => [...values, 'yellow']); }

  increaseHeight(){ this.height.update(value => value + 5); }
  decreaseHeight(){ this.height.update(value => value - 5); }

  increaseWidth() { this.width.update(value => value + 10); }
  decreaseWidth() { this.width.update(value => value - 10); }

}
