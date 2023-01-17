

export default function filteredResults(data) {
    return (req, res, next) => {
        const countryFilter = req.query.country;
        const categoryFilter = req.query.category;

        const resultSet = new Set();

        let filtedByCountry = [];
        let filtedByCategory = [];
        let filtedByCountryAndCategory = [];

        if (countryFilter && !categoryFilter) {
            filtedByCountry = data.filter(elem => elem.country.toLowerCase() === countryFilter.toLowerCase());
        }

        if (categoryFilter && !countryFilter) {
            filtedByCategory = data.filter(elem => elem.category.toLowerCase() === categoryFilter.toLowerCase());
        }

        if (categoryFilter && countryFilter) {
            filtedByCountryAndCategory = data.filter(elem => (elem.category.toLowerCase() === categoryFilter.toLowerCase()) && (elem.country.toLowerCase() === countryFilter.toLowerCase()));
        }

        if (countryFilter || categoryFilter) {
            filtedByCountry.concat(filtedByCategory).concat(filtedByCountryAndCategory).forEach(elem => resultSet.add(elem));
            
            // save result object to response object
            res.filteredResults = Array.from(resultSet);
        
        } else {
            // save result object to response object
            res.filteredResults = data;
        }

        // tell express to proceed
        next();
    };
};