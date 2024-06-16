export default{
    name:'header',
    title:'Header',
    type: 'document',
    fields:[
        {
            name:'portfolioImage',
            title:'portfolioImage',
            type: 'image',
            options: {
              hotspot: false,
            },
        },
        {
            name:'StackImage1',
            title:'StackImage1',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'StackImage2',
            title:'StackImage2',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'StackImage3',
            title:'StackImage3',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'DevName',
            title:'DevName',
            type:'string'
        }
    ]
}