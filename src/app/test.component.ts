import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ':-D',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
