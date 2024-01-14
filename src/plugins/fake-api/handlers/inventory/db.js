export const db = {
  defaultUom: [
    {
      name: 'Kilogram',
      code: 'KG',
      description: 'Unit to measure weights',
      status: 'Active',
    },
    {
      name: 'Liter',
      code: 'L',
      description: 'Unit to measure capacity',
      status: 'Active',
    },
    {
      name: 'Meter',
      code: 'M',
      description: 'Unit to measure Lengths',
      status: 'Active',
    },
    {
      name: 'Mun',
      code: 'MUN',
      description: 'Unit to measure weights',
      status: 'Active',
    },
    {
      name: 'Ton',
      code: 'TON',
      description: 'Unit to measure weights',
      status: 'Active',
    },
    {
      name: 'Gallon',
      code: 'GLN',
      description: 'Unit to measure capacity',
      status: 'Active',
    },
    {
      name: 'foot',
      code: 'FT',
      description: 'Unit to measure Lengths',
      status: 'Active',
    },
  ],
  MultiUom: [
    {
      name: 'Weight Measuring Conversions',
      code: 'WMC',
      defaultUom: 'KG',
      description: 'Unit Conversions to measure weights',
      conversion: [
        {
          defaultUom: 'KG',
          DefaultUomQty: 40,
          alternateUom: 'MUN',
          alternateUomQty: 1,
          status: 'Active',
        },
        {
          defaultUom: 'KG',
          DefaultUomQty: 1000,
          alternateUom: 'TON',
          alternateUomQty: 1,
          status: 'Active',
        },
      ],
      status: 'Active',
    },
    {
      name: 'Capacity Measuring Conversions',
      code: 'CMC',
      defaultUom: 'L',
      description: 'Unit Conversions to measure Capacity',
      conversion: [
        {
          defaultUom: 'L',
          DefaultUomQty: 3.785,
          alternateUom: 'GLN',
          alternateUomQty: 1,
          status: 'Active',
        },
      ],
      status: 'Active',
    },
    {
      name: 'Length Measuring Conversions',
      code: 'LMC',
      defaultUom: 'M',
      description: 'Unit Conversions to measure Lengths',
      conversion: [
        {
          defaultUom: 'M',
          DefaultUomQty: 0.3048,
          alternateUom: 'FT',
          alternateUomQty: 1,
          status: 'Active',
        },
      ],
      status: 'Active',
    },
  ],
}
