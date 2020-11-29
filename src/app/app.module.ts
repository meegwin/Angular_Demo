import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { AppRoutingModule } from './app-routing.module';

// import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module';
// import { DataBindingModule } from './data-binding/data-binding.module';
// import { DirectivesModule } from './directives/directives.module';
// import { MovieModule } from './movie/movie.module';
// import { ShoppingModule } from './shopping/shopping.module';
import { Baitap8Module } from './baitap8/baitap8.module';

import { PipeModule } from './shared/pipe/pipe.module';
import { ComponentsModule } from './shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NgModule: meta-data
@NgModule({
  // declarations: Nơi khai báo các component được module quản lý
  // => AppComponent đang được AppModule quản lý
  // Component không thể đứng 1 mình, nó phải được 1 module quản lý
  // 1 Component chỉ có thể được 1 module quản lý
  declarations: [AppComponent, DemoComponent],
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
    // HomeModule,
    Baitap2Module,
    // DataBindingModule,
    // DirectivesModule,
    // MovieModule,
    // ShoppingModule,
    Baitap8Module,
  ],
  // Nơi khai báo các services
  providers: [],
  // Khai báo AppComponent là component khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
