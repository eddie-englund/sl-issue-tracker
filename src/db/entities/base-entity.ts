import {
  Entity,
  Property,
  PrimaryKey,
  DateTimeType,
  UuidType
} from '@mikro-orm/core';

@Entity()
export class BaseEntity  {

  @PrimaryKey({ type: UuidType })
  id!: String;

  @Property({ type: DateTimeType })
  created!: Date;
}