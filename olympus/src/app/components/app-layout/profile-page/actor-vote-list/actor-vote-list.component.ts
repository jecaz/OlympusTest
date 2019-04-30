import { Component, OnInit } from '@angular/core';
import {ActorVote} from '../../../../models/actor-vote.model';
import {VoteService} from '../../../../services/vote.service';

@Component({
  selector: 'app-actor-vote-list',
  templateUrl: './actor-vote-list.component.html',
  styleUrls: ['../../../../../styles/app-layout/profile-page/actor-vote-list/actor-vote-list.component.scss']
})
export class ActorVoteListComponent implements OnInit {
  actorVoters: ActorVote[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.actorVoters = this.voteService.getActorVoters();
  }
}
