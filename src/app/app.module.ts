import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddressPage } from '../pages/address/address';
import { CartPage } from '../pages/cart/cart';
import { NotificationsPage } from '../pages/notifications/notifications';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { OrderPlacedPage } from '../pages/order-placed/order-placed';
import { ProductDescPage } from '../pages/product-desc/product-desc';
import { ProductSearchPage } from '../pages/product-search/product-search';
import { ValidatorsModule } from '../validators/validators.module';
import { TextMaskModule } from 'angular2-text-mask';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { ContactPage } from '../pages/contact/contact';
import { OffersPage } from '../pages/offers/offers';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ProductsPage } from '../pages/products/products';
import { HkApiproviderProvider } from '../providers/hk-apiprovider/hk-apiprovider';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import {PaymentPage} from '../pages/payment/payment';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {TermsAndConditionsPage} from "../pages/terms-and-conditions/terms-and-conditions";
import {AboutUsPage} from "../pages/about-us/about-us";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";
import {MyWalletPage} from "../pages/my-wallet/my-wallet";
import {QrScannerPage} from "../pages/qr-scanner/qr-scanner";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import { AppVersion } from '@ionic-native/app-version';
import { SamplePage } from '../pages/sample/sample';
import { BoatOrderDetailsPage } from '../pages/boat-order-details/boat-order-details';
import { DatePicker } from '@ionic-native/date-picker';
import { SelectClothesPage } from '../pages/select-clothes/select-clothes';
import { SelectDatetimePage } from '../pages/select-datetime/select-datetime';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { SubscriptionDetailsPage } from '../pages/subscription-details/subscription-details';
import { MyBagsPage } from '../pages/my-bags/my-bags';
import { PaypalSubsccriptionPage } from '../pages/paypal-subsccription/paypal-subsccription';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RetailProductsPage } from '../pages/retail-products/retail-products';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ForgotPasswordPage,
    RegisterPage,
    HomePage,
    AddressPage,
    CartPage,
    NotificationsPage,
    OrderHistoryPage,
    OrderPlacedPage,
    ProductDescPage,
    ProductSearchPage,
    OrderConfirmPage,
    ContactPage,
    ProductsPage,
    FeedbackPage,
    OffersPage,
    PaymentPage,
    TermsAndConditionsPage,
    AboutUsPage,
    ResetPasswordPage,
    MyWalletPage,
    QrScannerPage,
    SamplePage,
    BoatOrderDetailsPage,
    SelectClothesPage,
    SelectDatetimePage,
    SubscriptionPage,
    SubscriptionDetailsPage,
    MyBagsPage,
    PaypalSubsccriptionPage,
    RetailProductsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ValidatorsModule,
    TextMaskModule,
    HttpModule,

  ],
  exports: [

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ForgotPasswordPage,
    RegisterPage,
    HomePage,
    AddressPage,
    CartPage,
    NotificationsPage,
    OrderHistoryPage,
    OrderPlacedPage,
    ProductDescPage,
    ProductSearchPage,
    OrderConfirmPage,
    ContactPage,
    ProductsPage,
    FeedbackPage,
    OffersPage,
    PaymentPage,
    TermsAndConditionsPage,
    AboutUsPage,
    ResetPasswordPage,
    MyWalletPage,
    QrScannerPage,
    SamplePage,
    BoatOrderDetailsPage,
    SelectClothesPage,
    SelectDatetimePage,
    SubscriptionPage,
    SubscriptionDetailsPage,
    MyBagsPage,
    PaypalSubsccriptionPage,
    RetailProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HkApiproviderProvider,
    HTTP,
    PayPal,
    BarcodeScanner,
    AppVersion,
    DatePicker,
    InAppBrowser
  ]
})
export class AppModule {}
