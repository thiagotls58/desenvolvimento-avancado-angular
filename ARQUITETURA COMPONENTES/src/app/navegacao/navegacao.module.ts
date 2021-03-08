import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";


@NgModule({
    
    // declaração de componentes
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ],

    // import de modulos
    imports: [
        CommonModule,
        RouterModule
    ],

    // exportando componentes para outros módulos
    exports: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ]
})
export class NavegacaoModule {

}