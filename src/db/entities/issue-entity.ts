import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

interface Vehicle {
  types: "buss" | "train" | "tram"
}

@Entity()
export class Issue extends BaseEntity {
  @Property()
  description!: string;

  @Property()
  vehicle!: Vehicle["types"]
}