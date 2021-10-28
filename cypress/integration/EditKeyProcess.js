class EditKeyProcess {
    getButtonEdit(){return cy.xpath('//*[@id="api-keys"]/div/div[2]/div[2]/div[1]/div/table/tbody/tr[1]/td[4]/div/img[1]')}
    getButtonWriteFirst(){return  cy.get(':nth-child(3) > .justify-content-between > .d-flex > .button-selector-right')}
    getButtonWriteSecond(){return cy.get(':nth-child(4) > .justify-content-between > .d-flex > .button-selector-right')}
    getButtonWriteThird(){return  cy.get(':nth-child(5) > .justify-content-between > .d-flex > .button-selector-right')}
    getButtonApply(){return cy.xpath('//button[normalize-space()="Apply changes"]')}
    getButtonOkay(){return cy.xpath('//button[normalize-space()="Okay"]')}

    selectButtonEdit(){
        return this.getButtonEdit()
        .click({force: true})
    };

    selectButtonWriteFrist(){
        return this.getButtonWriteFirst()
        .click({force: true})
    };

    selectButtonWriteSecond(){
        return this.getButtonWriteSecond()
        .click({force: true})
    };

    selectButtonWriteThird(){
        return this.getButtonWriteThird()
        .click({force: true})
    };

    selectButtonApply(){
        return this.getButtonApply()
        .click()
    }

    selectButtonOkay(){
        return this.getButtonOkay()
        .click()
    }
}
export default EditKeyProcess;