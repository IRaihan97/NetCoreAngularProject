import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../users/user-edit/user-edit.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent>{
    canDeactivate(component: UserEditComponent){
        if(component.editForm.dirty){
            return confirm('You have unsaved changes. Are you sure you want to continue?')
        }
        return true;
    }
}