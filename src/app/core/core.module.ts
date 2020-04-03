import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Services */
import { HttpClientService } from './service/http-client.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpClientService
  ]
})
export class CoreModule {
}
