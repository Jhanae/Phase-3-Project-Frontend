import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel (){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://isteam.wsimg.com/ip/d45e5b8d-7587-4669-88b9-fb08da2cb37a/ols/124_original/:/rs=w:600,h:600"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Escovitch Fish</h3>
                <p>This Escovitch fish recipe is crispy fried fish topped with a spicy pickled vegetable medley. It it a must try!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://thepupusas.files.wordpress.com/2017/09/pupusas1.jpg?w=640"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Salvadoran Pupusas Revueltas</h3>
                <p>El Salvadorian treat, consisting of thick corn tortillas stuffed with cheese, beans, and/or pork. They are easy to make at home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://thereadersbureau.com/wp-content/uploads/2015/12/curry-goat1.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Jamaican Curry Mutton</h3>
                <p>Jamaican Curry Goat – insanely delicious slow-cooked Jamaican Spiced Curry that is full of flavor and tender to the bone! An absolutely must-make Jamaican food!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ca-times.brightspotcdn.com/dims4/default/4af0bfe/2147483647/strip/true/crop/1080x608+0+56/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F94%2Fe8%2F35310c59b61edea9c4296f3caeea%2Fdims4-default-3b62e24-2147483647-strip-true-crop-3712x2475-0-0-resize-1080x720-quality-90"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Nigerian Jollof</h3>
                <p>Nigerian Jollof Rice or Jellof rice is a rich and incredibly tasty west African one-pot Meal. It is a very versatile dish, and it is usually made from scratch using Rice, Tomatoes, Pimento peppers, Tomato paste, Scotch bonnet, Onions, Salt, and other spices.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       
    )
}
export default HomeCarousel