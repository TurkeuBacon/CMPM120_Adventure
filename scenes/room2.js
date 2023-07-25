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
    }

    onEnter()
    {
        this.add.image(0, 0, 'room2_background').setOrigin(0, 0).setScale(5).setDepth(-1);
        this.add.image()
    }
}