class Room1 extends AdventureScene
{
    constructor() {
        super("Room1", "Cave Entrance");
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('room1_background', 'Room1.png');
        this.load.spritesheet('rocks', 'Rocks.png', {frameWidth: 50, frameHeight: 50});
        this.load.image('spoon', 'Spoon.png');
    }

    onEnter()
    {
        // this.gotoScene('room2')
        this.screenEdge = this.w * .75;
        this.add.image(this.screenEdge, 0, 'room1_background')
            .setScale(5)
            .setOrigin(1, 0)
            .setDepth(-1);
        this.richard = this.add.sprite(200, this.h-75, 'richard')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Richard"));
        this.rockSprites = [
            this.add.sprite(this.screenEdge-100, 300, 'rocks', 0).setScale(5).setDepth(-1),
            this.add.sprite(this.screenEdge-170, 450, 'rocks', 1).setScale(5).setDepth(-1),
            this.add.sprite(this.screenEdge-70, 500, 'rocks', 2).setScale(5).setDepth(-1),
            this.add.sprite(this.screenEdge-50, 200, 'rocks', 3).setScale(5).setDepth(-1),
            this.add.sprite(this.screenEdge-150, 600, 'rocks', 2).setScale(5).setDepth(-1),
            this.add.sprite(this.screenEdge-30, 650, 'rocks', 0).setScale(5).setDepth(-1)
        ];
        for(let i = 0; i < this.rockSprites.length; i++)
        {
            console.log(i);
            this.rockSprites[i]
                .setInteractive()
                .on('pointerover', () => {
                    this.shakeObject(this.rockSprites)
                    this.showMessage("A rock pile blocking your way");
                })
                .on('pointerdown', () => {
                    if(this.hasItem('spoon'))
                    {
                        this.loseItem('spoon');
                        this.waddleTo(this.richard, {x:this.w*0.75-300, y:500}, 1000, 100, ()=>{
                            for(let i = 0; i < this.rockSprites.length; i++)
                            {
                                let randAngle = (Math.random() * Math.PI * 2);
                                this.add.tween({
                                    targets: this.rockSprites[i],
                                    x: Math.sin(randAngle) * 2000,
                                    y: Math.cos(randAngle) * 2000,
                                    ease: Phaser.Math.Easing.Quadratic.InOut
                                });
                                this.gotoScene('room2');
                            }
                        });
                    }
                });
        }
        this.spoon = this.add.sprite(500, 500, 'spoon')
            .setScale(5)
            .setInteractive()
            .on('pointerover', ()=>{
                this.shakeObject(this.spoon);
                this.showMessage('A Spoon. It sort of looks like a small shovel');
            })
            .on('pointerdown', ()=>{
                this.waddleTo(this.richard, this.spoon, 1000, 100, ()=>{
                    this.gainItem('spoon');
                    this.spoon.destroy();
                })
            });
        // this.waddleTo(this.richard, {x: 500, y: 500}, 1000, 100);
    }
}