import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatIsVirusDetected'
})
export class FormatIsVirusDetectedPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Reactive' : 'Non-Reactive';
  }
}
