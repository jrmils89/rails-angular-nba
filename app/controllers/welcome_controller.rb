class WelcomeController < ApplicationController

	def index
		@games = NBA::Game.get_games('20160317')
		respond_to do |format|
			format.html	{ render template: "welcome/index"}
			format.json	{ render :json => @games }
		end
	end


end