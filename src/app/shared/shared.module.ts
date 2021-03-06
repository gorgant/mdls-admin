import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublishedPostPipe } from './pipes/published-post.pipe';
import { UnpublishedPostPipe } from './pipes/unpublished-post.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatElevationDirective } from './directives/mat-elevation.directive';
import { ProductIdToNamePipe } from './pipes/product-id-to-name.pipe';
import { PageHeroComponent } from './components/page-hero/page-hero.component';
import { ServiceProductPipe } from './pipes/service-product.pipe';
import { WebcourseProductPipe } from './pipes/webcourse-product.pipe';
// tslint:disable-next-line:max-line-length
import { ActiveEditorSessionsDialogueComponent } from './components/active-editor-sessions-dialogue/active-editor-sessions-dialogue.component';
import { ActionConfirmDialogueComponent } from './components/action-confirm-dialogue/action-confirm-dialogue.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [
    PublishedPostPipe,
    UnpublishedPostPipe,
    MatElevationDirective,
    ProductIdToNamePipe,
    ServiceProductPipe,
    WebcourseProductPipe,
    PageHeroComponent,
    ActiveEditorSessionsDialogueComponent,
    ActionConfirmDialogueComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PublishedPostPipe,
    UnpublishedPostPipe,
    HttpClientModule,
    MatElevationDirective,
    ProductIdToNamePipe,
    PageHeroComponent,
    ServiceProductPipe,
    WebcourseProductPipe,
    DateRangePickerComponent
  ]
})
export class SharedModule { }
