import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'tertiary-no-outline';
type ButtonSize = 'sm' | 'md' | 'lg';
type NgCssClasses = { [k: string]: boolean };

@Component({
  selector: 'dsfr-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges {

  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() ariaLabel?: string;
  @Input() icon?: string;
  @Input() iconDirection?: 'left' | 'right';

  protected classes: NgCssClasses = {};

  ngOnChanges(){
    this.classes = {
      'fr-btn--secondary': this.type === 'secondary',
      'fr-btn--tertiary': this.type === 'tertiary',
      'fr-btn--tertiary-no-outline': this.type === 'tertiary-no-outline',
      'fr-btn--sm': this.size === 'sm',
      'fr-btn--lg': this.size === 'lg',
      'fr-btn--icon-left': !this.type.startsWith('tertiary') && !!this.icon && this.iconDirection === 'left',
      'fr-btn--icon-right': !this.type.startsWith('tertiary') && !!this.icon && this.iconDirection === 'right'
    };
    if(this.icon){
      this.classes[this.icon] = true;
    }
  }
}
