const advertBookingFilter = () => {
  return function(adverts, address) {
    if (adverts == null) {
      return (adverts = []);
    }
    let filteredAdverts = adverts.filter(advert => {
      return address.formatted_address === advert.addressDeparture;
    });
    return filteredAdverts;
  };
};

export default advertBookingFilter;
