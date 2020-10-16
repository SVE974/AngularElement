import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnChanges {

  @Input() provider: string;
  @Input() link: string;
  public providerLink: string

  constructor() { }

  ngOnChanges(): void {
    this.providerLink = `fab fa-${this.provider}`;
  }

}
