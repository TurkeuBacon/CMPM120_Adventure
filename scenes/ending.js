class Ending extends Phaser.Scene
{
    constructor()
    {
        super('ending')
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('ending_background', 'EndingBackground.png');
    }

    create()
    {

        this.add.image(0, 0, 'ending_background').setOrigin(0, 0);

        this.richard = this.add.sprite(300, 900, 'richard').setOrigin(0.5, 1).setScale(5);
        this.spoon = this.add.sprite(400, 900, 'spoon').setOrigin(0.5, 1).setScale(5);

        this.input.once('pointerdown', () => {
            this.scene.start('IntroScene');
        });
    }

    update()
    {
        
    }
}