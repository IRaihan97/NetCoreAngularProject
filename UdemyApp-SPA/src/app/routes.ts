import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'users', component: UserListComponent, resolve: {users: UserListResolver}},
            {path: 'users/:id', component: UserDetailComponent, resolve: {user: UserDetailResolver}},
            {path: 'messages', component: MessagesComponent},
            {path: 'list', component: ListComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
