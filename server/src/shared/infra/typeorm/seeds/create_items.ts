import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Item from '@modules/Items/infra/typeorm/entities/Item';

export default class CreateItems implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Item)
      .values([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
      ])
      .execute()
  }
}
