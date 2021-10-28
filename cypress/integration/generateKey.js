import generateKeyProcess from '../integration/generateKeyProcess';


const Generate = new generateKeyProcess;
const data =  '../fixtures/testData.json';

describe('user can generate key on Web', () => {
    it('user generate key with correct password', () => {
        cy.fixture(data).then((data) => {
            cy.visit(data.url);
            Generate.inputFieldEmail(data.email);
            Generate.inputFieldPassword(data.password);
            Generate.selectButtonSubmit();
        })
        cy.wait(5000);
        Generate.selectSettingSubMenu();
        Generate.selectURLAPIKeys();
        Generate.selectButtonGenerateKey();
        cy.fixture(data).then((data) => {
            Generate.inputAPIKeyName(data.keyName);
        })
        cy.wait(2000);
        Generate.selectButtonReadFirst();
        Generate.selectButtonReadSecond();
        Generate.selectButtonReadThird();
        Generate.selectButtonConfirmKey();
        cy.fixture(data).then((data) => {
            Generate.inputFieldConfirmPassword(data.password);
        })
        Generate.selectButtonConfirmPassword();
        cy.wait(5000);
        Generate.selectButtonClose();
    })

    it('user generate key with incorrect password', () => {
        cy.fixture(data).then((data) => {
            cy.visit(data.url);
            Generate.inputFieldEmail(data.email);
            Generate.inputFieldPassword(data.password);
            Generate.selectButtonSubmit();
        })
        cy.wait(5000);
        Generate.selectSettingSubMenu();
        Generate.selectURLAPIKeys();
        Generate.selectButtonGenerateKey();
        cy.fixture(data).then((data) => {
            Generate.inputAPIKeyName(data.keyName);
        })
        cy.wait(2000);
        Generate.selectButtonReadFirst();
        Generate.selectButtonReadSecond();
        Generate.selectButtonReadThird();
        Generate.selectButtonConfirmKey();
        cy.fixture(data).then((data) => {
            Generate.inputFieldConfirmPassword(data.passwordIncorrectc);
        })
        Generate.selectButtonConfirmPassword();
        cy.wait(3000);
    })
})