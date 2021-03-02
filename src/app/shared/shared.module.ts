import { NgModule } from "@angular/core";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations:[HeaderComponent,FooterComponent, HighlightDirective],
    imports:[],
    exports:[HeaderComponent,FooterComponent,HighlightDirective]
})

export class SharedModule {}
