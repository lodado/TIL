import {Media} from 'reactstrap';

function Menu(props){

    let state = {
        dishes : [
            {
                id: 0,
                name:'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'   },
             {
                id: 1,
                name:'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
             {
                id: 2,
                name:'Vadonut',
                image: 'assets/images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
             {
                id: 3,
                name:'ElaiCheese Cake',
                image: 'assets/images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
            }
            ]
    }

    const menu= state.dishes.map((ele)=>{
        return(
                //list 같은거 작성시 key가 필요하다. 
                <div key={ele.id} className="col-12 mt-5">

                    <Media tag="li">
                        <Media left middle>
                            <Media object src={ele.image} alt={ele.name}></Media>
                        </Media>

                        <Media body className="ml-5">
                            <Media heading>
                                {ele.name}
                            </Media>

                            <p>{ele.description}</p>
                        </Media>
                    </Media>
                </div>
        )
    });

    return(
        <div className="container">

            <div className="row">
                <Media list>
                    {menu}
                </Media>
            </div>
        </div>
    );
}

export default Menu;
