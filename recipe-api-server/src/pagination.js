

export default function paginatedResults() {
    // middleware function
    return (req, res, next) => {
      const data = res.filteredResults;

      // pagination params
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const totalElements = data.length;
      const totalPages = Math.ceil( totalElements / size );
  
      // calculating the starting and ending index
      const startIndex = (page - 1) * size;
      const endIndex = page * size;
  
      // extract requested content
      const content = data.slice(startIndex, endIndex);
      
      // build result object
      const result = {
        content: content,
        totalElements: totalElements,
        totalPages: totalPages,
        page: page,
        size: size
      };
  
      // save result object to response object
      res.paginatedResults = result;

      // tell express to proceed
      next();
    };
};