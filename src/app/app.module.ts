import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AuthenInterceptor } from './core/interceptors/authen.interceptor';
import { AppComponent } from './app.component';
import { PipeModule } from './shared/pipe/pipe.module';
import { ComponentsModule } from './shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NgModule: meta-data
@NgModule({
  // declarations: Nơi khai báo các component được module quản lý
  // => AppComponent đang được AppModule quản lý
  // Component không thể đứng 1 mình, nó phải được 1 module quản lý
  // 1 Component chỉ có thể được 1 module quản lý
  declarations: [AppComponent],
  // imports: Nơi khai báo các module
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // => Để sử dụng được các component của HomeModule trong AppModule
  // cần phải imports: [HomeModule]
  // 2 loại module:
  // - Module do angular cung cấp: RouterModule, HttpClientModule
  // - Module do dev định nghĩa: HomeModule
  imports: [
    BrowserModule,
    PipeModule,
    ComponentsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  // Nơi khai báo các services
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenInterceptor, multi: true },
  ],
  // Khai báo AppComponent là component khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
