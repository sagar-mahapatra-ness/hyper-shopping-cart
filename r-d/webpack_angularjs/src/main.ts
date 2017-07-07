import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
 
import { ProductComponent }   from './product/ProductComponent';
 
@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [ProductComponent],
    bootstrap:[ProductComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);