import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPhotoswipeModule, LightboxAdapter } from '@fnxone/ngx-photoswipe';
// import {NgxPhotoswipeModule} from 'ngx-photoswipe';
import { CustomLightboxAdapter } from './shared/CustomLightboxAdapter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModernHistoryComponent } from './modern-history/modern-history.component';
import { ArtCultureComponent } from './art-culture/art-culture.component';
import { EnvironmentComponent } from './environment/environment.component';
import { AssociationComponent } from './association/association.component';
import { FamousPersonalitiesComponent } from './famous-personalities/famous-personalities.component';
import { SocialReformsComponent } from './social-reforms/social-reforms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCourtseyComponent } from './image-courtsey/image-courtsey.component';
import { ModernHistoryTimelineComponent } from './modern-history-timeline/modern-history-timeline.component';
import { FooterComponent } from './footer/footer.component';
import { MedivalHomepageComponent } from './Medival-Architecture/medival-home/medival-homepage/medival-homepage.component';
import { IndoIslamicComponent } from './Medival-Architecture/medival-types/indo-islamic/indo-islamic.component';
import { DelhiSultanteComponent } from './Medival-Architecture/medival-types/delhi-sultante/delhi-sultante.component';
import { MughalsComponent } from './Medival-Architecture/medival-types/mughals/mughals.component';
import { KashmirComponent } from './Medival-Architecture/medival-types/kashmir/kashmir.component';
import { ParsiComponent } from './Medival-Architecture/medival-types/parsi/parsi.component';
import { MughalFortsComponent } from './Medival-Architecture/medival-types/mughals/mughal-fort/mughal-forts/mughal-forts.component';
import { TimelineModuleComponent } from './timeline-module/timeline-module.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModernHistoryComponent,
    ArtCultureComponent,
    EnvironmentComponent,
    AssociationComponent,
    FamousPersonalitiesComponent,
    SocialReformsComponent,
    GalleryComponent,
    FeedbackComponent,
    NavbarComponent,
    ImageCourtseyComponent,
    ModernHistoryTimelineComponent,
    FooterComponent,
    MedivalHomepageComponent,
    IndoIslamicComponent,
    DelhiSultanteComponent,
    MughalsComponent,
    KashmirComponent,
    ParsiComponent,
    MughalFortsComponent,
    TimelineModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPhotoswipeModule,
    FontAwesomeModule,
    // NgxPhotoswipeModule.forRoot()
  ],
  providers: [
    {provide : LightboxAdapter, useClass : CustomLightboxAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
