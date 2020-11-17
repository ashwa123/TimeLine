import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ModernHistoryComponent } from './modern-history/modern-history.component';
import { ArtCultureComponent } from './art-culture/art-culture.component';
import { EnvironmentComponent } from './environment/environment.component';
import { AssociationComponent } from './association/association.component';
import { FamousPersonalitiesComponent } from './famous-personalities/famous-personalities.component';
import { SocialReformsComponent } from './social-reforms/social-reforms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ImageCourtseyComponent } from './image-courtsey/image-courtsey.component';
import { ModernHistoryTimelineComponent } from './modern-history-timeline/modern-history-timeline.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path: 'use', component: HowToUseComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'modern-history', component: ModernHistoryComponent },
  { path: 'art&culture', component: ArtCultureComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'associationinhistory', component: AssociationComponent },
  { path: 'famouspersonalities', component: FamousPersonalitiesComponent },
  { path: 'socialreforms', component: SocialReformsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'imagecourtesy', component: ImageCourtseyComponent },
  { path: 'modernhistorytimeline', component: ModernHistoryTimelineComponent },
  { path : '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
