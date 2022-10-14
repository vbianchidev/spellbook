import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { SpellContainerComponent } from '../spell-container.component';
import { SpellEntity } from '../store/spell.entity';

@Injectable({
  providedIn: SpellContainerComponent
})
export class SpellService extends BaseService<SpellEntity> {
  public endpoint: string = 'spell';

  constructor(private http: HttpClient) { 
    super(http);
  }
}
