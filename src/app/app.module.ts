import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { OffersComponent } from './offers/offers.component';
import { HelpComponent } from './help/help.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RelevanceComponent } from './relevance/relevance.component';
import { DeliveryTimeComponent } from './delivery-time/delivery-time.component';
import { FilterComponent } from './filter/filter.component';
import { RatingComponent } from './rating/rating.component';
import {HttpClientModule} from '@angular/common/http';
import { ResOffersComponent } from './res-offers/res-offers.component';
import { PayOffersComponent } from './pay-offers/pay-offers.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CancelComponent } from './cancel/cancel.component';
import { LegalComponent } from './legal/legal.component';
import { FAQsComponent } from './faqs/faqs.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { FinalfavoritesComponent } from './finalfavorites/finalfavorites.component';
import { FinalPaymentComponent } from './final-payment/final-payment.component';
import { WalletComponent } from './wallet/wallet.component';
import { UPIComponent } from './upi/upi.component';
import { CDCardComponent } from './cdcard/cdcard.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { DeliveredOrdersComponent } from './delivered-orders/delivered-orders.component';
import { OrderFeedbackComponent } from './order-feedback/order-feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCustomerDetailsComponent } from './admin-customer-details/admin-customer-details.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
// import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CartComponent,
    OffersComponent,
    HelpComponent,
    RelevanceComponent,
    DeliveryTimeComponent,
    FilterComponent,
    RatingComponent,
    ResOffersComponent,
    PayOffersComponent,
    ProfileComponent,
    FooterComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    AboutUsComponent,
    CancelComponent,
    LegalComponent,
    FAQsComponent,
    OrdersComponent,
    FavoritesComponent,
    PaymentComponent,
    AddressComponent,
    FinalfavoritesComponent,
    FinalPaymentComponent,
    WalletComponent,
    UPIComponent,
    CDCardComponent,
    NewOrdersComponent,
    PastOrdersComponent,
    DeliveredOrdersComponent,
    OrderFeedbackComponent,
    ContactComponent,
    ProductsComponent,
    AdminComponent,
    AdminCustomerDetailsComponent,
    AdminboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

