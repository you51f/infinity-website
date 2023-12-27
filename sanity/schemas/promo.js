export default {
    name: 'promo',
    title: 'Promo Codes',
    type: 'document',
    fields: [
        { 
            name: 'name',
            title: 'Code',
            type: 'string',
          },
          { 
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'discount',
            title: 'Discount in %',
            type: 'number',
          },
      
      
    ]
  } 