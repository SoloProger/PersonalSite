import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
*       РОУТИНГ
*
*  Маршруты для роли Admin:
*   - Main Page
*   - About Page
*   - Portfolio Page
*   - TODO Page
*   - Blog Page
*   - News Page
*   - Admin Page
*
*   Admin Page содержит несколько подразделов, в которых можно управлять контентом сайта. Создание, удаление,
*   обновление новостей, проектов в портфолио, постов в блоге.
*
*   Маршруты для роли User:
*   - Main Page
*   - About Page
*   - Portfolio Page
*   - Blog Page
*   - News Page
*
*   Маршруты для роли Guest:
*   - Main Page
*   - About Page
*   - Portfolio Page
*
* */

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
