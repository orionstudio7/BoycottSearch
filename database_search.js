var database_module = angular.module("database_search")
.controller(function DatabaseSearchController($http)
{
	this.brand = "";
	this.company = "";
	this.found = false;
}
)
.component('searchBar',{
	templateUrl: 'templates/searchterms.template.html',
	controller: [ '$http',function ($http) {

		//important for http functions and their scope
		var self = this;
		this.items = [];

		this.reasons = "";
		this.sources = [];

		this.reset = function()
		{
			console.log("Reset");
			this.items = [];
		}
		//searches the trademark database for the 
		//requested brand 
		this.search = function(company, brand)
		{
			url = "./Assets/" + company + ".json";
			console.log(this.company);

			//makes sure to not perform a search 
			//if the parameters won't be successful
			if(company.length>0 && brand.length>0)
			{
				
				$http.get(url).success(function(data, status, headers, config) {
					//scope uses self vs this
					self.items= data;

					//makes sure the search successfully picked up the trademarks
					if(self.items)
						{
							self.found = false;

							//searches database for the brand
							for(i = 0; i < self.items.length; i++)
							{
								searchedBrand = self.items[i].Brand;
				
								//makes sure brand isnt empty
								if(searchedBrand.length > 0)
								{

									if(searchedBrand.toLowerCase() == brand.toLowerCase())
									{
										self.found = true;
										self.get_boycott();
										break;
									}
								} 
							}
		
						}
					// // $scope.items.push(data);
	
				}).error(function(data, status, headers, config) {
					console.log(status);
					return;
				});

	
	

			}

		}


		//fires if the brand is involved in the boycott
		this.get_boycott = function()
		{
			//searches the boycott database
			$http.get('Assets/boycott_yes.json').then(function(response) {

				console.log(response.data.length);
				for(i = 0; i<response.data.length; i++)
				{
					item = response.data[i]
					if(item.company_name == self.company)
					{
						//sets the yes-boycott template model data
						console.log(item.source)
						self.reasons = item.reasons;
						self.sources = item.sources;
					}
				}
			});
		}



	
}]})