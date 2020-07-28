import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogOut } from '../../../../store/actions/auth.actions';
import { AppState} from '../../../../store/app.states';

@Component({
  selector: 'app-create-complete',
  templateUrl: './create-complete.component.html',
  styleUrls: ['./create-complete.component.scss']
})
export class CreateCompleteComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
  }

   // logout user
   logOut(): void {
    this.store.dispatch(new LogOut());
  }

}
