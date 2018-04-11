# backstab

[![Build Status](https://travis-ci.org/jin5354/backstab.svg?branch=master)](https://travis-ci.org/jin5354/backstab)
[![npm](https://img.shields.io/npm/v/backstab.svg)](https://www.npmjs.com/package/backstab)

Bury latent information to your web page for confidentiality and track.

If someone leak data by screenshots, you can reveal identity information from the picture.

## install

```bash
$ npm install backstab --save
```

## usage

```JavaScript
import Backstab from 'backstab'

new Backstab({
  content: 'the text you want to bury',
  container: document.body
})
```

## config

- `content: string`, default is `''`
- `container: HTMLElement`, the container DOM to store watermarks. default is `document.body`
- `style: object`, custom watermark style
  - `gridHeight: number`, grid height, default is `60`
  - `gridWidth: number`, grid width, default is `150`
  - `fontSize: number`, font size, default is `20`
  - `opacity: number`, opacity, default is `0.5`, recommmend `0.005`
  - `rotate: number`, rotate deg, default is `-15`

## reveal

![screenshots](https://user-images.githubusercontent.com/6868950/38609510-d8addddc-3db0-11e8-8ccb-4f773edac449.png)

This is a screenshot with 0.005 opacity buried information. Open it with PhotoShop, add new pure black upper layer, use `hard mix` blending mode to show the text.

![image](https://user-images.githubusercontent.com/6868950/38609569-001c6f28-3db1-11e8-9e9f-b3cbc129c710.png)

## license
MIT