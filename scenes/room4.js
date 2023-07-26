class Room4 extends AdventureScene
{
    constructor()
    {
        super('room4', 'Avocado Hoard');
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('room4_background', 'Room4.png')
    }

    onEnter()
    {
        this.eatenAvocados = 0;
        this.add.image(0, 0, 'room4_background').setOrigin(0, 0).setScale(1).setDepth(-2);
        this.richard = this.add.sprite(150, 700, 'richard')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Richard"));
        this.spoon = this.add.sprite(375, 500, 'spoon')
            .setScale(5)
            .setInteractive()
            .on('pointerover', ()=>{
                this.shakeObject(this.spoon);
                this.showMessage('MY SPOON!! It survived the fall!!');
            })
            .on('pointerdown', ()=>{
                this.waddleTo(this.richard, this.spoon, 1000, 100, ()=>{
                    this.gainItem('Moderately clean spoon');
                    this.spoon.destroy();
                })
            });
            this.exitRect = this.add.rectangle(1250, 400, 200, 300).setAngle(10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Leave the cave?"))
            .on('pointerdown', () => {
                this.waddleTo(this.richard, {x: this.exitRect.x, y: this.exitRect.y+150}, 1000, 100, () => {
                    this.gotoScene("ending")
                })
            });
            for(let i = 0; i < 20; i++) {
                let avoX = 400 + Math.floor(Math.random() * 600)
                let avoY = 700 + Math.floor(Math.random() * 300)
                this.addAvocado(avoX, avoY);
            }
    }

    addAvocado(x, y) {
        let avocado = this.add.sprite(x, y, 'avocado')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage(this.getAvocadoMessage()))
            .on('pointerdown', () => {
                if(this.hasItem('Moderately clean spoon')) {
                    this.waddleTo(this.richard, { x: x, y: y }, 750, 100, () => {
                        let item = "YUM"
                        for(let i = 0; i < this.eatenAvocados; i++) {
                            item += "M"
                        }
                        this.gainItem(item)
                        avocado.destroy();
                        this.eatenAvocados++;
                    })
                }
            });
    }

    getAvocadoMessage() {
        let randomNum = Math.floor(Math.random() * 5)
        switch(randomNum) {
            case 0:
                return "A nice yummy snack."
            case 1:
                return "Don't mind if I do."
            case 2:
                return "Just what I've been craving."
            case 3:
                return "Today must be my lucky day!"
            case 4:
                return "LETS GOOOOOOOO"
        }
    }
}