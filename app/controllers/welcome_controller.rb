class WelcomeController < ApplicationController

	def index
		@teams = NBA::Stats::Team.get_teams
	end


end