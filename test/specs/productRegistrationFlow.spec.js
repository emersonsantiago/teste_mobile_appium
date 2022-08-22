const homeScreen = require("../screens/homeScreen");
const loginScreen = require("../screens/loginScreen");
const myStoreScreen = require("../screens/myStoreScreen");
const newproductScreen = require("../screens/newProductScreen");
const productScreen = require("../screens/productScreen");
const urlLoja = 'http://lojaebac.ebaconline.art.br'
const userLogin = 'gerente'
const password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Cadastrar produto', () => {
    it('Deve realizar cadastro de produto com sucesso', async() => {
        
        await homeScreen.goToLoginStore();
        await loginScreen.fillFieldSiteAdress(urlLoja);
        await loginScreen.continueWithStore();
        await loginScreen.addLogin(userLogin, password);
        await loginScreen.goToYourPasssword(password);
        await myStoreScreen.goToProducts();
        await productScreen.goToAddProdutc();
        await productScreen.goToSimplePhysycal();
        await newproductScreen.fillFieldProductTitle('Produto Teste EBAC');
        await newproductScreen.addDescriptionProduct('Cadastro de produto para testes EBAC');
        await newproductScreen.addPrice('9000', '900');
        await newproductScreen.publish();
        await productScreen.validateRegisterProduct();

    });
});