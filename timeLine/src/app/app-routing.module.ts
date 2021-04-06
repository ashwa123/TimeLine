import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { MedivalHomepageComponent } from './Medival-Architecture/medival-home/medival-homepage/medival-homepage.component';
import { IndoIslamicComponent } from './Medival-Architecture/medival-types/indo-islamic/indo-islamic.component';
import { DelhiSultanteComponent } from './Medival-Architecture/medival-types/delhi-sultante/delhi-sultante.component';
import { MughalsComponent } from './Medival-Architecture/medival-types/mughals/mughals.component';
import { KashmirComponent } from './Medival-Architecture/medival-types/kashmir/kashmir.component';
import { ParsiComponent } from './Medival-Architecture/medival-types/parsi/parsi.component';
import { MughalFortsComponent } from './Medival-Architecture/medival-types/mughals/mughal-fort/mughal-forts/mughal-forts.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent },
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
  { path: 'medival-architecture', component: MedivalHomepageComponent },
  { path: 'indo-islamic', component: IndoIslamicComponent },
  { path: 'delhisultante', component: DelhiSultanteComponent },
  { path: 'mughals', component: MughalsComponent },
  { path: 'kashmir', component: KashmirComponent },
  { path: 'parsi', component: ParsiComponent },
  { path: 'forts', component: MughalFortsComponent },
  { path : '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
