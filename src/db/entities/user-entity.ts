import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

@Entity()
export class User extends BaseEntity {
  @Property()
  email!: string;

  @Property()
  password!: string;
}