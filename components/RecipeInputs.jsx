var RecipeInputs = React.createClass({
	render: function(){
		return (
			<div className="bothForms">
				<form action="" name="stepForm">
					<input type="text" name="recipeName" placeholder="Recipe Name"/>
					<input type="text" name="step" placeholder="Add Step"/>
					<input type="text" name="timer" placeholder="Timer 10:30 minutes:seconds"/>
					<button>Add Step</button>
				</form>
				<form action="" name="ingredientForm">
					<input type="text" name="name" placeholder="Ingredient Name"/>
					<input type="text" name="qty" placeholder="Ingredient Quantity"/>
					<input type="text" name="step" placeholder="Add Ingredient"/>
					<button>Add Ingredient</button>
				</form>
			</div>
		)
	}
})