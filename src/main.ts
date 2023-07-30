import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TaskModule } from './task-list/task.module';

platformBrowserDynamic()
  .bootstrapModule(TaskModule)
  .catch((err) => console.error(err));