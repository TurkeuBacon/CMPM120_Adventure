class IntroScene extends Phaser.Scene
{
    constructor()
    {
        super('IntroScene')
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('intro_background', 'IntroBackground.png');
        this.load.image('title_text', 'title.png')
        this.load.image('richard', 'Richard.png');
    }

    create()
    {
        this.screenSize = {
            width: this.sys.game.canvas.width,
            height: this.sys.game.canvas.height
        }

        this.add.image(0, 0, 'intro_background').setScale(5).setOrigin(0, 0);
        this.add.image(450, 200, 'title_text').setScale(7);

        this.clickToStart = this.add.text(450, 400, "click to start", {
            'fontSize': '40px',
            'color': '#ffffff',
            'align': 'center',
            'fontStyle': 'bold'
        }).setOrigin(0.5, 1).setScale(1);
        let blinking = this.add.tween({
            targets: this.clickToStart,
            yoyo: true,
            repeatDelay: 750,
            hold: 500,
            duration: 0,
            alpha: 0,
            repeat: -1
        });

        this.richard = this.add.sprite(200, this.screenSize.height-75, 'richard').setOrigin(0.5, 1).setScale(5);
        let fadeOutRect = this.add.rectangle(0, 0, this.screenSize.width, this.screenSize.height, '#000000', 1).setOrigin(0, 0);
        fadeOutRect.setAlpha(0);

        this.input.once('pointerdown', () => {
            blinking.remove();
            this.clickToStart.setAlpha(0);

            this.add.tween({
                targets: this.richard,
                duration: 3000,
                x: this.screenSize.width
            });
            this.add.tween({
                targets: this.richard,
                duration: 250,
                angle: -15,
                ease: Phaser.Math.Easing.Quadratic.Out,
                onComplete: ()=>{
                    this.add.tween({
                        targets: this.richard,
                        duration: 250,
                        angle: 15,
                        ease: Phaser.Math.Easing.Quadratic.InOut,
                        yoyo: true,
                        repeat: -1
                    });
                }
            })

            this.add.tween({
                targets: fadeOutRect,
                duration: 1500,
                alpha: 1,
                onComplete: ()=>{
                    //Load Next Scene
                }
            });
        });
    }

    update()
    {
        
    }
}