import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import {default as regex, Match} from '../../index';
import html from './mock-data';

const spaces = /\s/gms

describe("vamtiger-regex-html-body-inner-html: should match", function () {
    it("HTML body inner HTML", async function () {
        const input = html;
        const expected = {
            openingBodyTag: '<body>',
            innerHtml: `
    <div>
        Some HTML body inner HTML
    </div>`,
            closingBodyTag: '</body>'
        };
        const match = input.match(regex) as RegExpExecArray;
        const xMatch = XRegExp.exec(input, regex) as Match;

        expect(match).to.be.ok;
        expect(match.length).to.be.gt(0);
        expect(match[1]).to.equal(expected.openingBodyTag);
        expect(match[2].trim()).to.equal(expected.innerHtml.trim());
        expect(match[3]).to.equal(expected.closingBodyTag);

        expect(xMatch).to.be.ok;
        expect(xMatch.length).to.be.gt(0);
        expect(xMatch[1]).to.equal(expected.openingBodyTag);
        expect(xMatch[2].trim()).to.equal(expected.innerHtml.trim());
        expect(xMatch[3]).to.equal(expected.closingBodyTag);
        expect(xMatch.openingBodyTag && xMatch.openingBodyTag).to.equal(expected.openingBodyTag);
        expect(xMatch.innerHtml && xMatch.innerHtml.trim()).to.equal(expected.innerHtml.trim());
        expect(xMatch.closingBodyTag && xMatch.closingBodyTag).to.equal(expected.closingBodyTag);
    })
})