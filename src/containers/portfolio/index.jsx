import react, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import TechHubimg from '../images/TechHub.png';
import myntra from '../images/Myntra.png';
import Pocket from '../images/Pockate.png';
import Restro from '../images/Restro.png';
import Movie from '../images/Movie.png';
import portfolio from '../images/portfolio.png';
import '../portfolio/styles.scss'


const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Full Stack Projects'
    },
    {
        filterId: 3,
        label: 'Web Developement Projects'
    },


]
const portfolioData = [
    {
        id: 2,
        name: "Movie Management App",
        image: Movie,
        link: 'https://github.com/Sumesh-Shinde/MovieHallManagement'
    },
    {
        id: 2,
        name: "Tech-Hub",
        image: TechHubimg,
        link: 'https://github.com/Sumesh-Shinde/PockateCafe'
    },
    {
        id: 3,
        name: "Myntra Clone",
        image: myntra,
        link: 'https://github.com/Sumesh-Shinde/Myntra-Clone'
    },
    {
        id: 3,
        name: "Pocket Cafe",
        image: Pocket,
        link: 'https://github.com/Sumesh-Shinde/PockateCafe'
    },
    {
        id: 2,
        name: "Restaurant Menu & Ordering System",
        image: Restro,
        link: 'https://github.com/Sumesh-Shinde/Online-Restaurant-Menu-Ordering-System'
    },
    {
        id: 3,
        name: "Portfolio Website",
        image: portfolio,
        link: 'https://github.com/Sumesh-Shinde/portfolio-sumesh'
    },
]
const Portfolio = () => {

    const [filteredvalue, setFilteredValue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };


    function handleHover(index) {
        setHoveredValue(index)
    }



    console.log('====================');
    console.log(hoveredValue)
    console.log('====================');


    const filteredItems = filteredvalue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredvalue)

    console.log(filteredItems)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item" key={`cardItems${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                {/* <button>Github</button> */}
                                                <button onClick={() => window.open(item.link, "_blank")}>GitHub</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;