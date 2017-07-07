// Angular
import { Component } from "@angular/core";

// Ionic
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
//import { SplashScreen } from "@ionic-native/splash-screen";

// Case
import { SplashPage } from "../pages/splash/splash";
import { WelcomePage } from "../pages/welcome/welcome";
//import { WelcomePage } from "../pages/welcome/welcome";
//import { LoginPage } from "../pages/login/login";

@Component({ templateUrl: "app.html" })
export class App
{
    rootPage: any = SplashPage;

    constructor
    (
        platform: Platform,
        statusBar: StatusBar
        //splashScreen: SplashScreen
    )
    {
        platform.ready().then(() =>
        {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.hide();
            //splashScreen.hide();
        });
    }


}