import { Component, OnInit } from '@angular/core';
import { FollowersModel } from 'src/shared/followers.model';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent {
  famousPeoples: FollowersModel[] = [
    new FollowersModel('Sunder Pichai', 'CEO @ Google', "../../assets/images/famousPeoples/sunderPichai1.png"),
    new FollowersModel('Sunder Pichai', 'CEO @ Google', "../../assets/images/famousPeoples/sunderPichai2.png"),
    new FollowersModel('Sunder Pichai', 'CEO @ Google', "../../assets/images/famousPeoples/sunderPichai3.png"),
    new FollowersModel('Sunder Pichai', 'CEO @ Google', "../../assets/images/famousPeoples/sunderPichai4.png")
  ];
  
}
