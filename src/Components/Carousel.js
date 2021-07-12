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
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       
    )
}
export default HomeCarousel