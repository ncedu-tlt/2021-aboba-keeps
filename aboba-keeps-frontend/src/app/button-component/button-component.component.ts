import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-button-component",
  templateUrl: "./button-component.component.html",
  styleUrls: ["./button-component.component.css"]
})
export class ButtonComponentComponent implements OnInit {

  public text = "test button";

  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
  }

  public getMessageFromBackend(): void {
    this.httpService.get("api/v1/hi").subscribe(response => {
      console.log(response);
    });
  }
}
