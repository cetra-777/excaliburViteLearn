import { Actor, CollisionType, Color, vec } from "excalibur";

export class Ball extends Actor {
  constructor() {
    super({
      pos: vec(100, 300),
      radius: 10,
      color: Color.Red,
    });
    this.body.collisionType = CollisionType.Passive;
  }
}
