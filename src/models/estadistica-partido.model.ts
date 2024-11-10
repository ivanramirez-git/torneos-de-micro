import {Entity, model, property} from '@loopback/repository';

@model()
export class EstadisticaPartido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    default: 0,
  })
  goles?: number;

  @property({
    type: 'number',
    default: 0,
  })
  faltas?: number;

  @property({
    type: 'string',
  })
  sanciones?: string;

  @property({
    type: 'number',
    default: 0,
  })
  tarjetasAzules?: number;

  @property({
    type: 'number',
    default: 0,
  })
  tarjetasAmarillas?: number;

  @property({
    type: 'number',
    default: 0,
  })
  tarjetasRojas?: number;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  createdAt?: string;


  constructor(data?: Partial<EstadisticaPartido>) {
    super(data);
  }
}

export interface EstadisticaPartidoRelations {
  // describe navigational properties here
}

export type EstadisticaPartidoWithRelations = EstadisticaPartido & EstadisticaPartidoRelations;