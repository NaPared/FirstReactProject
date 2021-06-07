import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pdf from "./Willy Pete’s Pizzeria.pdf";
import {SocialIcon} from 'react-social-icons';

const plainPizza = {
    topping: 'Plain',
    description: 'Your run of the mill slice of New York’s finest',
    price: '$1.25'
}

const pepperoniPizza = {
    topping: 'Pepperoni',
    description: 'It’s like the plain one, just with pepperoni',
    price: '$1.25'
}

const sausagePizza = {
    topping: 'Sausage',
    description: 'It’s like the pepperoni one, just with sausage',
    price: '$1.25'
}

const mushroomPizza = {
    topping: 'Mushroom',
    description: 'Pizza with mushrooms. I mean I can understand the hype',
    price: '$1.25'
}

const buffaloChickenPizza = {
    topping: 'Buffalo Chicken',
    description: 'Grilled chicken with buffalo sauce and blue cheese dressing. Perfect for those who want both wings and pizza',
    price: '$1.75'
}

const margheritaPizza = {
    topping: 'Margherita',
    description: 'Neapolitan pizza with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil. If you’re into that',
    price: '$1.75'
}

const veggiePizza = {
    topping: 'Veggie',
    description: 'Fresh spinach, roasted red peppers, red onions, basil pesto sauce, goat cheese and mozzarella',
    price: '$1.75'
}

const baconCheeseburgerPizza = {
    topping: 'Bacon Cheeseburger',
    description: 'It’s the flavor of a cheese burger... on a pizza. This is as American as it gets',
    price: '$2.25'
}

const theReubenPizza = {
    topping: 'The Reuben',
    description: 'Thousand Island dressing, Steak, and Sauerkraut with a four cheese blend. It’s like the reuben sandwich just on pizza crust',
    price: '$2.25'
}

const thePorkyPizza = {
    topping: 'The Porky',
    description: 'BBQ Sauce, pulled pork, and pepper jack cheese. Sounds to good to be true doesn’t it',
    price: '$2.25'
}

function App(){
    return (
        <body>
            <div>
                <div>
                    <BannerImage/>
                </div>
            </div>
            <div className='menu-block'>
                <h1 className='menuHeader'>
                    <a href={Pdf} target='_blank' className='menuLink' rel='noreferrer'>Our Menu</a>
                </h1>
                <h3 className='customer-favorites-text'>Customer's Favorites</h3>
                <h3 className='specialties-text'>The Specials</h3>
                <section className='favorites'>
                    <div className='menuItems'>
                        <Pizza 
                        topping={plainPizza.topping}
                        description={plainPizza.description}
                        price={plainPizza.price}
                        />
                        <Pizza
                        topping={pepperoniPizza.topping}
                        description={pepperoniPizza.description}
                        price={pepperoniPizza.price}
                        />
                        <Pizza
                        topping={sausagePizza.topping}
                        description={sausagePizza.description}
                        price={sausagePizza.price}
                        />
                        <Pizza
                        topping={mushroomPizza.topping}
                        description={mushroomPizza.description}
                        price={mushroomPizza.price}
                        />
                        <Pizza
                        topping={buffaloChickenPizza.topping}
                        description={buffaloChickenPizza.description}
                        price={buffaloChickenPizza.price}
                        />
                        <Pizza
                        topping={margheritaPizza.topping}
                        description={margheritaPizza.description}
                        price={margheritaPizza.price}
                        />
                        <Pizza
                        topping={veggiePizza.topping}
                        description={veggiePizza.description}
                        price={veggiePizza.price}
                        />
                    </div>
                </section>
                <section className='specialties'>
                    <div className='specialItems'>
                        <Pizza
                        topping={baconCheeseburgerPizza.topping}
                        description={baconCheeseburgerPizza.description}
                        price={baconCheeseburgerPizza.price}
                        />
                        <Pizza
                        topping={theReubenPizza.topping}
                        description={theReubenPizza.description}
                        price={theReubenPizza.price}
                        />
                        <Pizza
                        topping={thePorkyPizza.topping}
                        description={thePorkyPizza.description}
                        price={thePorkyPizza.price}
                        />
                    </div>
                </section>
            </div>
            <div>
                <div class="main_div">
                    <div class="sub_div">
                        <p class="icon-para"> 
                        <h5 className='followText'>Follow us on social media!</h5>
                            ReactDOM.render(<SocialIcon url="https://instagram.com" target='__blank' fgColor='white'/>, <SocialIcon url="https://twitter.com" target='__blank' fgColor='white'/>, <SocialIcon url='https://youtube.com/' target='__blank' fgColor='white'/>, <SocialIcon url="https://facebook.com" target='__blank' fgColor='white'/>document.body);
                        </p>
                    </div>
                </div>
            </div>

        </body>
    )
}

const BannerImage = () =>(
    <div>
        <HeaderBanner/>
        <div className='imageBanner'>
            <div className='image-banner-overlay'>
                <div className='pageCenter'>
                    <div className='bannerText'>
                        <p className='bannerMainText'>
                            <h1 className='pizzaName'>Willy Pete's Pizzeria</h1><br/>
                            Take-Out or Delivery?<br/>
                            Call Us
                            <p className='phone'>
                                Telephone: (973) 350-1077
                                <p className='address'>
                                    207 W Market, Newark, NJ
                                </p>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const HeaderBanner = () =>(
    <div className='headerBanner'>
        <div className='header-banner-overlay'>
            <p className='header-text'>Sale: $5.50 for 2 large slices and a canned beverage</p>
        </div>
    </div>
)


const Pizza = (props) => {
    return (
        <article className='pizza'>
            <h3>{props.topping}</h3>
            <h4>{props.description}</h4>
            <h5>{props.price}</h5>
        </article>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));