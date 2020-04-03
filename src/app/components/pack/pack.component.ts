import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HttpClientService } from '../../core/service/http-client.service';
import { CONFIG } from '../../../environments/config';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit, OnDestroy {
  httpClientSubs: Subscription;
  addViewToggle = true;
  packs: Array<any>;

  packForm = new FormGroup({
    packId: new FormControl(0),
    packTitle: new FormControl(''),
    packCategory: new FormControl(''),
    packType: new FormControl('1'),
    imageUrl: new FormControl('')
  });
  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getPacks();
  }

  ngOnDestroy(): void {
    this.httpClientSubs.unsubscribe();
  }

  onSubmit() {
    this.savePack();
    this.toggleView();
  }

  onDelete(id) {
    this.deletePack(id);
  }

  toggleView() {
    this.addViewToggle = !this.addViewToggle;
  }

  private getPacks() {
    this.httpClientSubs = this.httpService.get(CONFIG.API_URLS.GET_PACKS).subscribe((res: []) => {
      this.packs = res;
    });
  }

  private savePack() {
    this.httpClientSubs = this.httpService.post(CONFIG.API_URLS.SAVE_PACK, this.packForm.value).subscribe(res => {
      this.getPacks();
    });
  }

  private deletePack(id) {
    this.httpClientSubs = this.httpService.post(CONFIG.API_URLS.DELETE_PACK, { packId: id }).subscribe(res => {
      this.getPacks();
    });
  }
}
