
import * as XRegExp from 'xregexp';

const pattern = `
    (?<openingBodyTag>
        <body.*?>
    )
        (?<innerHtml>
            .*?
        )
    (?<closingBodyTag>
        </body>
    )
`;
const flags = 'xmnsi';

export default XRegExp(
    pattern,
    flags
);

export interface IMatch {
    openingBodyTag?: string;
    innerHtml?: string;
    closingBodyTag?: string;
}

export type Match = RegExpExecArray & IMatch;