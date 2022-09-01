import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

type Vehicle = "bus" | "train" | "tram" | "bus-station" | "train-station" | "tram-station"

@Entity()
export class Issue extends BaseEntity {
  @Property()
  description!: string;

  @Property()
  vehicle!: Vehicle
}
