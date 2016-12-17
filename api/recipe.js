"use strict";
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var Recipe = mongoose.model('Recipe', {
    Recipe: {
        type: String,
    },
});
router.post('/recipe', function (req, res) {
    var newRecipe = new Recipe({
        recipe: req.body.recipe
    });
    request('http://food2fork.com/api/search?key=75cf831690ffc9d6e14a46dd5b3c8c13&q=' + req.body.recipe, function (error, response, body) {
        console.log(body);
        var recipe = JSON.parse(body);
        if (recipe.name === req.body.recipe) {
            res.send(recipe);
        }
        else {
            console.log(error);
            res.send({ message: 'recipe not found' });
        }
    });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBcUM7QUFDckMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHakMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7SUFDcEMsTUFBTSxFQUFDO1FBQ0wsSUFBSSxFQUFDLE1BQU07S0FDWjtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7SUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUU7UUFDeEIsTUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtLQUN6QixDQUFDLENBQUE7SUFDRixPQUFPLENBQUMseUVBQXlFLEdBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQy9GLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUE7UUFDeEMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFHTCxpQkFBUyxNQUFNLENBQUMifQ==