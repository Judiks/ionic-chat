"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('new App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    describe('default screen', function () {
        beforeEach(function () {
            page.navigateTo('/Inbox');
        });
        it('should say Inbox', function () {
            expect(page.getParagraphText()).toContain('Inbox');
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map