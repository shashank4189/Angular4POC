import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import  "./styles/style.css";

if(process.env.ENV === "production") {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);