import { Component } from '@angular/core';
import { GoalAndMotiveModel } from 'src/shared/goalAndMotive.model';

@Component({
  selector: 'app-goalandmotive',
  templateUrl: './goalandmotive.component.html',
  styleUrls: ['./goalandmotive.component.scss']
})
export class GoalandmotiveComponent {
  goalAndMotives: GoalAndMotiveModel[] = [
    new GoalAndMotiveModel('../../../assets/images/goalAndMotive/goal1.svg',
                           'Real-Time Analytics',
                           'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.'),
    new GoalAndMotiveModel('../../../assets/images/goalAndMotive/goal2.svg',
                           'Right People At The Right Time',
                           'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.'),
    new GoalAndMotiveModel('../../../assets/images/goalAndMotive/goal3.svg',
                           'Decision-Making',
                           'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.')
  ];
}
