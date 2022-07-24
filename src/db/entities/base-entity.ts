import {
  Entity,
  Property,
  PrimaryKey,
  UuidType,
  DateTimeType
} from '@mikro-orm/core';

@Entity()
export class BaseEntity  {

  @PrimaryKey()
  id!: UuidType;

  @Property()
  created!: DateTimeType;
}