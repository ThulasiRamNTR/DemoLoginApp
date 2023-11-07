import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../service/user.service";
import { AuthService } from "app/service/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData: any;
  
  constructor(private user: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event: any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data: any) {
    this.authService.logIn(data?.email, data?.password);
    this.user.changeData(data);
  }
}
