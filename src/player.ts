import { Actor, CollisionType, Color, vec } from "excalibur";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 0),
      width: 200,
      height: 20,
      color: Color.Chartreuse,
    });
    this.body.collisionType = CollisionType.Fixed;
  }
}
