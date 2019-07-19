import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //表单模块
import { RouterModule } from '@angular/router';  //路由模块
import { appRoutes } from './app.routes';  //路由配置
import { HttpClientModule } from '@angular/common/http';   //http请求

import { AppComponent } from './app.component';  
import { UpcomingComponent } from './common/upcoming/app.component';
import { PopularComponent } from './common/popular/app.component';
import { DemoComponent } from './common/demo/app.component';  

@NgModule({   //装饰器的类
  declarations: [   //声明 自定义模块  组件   指令   管道
    AppComponent,
    UpcomingComponent,
    PopularComponent,
    DemoComponent
  ],
  imports: [   // 公共模块或其它类模块
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],   //服务
  bootstrap: [AppComponent]   //模块中启动组件
})
export class AppModule { }
