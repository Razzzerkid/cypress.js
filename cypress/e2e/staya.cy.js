describe('Вход в аккаунт', function () {
    it('Переход на страницу логина', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click('');
         cy.get('.auth-form > form > [type="email"]').type('gav-maksim-kalugin@qa.studio');
         cy.get('.auth-form > form > [type="password"]').type('makson123');
         cy.get('.auth-form__submit').click('');
         cy.contains('Мои заказы');  
         cy.get('.profile-orders__title');    
     })
 })