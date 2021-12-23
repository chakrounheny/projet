


const init = {
    products : [
        { 
            cat:"epice",
            img:"http://www.made-in-tunisia.net/_medias_files/logo_item/27669_carvi_moulu.jpg",
            id :Math.random(),
            des:"Carvi", 
            price:1.5,
            qa:"350 gr ",
            },
            { 
                cat:"epice",
                img:"http://www.made-in-tunisia.net/_medias_files/logo_item/27672_corete.jpg",
            id :Math.random() ,
            des:"Feuilles de corète" ,
            price:2 ,
            qa:"180g" ,
            },
            { 
                cat:"epice",
                img:"http://www.made-in-tunisia.net/_medias_files/logo_item/27678_coriandre_parfu.jpg",
            id :Math.random() ,
            des:"Coriandre ", 
            price:2.5 ,
            qa:"50gr" ,
            },
            { 
                cat:"epice",
                img:"http://www.made-in-tunisia.net/_medias_files/logo_item/27680_cumin_moulu.jpg",
            id :Math.random() ,
            des:"Cumin " ,
            price:3 ,
            qa:"400gr" ,
            },
            { 
                cat:"epice",
            img:"http://www.made-in-tunisia.net/_medias_files/logo_item/27677_curcuma_moulu.jpg",
            id :Math.random() ,
            des:"Curcuma " ,
            price:3.5 ,
            qa:"450 gr",
            },
            
        {
            cat:"saveur",
            img:"https://www.webdo.tn/wp-content/uploads/2020/10/zgougou.jpg",
            id :Math.random() ,
            des:"Zgougou " ,
            price:3.5 ,
            qa:"450 gr",
        },
        {
            cat:"saveur",
        img:"https://littlerock.com.mt/wp-content/uploads/2015/03/Sweet-red-peppers-300x225.jpg",
        id :Math.random() ,
        des:"felfel ahmar " ,
        price:3.5 ,
        qa:"450 gr",}

            
    ]
}

const reducer=(state=init,action) =>{

    return state
}


export default reducer;