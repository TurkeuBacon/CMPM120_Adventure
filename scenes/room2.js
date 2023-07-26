class Room2 extends AdventureScene
{
    constructor()
    {
        super('room2', 'Underground River');
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('room2_background', 'Room2.png')
        this.load.image('avocado', 'Avocado.png')
    }

    onEnter()
    {
        // this.gotoScene('room3');
        this.gainItem('dirty spoon');
        this.add.image(0, 0, 'room2_background').setOrigin(0, 0).setScale(5).setDepth(-1);
        this.richard = this.add.sprite(200, this.h/1.5, 'richard')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Richard"));
        this.avocado = this.add.sprite(500, this.h/2.5, 'avocado')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("An Avocado! If only my spoon wasnt so dirty"))
            .on('pointerdown', () => {
                if(this.hasItem('clean spoon')) {
                    this.waddleTo(this.richard, { x: this.avocado.x, y: this.avocado.y }, 750, 100, () => {
                        this.gainItem('avocado (eaten)')
                        this.avocado.destroy();
                    })
                }
            });
        this.riverRect = this.add.rectangle(1090, this.h-400, 300, 700).setAngle(-12)
        .setInteractive()
        .on('pointerover', () => this.showMessage(this.getRiverText()))
        .on('pointerdown', () => {
            this.getRiverAction().call();
        });
    }

    getRiverText() {
        if(!this.hasItem('clean spoon')) {
            return "A nice clear stream";
        } else if(!this.hasItem('avocado (eaten)')) {
            return "I don't have the energy to cross this.";
        } else {
            return "Let's do this";
        }
    }

    getRiverAction() {
        if(!this.hasItem('clean spoon')) {
            return () => {
                this.waddleTo(this.richard, { x: 800, y: this.h-300 }, 750, 100, () => {
                    this.loseItem('dirty spoon');
                    this.spoon = this.add.sprite(800, this.h-400, 'spoon')
                        .setScale(5)
                        .setInteractive()
                    this.waddleTo(this.spoon, { x: 1000, y: this.h-400 }, 1000, 100, () => {
                        this.waddleTo(this.spoon, { x: 800, y: this.h-400 }, 1000, 100, () => {
                            this.gainItem('clean spoon')
                            this.spoon.destroy();
                        });
                    });
                })
            }
        } else if(!this.hasItem('avocado (eaten)')) {
            return () => {

            }
        } else {
            return () => {
                this.waddleTo(this.richard, {x: 1300, y: this.h-400}, 1000, 100, () => {
                    this.gotoScene('room3')
                    this.waddleTo(this.richard, {x: 1300*2, y: (this.h-400)*2}, 1000, 100, () => {
                    });
                });
            }
        }
    }
}