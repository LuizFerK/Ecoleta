import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import Point from './Point';
import Item from '@modules/Items/infra/typeorm/entities/Item';

@Entity('point_items')
class PointItems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  point_id: string;

  @ManyToOne(() => Point, point => point.point_items)
  @JoinColumn({ name: 'point_id' })
  point: Point;

  @Column()
  item_id: string;

  @ManyToOne(() => Item, item => item.point_items, {
    eager: true,
  })
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PointItems;
