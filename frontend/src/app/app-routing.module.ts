import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";
import { ChatComponent } from "./chat/chat.component";

const routes: Routes = [{
  path: 'chat',
  component: ChatComponent,
  canActivate: [
    AuthGuard
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
