const statusFilter = () => {
  return function(status) {
    if (status == null) {
      return (adverts = []);
    }
    if (status === "CANCELLED") {
        return "Annulé"
    } else {
        return "Terminé"
    }
  };
};

export default statusFilter;
