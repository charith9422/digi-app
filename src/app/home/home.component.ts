import { Component, OnInit } from "@angular/core";
import { Portfolios } from "../Models/Portfolios";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  portfolios: Portfolios[];
  constructor() {}

  ngOnInit() {
    this.portfolios = [
      {
        id: 1,
        title: "Question bank for faculty of science students",
        imageUrl:
          "https://res.cloudinary.com/digiapps/image/upload/v1557854571/login1_off2jr.png",
        description: "This is the login interface"
      },
      {
        id: 2,
        title: "Question bank for faculty of science students-image2",
        imageUrl:
          "https://res.cloudinary.com/digiapps/image/upload/v1557854581/login2_vg2ywp.png",
        description: "This is the image 2"
      },
      {
        id: 3,
        title: "Question bank for faculty of science students-image 3",
        imageUrl:
          "https://res.cloudinary.com/digiapps/image/upload/v1557854588/addquestion_dycgid.png",
        description: "This is the image3"
      }
    ];
  }

  getPortfolio(pId: number) {
    return {
      ...this.portfolios.find(portfolio => {
        return portfolio.id === pId;
      })
    };
  }
}
