class Api::V1::NbaController < ApplicationController

	def teams
		@team = NBA::Stats::Team.get_teams
		respond_to do |format|
			format.html	{ redirect_to "/"}
			format.json	{ render :json => @team }
			format.xml  { render xml: @team.to_xml }
		end
	end

	def team_roster
		@team = NBA::Roster.get_team_roster(params[:id])
		@name = NBA::Stats::Team.get_team_by_id(params[:id].to_i)
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => [@team, @name] }
			format.xml  { render xml: @team.to_xml }
    end
	end

  def player
		@player = NBA::Player.get_player(params[:id])
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @player }
			format.xml  { render xml: @player.to_xml }
    end
	end

	def games
		@games = NBA::Game.get_games(params[:date])
		respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @games }
			format.xml  { render xml: @games.to_xml }
    end
	end

	def play_by_play
		@plays = NBA::PlayByPlay.get_plays_for_game(params[:game_id],params[:start_period],params[:end_period])
		respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @plays }
			format.xml  { render xml: @plays.to_xml }
    end
	end

end