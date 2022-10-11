import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { SpellContainerComponent } from '../spell-container.component';
import { SpellEntity } from '../state/spell.entity';

@Injectable({
  providedIn: SpellContainerComponent
})
export class SpellService extends BaseService<SpellEntity> {
  public _route: string = 'spell';

  constructor(private http: HttpClient) { 
    super(http);
  }
}
