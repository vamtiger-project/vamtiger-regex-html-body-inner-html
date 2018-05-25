"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
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
exports.default = XRegExp(pattern, flags);
//# sourceMappingURL=index.js.map