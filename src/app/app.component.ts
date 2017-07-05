import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "plum-app",
  template: require("./app.component.html"),
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public constructor() {}

  public ngOnInit(): void {}

}
