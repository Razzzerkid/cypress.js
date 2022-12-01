describe('Вход в аккаунт', function () {
    it('Переход на страницу логина', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click('');
         cy.get('.auth-form > form > [type="email"]').type('gav-maksim-kalugin@qa.studio');
         cy.get('.auth-form > form > [type="password"]').type('makson');
         cy.get('.auth-form__submit').click('');
         cy.contains('Невозможно войти с предоставленными учетными данными.');  
         cy.get('.error-label');    
     })
 })