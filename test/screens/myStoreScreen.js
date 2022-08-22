class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }
    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async storeLogoIsDisplayed (){
        await this.#myStoreLogo.waitForExist({ timeout: 20000 })
        return await this.#myStoreLogo.isDisplayed()
    }

async getStoreName(){
    await this.#myStoreName.waitForExist({ timeout: 20000 })
   return await this.#myStoreName.getText()
}

}

module.exports = new MyStoreScreen()