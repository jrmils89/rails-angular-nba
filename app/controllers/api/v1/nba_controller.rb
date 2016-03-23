class Api::V1::NbaController < ApplicationController

	def teams
		@team = NBA::Stats::Team.get_teams
		respond_to do |format|
			format.html	{ redirect_to "/"}
			format.json	{ render :json => @team }
		end
	end

	def team_roster
		@team = NBA::Roster.get_team_roster(params[:id])
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @team }
    end
	end

  def player
		@player = NBA::Player.get_player(params[:id])
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @player }
    end
	end


end