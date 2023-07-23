class IntroScene extends Phaser.Scene
{
    constructor()
    {
        super('IntroScene')
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('richard', 'placeholder.png');
    }

    create()
    {
        this.richard = this.add.sprite(30, 30, 'richard');
    }

    update()
    {
        
    }
}