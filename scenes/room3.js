class Room3 extends AdventureScene
{
    constructor()
    {
        super('room3', 'Bottomless Pit Chamber');
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('room3_background', 'Room3.png')
    }

    onEnter()
    {
        this.progress = 0;
        this.add.image(0, 0, 'room3_background').setOrigin(0, 0).setScale(1).setDepth(-2);
        this.richard = this.add.sprite(200, 625, 'richard')
            .setOrigin(0.5, 1)
            .setScale(5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Richard"));
        
            this.rocks = [
                this.add.sprite(650, 610, 'rocks', 0).setScale(5).setDepth(-1),
                this.add.sprite(875, 510, 'rocks', 3).setScale(5).setDepth(-1),
                this.add.sprite(1100, 400, 'rocks', 2).setScale(5).setDepth(-1)
            ]
            for (let i = 0; i < this.rocks.length; i++) {
                let rock = this.rocks[i];
                rock.setInteractive()
                    .on('pointerover', () => {
                        this.showMessage(this.getRockMessage(i))
                        this.shakeObject(rock)
                    })
                    .on('pointerdown', () => {
                        this.getRockAction(i).call()
                    })
            };
    }
    
    getRockMessage(index) {
        if(index < this.progress) {
            return "I can't turn back now"
        } else if(index == this.progress) {
            return "One.. Step... at a time.. (Oh boy)"
        } else {
            return "That's too far out of reach"
        }
    }

    getRockAction(index) {
        if(index == this.progress) {
            return () => {
                this.waddleTo(this.richard, {x: this.rocks[index].x, y: this.rocks[index].y}, 500, 100, () => {
                    this.progress++;
                    if(this.progress == 3) {
                        this.fall()
                    }
                })
            }
        } else {
            return () => {

            }
        }
    }

    fall() {
        this.ejectItem("dirty spoon", this.spoon = this.add.sprite(0, 0, 'spoon').setScale(5), {x: this.richard.x, y: this.richard.y});
        this.showMessage("AAAAHHHHHHHHH!!!!!!");
        this.add.tween({
            targets: this.rocks[this.rocks.length-1],
            y: this.h+500,
            duration: 500
        });
        this.add.tween({
            targets: this.richard,
            angle: 359,
            duration: 300,
            repeat: -1
        });
        this.add.tween({
            targets: this.richard,
            y: this.h+300,
            duration: 1000,
            onComplete: () => {
                this.gotoScene('room4')
            }
        });
    }
}