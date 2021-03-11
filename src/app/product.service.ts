import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlbumStorePage } from '../../e2e/app.po';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http:Http) {
    this.getAlbum(1).subscribe();
   }

   getAlbum(id: number){
    return this._http.get(this._albumUrl)
    .map((response) =>
      response.json()
    )
    }

}
