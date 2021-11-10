import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[InputComponent,SelectComponent,ToolbarComponent],
    imports:[CommonModule,IonicModule,FormsModule],
    exports:[InputComponent,SelectComponent,ToolbarComponent],
})
export class SharedModule {}