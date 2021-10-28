import generateKeyProcess from '../integration/generateKeyProcess';
import EditKeyProcess from "../integration/EditKeyProcess";

const Generate = new generateKeyProcess;
const Edit = new EditKeyProcess;
const data =  '../fixtures/testData.json';


describe('user can edit API Keys', () => {
    it('user can edit Key as “Write” method with correct Password', () => {
        cy.fixture(data).then((data) => {
            cy.visit(data.url);
            Generate.inputFieldEmail(data.email);
            Generate.inputFieldPassword(data.password);
            Generate.selectButtonSubmit();
        })
        cy.wait(5000);
        Generate.selectSettingSubMenu();
        Generate.selectURLAPIKeys();
        cy.wait(3000);
        Edit.selectButtonEdit();
        Edit.selectButtonWriteFrist();
        Edit.selectButtonWriteSecond();
        Edit.selectButtonWriteThird();
        Edit.selectButtonApply();
        cy.wait(3000);
        cy.fixture(data).then((data) => {
            Generate.inputFieldConfirmPassword(data.password);
        })
        Generate.selectButtonConfirmPassword();
        cy.wait(5000);
        Edit.selectButtonOkay();
    })

    it('user can edit Key as “Write” method with incorrect Password ', () => {
        cy.fixture(data).then((data) => {
            cy.visit(data.url);
            Generate.inputFieldEmail(data.email);
            Generate.inputFieldPassword(data.password);
            Generate.selectButtonSubmit();
        })
        cy.wait(5000);
        Generate.selectSettingSubMenu();
        Generate.selectURLAPIKeys();
        cy.wait(3000);
        Edit.selectButtonEdit();
        Edit.selectButtonWriteFrist();
        Edit.selectButtonWriteSecond();
        Edit.selectButtonWriteThird();
        Edit.selectButtonApply();
        cy.wait(3000);
        cy.fixture(data).then((data) => {
            Generate.inputFieldConfirmPassword(data.passwordIncorrect);
        })
        Generate.selectButtonConfirmPassword();
        cy.wait(5000);
        Edit.selectButtonOkay();
    })
})