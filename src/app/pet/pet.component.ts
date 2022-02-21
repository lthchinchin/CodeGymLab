import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: "shiba inu",
    desc: "japanese's dog",
    img: null
  };

  constructor() { }

  ngOnInit(): void {
  }
  upLoadImg(e) {
    console.log(e.target.files[0]);
    // this.pet.img = URL.createObjectURL(e.target.files[0])
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
      this.pet.img = e.target.result;
      console.log(this.pet.img);
    };
  }

}
