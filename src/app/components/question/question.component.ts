import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HttpClientService } from '../../core/service/http-client.service';
import { CONFIG } from '../../../environments/config';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  httpClientSubs: Subscription;

  questionForm = new FormGroup({
    questionId: new FormControl(0),
    questionTitle: new FormControl(''),
    opt1Text: new FormControl(''),
    opt2Text: new FormControl(''),
    opt3Text: new FormControl(''),
    opt4Text: new FormControl('')
  });

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.questionForm.value);
    this.httpClientSubs = this.httpService.post(CONFIG.API_URLS.SAVE_QUESTION, this.questionForm.value).subscribe(res => {
      console.log('res', res);
    });
  }

}
