export interface WaterMarkConfig {
    content: string;
    container: HTMLElement;
    mode: backstabMode;
    style: WaterMarkStyle;
}
export interface WaterMarkStyle {
    gridHeight: number;
    gridWidth: number;
    fontSize: number;
    opacity: number;
    rotate: number;
}
export declare enum backstabMode {
    cover = "cover",
    mixin = "mixin",
}
declare class Backstab {
    content: string;
    mode: string;
    container: HTMLElement;
    style: WaterMarkStyle;
    constructor(config: WaterMarkConfig);
    initStyle(styleConfig?: WaterMarkStyle): WaterMarkStyle;
    generateDOM(): void;
}
export default Backstab;
