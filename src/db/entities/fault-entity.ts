import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

interface Vehicle {
  types: "buss" | "train" | "tram"
}

@Entity()
export class Fault extends BaseEntity {
  @Property()
  faultDescription!: string;

  @Property()
  vehicle!: Vehicle["types"]
}