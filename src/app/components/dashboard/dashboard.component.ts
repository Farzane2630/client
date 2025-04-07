import { Component } from "@angular/core";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-dashboard",
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: "./dashboard.component.html",
  // styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
