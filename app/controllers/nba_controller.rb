class NbaController < ApplicationController

	def team_roster
		@team = NBA::Roster.get_team_roster(params[:id])
    respond_to do |format|
      format.html	{ render template: "nba/team_roster"}
      format.json	{ render :json => @team }
    end
	end

  def player
		@player = NBA::Player.get_player(params[:id])
    respond_to do |format|
      format.html	{ render template: "nba/player"}
      format.json	{ render :json => @player }
    end
	end


end