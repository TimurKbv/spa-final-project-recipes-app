// locals
import paginatedResults from "./pagination.js";
import morgan from "morgan"
import cors from "cors"
import data from "./data.js";
import config from "./config.js";
import recipes from "./recipes.js";


// express
import express from 'express';
import bodyParser from "body-parser";

// validator
import { body } from "express-validator";
import filteredResults from "./filter.js";

const app = express();

// allow serving static content
app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json());

// allow cors request
app.use(cors());

// to log received requests
// from morgan doc:
/* 
    default - Standard output.
    short - Shorter than default, also including response time.
    tiny - The minimal.
    dev - Concise output colored by response status for development use.
*/
app.use(morgan("tiny"));



// get all recipes with filter
app.get('/recipes', filteredResults(data), recipes.getRecipes);

// get paginated recipes with filter
app.get('/recipes/paginate', filteredResults(data), paginatedResults(), recipes.getPaginatedRecipes);

// get single recipe entity by ID
app.get('/recipes/:id', recipes.getRecipeById);

// get all possible countries
app.get('/countries', recipes.getAllCountries);

// get all possible categories
app.get('/categories', recipes.getAllCategories);

// add new recipe entity
app.post(
  '/recipes', 

  body('id').not().exists().withMessage('Field not allowed'),

  body('title').exists().withMessage('Missing field'),
  body('title').isString().withMessage('Must be string'),
  body('title').notEmpty().withMessage('Must not be empty'),

  body('category').exists().withMessage('Missing field'),
  body('category').isString().withMessage('Must be string'),
  body('category').notEmpty().withMessage('Must not be empty'),

  body('country').exists().withMessage('Missing field'),
  body('country').isString().withMessage('Must be string'),
  body('country').notEmpty().withMessage('Must not be empty'),

  body('description').exists().withMessage('Missing field'),
  body('description').isString().withMessage('Must be string'),
  body('description').notEmpty().withMessage('Must not be empty'),

  body('picture').exists().withMessage('Missing field'),
  body('picture').isURL({require_tld: false}).withMessage('Must be a valid URL'),

  body('procedure').exists().withMessage('Missing field'),
  body('procedure').isString().withMessage('Must be string'),
  body('procedure').notEmpty().withMessage('Must not be empty'),

  body('cooktime').exists().withMessage('Missing field'),
  body('cooktime').isInt({ min: 1 }).withMessage('Must be an integer greater than 0'),
  body('cooktime').not().isString().withMessage('Must be a number'),

  body('ingredients').exists().withMessage('Missing field'),
  body('ingredients').isArray().withMessage('Must be an array'),
  body('ingredients').notEmpty().withMessage('Must not be empty'),
  body('ingredients.*').isString().withMessage('Must be string'),

  recipes.postNewRecipe
);

// update existing recipe entity by ID
app.put(
  '/recipes/:id', 

  body('id').not().exists().withMessage('Field not allowed'),

  // body('id').exists().withMessage('Missing field'),
  // body('id').isInt({ min: 1 }).withMessage('Must be an integer greater than 0'),
  // body('id').not().isString().withMessage('Must be a number'),

  body('title').exists().withMessage('Missing field'),
  body('title').isString().withMessage('Must be string'),
  body('title').notEmpty().withMessage('Must not be empty'),

  body('category').exists().withMessage('Missing field'),
  body('category').isString().withMessage('Must be string'),
  body('category').notEmpty().withMessage('Must not be empty'),

  body('country').exists().withMessage('Missing field'),
  body('country').isString().withMessage('Must be string'),
  body('country').notEmpty().withMessage('Must not be empty'),

  body('description').exists().withMessage('Missing field'),
  body('description').isString().withMessage('Must be string'),
  body('description').notEmpty().withMessage('Must not be empty'),

  body('picture').exists().withMessage('Missing field'),
  body('picture').isURL({require_tld: false}).withMessage('Must be a valid URL'),

  body('procedure').exists().withMessage('Missing field'),
  body('procedure').isString().withMessage('Must be string'),
  body('procedure').notEmpty().withMessage('Must not be empty'),

  body('cooktime').exists().withMessage('Missing field'),
  body('cooktime').isInt({ min: 1 }).withMessage('Must be an integer greater than 0'),
  body('cooktime').not().isString().withMessage('Must be a number'),

  body('ingredients').exists().withMessage('Missing field'),
  body('ingredients').isArray().withMessage('Must be an array'),
  body('ingredients').notEmpty().withMessage('Must not be empty'),
  body('ingredients.*').isString().withMessage('Must be string'),
  
  recipes.putRecipe
);

// delete existing recipe by it's ID
app.delete('/recipes/:id', recipes.deleteRecipe);


// Server properties
const port = config.port;
const baseUrl = `${config.url}:${config.port}`;
app.listen(port, () => {
  console.log("Service endpoint = %s", baseUrl);
});
