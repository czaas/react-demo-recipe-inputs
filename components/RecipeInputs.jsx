var RecipeInputs = React.createClass({
	render: function(){
		return (
			<div className="bothForms">
				<form name="recipeNameForm">
					<InputField name="recipeName">Recipe Name</InputField>
				</form>
				<form name="stepForm">
					<InputField name="step">Add Step</InputField>
					<InputField name="instructions">Instructions</InputField>
					<InputField name="timer">Timer 10:30 minutes:seconds</InputField>
					<button>Add Step</button>
				</form>
				<form name="ingredientForm">
					<InputField name="name">Ingredient Name</InputField>
					<InputField name="qty">Ingredient Quantity</InputField>
					
					<button>Add Ingredient</button>
				</form>
			</div>
		)
	}
})