import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

type Vehicle = "buss" | "train" | "tram" | "buss-station" | "train-station" | "tram-station"

@Entity()
export class Issue extends BaseEntity {
  @Property()
  description!: string;

  @Property()
  vehicle!: Vehicle
}
