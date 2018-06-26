import React, { Component } from 'react'
import breadCat from './imgs/bread-cat.jpg'
import flyingCat from './imgs/flying-cat.jpg'
import monsterCat from './imgs/monster-cat.PNG'
import {PhotoSwipeGallery} from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'
import './App.css'

let items = [
  {
    src: breadCat,
    w: 1200,
    h: 900,
    title: 'Silly tabby cat manages to get his head stuck in a slice of bread',
    msrc: breadCat,
  },
  {
    src: flyingCat,
    w: 1200,
    h: 900,
    title: 'Magical cat with paws stretched long in the midst of flying',
    msrc: flyingCat,
  },
  {
    src: monsterCat,
    w: 1200,
    h: 900,
    title: 'Large cat that has taken over a website about HTML',
    msrc: monsterCat,
  }
]

let getThumbnailContent = item => <img width={120} height={90} src={item.msrc} alt={item.title}/>

class App extends Component {
  render() {
    return (
        <PhotoSwipeGallery items={items} thumbnailContent={getThumbnailContent} className="myGallery"/>
    );
  }
}

export default App;
