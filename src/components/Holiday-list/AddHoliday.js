import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddHoliday({ onChangeVal }) {
  const [formValues, setFormValues] = useState({
    packageName: '',
    packageSlug: '',
    startingPriceStandard: '',
    startingPriceDeluxe: '',
    startingPriceLuxury: '',
    country: 'Sint Maarten (Dutch part)',
    city: '',
    holidayPromotion: '',
    metaRobots: 'INDEX, FOLLOW',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section className="vendor-balance card p-4">
      <div className='card-body'>
        <h3> Add Holiday </h3>
        
        <form>
          {/* Holiday Package Information */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Package Name</label>
                <input type="text" name="packageName" className="form-control" value={formValues.packageName} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Package Slug</label>
                <input type="text" name="packageSlug" className="form-control" value={formValues.packageSlug} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Starting Price Standard</label>
                <input type="number" name="startingPriceStandard" className="form-control" value={formValues.startingPriceStandard} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Starting Price Deluxe</label>
                <input type="number" name="startingPriceDeluxe" className="form-control" value={formValues.startingPriceDeluxe} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Starting Price Luxury</label>
                <input type="number" name="startingPriceLuxury" className="form-control" value={formValues.startingPriceLuxury} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Country</label>
                <select name="country" className="form-control" value={formValues.country} onChange={handleInputChange}>
                  <option>Sint Maarten (Dutch part)</option>
                  {/* Add more country options as needed */}
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" className="form-control" value={formValues.city} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label>Holiday Promotion</label>
                <input type="text" name="holidayPromotion" className="form-control" value={formValues.holidayPromotion} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Holiday Themes */}
          <div className="form-group mt-3">
            <label>Holiday Themes</label>
            <div className="row">
              {['Solo Tour', 'Adventure', 'Weekend gateway', 'Wildlife', 'Family Tours', 'Luxury', 'Groups/Friends', 'Spiritual Trips', 'Honeymoon', 'Beach'].map((theme) => (
                <div className="col-md-3" key={theme}>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id={theme} />
                    <label className="form-check-label" htmlFor={theme}>{theme}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Details */}
          <div className="form-group mt-4">
            <h5>SEO Details</h5>
            <div className="row">
              <div className="col-md-4">
                <label>Meta Robots</label>
                <select name="metaRobots" className="form-control" value={formValues.metaRobots} onChange={handleInputChange}>
                  <option>INDEX, FOLLOW</option>
                  <option>NOINDEX, NOFOLLOW</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>Meta Title</label>
                <input type="text" name="metaTitle" className="form-control" value={formValues.metaTitle} onChange={handleInputChange} />
              </div>

              <div className="col-md-4">
                <label>Meta Description</label>
                <input type="text" name="metaDescription" className="form-control" value={formValues.metaDescription} onChange={handleInputChange} />
              </div>

              <div className="col-md-4 mt-2">
                <label>Meta Keywords</label>
                <input type="text" name="metaKeyword" className="form-control" value={formValues.metaKeyword} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="submit" className="btn btn-secondary ml-2">Save & Continue</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddHoliday;
