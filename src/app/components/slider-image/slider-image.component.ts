import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})

export class SliderImageComponent implements OnInit {

  slideItems = 4

  sliderPosition = 0

  interval!: ReturnType<typeof setInterval>

  get pos() {
    return `${-this.sliderPosition * 100}%`
  }

  get width() {
    return `${this.slideItems * 100}%`
  }

  clearInt() {
    clearInterval(this.interval)
  }

  setInt() {
    this.interval = setInterval(() => {
      if(this.sliderPosition == this.slideItems - 1) {
        this.sliderPosition = 0
      }
      else {
        this.sliderPosition++
      }
    }, 6000)
  }

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if(this.sliderPosition == this.slideItems - 1) {
        this.sliderPosition = 0
      }
      else {
        this.sliderPosition++
      }
    }, 6000)
  }
}

