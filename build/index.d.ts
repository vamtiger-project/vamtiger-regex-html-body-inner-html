declare const _default: RegExp;
export default _default;
export interface IMatch {
    openingBodyTag?: string;
    innerHtml?: string;
    closingBodyTag?: string;
}
export declare type Match = RegExpExecArray & IMatch;
