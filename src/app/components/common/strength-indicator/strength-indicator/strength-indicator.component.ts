import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Common} from '../../../../Utils/consts';
import {Regex} from '../../../../Utils/regex';

@Component({
  selector: 'app-strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.scss']
})
export class StrengthIndicatorComponent implements OnInit, OnChanges {

  progressSize: any = 0;
  progressColor: any;
  alertBackground: any;
  increment: any = 20;

  @Input() type: any;
  @Input() inputText: any;

  hasLowerCase = false;
  hasUpperCase = false;
  hasNumber = false;
  hasSpecialChar = false;
  hasGoodLength = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkStrength(this.type, this.inputText);
  }

  checkStrength(type, text): any {
    this.progressSize = 0;

    if (type === Common.INPUT_TYPE_PASSWORD) {

      if (new RegExp(Regex.REGEX_DIGITS).test(text)) {
        this.progressSize = this.progressSize + this.increment;
        this.hasNumber = true;
      } else {
        this.hasNumber = false;
      }

      if (new RegExp(Regex.REGEX_LOWER_CASE).test(text)) {
        this.progressSize = this.progressSize + this.increment;
        this.hasLowerCase = true;
      } else {
        this.hasLowerCase = false;
      }

      if (new RegExp(Regex.REGEX_SPECIAL_CHARACTER).test(text)) {
        this.progressSize = this.progressSize + this.increment;
        this.hasSpecialChar = true;
      } else {
        this.hasSpecialChar = false;
      }

      if (new RegExp(Regex.REGEX_UPPER_CASE).test(text)) {
        this.progressSize = this.progressSize + this.increment;
        this.hasUpperCase = true;
      } else {
        this.hasUpperCase = false;
      }

      if (text.length > 8) {
        this.progressSize = this.progressSize + this.increment;
        this.hasGoodLength = true;
      } else {
        this.hasGoodLength = false;
      }
    }

    this.setColor(this.progressSize);
  }

  setColor(strength) {
    if (strength === 20) {
      this.progressColor =  '#ad1010';
      this.alertBackground = 'rgba(173,16,16,0.3)'
    }

    if (strength === 40) {
      this.progressColor =  '#ad5810';
    }

    if (strength === 60) {
      this.progressColor =  '#109fad';
    }

    if (strength === 80) {
      this.progressColor =  '#10ad65';
    }

    if (strength === 100) {
      this.progressColor =  '#006939';
    }
  }


}
