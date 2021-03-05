import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { HighlightDirective } from './highlight.directive';
import { MaterialModule } from "./materail.module";

@NgModule({
    declarations:[HeaderComponent,FooterComponent, HighlightDirective],
    imports:[ToastrModule.forRoot(),MaterialModule],
    exports:[HeaderComponent,FooterComponent,HighlightDirective,ToastrModule,MaterialModule]
})

export class SharedModule {}
