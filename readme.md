# backstab

Bury latent information to your web page for confidentiality and track。

If someone leak data by screenshots, you can reveal identity information from the picture.

## usage

```JavaScript
new Backstab({
  content: 'the text you want to latent',
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

![screenshots](https://user-images.githubusercontent.com/6868950/38608796-f0014b6a-3dae-11e8-872a-bc2bea8020ae.png)

![image](https://user-images.githubusercontent.com/6868950/38608862-278d10f0-3daf-11e8-8b2f-ab9fd698dfa1.png)

## license
MIT