export interface WaterMarkConfig {
  content: string
  container: HTMLElement
  mode: backstabMode
  style: WaterMarkStyle
}

export interface WaterMarkStyle {
  gridHeight: number
  gridWidth: number
  fontSize: number
  opacity: number
  rotate: number
}

export enum backstabMode {
  cover = 'cover',
  mixin = 'mixin'
}

class Backstab {
  content: string
  mode: string
  container: HTMLElement
  style: WaterMarkStyle

  constructor(config: WaterMarkConfig) {
    this.content = config.content || ''
    this.mode = config.mode || 'cover'
    this.container = config.container || document.body
    this.style = this.initStyle(config.style)

    this.generateDOM()
  }

  initStyle(styleConfig: WaterMarkStyle = {} as WaterMarkStyle): WaterMarkStyle {
    return styleConfig = {
      gridHeight: 60,
      gridWidth: 150,
      fontSize: 20,
      opacity: 0.5,
      rotate: -15,
      ...styleConfig
    }
  }

  generateDOM(): void {
    let mask = document.createElement('div')
    mask.style.position = 'fixed'
    mask.style.pointerEvents = 'none'
    mask.style.top = '0'
    mask.style.left = '0'
    mask.style.right = '0'
    mask.style.bottom = '0'
    mask.style.zIndex = '9999'
    this.container.appendChild(mask)

    let screenWidth = window.screen.width
    let screenHeight = window.screen.height
    let xGridNum = Math.ceil(window.screen.width / this.style.gridWidth)
    let yGridNum = Math.ceil(window.screen.height / this.style.gridHeight)
    let childrenHTML = ''
    for(let i = 0; i < yGridNum; i++) {
      for(let j = 0; j < xGridNum; j++) {
        let style = [
          `position: fixed`,
          `width: ${this.style.gridWidth}px`,
          `height: ${this.style.gridHeight}px`,
          `left: ${j * this.style.gridWidth}px`,
          `top: ${i * this.style.gridHeight}px`,
          `display: flex`,
          `align-items: center`,
          `justify-content: center`,
          `font-size: ${this.style.fontSize}px`,
          `opacity: ${this.style.opacity}`,
          `transform: rotate(${this.style.rotate}deg)`,
          `font-weight: 700`
        ]
        childrenHTML += `<div style="${style.join(';')}">${this.content}</div>`
      }
    }
    mask.innerHTML = childrenHTML
  }
}

export default Backstab
