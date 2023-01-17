import data, { addNewRecipe, editRecipe, removeRecipe } from "./data.js";
import { validationResult } from "express-validator";

function getRecipes(req, res) {
    res.json(res.filteredResults);
}


function getPaginatedRecipes(req, res) {
    res.json(res.paginatedResults);
}

function getRecipeById(req, res) {
    const recipeId = parseInt(req.params.id);

    const entry = data.find(recipe => recipe.id === recipeId);

    if (!entry) {
        res.status(404).json({
            error: `Recipe with ID ${recipeId} has not been found`
        });

    } else {
        res.json(entry);
    }
}

function postNewRecipe(req, res) {
    const body = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const entry = addNewRecipe(body);

    res.json(entry);
}

function putRecipe(req, res) {
    const id = parseInt(req.params.id);
    const body = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const entry = editRecipe(id, body);

    if (!entry) {
        res.status(404).json({
            error: `Recipe with ID ${id} has not been found`
        });

    } else {
        res.json(entry);
    }
}

function deleteRecipe(req, res) {
    const id = parseInt(req.params.id);

    const isDeleted = removeRecipe(id);

    if (!isDeleted) {
        res.status(404).json({
            error: `Recipe with ID ${id} has not been found`
        });

    } else {
        res.sendStatus(200);
    }
}


function getAllCountries(req, res) {
    const countries = new Set();

    data.forEach(entry => countries.add(entry.country));

    res.json(Array.from(countries));
}

function getAllCategories(req, res) {
    const categories = new Set();

    data.forEach(entry => categories.add(entry.category));

    res.json(Array.from(categories));
}



const recipes = {
    getRecipes,
    getPaginatedRecipes,
    getRecipeById,
    postNewRecipe,
    putRecipe,
    deleteRecipe,
    getAllCountries,
    getAllCategories
};

export default recipes;