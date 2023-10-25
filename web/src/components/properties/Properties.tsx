import { SyntheticEvent, useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import PropertiesService from '../../services/properties.service';
import './Properties.css';

interface IProperty {
  id: string;
  title: string;
  images: {href: string}[];
  location: {city: string, country: string};
  labels: string[];
  price: number;
}

const Properties = () => {

  const [ properties, setProperties ] = useState<IProperty[] | null>();
  const [ propertiesCount, setPropertiesCount ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(0);
  const itemsPerPage = 12;
  
  const fetchProperties = async (page: number) => {
    try {
      setProperties(null)
      const { data } = await PropertiesService.fetchAll({page, limit: itemsPerPage});
      const { properties, total_records } = data.data;
      setProperties(properties)
      setPropertiesCount(total_records)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage])


  const getPrice = (property: IProperty) => {
    return Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'CZK',
      maximumSignificantDigits: 3,
    }).format(property.price);
  }
  const pageCount = Math.ceil(propertiesCount / itemsPerPage);
  const handlePageClick = (event: {selected: number}) => {
    setCurrentPage(event.selected)
  };
  const onImgError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = 'https://picsum.photos/id/1/200/300'  
  }

  return (
    <>
      {properties  ? (
        <div className="properties-container">
          <div className="row mb-4">
            {properties.map((item) => (
              <div className="col-md-3 g-3 property-item" key={item.id}>
                <div className="card">
                  <img
                    onError={onImgError}
                    src={item.images[0].href}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="text-secondary">
                      {item.location.city}, {item.location.country}
                    </h6>
                    <h6>{getPrice(item)}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
          <div className="col-12">
            <ReactPaginate
              nextLabel="next >"
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              forcePage={currentPage}
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
          </div>
        </div>
      ) : (
        <div className="row text-center">
          <div className="col-12">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h6>Loading Properties....</h6>
          </div>
        </div>
      )}
    </>
  );
}

export default Properties;