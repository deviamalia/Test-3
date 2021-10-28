class generateKeyProcess {
    getFieldEmail(){return cy.xpath('//input[@placeholder="Your Email"]')};
    getfieldPassword(){return cy.xpath('//input[@placeholder="Enter Your Password"]')}
    getButtonSubmit(){return cy.xpath('//button[@type="submit"]')};
    getSubMenuSetting(){return cy.xpath('//*[@id="lhs-settings"]')};
    getUrlAPIKeys(){return cy.xpath('//p[normalize-space()="API keys"]')};
    getButtonGenerateKey(){return cy.xpath('//button[normalize-space()="Generate secret key"]')};
    getFieldAPIName(){return cy.xpath('//input[@placeholder="e.g. Twostones key"]')}
    getButtonReadFirst(){return cy.get(':nth-child(3) > .justify-content-between > .d-flex > .button-selector-middle')};  
    getButtonReadSecond(){return cy.get(':nth-child(4) > .justify-content-between > .d-flex > .button-selector-middle')};
    getButtonReadThird(){return cy.get(':nth-child(5) > .justify-content-between > .d-flex > .button-selector-middle')};  
    getButtonConfirmKey(){return cy.get('.modal-footer > .btn-primary')};
    getFieldConfirmPassword(){return cy.xpath('//input[@type="password"]')}
    getButtonConfirmPassword(){return cy.xpath('//button[normalize-space()="Confirm"]')}
    getButtonClose(){return cy.xpath('//button[normalize-space()="Close"]')}
    
    inputFieldEmail(email){
        return this.getFieldEmail()
        .type(`${email}`)
    };

    inputFieldPassword(password){
        return this.getfieldPassword()
        .type(`${password}`)
    };

    selectButtonSubmit(){
        return this.getButtonSubmit()
        .click()
    };

    selectSettingSubMenu(){
        return this.getSubMenuSetting()
        .click()
    };

    selectURLAPIKeys(){
        return this.getUrlAPIKeys()
        .click()
    };

    selectButtonGenerateKey(){
        return this.getButtonGenerateKey()
        .click({force: true})
    };

    inputAPIKeyName(keyname){
        return this.getFieldAPIName()
        .type(`${keyname}`)
    };
    
    selectButtonReadFirst(){
        return this.getButtonReadFirst()
        .click({force: true})
    };

    selectButtonReadSecond(){
        return this.getButtonReadSecond()
        .click({force: true})
    };

    selectButtonReadThird(){
        return this.getButtonReadThird()
        .click({force: true})
    };

    selectButtonConfirmKey(){
        return this.getButtonConfirmKey()
        .click({force: true})
    };

    inputFieldConfirmPassword(confirmpassword){
        return this.getFieldConfirmPassword()
        .type(`${confirmpassword}`)
    };

    selectButtonConfirmPassword(){
        return this.getButtonConfirmPassword()
        .click({force: true})
    };

    selectButtonClose(){
        return this.getButtonClose()
        .click()
    };

}
 export default generateKeyProcess