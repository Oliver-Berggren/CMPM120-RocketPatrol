//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture, frame, pointValue) {
		super(scene, x, y, texture, frame);
		scene.add.existing(this) //Add to existing scene, displayList, updateList
		//store pointValue
		this.points = pointValue;
	}

	update() {
		//Move spaceship left
		this.x -= game.settings.spaceshipSpeed;
		//Wrap around from left to right edge
		if (this.x <= 0-this.width) {
			this.reset();
		}
	}

	reset() {
		this.x = game.config.width;
	}

}