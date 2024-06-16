 Sure, I can help you with that! Here's an example code in TypeScript that checks the value of Bitcoin every five seconds:

```
import '@angular/animations';
import '@angular/cdk/bidi';
import '@angular/cli';
import '@angular/compiler';
import '@angular/common';
import '@angular/flex-layout';
import '@angular/material';
import '@angular/material-library';
import '@angular/forms';
import 'rxjs';

const appElement: any = document.getElementById('app');

@Component({
 selector: 'app',
 templateUrl: 'main.html',
 styleUrls: ['style.css'],
 providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class App implements OnInit {
